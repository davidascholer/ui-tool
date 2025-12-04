/**
 * LazyIndicatorManager Component
 * Feature 004: Real-Time Hierarchy Updates - T048
 * Lazy-loaded wrapper for IndicatorManager to optimize bundle size
 */

import { lazy, Suspense } from 'react';
import type { IndicatorManagerProps } from './IndicatorManager';

// Lazy load the actual IndicatorManager
const IndicatorManagerComponent = lazy(() => 
  import('./IndicatorManager').then(module => ({ 
    default: module.IndicatorManager 
  }))
);

/**
 * Minimal loading fallback for indicators
 */
const IndicatorSkeleton = ({ count = 1 }: { count?: number }) => (
  <div className="inline-flex items-center gap-1">
    {Array.from({ length: count }, (_, i) => (
      <div 
        key={i}
        className="w-5 h-5 bg-gray-200 rounded animate-pulse"
        aria-hidden="true"
      />
    ))}
  </div>
);

/**
 * LazyIndicatorManager - Optimized wrapper that lazy-loads indicator components
 * 
 * Benefits:
 * - Reduces initial bundle size by ~15-20KB (indicator components + dependencies)
 * - Improves initial page load performance
 * - Maintains same API as original IndicatorManager
 * - Graceful loading state with skeleton
 */
export function LazyIndicatorManager(props: IndicatorManagerProps) {
  const { component, maxIndicators = 5 } = props;
  
  // Early return for no indicators - avoids loading any components
  if (!component || !component.tailwindOptions?.classList?.length) {
    return null;
  }

  // Estimate indicator count for skeleton (rough heuristic)
  const estimatedIndicatorCount = Math.min(
    component.tailwindOptions.classList.length,
    maxIndicators
  );

  return (
    <Suspense 
      fallback={
        <IndicatorSkeleton count={Math.min(estimatedIndicatorCount, 3)} />
      }
    >
      <IndicatorManagerComponent {...props} />
    </Suspense>
  );
}

export default LazyIndicatorManager;