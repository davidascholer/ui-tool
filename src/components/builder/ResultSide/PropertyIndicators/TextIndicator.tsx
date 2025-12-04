/**
 * TextIndicator Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 1
 * Displays text content and typography visual indicators
 */

import { PropertyIndicatorWrapper } from './BasePropertyIndicator';
import type { PropertyIndicatorProps } from './BasePropertyIndicator';
import { truncateText } from '../../../../utils/hierarchyHelpers';

export function TextIndicator({ indicator, className }: PropertyIndicatorProps) {
  if (indicator.type !== 'text') {
    return null;
  }

  // Handle different text indicator types
  const isTextSizeClass = indicator.value.startsWith('text-') && 
    /^text-(xs|sm|base|lg|xl|\d?xl)$/.test(indicator.value);
  
  if (isTextSizeClass) {
    // Typography size indicator
    const sizeMap: Record<string, string> = {
      'text-xs': 'XS',
      'text-sm': 'SM', 
      'text-base': 'MD',
      'text-lg': 'LG',
      'text-xl': 'XL',
      'text-2xl': '2XL',
      'text-3xl': '3XL',
      'text-4xl': '4XL',
    };

    const displaySize = sizeMap[indicator.value] || indicator.displayValue.toUpperCase();

    return (
      <PropertyIndicatorWrapper 
        tooltip={indicator.tooltip}
        className={`bg-purple-50 text-purple-700 border-purple-200 ${className || ''}`}
      >
        <span className="text-xs font-mono font-semibold">
          {displaySize}
        </span>
      </PropertyIndicatorWrapper>
    );
  }

  // Text content indicator (for component text, placeholders, etc.)
  const displayText = truncateText(indicator.displayValue, 15);
  
  return (
    <PropertyIndicatorWrapper 
      tooltip={indicator.tooltip}
      className={`bg-blue-50 text-blue-700 border-blue-200 ${className || ''}`}
    >
      <div className="flex items-center space-x-1">
        {/* Text content icon */}
        <svg 
          className="w-3 h-3 opacity-60" 
          viewBox="0 0 16 16" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9zM3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-9z" />
          <path d="M5 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM5 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z" />
        </svg>
        
        {/* Truncated text */}
        <span className="text-xs font-medium">
          {displayText}
        </span>
        
        {/* Ellipsis indicator if text was truncated */}
        {indicator.displayValue.length > 15 && (
          <span className="text-xs opacity-60">…</span>
        )}
      </div>
    </PropertyIndicatorWrapper>
  );
}