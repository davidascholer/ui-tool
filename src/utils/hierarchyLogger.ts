/**
 * Hierarchy Logging System
 * Feature 004: Real-Time Hierarchy Updates - T051
 * Comprehensive logging infrastructure for debugging hierarchy update issues
 */

// Environment detection utility
const isDevelopment = () => {
  return typeof window !== 'undefined' && 
         (window.location?.hostname === 'localhost' || 
          window.location?.hostname?.includes('dev'));
};

// Analytics stub - will be replaced with actual service in production
const analytics = {
  track: (event: string, properties?: Record<string, unknown>) => {
    // In development, log to console
    if (isDevelopment()) {
      console.log('[Analytics]', event, properties);
    }
    // In production, this would use the actual analytics service
  }
};

export type LogLevel = 'debug' | 'info' | 'warn' | 'error' | 'trace';
export type LogCategory = 
  | 'hierarchy'
  | 'performance' 
  | 'user_interaction'
  | 'state_management'
  | 'validation'
  | 'accessibility'
  | 'responsive'
  | 'persistence'
  | 'analytics'
  | 'system';

export interface LogContext {
  userId?: string;
  sessionId?: string;
  componentId?: string;
  hierarchyPath?: string[];
  timestamp?: number;
  environment?: 'development' | 'production' | 'test';
  buildVersion?: string;
  userAgent?: string;
  viewport?: {
    width: number;
    height: number;
    type: 'mobile' | 'tablet' | 'desktop';
  };
}

export interface LogEntry {
  level: LogLevel;
  category: LogCategory;
  message: string;
  context?: LogContext;
  data?: Record<string, unknown>;
  error?: Error;
  timestamp: number;
  stack?: string;
  performance?: {
    startTime?: number;
    endTime?: number;
    duration?: number;
    memory?: {
      used: number;
      total: number;
    };
  };
}

export interface LoggerConfig {
  enabled: boolean;
  level: LogLevel;
  categories: LogCategory[];
  maxEntries: number;
  enablePerformanceTracking: boolean;
  enableErrorStackTraces: boolean;
  enableConsoleOutput: boolean;
  enableAnalyticsReporting: boolean;
  rateLimiting: {
    enabled: boolean;
    maxPerMinute: number;
  };
  sanitization: {
    enabled: boolean;
    sensitiveFields: string[];
  };
}

/**
 * Default logging configuration
 */
const defaultConfig: LoggerConfig = {
  enabled: true,
  level: isDevelopment() ? 'debug' : 'info',
  categories: [
    'hierarchy',
    'performance',
    'user_interaction',
    'state_management',
    'validation',
    'accessibility',
    'responsive',
    'persistence',
    'analytics',
    'system'
  ],
  maxEntries: 1000,
  enablePerformanceTracking: true,
  enableErrorStackTraces: isDevelopment(),
  enableConsoleOutput: isDevelopment(),
  enableAnalyticsReporting: !isDevelopment(),
  rateLimiting: {
    enabled: true,
    maxPerMinute: 100
  },
  sanitization: {
    enabled: true,
    sensitiveFields: ['password', 'token', 'secret', 'key', 'email']
  }
};

/**
 * Log level priorities for filtering
 */
const LOG_LEVEL_PRIORITIES: Record<LogLevel, number> = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4
};

/**
 * Rate limiting tracker
 */
class RateLimiter {
  private counts = new Map<string, { count: number; resetTime: number }>();
  
  isAllowed(key: string, maxPerMinute: number): boolean {
    const now = Date.now();
    const entry = this.counts.get(key);
    
    if (!entry || now > entry.resetTime) {
      this.counts.set(key, { count: 1, resetTime: now + 60000 });
      return true;
    }
    
    if (entry.count >= maxPerMinute) {
      return false;
    }
    
    entry.count++;
    return true;
  }
  
  cleanup() {
    const now = Date.now();
    for (const [key, entry] of this.counts.entries()) {
      if (now > entry.resetTime) {
        this.counts.delete(key);
      }
    }
  }
}

/**
 * Data sanitization utilities
 */
class Sanitizer {
  private sensitiveFields: string[];
  
  constructor(sensitiveFields: string[]) {
    this.sensitiveFields = sensitiveFields;
  }
  
  sanitize(data: Record<string, unknown>): Record<string, unknown> {
    const sanitized = { ...data };
    
    for (const field of this.sensitiveFields) {
      if (field in sanitized) {
        sanitized[field] = '***REDACTED***';
      }
    }
    
    return sanitized;
  }
}

/**
 * Performance tracking utilities
 */
class PerformanceTracker {
  private timers = new Map<string, number>();
  
  start(key: string): void {
    this.timers.set(key, performance.now());
  }
  
  end(key: string): number | undefined {
    const startTime = this.timers.get(key);
    if (startTime === undefined) return undefined;
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    this.timers.delete(key);
    return duration;
  }
  
  getMemoryInfo(): { used: number; total: number } | undefined {
    if ('memory' in performance && performance.memory) {
      const mem = performance.memory as { usedJSHeapSize?: number; totalJSHeapSize?: number };
      return {
        used: mem.usedJSHeapSize || 0,
        total: mem.totalJSHeapSize || 0
      };
    }
    return undefined;
  }
}

/**
 * Main hierarchy logger class
 */
export class HierarchyLogger {
  private config: LoggerConfig;
  private entries: LogEntry[] = [];
  private rateLimiter: RateLimiter;
  private sanitizer: Sanitizer;
  private performanceTracker: PerformanceTracker;
  private globalContext: LogContext = {};
  
  constructor(config: Partial<LoggerConfig> = {}) {
    this.config = { ...defaultConfig, ...config };
    this.rateLimiter = new RateLimiter();
    this.sanitizer = new Sanitizer(this.config.sanitization.sensitiveFields);
    this.performanceTracker = new PerformanceTracker();
    
    // Set up global context
    this.updateGlobalContext();
    
    // Set up periodic cleanup
    if (typeof window !== 'undefined') {
      setInterval(() => this.cleanup(), 60000);
    }
  }
  
  /**
   * Update global logging context
   */
  updateGlobalContext(context: Partial<LogContext> = {}): void {
    this.globalContext = {
      ...this.globalContext,
      ...context,
      environment: isDevelopment() ? 'development' : 'production',
      buildVersion: (typeof window !== 'undefined' && (window as { __APP_VERSION__?: string }).__APP_VERSION__) || 'unknown',
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
      viewport: typeof window !== 'undefined' ? {
        width: window.innerWidth,
        height: window.innerHeight,
        type: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop'
      } : undefined
    };
  }
  
  /**
   * Check if logging is enabled for the given level and category
   */
  private shouldLog(level: LogLevel, category: LogCategory): boolean {
    if (!this.config.enabled) return false;
    
    const levelPriority = LOG_LEVEL_PRIORITIES[level];
    const configPriority = LOG_LEVEL_PRIORITIES[this.config.level];
    
    if (levelPriority < configPriority) return false;
    if (!this.config.categories.includes(category)) return false;
    
    // Check rate limiting
    if (this.config.rateLimiting.enabled) {
      const key = `${level}-${category}`;
      if (!this.rateLimiter.isAllowed(key, this.config.rateLimiting.maxPerMinute)) {
        return false;
      }
    }
    
    return true;
  }
  
  /**
   * Core logging method
   */
  private log(
    level: LogLevel,
    category: LogCategory,
    message: string,
    context?: Partial<LogContext>,
    data?: Record<string, unknown>,
    error?: Error
  ): void {
    if (!this.shouldLog(level, category)) return;
    
    const timestamp = Date.now();
    const mergedContext = { ...this.globalContext, ...context, timestamp };
    
    // Sanitize sensitive data
    const sanitizedData = data && this.config.sanitization.enabled 
      ? this.sanitizer.sanitize(data) 
      : data;
    
    const entry: LogEntry = {
      level,
      category,
      message,
      context: mergedContext,
      data: sanitizedData,
      error,
      timestamp,
      stack: error?.stack || (this.config.enableErrorStackTraces ? new Error().stack : undefined)
    };
    
    // Add performance info if tracking is enabled
    if (this.config.enablePerformanceTracking) {
      const memory = this.performanceTracker.getMemoryInfo();
      if (memory) {
        entry.performance = { memory };
      }
    }
    
    // Store the entry
    this.entries.push(entry);
    
    // Maintain max entries limit
    if (this.entries.length > this.config.maxEntries) {
      this.entries = this.entries.slice(-this.config.maxEntries);
    }
    
    // Output to console in development
    if (this.config.enableConsoleOutput) {
      this.outputToConsole(entry);
    }
    
    // Report to analytics in production
    if (this.config.enableAnalyticsReporting && level !== 'debug' && level !== 'trace') {
      this.reportToAnalytics(entry);
    }
  }
  
  /**
   * Output log entry to console
   */
  private outputToConsole(entry: LogEntry): void {
    const { level, category, message, context, data, error } = entry;
    const prefix = `[${new Date(entry.timestamp).toISOString()}] [${level.toUpperCase()}] [${category}]`;
    
    const consoleMethod = level === 'error' ? 'error' : 
                         level === 'warn' ? 'warn' : 
                         level === 'debug' || level === 'trace' ? 'debug' : 'info';
    
    if (error) {
      console[consoleMethod](prefix, message, { context, data, error });
    } else {
      console[consoleMethod](prefix, message, { context, data });
    }
  }
  
  /**
   * Report log entry to analytics
   */
  private reportToAnalytics(entry: LogEntry): void {
    try {
      analytics.track('hierarchy_log_entry', {
        level: entry.level,
        category: entry.category,
        message: entry.message,
        componentId: entry.context?.componentId,
        hierarchyPath: entry.context?.hierarchyPath,
        hasError: !!entry.error,
        performance: entry.performance,
        timestamp: entry.timestamp
      });
    } catch (error) {
      // Silently fail analytics reporting
      if (this.config.enableConsoleOutput) {
        console.warn('[HierarchyLogger] Failed to report to analytics:', error);
      }
    }
  }
  
  /**
   * Public logging methods
   */
  trace(category: LogCategory, message: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.log('trace', category, message, context, data);
  }
  
  debug(category: LogCategory, message: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.log('debug', category, message, context, data);
  }
  
  info(category: LogCategory, message: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.log('info', category, message, context, data);
  }
  
  warn(category: LogCategory, message: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.log('warn', category, message, context, data);
  }
  
  error(category: LogCategory, message: string, context?: Partial<LogContext>, data?: Record<string, unknown>, error?: Error): void {
    this.log('error', category, message, context, data, error);
  }
  
  /**
   * Performance timing methods
   */
  startTiming(key: string): void {
    if (this.config.enablePerformanceTracking) {
      this.performanceTracker.start(key);
    }
  }
  
  endTiming(key: string, category: LogCategory = 'performance', message?: string, context?: Partial<LogContext>): void {
    if (!this.config.enablePerformanceTracking) return;
    
    const duration = this.performanceTracker.end(key);
    if (duration !== undefined) {
      this.log('info', category, message || `Performance timing: ${key}`, context, {
        timingKey: key,
        duration,
        durationFormatted: `${duration.toFixed(2)}ms`
      });
    }
  }
  
  /**
   * Hierarchy-specific logging methods
   */
  hierarchyUpdate(action: string, hierarchyPath: string[], context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.info('hierarchy', `Hierarchy update: ${action}`, {
      ...context,
      hierarchyPath
    }, data);
  }
  
  userInteraction(action: string, element: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.info('user_interaction', `User interaction: ${action} on ${element}`, context, data);
  }
  
  stateChange(component: string, oldState: unknown, newState: unknown, context?: Partial<LogContext>): void {
    this.debug('state_management', `State change in ${component}`, context, {
      oldState,
      newState,
      component
    });
  }
  
  validationError(field: string, errorMessage: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.warn('validation', `Validation error: ${field} - ${errorMessage}`, context, data);
  }
  
  accessibilityEvent(event: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.info('accessibility', `Accessibility event: ${event}`, context, data);
  }
  
  responsiveChange(viewportType: string, context?: Partial<LogContext>, data?: Record<string, unknown>): void {
    this.debug('responsive', `Responsive change: ${viewportType}`, context, data);
  }
  
  /**
   * Utility methods
   */
  getEntries(filter?: { level?: LogLevel; category?: LogCategory; since?: number }): LogEntry[] {
    let filtered = this.entries;
    
    if (filter?.level) {
      const levelPriority = LOG_LEVEL_PRIORITIES[filter.level];
      filtered = filtered.filter(entry => LOG_LEVEL_PRIORITIES[entry.level] >= levelPriority);
    }
    
    if (filter?.category) {
      filtered = filtered.filter(entry => entry.category === filter.category);
    }
    
    if (filter?.since !== undefined) {
      filtered = filtered.filter(entry => entry.timestamp >= filter.since!);
    }
    
    return filtered;
  }
  
  getStats(): {
    totalEntries: number;
    entriesByLevel: Record<LogLevel, number>;
    entriesByCategory: Record<LogCategory, number>;
    errorCount: number;
    warningCount: number;
  } {
    const entriesByLevel = {} as Record<LogLevel, number>;
    const entriesByCategory = {} as Record<LogCategory, number>;
    
    let errorCount = 0;
    let warningCount = 0;
    
    for (const entry of this.entries) {
      entriesByLevel[entry.level] = (entriesByLevel[entry.level] || 0) + 1;
      entriesByCategory[entry.category] = (entriesByCategory[entry.category] || 0) + 1;
      
      if (entry.level === 'error') errorCount++;
      if (entry.level === 'warn') warningCount++;
    }
    
    return {
      totalEntries: this.entries.length,
      entriesByLevel,
      entriesByCategory,
      errorCount,
      warningCount
    };
  }
  
  exportLogs(format: 'json' | 'csv' = 'json'): string {
    if (format === 'json') {
      return JSON.stringify(this.entries, null, 2);
    }
    
    // CSV format
    const headers = ['timestamp', 'level', 'category', 'message', 'componentId', 'hierarchyPath', 'hasError'];
    const rows = this.entries.map(entry => [
      new Date(entry.timestamp).toISOString(),
      entry.level,
      entry.category,
      entry.message,
      entry.context?.componentId || '',
      entry.context?.hierarchyPath?.join('/') || '',
      !!entry.error
    ]);
    
    return [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
  }
  
  clear(): void {
    this.entries = [];
  }
  
  cleanup(): void {
    this.rateLimiter.cleanup();
    
    // Remove old entries beyond retention period (7 days)
    const retentionPeriod = 7 * 24 * 60 * 60 * 1000; // 7 days
    const cutoff = Date.now() - retentionPeriod;
    this.entries = this.entries.filter(entry => entry.timestamp > cutoff);
  }
}

// Global logger instance
export const hierarchyLogger = new HierarchyLogger();

// Convenience functions for common logging patterns
export const logHierarchyUpdate = (action: string, hierarchyPath: string[], data?: Record<string, unknown>) => {
  hierarchyLogger.hierarchyUpdate(action, hierarchyPath, {}, data);
};

export const logUserInteraction = (action: string, element: string, data?: Record<string, unknown>) => {
  hierarchyLogger.userInteraction(action, element, {}, data);
};

export const logPerformance = (key: string, duration?: number, data?: Record<string, unknown>) => {
  if (duration !== undefined) {
    hierarchyLogger.info('performance', `Performance: ${key}`, {}, { 
      ...data, 
      duration, 
      durationFormatted: `${duration.toFixed(2)}ms` 
    });
  }
};

export const logError = (category: LogCategory, message: string, error?: Error, data?: Record<string, unknown>) => {
  hierarchyLogger.error(category, message, {}, data, error);
};

export default hierarchyLogger;