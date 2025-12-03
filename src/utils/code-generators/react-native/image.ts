/**
 * React Native code generator for Image component
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, selfClosingTag } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ComponentEntity } from '@/utils/types';

export function generateImageCodeRN(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Convert Tailwind classes to React Native styles
  if (classes.length > 0) {
    const styles = convertTailwindToRN(classes.join(' '));
    
    // Add width and height from props if specified
    if (props.width) {
      styles.width = Number(props.width);
    }
    if (props.height) {
      styles.height = Number(props.height);
    }
    
    if (Object.keys(styles).length > 0) {
      attributes.style = formatStyle(styles);
    }
  }
  
  // Add source (required) - React Native uses source prop, not src
  const sourceUri = props.src || '/placeholder.jpg';
  attributes.source = `{{ uri: "${sourceUri}" }}`;
  
  // Add accessibility label (React Native uses accessibilityLabel, not alt)
  attributes.accessibilityLabel = `"${props.alt || props.accessibilityLabel || 'Image'}"`;
  
  // Add resize mode if specified
  if (props.resizeMode) {
    attributes.resizeMode = `"${props.resizeMode}"`;
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
  
  // Image is self-closing
  return selfClosingTag('Image', propsStr);
}
