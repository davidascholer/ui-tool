import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { 
  trackHierarchyPerformance, 
  trackHierarchyInteraction, 
  trackHierarchyError,
  HierarchyPerformanceTimer,
  startPerformanceTimer,
  getPerformanceStatistics,
  cleanup
} from '../../src/utils/hierarchyAnalytics';

// Mock the analytics controller
vi.mock('../../api/controllers/analytics', () => ({
  trackEvent: vi.fn().mockResolvedValue(undefined),
}));

import { trackEvent } from '../../src/api/controllers/analytics';
const mockTrackEvent = trackEvent as ReturnType<typeof vi.fn>;

// Mock performance.now for consistent testing
let mockTime = 0;
const originalPerformanceNow = performance.now;

beforeEach(() => {
  mockTime = 0;
  performance.now = vi.fn(() => mockTime);
  vi.clearAllMocks();
});

afterEach(() => {
  performance.now = originalPerformanceNow;
  cleanup();
});

describe('HierarchyAnalytics', () => {
  describe('Performance Tracking', () => {
    it('should track excellent performance without individual event', async () => {
      await trackHierarchyPerformance('save', 50, 10);
      
      // Should not track individual event for excellent performance
      expect(mockTrackEvent).not.toHaveBeenCalled();
    });

    it('should track poor performance with individual event', async () => {
      await trackHierarchyPerformance('save', 600, 10, true, 'slow update');
      
      expect(mockTrackEvent).toHaveBeenCalledWith({
        name: 'hierarchy_update_performance',
        properties: {
          updateType: 'save',
          duration: 600,
          itemCount: 10,
          success: true,
          performanceTier: 'poor',
          context: 'slow update',
        },
      });
    });

    it('should track failed operations regardless of performance', async () => {
      await trackHierarchyPerformance('realtime', 50, 5, false);
      
      expect(mockTrackEvent).toHaveBeenCalledWith({
        name: 'hierarchy_update_performance',
        properties: {
          updateType: 'realtime',
          duration: 50,
          itemCount: 5,
          success: false,
          performanceTier: 'excellent',
          context: undefined,
        },
      });
    });

    it('should round duration to 2 decimal places', async () => {
      await trackHierarchyPerformance('batch', 123.456789, 20, false);
      
      expect(mockTrackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          properties: expect.objectContaining({
            duration: 123.46,
          }),
        })
      );
    });
  });

  describe('User Interaction Tracking', () => {
    it('should track hierarchy interactions', async () => {
      await trackHierarchyInteraction('expand', 'container', 2, {
        keyboardUsed: true,
        interactionTime: 150,
      });
      
      expect(mockTrackEvent).toHaveBeenCalledWith({
        name: 'hierarchy_user_interaction',
        properties: {
          interactionType: 'expand',
          targetType: 'container',
          depth: 2,
          keyboardUsed: true,
          interactionTime: 150,
        },
      });
    });

    it('should handle optional parameters', async () => {
      await trackHierarchyInteraction('select', 'page', 1);
      
      expect(mockTrackEvent).toHaveBeenCalledWith({
        name: 'hierarchy_user_interaction',
        properties: {
          interactionType: 'select',
          targetType: 'page',
          depth: 1,
          keyboardUsed: undefined,
          interactionTime: undefined,
        },
      });
    });
  });

  describe('Error Tracking', () => {
    it('should track hierarchy errors with sanitized messages', async () => {
      const errorMessage = 'This is a "test" error message that is very long and should be truncated after one hundred characters to prevent data overflow';
      
      await trackHierarchyError(
        'render_error',
        errorMessage,
        'HierarchyView',
        15,
        true
      );
      
      expect(mockTrackEvent).toHaveBeenCalledWith({
        name: 'hierarchy_error',
        properties: {
          errorType: 'render_error',
          errorMessage: expect.stringMatching(/^This is a test error message that is very long and should be truncated after one hundred ch/),
          component: 'HierarchyView',
          hierarchySize: 15,
          autoRecoveryAttempted: true,
        },
      });
    });

    it('should remove quotes from error messages', async () => {
      await trackHierarchyError(
        'update_failure',
        'Error with "quotes" and \'apostrophes\'',
        'UpdateHook',
        5
      );
      
      expect(mockTrackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          properties: expect.objectContaining({
            errorMessage: 'Error with quotes and apostrophes',
          }),
        })
      );
    });
  });

  describe('Performance Timer', () => {
    it('should measure elapsed time correctly', () => {
      mockTime = 100;
      const timer = new HierarchyPerformanceTimer('test operation');
      
      mockTime = 250;
      expect(timer.getElapsed()).toBe(150);
    });

    it('should end timer and track performance', () => {
      mockTime = 100;
      const timer = new HierarchyPerformanceTimer('test operation');
      
      mockTime = 350; // 250ms elapsed
      timer.end('save', 8, true, 'test context');
      
      // 250ms is "good" performance, so it won't be tracked individually
      expect(mockTrackEvent).not.toHaveBeenCalled();
    });

    it('should use operation name as context when not provided', () => {
      mockTime = 0;
      const timer = new HierarchyPerformanceTimer('expansion update');
      
      mockTime = 600; // Poor performance
      timer.end('expansion', 12);
      
      expect(mockTrackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          properties: expect.objectContaining({
            context: 'expansion update',
          }),
        })
      );
    });
  });

  describe('Utility Functions', () => {
    it('should create performance timer with startPerformanceTimer', () => {
      mockTime = 50;
      const timer = startPerformanceTimer('utility test');
      
      expect(timer).toBeInstanceOf(HierarchyPerformanceTimer);
      
      mockTime = 200;
      expect(timer.getElapsed()).toBe(150);
    });

    it('should return initial performance statistics', () => {
      const stats = getPerformanceStatistics();
      
      expect(stats).toEqual({
        averageDuration: 0,
        medianDuration: 0,
        p95Duration: 0,
        totalUpdates: 0,
        updateTypeBreakdown: {},
        performanceTrend: 'stable',
      });
    });
  });

  describe('Performance Tiers', () => {
    it('should classify performance correctly', async () => {
      // Test different performance tiers
      const testCases = [
        { duration: 50, tier: 'excellent' },
        { duration: 150, tier: 'good' },
        { duration: 300, tier: 'acceptable' },
        { duration: 700, tier: 'poor' },
      ];

      for (const { duration, tier } of testCases) {
        vi.clearAllMocks();
        await trackHierarchyPerformance('save', duration, 10, false);
        
        expect(mockTrackEvent).toHaveBeenCalledWith(
          expect.objectContaining({
            properties: expect.objectContaining({
              performanceTier: tier,
            }),
          })
        );
      }
    });
  });

  describe('Development Logging', () => {
    afterEach(() => {
      // Reset any global mocks
      vi.clearAllMocks();
    });

    it('should track analytics events properly', async () => {
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      await trackHierarchyPerformance('save', 600, 10);
      
      // Should track the event regardless of environment
      expect(mockTrackEvent).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });

    it('should track error events with sanitized messages', async () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      await trackHierarchyError('state_corruption', 'Test error with sensitive data', 'TestComponent', 5);
      
      expect(mockTrackEvent).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'hierarchy_error',
          properties: expect.objectContaining({
            errorMessage: 'Test error with sensitive data',
          }),
        })
      );
      
      consoleSpy.mockRestore();
    });
  });
});