/**
 * Builder state management
 * Manages pages, containers, components, and selection
 */

import { useState, useCallback } from 'react';
import type { BuilderState, PageEntity, ContainerEntity, ComponentEntity, Selection, ComponentType } from '@/utils/types';

export function useBuilderState() {
  const [state, setState] = useState<BuilderState>({
    pages: [],
    selection: null,
    codeMode: 'react',
    // Feature 003: Component Tracking
    globalCodeMetadata: {},
    codeFormat: 'react',
  });

  const addPage = useCallback((name: string) => {
    const newPage: PageEntity = {
      id: `page-${Date.now()}`,
      name,
      children: [],
      codeMetadata: {
        'react-code': '<div></div>',
        'styles': '',
        'element': 'div',
      },
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
      codeMetadata: {
        'react-code': '<div></div>',
        'styles': '',
        'element': 'div',
      },
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
    // Map component type to HTML element
    const elementMap: Record<ComponentType, string> = {
      Button: 'button',
      Input: 'input',
      Card: 'div',
      Text: 'p',
      Image: 'img',
      List: 'ul',
    };

    const newComponent: ComponentEntity = {
      id: `component-${Date.now()}`,
      type,
      props: {},
      tailwindOptions: { classList: [] },
      codeMetadata: {
        'react-code': `<${elementMap[type]}></${elementMap[type]}>`,
        'styles': '',
        'element': elementMap[type],
      },
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
          ? { ...page, ...updates, codeMetadata: page.codeMetadata }
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
            ? { ...container, ...updates, codeMetadata: container.codeMetadata }
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
              ? { ...component, ...updates, codeMetadata: component.codeMetadata }
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

  return {
    state,
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
    },
  };
}
