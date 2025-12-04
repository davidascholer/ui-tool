/**
 * Utility functions for hierarchy management and Tailwind class parsing
 * Feature 004: Real-Time Hierarchy Updates
 */

import type { VisualIndicator, HierarchyViewItem } from './types';

// Color mapping for common Tailwind colors
const TAILWIND_COLORS: Record<string, string> = {
  // Primary colors
  'red': '#EF4444', 'orange': '#F97316', 'amber': '#F59E0B', 'yellow': '#EAB308',
  'lime': '#84CC16', 'green': '#22C55E', 'emerald': '#10B981', 'teal': '#14B8A6',
  'cyan': '#06B6D4', 'sky': '#0EA5E9', 'blue': '#3B82F6', 'indigo': '#6366F1',
  'violet': '#8B5CF6', 'purple': '#A855F7', 'fuchsia': '#D946EF', 'pink': '#EC4899',
  'rose': '#F43F5E', 'slate': '#64748B', 'gray': '#6B7280', 'zinc': '#71717A',
  'neutral': '#737373', 'stone': '#78716C',
  
  // Shades (using 500 as default)
  'red-50': '#FEF2F2', 'red-100': '#FEE2E2', 'red-200': '#FECACA', 'red-300': '#FCA5A5',
  'red-400': '#F87171', 'red-500': '#EF4444', 'red-600': '#DC2626', 'red-700': '#B91C1C',
  'red-800': '#991B1B', 'red-900': '#7F1D1D',
  
  'blue-50': '#EFF6FF', 'blue-100': '#DBEAFE', 'blue-200': '#BFDBFE', 'blue-300': '#93C5FD',
  'blue-400': '#60A5FA', 'blue-500': '#3B82F6', 'blue-600': '#2563EB', 'blue-700': '#1D4ED8',
  'blue-800': '#1E40AF', 'blue-900': '#1E3A8A',
  
  'green-50': '#F0FDF4', 'green-100': '#DCFCE7', 'green-200': '#BBF7D0', 'green-300': '#86EFAC',
  'green-400': '#4ADE80', 'green-500': '#22C55E', 'green-600': '#16A34A', 'green-700': '#15803D',
  'green-800': '#166534', 'green-900': '#14532D',
};

// Spacing values for Tailwind classes
const TAILWIND_SPACING: Record<string, string> = {
  '0': '0px', '0.5': '2px', '1': '4px', '1.5': '6px', '2': '8px', '2.5': '10px',
  '3': '12px', '3.5': '14px', '4': '16px', '5': '20px', '6': '24px', '7': '28px',
  '8': '32px', '9': '36px', '10': '40px', '11': '44px', '12': '48px', '14': '56px',
  '16': '64px', '20': '80px', '24': '96px', '28': '112px', '32': '128px', '36': '144px',
  '40': '160px', '44': '176px', '48': '192px', '52': '208px', '56': '224px', '60': '240px',
  '64': '256px', '72': '288px', '80': '320px', '96': '384px',
};

/**
 * Truncates text to specified length and adds ellipsis if needed
 */
export function truncateText(text: string, maxLength: number = 25): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 1) + '…';
}

/**
 * Parses Tailwind color classes and returns hex color value
 */
export function parseTailwindColor(className: string): string | null {
  // Match patterns: bg-red-500, text-blue-400, border-green-300
  const colorMatch = className.match(/^(bg|text|border)-(.+)$/);
  if (!colorMatch) return null;
  
  const [, , colorSpec] = colorMatch;
  
  // Try direct lookup with shade
  if (TAILWIND_COLORS[colorSpec]) {
    return TAILWIND_COLORS[colorSpec];
  }
  
  // Try base color without shade (default to 500)
  const baseColor = colorSpec.split('-')[0];
  if (TAILWIND_COLORS[baseColor]) {
    return TAILWIND_COLORS[baseColor];
  }
  
  return null;
}

/**
 * Parses individual Tailwind spacing class and returns descriptive label
 * @deprecated Use parseTailwindSpacing and convertTailwindSpacingToPixels instead
 */
export function parseTailwindSpacingClass(className: string): string | null {
  // Match patterns: m-4, p-2, gap-6, mx-auto, py-8, mt-12
  const spacingMatch = className.match(/^(m|p|gap)([trblxy]?)-(.+)$/);
  if (!spacingMatch) return null;
  
  const [, type, direction, value] = spacingMatch;
  
  if (value === 'auto') return 'auto';
  
  const pixelValue = TAILWIND_SPACING[value];
  if (!pixelValue) return null;
  
  // Create descriptive label
  const typeLabel = type === 'm' ? 'margin' : type === 'p' ? 'padding' : 'gap';
  const directionLabel = direction 
    ? { t: 'top', r: 'right', b: 'bottom', l: 'left', x: 'horizontal', y: 'vertical' }[direction] || direction
    : '';
  
  return directionLabel ? `${typeLabel}-${directionLabel}: ${pixelValue}` : `${typeLabel}: ${pixelValue}`;
}

/**
 * Creates visual indicators from Tailwind classes
 */
export function createVisualIndicators(classList: string[]): VisualIndicator[] {
  const indicators: VisualIndicator[] = [];
  
  for (const className of classList) {
    // Color indicators
    const colorHex = parseTailwindColor(className);
    if (colorHex) {
      indicators.push({
        type: 'color',
        value: className,
        displayValue: colorHex,
        tooltip: `${className} (${colorHex})`,
        priority: 5,
        isValid: true,
      });
      continue;
    }
    
    // Spacing indicators
    const spacingValue = parseTailwindSpacingClass(className);
    if (spacingValue) {
      indicators.push({
        type: 'spacing',
        value: className,
        displayValue: spacingValue,
        tooltip: `${className}: ${spacingValue}`,
        priority: 3,
        isValid: true,
      });
      continue;
    }
    
    // Text size indicators
    if (className.startsWith('text-') && /^text-(xs|sm|base|lg|xl|\d?xl)$/.test(className)) {
      indicators.push({
        type: 'text',
        value: className,
        displayValue: className.replace('text-', ''),
        tooltip: `Font size: ${className}`,
        priority: 4,
        isValid: true,
      });
    }
  }
  
  // Sort by priority (highest first), then alphabetically for ties
  indicators.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    return a.value.localeCompare(b.value);
  });
  
  // Limit to 5 indicators per entity
  return indicators.slice(0, 5);
}

/**
 * Creates text content indicator for components
 */
export function createTextContentIndicator(text: string): VisualIndicator {
  return {
    type: 'text',
    value: text,
    displayValue: truncateText(text, 15),
    tooltip: `Content: ${text}`,
    priority: 4,
    isValid: true,
  };
}

/**
 * Calculates expansion path for a given entity ID
 */
export function calculateExpansionPath(entityId: string, hierarchyItems: Map<string, HierarchyViewItem>): string[] {
  const path: string[] = [];
  let currentItem = hierarchyItems.get(entityId);
  
  while (currentItem?.parentId) {
    path.unshift(currentItem.parentId);
    currentItem = hierarchyItems.get(currentItem.parentId);
  }
  
  return path;
}

/**
 * Gets all child entity IDs for a given parent entity
 */
export function getChildEntityIds(parentId: string, hierarchyItems: Map<string, HierarchyViewItem>): string[] {
  return Array.from(hierarchyItems.values())
    .filter(item => item.parentId === parentId)
    .map(item => item.id);
}

/**
 * Validates if a property change would result in valid Tailwind classes
 */
export function validateTailwindClasses(classes: string[]): { valid: string[]; invalid: string[] } {
  const valid: string[] = [];
  const invalid: string[] = [];
  
  for (const className of classes) {
    // Basic validation - check if it follows Tailwind patterns
    const isColor = /^(bg|text|border)-.+$/.test(className);
    const isSpacing = /^(m|p|gap)([trblxy]?)-(.+)$/.test(className);
    const isText = /^text-(xs|sm|base|lg|xl|\d?xl)$/.test(className);
    const isDisplay = /^(block|inline|flex|grid|hidden)$/.test(className);
    const isPosition = /^(static|relative|absolute|fixed|sticky)$/.test(className);
    
    if (isColor || isSpacing || isText || isDisplay || isPosition) {
      valid.push(className);
    } else {
      invalid.push(className);
    }
  }
  
  return { valid, invalid };
}

/**
 * T023: Extended Tailwind parser functions for User Story 2
 */

/**
 * Parses all color classes from a Tailwind classes string
 * @param classString - Space-separated Tailwind classes
 * @returns Array of color class names
 */
export function parseTailwindColors(classString: string): string[] {
  if (!classString) return [];
  
  const classes = classString.split(/\s+/);
  const colorClasses: string[] = [];
  
  for (const className of classes) {
    // Match color patterns: bg-*, text-*, border-*
    if (/^(bg|text|border)-(.+)$/.test(className)) {
      // Exclude utility classes that aren't colors
      if (!className.match(/-(\d+|auto|current|transparent|inherit)$/)) {
        colorClasses.push(className);
      }
    }
  }
  
  return colorClasses;
}

/**
 * Parses all spacing classes from a Tailwind classes string
 * @param classString - Space-separated Tailwind classes
 * @returns Array of spacing class names
 */
export function parseTailwindSpacing(classString: string): string[] {
  if (!classString) return [];
  
  const classes = classString.split(/\s+/);
  const spacingClasses: string[] = [];
  
  for (const className of classes) {
    // Match spacing patterns: m-*, p-*, gap-*, space-*
    if (/^(m|p|gap|space-[xy])([trblxy]?)-(.+)$/.test(className)) {
      spacingClasses.push(className);
    }
  }
  
  return spacingClasses;
}

/**
 * Converts a Tailwind color class to hex value
 * @param colorClass - Tailwind color class (e.g., 'bg-red-500')
 * @returns Hex color value or null if not found
 */
export function convertTailwindColorToHex(colorClass: string): string | null {
  // Remove prefix to get color spec
  const colorSpec = colorClass.replace(/^(bg|text|border)-/, '');
  
  // Handle special cases
  if (colorSpec === 'white') return '#FFFFFF';
  if (colorSpec === 'black') return '#000000';
  if (colorSpec === 'transparent') return 'transparent';
  if (colorSpec === 'current') return 'currentColor';
  
  // Try direct lookup with shade
  if (TAILWIND_COLORS[colorSpec]) {
    return TAILWIND_COLORS[colorSpec];
  }
  
  // Try base color without shade (default to 500)
  const baseColor = colorSpec.split('-')[0];
  if (TAILWIND_COLORS[baseColor]) {
    return TAILWIND_COLORS[baseColor];
  }
  
  return null;
}

/**
 * Converts a Tailwind spacing class to pixel value
 * @param spacingClass - Tailwind spacing class (e.g., 'p-4', 'mx-2')
 * @returns Pixel value as number, or 0 if not found
 */
export function convertTailwindSpacingToPixels(spacingClass: string): number {
  // Extract the value part from classes like m-4, px-8, gap-6, space-x-4
  const match = spacingClass.match(/^(m|p|gap|space-[xy])([trblxy]?)-(.+)$/);
  if (!match) return 0;
  
  const [, , , value] = match;
  
  // Handle special cases
  if (value === 'auto') return 0; // Can't convert auto to pixels
  if (value === 'px') return 1; // Special case for 1px
  
  // Look up in spacing map
  const pixelString = TAILWIND_SPACING[value];
  if (!pixelString) return 0;
  
  // Extract number from pixel string (e.g., '16px' -> 16)
  const pixels = parseInt(pixelString.replace('px', ''), 10);
  return isNaN(pixels) ? 0 : pixels;
}