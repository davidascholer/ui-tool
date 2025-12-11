import { useState, useEffect, useRef } from 'react';
import { Activity, BarChart3, Clock, Zap, CheckCircle, X } from 'lucide-react';
import { hierarchyLogger } from '../../../utils/hierarchyLogger';
import { useHierarchyLogger } from '../../../hooks/useHierarchyLogger';

/**
 * Performance metric data structure for dashboard display
 */
interface PerformanceMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'good' | 'warning' | 'error';
  trend?: 'up' | 'down' | 'stable';
  timestamp: number;
}

/**
 * System health indicator data
 */
interface HealthIndicator {
  component: string;
  status: 'healthy' | 'degraded' | 'failed';
  lastUpdate: number;
  message?: string;
}

/**
 * Real-time chart data point
 */
interface ChartDataPoint {
  timestamp: number;
  value: number;
  label: string;
}

/**
 * Performance monitoring dashboard component providing real-time visibility
 * into hierarchy system performance, update metrics, and system health
 */
export function PerformanceMonitoringDashboard({ 
  isVisible = true,
  position = 'bottom-right',
  compact = false
}: {
  isVisible?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  compact?: boolean;
}) {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [healthStatus, setHealthStatus] = useState<HealthIndicator[]>([]);
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const [isMinimized, setIsMinimized] = useState(compact);
  const [selectedTab, setSelectedTab] = useState<'metrics' | 'health' | 'charts'>('metrics');
  
  const updateIntervalRef = useRef<number>(null);
  const { logPerformance } = useHierarchyLogger({ componentName: 'PerformanceDashboard' });

  // Performance metrics calculations
  useEffect(() => {
    const calculateMetrics = () => {
      const entries = hierarchyLogger.getEntries();
      const now = Date.now();
      const fiveMinutesAgo = now - 5 * 60 * 1000; // 5 minutes ago
      
      // Filter recent entries for calculations
      const recentEntries = entries.filter(entry => entry.timestamp > fiveMinutesAgo);
      const performanceEntries = recentEntries.filter(entry => entry.category === 'performance');
      const errorEntries = recentEntries.filter(entry => entry.level === 'error');
      const hierarchyEntries = recentEntries.filter(entry => entry.category === 'hierarchy');
      
      // Calculate update frequency (updates per minute)
      const updateFrequency = hierarchyEntries.length / 5;
      
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
      
      // Memory usage (if available)
      const memoryInfo = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      const memoryUsage = memoryInfo ? memoryInfo.usedJSHeapSize / (1024 * 1024) : 0; // MB
      
      // Response time (synthetic metric based on performance entries)
      const responseTimes = performanceEntries
        .filter(entry => entry.message.includes('render'))
        .map(entry => entry.data?.duration as number)
        .filter(duration => typeof duration === 'number');
      const avgResponseTime = responseTimes.length > 0
        ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
        : 0;

      const newMetrics: PerformanceMetric[] = [
        {
          id: 'update-frequency',
          name: 'Update Frequency',
          value: Math.round(updateFrequency * 10) / 10,
          unit: '/min',
          status: updateFrequency > 10 ? 'warning' : updateFrequency > 20 ? 'error' : 'good',
          trend: 'stable',
          timestamp: now
        },
        {
          id: 'avg-update-time',
          name: 'Avg Update Time',
          value: Math.round(avgUpdateTime * 100) / 100,
          unit: 'ms',
          status: avgUpdateTime > 100 ? 'error' : avgUpdateTime > 50 ? 'warning' : 'good',
          trend: 'stable',
          timestamp: now
        },
        {
          id: 'error-rate',
          name: 'Error Rate',
          value: Math.round(errorRate * 100) / 100,
          unit: '%',
          status: errorRate > 5 ? 'error' : errorRate > 1 ? 'warning' : 'good',
          trend: errorRate > 2 ? 'up' : 'stable',
          timestamp: now
        },
        {
          id: 'response-time',
          name: 'Response Time',
          value: Math.round(avgResponseTime * 100) / 100,
          unit: 'ms',
          status: avgResponseTime > 200 ? 'error' : avgResponseTime > 100 ? 'warning' : 'good',
          trend: 'stable',
          timestamp: now
        }
      ];

      // Add memory usage if available
      if (memoryUsage > 0) {
        newMetrics.push({
          id: 'memory-usage',
          name: 'Memory Usage',
          value: Math.round(memoryUsage * 100) / 100,
          unit: 'MB',
          status: memoryUsage > 100 ? 'error' : memoryUsage > 50 ? 'warning' : 'good',
          trend: 'stable',
          timestamp: now
        });
      }

      setMetrics(newMetrics);

      // Update chart data
      const newDataPoint: ChartDataPoint = {
        timestamp: now,
        value: avgUpdateTime || 0,
        label: new Date(now).toLocaleTimeString()
      };
      
      setChartData(prev => {
        const updated = [...prev, newDataPoint];
        // Keep only last 20 data points
        return updated.slice(-20);
      });

      // Update health status
      const newHealthStatus: HealthIndicator[] = [
        {
          component: 'Hierarchy System',
          status: errorRate > 5 ? 'failed' : errorRate > 1 ? 'degraded' : 'healthy',
          lastUpdate: now,
          message: errorRate > 5 ? 'High error rate detected' : undefined
        },
        {
          component: 'Update Engine',
          status: avgUpdateTime > 200 ? 'degraded' : 'healthy',
          lastUpdate: now,
          message: avgUpdateTime > 200 ? 'Slow update performance' : undefined
        },
        {
          component: 'Property Indicators',
          status: updateFrequency > 20 ? 'degraded' : 'healthy',
          lastUpdate: now,
          message: updateFrequency > 20 ? 'High update frequency' : undefined
        }
      ];

      setHealthStatus(newHealthStatus);

      // Log dashboard update performance
      const calculationStart = performance.now();
      const calculationEnd = performance.now();
      logPerformance('dashboard-update', calculationStart, calculationEnd, {
        metricsCalculated: newMetrics.length,
        entriesProcessed: recentEntries.length
      });
    };

    // Initial calculation
    calculateMetrics();

    // Set up interval for real-time updates
    updateIntervalRef.current = setInterval(calculateMetrics, 2000); // Update every 2 seconds

    return () => {
      if (updateIntervalRef.current) {
        clearInterval(updateIntervalRef.current);
      }
    };
  }, [logPerformance]);

  // Position classes for dashboard
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  // Status color classes
  const statusClasses = {
    good: 'text-green-600 bg-green-50 border-green-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    error: 'text-red-600 bg-red-50 border-red-200',
    healthy: 'text-green-600',
    degraded: 'text-yellow-600',
    failed: 'text-red-600'
  };

  // Trend icons
  const trendIcons = {
    up: '↗',
    down: '↘',
    stable: '→'
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={`
        fixed ${positionClasses[position]} z-50 
        bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg
        max-w-md transition-all duration-300 ease-in-out
        ${isMinimized ? 'w-12 h-12' : 'w-96'}
      `}
      role="complementary"
      aria-label="Performance monitoring dashboard"
    >
      {isMinimized ? (
        // Minimized view - just the activity icon
        <button
          onClick={() => setIsMinimized(false)}
          className="w-full h-full flex items-center justify-center hover:bg-gray-50 rounded-lg transition-colors"
          aria-label="Expand performance dashboard"
        >
          <Activity className="w-5 h-5 text-blue-600" />
        </button>
      ) : (
        // Full dashboard view
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-semibold text-gray-900">Performance Monitor</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 s rounded-full animate-pulse" aria-hidden="true" />
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
                aria-label="Minimize dashboard"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-4">
            {[
              { id: 'metrics', label: 'Metrics', icon: BarChart3 },
              { id: 'health', label: 'Health', icon: CheckCircle },
              { id: 'charts', label: 'Charts', icon: Activity }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as 'metrics' | 'health' | 'charts')}
                  className={`
                    flex items-center gap-1 px-3 py-2 text-xs font-medium border-b-2 transition-colors
                    ${selectedTab === tab.id 
                      ? 'border-blue-500 text-blue-600' 
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }
                  `}
                  aria-selected={selectedTab === tab.id}
                  role="tab"
                >
                  <Icon className="w-3 h-3" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="space-y-3">
            {selectedTab === 'metrics' && (
              <div className="space-y-2">
                {metrics.map(metric => (
                  <div 
                    key={metric.id}
                    className={`
                      p-3 rounded border text-xs
                      ${statusClasses[metric.status]}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{metric.name}</span>
                      <div className="flex items-center gap-1">
                        <span className="font-mono font-bold">
                          {metric.value}{metric.unit}
                        </span>
                        {metric.trend && (
                          <span className="text-xs opacity-70">
                            {trendIcons[metric.trend]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'health' && (
              <div className="space-y-2">
                {healthStatus.map(indicator => (
                  <div key={indicator.component} className="p-3 border rounded bg-gray-50">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-900">{indicator.component}</span>
                      <span className={`font-semibold ${statusClasses[indicator.status]}`}>
                        {indicator.status.toUpperCase()}
                      </span>
                    </div>
                    {indicator.message && (
                      <p className="text-xs text-gray-600 mt-1">{indicator.message}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      Last: {new Date(indicator.lastUpdate).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {selectedTab === 'charts' && (
              <div className="space-y-3">
                <div className="p-3 border rounded bg-gray-50">
                  <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    Update Time Trend
                  </h4>
                  <div className="flex items-end gap-1 h-16">
                    {chartData.slice(-10).map((point) => (
                      <div
                        key={point.timestamp}
                        className="flex-1 bg-blue-200 rounded-t transition-all duration-300"
                        style={{ 
                          height: `${Math.max((point.value / Math.max(...chartData.map(p => p.value), 1)) * 100, 2)}%`
                        }}
                        title={`${point.label}: ${point.value}ms`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>10 updates ago</span>
                    <span>Now</span>
                  </div>
                </div>

                <div className="text-xs text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <Zap className="w-3 h-3" />
                    Real-time monitoring active
                  </div>
                  <div className="text-gray-500">
                    Updates every 2 seconds • Data retained for 5 minutes
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PerformanceMonitoringDashboard;