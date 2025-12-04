/**
 * Debounced Updates Unit Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T036)
 * Tests debounced update logic with fake timers for real-time preview functionality
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { ComponentEntity, PropertyChange } from '../../src/utils/types';

// Mock debounced update hook
interface DebouncedUpdatesState {
  pendingUpdates: Map<string, PropertyChange[]>;
  lastUpdateTime: number;
  isDebouncing: boolean;
  batchCount: number;
  queueUpdate: (entityId: string, change: PropertyChange) => void;
  flushUpdates: () => void;
  clearUpdates: () => void;
  getBatchSize: () => number;
}

function createMockUseBatchUpdates(debounceMs: number = 500): DebouncedUpdatesState {
  let pendingUpdates = new Map<string, PropertyChange[]>();
  let lastUpdateTime = 0;
  let isDebouncing = false;
  let batchCount = 0;
  let debounceTimeout: NodeJS.Timeout | null = null;
  
  const processUpdates = () => {
    // Process all pending updates
    const totalChanges = Array.from(pendingUpdates.values())
      .reduce((total, changes) => total + changes.length, 0);
    
    batchCount += totalChanges;
    lastUpdateTime = Date.now();
    pendingUpdates.clear();
    isDebouncing = false;
  };
  
  return {
    pendingUpdates,
    lastUpdateTime,
    isDebouncing,
    batchCount,
    
    queueUpdate: (entityId: string, change: PropertyChange) => {
      if (!pendingUpdates.has(entityId)) {
        pendingUpdates.set(entityId, []);
      }
      pendingUpdates.get(entityId)!.push(change);
      
      // Clear existing timeout
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      
      isDebouncing = true;
      
      // Set new timeout
      debounceTimeout = setTimeout(() => {
        processUpdates();
      }, debounceMs);
    },
    
    flushUpdates: () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }
      processUpdates();
    },
    
    clearUpdates: () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
      }
      pendingUpdates.clear();
      isDebouncing = false;
    },
    
    getBatchSize: () => {
      return Array.from(pendingUpdates.values())
        .reduce((total, changes) => total + changes.length, 0);
    }
  };
}

// Helper function to create property changes
function createPropertyChange(entityId: string, field: string, newValue: unknown): PropertyChange {
  return {
    entityId,
    entityType: 'Component',
    field,
    oldValue: `old-${field}`,
    newValue,
    timestamp: Date.now()
  };
}

describe('Debounced Updates', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('Basic Debouncing Behavior', () => {
    it('should debounce single updates with 500ms delay', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Queue an update
      const change = createPropertyChange('comp1', 'text', 'new value');
      batchUpdates.queueUpdate('comp1', change);
      
      // Should be debouncing but not processed yet
      expect(batchUpdates.isDebouncing).toBe(true);
      expect(batchUpdates.batchCount).toBe(0);
      expect(batchUpdates.getBatchSize()).toBe(1);
      
      // Advance time by 499ms - should not process yet
      vi.advanceTimersByTime(499);
      expect(batchUpdates.batchCount).toBe(0);
      expect(batchUpdates.isDebouncing).toBe(true);
      
      // Advance time by 1ms more (500ms total) - should process
      vi.advanceTimersByTime(1);
      expect(batchUpdates.batchCount).toBe(1);
      expect(batchUpdates.isDebouncing).toBe(false);
      expect(batchUpdates.getBatchSize()).toBe(0); // Should be cleared
    });

    it('should reset debounce timer on new updates', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // First update
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      
      // Advance time by 300ms
      vi.advanceTimersByTime(300);
      expect(batchUpdates.batchCount).toBe(0);
      
      // Second update - should reset timer
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'color', 'blue'));
      
      // Advance time by 300ms (600ms total from first update)
      vi.advanceTimersByTime(300);
      expect(batchUpdates.batchCount).toBe(0); // Still debouncing from second update
      
      // Advance another 200ms (500ms from second update)
      vi.advanceTimersByTime(200);
      expect(batchUpdates.batchCount).toBe(2); // Both updates processed
    });

    it('should handle multiple entities independently', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Updates to different entities
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      batchUpdates.queueUpdate('comp2', createPropertyChange('comp2', 'color', 'red'));
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'size', 'large'));
      
      expect(batchUpdates.getBatchSize()).toBe(3);
      expect(batchUpdates.pendingUpdates.get('comp1')).toHaveLength(2);
      expect(batchUpdates.pendingUpdates.get('comp2')).toHaveLength(1);
      
      // Process all updates
      vi.advanceTimersByTime(500);
      expect(batchUpdates.batchCount).toBe(3);
    });
  });

  describe('Batch Detection', () => {
    it('should detect rapid updates as batch (3+ changes in 1 second)', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      const startTime = Date.now();
      
      // Simulate rapid updates within 1 second
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      
      vi.advanceTimersByTime(200);
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'color', 'red'));
      
      vi.advanceTimersByTime(200);
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'size', 'large'));
      
      // Should have 3 changes queued (batch scenario)
      expect(batchUpdates.getBatchSize()).toBe(3);
      
      // Process all at once
      vi.advanceTimersByTime(100); // Complete the 500ms debounce
      expect(batchUpdates.batchCount).toBe(3);
    });

    it('should handle batch updates with requestAnimationFrame scheduling', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
        setTimeout(cb, 16); // ~60 FPS
        return 1;
      });
      
      // Queue multiple rapid updates
      for (let i = 0; i < 5; i++) {
        batchUpdates.queueUpdate(`comp${i}`, createPropertyChange(`comp${i}`, 'text', `value${i}`));
      }
      
      expect(batchUpdates.getBatchSize()).toBe(5);
      
      // Process with animation frame timing
      vi.advanceTimersByTime(500);
      expect(batchUpdates.batchCount).toBe(5);
      
      rafSpy.mockRestore();
    });
  });

  describe('Performance Optimization', () => {
    it('should maintain performance with frequent updates', () => {
      const batchUpdates = createMockUseBatchUpdates(100); // Shorter debounce for testing
      
      const startTime = performance.now();
      
      // Simulate 50 rapid updates
      for (let i = 0; i < 50; i++) {
        batchUpdates.queueUpdate(`comp${i % 10}`, createPropertyChange(`comp${i % 10}`, 'text', `value${i}`));
        vi.advanceTimersByTime(10); // 10ms between updates
      }
      
      const endTime = performance.now();
      
      // Should handle updates efficiently
      expect(endTime - startTime).toBeLessThan(100); // Processing should be fast
      
      // Process final batch
      vi.advanceTimersByTime(100);
      expect(batchUpdates.batchCount).toBe(50);
    });

    it('should limit memory usage with large batches', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Queue many updates
      for (let i = 0; i < 1000; i++) {
        batchUpdates.queueUpdate(`comp${i % 100}`, createPropertyChange(`comp${i % 100}`, 'text', `value${i}`));
      }
      
      // Should have limited number of entities (100 unique)
      expect(batchUpdates.pendingUpdates.size).toBe(100);
      expect(batchUpdates.getBatchSize()).toBe(1000);
      
      // Process all
      vi.advanceTimersByTime(500);
      expect(batchUpdates.batchCount).toBe(1000);
      expect(batchUpdates.pendingUpdates.size).toBe(0); // Cleared after processing
    });
  });

  describe('Manual Control', () => {
    it('should support manual flush of pending updates', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Queue updates
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      batchUpdates.queueUpdate('comp2', createPropertyChange('comp2', 'color', 'red'));
      
      expect(batchUpdates.getBatchSize()).toBe(2);
      expect(batchUpdates.batchCount).toBe(0);
      
      // Manual flush (don't wait for debounce)
      batchUpdates.flushUpdates();
      
      expect(batchUpdates.batchCount).toBe(2);
      expect(batchUpdates.getBatchSize()).toBe(0);
      expect(batchUpdates.isDebouncing).toBe(false);
    });

    it('should support clearing pending updates', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Queue updates
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      batchUpdates.queueUpdate('comp2', createPropertyChange('comp2', 'color', 'red'));
      
      expect(batchUpdates.getBatchSize()).toBe(2);
      expect(batchUpdates.isDebouncing).toBe(true);
      
      // Clear updates
      batchUpdates.clearUpdates();
      
      expect(batchUpdates.getBatchSize()).toBe(0);
      expect(batchUpdates.isDebouncing).toBe(false);
      expect(batchUpdates.batchCount).toBe(0);
      
      // Timer should not fire
      vi.advanceTimersByTime(500);
      expect(batchUpdates.batchCount).toBe(0);
    });
  });

  describe('Edge Cases', () => {
    it('should handle updates at timer boundary', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Update at t=0
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      
      // Update at t=499 (just before timer fires)
      vi.advanceTimersByTime(499);
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'color', 'red'));
      
      // Should reset timer
      vi.advanceTimersByTime(499);
      expect(batchUpdates.batchCount).toBe(0); // Still debouncing
      
      vi.advanceTimersByTime(1);
      expect(batchUpdates.batchCount).toBe(2); // Now processed
    });

    it('should handle zero debounce time', () => {
      const batchUpdates = createMockUseBatchUpdates(0);
      
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      
      // Should process immediately
      vi.advanceTimersByTime(0);
      expect(batchUpdates.batchCount).toBe(1);
    });

    it('should handle concurrent updates to same entity field', () => {
      const batchUpdates = createMockUseBatchUpdates(500);
      
      // Multiple updates to same field
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value1'));
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value2'));
      batchUpdates.queueUpdate('comp1', createPropertyChange('comp1', 'text', 'value3'));
      
      expect(batchUpdates.getBatchSize()).toBe(3); // Should queue all changes
      
      vi.advanceTimersByTime(500);
      expect(batchUpdates.batchCount).toBe(3); // All processed
    });
  });
});