/**
 * Performance Monitor Hook
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T043)
 * Monitors performance metrics for hierarchy updates
 */

import { useState, useCallback, useRef, useEffect } from 'react';

export interface PerformanceMetrics {
  fps: number;
  totalUpdates: number;
  batchedUpdates: number;
  avgProcessingTime: number;
  memoryUsage?: number;
  frameDrops: number;
  lastUpdateTime: number;
}

// Hook for real-time performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    totalUpdates: 0,
    batchedUpdates: 0,
    avgProcessingTime: 0,
    frameDrops: 0,
    lastUpdateTime: 0
  });

  const frameCountRef = useRef(0);
  const lastFrameTimeRef = useRef(0);
  const frameTimesRef = useRef<number[]>([]);
  const processingTimesRef = useRef<number[]>([]);
  const rafIdRef = useRef<number>(0);

  // Track frame rate
  const updateFps = useCallback(function updateFpsInner() {
    const now = performance.now();
    
    if (lastFrameTimeRef.current === 0) {
      lastFrameTimeRef.current = now;
      rafIdRef.current = requestAnimationFrame(updateFpsInner);
      return;
    }
    
    const delta = now - lastFrameTimeRef.current;
    
    if (delta > 0) {
      frameTimesRef.current.push(delta);
      
      // Keep only last 60 frame times (1 second at 60fps)
      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current = frameTimesRef.current.slice(-60);
      }
      
      // Calculate FPS from average frame time
      const avgFrameTime = frameTimesRef.current.reduce((a: number, b: number) => a + b, 0) / frameTimesRef.current.length;
      const fps = 1000 / avgFrameTime;
      
      // Count frame drops (frame times > 20ms for 60fps)
      const frameDrops = frameTimesRef.current.filter((time: number) => time > 20).length;
      
      setMetrics(prev => ({
        ...prev,
        fps: isFinite(fps) ? fps : 60,
        frameDrops
      }));
    }
    
    frameCountRef.current++;
    lastFrameTimeRef.current = now;
    
    rafIdRef.current = requestAnimationFrame(updateFpsInner);
  }, []);

  // Start monitoring
  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(updateFps);
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updateFps]);

  // Track processing time
  const trackProcessingTime = useCallback((processingTime: number) => {
    processingTimesRef.current.push(processingTime);
    
    // Keep only last 20 processing times
    if (processingTimesRef.current.length > 20) {
      processingTimesRef.current = processingTimesRef.current.slice(-20);
    }
    
    const avgProcessingTime = processingTimesRef.current.reduce((a: number, b: number) => a + b, 0) / 
                             processingTimesRef.current.length;
    
    setMetrics(prev => ({
      ...prev,
      avgProcessingTime: isFinite(avgProcessingTime) ? avgProcessingTime : 0,
      lastUpdateTime: Date.now()
    }));
  }, []);

  // Track update counts
  const trackUpdate = useCallback((isBatched: boolean = false) => {
    setMetrics(prev => ({
      ...prev,
      totalUpdates: prev.totalUpdates + 1,
      batchedUpdates: isBatched ? prev.batchedUpdates + 1 : prev.batchedUpdates
    }));
  }, []);

  // Get memory usage if available
  const trackMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as unknown as { memory: { usedJSHeapSize: number } }).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize
      }));
    }
  }, []);

  // Update memory usage every 5 seconds
  useEffect(() => {
    const interval = setInterval(trackMemoryUsage, 5000);
    return () => clearInterval(interval);
  }, [trackMemoryUsage]);

  return {
    metrics,
    trackProcessingTime,
    trackUpdate,
    reset: () => {
      setMetrics({
        fps: 60,
        totalUpdates: 0,
        batchedUpdates: 0,
        avgProcessingTime: 0,
        frameDrops: 0,
        lastUpdateTime: 0
      });
      frameTimesRef.current = [];
      processingTimesRef.current = [];
    }
  };
}