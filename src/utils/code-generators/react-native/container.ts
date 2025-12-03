/**
 * React Native code generator for Container component (View)
 * Feature 003: Component Tracking and Code Export
 */

import { formatStyle, elementWithChildren, formatChildren } from '@/utils/code-generation-helpers';
import { convertTailwindToRN } from '@/utils/tailwind-to-rn';
import type { ContainerEntity } from '@/utils/types';

export function generateContainerCodeRN(container: ContainerEntity, childrenCode: string[] = []): string {
  const { tailwindOptions } = container;
  const classes = tailwindOptions?.classList || [];
  
  const attributes: Record<string, unknown> = {};
  
  // Convert Tailwind classes to React Native styles
  if (classes.length > 0) {
    const styles = convertTailwindToRN(classes.join(' '));
    if (Object.keys(styles).length > 0) {
      attributes.style = formatStyle(styles);
    }
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
  
  // Get container content (children or default text)
  const content = childrenCode.length > 0 ? formatChildren(childrenCode, 2) : '<Text>Container</Text>';
  
  // Generate View element
  return elementWithChildren('View', propsStr, content, 0);
}
