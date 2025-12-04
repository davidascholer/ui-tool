/**
 * useHierarchyUpdates Hook
 * Feature 004: Real-Time Hierarchy Updates
 * Manages real-time updates to the hierarchy view when entity properties change
 */

import { useCallback, useRef, useEffect } from 'react';
import type { PageEntity, Selection, PropertyChange, HierarchyViewItem, UpdateContext } from '../utils/types';

export interface UseHierarchyUpdatesProps {
  pages: PageEntity[];
  selection: Selection | null;
  onUpdate?: (entityId: string, changes: PropertyChange[]) => void;
}

export interface UseHierarchyUpdatesReturn {
  hierarchyItems: Map<string, HierarchyViewItem>;
  updateContext: UpdateContext;
  queueChange: (change: PropertyChange) => void;
  processPending: () => void;
  clearQueue: (entityId?: string) => void;
}

/**
 * Custom hook for managing hierarchy updates with debouncing and batching
 */
export function useHierarchyUpdates({
  pages,
  onUpdate,
}: UseHierarchyUpdatesProps): UseHierarchyUpdatesReturn {
  
  // State refs for performance
  const hierarchyItemsRef = useRef<Map<string, HierarchyViewItem>>(new Map());
  const updateContextRef = useRef<UpdateContext>({
    pendingChanges: new Map(),
    lastUpdate: 0,
    batchCount: 0,
    isProcessing: false,
  });

  // Debounce timer refs
  const debounceTimeoutRef = useRef<number | null>(null);
  const batchTimeoutRef = useRef<number | null>(null);

  /**
   * Process all pending changes immediately
   */
  const processPending = useCallback(() => {
    const { pendingChanges } = updateContextRef.current;
    
    if (pendingChanges.size === 0) return;

    updateContextRef.current.isProcessing = true;

    try {
      // Process each entity's changes
      for (const [entityId, changes] of pendingChanges.entries()) {
        // TODO: Apply changes to hierarchy items
        // TODO: Generate visual indicators
        // TODO: Update expansion states
        
        if (onUpdate) {
          onUpdate(entityId, changes);
        }
      }

      // Clear processed changes
      pendingChanges.clear();
      updateContextRef.current.batchCount = 0;
    } finally {
      updateContextRef.current.isProcessing = false;
    }
  }, [onUpdate]);

  /**
   * Queue a property change for processing
   */
  const queueChange = useCallback((change: PropertyChange) => {
    const { pendingChanges } = updateContextRef.current;
    const entityChanges = pendingChanges.get(change.entityId) || [];
    entityChanges.push(change);
    pendingChanges.set(change.entityId, entityChanges);

    // Update batch count for performance monitoring
    updateContextRef.current.batchCount += 1;
    updateContextRef.current.lastUpdate = Date.now();

    // Clear existing debounce timer
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set up debounced processing (500ms for real-time updates)
    debounceTimeoutRef.current = window.setTimeout(() => {
      processPending();
    }, 500);

    // Batch detection (3+ changes in 1 second)
    if (updateContextRef.current.batchCount >= 3) {
      if (batchTimeoutRef.current) {
        clearTimeout(batchTimeoutRef.current);
      }
      
      // Use requestAnimationFrame for immediate batch processing
      batchTimeoutRef.current = window.setTimeout(() => {
        processPending();
      }, 0);
    }
  }, [processPending]);

  /**
   * Clear queued changes for specific entity or all entities
   */
  const clearQueue = useCallback((entityId?: string) => {
    if (entityId) {
      updateContextRef.current.pendingChanges.delete(entityId);
    } else {
      updateContextRef.current.pendingChanges.clear();
      updateContextRef.current.batchCount = 0;
    }
  }, []);

  // Initialize hierarchy items from pages
  useEffect(() => {
    const newHierarchyItems = new Map<string, HierarchyViewItem>();

    // Convert pages to hierarchy items
    for (const page of pages) {
      newHierarchyItems.set(page.id, {
        id: page.id,
        type: 'Page',
        displayName: page.name.length > 25 ? page.name.substring(0, 24) + '…' : page.name,
        fullName: page.name,
        isExpanded: true, // Pages start expanded
        isEditing: false,
        level: 0,
        indicators: [], // TODO: Generate page-level indicators
      });

      // Convert containers
      for (const container of page.children) {
        newHierarchyItems.set(container.id, {
          id: container.id,
          type: 'Container',
          displayName: container.name.length > 25 ? container.name.substring(0, 24) + '…' : container.name,
          fullName: container.name,
          isExpanded: true, // Containers start expanded
          isEditing: false,
          level: 1,
          parentId: page.id,
          indicators: [], // TODO: Generate container-level indicators
        });

        // Convert components
        for (const component of container.children) {
          newHierarchyItems.set(component.id, {
            id: component.id,
            type: 'Component',
            displayName: component.type,
            fullName: component.type,
            isExpanded: false, // Components don't expand
            isEditing: false,
            level: 2,
            parentId: container.id,
            indicators: [], // TODO: Generate component-level indicators
          });
        }
      }
    }

    hierarchyItemsRef.current = newHierarchyItems;
  }, [pages]);

  // Cleanup timers on unmount
  useEffect(() => {
    const debounceTimeout = debounceTimeoutRef.current;
    const batchTimeout = batchTimeoutRef.current;
    
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      if (batchTimeout) {
        clearTimeout(batchTimeout);
      }
    };
  }, []);

  return {
    hierarchyItems: hierarchyItemsRef.current,
    updateContext: updateContextRef.current,
    queueChange,
    processPending,
    clearQueue,
  };
}