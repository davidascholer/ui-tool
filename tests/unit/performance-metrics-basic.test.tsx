/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePerformanceMetrics } from '../../src/hooks/usePerformanceMetrics';

// Mock hierarchyLogger
vi.mock('../../src/utils/hierarchyLogger', () => ({
  hierarchyLogger: {
    getEntries: vi.fn(() => [])
  }
}));

// Mock performance API
Object.defineProperty(window, 'performance', {
  value: {
    memory: {
      usedJSHeapSize: 1024 * 1024 * 10 // 10MB
    }
  },
  writable: true
});

describe('usePerformanceMetrics - Basic', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize without crashing', () => {
    const { result } = renderHook(() => usePerformanceMetrics({ enabled: false }));
    
    expect(result.current).toBeDefined();
    expect(result.current.metrics).toBe(null);
    expect(result.current.trends).toEqual([]);
    expect(result.current.health).toBe(null);
    expect(result.current.isEnabled).toBe(false);
  });

  it('should handle enabled state', () => {
    const { result } = renderHook(() => usePerformanceMetrics({ enabled: true }));
    
    expect(result.current.isEnabled).toBe(true);
  });
});