/**
 * ColorIndicator Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 1
 * Displays color visual indicators for Tailwind color classes
 */

import { PropertyIndicatorWrapper } from './BasePropertyIndicator';
import type { PropertyIndicatorProps } from './BasePropertyIndicator';
import { parseTailwindColor } from '../../../../utils/hierarchyHelpers';

export function ColorIndicator({ indicator, className }: PropertyIndicatorProps) {
  if (indicator.type !== 'color') {
    return null;
  }

  const colorHex = parseTailwindColor(indicator.value);
  
  if (!colorHex) {
    // Fallback for invalid color classes
    return (
      <PropertyIndicatorWrapper 
        tooltip={`Invalid color: ${indicator.value}`}
        className={`bg-gray-200 text-gray-600 ${className || ''}`}
      >
        <span className="text-xs">?</span>
      </PropertyIndicatorWrapper>
    );
  }

  return (
    <PropertyIndicatorWrapper 
      tooltip={indicator.tooltip}
      className={`border-gray-300 ${className || ''}`}
    >
      <div className="flex items-center space-x-1">
        {/* Color swatch */}
        <div
          className="w-3 h-3 rounded-sm border border-gray-300"
          style={{ backgroundColor: colorHex }}
          aria-hidden="true"
        />
        {/* Optional: Show class name for complex colors */}
        {indicator.value.includes('-') && (
          <span className="text-xs text-gray-600 font-mono">
            {indicator.displayValue}
          </span>
        )}
      </div>
    </PropertyIndicatorWrapper>
  );
}