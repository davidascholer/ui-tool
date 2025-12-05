/**
 * Drag and Drop helpers
 * Supports both mouse and touch interactions
 */

import type { DragItem, DropResult, EntityType, ComponentType } from './types';

// DnD event data transfer key
const DND_DATA_KEY = 'application/ui-builder';

/**
 * Store drag item data for the current drag operation
 */
export function setDragData(event: React.DragEvent, item: DragItem): void {
  event.dataTransfer.effectAllowed = 'copy';
  event.dataTransfer.setData(DND_DATA_KEY, JSON.stringify(item));
  event.dataTransfer.setData('text/plain', JSON.stringify(item)); // Fallback
}

/**
 * Retrieve drag item data from the current drag operation
 */
export function getDragData(event: React.DragEvent): DragItem | null {
  try {
    const data = event.dataTransfer.getData(DND_DATA_KEY) || event.dataTransfer.getData('text/plain');
    if (!data) return null;
    return JSON.parse(data) as DragItem;
  } catch {
    return null;
  }
}

/**
 * Validate if a drop operation is allowed
 * Hierarchy rules:
 * - Page can only be dropped at root level
 * - Container can only be dropped inside Page
 * - Component can only be dropped inside Container
 */
export function validateDrop(
  dragItem: DragItem,
  targetType: EntityType | 'root'
): DropResult {
  // Page can only drop at root
  if (dragItem.type === 'page') {
    if (targetType === 'root') {
      return { valid: true, targetType: undefined };
    }
    return {
      valid: false,
      reason: 'Pages can only be added to the canvas root',
    };
  }

  // Container can only drop inside Page
  if (dragItem.type === 'container') {
    if (targetType === 'Page') {
      return { valid: true, targetType: 'Page' };
    }
    return {
      valid: false,
      reason: 'Containers can only be added inside Pages',
    };
  }

  // Component can only drop inside Container
  if (dragItem.type === 'component') {
    if (targetType === 'Container') {
      return { valid: true, targetType: 'Container' };
    }
    return {
      valid: false,
      reason: 'Components can only be added inside Containers',
    };
  }

  return { valid: false, reason: 'Invalid drag item type' };
}

/**
 * Get the deepest valid target for a drag operation
 * Implements the "deepest-valid-target" rule for overlapping drop zones
 */
export function getDeepestValidTarget(
  dragItem: DragItem,
  targets: Array<{ id: string; type: EntityType }>
): { id: string; type: EntityType } | null {
  // Filter valid targets based on hierarchy rules
  const validTargets = targets.filter((target) => {
    const result = validateDrop(dragItem, target.type);
    return result.valid;
  });

  if (validTargets.length === 0) return null;

  // Return the deepest (most specific) valid target
  // Order of specificity: Component > Container > Page
  const componentTarget = validTargets.find((t) => t.type === 'Component');
  if (componentTarget) return componentTarget;

  const containerTarget = validTargets.find((t) => t.type === 'Container');
  if (containerTarget) return containerTarget;

  const pageTarget = validTargets.find((t) => t.type === 'Page');
  if (pageTarget) return pageTarget;

  return null;
}

/**
 * Create a new drag item for catalog items
 */
export function createDragItem(
  type: 'page' | 'container' | 'component',
  componentType?: ComponentType
): DragItem {
  return {
    type,
    componentType,
  };
}

/**
 * Handle drag over event to show visual feedback
 */
export function handleDragOver(event: React.DragEvent, isValidTarget: boolean): void {
  if (isValidTarget) {
    event.preventDefault(); // Allow drop
    event.dataTransfer.dropEffect = 'copy';
  } else {
    event.dataTransfer.dropEffect = 'none';
  }
}

/**
 * Touch event helpers for mobile DnD support
 */
export interface TouchDragState {
  active: boolean;
  item: DragItem | null;
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
}

export function createTouchDragState(): TouchDragState {
  return {
    active: false,
    item: null,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
  };
}

export function handleTouchStart(
  event: React.TouchEvent,
  item: DragItem,
  // state: TouchDragState
): TouchDragState {
  const touch = event.touches[0];
  return {
    active: true,
    item,
    startX: touch.clientX,
    startY: touch.clientY,
    currentX: touch.clientX,
    currentY: touch.clientY,
  };
}

export function handleTouchMove(
  event: React.TouchEvent,
  currentState: TouchDragState
): TouchDragState {
  if (!currentState.active) return currentState;

  const touch = event.touches[0];
  return {
    ...currentState,
    currentX: touch.clientX,
    currentY: touch.clientY,
  };
}

export function handleTouchEnd(): TouchDragState {
  return createTouchDragState();
}

/**
 * Get visual feedback class names based on validation result
 */
export function getDropZoneClasses(
  isDragOver: boolean,
  isValid: boolean,
  baseClasses: string = ''
): string {
  const classes = [baseClasses];

  if (isDragOver) {
    if (isValid) {
      // Valid drop target - green glow
      classes.push('shadow-[0_0_0_3px_rgb(var(--color-valid))]');
      classes.push('border-[rgb(var(--color-valid))]');
    } else {
      // Invalid drop target - red glow
      classes.push('shadow-[0_0_0_3px_rgb(var(--color-invalid))]');
      classes.push('border-[rgb(var(--color-invalid))]');
    }
  }

  return classes.filter(Boolean).join(' ');
}
