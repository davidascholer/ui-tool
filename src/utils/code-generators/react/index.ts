/**
 * Main React code generator dispatcher
 * Feature 003: Component Tracking and Code Export
 * Routes to component-specific generators
 */

import type { PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { generateButtonCode } from './button';
import { generateInputCode } from './input';
import { generateCardCode } from './card';
import { generateTextCode } from './text';
import { generateImageCode } from './image';
import { generateListCode } from './list';
import { generateContainerCode } from './container';
import { generatePageCode } from './page';
import { addReactImport } from '@/utils/code-generation-helpers';

/**
 * Generate React code for a component with nested children
 * @param component Component entity
 * @param pages All pages (for looking up nested structure)
 * @returns Generated React code
 */
export function generateComponentCode(
  component: ComponentEntity,
  pages: PageEntity[]
): string {
  const { type: componentType } = component;
  
  // Generate code based on component type
  switch (componentType) {
    case 'Button':
      return generateButtonCode(component);
    case 'Input':
      return generateInputCode(component);
    case 'Card':
      return generateCardCode(component);
    case 'Text':
      return generateTextCode(component);
    case 'Image':
      return generateImageCode(component);
    case 'List':
      return generateListCode(component);
    default:
      return `<div>Unknown Component Type: ${componentType}</div>`;
  }
}

/**
 * Generate React code for a container with nested children
 * @param container Container entity
 * @param pages All pages (for looking up nested structure)
 * @returns Generated React code
 */
export function generateContainerCodeWithChildren(
  container: ContainerEntity,
  pages: PageEntity[]
): string {
  // Generate code for all child components
  const childrenCode = container.children.map((component) =>
    generateComponentCode(component, pages)
  );
  
  return generateContainerCode(container, childrenCode);
}

/**
 * Generate React code for a page with nested children
 * @param page Page entity
 * @param pages All pages (for reference)
 * @returns Generated React code with imports
 */
export function generatePageCodeWithChildren(
  page: PageEntity,
  pages: PageEntity[]
): string {
  // Generate code for all child containers
  const childrenCode = page.children.map((container) =>
    generateContainerCodeWithChildren(container, pages)
  );
  
  const pageCode = generatePageCode(page, childrenCode);
  
  // Add React import at the top
  return addReactImport(pageCode);
}

/**
 * Generate React code for any entity type
 * @param entityType Type of entity
 * @param entityId Entity ID
 * @param pages All pages
 * @returns Generated React code
 */
export function generateReactCode(
  entityType: 'Page' | 'Container' | 'Component',
  entityId: string,
  pages: PageEntity[]
): string {
  if (entityType === 'Page') {
    const page = pages.find((p) => p.id === entityId);
    if (!page) return '// Page not found';
    return generatePageCodeWithChildren(page, pages);
  } else if (entityType === 'Container') {
    for (const page of pages) {
      const container = page.children.find((c) => c.id === entityId);
      if (container) {
        const code = generateContainerCodeWithChildren(container, pages);
        return addReactImport(code);
      }
    }
    return '// Container not found';
  } else {
    for (const page of pages) {
      for (const container of page.children) {
        const component = container.children.find((c) => c.id === entityId);
        if (component) {
          const code = generateComponentCode(component, pages);
          return addReactImport(code);
        }
      }
    }
    return '// Component not found';
  }
}
