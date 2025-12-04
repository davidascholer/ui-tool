/**
 * Performance Monitoring Hook for Feature 004
 * Ensures hierarchy updates meet 200ms response time requirement
 */

import { useCallback, useRef } from 'react';

export interface PerformanceMetrics {
  startTime: number;
  endTime: number;
  duration: number;
  operation: string;
  entityId: string;
  changeCount: number;
}

export interface UsePerformanceMonitoringReturn {
  startMeasurement: (operation: string, entityId: string, changeCount?: number) => string;
  endMeasurement: (measurementId: string) => PerformanceMetrics;
  getMetrics: () => PerformanceMetrics[];
  clearMetrics: () => void;
  checkPerformanceRequirement: (duration: number) => {
    meetsRequirement: boolean;
    threshold: number;
    recommendation?: string;
  };
}

interface ActiveMeasurement {
  startTime: number;
  operation: string;
  entityId: string;
  changeCount: number;
}

/**
 * Hook for monitoring performance of hierarchy update operations
 * Ensures all operations complete within 200ms requirement
 */
export function usePerformanceMonitoring(): UsePerformanceMonitoringReturn {
  const activeMeasurementsRef = useRef<Map<string, ActiveMeasurement>>(new Map());
  const completedMetricsRef = useRef<PerformanceMetrics[]>([]);
  
  /**
   * Check if duration meets performance requirements
   */
  const checkPerformanceRequirement = useCallback((duration: number) => {
    const PERFORMANCE_THRESHOLD = 200; // 200ms requirement
    const WARNING_THRESHOLD = 150; // Warning at 150ms
    const meetsRequirement = duration <= PERFORMANCE_THRESHOLD;
    
    let recommendation: string | undefined;
    
    if (duration > PERFORMANCE_THRESHOLD) {
      recommendation = 'Consider optimizing change batching or reducing visual indicator complexity.';
    } else if (duration > WARNING_THRESHOLD) {
      recommendation = 'Performance approaching threshold - monitor for optimization opportunities.';
    }
    
    return {
      meetsRequirement,
      threshold: PERFORMANCE_THRESHOLD,
      recommendation
    };
  }, []);
  
  /**
   * Start measuring performance for a hierarchy operation
   */
  const startMeasurement = useCallback((operation: string, entityId: string, changeCount = 1): string => {
    const measurementId = `${operation}-${entityId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const startTime = performance.now();
    
    activeMeasurementsRef.current.set(measurementId, {
      startTime,
      operation,
      entityId,
      changeCount
    });
    
    // Use Performance API for precise timing
    performance.mark(`hierarchy-start-${measurementId}`);
    
    return measurementId;
  }, []);

  /**
   * End measurement and calculate duration
   */
  const endMeasurement = useCallback((measurementId: string): PerformanceMetrics => {
    const endTime = performance.now();
    const measurement = activeMeasurementsRef.current.get(measurementId);
    
    if (!measurement) {
      throw new Error(`No active measurement found for ID: ${measurementId}`);
    }

    // Use Performance API for precise measurement
    performance.mark(`hierarchy-end-${measurementId}`);
    performance.measure(
      `hierarchy-measure-${measurementId}`,
      `hierarchy-start-${measurementId}`,
      `hierarchy-end-${measurementId}`
    );

    const duration = endTime - measurement.startTime;
    
    const metrics: PerformanceMetrics = {
      startTime: measurement.startTime,
      endTime,
      duration,
      operation: measurement.operation,
      entityId: measurement.entityId,
      changeCount: measurement.changeCount
    };

    // Store completed metrics
    completedMetricsRef.current.push(metrics);
    
    // Clean up active measurement
    activeMeasurementsRef.current.delete(measurementId);
    
    // Log performance warning if exceeds threshold
    const requirement = checkPerformanceRequirement(duration);
    if (!requirement.meetsRequirement) {
      console.warn(
        `Performance requirement violated: ${measurement.operation} took ${duration.toFixed(2)}ms ` +
        `(threshold: ${requirement.threshold}ms) for entity ${measurement.entityId} with ${measurement.changeCount} changes.` +
        (requirement.recommendation ? ` ${requirement.recommendation}` : '')
      );
    } else {
      console.log(
        `Performance OK: ${measurement.operation} completed in ${duration.toFixed(2)}ms ` +
        `for entity ${measurement.entityId} (${measurement.changeCount} changes)`
      );
    }
    
    return metrics;
  }, [checkPerformanceRequirement]);

  /**
   * Get all completed performance metrics
   */
  const getMetrics = useCallback((): PerformanceMetrics[] => {
    return [...completedMetricsRef.current];
  }, []);

  /**
   * Clear all stored metrics (useful for testing or memory management)
   */
  const clearMetrics = useCallback(() => {
    completedMetricsRef.current = [];
    
    // Clean up Performance API entries
    try {
      performance.clearMarks();
      performance.clearMeasures();
    } catch (error) {
      console.warn('Could not clear performance marks/measures:', error);
    }
  }, []);

  return {
    startMeasurement,
    endMeasurement,
    getMetrics,
    clearMetrics,
    checkPerformanceRequirement
  };
}

/**
 * Higher-order function to wrap operations with performance monitoring
 */
export function withPerformanceMonitoring<T extends (...args: unknown[]) => unknown>(
  operation: T,
  operationName: string,
  monitor: UsePerformanceMonitoringReturn
): T {
  return ((...args: unknown[]) => {
    const entityId = (args[0] as { entityId?: string })?.entityId || String(args[0]) || 'unknown';
    const changeCount = Array.isArray(args[1]) ? args[1].length : 1;
    
    const measurementId = monitor.startMeasurement(operationName, entityId, changeCount);
    
    try {
      const result = operation(...args);
      
      // Handle both sync and async operations
      if (result && typeof result === 'object' && 'then' in result && typeof (result as { then: unknown }).then === 'function') {
        return (result as Promise<unknown>).finally(() => {
          monitor.endMeasurement(measurementId);
        });
      } else {
        monitor.endMeasurement(measurementId);
        return result;
      }
    } catch (error) {
      monitor.endMeasurement(measurementId);
      throw error;
    }
  }) as T;
}