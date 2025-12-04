/**
 * Hierarchy Keyboard Navigation Utilities
 * Feature 004: Real-Time Hierarchy Updates - T049
 * Provides keyboard navigation support for accessibility and power users
 */

import { useCallback, useRef } from 'react';
import type { ComponentEntity, ContainerEntity, PageEntity, EntityType } from './types';

export type NavigationDirection = 'up' | 'down' | 'left' | 'right';
export type NavigationEntity = ComponentEntity | ContainerEntity | PageEntity;

export interface NavigationItem {
  id: string;
  type: EntityType;
  level: number;
  index: number;
  parent?: string;
  children: string[];
  isExpanded?: boolean;
}

export interface KeyboardNavigationOptions {
  /**
   * Enable/disable specific navigation keys
   */
  enableArrowKeys?: boolean;
  enableEnterKey?: boolean;
  enableDeleteKey?: boolean;
  enableTabNavigation?: boolean;
  enableExpandCollapse?: boolean;
  
  /**
   * Behavior options
   */
  wrapAround?: boolean;
  autoExpandOnNavigate?: boolean;
  selectOnNavigate?: boolean;
  
  /**
   * Callbacks
   */
  onNavigate?: (itemId: string, direction: NavigationDirection) => void;
  onSelect?: (entityType: EntityType, entityId: string) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  onExpand?: (entityId: string, expand: boolean) => void;
}

/**
 * Builds a flat navigation structure from hierarchical entities
 */
export function buildNavigationStructure(
  pages: PageEntity[],
  expandedItems: Set<string> = new Set()
): NavigationItem[] {
  const items: NavigationItem[] = [];
  
  function addEntity(
    entity: NavigationEntity, 
    type: EntityType, 
    level: number, 
    parent?: string
  ): void {
    const item: NavigationItem = {
      id: entity.id,
      type,
      level,
      index: items.length,
      parent,
      children: [],
      isExpanded: expandedItems.has(entity.id)
    };
    
    items.push(item);
    
    if ('children' in entity && entity.children) {
      item.children = entity.children.map((child: ComponentEntity | ContainerEntity) => child.id);
      
      // Only add children if this item is expanded
      if (expandedItems.has(entity.id) || type === 'Page') {
        entity.children.forEach((child: ComponentEntity | ContainerEntity) => {
          const childType = 'type' in child ? 'Component' as EntityType : 'Container' as EntityType;
          addEntity(child, childType, level + 1, entity.id);
        });
      }
    }
  }
  
  // Add all pages (always visible)
  pages.forEach(page => addEntity(page, 'Page', 0));
  
  return items;
}

/**
 * Finds the next/previous navigable item
 */
export function findNavigationTarget(
  items: NavigationItem[],
  currentId: string,
  direction: NavigationDirection,
  options: { wrapAround?: boolean } = {}
): NavigationItem | null {
  const currentIndex = items.findIndex(item => item.id === currentId);
  if (currentIndex === -1) return null;
  
  const currentItem = items[currentIndex];
  
  switch (direction) {
    case 'up': {
      const targetIndex = currentIndex - 1;
      if (targetIndex >= 0) {
        return items[targetIndex];
      }
      return options.wrapAround ? items[items.length - 1] : null;
    }
    
    case 'down': {
      const targetIndex = currentIndex + 1;
      if (targetIndex < items.length) {
        return items[targetIndex];
      }
      return options.wrapAround ? items[0] : null;
    }
    
    case 'left': {
      // Navigate to parent (collapse/up level)
      if (currentItem.parent) {
        return items.find(item => item.id === currentItem.parent) || null;
      }
      return null;
    }
    
    case 'right': {
      // Navigate to first child (expand/down level)
      if (currentItem.children.length > 0 && currentItem.isExpanded) {
        return items.find(item => item.parent === currentItem.id) || null;
      }
      return null;
    }
    
    default:
      return null;
  }
}

/**
 * Keyboard navigation hook for hierarchy components
 */
export function useHierarchyKeyboardNavigation(options: KeyboardNavigationOptions = {}) {
  const {
    enableArrowKeys = true,
    enableEnterKey = true,
    enableDeleteKey = true,
    enableTabNavigation = true,
    enableExpandCollapse = true,
    wrapAround = true,
    autoExpandOnNavigate = false,
    selectOnNavigate = true,
    onNavigate,
    onSelect,
    onDelete,
    onExpand
  } = options;
  
  const focusedItemRef = useRef<string | null>(null);
  
  const handleKeyDown = useCallback((
    event: KeyboardEvent,
    navigationItems: NavigationItem[],
    currentSelection?: string
  ) => {
    const target = event.target as HTMLElement;
    
    // Only handle keyboard events on hierarchy items or when focused on hierarchy
    if (!target.closest('[data-hierarchy-item]') && !currentSelection) {
      return;
    }
    
    const currentId = currentSelection || focusedItemRef.current;
    if (!currentId) return;
    
    let handled = false;
    
    // Arrow key navigation
    if (enableArrowKeys) {
      let direction: NavigationDirection | null = null;
      
      switch (event.key) {
        case 'ArrowUp':
          direction = 'up';
          break;
        case 'ArrowDown':
          direction = 'down';
          break;
        case 'ArrowLeft':
          direction = 'left';
          break;
        case 'ArrowRight':
          direction = 'right';
          break;
      }
      
      if (direction) {
        event.preventDefault();
        const targetItem = findNavigationTarget(navigationItems, currentId, direction, { wrapAround });
        
        if (targetItem) {
          focusedItemRef.current = targetItem.id;
          
          if (selectOnNavigate && onSelect) {
            onSelect(targetItem.type, targetItem.id);
          }
          
          if (onNavigate) {
            onNavigate(targetItem.id, direction);
          }
          
          // Auto-expand when navigating right into collapsed item
          if (direction === 'right' && autoExpandOnNavigate && !targetItem.isExpanded && targetItem.children.length > 0) {
            onExpand?.(targetItem.id, true);
          }
        }
        
        handled = true;
      }
    }
    
    // Enter key - select/toggle expansion
    if (enableEnterKey && event.key === 'Enter') {
      event.preventDefault();
      const currentItem = navigationItems.find(item => item.id === currentId);
      
      if (currentItem) {
        if (enableExpandCollapse && currentItem.children.length > 0) {
          // Toggle expansion
          onExpand?.(currentId, !currentItem.isExpanded);
        } else if (onSelect) {
          // Select item
          onSelect(currentItem.type, currentId);
        }
      }
      
      handled = true;
    }
    
    // Delete key
    if (enableDeleteKey && (event.key === 'Delete' || event.key === 'Backspace')) {
      const currentItem = navigationItems.find(item => item.id === currentId);
      
      if (currentItem && onDelete) {
        event.preventDefault();
        onDelete(currentItem.type, currentId);
        handled = true;
      }
    }
    
    // Tab navigation (move between hierarchy levels)
    if (enableTabNavigation && event.key === 'Tab') {
      const currentItem = navigationItems.find(item => item.id === currentId);
      
      if (currentItem) {
        if (event.shiftKey) {
          // Shift+Tab: Navigate to parent or previous sibling's parent
          const direction: NavigationDirection = 'left';
          const targetItem = findNavigationTarget(navigationItems, currentId, direction);
          
          if (targetItem) {
            event.preventDefault();
            focusedItemRef.current = targetItem.id;
            
            if (selectOnNavigate && onSelect) {
              onSelect(targetItem.type, targetItem.id);
            }
            
            handled = true;
          }
        } else {
          // Tab: Navigate to first child or next sibling
          const direction: NavigationDirection = 'right';
          const targetItem = findNavigationTarget(navigationItems, currentId, direction);
          
          if (targetItem) {
            event.preventDefault();
            focusedItemRef.current = targetItem.id;
            
            if (selectOnNavigate && onSelect) {
              onSelect(targetItem.type, targetItem.id);
            }
            
            handled = true;
          }
        }
      }
    }
    
    // Expansion shortcuts
    if (enableExpandCollapse) {
      const currentItem = navigationItems.find(item => item.id === currentId);
      
      if (currentItem && currentItem.children.length > 0) {
        if (event.key === '+' || event.key === '=') {
          // Expand
          event.preventDefault();
          onExpand?.(currentId, true);
          handled = true;
        } else if (event.key === '-') {
          // Collapse
          event.preventDefault();
          onExpand?.(currentId, false);
          handled = true;
        } else if (event.key === '*') {
          // Expand all children recursively
          event.preventDefault();
          onExpand?.(currentId, true);
          // TODO: Implement recursive expansion
          handled = true;
        }
      }
    }
    
    return handled;
  }, [
    enableArrowKeys,
    enableEnterKey,
    enableDeleteKey,
    enableTabNavigation,
    enableExpandCollapse,
    wrapAround,
    autoExpandOnNavigate,
    selectOnNavigate,
    onNavigate,
    onSelect,
    onDelete,
    onExpand
  ]);
  
  const setFocusedItem = useCallback((itemId: string | null) => {
    focusedItemRef.current = itemId;
  }, []);
  
  const getFocusedItem = useCallback(() => {
    return focusedItemRef.current;
  }, []);
  
  return {
    handleKeyDown,
    setFocusedItem,
    getFocusedItem,
    focusedItemRef
  };
}

/**
 * Accessibility helpers for keyboard navigation
 */
export const keyboardNavigationA11y = {
  /**
   * ARIA attributes for hierarchy items
   */
  getAriaAttributes: (item: NavigationItem, isSelected: boolean, isFocused: boolean) => ({
    role: 'treeitem',
    'aria-level': item.level + 1,
    'aria-setsize': -1, // Unknown set size
    'aria-posinset': item.index + 1,
    'aria-selected': isSelected,
    'aria-expanded': item.children.length > 0 ? item.isExpanded : undefined,
    tabIndex: isFocused ? 0 : -1,
    'data-hierarchy-item': item.id,
    'data-hierarchy-level': item.level,
    'data-hierarchy-type': item.type
  }),
  
  /**
   * Keyboard shortcuts help text
   */
  getKeyboardHelp: () => ({
    arrows: 'Arrow keys: Navigate hierarchy',
    enter: 'Enter: Select item or toggle expansion',
    delete: 'Delete/Backspace: Remove item',
    tab: 'Tab/Shift+Tab: Move between levels',
    expand: '+/-: Expand/collapse, *: Expand all'
  })
};

export default useHierarchyKeyboardNavigation;