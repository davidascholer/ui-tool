import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useBuilderState } from '../../src/utils/state';

describe('Bug Fix: Container and Component Save Functionality', () => {
  it('should update container codeMetadata correctly', () => {
    const { result } = renderHook(() => useBuilderState());

    // Add page and container
    act(() => {
      result.current.actions.addPage('Test Page');
    });
    const pageId = result.current.state.pages[0].id;

    act(() => {
      result.current.actions.addContainer(pageId, 'Test Container');
    });
    const containerId = result.current.state.pages[0].children[0].id;

    // Update container with codeMetadata changes
    act(() => {
      result.current.actions.updateContainer(containerId, {
        name: 'Updated Container',
        codeMetadata: {
          'react-code': '<div className="updated">New code</div>',
          'styles': 'color: red;',
          'element': 'section'
        }
      });
    });

    const updatedContainer = result.current.state.pages[0].children[0];
    
    // The bug was that codeMetadata updates were being ignored
    // This test verifies the fix works
    expect(updatedContainer.name).toBe('Updated Container');
    expect(updatedContainer.codeMetadata['react-code']).toBe('<div className="updated">New code</div>');
    expect(updatedContainer.codeMetadata['styles']).toBe('color: red;');
    expect(updatedContainer.codeMetadata['element']).toBe('section');
  });

  it('should update component codeMetadata correctly', () => {
    const { result } = renderHook(() => useBuilderState());

    // Set up page, container, and component
    act(() => {
      result.current.actions.addPage('Test Page');
    });
    const pageId = result.current.state.pages[0].id;

    act(() => {
      result.current.actions.addContainer(pageId, 'Test Container');
    });
    const containerId = result.current.state.pages[0].children[0].id;

    act(() => {
      result.current.actions.addComponent(containerId, 'Button');
    });
    const componentId = result.current.state.pages[0].children[0].children[0].id;

    // Update component with codeMetadata changes
    act(() => {
      result.current.actions.updateComponent(componentId, {
        codeMetadata: {
          'react-code': '<button className="btn">Click me!</button>',
          'styles': 'background: blue;',
          'element': 'button'
        }
      });
    });

    const updatedComponent = result.current.state.pages[0].children[0].children[0];
    
    // The bug was that codeMetadata updates were being ignored
    // This test verifies the fix works
    expect(updatedComponent.codeMetadata['react-code']).toBe('<button className="btn">Click me!</button>');
    expect(updatedComponent.codeMetadata['styles']).toBe('background: blue;');
    expect(updatedComponent.codeMetadata['element']).toBe('button');
  });
});