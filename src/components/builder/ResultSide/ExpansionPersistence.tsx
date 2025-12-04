/**
 * ExpansionPersistence Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T034)
 * Implements expansion state persistence across property updates and sessions
 */

import { useEffect, useRef, useCallback } from 'react';
import type { HierarchyViewItem, PropertyChange } from '../../../utils/types';
import { useHierarchyExpansion } from '../../../hooks/useHierarchyExpansion';

export interface ExpansionPersistenceProps {
  /**
   * Hierarchy items map
   */
  hierarchyItems: Map<string, HierarchyViewItem>;
  /**
   * Expansion state management
   */
  expansionState: ReturnType<typeof useHierarchyExpansion>;
  /**
   * Property changes that might affect hierarchy
   */
  propertyChanges?: PropertyChange[];
  /**
   * Storage key for persistence (defaults to 'hierarchy-expansion-state')
   */
  storageKey?: string;
  /**
   * Whether to persist across browser sessions (default: true)
   */
  persistAcrossSessions?: boolean;
  /**
   * Callback when expansion state is restored
   */
  onStateRestored?: (expandedIds: string[]) => void;
  /**
   * Callback when expansion state is persisted
   */
  onStatePersisted?: (expandedIds: string[]) => void;
}

/**
 * Manages persistence of hierarchy expansion state across updates and sessions
 */
export function ExpansionPersistence({
  hierarchyItems,
  expansionState,
  propertyChanges = [],
  storageKey = 'hierarchy-expansion-state',
  persistAcrossSessions = true,
  onStateRestored,
  onStatePersisted
}: ExpansionPersistenceProps) {
  const lastHierarchySnapshot = useRef<Map<string, HierarchyViewItem>>(new Map());
  const lastPropertyChangeCount = useRef(0);
  const persistenceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced persistence to avoid excessive writes
  const debouncedPersist = useCallback(() => {
    if (persistenceTimeoutRef.current) {
      clearTimeout(persistenceTimeoutRef.current);
    }

    persistenceTimeoutRef.current = setTimeout(() => {
      const expandedIds = expansionState.getExpandedArray();
      
      if (persistAcrossSessions && typeof window !== 'undefined') {
        try {
          const persistenceData = {
            expandedIds,
            timestamp: Date.now(),
            hierarchySize: hierarchyItems.size
          };
          
          localStorage.setItem(storageKey, JSON.stringify(persistenceData));
          onStatePersisted?.(expandedIds);
        } catch (error) {
          console.warn('Failed to persist expansion state:', error);
        }
      }
    }, 500); // 500ms debounce
  }, [expansionState, hierarchyItems.size, storageKey, persistAcrossSessions, onStatePersisted]);

  // Restore expansion state on initial load
  useEffect(() => {
    if (!persistAcrossSessions || typeof window === 'undefined') {
      return;
    }

    try {
      const stored = localStorage.getItem(storageKey);
      if (!stored) return;

      const persistenceData = JSON.parse(stored);
      const { expandedIds, timestamp, hierarchySize } = persistenceData;

      // Validate stored data isn't too old (7 days max)
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in ms
      if (Date.now() - timestamp > maxAge) {
        localStorage.removeItem(storageKey);
        return;
      }

      // Only restore if hierarchy structure is similar size (within 50%)
      const currentSize = hierarchyItems.size;
      if (Math.abs(currentSize - hierarchySize) > hierarchySize * 0.5) {
        return; // Hierarchy structure has changed significantly
      }

      // Filter expansion IDs to only include items that still exist
      const validExpandedIds = expandedIds.filter((id: string) => hierarchyItems.has(id));
      
      if (validExpandedIds.length > 0) {
        expansionState.setExpanded(validExpandedIds);
        onStateRestored?.(validExpandedIds);
      }
    } catch (error) {
      console.warn('Failed to restore expansion state:', error);
      // Clean up invalid data
      localStorage.removeItem(storageKey);
    }
  }, []); // Only run on mount

  // Persist expansion state when it changes
  useEffect(() => {
    debouncedPersist();
  }, [expansionState.expandedItems, debouncedPersist]);

  // Handle hierarchy structure changes
  useEffect(() => {
    const currentSnapshot = new Map(hierarchyItems);
    const previousSnapshot = lastHierarchySnapshot.current;

    // Check if hierarchy structure has changed
    if (currentSnapshot.size !== previousSnapshot.size) {
      // Hierarchy size changed - clean up invalid expanded items
      const currentExpandedIds = expansionState.getExpandedArray();
      const validExpandedIds = currentExpandedIds.filter(id => hierarchyItems.has(id));
      
      if (validExpandedIds.length !== currentExpandedIds.length) {
        expansionState.setExpanded(validExpandedIds);
      }
    }

    // Update snapshot
    lastHierarchySnapshot.current = currentSnapshot;
  }, [hierarchyItems, expansionState]);

  // Handle property changes that might affect expansion
  useEffect(() => {
    if (propertyChanges.length === lastPropertyChangeCount.current) {
      return; // No new property changes
    }

    // Property updates should maintain current expansion state
    // This effect ensures expansion state persists through property updates
    const currentExpanded = expansionState.getExpandedArray();
    
    // Validate that all expanded items still exist
    const validExpanded = currentExpanded.filter(id => hierarchyItems.has(id));
    
    if (validExpanded.length !== currentExpanded.length) {
      // Some expanded items no longer exist, update state
      expansionState.setExpanded(validExpanded);
    }

    lastPropertyChangeCount.current = propertyChanges.length;
  }, [propertyChanges, expansionState, hierarchyItems]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (persistenceTimeoutRef.current) {
        clearTimeout(persistenceTimeoutRef.current);
      }
    };
  }, []);

  // This component doesn't render anything, it's purely behavioral
  return null;
}

/**
 * Hook version for components that prefer hooks over components
 */
export function useExpansionPersistence(props: ExpansionPersistenceProps) {
  // Just render the component internally
  return ExpansionPersistence(props);
}

export default ExpansionPersistence;