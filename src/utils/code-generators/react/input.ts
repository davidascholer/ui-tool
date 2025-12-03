/**
 * React code generator for Input component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, selfClosingTag } from '@/utils/code-generation-helpers';
import type { ComponentEntity } from '@/utils/types';

export function generateInputCode(component: ComponentEntity): string {
  const { props, tailwindOptions } = component;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Add className if there are Tailwind classes
  if (classes.length > 0) {
    attributes.className = formatClassName(classes);
  }
  
  // Add common input attributes
  if (props.type) {
    attributes.type = props.type;
  }
  
  if (props.placeholder) {
    attributes.placeholder = props.placeholder;
  }
  
  if (props.value !== undefined) {
    attributes.value = '{value}';
  }
  
  if (props.onChange) {
    attributes.onChange = '{handleChange}';
  }
  
  if (props.name) {
    attributes.name = props.name;
  }
  
  if (props.id) {
    attributes.id = props.id;
  }
  
  if (props.required) {
    attributes.required = 'true';
  }
  
  if (props.disabled) {
    attributes.disabled = 'true';
  }
  
  if (props.readOnly) {
    attributes.readOnly = 'true';
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
  
  // Input is self-closing
  return selfClosingTag('input', propsStr);
}
