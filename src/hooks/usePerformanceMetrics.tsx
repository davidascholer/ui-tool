import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { hierarchyLogger } from '../utils/hierarchyLogger';

/**
 * Performance monitoring configuration
 */
interface PerformanceConfig {
  /** Enable/disable monitoring */
  enabled?: boolean;
  /** Update interval in milliseconds */
  updateInterval?: number;
  /** How long to keep metrics in milliseconds */
  retentionPeriod?: number;
  /** Performance thresholds for warnings/errors */
  thresholds?: {
    updateTime?: { warning: number; error: number };
    errorRate?: { warning: number; error: number };
    updateFrequency?: { warning: number; error: number };
    responseTime?: { warning: number; error: number };
    memoryUsage?: { warning: number; error: number };
  };
}

/**
 * Real-time performance metrics data
 */
export interface PerformanceMetrics {
  updateFrequency: number; // updates per minute
  avgUpdateTime: number;   // average update duration in ms
  errorRate: number;       // error rate as percentage
  responseTime: number;    // average response time in ms
  memoryUsage?: number;    // memory usage in MB
  timestamp: number;
}

/**
 * Performance trend data
 */
export interface PerformanceTrend {
  metric: string;
  trend: 'up' | 'down' | 'stable';
  change: number; // percentage change
}

/**
 * System health status
 */
export interface SystemHealth {
  overall: 'healthy' | 'degraded' | 'failed';
  components: {
    [key: string]: {
      status: 'healthy' | 'degraded' | 'failed';
      message?: string;
      lastUpdate: number;
    };
  };
}

/**
 * Default performance monitoring configuration
 */
const DEFAULT_CONFIG: Required<PerformanceConfig> = {
  enabled: true,
  updateInterval: 2000, // 2 seconds
  retentionPeriod: 5 * 60 * 1000, // 5 minutes
  thresholds: {
    updateTime: { warning: 50, error: 100 },
    errorRate: { warning: 1, error: 5 },
    updateFrequency: { warning: 10, error: 20 },
    responseTime: { warning: 100, error: 200 },
    memoryUsage: { warning: 50, error: 100 }
  }
};

/**
 * Hook for monitoring real-time performance metrics
 */
export function usePerformanceMetrics(config: PerformanceConfig = {}) {
  const fullConfig = useMemo(() => ({ ...DEFAULT_CONFIG, ...config }), [config]);
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [trends, setTrends] = useState<PerformanceTrend[]>([]);
  const [health, setHealth] = useState<SystemHealth | null>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const previousMetricsRef = useRef<PerformanceMetrics | null>(null);

  const calculateMetrics = useCallback(() => {
    const currentConfig = { ...DEFAULT_CONFIG, ...config };
    if (!currentConfig.enabled) return;

    const entries = hierarchyLogger.getEntries();
    const now = Date.now();
    const cutoff = now - currentConfig.retentionPeriod;
    
    // Filter recent entries
    const recentEntries = entries.filter(entry => entry.timestamp > cutoff);
    const performanceEntries = recentEntries.filter(entry => entry.category === 'performance');
    const errorEntries = recentEntries.filter(entry => entry.level === 'error');
    const hierarchyEntries = recentEntries.filter(entry => entry.category === 'hierarchy');
    
    // Calculate update frequency (updates per minute)
    const timeWindowMinutes = currentConfig.retentionPeriod / (1000 * 60);
    const updateFrequency = hierarchyEntries.length / timeWindowMinutes;
    
    // Calculate average update duration
    const updateTimes = performanceEntries
      .map(entry => entry.data?.duration as number)
      .filter(duration => typeof duration === 'number');
    const avgUpdateTime = updateTimes.length > 0 
      ? updateTimes.reduce((sum, time) => sum + time, 0) / updateTimes.length
      : 0;
    
    // Calculate error rate
    const totalOperations = recentEntries.length;
    const errorRate = totalOperations > 0 ? (errorEntries.length / totalOperations) * 100 : 0;
    
    // Calculate response time (from render performance entries)
    const responseTimes = performanceEntries
      .filter(entry => entry.message.includes('render'))
      .map(entry => entry.data?.duration as number)
      .filter(duration => typeof duration === 'number');
    const responseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0;

    // Memory usage (if available)
    const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
    const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / (1024 * 1024) : undefined;

    const newMetrics: PerformanceMetrics = {
      updateFrequency,
      avgUpdateTime,
      errorRate,
      responseTime,
      memoryUsage,
      timestamp: now
    };

    // Calculate trends if we have previous metrics
    const newTrends: PerformanceTrend[] = [];
    if (previousMetricsRef.current) {
      const prev = previousMetricsRef.current;
      
      // Update frequency trend
      const freqChange = ((newMetrics.updateFrequency - prev.updateFrequency) / Math.max(prev.updateFrequency, 0.1)) * 100;
      newTrends.push({
        metric: 'updateFrequency',
        trend: Math.abs(freqChange) < 5 ? 'stable' : freqChange > 0 ? 'up' : 'down',
        change: freqChange
      });

      // Update time trend  
      const timeChange = ((newMetrics.avgUpdateTime - prev.avgUpdateTime) / Math.max(prev.avgUpdateTime, 0.1)) * 100;
      newTrends.push({
        metric: 'avgUpdateTime',
        trend: Math.abs(timeChange) < 10 ? 'stable' : timeChange > 0 ? 'up' : 'down',
        change: timeChange
      });

      // Error rate trend
      const errorChange = ((newMetrics.errorRate - prev.errorRate) / Math.max(prev.errorRate, 0.1)) * 100;
      newTrends.push({
        metric: 'errorRate',
        trend: Math.abs(errorChange) < 10 ? 'stable' : errorChange > 0 ? 'up' : 'down',
        change: errorChange
      });
    }

    // Calculate system health
    const components: SystemHealth['components'] = {
      'Hierarchy System': {
        status: errorRate > currentConfig.thresholds.errorRate!.error ? 'failed' 
              : errorRate > currentConfig.thresholds.errorRate!.warning ? 'degraded' 
              : 'healthy',
        message: errorRate > currentConfig.thresholds.errorRate!.error ? 'High error rate detected' : undefined,
        lastUpdate: now
      },
      'Update Engine': {
        status: avgUpdateTime > currentConfig.thresholds.updateTime!.error ? 'degraded'
              : avgUpdateTime > currentConfig.thresholds.updateTime!.warning ? 'degraded'
              : 'healthy',
        message: avgUpdateTime > currentConfig.thresholds.updateTime!.error ? 'Slow update performance' : undefined,
        lastUpdate: now
      },
      'Property Indicators': {
        status: updateFrequency > currentConfig.thresholds.updateFrequency!.error ? 'degraded' 
              : updateFrequency > currentConfig.thresholds.updateFrequency!.warning ? 'degraded'
              : 'healthy',
        message: updateFrequency > currentConfig.thresholds.updateFrequency!.error ? 'High update frequency' : undefined,
        lastUpdate: now
      }
    };

    // Add memory component if available
    if (memoryUsage !== undefined) {
      components['Memory Usage'] = {
        status: memoryUsage > currentConfig.thresholds.memoryUsage!.error ? 'failed'
              : memoryUsage > currentConfig.thresholds.memoryUsage!.warning ? 'degraded'
              : 'healthy',
        message: memoryUsage > currentConfig.thresholds.memoryUsage!.error ? 'High memory usage' : undefined,
        lastUpdate: now
      };
    }

    // Determine overall health
    const componentStatuses = Object.values(components).map(c => c.status);
    const overallHealth: SystemHealth['overall'] = 
      componentStatuses.some(s => s === 'failed') ? 'failed' :
      componentStatuses.some(s => s === 'degraded') ? 'degraded' : 'healthy';

    const newHealth: SystemHealth = {
      overall: overallHealth,
      components
    };

    // Update state
    setMetrics(newMetrics);
    setTrends(newTrends);
    setHealth(newHealth);
    previousMetricsRef.current = newMetrics;

  }, [config]);

  useEffect(() => {
    if (!fullConfig.enabled) return;

    // Set up interval
    intervalRef.current = Number(setInterval(calculateMetrics, fullConfig.updateInterval));

    // Use setTimeout to avoid eslint warning about setState in effect
    const timeoutId = setTimeout(calculateMetrics, 0);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(timeoutId);
    };
  }, [fullConfig.enabled, fullConfig.updateInterval, calculateMetrics]);

  return {
    metrics,
    trends,
    health,
    isEnabled: fullConfig.enabled,
    config: fullConfig
  };
}

/**
 * Hook for performance alerting based on thresholds
 */
export function usePerformanceAlerts(config: PerformanceConfig = {}) {
  const { metrics, health } = usePerformanceMetrics(config);
  
  const alerts = useMemo(() => {
    if (!metrics) return [];

    const alertList: Array<{
      id: string;
      level: 'warning' | 'error';
      message: string;
      timestamp: number;
      metric?: string;
      value?: number;
    }> = [];
    
    const thresholds = { ...DEFAULT_CONFIG.thresholds, ...config.thresholds };

    // Check each metric against thresholds
    if (metrics.avgUpdateTime > thresholds.updateTime!.error) {
      alertList.push({
        id: 'update-time-error',
        level: 'error',
        message: `Update time is critically high: ${metrics.avgUpdateTime.toFixed(1)}ms`,
        timestamp: metrics.timestamp,
        metric: 'avgUpdateTime',
        value: metrics.avgUpdateTime
      });
    } else if (metrics.avgUpdateTime > thresholds.updateTime!.warning) {
      alertList.push({
        id: 'update-time-warning',
        level: 'warning',
        message: `Update time is elevated: ${metrics.avgUpdateTime.toFixed(1)}ms`,
        timestamp: metrics.timestamp,
        metric: 'avgUpdateTime',
        value: metrics.avgUpdateTime
      });
    }

    if (metrics.errorRate > thresholds.errorRate!.error) {
      alertList.push({
        id: 'error-rate-error',
        level: 'error',
        message: `Error rate is critically high: ${metrics.errorRate.toFixed(1)}%`,
        timestamp: metrics.timestamp,
        metric: 'errorRate',
        value: metrics.errorRate
      });
    } else if (metrics.errorRate > thresholds.errorRate!.warning) {
      alertList.push({
        id: 'error-rate-warning',
        level: 'warning',
        message: `Error rate is elevated: ${metrics.errorRate.toFixed(1)}%`,
        timestamp: metrics.timestamp,
        metric: 'errorRate',
        value: metrics.errorRate
      });
    }

    if (metrics.updateFrequency > thresholds.updateFrequency!.error) {
      alertList.push({
        id: 'frequency-error',
        level: 'error',
        message: `Update frequency is critically high: ${metrics.updateFrequency.toFixed(1)}/min`,
        timestamp: metrics.timestamp,
        metric: 'updateFrequency',
        value: metrics.updateFrequency
      });
    }

    if (metrics.memoryUsage && metrics.memoryUsage > thresholds.memoryUsage!.error) {
      alertList.push({
        id: 'memory-error',
        level: 'error',
        message: `Memory usage is critically high: ${metrics.memoryUsage.toFixed(1)}MB`,
        timestamp: metrics.timestamp,
        metric: 'memoryUsage',
        value: metrics.memoryUsage
      });
    }

    return alertList;
  }, [metrics, config.thresholds]);

  return {
    alerts,
    hasErrors: alerts.some(a => a.level === 'error'),
    hasWarnings: alerts.some(a => a.level === 'warning'),
    systemHealth: health?.overall || 'healthy'
  };
}

/**
 * Simple hook to get current performance status
 */
export function usePerformanceStatus(config: PerformanceConfig = {}) {
  const { metrics, health } = usePerformanceMetrics(config);
  const { alerts, hasErrors, hasWarnings } = usePerformanceAlerts(config);

  return {
    isHealthy: health?.overall === 'healthy',
    isDegraded: health?.overall === 'degraded',
    hasFailed: health?.overall === 'failed',
    hasActiveAlerts: alerts.length > 0,
    hasErrors,
    hasWarnings,
    currentMetrics: metrics,
    alertCount: alerts.length
  };
}