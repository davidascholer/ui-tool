/**
 * FocusManagement Component
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T035)
 * Ensures edited components remain visible and properly focused
 */

import { useEffect, useRef, useCallback } from 'react';
import type { HierarchyViewItem } from '../../../utils/types';

export interface FocusManagementProps {
  /**
   * Currently editing entity ID
   */
  editingEntityId: string | null;
  /**
   * Hierarchy container ref for scrolling
   */
  hierarchyContainerRef: React.RefObject<HTMLElement>;
  /**
   * Expanded items set
   */
  expandedItems: Set<string>;
  /**
   * Whether to enable auto-scroll (default: true)
   */
  autoScrollEnabled?: boolean;
  /**
   * Scroll behavior (default: 'smooth')
   */
  scrollBehavior?: ScrollBehavior;
  /**
   * Offset from top when scrolling (default: 80px)
   */
  scrollOffset?: number;
  /**
   * Callback when focus management is triggered
   */
  onFocusManaged?: (entityId: string, scrolled: boolean) => void;
}

/**
 * Manages focus and visibility of edited components in hierarchy view
 */
export function FocusManagement({
  editingEntityId,
  hierarchyContainerRef,
  expandedItems,
  autoScrollEnabled = true,
  scrollBehavior = 'smooth',
  scrollOffset = 80,
  onFocusManaged
}: FocusManagementProps) {
  const previousEditingId = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Scroll to element if it exists and is not visible
  const scrollToEntity = useCallback((entityId: string) => {
    if (!hierarchyContainerRef.current || !autoScrollEnabled) {
      return false;
    }

    const entityElement = hierarchyContainerRef.current.querySelector(
      `[data-entity-id="${entityId}"]`
    );

    if (!entityElement) {
      return false;
    }

    const containerRect = hierarchyContainerRef.current.getBoundingClientRect();
    const entityRect = entityElement.getBoundingClientRect();

    // Check if element is already visible with some buffer
    const isVisible = 
      entityRect.top >= containerRect.top + scrollOffset &&
      entityRect.bottom <= containerRect.bottom - scrollOffset;

    if (isVisible) {
      return false; // Already visible, no scroll needed
    }

    // Calculate scroll position
    const scrollTop = hierarchyContainerRef.current.scrollTop;
    const targetScrollTop = 
      scrollTop + entityRect.top - containerRect.top - scrollOffset;

    // Perform scroll
    hierarchyContainerRef.current.scrollTo({
      top: Math.max(0, targetScrollTop),
      behavior: scrollBehavior
    });

    return true;
  }, [hierarchyContainerRef, autoScrollEnabled, scrollBehavior, scrollOffset]);

  // Focus management when editing entity changes
  useEffect(() => {
    if (!editingEntityId || editingEntityId === previousEditingId.current) {
      previousEditingId.current = editingEntityId;
      return;
    }

    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Give time for expansion animation to complete before scrolling
    scrollTimeoutRef.current = setTimeout(() => {
      const scrolled = scrollToEntity(editingEntityId);
      onFocusManaged?.(editingEntityId, scrolled);
    }, 300); // Wait 300ms for expansion animations

    previousEditingId.current = editingEntityId;
  }, [editingEntityId, scrollToEntity, onFocusManaged]);

  // Set up intersection observer for better visibility tracking
  useEffect(() => {
    if (!hierarchyContainerRef.current || typeof IntersectionObserver === 'undefined') {
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const entityId = entry.target.getAttribute('data-entity-id');
          
          if (entityId === editingEntityId && !entry.isIntersecting) {
            // Editing entity went out of view, scroll it back
            scrollTimeoutRef.current = setTimeout(() => {
              scrollToEntity(entityId);
            }, 100);
          }
        });
      },
      {
        root: hierarchyContainerRef.current,
        rootMargin: `-${scrollOffset}px 0px`,
        threshold: 0.1
      }
    );

    // Observe all hierarchy items
    const items = hierarchyContainerRef.current.querySelectorAll('[data-entity-id]');
    items.forEach(item => observerRef.current?.observe(item));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [editingEntityId, hierarchyContainerRef, scrollToEntity, scrollOffset]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      observerRef.current?.disconnect();
    };
  }, []);

  // This component doesn't render anything, it's purely behavioral
  return null;
}

/**
 * Hook version for components that prefer hooks over components
 */
export function useFocusManagement({
  editingEntityId,
  hierarchyContainerRef,
  expandedItems,
  autoScrollEnabled = true,
  scrollBehavior = 'smooth',
  scrollOffset = 80,
  onFocusManaged
}: FocusManagementProps) {
  const previousEditingId = useRef<string | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToEntity = useCallback((entityId: string) => {
    if (!hierarchyContainerRef.current || !autoScrollEnabled) {
      return false;
    }

    const entityElement = hierarchyContainerRef.current.querySelector(
      `[data-entity-id="${entityId}"]`
    );

    if (!entityElement) {
      return false;
    }

    entityElement.scrollIntoView({
      behavior: scrollBehavior,
      block: 'center',
      inline: 'nearest'
    });

    return true;
  }, [hierarchyContainerRef, autoScrollEnabled, scrollBehavior]);

  useEffect(() => {
    if (!editingEntityId || editingEntityId === previousEditingId.current) {
      previousEditingId.current = editingEntityId;
      return;
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      const scrolled = scrollToEntity(editingEntityId);
      onFocusManaged?.(editingEntityId, scrolled);
    }, 300);

    previousEditingId.current = editingEntityId;
  }, [editingEntityId, scrollToEntity, onFocusManaged]);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
}

export default FocusManagement;