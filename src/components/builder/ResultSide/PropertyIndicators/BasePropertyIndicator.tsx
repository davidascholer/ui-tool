/**
 * PropertyIndicator Base Component
 * Feature 004: Real-Time Hierarchy Updates
 * Base interface and common styling for all property indicators
 */

import type { ReactNode } from 'react';
import type { VisualIndicator } from '../../../../utils/types';

export interface PropertyIndicatorProps {
  indicator: VisualIndicator;
  className?: string;
}

export interface PropertyIndicatorWrapperProps {
  children: ReactNode;
  tooltip: string;
  className?: string;
}

/**
 * Wrapper component that provides consistent styling and tooltip behavior
 */
export function PropertyIndicatorWrapper({ 
  children, 
  tooltip, 
  className 
}: PropertyIndicatorWrapperProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-sm
        border border-[rgb(var(--color-border))]
        text-xs cursor-help transition-all duration-150
        hover:scale-110 hover:shadow-sm
        ${className || ''}
      `}
      title={tooltip}
      role="img"
      aria-label={tooltip}
    >
      {children}
    </span>
  );
}

/**
 * Base property indicator component that all specific indicators extend
 */
export function BasePropertyIndicator({ indicator, className }: PropertyIndicatorProps) {
  return (
    <PropertyIndicatorWrapper 
      tooltip={indicator.tooltip}
      className={className}
    >
      <span className="px-1 py-0.5">
        {indicator.displayValue}
      </span>
    </PropertyIndicatorWrapper>
  );
}