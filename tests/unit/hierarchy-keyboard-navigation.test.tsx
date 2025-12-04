/**
 * Hierarchy Keyboard Navigation Test Suite
 * Feature 004: Real-Time Hierarchy Updates - T049
 * Tests keyboard navigation functionality and accessibility
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import { useHierarchyItemKeyboard, useHierarchyContainerKeyboard } from '../../src/hooks/useHierarchyKeyboardManager';
import type { EntityType } from '../../src/utils/types';

describe('Hierarchy Keyboard Navigation', () => {
  describe('useHierarchyItemKeyboard', () => {
    const mockCallbacks = {
      onSelect: vi.fn(),
      onDelete: vi.fn(),
      onExpand: vi.fn()
    };

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('handles Enter key for selection', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Component', 'test-id', mockCallbacks)
      );

      const event = {
        key: 'Enter',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(event.preventDefault).toHaveBeenCalled();
      expect(event.stopPropagation).toHaveBeenCalled();
      expect(mockCallbacks.onSelect).toHaveBeenCalledWith('Component', 'test-id');
    });

    it('handles Space key for selection', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Page', 'page-1', mockCallbacks)
      );

      const event = {
        key: ' ',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(mockCallbacks.onSelect).toHaveBeenCalledWith('Page', 'page-1');
    });

    it('handles Delete key when onDelete is provided', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Container', 'container-2', mockCallbacks)
      );

      const event = {
        key: 'Delete',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(mockCallbacks.onDelete).toHaveBeenCalledWith('Container', 'container-2');
    });

    it('handles Backspace key when onDelete is provided', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Component', 'button-3', mockCallbacks)
      );

      const event = {
        key: 'Backspace',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(mockCallbacks.onDelete).toHaveBeenCalledWith('Component', 'button-3');
    });

    it('ignores Delete key when onDelete is not provided', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Component', 'test-id', { onSelect: mockCallbacks.onSelect })
      );

      const event = {
        key: 'Delete',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(false);
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(mockCallbacks.onDelete).not.toHaveBeenCalled();
    });

    it('handles + key for expansion', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Container', 'expandable-container', mockCallbacks)
      );

      const event = {
        key: '+',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(mockCallbacks.onExpand).toHaveBeenCalledWith('expandable-container', true);
    });

    it('handles - key for collapse', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Page', 'collapsible-page', mockCallbacks)
      );

      const event = {
        key: '-',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(true);
      expect(mockCallbacks.onExpand).toHaveBeenCalledWith('collapsible-page', false);
    });

    it('returns correct ARIA attributes', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Component', 'aria-test', mockCallbacks)
      );

      const attributes = result.current.getAriaAttributes(true, false, false);

      expect(attributes).toEqual({
        role: 'button',
        tabIndex: 0,
        'aria-selected': true,
        'aria-expanded': undefined,
        'data-hierarchy-item': 'aria-test',
        'data-hierarchy-type': 'Component'
      });
    });

    it('sets aria-expanded for items with children', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Container', 'parent-container', mockCallbacks)
      );

      const expandedAttributes = result.current.getAriaAttributes(false, true, true);
      const collapsedAttributes = result.current.getAriaAttributes(false, true, false);

      expect(expandedAttributes['aria-expanded']).toBe(true);
      expect(collapsedAttributes['aria-expanded']).toBe(false);
    });

    it('ignores unhandled keys', () => {
      const { result } = renderHook(() => 
        useHierarchyItemKeyboard('Component', 'test-id', mockCallbacks)
      );

      const event = {
        key: 'ArrowUp',
        preventDefault: vi.fn(),
        stopPropagation: vi.fn()
      } as unknown as React.KeyboardEvent;

      const handled = result.current.handleKeyDown(event);

      expect(handled).toBe(false);
      expect(event.preventDefault).not.toHaveBeenCalled();
      expect(mockCallbacks.onSelect).not.toHaveBeenCalled();
    });
  });

  describe('useHierarchyContainerKeyboard', () => {
    beforeEach(() => {
      vi.clearAllMocks();
      // Mock DOM methods
      Element.prototype.scrollIntoView = vi.fn();
    });

    it('provides container keyboard navigation', () => {
      const { result } = renderHook(() => useHierarchyContainerKeyboard());

      expect(result.current.handleContainerKeyDown).toBeDefined();
      expect(result.current.focusItem).toBeDefined();
      expect(result.current.getFocusedItem).toBeDefined();
    });

    it('focuses items correctly', () => {
      // Create mock DOM structure
      document.body.innerHTML = `
        <div data-hierarchy-item="test-item-1" tabindex="0">Item 1</div>
      `;

      const { result } = renderHook(() => useHierarchyContainerKeyboard());
      
      act(() => {
        result.current.focusItem('test-item-1');
      });

      const focusedId = result.current.getFocusedItem();
      expect(focusedId).toBe('test-item-1');
    });

    it('handles non-existent items gracefully', () => {
      const { result } = renderHook(() => useHierarchyContainerKeyboard());
      
      // Should not throw when focusing non-existent item
      expect(() => {
        act(() => {
          result.current.focusItem('non-existent-item');
        });
      }).not.toThrow();
    });
  });
});

describe('Keyboard Navigation Integration', () => {
  const TestComponent = ({ 
    entityType, 
    entityId, 
    onSelect, 
    onDelete 
  }: {
    entityType: EntityType;
    entityId: string;
    onSelect: (type: EntityType, id: string) => void;
    onDelete?: (type: EntityType, id: string) => void;
  }) => {
    const { handleKeyDown, getAriaAttributes } = useHierarchyItemKeyboard(
      entityType,
      entityId,
      { onSelect, onDelete }
    );

    return (
      <div
        {...getAriaAttributes(false, false, false)}
        onKeyDown={handleKeyDown}
        data-testid="keyboard-nav-component"
      >
        Test Item
      </div>
    );
  };

  it('integrates keyboard navigation in components', () => {
    const onSelect = vi.fn();
    const onDelete = vi.fn();

    render(
      <TestComponent
        entityType="Component"
        entityId="integration-test"
        onSelect={onSelect}
        onDelete={onDelete}
      />
    );

    const component = screen.getByTestId('keyboard-nav-component');

    // Test Enter key
    fireEvent.keyDown(component, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledWith('Component', 'integration-test');

    // Test Delete key
    fireEvent.keyDown(component, { key: 'Delete' });
    expect(onDelete).toHaveBeenCalledWith('Component', 'integration-test');
  });

  it('applies correct ARIA attributes', () => {
    const onSelect = vi.fn();

    render(
      <TestComponent
        entityType="Page"
        entityId="aria-integration-test"
        onSelect={onSelect}
      />
    );

    const component = screen.getByTestId('keyboard-nav-component');

    expect(component).toHaveAttribute('role', 'button');
    expect(component).toHaveAttribute('tabIndex', '0');
    expect(component).toHaveAttribute('data-hierarchy-item', 'aria-integration-test');
    expect(component).toHaveAttribute('data-hierarchy-type', 'Page');
  });
});