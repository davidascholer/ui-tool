/**
 * React code generator for Card component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateCardCode(component: ComponentEntity, childrenCode: string[] = []): string {
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
  
  // Add aria-label for accessibility
  if (props['aria-label']) {
    attributes['aria-label'] = props['aria-label'];
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
  
  // Get card content (children or default text)
  const content = childrenCode.length > 0 
    ? formatChildren(childrenCode, 2) 
    : String(props.text || props.children || 'Card Content');
  
  // Generate card div element
  return elementWithChildren('div', propsStr, content, 0);
}
