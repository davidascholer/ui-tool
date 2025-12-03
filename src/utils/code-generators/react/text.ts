/**
 * React code generator for Text component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, elementWithChildren } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateTextCode(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Add className if there are Tailwind classes
  if (classes.length > 0) {
    attributes.className = formatClassName(classes);
  }
  
  // Add id if specified
  if (props.id) {
    attributes.id = props.id;
  }
  
  // Add role for accessibility
  if (props.role) {
    attributes.role = props.role;
  }
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('"'))) {
        return `${key}=${value}`;
      }
      return `${key}="${value}"`;
    })
    .join(' ');
  
  // Get text content
  const text = props.text || props.children || 'Text';
  
  // Generate p element
  return elementWithChildren('p', propsStr, String(text), 0);
}
