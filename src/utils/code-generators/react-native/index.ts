/**
 * React Native code generator dispatcher
 * Feature 003: Component Tracking and Code Export
 * 
 * Main entry point for generating React Native code from builder entities.
 * Handles recursive child generation for nested structures.
 */

import type { PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { addReactNativeImports } from '@/utils/code-generation-helpers';
import { generateButtonCodeRN } from './button';
import { generateInputCodeRN } from './input';
import { generateCardCodeRN } from './card';
import { generateTextCodeRN } from './text';
import { generateImageCodeRN } from './image';
import { generateListCodeRN } from './list';
import { generateContainerCodeRN } from './container';
import { generatePageCodeRN } from './page';

/**
 * Generate React Native code for a single component
 */
function generateComponentCodeRN(
  component: ComponentEntity,
  _pages: PageEntity[]
): string {
  const { type: componentType } = component;
  
  switch (componentType) {
    case 'Button':
      return generateButtonCodeRN(component);
    case 'Input':
      return generateInputCodeRN(component);
    case 'Card':
      // Cards can have children - handle recursively if needed
      return generateCardCodeRN(component);
    case 'Text':
      return generateTextCodeRN(component);
    case 'Image':
      return generateImageCodeRN(component);
    case 'List':
      return generateListCodeRN(component);
    default:
      return `{/* Unsupported component type: ${componentType} */}`;
  }
}

/**
 * Generate React Native code for a container with its children
 */
function generateContainerCodeWithChildrenRN(
  container: ContainerEntity,
  pages: PageEntity[]
): string {
  // Generate code for all child components
  const childrenCode = container.children.map((component) =>
    generateComponentCodeRN(component, pages)
  );
  
  return generateContainerCodeRN(container, childrenCode);
}

/**
 * Generate React Native code for a page with all its containers and components
 */
function generatePageCodeWithChildrenRN(
  page: PageEntity,
  pages: PageEntity[]
): string {
  // Generate code for all child containers
  const childrenCode = page.children.map((container) =>
    generateContainerCodeWithChildrenRN(container, pages)
  );

  // Generate the page JSX
  const pageJSX = generatePageCodeRN(page, childrenCode);

  // Collect all React Native components used
  const components = ['SafeAreaView', 'View', 'Text', 'TouchableOpacity', 'TextInput', 'Image', 'FlatList'];

  // Add React Native imports at the top
  return addReactNativeImports(pageJSX, components);
}

/**
 * Main entry point for React Native code generation
 * @param entityType - Type of entity (Page, Container, or Component)
 * @param entityId - ID of the entity to generate code for
 * @param pages - All pages in the builder state
 * @returns Generated React Native code
 */
export function generateReactNativeCode(
  entityType: 'Page' | 'Container' | 'Component',
  entityId: string,
  pages: PageEntity[]
): string {
  switch (entityType) {
    case 'Page': {
      const page = pages.find(p => p.id === entityId);
      if (!page) {
        return '// Page not found';
      }
      return generatePageCodeWithChildrenRN(page, pages);
    }

    case 'Container': {
      const container = pages
        .flatMap(p => p.children)
        .find(c => c.id === entityId);
      if (!container) {
        return '// Container not found';
      }
      return generateContainerCodeWithChildrenRN(container, pages);
    }

    case 'Component': {
      const component = pages
        .flatMap(p => p.children)
        .flatMap(c => c.children)
        .find(comp => comp.id === entityId);
      if (!component) {
        return '// Component not found';
      }
      return generateComponentCodeRN(component, pages);
    }

    default:
      return '// Invalid entity type';
  }
}

// Export individual generators for testing
export {
  generateButtonCodeRN,
  generateInputCodeRN,
  generateCardCodeRN,
  generateTextCodeRN,
  generateImageCodeRN,
  generateListCodeRN,
  generateContainerCodeRN,
  generatePageCodeRN,
  generateComponentCodeRN,
  generateContainerCodeWithChildrenRN,
  generatePageCodeWithChildrenRN,
};
