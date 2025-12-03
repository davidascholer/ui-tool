/**
 * React Native code generator for List component (FlatList)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, selfClosingTag } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ComponentEntity } from '@/utils/types';

export function generateListCodeRN(component: ComponentEntity): string {
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
  
  // FlatList requires data and renderItem props
  if (props.items && Array.isArray(props.items)) {
    // Use actual items if provided
    attributes.data = `{${JSON.stringify(props.items)}}`;
  } else {
    // Default data
    attributes.data = '{["Item 1", "Item 2", "Item 3"]}';
  }
  
  // renderItem function
  attributes.renderItem = '{({ item }) => <Text>{item}</Text>}';
  
  // keyExtractor for list items
  attributes.keyExtractor = '{(item, index) => index.toString()}';
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (typeof value === 'string' && value.startsWith('{')) {
        return `${key}=${value}`;
      }
      return `${key}=${value}`;
    })
    .join(' ');
  
  // FlatList is self-closing
  return selfClosingTag('FlatList', propsStr);
}
