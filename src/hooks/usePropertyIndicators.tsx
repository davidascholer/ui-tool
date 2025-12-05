/**
 * usePropertyIndicators Hook
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T022)
 * Generates visual indicators for component properties based on Tailwind classes and content
 */

import { useMemo } from 'react';
import type { VisualIndicator, ComponentEntity } from '../utils/types';
import { 
  parseTailwindColors, 
  parseTailwindSpacing,
  convertTailwindColorToHex,
  convertTailwindSpacingToPixels,
  truncateText
} from '../utils/hierarchyHelpers';

/**
 * Priority levels for different indicator types
 * Higher numbers = higher priority (displayed first)
 */
const INDICATOR_PRIORITIES = {
  color: 5,
  text: 4, 
  spacing: 3,
  size: 2,
  image: 1
} as const;

/**
 * Maximum number of indicators to display per component
 */
const MAX_INDICATORS = 5;

/**
 * Hook to generate visual indicators for a component's properties
 * @param component - The component entity to generate indicators for
 * @param classes - Optional Tailwind classes string (fallback to component.tailwindClassList)
 * @returns Array of visual indicators sorted by priority
 */
export function usePropertyIndicators(
  component: ComponentEntity,
  classes?: string
): VisualIndicator[] {
  return useMemo(() => {
    const indicators: VisualIndicator[] = [];
    
    // Get classes from parameter or component
    const tailwindClasses = classes || component.tailwindClassList.join(' ');
    
    // Generate color indicators
    const colorClasses = parseTailwindColors(tailwindClasses);
    for (const colorClass of colorClasses) {
      const hexValue = convertTailwindColorToHex(colorClass);
      if (hexValue) {
        indicators.push({
          type: 'color',
          value: colorClass,
          displayValue: hexValue,
          priority: INDICATOR_PRIORITIES.color,
          tooltip: generateColorTooltip(colorClass, hexValue),
          isValid: true
        });
      }
    }
    
    // Generate text indicators from content properties
    const textContent = extractTextContent(component);
    if (textContent) {
      const truncated = truncateText(textContent, 25);
      indicators.push({
        type: 'text',
        value: textContent,
        displayValue: truncated,
        priority: INDICATOR_PRIORITIES.text,
        tooltip: `Content: ${textContent}`,
        isValid: true
      });
    }
    
    // Generate spacing indicators
    const spacingClasses = parseTailwindSpacing(tailwindClasses);
    for (const spacingClass of spacingClasses) {
      const pixelValue = convertTailwindSpacingToPixels(spacingClass);
      if (pixelValue > 0) {
        indicators.push({
          type: 'spacing',
          value: spacingClass,
          displayValue: `${pixelValue}px`,
          priority: INDICATOR_PRIORITIES.spacing,
          tooltip: generateSpacingTooltip(spacingClass, pixelValue),
          isValid: true
        });
      }
    }
    
    // Sort indicators by priority (descending), then alphabetically by value for ties
    const sortedIndicators = indicators.sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority; // Higher priority first
      }
      return a.value.localeCompare(b.value); // Alphabetical for ties
    });
    
    // Limit to maximum indicators
    return sortedIndicators.slice(0, MAX_INDICATORS);
  }, [component, classes]);
}

/**
 * Extracts text content from component properties
 */
function extractTextContent(component: ComponentEntity): string | null {
  const { props } = component;
  
  // Common text properties to check
  const textFields = ['content', 'text', 'label', 'placeholder', 'title', 'children'];
  
  for (const field of textFields) {
    const value = props[field];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  
  return null;
}

/**
 * Generates a human-readable tooltip for color indicators
 */
function generateColorTooltip(colorClass: string, hexValue: string): string {
  const colorType = getColorType(colorClass);
  const colorName = getColorName(colorClass);
  return `${colorType}: ${colorName} (${hexValue})`;
}

/**
 * Generates a human-readable tooltip for spacing indicators
 */
function generateSpacingTooltip(spacingClass: string, pixelValue: number): string {
  const spacingType = getSpacingType(spacingClass);
  return `${spacingType}: ${pixelValue}px`;
}

/**
 * Gets the color type from a Tailwind color class
 */
function getColorType(colorClass: string): string {
  if (colorClass.startsWith('bg-')) return 'Background';
  if (colorClass.startsWith('text-')) return 'Text';
  if (colorClass.startsWith('border-')) return 'Border';
  return 'Color';
}

/**
 * Gets a human-readable color name from a Tailwind color class
 */
function getColorName(colorClass: string): string {
  // Remove prefix (bg-, text-, border-)
  const colorPart = colorClass.replace(/^(bg-|text-|border-)/, '');
  
  // Handle named colors
  if (colorPart === 'white') return 'White';
  if (colorPart === 'black') return 'Black';
  if (colorPart === 'transparent') return 'Transparent';
  
  // Handle color-shade format (e.g., red-500 -> Red 500)
  const parts = colorPart.split('-');
  if (parts.length === 2) {
    const [color, shade] = parts;
    return `${color.charAt(0).toUpperCase() + color.slice(1)} ${shade}`;
  }
  
  // Fallback
  return colorPart.charAt(0).toUpperCase() + colorPart.slice(1);
}

/**
 * Gets the spacing type from a Tailwind spacing class
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

export default usePropertyIndicators;