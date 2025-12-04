/**
 * Responsive Indicator Utilities
 * Feature 004: Real-Time Hierarchy Updates - T050
 * Provides responsive behavior for indicator display across viewport sizes
 */

import { useEffect, useState, useMemo } from 'react';

export type ViewportSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ResponsiveMode = 'auto' | 'compact' | 'minimal' | 'full';

export interface ResponsiveConfig {
  /**
   * Maximum number of indicators to show at different viewport sizes
   */
  maxIndicators: {
    xs: number;   // < 480px
    sm: number;   // 480px - 640px  
    md: number;   // 640px - 768px
    lg: number;   // 768px - 1024px
    xl: number;   // 1024px - 1280px
    '2xl': number; // >= 1280px
  };
  
  /**
   * Indicator sizes for different viewports
   */
  indicatorSizes: {
    xs: 'xs' | 'sm';
    sm: 'xs' | 'sm' | 'md';
    md: 'sm' | 'md';
    lg: 'sm' | 'md' | 'lg';
    xl: 'md' | 'lg';
    '2xl': 'md' | 'lg';
  };
  
  /**
   * Whether to show text labels on indicators
   */
  showLabels: {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;
    '2xl': boolean;
  };
  
  /**
   * Collapse threshold - below this width, use minimal display
   */
  collapseThreshold: number;
}

/**
 * Default responsive configuration optimized for hierarchy indicators
 */
export const defaultResponsiveConfig: ResponsiveConfig = {
  maxIndicators: {
    xs: 2,     // Very limited space - only most important
    sm: 3,     // Small phones - minimal indicators
    md: 4,     // Tablets/large phones - more indicators
    lg: 5,     // Desktop - full indicator set
    xl: 6,     // Large desktop - can show extra
    '2xl': 8   // Very large screens - show all
  },
  indicatorSizes: {
    xs: 'xs',    // Tiny indicators for mobile
    sm: 'sm',    // Small indicators for small screens
    md: 'sm',    // Small-medium for tablets
    lg: 'md',    // Medium for desktop
    xl: 'md',    // Medium for large desktop
    '2xl': 'lg'  // Large for very large screens
  },
  showLabels: {
    xs: false,   // No text labels on mobile
    sm: false,   // No text labels on small screens
    md: true,    // Show labels on tablets
    lg: true,    // Show labels on desktop
    xl: true,    // Show labels on large desktop
    '2xl': true  // Show labels on very large screens
  },
  collapseThreshold: 320 // Below 320px, use minimal display
};

/**
 * Viewport size detection hook with optimized breakpoints
 */
export function useViewportSize(): ViewportSize {
  const [viewportSize, setViewportSize] = useState<ViewportSize>('lg');
  
  useEffect(() => {
    const updateViewportSize = () => {
      const width = window.innerWidth;
      
      if (width < 480) {
        setViewportSize('xs');
      } else if (width < 640) {
        setViewportSize('sm');
      } else if (width < 768) {
        setViewportSize('md');
      } else if (width < 1024) {
        setViewportSize('lg');
      } else if (width < 1280) {
        setViewportSize('xl');
      } else {
        setViewportSize('2xl');
      }
    };
    
    // Initial check
    updateViewportSize();
    
    // Add resize listener with throttling
    let timeoutId: number;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(updateViewportSize, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);
  
  return viewportSize;
}

/**
 * Container width detection hook for component-level responsiveness
 */
export function useContainerWidth(containerRef: React.RefObject<HTMLElement>) {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef]);
  
  return containerWidth;
}

/**
 * Responsive indicator configuration hook
 */
export function useResponsiveIndicators(
  config: ResponsiveConfig = defaultResponsiveConfig,
  containerWidth?: number
) {
  const viewportSize = useViewportSize();
  
  const responsiveSettings = useMemo(() => {
    // Use container width for more precise responsive behavior if available
    let effectiveSize = viewportSize;
    
    if (containerWidth !== undefined) {
      if (containerWidth < 300) {
        effectiveSize = 'xs';
      } else if (containerWidth < 400) {
        effectiveSize = 'sm';
      } else if (containerWidth < 600) {
        effectiveSize = 'md';
      } else if (containerWidth < 800) {
        effectiveSize = 'lg';
      } else if (containerWidth < 1000) {
        effectiveSize = 'xl';
      } else {
        effectiveSize = '2xl';
      }
    }
    
    return {
      maxIndicators: config.maxIndicators[effectiveSize],
      indicatorSize: config.indicatorSizes[effectiveSize],
      showLabels: config.showLabels[effectiveSize],
      isCollapsed: containerWidth ? containerWidth < config.collapseThreshold : false,
      viewportSize: effectiveSize,
      containerWidth: containerWidth || 0
    };
  }, [viewportSize, containerWidth, config]);
  
  return responsiveSettings;
}

/**
 * Responsive CSS classes generator for indicators
 */
export function getResponsiveIndicatorClasses(
  size: ViewportSize,
  indicatorSize: 'xs' | 'sm' | 'md' | 'lg',
  showLabels: boolean
) {
  const sizeClasses = {
    xs: 'w-3 h-3 text-xs',
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-sm'
  };
  
  const gapClasses = {
    xs: 'gap-0.5',
    sm: 'gap-1',
    md: 'gap-1',
    lg: 'gap-1.5'
  };
  
  const containerClasses = [
    'flex items-center',
    gapClasses[indicatorSize],
    // Responsive padding
    size === 'xs' ? 'px-1 py-0.5' : 'px-2 py-1'
  ];
  
  const indicatorClasses = [
    sizeClasses[indicatorSize],
    'rounded flex-shrink-0',
    // Mobile-specific optimizations
    size === 'xs' ? 'border-0' : 'border'
  ];
  
  const labelClasses = showLabels ? [
    'ml-1 truncate',
    size === 'xs' || size === 'sm' ? 'text-xs' : 'text-sm',
    // Hide labels on very small screens even if showLabels is true
    size === 'xs' ? 'hidden' : 'block'
  ] : ['hidden'];
  
  return {
    container: containerClasses.join(' '),
    indicator: indicatorClasses.join(' '),
    label: labelClasses.join(' ')
  };
}

/**
 * Adaptive indicator display logic
 */
export function adaptIndicatorsForViewport<T extends { priority?: number }>(
  indicators: T[],
  maxIndicators: number,
  isCollapsed: boolean
): {
  visibleIndicators: T[];
  hiddenCount: number;
  shouldShowOverflow: boolean;
} {
  if (isCollapsed) {
    // In collapsed mode, show only the highest priority indicator
    const sortedByPriority = [...indicators].sort((a, b) => 
      (b.priority || 0) - (a.priority || 0)
    );
    
    return {
      visibleIndicators: sortedByPriority.slice(0, 1),
      hiddenCount: indicators.length - 1,
      shouldShowOverflow: indicators.length > 1
    };
  }
  
  // Normal responsive behavior
  const visibleIndicators = indicators.slice(0, maxIndicators);
  const hiddenCount = Math.max(0, indicators.length - maxIndicators);
  
  return {
    visibleIndicators,
    hiddenCount,
    shouldShowOverflow: hiddenCount > 0
  };
}

/**
 * Touch-friendly indicator sizing for mobile devices
 */
export function getTouchTargetSize(viewportSize: ViewportSize): {
  minTouchTarget: string;
  padding: string;
} {
  // iOS and Android touch target recommendations
  const touchTargets = {
    xs: { minTouchTarget: 'min-w-[44px] min-h-[44px]', padding: 'p-2' },
    sm: { minTouchTarget: 'min-w-[44px] min-h-[44px]', padding: 'p-2' },
    md: { minTouchTarget: 'min-w-[40px] min-h-[40px]', padding: 'p-1.5' },
    lg: { minTouchTarget: 'min-w-[36px] min-h-[36px]', padding: 'p-1' },
    xl: { minTouchTarget: 'min-w-[32px] min-h-[32px]', padding: 'p-1' },
    '2xl': { minTouchTarget: 'min-w-[32px] min-h-[32px]', padding: 'p-1' }
  };
  
  return touchTargets[viewportSize];
}

/**
 * Performance optimization for responsive calculations
 */
export class ResponsiveIndicatorCache {
  private cache = new Map<string, unknown>();
  
  get<T>(key: string, factory: () => T): T {
    if (this.cache.has(key)) {
      return this.cache.get(key) as T;
    }
    
    const value = factory();
    this.cache.set(key, value);
    
    // Limit cache size to prevent memory leaks
    if (this.cache.size > 100) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    
    return value;
  }
  
  clear() {
    this.cache.clear();
  }
}

export const responsiveCache = new ResponsiveIndicatorCache();

export default useResponsiveIndicators;