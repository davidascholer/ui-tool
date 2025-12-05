/**
 * Unit tests for state-metadata tracking
 * Feature 003: Component Tracking and Code Export
 * Tests for metadata initialization and persistence in state management
 */

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBuilderState } from '@/utils/state';

describe('State Metadata Tracking', () => {
  describe('Initial State', () => {
    it('initializes with empty globalCodeMetadata', () => {
      const { result } = renderHook(() => useBuilderState());

      expect(result.current.state.globalCodeMetadata).toBeDefined();
      expect(result.current.state.globalCodeMetadata).toEqual({});
    });

    it('initializes with default codeFormat', () => {
      const { result } = renderHook(() => useBuilderState());

      expect(result.current.state.codeFormat).toBe('react');
    });
  });

  describe('Page Metadata Initialization', () => {
    it('creates page with codeMetadata on addPage', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const page = result.current.state.pages[0];
      expect(page.codeMetadata).toBeDefined();
      expect(page.codeMetadata).toHaveProperty('react-code');
      expect(page.codeMetadata).toHaveProperty('styles');
      expect(page.codeMetadata).toHaveProperty('element');
    });

    it('initializes page with div element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const page = result.current.state.pages[0];
      expect(page.codeMetadata?.element).toBe('div');
      expect(page.codeMetadata?.['react-code']).toBe('<div></div>');
    });

    it('initializes page with empty styles', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const page = result.current.state.pages[0];
      expect(page.codeMetadata?.styles).toBe('');
    });
  });

  describe('Container Metadata Initialization', () => {
    it('creates container with codeMetadata on addContainer', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero Section');
      });

      const container = result.current.state.pages[0].children[0];
      expect(container.codeMetadata).toBeDefined();
      expect(container.codeMetadata).toHaveProperty('react-code');
      expect(container.codeMetadata).toHaveProperty('styles');
      expect(container.codeMetadata).toHaveProperty('element');
    });

    it('initializes container with div element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero Section');
      });

      const container = result.current.state.pages[0].children[0];
      expect(container.codeMetadata?.element).toBe('div');
      expect(container.codeMetadata?.['react-code']).toBe('<div></div>');
    });
  });

  describe('Component Metadata Initialization', () => {
    it('creates component with codeMetadata on addComponent', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero Section');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Button');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata).toBeDefined();
      expect(component.codeMetadata).toHaveProperty('react-code');
      expect(component.codeMetadata).toHaveProperty('styles');
      expect(component.codeMetadata).toHaveProperty('element');
    });

    it('initializes Button with button element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Button');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('button');
      expect(component.codeMetadata?.['react-code']).toBe('<button></button>');
    });

    it('initializes Input with input element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Form');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Input');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('input');
      expect(component.codeMetadata?.['react-code']).toBe('<input></input>');
    });

    it('initializes Card with div element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Content');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Card');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('div');
    });

    it('initializes Text with p element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Content');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Text');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('p');
    });

    it('initializes Image with img element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Gallery');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Image');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('img');
    });

    it('initializes List with ul element', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Nav');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'List');
      });

      const component = result.current.state.pages[0].children[0].children[0];
      expect(component.codeMetadata?.element).toBe('ul');
    });
  });

  describe('Metadata Persistence on Updates', () => {
    it('preserves page codeMetadata on updatePage', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;
      const originalMetadata = result.current.state.pages[0].codeMetadata;

      act(() => {
        result.current.actions.updatePage(pageId, { name: 'New Home' });
      });

      const updatedPage = result.current.state.pages[0];
      expect(updatedPage.name).toBe('New Home');
      expect(updatedPage.codeMetadata).toEqual(originalMetadata);
    });

    it('preserves container codeMetadata on updateContainer', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero');
      });

      const containerId = result.current.state.pages[0].children[0].id;
      const originalMetadata = result.current.state.pages[0].children[0].codeMetadata;

      act(() => {
        result.current.actions.updateContainer(containerId, { name: 'New Hero' });
      });

      const updatedContainer = result.current.state.pages[0].children[0];
      expect(updatedContainer.name).toBe('New Hero');
      expect(updatedContainer.codeMetadata).toEqual(originalMetadata);
    });

    it('preserves component codeMetadata on updateComponent', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero');
      });

      const containerId = result.current.state.pages[0].children[0].id;

      act(() => {
        result.current.actions.addComponent(containerId, 'Button');
      });

      const componentId = result.current.state.pages[0].children[0].children[0].id;
      const originalMetadata = result.current.state.pages[0].children[0].children[0].codeMetadata;

      act(() => {
        result.current.actions.updateComponent(componentId, { props: { text: 'Click Me' } });
      });

      const updatedComponent = result.current.state.pages[0].children[0].children[0];
      expect(updatedComponent.props.text).toBe('Click Me');
      expect(updatedComponent.codeMetadata).toEqual(originalMetadata);
    });

    it('preserves metadata when updating tailwindOptions', () => {
      const { result } = renderHook(() => useBuilderState());

      act(() => {
        result.current.actions.addPage('Home');
      });

      const pageId = result.current.state.pages[0].id;

      act(() => {
        result.current.actions.addContainer(pageId, 'Hero');
      });

      const containerId = result.current.state.pages[0].children[0].id;
      const originalMetadata = result.current.state.pages[0].children[0].codeMetadata;

      act(() => {
        result.current.actions.updateContainer(containerId, {
          tailwindClassList: ['px-4', 'py-2'],
        });
      });

      const updatedContainer = result.current.state.pages[0].children[0];
      expect(updatedContainer.tailwindClassList).toEqual(['px-4', 'py-2']);
      expect(updatedContainer.codeMetadata).toEqual(originalMetadata);
    });
  });
});
