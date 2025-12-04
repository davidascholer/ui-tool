/**
 * SpacingIndicator Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T021)
 * Displays visual representations of spacing properties (padding, margin, gap)
 */

import React from 'react';

export interface SpacingIndicatorProps {
  /**
   * The spacing class being displayed (e.g., 'p-4', 'mx-2')
   */
  spacingClass: string;
  /**
   * The pixel value representation (e.g., '16px')
   */
  pixelValue: string;
  /**
   * Size variant for the indicator
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Tooltip content for accessibility
   */
  tooltip?: string;
}

/**
 * Visual indicator for spacing properties in hierarchy view
 * Shows spacing type and value with appropriate icons
 */
export function SpacingIndicator({
  spacingClass,
  pixelValue,
  size = 'sm',
  className = '',
  tooltip
}: SpacingIndicatorProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-base'
  };

  const getSpacingIcon = () => {
    if (spacingClass.startsWith('p')) {
      // Padding - hollow square
      return (
        <svg 
          className={`${sizeClasses[size]} text-orange-600`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" strokeDasharray="2,2" />
        </svg>
      );
    }
    
    if (spacingClass.startsWith('m')) {
      // Margin - arrows pointing outward
      return (
        <svg 
          className={`${sizeClasses[size]} text-blue-600`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M8 4l-4 4 4 4" />
          <path d="M16 4l4 4-4 4" />
          <path d="M4 8l4-4 4 4" />
          <path d="M4 16l4 4 4-4" />
        </svg>
      );
    }
    
    if (spacingClass.startsWith('gap') || spacingClass.startsWith('space')) {
      // Gap/Space - horizontal lines with arrows
      return (
        <svg 
          className={`${sizeClasses[size]} text-purple-600`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          strokeWidth={2}
        >
          <line x1="6" y1="12" x2="18" y2="12" />
          <path d="M8 8l-4 4 4 4" />
          <path d="M16 16l4-4-4-4" />
        </svg>
      );
    }
    
    // Default spacing icon
    return (
      <svg 
        className={`${sizeClasses[size]} text-gray-600`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    );
  };

  const displayText = pixelValue;
  const fullTooltip = tooltip || `${getSpacingType(spacingClass)}: ${pixelValue}`;

  return (
    <div 
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs bg-gray-100 border ${className}`}
      title={fullTooltip}
      role="img"
      aria-label={fullTooltip}
    >
      {getSpacingIcon()}
      <span className="font-mono text-gray-700 text-xs">
        {displayText}
      </span>
    </div>
  );
}

/**
 * Helper function to get human-readable spacing type
 */
function getSpacingType(spacingClass: string): string {
  if (spacingClass.startsWith('px-')) return 'Horizontal Padding';
  if (spacingClass.startsWith('py-')) return 'Vertical Padding';
  if (spacingClass.startsWith('p-')) return 'Padding';
  if (spacingClass.startsWith('mx-')) return 'Horizontal Margin';
  if (spacingClass.startsWith('my-')) return 'Vertical Margin';
  if (spacingClass.startsWith('m-')) return 'Margin';
  if (spacingClass.startsWith('gap-')) return 'Gap';
  if (spacingClass.startsWith('space-x-')) return 'Horizontal Space';
  if (spacingClass.startsWith('space-y-')) return 'Vertical Space';
  return 'Spacing';
}

export default SpacingIndicator;