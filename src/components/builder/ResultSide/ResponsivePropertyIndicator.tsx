/**
 * Responsive Property Indicator Integration
 * Feature 004: Real-Time Hierarchy Updates - T050
 * Integrates responsive behavior with existing PropertyIndicator system
 */

import React from 'react';
import { ResponsiveIndicatorContainer, type ResponsiveIndicatorItem } from './ResponsiveIndicatorContainer';
import { defaultResponsiveConfig, type ResponsiveConfig } from '../../../utils/responsiveIndicators';
import { 
  type PropertyIndicatorData, 
  INDICATOR_PRIORITIES 
} from '../../../utils/responsiveIndicatorTypes';

export interface ResponsivePropertyIndicatorProps {
  /**
   * Property indicators to display responsively
   */
  indicators: PropertyIndicatorData[];
  
  /**
   * Responsive configuration override
   */
  responsiveConfig?: ResponsiveConfig;
  
  /**
   * Maximum width constraint for the container
   */
  maxWidth?: number;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Whether to show overflow menu for hidden indicators
   */
  showOverflowMenu?: boolean;
  
  /**
   * Position of the overflow menu
   */
  overflowMenuPosition?: 'bottom' | 'top' | 'left' | 'right';
  
  /**
   * Callback when an indicator is clicked
   */
  onIndicatorClick?: (indicator: PropertyIndicatorData) => void;
  
  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}

/**
 * Simple property indicator component for responsive display
 */
function SimplePropertyIndicator({ 
  type, 
  label, 
  value, 
  tooltip,
  onClick 
}: {
  type: PropertyIndicatorData['type'];
  label?: string;
  value?: string | number | boolean;
  tooltip?: string;
  onClick?: () => void;
}) {
  const colors = {
    error: 'bg-red-100 text-red-800 border-red-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    required: 'bg-blue-100 text-blue-800 border-blue-300',
    deprecated: 'bg-orange-100 text-orange-800 border-orange-300',
    new: 'bg-green-100 text-green-800 border-green-300',
    info: 'bg-gray-100 text-gray-800 border-gray-300',
    optional: 'bg-gray-50 text-gray-600 border-gray-200'
  };
  
  const displayValue = value ? String(value) : label || type;
  
  return (
    <span
      className={`
        inline-flex items-center justify-center px-2 py-1 rounded text-xs
        font-medium border cursor-pointer transition-all duration-150
        hover:scale-105 hover:shadow-sm
        ${colors[type]}
      `}
      title={tooltip || `${type}: ${displayValue}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {displayValue}
    </span>
  );
}

/**
 * Enhanced responsive configuration for property indicators
 */
const propertyIndicatorConfig: ResponsiveConfig = {
  ...defaultResponsiveConfig,
  maxIndicators: {
    xs: 1,     // Only show the most critical indicator on mobile
    sm: 2,     // Show top 2 on small screens
    md: 3,     // Show 3 on tablets
    lg: 4,     // Show 4 on desktop
    xl: 5,     // Show 5 on large desktop
    '2xl': 6   // Show up to 6 on very large screens
  },
  showLabels: {
    xs: false,   // No labels on mobile to save space
    sm: false,   // No labels on small screens
    md: true,    // Show labels on tablets and up
    lg: true,
    xl: true,
    '2xl': true
  }
};

/**
 * Convert PropertyIndicatorData to ResponsiveIndicatorItem
 */
function createResponsiveIndicatorItems(
  indicators: PropertyIndicatorData[],
  onIndicatorClick?: (indicator: PropertyIndicatorData) => void
): ResponsiveIndicatorItem[] {
  return indicators.map((indicator) => ({
    id: indicator.id,
    priority: indicator.priority ?? INDICATOR_PRIORITIES[indicator.type],
    tooltip: indicator.tooltip || `${indicator.type.charAt(0).toUpperCase() + indicator.type.slice(1)} indicator`,
    ariaLabel: `${indicator.type} indicator for ${indicator.label || indicator.id}`,
    component: (
      <SimplePropertyIndicator
        type={indicator.type}
        label={indicator.label}
        value={indicator.value}
        tooltip={indicator.tooltip}
        onClick={() => onIndicatorClick?.(indicator)}
      />
    )
  }));
}

/**
 * Responsive wrapper for property indicators that adapts to screen size
 */
export function ResponsivePropertyIndicator({
  indicators,
  responsiveConfig = propertyIndicatorConfig,
  maxWidth,
  className = '',
  showOverflowMenu = true,
  overflowMenuPosition = 'bottom',
  onIndicatorClick,
  'data-testid': testId = 'responsive-property-indicator'
}: ResponsivePropertyIndicatorProps) {
  // Sort indicators by priority for consistent responsive behavior
  const sortedIndicators = React.useMemo(() => {
    return [...indicators].sort((a, b) => {
      const aPriority = a.priority ?? INDICATOR_PRIORITIES[a.type];
      const bPriority = b.priority ?? INDICATOR_PRIORITIES[b.type];
      return bPriority - aPriority;
    });
  }, [indicators]);
  
  // Convert to responsive indicator items
  const indicatorItems = React.useMemo(() => {
    return createResponsiveIndicatorItems(sortedIndicators, onIndicatorClick);
  }, [sortedIndicators, onIndicatorClick]);
  
  if (indicators.length === 0) {
    return null;
  }
  
  return (
    <ResponsiveIndicatorContainer
      items={indicatorItems}
      config={responsiveConfig}
      className={className}
      maxWidth={maxWidth}
      onIndicatorClick={(id) => {
        const indicator = indicators.find(i => i.id === id);
        if (indicator) {
          onIndicatorClick?.(indicator);
        }
      }}
      showOverflowMenu={showOverflowMenu}
      overflowMenuPosition={overflowMenuPosition}
      data-testid={testId}
    />
  );
}

export default ResponsivePropertyIndicator;