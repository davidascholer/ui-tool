/**
 * Batch Updates Hook
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T038)
 * Optimizes performance by batching rapid updates and using requestAnimationFrame
 */

import { useCallback, useRef, useState, useEffect } from 'react';
import type { PropertyChange } from '../utils/types';

export interface BatchUpdatesConfig {
  debounceMs?: number;
  batchThreshold?: number; // Number of changes to trigger batch mode
  batchTimeWindow?: number; // Time window in ms to detect batches
  maxBatchSize?: number;
  enableRafScheduling?: boolean;
}

export interface BatchUpdatesState {
  pendingUpdates: Map<string, PropertyChange[]>;
  isDebouncing: boolean;
  isBatchMode: boolean;
  batchCount: number;
  lastBatchTime: number;
  performanceMetrics: {
    totalUpdates: number;
    batchedUpdates: number;
    avgProcessingTime: number;
    lastFrameTime: number;
  };
}

export interface BatchUpdatesActions {
  queueUpdate: (entityId: string, change: PropertyChange) => void;
  flushUpdates: () => void;
  clearUpdates: () => void;
  getBatchSize: () => number;
  getPerformanceMetrics: () => BatchUpdatesState['performanceMetrics'];
}

export function useBatchUpdates(
  onProcessUpdates: (updates: Map<string, PropertyChange[]>) => void,
  config: BatchUpdatesConfig = {}
): BatchUpdatesState & BatchUpdatesActions {
  const {
    debounceMs = 500,
    batchThreshold = 3,
    batchTimeWindow = 1000,
    maxBatchSize = 50,
    enableRafScheduling = true
  } = config;

  const [state, setState] = useState<BatchUpdatesState>({
    pendingUpdates: new Map(),
    isDebouncing: false,
    isBatchMode: false,
    batchCount: 0,
    lastBatchTime: 0,
    performanceMetrics: {
      totalUpdates: 0,
      batchedUpdates: 0,
      avgProcessingTime: 0,
      lastFrameTime: performance.now()
    }
  });

  // Refs to maintain current values in closures
  const pendingUpdatesRef = useRef<Map<string, PropertyChange[]>>(new Map());
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const processingTimeRef = useRef<number[]>([]);
  const batchStartTimeRef = useRef<number>(0);

  // Process updates with performance tracking
  const processUpdates = useCallback(() => {
    const startTime = performance.now();
    const currentUpdates = new Map(pendingUpdatesRef.current);
    const updateCount = Array.from(currentUpdates.values())
      .reduce((total, changes) => total + changes.length, 0);

    if (updateCount === 0) return;

    // Process the updates
    onProcessUpdates(currentUpdates);

    // Clear pending updates
    pendingUpdatesRef.current.clear();

    // Update performance metrics
    const processingTime = performance.now() - startTime;
    processingTimeRef.current.push(processingTime);
    
    // Keep only last 10 processing times for average
    if (processingTimeRef.current.length > 10) {
      processingTimeRef.current = processingTimeRef.current.slice(-10);
    }

    const avgProcessingTime = processingTimeRef.current.reduce((a, b) => a + b, 0) / 
                            processingTimeRef.current.length;

    setState(prev => ({
      ...prev,
      pendingUpdates: new Map(),
      isDebouncing: false,
      isBatchMode: false,
      batchCount: prev.batchCount + updateCount,
      lastBatchTime: Date.now(),
      performanceMetrics: {
        ...prev.performanceMetrics,
        totalUpdates: prev.performanceMetrics.totalUpdates + updateCount,
        batchedUpdates: updateCount > 1 ? prev.performanceMetrics.batchedUpdates + updateCount : prev.performanceMetrics.batchedUpdates,
        avgProcessingTime,
        lastFrameTime: performance.now()
      }
    }));
  }, [onProcessUpdates]);

  // Schedule processing with requestAnimationFrame for better performance
  const scheduleProcessing = useCallback(() => {
    if (enableRafScheduling) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      
      rafIdRef.current = requestAnimationFrame(() => {
        processUpdates();
        rafIdRef.current = null;
      });
    } else {
      processUpdates();
    }
  }, [processUpdates, enableRafScheduling]);

  // Debounced processing
  const scheduleDebounced = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      scheduleProcessing();
      debounceTimeoutRef.current = null;
    }, debounceMs);
  }, [scheduleProcessing, debounceMs]);

  // Detect if we're in batch mode based on update frequency
  const detectBatchMode = useCallback(() => {
    const now = Date.now();
    const currentSize = Array.from(pendingUpdatesRef.current.values())
      .reduce((total, changes) => total + changes.length, 0);
    
    const timeSinceLastBatch = now - batchStartTimeRef.current;
    const isBatch = currentSize >= batchThreshold && timeSinceLastBatch <= batchTimeWindow;
    
    setState(prev => ({ ...prev, isBatchMode: isBatch }));
    
    return isBatch;
  }, [batchThreshold, batchTimeWindow]);

  // Queue an update
  const queueUpdate = useCallback((entityId: string, change: PropertyChange) => {
    // Check batch size limits
    const currentSize = Array.from(pendingUpdatesRef.current.values())
      .reduce((total, changes) => total + changes.length, 0);
    
    if (currentSize >= maxBatchSize) {
      // Force flush if we hit max batch size
      scheduleProcessing();
      return;
    }

    // Add to pending updates
    if (!pendingUpdatesRef.current.has(entityId)) {
      pendingUpdatesRef.current.set(entityId, []);
    }
    pendingUpdatesRef.current.get(entityId)!.push(change);

    // Update state
    setState(prev => ({
      ...prev,
      pendingUpdates: new Map(pendingUpdatesRef.current),
      isDebouncing: true
    }));

    // Set batch start time if this is the first update
    if (currentSize === 0) {
      batchStartTimeRef.current = Date.now();
    }

    // Detect batch mode and schedule accordingly
    const isBatch = detectBatchMode();
    
    if (isBatch && enableRafScheduling) {
      // Use RAF for batch updates to maintain 60 FPS
      scheduleProcessing();
    } else {
      // Use debouncing for individual updates
      scheduleDebounced();
    }
  }, [maxBatchSize, scheduleProcessing, scheduleDebounced, detectBatchMode, enableRafScheduling]);

  // Manual flush
  const flushUpdates = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
    
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    
    processUpdates();
  }, [processUpdates]);

  // Clear all updates
  const clearUpdates = useCallback(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
      debounceTimeoutRef.current = null;
    }
    
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    
    pendingUpdatesRef.current.clear();
    
    setState(prev => ({
      ...prev,
      pendingUpdates: new Map(),
      isDebouncing: false,
      isBatchMode: false
    }));
  }, []);

  // Get current batch size
  const getBatchSize = useCallback(() => {
    return Array.from(pendingUpdatesRef.current.values())
      .reduce((total, changes) => total + changes.length, 0);
  }, []);

  // Get performance metrics
  const getPerformanceMetrics = useCallback(() => {
    return state.performanceMetrics;
  }, [state.performanceMetrics]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return {
    ...state,
    queueUpdate,
    flushUpdates,
    clearUpdates,
    getBatchSize,
    getPerformanceMetrics
  };
}

// Helper hook for monitoring FPS during updates
export function useUpdatePerformanceMonitor() {
  const [fps, setFps] = useState(60);
  const [frameCount, setFrameCount] = useState(0);
  const lastFrameTimeRef = useRef(performance.now());
  const frameCountRef = useRef(0);
  
  const updateFps = useCallback(() => {
    frameCountRef.current++;
    const now = performance.now();
    const delta = now - lastFrameTimeRef.current;
    
    if (delta >= 1000) {
      const currentFps = (frameCountRef.current * 1000) / delta;
      setFps(Math.round(currentFps));
      setFrameCount(frameCountRef.current);
      
      frameCountRef.current = 0;
      lastFrameTimeRef.current = now;
    }
    
    requestAnimationFrame(updateFps);
  }, []);
  
  useEffect(() => {
    const rafId = requestAnimationFrame(updateFps);
    return () => cancelAnimationFrame(rafId);
  }, [updateFps]);
  
  return { fps, frameCount };
}