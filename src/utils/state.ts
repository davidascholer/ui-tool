/**
 * Builder state management
 * Manages pages, containers, components, and selection
 */

import { useState, useCallback } from 'react';
import type { BuilderState, PageEntity, ContainerEntity, ComponentEntity, Selection, ComponentType, HierarchyViewItem, UpdateContext } from '@/utils/types';

// Helper function to recursively update containers
function updateContainerRecursive(
  container: ContainerEntity,
  targetId: string,
  updater: (item: ContainerEntity | ComponentEntity) => ContainerEntity | ComponentEntity
): ContainerEntity {
  if (container.id === targetId) {
    return updater(container) as ContainerEntity;
  }
  
  return {
    ...container,
    children: container.children.map((child) => {
      if ('children' in child && Array.isArray(child.children)) {
        // It's a ContainerEntity
        return updateContainerRecursive(child as ContainerEntity, targetId, updater);
      } else if (child.id === targetId) {
        // It's a ComponentEntity and matches
        return updater(child);
      }
      return child;
    }),
  };
}

// Helper function to recursively find and add to a container
function addToContainerRecursive(
  container: ContainerEntity,
  targetId: string,
  newChild: ContainerEntity | ComponentEntity
): ContainerEntity {
  if (container.id === targetId) {
    return {
      ...container,
      children: [...container.children, newChild],
    };
  }
  
  return {
    ...container,
    children: container.children.map((child) => {
      if ('children' in child && Array.isArray(child.children)) {
        return addToContainerRecursive(child as ContainerEntity, targetId, newChild);
      }
      return child;
    }),
  };
}

// Helper function to recursively delete from a container
function deleteFromContainerRecursive(
  container: ContainerEntity,
  targetId: string
): ContainerEntity {
  return {
    ...container,
    children: container.children
      .filter((child) => child.id !== targetId)
      .map((child) => {
        if ('children' in child && Array.isArray(child.children)) {
          return deleteFromContainerRecursive(child as ContainerEntity, targetId);
        }
        return child;
      }),
  };
}

// Helper function to recursively find an entity in a container
function findInContainerRecursive(
  container: ContainerEntity,
  targetId: string
): ContainerEntity | ComponentEntity | null {
  if (container.id === targetId) {
    return container;
  }
  
  for (const child of container.children) {
    if (child.id === targetId) {
      return child;
    }
    if ('children' in child && Array.isArray(child.children)) {
      const found = findInContainerRecursive(child as ContainerEntity, targetId);
      if (found) return found;
    }
  }
  
  return null;
}

export function useBuilderState() {
  const [state, setState] = useState<BuilderState>({
    pages: [],
    selection: null,
    codeMode: 'react',
  });

  // Feature 004: Real-Time Hierarchy Updates
  const [hierarchyItems, setHierarchyItems] = useState<Map<string, HierarchyViewItem>>(new Map());
  const [updateContext, setUpdateContext] = useState<UpdateContext>({
    pendingChanges: new Map(),
    lastUpdate: 0,
    batchCount: 0,
    isProcessing: false,
    loadingStates: new Map(),
  });

  const addPage = useCallback((name: string) => {
    const newPage: PageEntity = {
      id: `page-${Date.now()}`,
      name,
      uitType: 'UITPage',
      children: [],
    };
    setState((prev) => ({
      ...prev,
      pages: [...prev.pages, newPage],
    }));
  }, []);

  const addContainer = useCallback((parentId: string, name: string) => {
    const newContainer: ContainerEntity = {
      id: `container-${Date.now()}`,
      name,
      tailwindClassList: [],
      uitType: 'UITContainer',
      children: [],
    };
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => {
        // Check if parent is the page itself
        if (page.id === parentId) {
          return { ...page, children: [...page.children, newContainer] };
        }
        // Otherwise, recursively add to nested container
        return {
          ...page,
          children: page.children.map((container) =>
            addToContainerRecursive(container, parentId, newContainer)
          ),
        };
      }),
    }));
  }, []);

  const addComponent = useCallback((containerId: string, type: ComponentType) => {
    const newComponent: ComponentEntity = {
      id: `component-${Date.now()}`,
      type,
      props: {},
      tailwindClassList: [],
      uitType: `UIT${type}`,
    };
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => ({
        ...page,
        children: page.children.map((container) =>
          addToContainerRecursive(container, containerId, newComponent)
        ),
      })),
    }));
  }, []);

  const setSelection = useCallback((selection: Selection | null) => {
    setState((prev) => ({ ...prev, selection }));
  }, []);

  const setCodeMode = useCallback((mode: 'react' | 'react-native') => {
    setState((prev) => ({ ...prev, codeMode: mode }));
  }, []);

  const updatePage = useCallback((pageId: string, updates: Partial<PageEntity>) => {
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) =>
        page.id === pageId
          ? { ...page, ...updates }
          : page
      ),
    }));
  }, []);

  const updateContainer = useCallback((containerId: string, updates: Partial<ContainerEntity>) => {
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => ({
        ...page,
        children: page.children.map((container) =>
          updateContainerRecursive(container, containerId, (item) => ({ ...item, ...updates }))
        ),
      })),
    }));
  }, []);

  const updateComponent = useCallback((componentId: string, updates: Partial<ComponentEntity>) => {
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => ({
        ...page,
        children: page.children.map((container) =>
          updateContainerRecursive(container, componentId, (item) => ({ ...item, ...updates }))
        ),
      })),
    }));
  }, []);

  const deleteEntity = useCallback((entityId: string, entityType: 'Page' | 'Container' | 'Component') => {
    setState((prev) => {
      if (entityType === 'Page') {
        return {
          ...prev,
          pages: prev.pages.filter((page) => page.id !== entityId),
          selection: prev.selection?.entityId === entityId ? null : prev.selection,
        };
      } else {
        // For Container and Component, recursively delete from nested structures
        return {
          ...prev,
          pages: prev.pages.map((page) => ({
            ...page,
            children: page.children
              .filter((container) => container.id !== entityId)
              .map((container) => deleteFromContainerRecursive(container, entityId)),
          })),
          selection: prev.selection?.entityId === entityId ? null : prev.selection,
        };
      }
    });
  }, []);

  const getSelectedEntity = useCallback((): PageEntity | ContainerEntity | ComponentEntity | null => {
    if (!state.selection) return null;

    const { entityType, entityId } = state.selection;

    if (entityType === 'Page') {
      return state.pages.find((p) => p.id === entityId) || null;
    } else {
      // For Container and Component, recursively search in nested structures
      for (const page of state.pages) {
        for (const container of page.children) {
          const found = findInContainerRecursive(container, entityId);
          if (found) return found;
        }
      }
    }

    return null;
  }, [state.pages, state.selection]);

  // Feature 004: Hierarchy management methods
  const updateHierarchyItems = useCallback((items: Map<string, HierarchyViewItem>) => {
    setHierarchyItems(new Map(items));
  }, []);

  const updateHierarchyItem = useCallback((id: string, updates: Partial<HierarchyViewItem>) => {
    setHierarchyItems((prev) => {
      const newMap = new Map(prev);
      const existing = newMap.get(id);
      if (existing) {
        newMap.set(id, { ...existing, ...updates });
      }
      return newMap;
    });
  }, []);

  const setUpdateContextProcessing = useCallback((isProcessing: boolean) => {
    setUpdateContext((prev) => ({ ...prev, isProcessing }));
  }, []);

  const incrementBatchCount = useCallback(() => {
    setUpdateContext((prev) => ({ 
      ...prev, 
      batchCount: prev.batchCount + 1,
      lastUpdate: Date.now(),
    }));
  }, []);

  return {
    state,
    // Feature 004: Hierarchy state
    hierarchyItems,
    updateContext,
    actions: {
      addPage,
      addContainer,
      addComponent,
      setSelection,
      setCodeMode,
      updatePage,
      updateContainer,
      updateComponent,
      deleteEntity,
      getSelectedEntity,
      // Feature 004: Hierarchy actions
      updateHierarchyItems,
      updateHierarchyItem,
      setUpdateContextProcessing,
      incrementBatchCount,
    },
  };
}
