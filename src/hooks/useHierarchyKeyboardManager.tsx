/**
 * Simplified Hierarchy Keyboard Navigation Hook
 * Feature 004: Real-Time Hierarchy Updates - T049
 * Provides keyboard navigation utilities for hierarchy components
 */

import { useCallback, useRef } from 'react';
import type { EntityType } from '../utils/types';

export interface KeyboardNavigationCallbacks {
  onSelect?: (entityType: EntityType, entityId: string) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  onExpand?: (entityId: string, expand: boolean) => void;
}

/**
 * Simple keyboard navigation for individual hierarchy items
 * Provides keyboard event handling for Selectable components
 */
export function useHierarchyItemKeyboard(
  entityType: EntityType,
  entityId: string,
  callbacks: KeyboardNavigationCallbacks = {}
) {
  const { onSelect, onDelete, onExpand } = callbacks;
  
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    let handled = false;
    
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        event.stopPropagation();
        onSelect?.(entityType, entityId);
        handled = true;
        break;
        
      case 'Delete':
      case 'Backspace':
        if (onDelete) {
          event.preventDefault();
          event.stopPropagation();
          onDelete(entityType, entityId);
          handled = true;
        }
        break;
        
      case '+':
      case '=':
        if (onExpand) {
          event.preventDefault();
          event.stopPropagation();
          onExpand(entityId, true);
          handled = true;
        }
        break;
        
      case '-':
        if (onExpand) {
          event.preventDefault();
          event.stopPropagation();
          onExpand(entityId, false);
          handled = true;
        }
        break;
    }
    
    return handled;
  }, [entityType, entityId, onSelect, onDelete, onExpand]);
  
  const getAriaAttributes = useCallback((isSelected: boolean, hasChildren: boolean, isExpanded?: boolean) => ({
    role: 'button',
    tabIndex: 0,
    'aria-selected': isSelected,
    'aria-expanded': hasChildren ? isExpanded : undefined,
    'data-hierarchy-item': entityId,
    'data-hierarchy-type': entityType
  }), [entityId, entityType]);
  
  return {
    handleKeyDown,
    getAriaAttributes
  };
}

/**
 * Enhanced keyboard navigation manager for hierarchy containers
 * Provides arrow key navigation between items
 */
export function useHierarchyContainerKeyboard() {
  const focusedItemRef = useRef<string | null>(null);
  
  const handleContainerKeyDown = useCallback((event: React.KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const hierarchyItem = target.closest('[data-hierarchy-item]');
    
    if (!hierarchyItem) return false;
    
    const currentId = hierarchyItem.getAttribute('data-hierarchy-item');
    let handled = false;
    
    switch (event.key) {
      case 'ArrowUp': {
        event.preventDefault();
        const previousSibling = hierarchyItem.previousElementSibling as HTMLElement;
        if (previousSibling?.querySelector('[data-hierarchy-item]')) {
          const prevItem = previousSibling.querySelector('[data-hierarchy-item]') as HTMLElement;
          prevItem.focus();
          focusedItemRef.current = prevItem.getAttribute('data-hierarchy-item');
          handled = true;
        }
        break;
      }
      
      case 'ArrowDown': {
        event.preventDefault();
        const nextSibling = hierarchyItem.nextElementSibling as HTMLElement;
        if (nextSibling?.querySelector('[data-hierarchy-item]')) {
          const nextItem = nextSibling.querySelector('[data-hierarchy-item]') as HTMLElement;
          nextItem.focus();
          focusedItemRef.current = nextItem.getAttribute('data-hierarchy-item');
          handled = true;
        }
        break;
      }
      
      case 'ArrowRight': {
        event.preventDefault();
        // Try to expand or navigate to first child
        const expandButton = hierarchyItem.querySelector('[data-expand-button]') as HTMLElement;
        if (expandButton) {
          expandButton.click();
          handled = true;
        }
        break;
      }
      
      case 'ArrowLeft': {
        event.preventDefault();
        // Try to collapse or navigate to parent
        const expandButton = hierarchyItem.querySelector('[data-expand-button]') as HTMLElement;
        if (expandButton) {
          expandButton.click();
          handled = true;
        }
        break;
      }
    }
    
    if (handled) {
      focusedItemRef.current = currentId;
    }
    
    return handled;
  }, []);
  
  const focusItem = useCallback((itemId: string) => {
    const element = document.querySelector(`[data-hierarchy-item="${itemId}"]`) as HTMLElement;
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      focusedItemRef.current = itemId;
    }
  }, []);
  
  const getFocusedItem = useCallback(() => {
    return focusedItemRef.current;
  }, []);
  
  return {
    handleContainerKeyDown,
    focusItem,
    getFocusedItem
  };
}

export default useHierarchyItemKeyboard;