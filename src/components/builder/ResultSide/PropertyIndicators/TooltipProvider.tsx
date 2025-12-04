/**
 * TooltipProvider Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T024)
 * Provides hover tooltip system for property indicators with 25-character truncation
 */

import React, { useState, useRef, useEffect } from 'react';
import { truncateText } from '../../../../utils/hierarchyHelpers';

export interface TooltipProviderProps {
  /**
   * The content to display in the tooltip
   */
  content: string;
  /**
   * Whether to truncate the display text (defaults to true)
   */
  truncateDisplay?: boolean;
  /**
   * Maximum length for display text truncation (defaults to 25)
   */
  maxDisplayLength?: number;
  /**
   * Position preference for the tooltip
   */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  /**
   * Delay in ms before showing tooltip
   */
  delay?: number;
  /**
   * Additional CSS classes for the trigger element
   */
  className?: string;
  /**
   * Child element that triggers the tooltip
   */
  children: React.ReactNode;
  /**
   * Optional display text override (if different from content)
   */
  displayText?: string;
}

interface TooltipPosition {
  top: number;
  left: number;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Provides hover tooltips with smart positioning and text truncation
 */
export function TooltipProvider({
  content,
  truncateDisplay = true,
  maxDisplayLength = 25,
  placement = 'auto',
  delay = 300,
  className = '',
  children,
  displayText
}: TooltipProviderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<TooltipPosition | null>(null);
  const [showTimeout, setShowTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Calculate tooltip position based on trigger element and viewport
  const calculatePosition = (): TooltipPosition => {
    if (!triggerRef.current || !tooltipRef.current) {
      return { top: 0, left: 0, placement: 'top' };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };

    let finalPlacement = placement;
    let top = 0;
    let left = 0;

    // Auto placement logic
    if (placement === 'auto') {
      const spaceAbove = triggerRect.top;
      const spaceBelow = viewport.height - triggerRect.bottom;
      const spaceLeft = triggerRect.left;
      const spaceRight = viewport.width - triggerRect.right;

      // Choose the side with most space
      const maxSpace = Math.max(spaceAbove, spaceBelow, spaceLeft, spaceRight);
      
      if (maxSpace === spaceAbove && spaceAbove >= tooltipRect.height + 8) {
        finalPlacement = 'top';
      } else if (maxSpace === spaceBelow && spaceBelow >= tooltipRect.height + 8) {
        finalPlacement = 'bottom';
      } else if (maxSpace === spaceLeft && spaceLeft >= tooltipRect.width + 8) {
        finalPlacement = 'left';
      } else {
        finalPlacement = 'right';
      }
    }

    // Calculate position based on final placement
    switch (finalPlacement) {
      case 'top':
        top = triggerRect.top - tooltipRect.height - 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + 8;
        left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.left - tooltipRect.width - 8;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        left = triggerRect.right + 8;
        break;
    }

    // Keep tooltip within viewport bounds
    left = Math.max(8, Math.min(left, viewport.width - tooltipRect.width - 8));
    top = Math.max(8, Math.min(top, viewport.height - tooltipRect.height - 8));

    return { top, left, placement: finalPlacement };
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      // Calculate position after tooltip becomes visible
      requestAnimationFrame(() => {
        setPosition(calculatePosition());
      });
    }, delay);
    setShowTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
      setShowTimeout(null);
    }
    setIsVisible(false);
    setPosition(null);
  };

  // Update position on scroll or resize
  useEffect(() => {
    if (!isVisible) return;

    const updatePosition = () => {
      setPosition(calculatePosition());
    };

    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (showTimeout) {
        clearTimeout(showTimeout);
      }
    };
  }, [showTimeout]);

  // Prepare display content
  const displayContent = displayText || content;
  const truncatedDisplay = truncateDisplay 
    ? truncateText(displayContent, maxDisplayLength)
    : displayContent;

  // Determine if truncation occurred
  const isTruncated = displayContent.length > maxDisplayLength;
  const shouldShowTooltip = isTruncated || displayText !== content;

  return (
    <>
      <div
        ref={triggerRef}
        className={className}
        onMouseEnter={shouldShowTooltip ? handleMouseEnter : undefined}
        onMouseLeave={shouldShowTooltip ? handleMouseLeave : undefined}
        style={{ display: 'inline-block' }}
      >
        {typeof children === 'string' ? truncatedDisplay : children}
      </div>
      
      {shouldShowTooltip && isVisible && position && (
        <div
          ref={tooltipRef}
          className={`
            fixed z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg
            pointer-events-none opacity-0 animate-in fade-in-0 zoom-in-95
            ${isVisible ? 'opacity-100' : ''}
          `}
          style={{
            top: position.top,
            left: position.left,
            maxWidth: '300px',
            wordBreak: 'break-word'
          }}
          role="tooltip"
          aria-hidden={!isVisible}
        >
          {content}
          {/* Arrow */}
          <div
            className={`
              absolute w-2 h-2 bg-gray-900 transform rotate-45
              ${position.placement === 'top' ? 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
              ${position.placement === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2' : ''}
              ${position.placement === 'left' ? 'left-full top-1/2 -translate-x-1/2 -translate-y-1/2' : ''}
              ${position.placement === 'right' ? 'right-full top-1/2 translate-x-1/2 -translate-y-1/2' : ''}
            `}
          />
        </div>
      )}
    </>
  );
}

export default TooltipProvider;