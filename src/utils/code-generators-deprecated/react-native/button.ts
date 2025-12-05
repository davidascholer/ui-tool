/**
 * React Native code generator for Button component (TouchableOpacity)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, elementWithChildren } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ComponentEntity } from '@/utils/types';

export function generateButtonCodeRN(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Convert Tailwind classes to React Native styles
  if (classes.length > 0) {
    const styles = convertTailwindToRN(classes.join(' '));
    if (Object.keys(styles).length > 0) {
      attributes.style = formatStyle(styles);
    }
  }
  
  // Add onPress handler if onClick specified
  if (props.onClick || props.onPress) {
    attributes.onPress = '{handlePress}';
  }
  
  // Add disabled attribute
  if (props.disabled) {
    attributes.disabled = '{true}';
  }
  
  // Add accessibility label
  if (props['aria-label'] || props.accessibilityLabel) {
    attributes.accessibilityLabel = `"${props['aria-label'] || props.accessibilityLabel}"`;
  }
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (typeof value === 'string' && value.startsWith('{')) {
        return `${key}=${value}`;
      }
      return `${key}=${value}`;
    })
    .join(' ');
  
  // Get button text content
  const text = props.text || props.children || 'Button';
  const textElement = `<Text>${text}</Text>`;
  
  // Generate TouchableOpacity element
  return elementWithChildren('TouchableOpacity', propsStr, textElement, 0);
}
