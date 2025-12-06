/**
 * IndicatorManager Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T025)
 * Manages indicator priority system and limits display to 5 indicators per entity
 */

import type { ComponentEntity, VisualIndicator } from '../../../../utils/types';
import { usePropertyIndicators } from '../../../../hooks/usePropertyIndicators';
import { ColorIndicator } from './ColorIndicator';
import SpacingIndicator from './SpacingIndicator';
import { TextIndicator } from './TextIndicator';
import TooltipProvider from './TooltipProvider';

export interface IndicatorManagerProps {
  /**
   * The component entity to show indicators for
   */
  component: ComponentEntity;
  /**
   * Optional override for Tailwind classes
   */
  classes?: string;
  /**
   * Maximum number of indicators to display (defaults to 5)
   */
  maxIndicators?: number;
  /**
   * Size variant for indicators
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * Manages the display of property indicators with priority system:
 * - Color: Priority 5 (highest)
 * - Text: Priority 4
 * - Spacing: Priority 3
 * - Ties broken alphabetically
 * - Limited to 5 indicators per entity
 */
export function IndicatorManager({
  component,
  classes,
  maxIndicators = 5,
  size = 'sm',
  className = ''
}: IndicatorManagerProps) {
  // Get sorted and limited indicators from hook
  const indicators = usePropertyIndicators(component, classes);
  
  // Apply additional limit if specified
  const displayIndicators = indicators.slice(0, maxIndicators);
  
  if (displayIndicators.length === 0) {
    return null;
  }

  const renderIndicator = (indicator: VisualIndicator, index: number) => {
    const key = `${indicator.type}-${indicator.value}-${index}`;
    
    switch (indicator.type) {
      case 'color':
        return <ColorIndicator key={key} indicator={indicator} />;
      
      case 'text':
        return <TextIndicator key={key} indicator={indicator} />;
      
      case 'spacing':
        return (
          <SpacingIndicator
            key={key}
            spacingClass={indicator.value}
            pixelValue={indicator.displayValue}
            size={size}
            tooltip={indicator.tooltip}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={`inline-flex items-center gap-1 ${className}`}>
      {displayIndicators.map(renderIndicator)}
      {indicators.length > maxIndicators && (
        <TooltipProvider 
          content={`+${indicators.length - maxIndicators} more indicators`}
          placement="top"
        >
          <span className="text-xs text-gray-500 px-1 py-0.5 rounded bg-gray-100">
            +{indicators.length - maxIndicators}
          </span>
        </TooltipProvider>
      )}
    </div>
  );
}

export default IndicatorManager;