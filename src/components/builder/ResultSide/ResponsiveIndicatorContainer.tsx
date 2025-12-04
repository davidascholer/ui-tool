/**
 * Responsive Indicator Container
 * Feature 004: Real-Time Hierarchy Updates - T050
 * Wrapper component that makes property indicators responsive across all viewport sizes
 */

import React, { useRef, useMemo, useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import useResponsiveIndicators, {
  adaptIndicatorsForViewport,
  getResponsiveIndicatorClasses,
  getTouchTargetSize,
  useContainerWidth,
  type ResponsiveConfig,
  type ViewportSize,
  responsiveCache
} from '../../../utils/responsiveIndicators';

export interface ResponsiveIndicatorItem {
  id: string;
  component: React.ReactNode;
  priority?: number;
  tooltip?: string;
  ariaLabel?: string;
}

export interface ResponsiveIndicatorContainerProps {
  items: ResponsiveIndicatorItem[];
  config?: ResponsiveConfig;
  className?: string;
  maxWidth?: number;
  onIndicatorClick?: (id: string) => void;
  showOverflowMenu?: boolean;
  overflowMenuPosition?: 'bottom' | 'top' | 'left' | 'right';
  'data-testid'?: string;
}

/**
 * Overflow menu component for hidden indicators
 */
interface OverflowMenuProps {
  items: ResponsiveIndicatorItem[];
  isOpen: boolean;
  onClose: () => void;
  onItemClick?: (id: string) => void;
  position: 'bottom' | 'top' | 'left' | 'right';
  viewportSize: ViewportSize;
}

function OverflowMenu({ 
  items, 
  isOpen, 
  onClose, 
  onItemClick, 
  position,
  viewportSize 
}: OverflowMenuProps) {
  if (!isOpen || items.length === 0) return null;
  
  const menuPositionClasses = {
    bottom: 'top-full left-0 mt-1',
    top: 'bottom-full left-0 mb-1', 
    left: 'right-full top-0 mr-1',
    right: 'left-full top-0 ml-1'
  };
  
  const isMobile = viewportSize === 'xs' || viewportSize === 'sm';
  
  return (
    <>
      {/* Backdrop for mobile */}
      {isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={onClose}
          data-testid="overflow-menu-backdrop"
        />
      )}
      
      <div 
        className={`
          absolute z-50 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg
          ${menuPositionClasses[position]}
          ${isMobile ? 'fixed left-2 right-2 bottom-2 top-auto' : ''}
        `}
        data-testid="overflow-menu"
      >
        <div className="p-2 max-h-[300px] overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={`
                flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer
                transition-colors duration-150
                ${getTouchTargetSize(viewportSize).minTouchTarget}
              `}
              onClick={() => {
                onItemClick?.(item.id);
                onClose();
              }}
              title={item.tooltip}
              aria-label={item.ariaLabel}
              data-testid={`overflow-item-${item.id}`}
            >
              {item.component}
            </div>
          ))}
        </div>
        
        {isMobile && (
          <div className="p-2 border-t border-gray-200">
            <button
              className="w-full p-2 text-center text-gray-600 hover:text-gray-800"
              onClick={onClose}
              data-testid="overflow-menu-close"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/**
 * Responsive indicator container that adapts to viewport and container size
 */
export function ResponsiveIndicatorContainer({
  items,
  config,
  className = '',
  maxWidth,
  onIndicatorClick,
  showOverflowMenu = true,
  overflowMenuPosition = 'bottom',
  'data-testid': testId = 'responsive-indicator-container'
}: ResponsiveIndicatorContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const containerWidth = useContainerWidth(containerRef as React.RefObject<HTMLElement>);
  const [isOverflowOpen, setIsOverflowOpen] = useState(false);
  
  // Apply max width constraint if provided
  const effectiveWidth = maxWidth && containerWidth > maxWidth ? maxWidth : containerWidth;
  
  const responsiveSettings = useResponsiveIndicators(config, effectiveWidth);
  
  // Memoize expensive calculations with caching
  const adaptedItems = useMemo(() => {
    const cacheKey = `adapted-${JSON.stringify({
      itemCount: items.length,
      maxIndicators: responsiveSettings.maxIndicators,
      isCollapsed: responsiveSettings.isCollapsed,
      priorities: items.map(i => i.priority || 0)
    })}`;
    
    return responsiveCache.get(cacheKey, () => 
      adaptIndicatorsForViewport(items, responsiveSettings.maxIndicators, responsiveSettings.isCollapsed)
    );
  }, [items, responsiveSettings.maxIndicators, responsiveSettings.isCollapsed]);
  
  // Generate responsive CSS classes
  const cssClasses = useMemo(() => {
    const cacheKey = `css-${responsiveSettings.viewportSize}-${responsiveSettings.indicatorSize}-${responsiveSettings.showLabels}`;
    
    return responsiveCache.get(cacheKey, () => 
      getResponsiveIndicatorClasses(
        responsiveSettings.viewportSize,
        responsiveSettings.indicatorSize,
        responsiveSettings.showLabels
      )
    );
  }, [responsiveSettings.viewportSize, responsiveSettings.indicatorSize, responsiveSettings.showLabels]);
  
  const touchTargetSize = getTouchTargetSize(responsiveSettings.viewportSize);
  
  const handleIndicatorClick = (id: string) => {
    onIndicatorClick?.(id);
  };
  
  const handleOverflowClick = () => {
    setIsOverflowOpen(!isOverflowOpen);
  };
  
  // Close overflow menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOverflowOpen(false);
      }
    };
    
    if (isOverflowOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOverflowOpen]);
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleIndicatorClick(itemId);
    } else if (event.key === 'Escape' && isOverflowOpen) {
      setIsOverflowOpen(false);
    }
  };
  
  if (items.length === 0) {
    return null;
  }
  
  return (
    <div
      ref={containerRef}
      className={`
        relative flex items-center
        ${cssClasses.container}
        ${className}
      `}
      style={{ maxWidth: maxWidth ? `${maxWidth}px` : undefined }}
      data-testid={testId}
      data-viewport-size={responsiveSettings.viewportSize}
      data-container-width={containerWidth}
    >
      {/* Visible indicators */}
      {adaptedItems.visibleIndicators.map((item) => (
        <div
          key={item.id}
          className={`
            ${cssClasses.indicator}
            ${touchTargetSize.minTouchTarget}
            ${touchTargetSize.padding}
            cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
            transition-all duration-150 hover:scale-105
          `}
          onClick={() => handleIndicatorClick(item.id)}
          onKeyDown={(e) => handleKeyDown(e, item.id)}
          tabIndex={0}
          role="button"
          title={item.tooltip}
          aria-label={item.ariaLabel || `Indicator ${item.id}`}
          data-testid={`indicator-${item.id}`}
        >
          {item.component}
        </div>
      ))}
      
      {/* Overflow indicator */}
      {adaptedItems.shouldShowOverflow && showOverflowMenu && (
        <div className="relative">
          <button
            className={`
              ${cssClasses.indicator}
              ${touchTargetSize.minTouchTarget}
              ${touchTargetSize.padding}
              bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
              transition-all duration-150
            `}
            onClick={handleOverflowClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleOverflowClick();
              }
            }}
            aria-label={`Show ${adaptedItems.hiddenCount} more indicators`}
            aria-expanded={isOverflowOpen}
            aria-haspopup="true"
            data-testid="overflow-button"
          >
            <MoreHorizontal className="w-full h-full" />
            
            {/* Hidden count badge for larger screens */}
            {responsiveSettings.viewportSize !== 'xs' && adaptedItems.hiddenCount > 0 && (
              <span 
                className="
                  absolute -top-1 -right-1 bg-blue-500 text-white text-xs 
                  rounded-full min-w-4 h-4 flex items-center justify-center
                  px-1
                "
                data-testid="overflow-count"
              >
                {adaptedItems.hiddenCount}
              </span>
            )}
          </button>
          
          <OverflowMenu
            items={items.slice(responsiveSettings.maxIndicators)}
            isOpen={isOverflowOpen}
            onClose={() => setIsOverflowOpen(false)}
            onItemClick={handleIndicatorClick}
            position={overflowMenuPosition}
            viewportSize={responsiveSettings.viewportSize}
          />
        </div>
      )}
      
      {/* Accessibility live region for screen readers */}
      <div 
        className="sr-only" 
        aria-live="polite" 
        aria-atomic="true"
        data-testid="accessibility-status"
      >
        {adaptedItems.shouldShowOverflow 
          ? `Showing ${adaptedItems.visibleIndicators.length} of ${items.length} indicators`
          : `Showing all ${items.length} indicators`
        }
      </div>
    </div>
  );
}

export default ResponsiveIndicatorContainer;