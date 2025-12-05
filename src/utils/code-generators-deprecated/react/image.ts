/**
 * React code generator for Image component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, selfClosingTag } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateImageCode(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Add className if there are Tailwind classes
  if (classes.length > 0) {
    attributes.className = formatClassName(classes);
  }
  
  // Add src (required)
  attributes.src = props.src || '/placeholder.jpg';
  
  // Add alt (required for accessibility)
  attributes.alt = props.alt || 'Image';
  
  // Add width and height if specified
  if (props.width) {
    attributes.width = props.width;
  }
  
  if (props.height) {
    attributes.height = props.height;
  }
  
  // Add loading attribute
  if (props.loading) {
    attributes.loading = props.loading;
  }
  
  // Add id if specified
  if (props.id) {
    attributes.id = props.id;
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
  
  // Image is self-closing
  return selfClosingTag('img', propsStr);
}
