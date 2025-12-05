/**
 * React code generator for List component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateListCode(component: ComponentEntity, childrenCode: string[] = []): string {
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
  
  // Get list items
  let content: string;
  if (childrenCode.length > 0) {
    content = formatChildren(childrenCode, 2);
  } else if (props.items && Array.isArray(props.items)) {
    const items = props.items.map((item: string) => `<li>${item}</li>`);
    content = formatChildren(items, 2);
  } else {
    content = formatChildren(['<li>Item 1</li>', '<li>Item 2</li>', '<li>Item 3</li>'], 2);
  }
  
  // Generate ul element
  return elementWithChildren('ul', propsStr, content, 0);
}
