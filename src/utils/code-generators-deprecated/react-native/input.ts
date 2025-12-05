/**
 * React Native code generator for Input component (TextInput)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, selfClosingTag } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ComponentEntity } from '@/utils/types';

export function generateInputCodeRN(component: ComponentEntity): string {
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
  
  // Add placeholder
  if (props.placeholder) {
    attributes.placeholder = `"${props.placeholder}"`;
  }
  
  // Add value
  if (props.value !== undefined) {
    attributes.value = '{value}';
  }
  
  // Add onChange handler
  if (props.onChange || props.onChangeText) {
    attributes.onChangeText = '{handleChange}';
  }
  
  // Add keyboard type
  if (props.type === 'email') {
    attributes.keyboardType = '"email-address"';
  } else if (props.type === 'number' || props.type === 'tel') {
    attributes.keyboardType = '"numeric"';
  }
  
  // Add secure text entry for password
  if (props.type === 'password') {
    attributes.secureTextEntry = '{true}';
  }
  
  // Add editable (opposite of readOnly)
  if (props.readOnly) {
    attributes.editable = '{false}';
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
  
  // TextInput is self-closing
  return selfClosingTag('TextInput', propsStr);
}
