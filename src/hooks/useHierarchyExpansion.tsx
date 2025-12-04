/**
 * useHierarchyExpansion Hook
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T030)
 * Manages expansion state of hierarchy items with auto-expand and persistence
 */

import { useState, useCallback, useRef, useEffect } from 'react';
import type { HierarchyViewItem } from '../utils/types';
import { calculateExpansionPath, getChildEntityIds } from '../utils/hierarchyHelpers';

interface ExpansionOptions {
  /**
   * Initial set of expanded item IDs
   */
  initialExpanded?: string[];
  /**
   * Whether to persist expansion state to localStorage
   */
  persistToStorage?: boolean;
  /**
   * Storage key for persistence (defaults to 'hierarchy-expansion')
   */
  storageKey?: string;
  /**
   * Maximum number of items to keep expanded (for performance)
   */
  maxExpanded?: number;
}

interface HierarchyExpansionState {
  /**
   * Set of currently expanded item IDs
   */
  expandedItems: Set<string>;
  /**
   * Expand a specific item
   */
  expandItem: (id: string) => void;
  /**
   * Collapse a specific item
   */
  collapseItem: (id: string) => void;
  /**
   * Toggle expansion state of an item
   */
  toggleItem: (id: string) => void;
  /**
   * Auto-expand path to make target item visible
   */
  expandPath: (targetId: string, hierarchyItems: Map<string, HierarchyViewItem>) => void;
  /**
   * Collapse all items
   */
  collapseAll: () => void;
  /**
   * Expand all items (use with caution on large hierarchies)
   */
  expandAll: (hierarchyItems: Map<string, HierarchyViewItem>) => void;
  /**
   * Get the expansion path for a target item
   */
  getExpansionPath: (targetId: string, hierarchyItems: Map<string, HierarchyViewItem>) => string[];
  /**
   * Check if an item is expanded
   */
  isExpanded: (id: string) => boolean;
  /**
   * Get all expanded item IDs as array
   */
  getExpandedArray: () => string[];
  /**
   * Set multiple items as expanded
   */
  setExpanded: (ids: string[]) => void;
  /**
   * Clear expansion state and optionally set new items
   */
  resetExpansion: (newExpanded?: string[]) => void;
}

/**
 * Hook for managing hierarchy expansion state with persistence and auto-expansion
 */
export function useHierarchyExpansion(options: ExpansionOptions = {}): HierarchyExpansionState {
  const {
    initialExpanded = [],
    persistToStorage = true,
    storageKey = 'hierarchy-expansion',
    maxExpanded = 100
  } = options;

  // Load initial state from storage if available
  const loadFromStorage = useCallback((): string[] => {
    if (!persistToStorage || typeof window === 'undefined') {
      return initialExpanded;
    }

    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        return Array.isArray(parsed) ? parsed : initialExpanded;
      }
    } catch (error) {
      console.warn('Failed to load expansion state from localStorage:', error);
    }

    return initialExpanded;
  }, [initialExpanded, persistToStorage, storageKey]);

  // Initialize state
  const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
    return new Set(loadFromStorage());
  });

  // Ref to track if we should persist (avoid initial save)
  const shouldPersist = useRef(false);

  // Persist to storage when expansion changes
  const persistToStorageRef = useCallback((items: Set<string>) => {
    if (!shouldPersist.current || !persistToStorage || typeof window === 'undefined') {
      return;
    }

    try {
      const itemsArray = Array.from(items);
      // Limit stored items for performance
      const limitedItems = itemsArray.slice(0, maxExpanded);
      localStorage.setItem(storageKey, JSON.stringify(limitedItems));
    } catch (error) {
      console.warn('Failed to persist expansion state to localStorage:', error);
    }
  }, [persistToStorage, storageKey, maxExpanded]);

  // Update persistence flag after initial load
  useEffect(() => {
    shouldPersist.current = true;
  }, []);

  // Persist whenever expansion changes
  useEffect(() => {
    persistToStorageRef(expandedItems);
  }, [expandedItems, persistToStorageRef]);

  const expandItem = useCallback((id: string) => {
    setExpandedItems(prev => {
      if (prev.has(id)) return prev; // Already expanded
      const newSet = new Set(prev);
      newSet.add(id);
      
      // Limit size for performance
      if (newSet.size > maxExpanded) {
        const itemsArray = Array.from(newSet);
        const limitedItems = itemsArray.slice(-maxExpanded); // Keep most recent
        return new Set(limitedItems);
      }
      
      return newSet;
    });
  }, [maxExpanded]);

  const collapseItem = useCallback((id: string) => {
    setExpandedItems(prev => {
      if (!prev.has(id)) return prev; // Already collapsed
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const toggleItem = useCallback((id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        // Limit size for performance
        if (newSet.size > maxExpanded) {
          const itemsArray = Array.from(newSet);
          const limitedItems = itemsArray.slice(-maxExpanded);
          return new Set(limitedItems);
        }
      }
      return newSet;
    });
  }, [maxExpanded]);

  const expandPath = useCallback((targetId: string, hierarchyItems: Map<string, HierarchyViewItem>) => {
    const path = calculateExpansionPath(targetId, hierarchyItems);
    if (path.length === 0) return;

    setExpandedItems(prev => {
      const newSet = new Set(prev);
      path.forEach(id => newSet.add(id));
      
      // Limit size for performance
      if (newSet.size > maxExpanded) {
        const itemsArray = Array.from(newSet);
        const limitedItems = itemsArray.slice(-maxExpanded);
        return new Set(limitedItems);
      }
      
      return newSet;
    });
  }, [maxExpanded]);

  const collapseAll = useCallback(() => {
    setExpandedItems(new Set());
  }, []);

  const expandAll = useCallback((hierarchyItems: Map<string, HierarchyViewItem>) => {
    const allIds = Array.from(hierarchyItems.keys());
    // Limit to maxExpanded for performance
    const limitedIds = allIds.slice(0, maxExpanded);
    setExpandedItems(new Set(limitedIds));
  }, [maxExpanded]);

  const getExpansionPath = useCallback((targetId: string, hierarchyItems: Map<string, HierarchyViewItem>) => {
    return calculateExpansionPath(targetId, hierarchyItems);
  }, []);

  const isExpanded = useCallback((id: string) => {
    return expandedItems.has(id);
  }, [expandedItems]);

  const getExpandedArray = useCallback(() => {
    return Array.from(expandedItems);
  }, [expandedItems]);

  const setExpanded = useCallback((ids: string[]) => {
    // Limit to maxExpanded for performance
    const limitedIds = ids.slice(0, maxExpanded);
    setExpandedItems(new Set(limitedIds));
  }, [maxExpanded]);

  const resetExpansion = useCallback((newExpanded?: string[]) => {
    if (newExpanded) {
      const limitedIds = newExpanded.slice(0, maxExpanded);
      setExpandedItems(new Set(limitedIds));
    } else {
      setExpandedItems(new Set());
    }
  }, [maxExpanded]);

  return {
    expandedItems,
    expandItem,
    collapseItem,
    toggleItem,
    expandPath,
    collapseAll,
    expandAll,
    getExpansionPath,
    isExpanded,
    getExpandedArray,
    setExpanded,
    resetExpansion
  };
}

export default useHierarchyExpansion;