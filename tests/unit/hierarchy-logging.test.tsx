/**
 * Hierarchy Logging System Tests
 * Feature 004: Real-Time Hierarchy Updates - T051
 * Tests for comprehensive logging infrastructure and integration hooks
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

import { 
  HierarchyLogger, 
  hierarchyLogger, 
  logHierarchyUpdate, 
  logUserInteraction, 
  logPerformance, 
  logError 
} from '../../src/utils/hierarchyLogger';

import {
  useHierarchyLogger,
  usePerformanceTimer,
  useUserInteractionLogger,
  useStateChangeLogger,
  useAccessibilityLogger,
  useResponsiveLogger,
  LoggingErrorBoundary
} from '../../src/hooks/useHierarchyLogger';

// Mock performance.now for consistent timing tests
const mockPerformanceNow = vi.fn(() => 1000);
Object.defineProperty(global, 'performance', {
  value: {
    now: mockPerformanceNow,
    memory: {
      usedJSHeapSize: 1024 * 1024 * 10, // 10MB
      totalJSHeapSize: 1024 * 1024 * 50  // 50MB
    }
  },
  writable: true
});

describe('HierarchyLogger', () => {
  let logger: HierarchyLogger;

  beforeEach(() => {
    vi.clearAllMocks();
    logger = new HierarchyLogger({
      enabled: true,
      level: 'debug',
      enableConsoleOutput: false,
      enableAnalyticsReporting: false,
      rateLimiting: { enabled: false, maxPerMinute: 100 }
    });
  });

  afterEach(() => {
    logger.clear();
  });

  describe('Basic Logging', () => {
    it('should log debug messages', () => {
      logger.debug('hierarchy', 'Test debug message', { componentId: 'TestComponent' });
      
      const entries = logger.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].level).toBe('debug');
      expect(entries[0].category).toBe('hierarchy');
      expect(entries[0].message).toBe('Test debug message');
      expect(entries[0].context?.componentId).toBe('TestComponent');
    });

    it('should log info messages', () => {
      logger.info('performance', 'Performance metric', { componentId: 'TestComponent' }, { duration: 100 });
      
      const entries = logger.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].level).toBe('info');
      expect(entries[0].category).toBe('performance');
      expect(entries[0].data?.duration).toBe(100);
    });

    it('should log warnings', () => {
      logger.warn('validation', 'Validation warning', { componentId: 'TestComponent' });
      
      const entries = logger.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].level).toBe('warn');
      expect(entries[0].category).toBe('validation');
    });

    it('should log errors with stack traces', () => {
      const error = new Error('Test error');
      logger.error('system', 'System error occurred', { componentId: 'TestComponent' }, {}, error);
      
      const entries = logger.getEntries();
      expect(entries).toHaveLength(1);
      expect(entries[0].level).toBe('error');
      expect(entries[0].error).toBe(error);
      expect(entries[0].stack).toBeDefined();
    });
  });

  describe('Log Level Filtering', () => {
    it('should respect log level configuration', () => {
      const warnLogger = new HierarchyLogger({
        enabled: true,
        level: 'warn',
        enableConsoleOutput: false,
        enableAnalyticsReporting: false
      });

      warnLogger.debug('hierarchy', 'Debug message');
      warnLogger.info('hierarchy', 'Info message');
      warnLogger.warn('hierarchy', 'Warning message');
      warnLogger.error('hierarchy', 'Error message');

      const entries = warnLogger.getEntries();
      expect(entries).toHaveLength(2);
      expect(entries[0].level).toBe('warn');
      expect(entries[1].level).toBe('error');
    });

    it('should filter by category', () => {
      const categoryLogger = new HierarchyLogger({
        enabled: true,
        level: 'debug',
        categories: ['hierarchy', 'performance'],
        enableConsoleOutput: false,
        enableAnalyticsReporting: false
      });

      categoryLogger.debug('hierarchy', 'Hierarchy message');
      categoryLogger.debug('performance', 'Performance message');
      categoryLogger.debug('validation', 'Validation message');

      const entries = categoryLogger.getEntries();
      expect(entries).toHaveLength(2);
      expect(entries.every(e => ['hierarchy', 'performance'].includes(e.category))).toBe(true);
    });
  });

  describe('Performance Tracking', () => {
    beforeEach(() => {
      mockPerformanceNow.mockReturnValue(1000);
    });

    it('should track performance timing', () => {
      logger.startTiming('test-operation');
      
      mockPerformanceNow.mockReturnValue(1100); // 100ms later
      
      logger.endTiming('test-operation', 'performance', 'Test operation completed');
      
      const entries = logger.getEntries();
      const performanceEntry = entries.find(e => e.category === 'performance');
      
      expect(performanceEntry).toBeDefined();
      expect(performanceEntry?.data?.duration).toBe(100);
      expect(performanceEntry?.data?.durationFormatted).toBe('100.00ms');
    });

    it('should include memory information', () => {
      logger.info('performance', 'Memory test');
      
      const entries = logger.getEntries();
      expect(entries[0].performance?.memory).toEqual({
        used: 1024 * 1024 * 10,
        total: 1024 * 1024 * 50
      });
    });
  });

  describe('Rate Limiting', () => {
    it('should apply rate limiting when enabled', () => {
      const rateLimitedLogger = new HierarchyLogger({
        enabled: true,
        level: 'debug',
        enableConsoleOutput: false,
        enableAnalyticsReporting: false,
        rateLimiting: { enabled: true, maxPerMinute: 2 }
      });

      // Log 3 messages quickly
      rateLimitedLogger.info('hierarchy', 'Message 1');
      rateLimitedLogger.info('hierarchy', 'Message 2');
      rateLimitedLogger.info('hierarchy', 'Message 3');

      const entries = rateLimitedLogger.getEntries();
      expect(entries).toHaveLength(2); // Should only have 2 due to rate limiting
    });
  });

  describe('Data Sanitization', () => {
    it('should sanitize sensitive data', () => {
      const logger = new HierarchyLogger({
        enabled: true,
        level: 'debug',
        enableConsoleOutput: false,
        enableAnalyticsReporting: false,
        sanitization: {
          enabled: true,
          sensitiveFields: ['password', 'secret']
        }
      });

      logger.info('system', 'Login attempt', {}, {
        username: 'testuser',
        password: 'secret123',
        secret: 'topsecret'
      });

      const entries = logger.getEntries();
      expect(entries[0].data?.username).toBe('testuser');
      expect(entries[0].data?.password).toBe('***REDACTED***');
      expect(entries[0].data?.secret).toBe('***REDACTED***');
    });
  });

  describe('Hierarchy-specific Methods', () => {
    it('should log hierarchy updates', () => {
      logger.hierarchyUpdate('expand', ['root', 'branch1', 'leaf1'], {}, { nodeCount: 5 });
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('hierarchy');
      expect(entries[0].message).toBe('Hierarchy update: expand');
      expect(entries[0].context?.hierarchyPath).toEqual(['root', 'branch1', 'leaf1']);
      expect(entries[0].data?.nodeCount).toBe(5);
    });

    it('should log user interactions', () => {
      logger.userInteraction('click', 'expand-button', {}, { timestamp: Date.now() });
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('user_interaction');
      expect(entries[0].message).toBe('User interaction: click on expand-button');
    });

    it('should log state changes', () => {
      const oldState = { expanded: false };
      const newState = { expanded: true };
      
      logger.stateChange('HierarchyNode', oldState, newState);
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('state_management');
      expect(entries[0].data?.oldState).toEqual(oldState);
      expect(entries[0].data?.newState).toEqual(newState);
    });

    it('should log validation errors', () => {
      logger.validationError('nodeName', 'Name cannot be empty');
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('validation');
      expect(entries[0].level).toBe('warn');
      expect(entries[0].message).toBe('Validation error: nodeName - Name cannot be empty');
    });

    it('should log accessibility events', () => {
      logger.accessibilityEvent('focus_gained', {}, { element: 'hierarchy-node' });
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('accessibility');
      expect(entries[0].message).toBe('Accessibility event: focus_gained');
    });

    it('should log responsive changes', () => {
      logger.responsiveChange('mobile', {}, { viewport: { width: 400, height: 800 } });
      
      const entries = logger.getEntries();
      expect(entries[0].category).toBe('responsive');
      expect(entries[0].message).toBe('Responsive change: mobile');
    });
  });

  describe('Utility Methods', () => {
    beforeEach(() => {
      logger.info('hierarchy', 'Message 1');
      logger.warn('validation', 'Message 2');
      logger.error('system', 'Message 3');
      logger.debug('performance', 'Message 4');
    });

    it('should filter entries by level', () => {
      const warnAndAbove = logger.getEntries({ level: 'warn' });
      expect(warnAndAbove).toHaveLength(2);
      expect(warnAndAbove.every(e => ['warn', 'error'].includes(e.level))).toBe(true);
    });

    it('should filter entries by category', () => {
      const hierarchyEntries = logger.getEntries({ category: 'hierarchy' });
      expect(hierarchyEntries).toHaveLength(1);
      expect(hierarchyEntries[0].category).toBe('hierarchy');
    });

    it('should provide logging statistics', () => {
      const stats = logger.getStats();
      
      expect(stats.totalEntries).toBe(4);
      expect(stats.entriesByLevel.info).toBe(1);
      expect(stats.entriesByLevel.warn).toBe(1);
      expect(stats.entriesByLevel.error).toBe(1);
      expect(stats.entriesByLevel.debug).toBe(1);
      expect(stats.errorCount).toBe(1);
      expect(stats.warningCount).toBe(1);
    });

    it('should export logs as JSON', () => {
      const exported = logger.exportLogs('json');
      const parsed = JSON.parse(exported);
      
      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed).toHaveLength(4);
    });

    it('should export logs as CSV', () => {
      const exported = logger.exportLogs('csv');
      const lines = exported.split('\n');
      
      expect(lines).toHaveLength(5); // Header + 4 data rows
      expect(lines[0]).toContain('timestamp');
      expect(lines[0]).toContain('level');
      expect(lines[0]).toContain('category');
    });

    it('should clear all entries', () => {
      expect(logger.getEntries()).toHaveLength(4);
      
      logger.clear();
      
      expect(logger.getEntries()).toHaveLength(0);
    });
  });
});

describe('Convenience Functions', () => {
  beforeEach(() => {
    hierarchyLogger.clear();
  });

  it('should log hierarchy updates', () => {
    logHierarchyUpdate('collapse', ['root', 'branch1'], { nodeId: 'node-123' });
    
    const entries = hierarchyLogger.getEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0].category).toBe('hierarchy');
    expect(entries[0].context?.hierarchyPath).toEqual(['root', 'branch1']);
  });

  it('should log user interactions', () => {
    logUserInteraction('hover', 'hierarchy-node', { duration: 500 });
    
    const entries = hierarchyLogger.getEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0].category).toBe('user_interaction');
    expect(entries[0].data?.duration).toBe(500);
  });

  it('should log performance metrics', () => {
    logPerformance('render', 150, { componentCount: 25 });
    
    const entries = hierarchyLogger.getEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0].category).toBe('performance');
    expect(entries[0].data?.duration).toBe(150);
  });

  it('should log errors', () => {
    const error = new Error('Test error');
    logError('hierarchy', 'Component failed to render', error, { componentId: 'TestComponent' });
    
    const entries = hierarchyLogger.getEntries();
    expect(entries).toHaveLength(1);
    expect(entries[0].level).toBe('error');
    expect(entries[0].error).toBe(error);
  });
});

describe('React Integration Hooks', () => {
  const TestComponent = ({ name }: { name: string }) => {
    useHierarchyLogger({
      componentName: name,
      hierarchyPath: ['root', name]
    });

    return <div data-testid={name}>Test Component</div>;
  };

  beforeEach(() => {
    hierarchyLogger.clear();
  });

  describe('useHierarchyLogger', () => {
    it('should log component mount and unmount', () => {
      const { unmount } = render(<TestComponent name="TestComp" />);
      
      // Check mount log
      let entries = hierarchyLogger.getEntries();
      const mountEntry = entries.find(e => e.message.includes('mounted'));
      expect(mountEntry).toBeDefined();
      expect(mountEntry?.context?.componentId).toBe('TestComp');
      
      unmount();
      
      // Check unmount log
      entries = hierarchyLogger.getEntries();
      const unmountEntry = entries.find(e => e.message.includes('unmounted'));
      expect(unmountEntry).toBeDefined();
    });

    it('should provide logging methods with pre-filled context', () => {
      const { result } = renderHook(() => useHierarchyLogger({
        componentName: 'TestHook',
        hierarchyPath: ['root', 'test']
      }));
      
      act(() => {
        result.current.logUserAction('click', 'button', { buttonId: 'submit' });
      });
      
      const entries = hierarchyLogger.getEntries();
      const userActionEntry = entries.find(e => e.category === 'user_interaction');
      expect(userActionEntry).toBeDefined();
      expect(userActionEntry?.context?.componentId).toBe('TestHook');
      expect(userActionEntry?.context?.hierarchyPath).toEqual(['root', 'test']);
    });
  });

  describe('usePerformanceTimer', () => {
    it('should measure performance timing', () => {
      const { result } = renderHook(() => 
        usePerformanceTimer('render', 'TestComponent', ['root', 'test'])
      );
      
      act(() => {
        result.current.start();
      });
      
      mockPerformanceNow.mockReturnValue(1150); // 150ms later
      
      act(() => {
        const duration = result.current.end();
        expect(duration).toBe(150);
      });
      
      const entries = hierarchyLogger.getEntries();
      const perfEntry = entries.find(e => e.category === 'performance');
      expect(perfEntry).toBeDefined();
    });

    it('should measure async operations', async () => {
      const { result } = renderHook(() => 
        usePerformanceTimer('async-operation', 'TestComponent')
      );
      
      const asyncFn = async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
        return 'result';
      };
      
      await act(async () => {
        const { result: fnResult, duration } = await result.current.measure(asyncFn);
        expect(fnResult).toBe('result');
        expect(typeof duration).toBe('number');
      });
    });
  });

  describe('useUserInteractionLogger', () => {
    it('should debounce user interactions', async () => {
      const { result } = renderHook(() => 
        useUserInteractionLogger('TestComponent', ['root', 'test'], 50)
      );
      
      // Log multiple rapid interactions
      act(() => {
        result.current.logInteraction('click', 'button');
        result.current.logInteraction('click', 'button');
        result.current.logInteraction('click', 'button');
      });
      
      // Should only have logged once due to debouncing
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const entries = hierarchyLogger.getEntries();
      const interactions = entries.filter(e => e.category === 'user_interaction');
      expect(interactions).toHaveLength(1);
    });
  });

  describe('useStateChangeLogger', () => {
    it('should log state changes', () => {
      let state = { count: 0 };
      
      const { rerender } = renderHook(
        ({ state }) => useStateChangeLogger(state, 'TestComponent', ['root', 'test']),
        { initialProps: { state } }
      );
      
      // Change state
      state = { count: 1 };
      rerender({ state });
      
      const entries = hierarchyLogger.getEntries();
      const stateEntry = entries.find(e => e.category === 'state_management');
      expect(stateEntry).toBeDefined();
    });

    it('should ignore specified fields', () => {
      hierarchyLogger.clear(); // Clear any previous entries
      
      let state = { count: 0, timestamp: Date.now() };
      
      const { rerender } = renderHook(
        ({ state }) => useStateChangeLogger(
          state, 
          'TestComponent', 
          ['root', 'test'],
          { ignoreFields: ['timestamp'] }
        ),
        { initialProps: { state } }
      );
      
      // Change only ignored field
      state = { ...state, timestamp: Date.now() + 1000 };
      rerender({ state });
      
      // Change non-ignored field
      state = { ...state, count: 1 };
      rerender({ state });
      
      const entries = hierarchyLogger.getEntries();
      const stateEntries = entries.filter(e => e.category === 'state_management');
      expect(stateEntries).toHaveLength(1); // Only one state change logged
    });
  });

  describe('useAccessibilityLogger', () => {
    it('should log accessibility events', () => {
      const { result } = renderHook(() => 
        useAccessibilityLogger('TestComponent', ['root', 'test'])
      );
      
      act(() => {
        result.current.logFocusChange('input-field', true);
      });
      
      const entries = hierarchyLogger.getEntries();
      const a11yEntry = entries.find(e => e.category === 'accessibility');
      expect(a11yEntry).toBeDefined();
      expect(a11yEntry?.message).toBe('Accessibility event: focus_gained');
    });

    it('should log keyboard navigation', () => {
      const { result } = renderHook(() => 
        useAccessibilityLogger('TestComponent')
      );
      
      act(() => {
        result.current.logKeyboardNavigation('ArrowDown', 'navigate_to_next');
      });
      
      const entries = hierarchyLogger.getEntries();
      const navEntry = entries.find(e => e.category === 'accessibility' && e.data?.action === 'navigate_to_next');
      expect(navEntry).toBeDefined();
      expect(navEntry?.data?.key).toBe('***REDACTED***'); // Key is sanitized for security
    });
  });

  describe('useResponsiveLogger', () => {
    it('should log responsive changes', () => {
      const { result } = renderHook(() => 
        useResponsiveLogger('TestComponent', ['root', 'test'])
      );
      
      act(() => {
        result.current.logResponsiveChange('viewport', { 
          width: 400, 
          height: 800, 
          type: 'mobile' 
        });
      });
      
      const entries = hierarchyLogger.getEntries();
      const responsiveEntry = entries.find(e => e.category === 'responsive');
      expect(responsiveEntry).toBeDefined();
      expect(responsiveEntry?.data?.type).toBe('mobile');
    });
  });
});

describe('LoggingErrorBoundary', () => {
  const ThrowingComponent = () => {
    throw new Error('Test error');
  };
  
  beforeEach(() => {
    hierarchyLogger.clear();
    // Suppress error boundary console errors in tests
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });
  
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should log errors caught by boundary', () => {
    render(
      <LoggingErrorBoundary 
        componentName="TestBoundary" 
        hierarchyPath={['root', 'test']}
      >
        <ThrowingComponent />
      </LoggingErrorBoundary>
    );
    
    const entries = hierarchyLogger.getEntries();
    const errorEntry = entries.find(e => e.level === 'error');
    expect(errorEntry).toBeDefined();
    expect(errorEntry?.context?.componentId).toBe('TestBoundary');
    expect(errorEntry?.data?.errorBoundary).toBe(true);
  });

  it('should display error UI when error occurs', () => {
    render(
      <LoggingErrorBoundary 
        componentName="TestBoundary" 
        hierarchyPath={['root', 'test']}
      >
        <ThrowingComponent />
      </LoggingErrorBoundary>
    );
    
    expect(screen.getByText('Something went wrong in TestBoundary')).toBeInTheDocument();
  });
});