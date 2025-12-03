/**
 * Global Code Metadata Manager
 * Manages component code metadata across the application
 * Feature 003: Component Tracking and Code Export
 */

import type { 
  GlobalCodeMetadata, 
  ComponentCodeMetadata, 
  PageEntity,
  CodeFormat,
  EntityType
} from '@/utils/types';
import { generateReactCode } from './code-generators/react';
import { generateReactNativeCode } from './code-generators/react-native';

/**
 * Sync metadata for an entity by ID
 * @param globalMetadata Current global metadata state
 * @param entityId Entity ID to sync
 * @param metadata Metadata to set
 * @returns Updated global metadata
 */
export function syncMetadata(
  globalMetadata: GlobalCodeMetadata,
  entityId: string,
  metadata: ComponentCodeMetadata
): GlobalCodeMetadata {
  return {
    ...globalMetadata,
    [entityId]: metadata,
  };
}

/**
 * Retrieve metadata for a specific entity
 * @param globalMetadata Global metadata state
 * @param entityId Entity ID to retrieve
 * @returns ComponentCodeMetadata or null if not found
 */
export function getMetadata(
  globalMetadata: GlobalCodeMetadata,
  entityId: string
): ComponentCodeMetadata | null {
  return globalMetadata[entityId] || null;
}

/**
 * Remove metadata for a specific entity
 * @param globalMetadata Global metadata state
 * @param entityId Entity ID to remove
 * @returns Updated global metadata
 */
export function removeMetadata(
  globalMetadata: GlobalCodeMetadata,
  entityId: string
): GlobalCodeMetadata {
  const updated = { ...globalMetadata };
  delete updated[entityId];
  return updated;
}

/**
 * Initialize empty metadata for an entity
 * @param element Base element name (e.g., 'div', 'button', 'View')
 * @returns Empty ComponentCodeMetadata
 */
export function initializeMetadata(
  element: string
): ComponentCodeMetadata {
  return {
    'react-code': `<${element}></${element}>`,
    'styles': '',
    'element': element,
  };
}

/**
 * Batch update metadata for multiple entities
 * @param globalMetadata Current global metadata state
 * @param updates Record of entity IDs to metadata
 * @returns Updated global metadata
 */
export function batchUpdateMetadata(
  globalMetadata: GlobalCodeMetadata,
  updates: Record<string, ComponentCodeMetadata>
): GlobalCodeMetadata {
  return {
    ...globalMetadata,
    ...updates,
  };
}

/**
 * Check if metadata exists for an entity
 * @param globalMetadata Global metadata state
 * @param entityId Entity ID to check
 * @returns true if metadata exists
 */
export function hasMetadata(
  globalMetadata: GlobalCodeMetadata,
  entityId: string
): boolean {
  return entityId in globalMetadata;
}

/**
 * Get all entity IDs that have metadata
 * @param globalMetadata Global metadata state
 * @returns Array of entity IDs
 */
export function getAllMetadataKeys(
  globalMetadata: GlobalCodeMetadata
): string[] {
  return Object.keys(globalMetadata);
}

/**
 * Clear all metadata
 * @returns Empty global metadata object
 */
export function clearAllMetadata(): GlobalCodeMetadata {
  return {};
}

/**
 * Generate code for an entity and create metadata
 * @param entityType Type of entity (Page, Container, or Component)
 * @param entityId ID of the entity
 * @param pages All pages in the builder state
 * @param codeFormat Code format ('react' or 'react-native')
 * @returns ComponentCodeMetadata with generated code
 */
export function generateCodeMetadata(
  entityType: EntityType,
  entityId: string,
  pages: PageEntity[],
  codeFormat: CodeFormat
): ComponentCodeMetadata {
  // Generate code based on format
  const generatedCode = codeFormat === 'react'
    ? generateReactCode(entityType, entityId, pages)
    : generateReactNativeCode(entityType, entityId, pages);

  // Determine element type based on entity
  let element = 'div';
  if (entityType === 'Page') {
    element = codeFormat === 'react' ? 'div' : 'SafeAreaView';
  } else if (entityType === 'Container') {
    element = codeFormat === 'react' ? 'div' : 'View';
  } else if (entityType === 'Component') {
    // Find the component to get its type
    const component = pages
      .flatMap(p => p.children)
      .flatMap(c => c.children)
      .find(comp => comp.id === entityId);
    if (component) {
      const componentType = component.type;
      // Map component type to element
      if (codeFormat === 'react') {
        element = componentType === 'Button' ? 'button' 
          : componentType === 'Input' ? 'input'
          : componentType === 'Card' ? 'div'
          : componentType === 'Text' ? 'p'
          : componentType === 'Image' ? 'img'
          : componentType === 'List' ? 'ul'
          : 'div';
      } else {
        element = componentType === 'Button' ? 'TouchableOpacity'
          : componentType === 'Input' ? 'TextInput'
          : componentType === 'Card' ? 'View'
          : componentType === 'Text' ? 'Text'
          : componentType === 'Image' ? 'Image'
          : componentType === 'List' ? 'FlatList'
          : 'View';
      }
    }
  }

  // Extract styles from generated code (classes or style objects)
  let styles = '';
  const classMatch = generatedCode.match(/className="([^"]*)"/);
  if (classMatch) {
    styles = classMatch[1];
  }
  const styleMatch = generatedCode.match(/style=\{([^}]*)\}/);
  if (styleMatch) {
    styles = styleMatch[1];
  }

  return {
    'react-code': generatedCode,
    'styles': styles,
    'element': element,
  };
}

/**
 * Update metadata for an entity by regenerating its code
 * @param globalMetadata Current global metadata state
 * @param entityType Type of entity
 * @param entityId Entity ID to update
 * @param pages All pages in the builder state
 * @param codeFormat Code format to use
 * @returns Updated global metadata
 */
export function updateCodeMetadata(
  globalMetadata: GlobalCodeMetadata,
  entityType: EntityType,
  entityId: string,
  pages: PageEntity[],
  codeFormat: CodeFormat
): GlobalCodeMetadata {
  const metadata = generateCodeMetadata(entityType, entityId, pages, codeFormat);
  return syncMetadata(globalMetadata, entityId, metadata);
}
