/**
 * Performance Monitoring Tests for Feature 004
 * Tests 200ms response time requirement enforcement
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { usePerformanceMonitoring, withPerformanceMonitoring } from '../../src/hooks/usePerformanceMonitoring';

// Mock performance API for testing
const mockPerformance = {
  now: vi.fn(),
  mark: vi.fn(),
  measure: vi.fn(),
  clearMarks: vi.fn(),
  clearMeasures: vi.fn(),
};

// Replace global performance object
Object.defineProperty(global, 'performance', {
  value: mockPerformance,
  writable: true,
});

describe('usePerformanceMonitoring', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock performance.now to return incrementing values
    let mockTime = 1000;
    mockPerformance.now.mockImplementation(() => mockTime += 50);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should start and end measurements correctly', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());

    let measurementId = '';
    
    act(() => {
      measurementId = result.current.startMeasurement('test-operation', 'entity-1', 3);
    });

    expect(measurementId).toMatch(/test-operation-entity-1-\d+-[a-z0-9]+/);
    expect(mockPerformance.mark).toHaveBeenCalledWith(`hierarchy-start-${measurementId}`);

    let metrics: ReturnType<typeof result.current.endMeasurement> | null = null;
    act(() => {
      metrics = result.current.endMeasurement(measurementId);
    });

    expect(metrics).toMatchObject({
      operation: 'test-operation',
      entityId: 'entity-1',
      changeCount: 3,
      duration: expect.any(Number),
    });

    expect(mockPerformance.mark).toHaveBeenCalledWith(`hierarchy-end-${measurementId}`);
    expect(mockPerformance.measure).toHaveBeenCalledWith(
      `hierarchy-measure-${measurementId}`,
      `hierarchy-start-${measurementId}`,
      `hierarchy-end-${measurementId}`
    );
  });

  it('should track performance requirements correctly', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());

    // Test within threshold (should pass)
    const fastCheck = result.current.checkPerformanceRequirement(150);
    expect(fastCheck.meetsRequirement).toBe(true);
    expect(fastCheck.threshold).toBe(200);
    if (fastCheck.recommendation) {
      expect(fastCheck.recommendation).toContain('monitor for optimization');
    }

    // Test exceeding threshold (should fail)
    const slowCheck = result.current.checkPerformanceRequirement(250);
    expect(slowCheck.meetsRequirement).toBe(false);
    expect(slowCheck.threshold).toBe(200);
    if (slowCheck.recommendation) {
      expect(slowCheck.recommendation).toContain('optimizing change batching');
    }

    // Test well within threshold (no recommendation)
    const veryFastCheck = result.current.checkPerformanceRequirement(100);
    expect(veryFastCheck.meetsRequirement).toBe(true);
    expect(veryFastCheck.recommendation).toBeUndefined();
  });

  it('should log performance warnings for slow operations', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    // Mock slow performance (300ms)
    mockPerformance.now.mockReturnValueOnce(1000).mockReturnValueOnce(1300);

    const { result } = renderHook(() => usePerformanceMonitoring());

    let measurementId: string;
    
    act(() => {
      measurementId = result.current.startMeasurement('slow-operation', 'entity-1');
    });

    act(() => {
      result.current.endMeasurement(measurementId);
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Performance requirement violated')
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('slow-operation took 300.00ms')
    );

    // Test fast operation (should log success)
    mockPerformance.now.mockReturnValueOnce(2000).mockReturnValueOnce(2100);

    act(() => {
      measurementId = result.current.startMeasurement('fast-operation', 'entity-2');
    });

    act(() => {
      result.current.endMeasurement(measurementId);
    });

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Performance OK: fast-operation completed in 100.00ms')
    );
  });

  it('should handle multiple concurrent measurements', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());

    let id1 = '', id2 = '', id3 = '';

    act(() => {
      id1 = result.current.startMeasurement('op1', 'entity1');
      id2 = result.current.startMeasurement('op2', 'entity2');
      id3 = result.current.startMeasurement('op3', 'entity3');
    });

    expect(id1).not.toBe(id2);
    expect(id2).not.toBe(id3);
    expect(id1).not.toBe(id3);

    // End measurements and check all complete successfully
    act(() => {
      const metrics2 = result.current.endMeasurement(id2); // End middle one first
      const metrics1 = result.current.endMeasurement(id1);
      const metrics3 = result.current.endMeasurement(id3);
      
      expect(metrics2.operation).toBe('op2');
      expect(metrics1.operation).toBe('op1');
      expect(metrics3.operation).toBe('op3');
    });
  });

  it('should store and retrieve metrics correctly', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());

    let measurementId: string;
    
    act(() => {
      measurementId = result.current.startMeasurement('store-test', 'entity-1');
    });

    act(() => {
      result.current.endMeasurement(measurementId);
    });

    const metrics = result.current.getMetrics();
    expect(metrics).toHaveLength(1);
    expect(metrics[0]).toMatchObject({
      operation: 'store-test',
      entityId: 'entity-1',
    });

    act(() => {
      result.current.clearMetrics();
    });

    const clearedMetrics = result.current.getMetrics();
    expect(clearedMetrics).toHaveLength(0);
    expect(mockPerformance.clearMarks).toHaveBeenCalled();
    expect(mockPerformance.clearMeasures).toHaveBeenCalled();
  });

  it('should throw error for invalid measurement ID', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());

    expect(() => {
      act(() => {
        result.current.endMeasurement('invalid-id');
      });
    }).toThrow('No active measurement found for ID: invalid-id');
  });
});

describe('withPerformanceMonitoring', () => {
  it('should wrap synchronous functions with performance monitoring', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());
    
    const testFunction = vi.fn((x: number) => x * 2);
    const wrappedFunction = withPerformanceMonitoring(
      testFunction as (...args: unknown[]) => unknown,
      'test-sync-op',
      result.current
    );

    const testResult = wrappedFunction(5);

    expect(testResult).toBe(10);
    expect(testFunction).toHaveBeenCalledWith(5);
    
    // Should have completed one measurement
    const metrics = result.current.getMetrics();
    expect(metrics).toHaveLength(1);
    expect(metrics[0].operation).toBe('test-sync-op');
  });

  it('should wrap asynchronous functions with performance monitoring', async () => {
    const { result } = renderHook(() => usePerformanceMonitoring());
    
    const testAsyncFunction = vi.fn(async (x: number) => {
      await new Promise(resolve => setTimeout(resolve, 10));
      return x * 3;
    });
    
    const wrappedFunction = withPerformanceMonitoring(
      testAsyncFunction as (...args: unknown[]) => unknown,
      'test-async-op',
      result.current
    );

    const testResult = await wrappedFunction(4);

    expect(testResult).toBe(12);
    expect(testAsyncFunction).toHaveBeenCalledWith(4);
    
    // Should have completed one measurement
    const metrics = result.current.getMetrics();
    expect(metrics).toHaveLength(1);
    expect(metrics[0].operation).toBe('test-async-op');
  });

  it('should handle errors in wrapped functions', () => {
    const { result } = renderHook(() => usePerformanceMonitoring());
    
    const errorFunction = vi.fn(() => {
      throw new Error('Test error');
    });
    
    const wrappedFunction = withPerformanceMonitoring(
      errorFunction as (...args: unknown[]) => unknown,
      'test-error-op',
      result.current
    );

    expect(() => wrappedFunction()).toThrow('Test error');
    
    // Should still have completed measurement despite error
    const metrics = result.current.getMetrics();
    expect(metrics).toHaveLength(1);
    expect(metrics[0].operation).toBe('test-error-op');
  });
});