/**
 * Builder state management
 * Manages pages, containers, components, and selection
 */

import { useState, useCallback } from 'react';
import type { BuilderState, PageEntity, ContainerEntity, ComponentEntity, Selection, ComponentType, HierarchyViewItem, UpdateContext } from '@/utils/types';

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
      children: [],
    };
    setState((prev) => ({
      ...prev,
      pages: [...prev.pages, newPage],
    }));
  }, []);

  const addContainer = useCallback((pageId: string, name: string) => {
    const newContainer: ContainerEntity = {
      id: `container-${Date.now()}`,
      name,
      tailwindOptions: { classList: [] },
      children: [],
    };
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) =>
        page.id === pageId
          ? { ...page, children: [...page.children, newContainer] }
          : page
      ),
    }));
  }, []);

  const addComponent = useCallback((containerId: string, type: ComponentType) => {
    const newComponent: ComponentEntity = {
      id: `component-${Date.now()}`,
      type,
      props: {},
      tailwindOptions: { classList: [] },
    };
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => ({
        ...page,
        children: page.children.map((container) =>
          container.id === containerId
            ? { ...container, children: [...container.children, newComponent] }
            : container
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
          container.id === containerId
            ? { ...container, ...updates }
            : container
        ),
      })),
    }));
  }, []);

  const updateComponent = useCallback((componentId: string, updates: Partial<ComponentEntity>) => {
    setState((prev) => ({
      ...prev,
      pages: prev.pages.map((page) => ({
        ...page,
        children: page.children.map((container) => ({
          ...container,
          children: container.children.map((component) =>
            component.id === componentId
              ? { ...component, ...updates }
              : component
          ),
        })),
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
      } else if (entityType === 'Container') {
        return {
          ...prev,
          pages: prev.pages.map((page) => ({
            ...page,
            children: page.children.filter((container) => container.id !== entityId),
          })),
          selection: prev.selection?.entityId === entityId ? null : prev.selection,
        };
      } else {
        return {
          ...prev,
          pages: prev.pages.map((page) => ({
            ...page,
            children: page.children.map((container) => ({
              ...container,
              children: container.children.filter((component) => component.id !== entityId),
            })),
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
    } else if (entityType === 'Container') {
      for (const page of state.pages) {
        const container = page.children.find((c) => c.id === entityId);
        if (container) return container;
      }
    } else {
      for (const page of state.pages) {
        for (const container of page.children) {
          const component = container.children.find((c) => c.id === entityId);
          if (component) return component;
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
