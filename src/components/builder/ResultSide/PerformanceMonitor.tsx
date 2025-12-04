/**
 * Performance Monitor Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T043)
 * Monitors and displays performance metrics for hierarchy updates
 */

import { useState, useCallback } from 'react';
import type { PerformanceMetrics } from '../../../hooks/usePerformanceMonitor';

// Simple className utility
function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Note: Import usePerformanceMonitor directly from '../../../hooks/usePerformanceMonitor' when needed



interface PerformanceMonitorProps {
  metrics: PerformanceMetrics;
  targetFps?: number;
  showDetailed?: boolean;
  className?: string;
}

export function PerformanceMonitor({
  metrics,
  targetFps = 60,
  showDetailed = false,
  className
}: PerformanceMonitorProps) {
  const [isExpanded, setIsExpanded] = useState(false);


  // Performance status calculations
  const fpsStatus = metrics.fps >= targetFps * 0.9 ? 'good' : 
                   metrics.fps >= targetFps * 0.7 ? 'warning' : 'critical';
  
  const batchEfficiency = metrics.totalUpdates > 0 
    ? (metrics.batchedUpdates / metrics.totalUpdates) * 100 
    : 100;

  // Calculate alert based on performance metrics
  const alertMessage = (() => {
    if (metrics.fps < targetFps * 0.5) {
      return `Low FPS: ${metrics.fps.toFixed(1)} (target: ${targetFps})`;
    } else if (metrics.avgProcessingTime > 100) {
      return `Slow processing: ${metrics.avgProcessingTime.toFixed(1)}ms`;
    } else if (batchEfficiency < 50 && metrics.totalUpdates > 10) {
      return `Low batch efficiency: ${batchEfficiency.toFixed(1)}%`;
    }
    return null;
  })();
  


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const formatMemory = (bytes?: number) => {
    if (!bytes) return 'N/A';
    const mb = bytes / 1024 / 1024;
    return `${mb.toFixed(1)}MB`;
  };

  const formatTime = useCallback((timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    if (diff < 1000) return 'Just now';
    if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
    return `${Math.floor(diff / 60000)}m ago`;
  }, []);

  if (!showDetailed && !alertMessage) {
    // Minimal display - just FPS indicator
    return (
      <div className={cn(
        'flex items-center space-x-1 text-xs',
        getStatusColor(fpsStatus),
        className
      )}>
        <div className={cn(
          'h-2 w-2 rounded-full',
          fpsStatus === 'good' && 'bg-green-500',
          fpsStatus === 'warning' && 'bg-yellow-500 animate-pulse',
          fpsStatus === 'critical' && 'bg-red-500 animate-bounce'
        )} />
        <span>{metrics.fps.toFixed(0)} FPS</span>
      </div>
    );
  }

  return (
    <div className={cn(
      'border rounded-lg bg-white shadow-sm',
      alertMessage ? 'border-yellow-300 bg-yellow-50' : '',
      className
    )}>
      {/* Header */}
      <div 
        className="flex items-center justify-between p-3 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <div className={cn(
            'h-2 w-2 rounded-full',
            fpsStatus === 'good' && 'bg-green-500',
            fpsStatus === 'warning' && 'bg-yellow-500 animate-pulse',
            fpsStatus === 'critical' && 'bg-red-500 animate-bounce'
          )} />
          <span className="text-sm font-medium text-gray-700">
            Performance
          </span>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span className={getStatusColor(fpsStatus)}>
            {metrics.fps.toFixed(0)} FPS
          </span>
          <span>{isExpanded ? '−' : '+'}</span>
        </div>
      </div>

      {/* Alert banner */}
      {alertMessage && (
        <div className="px-3 pb-2">
          <div className="bg-yellow-100 border border-yellow-300 rounded px-2 py-1 text-xs text-yellow-800">
            ⚠️ {alertMessage}
          </div>
        </div>
      )}

      {/* Detailed metrics */}
      {isExpanded && (
        <div className="px-3 pb-3 space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-gray-500">FPS:</span>
              <span className={cn('ml-1 font-medium', getStatusColor(fpsStatus))}>
                {metrics.fps.toFixed(1)}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Drops:</span>
              <span className="ml-1 font-medium text-gray-700">
                {metrics.frameDrops}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Updates:</span>
              <span className="ml-1 font-medium text-gray-700">
                {metrics.totalUpdates}
              </span>
            </div>
            <div>
              <span className="text-gray-500">Batched:</span>
              <span className="ml-1 font-medium text-gray-700">
                {metrics.batchedUpdates} ({batchEfficiency.toFixed(0)}%)
              </span>
            </div>
            <div>
              <span className="text-gray-500">Avg Time:</span>
              <span className="ml-1 font-medium text-gray-700">
                {metrics.avgProcessingTime.toFixed(1)}ms
              </span>
            </div>
            <div>
              <span className="text-gray-500">Memory:</span>
              <span className="ml-1 font-medium text-gray-700">
                {formatMemory(metrics.memoryUsage)}
              </span>
            </div>
          </div>
          
          {metrics.lastUpdateTime > 0 && (
            <div className="pt-2 border-t border-gray-200">
              <span className="text-gray-500">Last update:</span>
              <span className="ml-1 text-gray-600">
                {formatTime(metrics.lastUpdateTime)}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

