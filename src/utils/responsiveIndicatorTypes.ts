/**
 * Responsive Property Indicator Utilities
 * Feature 004: Real-Time Hierarchy Updates - T050
 * Utility functions and types for responsive property indicators
 */

export interface PropertyIndicatorData {
  id: string;
  type: 'required' | 'optional' | 'deprecated' | 'new' | 'error' | 'warning' | 'info';
  label?: string;
  value?: string | number | boolean;
  tooltip?: string;
  priority?: number;
  metadata?: Record<string, unknown>;
}

/**
 * Priority mapping for different indicator types
 * Higher numbers = higher priority (shown first in responsive mode)
 */
export const INDICATOR_PRIORITIES: Record<PropertyIndicatorData['type'], number> = {
  error: 10,     // Always show errors first
  warning: 8,    // Warnings are important
  required: 7,   // Required fields are high priority
  deprecated: 6, // Deprecated warnings should be visible
  new: 5,        // New features get medium priority
  info: 3,       // Informational indicators
  optional: 1    // Optional indicators have lowest priority
};

/**
 * Utility function to create property indicators from hierarchy data
 */
export function createIndicatorsFromHierarchyItem(hierarchyItem: {
  id: string;
  name?: string;
  type?: string;
  isRequired?: boolean;
  isDeprecated?: boolean;
  isNew?: boolean;
  hasError?: boolean;
  hasWarning?: boolean;
  metadata?: Record<string, unknown>;
}): PropertyIndicatorData[] {
  const indicators: PropertyIndicatorData[] = [];
  
  // Error indicators (highest priority)
  if (hierarchyItem.hasError) {
    indicators.push({
      id: `${hierarchyItem.id}-error`,
      type: 'error',
      label: 'Error',
      tooltip: 'This item has validation errors',
      priority: 10
    });
  }
  
  // Warning indicators
  if (hierarchyItem.hasWarning) {
    indicators.push({
      id: `${hierarchyItem.id}-warning`,
      type: 'warning',
      label: 'Warning',
      tooltip: 'This item has validation warnings',
      priority: 8
    });
  }
  
  // Deprecated indicators
  if (hierarchyItem.isDeprecated) {
    indicators.push({
      id: `${hierarchyItem.id}-deprecated`,
      type: 'deprecated',
      label: 'Deprecated',
      tooltip: 'This item is deprecated and may be removed in future versions',
      priority: 6
    });
  }
  
  // New feature indicators
  if (hierarchyItem.isNew) {
    indicators.push({
      id: `${hierarchyItem.id}-new`,
      type: 'new',
      label: 'New',
      tooltip: 'This is a new feature',
      priority: 5
    });
  }
  
  // Required/Optional indicators
  if (hierarchyItem.isRequired) {
    indicators.push({
      id: `${hierarchyItem.id}-required`,
      type: 'required',
      label: 'Required',
      tooltip: 'This field is required',
      priority: 7
    });
  } else {
    indicators.push({
      id: `${hierarchyItem.id}-optional`,
      type: 'optional',
      label: 'Optional',
      tooltip: 'This field is optional',
      priority: 1
    });
  }
  
  // Type information indicator
  if (hierarchyItem.type) {
    indicators.push({
      id: `${hierarchyItem.id}-type`,
      type: 'info',
      label: 'Type',
      value: hierarchyItem.type,
      tooltip: `Type: ${hierarchyItem.type}`,
      priority: 3,
      metadata: { type: hierarchyItem.type }
    });
  }
  
  return indicators;
}