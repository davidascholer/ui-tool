/**
 * React code generator for Page component
 * Feature 003: Component Tracking and Code Export
 */

import { elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import type { PageEntity } from '@/utils/types';

export function generatePageCode(page: PageEntity, childrenCode: string[] = []): string {
  const attributes: Record<string, unknown> = {};
  
  // Add className for page wrapper
  attributes.className = '"page-wrapper"';
  
  // Generate props string
  const propsStr = Object.entries(attributes)
    .map(([key, value]) => {
      if (typeof value === 'string' && (value.startsWith('{') || value.startsWith('"'))) {
        return `${key}=${value}`;
      }
      return `${key}="${value}"`;
    })
    .join(' ');
  
  // Get page content (children or default text)
  const content = childrenCode.length > 0 ? formatChildren(childrenCode, 2) : 'Page Content';
  
  // Generate page div element
  return elementWithChildren('div', propsStr, content, 0);
}
