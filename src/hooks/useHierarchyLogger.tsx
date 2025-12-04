/**
 * Hierarchy Logger Integration Hooks
 * Feature 004: Real-Time Hierarchy Updates - T051
 * React hooks and utilities for integrating logging into hierarchy components
 */

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { hierarchyLogger, type LogCategory, type LogContext } from '../utils/hierarchyLogger';

export interface UseHierarchyLoggerOptions {
  componentName: string;
  hierarchyPath?: string[];
  autoLogMounts?: boolean;
  autoLogUnmounts?: boolean;
  autoLogStateChanges?: boolean;
  context?: Partial<LogContext>;
}

/**
 * Main hook for integrating hierarchy logging into components
 */
export function useHierarchyLogger({
  componentName,
  hierarchyPath = [],
  autoLogMounts = true,
  autoLogUnmounts = true,
  autoLogStateChanges = false,
  context = {}
}: UseHierarchyLoggerOptions) {
  const mountTimeRef = useRef<number | undefined>(undefined);
  const previousStateRef = useRef<unknown>(undefined);
  
  // Create stable context for logging
  const loggerContext = useMemo(() => ({
    componentId: componentName,
    hierarchyPath,
    ...context
  }), [componentName, hierarchyPath, context]);
  
  // Mount/unmount logging
  useEffect(() => {
    if (autoLogMounts) {
      mountTimeRef.current = performance.now();
      hierarchyLogger.debug('hierarchy', `Component mounted: ${componentName}`, loggerContext);
    }
    
    return () => {
      if (autoLogUnmounts) {
        const mountTime = mountTimeRef.current;
        const unmountTime = performance.now();
        const mountDuration = mountTime ? unmountTime - mountTime : undefined;
        
        hierarchyLogger.debug('hierarchy', `Component unmounted: ${componentName}`, loggerContext, {
          mountDuration: mountDuration ? `${mountDuration.toFixed(2)}ms` : undefined
        });
      }
    };
  }, [componentName, autoLogMounts, autoLogUnmounts, loggerContext]);
  
  // Logging methods with context pre-filled
  const log = useCallback((level: 'debug' | 'info' | 'warn' | 'error', category: LogCategory, message: string, data?: Record<string, unknown>, error?: Error) => {
    hierarchyLogger[level](category, message, loggerContext, data, error);
  }, [loggerContext]);
  
  const logUserAction = useCallback((action: string, element: string, data?: Record<string, unknown>) => {
    hierarchyLogger.userInteraction(action, element, loggerContext, {
      component: componentName,
      ...data
    });
  }, [loggerContext, componentName]);
  
  const logStateChange = useCallback((newState: unknown, oldState?: unknown) => {
    if (autoLogStateChanges) {
      hierarchyLogger.stateChange(componentName, oldState ?? previousStateRef.current, newState, loggerContext);
      previousStateRef.current = newState;
    }
  }, [componentName, autoLogStateChanges, loggerContext]);
  
  const logPerformance = useCallback((operation: string, startTime: number, endTime?: number, data?: Record<string, unknown>) => {
    const actualEndTime = endTime || performance.now();
    const duration = actualEndTime - startTime;
    
    hierarchyLogger.info('performance', `${componentName}: ${operation}`, loggerContext, {
      operation,
      duration,
      durationFormatted: `${duration.toFixed(2)}ms`,
      ...data
    });
  }, [componentName, loggerContext]);
  
  const logError = useCallback((message: string, error?: Error, data?: Record<string, unknown>) => {
    hierarchyLogger.error('hierarchy', `${componentName}: ${message}`, loggerContext, data, error);
  }, [componentName, loggerContext]);
  
  const logValidationError = useCallback((field: string, errorMessage: string, data?: Record<string, unknown>) => {
    hierarchyLogger.validationError(field, errorMessage, loggerContext, {
      component: componentName,
      ...data
    });
  }, [loggerContext, componentName]);
  
  return {
    log,
    logUserAction,
    logStateChange,
    logPerformance,
    logError,
    logValidationError,
    context: loggerContext
  };
}

/**
 * Hook for performance timing with automatic logging
 */
export function usePerformanceTimer(
  operationName: string,
  componentName: string,
  hierarchyPath?: string[]
) {
  const timers = useRef<Map<string, number>>(new Map());
  
  const start = useCallback((key = 'default') => {
    const timerKey = `${operationName}-${key}`;
    timers.current.set(timerKey, performance.now());
    hierarchyLogger.startTiming(timerKey);
  }, [operationName]);
  
  const end = useCallback((key = 'default') => {
    const timerKey = `${operationName}-${key}`;
    const startTime = timers.current.get(timerKey);
    
    if (startTime) {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      hierarchyLogger.endTiming(timerKey, 'performance', `${componentName}: ${operationName}`, {
        componentId: componentName,
        hierarchyPath
      });
      
      timers.current.delete(timerKey);
      return duration;
    }
    
    return 0;
  }, [operationName, componentName, hierarchyPath]);
  
  const measure = useCallback(async <T,>(
    fn: () => Promise<T> | T,
    key = 'default'
  ): Promise<{ result: T; duration: number }> => {
    start(key);
    
    try {
      const result = await fn();
      const duration = end(key);
      return { result, duration };
    } catch (error) {
      end(key);
      throw error;
    }
  }, [start, end]);
  
  return { start, end, measure };
}

/**
 * Hook for logging user interactions with debouncing
 */
export function useUserInteractionLogger(
  componentName: string,
  hierarchyPath?: string[],
  debounceMs = 100
) {
  const debounceTimers = useRef<Map<string, number>>(new Map());
  
  const logInteraction = useCallback((action: string, element: string, data?: Record<string, unknown>) => {
    const key = `${action}-${element}`;
    
    // Clear existing timer
    const existingTimer = debounceTimers.current.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }
    
    // Set new debounced timer
    const timer = window.setTimeout(() => {
      hierarchyLogger.userInteraction(action, element, {
        componentId: componentName,
        hierarchyPath
      }, data);
      debounceTimers.current.delete(key);
    }, debounceMs);
    
    debounceTimers.current.set(key, timer);
  }, [componentName, hierarchyPath, debounceMs]);
  
  // Cleanup timers on unmount
  useEffect(() => {
    const timers = debounceTimers.current;
    return () => {
      timers.forEach(timer => clearTimeout(timer));
      timers.clear();
    };
  }, []);
  
  return { logInteraction };
}

/**
 * Hook for logging state changes with deep comparison
 */
export function useStateChangeLogger<T>(
  state: T,
  componentName: string,
  hierarchyPath?: string[],
  options: {
    enabled?: boolean;
    deepCompare?: boolean;
    ignoreFields?: string[];
  } = {}
) {
  const previousStateRef = useRef<T>(state);
  const { enabled = true, deepCompare = false, ignoreFields = [] } = options;
  
  useEffect(() => {
    if (!enabled) return;
    
    const hasChanged = deepCompare
      ? JSON.stringify(previousStateRef.current) !== JSON.stringify(state)
      : previousStateRef.current !== state;
    
    if (hasChanged) {
      // Filter out ignored fields for comparison and logging
      const sanitizedOldState = ignoreFields.length > 0 && typeof previousStateRef.current === 'object'
        ? Object.fromEntries(
            Object.entries(previousStateRef.current as Record<string, unknown>)
              .filter(([key]) => !ignoreFields.includes(key))
          )
        : previousStateRef.current;
      
      const sanitizedNewState = ignoreFields.length > 0 && typeof state === 'object'
        ? Object.fromEntries(
            Object.entries(state as Record<string, unknown>)
              .filter(([key]) => !ignoreFields.includes(key))
          )
        : state;
      
      // Check if there are meaningful changes after filtering ignored fields
      const hasMeaningfulChange = JSON.stringify(sanitizedOldState) !== JSON.stringify(sanitizedNewState);
      
      if (hasMeaningfulChange) {
        hierarchyLogger.stateChange(componentName, sanitizedOldState, sanitizedNewState, {
          componentId: componentName,
          hierarchyPath
        });
      }
      
      previousStateRef.current = state;
    }
  }, [state, enabled, deepCompare, ignoreFields, componentName, hierarchyPath]);
}

/**
 * Hook for logging accessibility events
 */
export function useAccessibilityLogger(
  componentName: string,
  hierarchyPath?: string[]
) {
  const logA11yEvent = useCallback((event: string, data?: Record<string, unknown>) => {
    hierarchyLogger.accessibilityEvent(event, {
      componentId: componentName,
      hierarchyPath
    }, data);
  }, [componentName, hierarchyPath]);
  
  const logFocusChange = useCallback((element: string, focused: boolean, data?: Record<string, unknown>) => {
    logA11yEvent(`focus_${focused ? 'gained' : 'lost'}`, {
      element,
      ...data
    });
  }, [logA11yEvent]);
  
  const logKeyboardNavigation = useCallback((key: string, action: string, data?: Record<string, unknown>) => {
    logA11yEvent('keyboard_navigation', {
      key,
      action,
      ...data
    });
  }, [logA11yEvent]);
  
  const logScreenReaderAnnouncement = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite', data?: Record<string, unknown>) => {
    logA11yEvent('screen_reader_announcement', {
      message,
      priority,
      ...data
    });
  }, [logA11yEvent]);
  
  return {
    logA11yEvent,
    logFocusChange,
    logKeyboardNavigation,
    logScreenReaderAnnouncement
  };
}

/**
 * Hook for logging responsive behavior changes
 */
export function useResponsiveLogger(
  componentName: string,
  hierarchyPath?: string[]
) {
  const logResponsiveChange = useCallback((
    change: 'viewport' | 'container' | 'orientation' | 'indicator_adaptation',
    details: Record<string, unknown>
  ) => {
    hierarchyLogger.responsiveChange(change, {
      componentId: componentName,
      hierarchyPath
    }, details);
  }, [componentName, hierarchyPath]);
  
  return { logResponsiveChange };
}

/**
 * Higher-order component for automatic logging integration
 */
export function withHierarchyLogging<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  options: UseHierarchyLoggerOptions
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
  const LoggedComponent = (props: P) => {
    const logger = useHierarchyLogger({
      ...options,
      componentName: options.componentName || displayName
    });
    
    return <WrappedComponent {...props} hierarchyLogger={logger} />;
  };
  
  LoggedComponent.displayName = `withHierarchyLogging(${displayName})`;
  
  return LoggedComponent;
}

/**
 * Error boundary with integrated logging
 */
export class LoggingErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    componentName: string;
    hierarchyPath?: string[];
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  },
  { hasError: boolean }
> {
  constructor(props: LoggingErrorBoundary['props']) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }
  
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    hierarchyLogger.error('hierarchy', `Error boundary caught error in ${this.props.componentName}`, {
      componentId: this.props.componentName,
      hierarchyPath: this.props.hierarchyPath
    }, {
      componentStack: errorInfo.componentStack,
      errorBoundary: true
    }, error);
    
    this.props.onError?.(error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="error-boundary">
          <h2>Something went wrong in {this.props.componentName}</h2>
          <p>Please check the console for more details.</p>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default useHierarchyLogger;