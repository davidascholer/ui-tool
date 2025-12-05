/**
 * React code generator for Container component
 * Feature 003: Component Tracking and Code Export
 */

import { formatClassName, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import type { ContainerEntity } from '@/utils/types';

export function generateContainerCode(container: ContainerEntity, childrenCode: string[] = []): string {
  const { tailwindOptions } = container;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Add className if there are Tailwind classes
  if (classes.length > 0) {
    attributes.className = formatClassName(classes);
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
  
  // Get container content (children or default text)
  const content = childrenCode.length > 0 ? formatChildren(childrenCode, 2) : 'Container';
  
  // Generate container div element
  return elementWithChildren('div', propsStr, content, 0);
}
