/**
 * Validation rules for UI Builder
 * Enforces hierarchy: Page → Container → Component
 */

import type { PageEntity, DragItem, EntityType } from './types';
import { pageSchema, containerSchema, componentSchema } from './schemas';

/**
 * Validate page entity structure
 */
export function validatePage(page: unknown): { valid: boolean; errors?: string[] } {
  try {
    pageSchema.parse(page);
    return { valid: true };
  } catch (error: unknown) {
    if (error instanceof Error && 'errors' in error) {
      const zodError = error as { errors: Array<{ message: string }> };
      return {
        valid: false,
        errors: zodError.errors.map((e) => e.message),
      };
    }
    return { valid: false, errors: ['Invalid page structure'] };
  }
}

/**
 * Validate container entity structure
 */
export function validateContainer(container: unknown): { valid: boolean; errors?: string[] } {
  try {
    containerSchema.parse(container);
    return { valid: true };
  } catch (error: unknown) {
    if (error instanceof Error && 'errors' in error) {
      const zodError = error as { errors: Array<{ message: string }> };
      return {
        valid: false,
        errors: zodError.errors.map((e) => e.message),
      };
    }
    return { valid: false, errors: ['Invalid container structure'] };
  }
}

/**
 * Validate component entity structure
 */
export function validateComponent(component: unknown): { valid: boolean; errors?: string[] } {
  try {
    componentSchema.parse(component);
    return { valid: true };
  } catch (error: unknown) {
    if (error instanceof Error && 'errors' in error) {
      const zodError = error as { errors: Array<{ message: string }> };
      return {
        valid: false,
        errors: zodError.errors.map((e) => e.message),
      };
    }
    return { valid: false, errors: ['Invalid component structure'] };
  }
}

/**
 * Validate hierarchy placement rules
 * Returns true if the drag item can be placed at the target
 */
export function validateHierarchyPlacement(
  dragItem: DragItem,
  targetType: EntityType | 'root'
): boolean {
  // Page can only be placed at root
  if (dragItem.type === 'page') {
    return targetType === 'root';
  }

  // Container can only be placed inside Page
  if (dragItem.type === 'container') {
    return targetType === 'Page';
  }

  // Component can only be placed inside Container
  if (dragItem.type === 'component') {
    return targetType === 'Container';
  }

  return false;
}

/**
 * Validate entire page hierarchy
 * Ensures all nested entities follow the correct structure
 */
export function validatePageHierarchy(page: PageEntity): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];

  // Validate page structure
  const pageValidation = validatePage(page);
  if (!pageValidation.valid) {
    errors.push(...(pageValidation.errors || []));
  }

  // Validate all containers
  for (const container of page.children) {
    const containerValidation = validateContainer(container);
    if (!containerValidation.valid) {
      errors.push(...(containerValidation.errors || []));
    }

    // Validate all components in container
    for (const component of container.children) {
      const componentValidation = validateComponent(component);
      if (!componentValidation.valid) {
        errors.push(...(componentValidation.errors || []));
      }
    }
  }

  return errors.length > 0 ? { valid: false, errors } : { valid: true };
}

/**
 * Check if an entity can be deleted
 * Some entities might have dependencies or constraints
 */
export function canDeleteEntity(
  entityType: EntityType,
  _entityId: string,
  pages: PageEntity[]
): { canDelete: boolean; reason?: string } {
  // For MVP, all entities can be deleted
  // Future: Add checks for references, required entities, etc.
  
  if (entityType === 'Page' && pages.length === 1) {
    return {
      canDelete: false,
      reason: 'Cannot delete the last page',
    };
  }

  return { canDelete: true };
}

/**
 * Check if a drag operation would create a valid hierarchy
 */
export function isValidDrop(
  dragItem: DragItem,
  targetType: EntityType | 'root'
): boolean {
  // Check basic hierarchy rules
  if (!validateHierarchyPlacement(dragItem, targetType)) {
    return false;
  }

  // Additional validation based on target entity
  // For example, check if container has space, if component type is allowed, etc.
  // For MVP, we allow all valid placements

  return true;
}

/**
 * Get maximum nesting depth for validation
 */
export const MAX_NESTING_DEPTH = {
  pages: 1, // Only one level of pages (no nested pages)
  containers: 1, // Containers can't be nested
  components: 1, // Components can't be nested
} as const;

/**
 * Validate nesting depth
 */
export function validateNestingDepth(
  entityType: 'page' | 'container' | 'component',
  currentDepth: number
): boolean {
  const maxDepth = MAX_NESTING_DEPTH[`${entityType}s` as keyof typeof MAX_NESTING_DEPTH];
  return currentDepth <= maxDepth;
}
