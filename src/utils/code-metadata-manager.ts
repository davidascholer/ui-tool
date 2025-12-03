/**
 * Global Code Metadata Manager
 * Manages component code metadata across the application
 * Feature 003: Component Tracking and Code Export
 */

import type { GlobalCodeMetadata, ComponentCodeMetadata } from '@/utils/types';

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
