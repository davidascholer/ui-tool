/**
 * AutoExpandBehavior Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T032)
 * Handles auto-expand behavior when selecting nested components for editing
 */

import { useEffect, useRef } from 'react';
import type { HierarchyViewItem } from '../../../utils/types';
import { useHierarchyExpansion } from '../../../hooks/useHierarchyExpansion';

export interface AutoExpandBehaviorProps {
  /**
   * Currently selected entity ID for editing
   */
  editingEntityId: string | null;
  /**
   * Hierarchy items map
   */
  hierarchyItems: Map<string, HierarchyViewItem>;
  /**
   * Expansion state management
   */
  expansionState: ReturnType<typeof useHierarchyExpansion>;
  /**
   * Whether auto-expand is enabled (default: true)
   */
  autoExpandEnabled?: boolean;
  /**
   * Callback when auto-expansion occurs
   */
  onAutoExpand?: (expandedIds: string[], targetId: string) => void;
}

/**
 * Manages auto-expansion behavior for hierarchy navigation
 * Automatically expands parent items when selecting deeply nested components
 */
export function AutoExpandBehavior({
  editingEntityId,
  hierarchyItems,
  expansionState,
  autoExpandEnabled = true,
  onAutoExpand
}: AutoExpandBehaviorProps) {
  const previousEditingId = useRef<string | null>(null);
  const expansionTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());

  // Auto-expand when editing entity changes
  useEffect(() => {
    // Skip if auto-expand is disabled or no entity is being edited
    if (!autoExpandEnabled || !editingEntityId) {
      previousEditingId.current = editingEntityId;
      return;
    }

    // Skip if same entity is still being edited
    if (editingEntityId === previousEditingId.current) {
      return;
    }

    // Clear any pending expansion timeouts
    expansionTimeouts.current.forEach(timeout => clearTimeout(timeout));
    expansionTimeouts.current.clear();

    // Get expansion path for the target entity
    const expansionPath = expansionState.getExpansionPath(editingEntityId, hierarchyItems);
    
    if (expansionPath.length === 0) {
      // Entity is at root level or not found, no expansion needed
      previousEditingId.current = editingEntityId;
      return;
    }

    // Perform staged expansion with animation timing
    const expandWithDelay = (pathIds: string[], index: number = 0) => {
      if (index >= pathIds.length) {
        // Expansion complete, call callback
        onAutoExpand?.(pathIds, editingEntityId);
        return;
      }

      const itemId = pathIds[index];
      
      // Skip if already expanded
      if (expansionState.isExpanded(itemId)) {
        expandWithDelay(pathIds, index + 1);
        return;
      }

      // Expand current item
      expansionState.expandItem(itemId);

      // Schedule next expansion with slight delay for smooth animation
      const timeout = setTimeout(() => {
        expansionTimeouts.current.delete(itemId);
        expandWithDelay(pathIds, index + 1);
      }, 50); // 50ms delay between expansions

      expansionTimeouts.current.set(itemId, timeout);
    };

    // Start staged expansion
    expandWithDelay(expansionPath);

    // Update previous editing ID
    previousEditingId.current = editingEntityId;
  }, [editingEntityId, hierarchyItems, expansionState, autoExpandEnabled, onAutoExpand]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      expansionTimeouts.current.forEach(timeout => clearTimeout(timeout));
      expansionTimeouts.current.clear();
    };
  }, []);

  // This component doesn't render anything, it's purely behavioral
  return null;
}

/**
 * Hook version for components that prefer hooks over components
 */
export function useAutoExpandBehavior({
  editingEntityId,
  hierarchyItems,
  expansionState,
  autoExpandEnabled = true,
  onAutoExpand
}: AutoExpandBehaviorProps) {
  const previousEditingId = useRef<string | null>(null);
  const expansionTimeouts = useRef<Map<string, NodeJS.Timeout>>(new Map());

  useEffect(() => {
    if (!autoExpandEnabled || !editingEntityId) {
      previousEditingId.current = editingEntityId;
      return;
    }

    if (editingEntityId === previousEditingId.current) {
      return;
    }

    // Clear pending timeouts
    expansionTimeouts.current.forEach(timeout => clearTimeout(timeout));
    expansionTimeouts.current.clear();

    // Auto-expand path to editing entity
    expansionState.expandPath(editingEntityId, hierarchyItems);
    
    // Call callback if provided
    const expansionPath = expansionState.getExpansionPath(editingEntityId, hierarchyItems);
    if (expansionPath.length > 0) {
      onAutoExpand?.(expansionPath, editingEntityId);
    }

    previousEditingId.current = editingEntityId;
  }, [editingEntityId, hierarchyItems, expansionState, autoExpandEnabled, onAutoExpand]);

  useEffect(() => {
    return () => {
      expansionTimeouts.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);
}

export default AutoExpandBehavior;