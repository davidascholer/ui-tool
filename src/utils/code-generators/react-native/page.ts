/**
 * React Native code generator for Page component (SafeAreaView)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import type { PageEntity } from '@/utils/types';

export function generatePageCodeRN(_page: PageEntity, childrenCode: string[] = []): string {
  const attributes: Record<string, unknown> = {};
  
  // Add basic style for SafeAreaView
  attributes.style = formatStyle({ flex: 1 });
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (key === 'style' && typeof value === 'string' && value.startsWith('{{')) {
        return `style=${value}`;
      }
      return `${key}=${value}`;
    })
    .join(' ');
  
  // Get page content (children or default text)
  const content = childrenCode.length > 0 ? formatChildren(childrenCode, 2) : '<Text>Page Content</Text>';
  
  // Generate SafeAreaView element
  return elementWithChildren('SafeAreaView', propsStr, content, 0);
}
