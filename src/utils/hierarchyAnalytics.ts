/**
 * Hierarchy Analytics Tracker
 * Feature 004: Real-Time Hierarchy Updates - Phase 7 (T047)
 * Tracks hierarchy update performance metrics and user interaction patterns
 */

import type { AnalyticsEvent } from '../../api/controllers/analytics';
import { trackEvent } from '../../api/controllers/analytics';

// Hierarchy-specific analytics events
export interface HierarchyPerformanceEvent extends AnalyticsEvent {
  name: 'hierarchy_update_performance';
  properties: {
    /** Type of update that triggered the event */
    updateType: 'save' | 'realtime' | 'batch' | 'expansion' | 'filter';
    /** Time taken for the update in milliseconds */
    duration: number;
    /** Number of hierarchy items affected */
    itemCount: number;
    /** Whether the update was successful */
    success: boolean;
    /** Performance tier based on duration */
    performanceTier: 'excellent' | 'good' | 'acceptable' | 'poor';
    /** Additional context */
    context?: string;
  };
}

export interface HierarchyUserInteractionEvent extends AnalyticsEvent {
  name: 'hierarchy_user_interaction';
  properties: {
    /** Type of interaction */
    interactionType: 'expand' | 'collapse' | 'select' | 'hover' | 'keyboard_nav';
    /** Target item type */
    targetType: 'page' | 'container' | 'component';
    /** Depth level in hierarchy */
    depth: number;
    /** Whether the action used keyboard navigation */
    keyboardUsed?: boolean;
    /** Time spent on the interaction */
    interactionTime?: number;
  };
}

export interface HierarchyErrorEvent extends AnalyticsEvent {
  name: 'hierarchy_error';
  properties: {
    /** Error type */
    errorType: 'update_failure' | 'render_error' | 'performance_degradation' | 'state_corruption';
    /** Error message (sanitized) */
    errorMessage: string;
    /** Component where error occurred */
    component: string;
    /** Current hierarchy item count when error occurred */
    hierarchySize: number;
    /** Whether auto-recovery was attempted */
    autoRecoveryAttempted?: boolean;
  };
}

// Performance benchmarks (in milliseconds)
const PERFORMANCE_BENCHMARKS = {
  excellent: 100,  // Under 100ms - excellent
  good: 200,       // Under 200ms - good  
  acceptable: 500, // Under 500ms - acceptable
  poor: Infinity,  // Over 500ms - poor
} as const;

/**
 * Determine performance tier based on duration
 */
function getPerformanceTier(duration: number): 'excellent' | 'good' | 'acceptable' | 'poor' {
  if (duration < PERFORMANCE_BENCHMARKS.excellent) return 'excellent';
  if (duration < PERFORMANCE_BENCHMARKS.good) return 'good';
  if (duration < PERFORMANCE_BENCHMARKS.acceptable) return 'acceptable';
  return 'poor';
}

/**
 * Performance metrics aggregator for batch reporting
 */
class HierarchyPerformanceAggregator {
  private metrics: {
    updateType: string;
    duration: number;
    itemCount: number;
    timestamp: number;
  }[] = [];

  private readonly maxMetrics = 100;
  private readonly reportInterval = 30000; // 30 seconds
  private reportTimer?: number;

  constructor() {
    this.startPeriodicReporting();
  }

  /**
   * Add a performance metric to the aggregator
   */
  addMetric(updateType: string, duration: number, itemCount: number): void {
    this.metrics.push({
      updateType,
      duration,
      itemCount,
      timestamp: Date.now(),
    });

    // Limit metrics array size
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }
  }

  /**
   * Get performance statistics for the current metrics
   */
  getStatistics(): {
    averageDuration: number;
    medianDuration: number;
    p95Duration: number;
    totalUpdates: number;
    updateTypeBreakdown: Record<string, number>;
    performanceTrend: 'improving' | 'stable' | 'degrading';
  } {
    if (this.metrics.length === 0) {
      return {
        averageDuration: 0,
        medianDuration: 0,
        p95Duration: 0,
        totalUpdates: 0,
        updateTypeBreakdown: {},
        performanceTrend: 'stable',
      };
    }

    const durations = this.metrics.map(m => m.duration).sort((a, b) => a - b);
    const averageDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length;
    const medianDuration = durations[Math.floor(durations.length / 2)];
    const p95Duration = durations[Math.floor(durations.length * 0.95)];

    const updateTypeBreakdown = this.metrics.reduce((acc, m) => {
      acc[m.updateType] = (acc[m.updateType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Calculate performance trend (last 10 vs previous 10)
    let performanceTrend: 'improving' | 'stable' | 'degrading' = 'stable';
    if (this.metrics.length >= 20) {
      const recentMetrics = this.metrics.slice(-10);
      const previousMetrics = this.metrics.slice(-20, -10);
      
      const recentAvg = recentMetrics.reduce((sum, m) => sum + m.duration, 0) / recentMetrics.length;
      const previousAvg = previousMetrics.reduce((sum, m) => sum + m.duration, 0) / previousMetrics.length;
      
      if (recentAvg < previousAvg * 0.9) performanceTrend = 'improving';
      else if (recentAvg > previousAvg * 1.1) performanceTrend = 'degrading';
    }

    return {
      averageDuration,
      medianDuration,
      p95Duration,
      totalUpdates: this.metrics.length,
      updateTypeBreakdown,
      performanceTrend,
    };
  }

  /**
   * Start periodic reporting of aggregated metrics
   */
  private startPeriodicReporting(): void {
    if (this.reportTimer) return;

    this.reportTimer = window.setInterval(() => {
      this.reportAggregatedMetrics();
    }, this.reportInterval);
  }

  /**
   * Report aggregated performance metrics
   */
  private async reportAggregatedMetrics(): Promise<void> {
    if (this.metrics.length < 5) return; // Need at least 5 metrics to report

    const stats = this.getStatistics();
    
    await trackEvent({
      name: 'hierarchy_performance_summary',
      properties: {
        reportInterval: this.reportInterval,
        averageDuration: Math.round(stats.averageDuration * 100) / 100,
        medianDuration: stats.medianDuration,
        p95Duration: stats.p95Duration,
        totalUpdates: stats.totalUpdates,
        updateTypeBreakdown: stats.updateTypeBreakdown,
        performanceTrend: stats.performanceTrend,
        performanceTier: getPerformanceTier(stats.averageDuration),
      },
    });
  }

  /**
   * Clean up the aggregator
   */
  destroy(): void {
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
      this.reportTimer = undefined;
    }
    this.metrics = [];
  }
}

// Global performance aggregator instance
const performanceAggregator = new HierarchyPerformanceAggregator();

/**
 * Track hierarchy update performance with automatic aggregation
 */
export async function trackHierarchyPerformance(
  updateType: HierarchyPerformanceEvent['properties']['updateType'],
  duration: number,
  itemCount: number,
  success: boolean = true,
  context?: string
): Promise<void> {
  const performanceTier = getPerformanceTier(duration);
  
  // Add to aggregator for batch reporting
  performanceAggregator.addMetric(updateType, duration, itemCount);

  // Track individual event for critical performance issues
  if (performanceTier === 'poor' || !success) {
    await trackEvent({
      name: 'hierarchy_update_performance',
      properties: {
        updateType,
        duration: Math.round(duration * 100) / 100, // Round to 2 decimal places
        itemCount,
        success,
        performanceTier,
        context,
      },
    });
  }

  // Log performance issues in development
  if (import.meta.env.DEV && (performanceTier === 'poor' || !success)) {
    console.warn(`[HierarchyAnalytics] Performance issue: ${updateType} took ${duration}ms for ${itemCount} items (${performanceTier})`);
  }
}

/**
 * Track user interactions with hierarchy
 */
export async function trackHierarchyInteraction(
  interactionType: HierarchyUserInteractionEvent['properties']['interactionType'],
  targetType: HierarchyUserInteractionEvent['properties']['targetType'],
  depth: number,
  options: {
    keyboardUsed?: boolean;
    interactionTime?: number;
  } = {}
): Promise<void> {
  await trackEvent({
    name: 'hierarchy_user_interaction',
    properties: {
      interactionType,
      targetType,
      depth,
      keyboardUsed: options.keyboardUsed,
      interactionTime: options.interactionTime,
    },
  });
}

/**
 * Track hierarchy-related errors
 */
export async function trackHierarchyError(
  errorType: HierarchyErrorEvent['properties']['errorType'],
  errorMessage: string,
  component: string,
  hierarchySize: number,
  autoRecoveryAttempted: boolean = false
): Promise<void> {
  // Sanitize error message (remove sensitive data, limit length)
  const sanitizedMessage = errorMessage
    .replace(/['"]/g, '') // Remove quotes
    .substring(0, 100); // Limit length

  await trackEvent({
    name: 'hierarchy_error',
    properties: {
      errorType,
      errorMessage: sanitizedMessage,
      component,
      hierarchySize,
      autoRecoveryAttempted,
    },
  });

  // Log in development
  if (import.meta.env.DEV) {
    console.error(`[HierarchyAnalytics] Error tracked: ${errorType} in ${component} - ${sanitizedMessage}`);
  }
}

/**
 * Performance measurement utility for timing hierarchy operations
 */
export class HierarchyPerformanceTimer {
  private startTime: number;
  private readonly operation: string;

  constructor(operation: string) {
    this.operation = operation;
    this.startTime = performance.now();
  }

  /**
   * End the timer and automatically track the performance
   */
  end(
    updateType: HierarchyPerformanceEvent['properties']['updateType'],
    itemCount: number,
    success: boolean = true,
    context?: string
  ): void {
    const duration = performance.now() - this.startTime;
    trackHierarchyPerformance(updateType, duration, itemCount, success, context || this.operation);
  }

  /**
   * Get elapsed time without ending the timer
   */
  getElapsed(): number {
    return performance.now() - this.startTime;
  }
}

/**
 * Utility function to create and start a performance timer
 */
export function startPerformanceTimer(operation: string): HierarchyPerformanceTimer {
  return new HierarchyPerformanceTimer(operation);
}

/**
 * Get current performance statistics
 */
export function getPerformanceStatistics() {
  return performanceAggregator.getStatistics();
}

/**
 * Clean up analytics resources
 */
export function cleanup(): void {
  performanceAggregator.destroy();
}

export default {
  trackHierarchyPerformance,
  trackHierarchyInteraction,
  trackHierarchyError,
  HierarchyPerformanceTimer,
  startPerformanceTimer,
  getPerformanceStatistics,
  cleanup,
};