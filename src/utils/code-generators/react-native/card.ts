/**
 * React Native code generator for Card component (View)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ComponentEntity } from '@/utils/types';

export function generateCardCodeRN(component: ComponentEntity, childrenCode: string[] = []): string {
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
  
  // Get card content (children or default text)
  const content = childrenCode.length > 0 
    ? formatChildren(childrenCode, 2) 
    : `<Text>${props.text || props.children || 'Card Content'}</Text>`;
  
  // Generate View element
  return elementWithChildren('View', propsStr, content, 0);
}
