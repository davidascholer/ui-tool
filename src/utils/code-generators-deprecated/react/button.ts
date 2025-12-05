/**
 * React code generator for Button component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, elementWithChildren } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateButtonCode(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Add className if there are Tailwind classes
  if (classes.length > 0) {
    attributes.className = formatClassName(classes);
  }
  
  // Add onClick handler if specified
  if (props.onClick) {
    attributes.onClick = '{handleClick}';
  }
  
  // Add type attribute
  if (props.type) {
    attributes.type = props.type;
  }
  
  // Add disabled attribute
  if (props.disabled) {
    attributes.disabled = 'true';
  }
  
  // Add aria-label for accessibility
  if (props['aria-label']) {
    attributes['aria-label'] = props['aria-label'];
  }
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (value === 'true') return key;
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('"'))) {
        return `${key}=${value}`;
      }
      return `${key}="${value}"`;
    })
    .join(' ');
  
  // Get button text content
  const text = props.text || props.children || 'Button';
  
  // Generate button element
  return elementWithChildren('button', propsStr, String(text), 0);
}
