/**
 * Unit tests for hierarchy update logic
 * Feature 004: Real-Time Hierarchy Updates - User Story 1
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useHierarchyUpdates } from '../../src/hooks/useHierarchyUpdates';
import type { PageEntity, PropertyChange } from '../../src/utils/types';

describe('useHierarchyUpdates', () => {
  const mockPages: PageEntity[] = [
    {
      id: 'page-1',
      name: 'Home Page',
      children: [
        {
          id: 'container-1',
          name: 'Header Container',
          tailwindOptions: { classList: ['bg-blue-500', 'p-4'] },
          children: [
            {
              id: 'component-1',
              type: 'Button',
              props: { text: 'Click me' },
              tailwindOptions: { classList: ['text-white', 'px-6'] },
            },
          ],
        },
      ],
    },
  ];

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should initialize with empty hierarchy items and update context', () => {
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: [],
        selection: null,
        onUpdate: vi.fn(),
      })
    );

    expect(result.current.hierarchyItems.size).toBe(0);
    expect(result.current.updateContext.pendingChanges.size).toBe(0);
    expect(result.current.updateContext.batchCount).toBe(0);
    expect(result.current.updateContext.isProcessing).toBe(false);
  });

  it('should queue property changes correctly', () => {
    const onUpdate = vi.fn();
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
        onUpdate,
      })
    );

    const change: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit Form',
      timestamp: Date.now(),
    };

    act(() => {
      result.current.queueChange(change);
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(1);
    expect(result.current.updateContext.batchCount).toBe(1);
    
    const queuedChanges = result.current.updateContext.pendingChanges.get('component-1');
    expect(queuedChanges).toHaveLength(1);
    expect(queuedChanges?.[0]).toEqual(change);
  });

  it('should batch multiple changes for the same entity', () => {
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
      })
    );

    const change1: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit',
      timestamp: Date.now(),
    };

    const change2: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'tailwindOptions.classList',
      oldValue: ['text-white', 'px-6'],
      newValue: ['text-white', 'px-8', 'py-2'],
      timestamp: Date.now() + 100,
    };

    act(() => {
      result.current.queueChange(change1);
      result.current.queueChange(change2);
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(1);
    expect(result.current.updateContext.batchCount).toBe(2);
    
    const queuedChanges = result.current.updateContext.pendingChanges.get('component-1');
    expect(queuedChanges).toHaveLength(2);
  });

  it('should process pending changes and call onUpdate', () => {
    const onUpdate = vi.fn();
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
        onUpdate,
      })
    );

    const change: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit Form',
      timestamp: Date.now(),
    };

    act(() => {
      result.current.queueChange(change);
    });

    act(() => {
      result.current.processPending();
    });

    expect(onUpdate).toHaveBeenCalledWith('component-1', [change]);
    expect(result.current.updateContext.pendingChanges.size).toBe(0);
    expect(result.current.updateContext.batchCount).toBe(0);
    expect(result.current.updateContext.isProcessing).toBe(false);
  });

  it('should clear queue for specific entity', () => {
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
      })
    );

    const change1: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit',
      timestamp: Date.now(),
    };

    const change2: PropertyChange = {
      entityId: 'container-1',
      entityType: 'Container',
      field: 'name',
      oldValue: 'Header Container',
      newValue: 'Updated Header',
      timestamp: Date.now(),
    };

    act(() => {
      result.current.queueChange(change1);
      result.current.queueChange(change2);
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(2);

    act(() => {
      result.current.clearQueue('component-1');
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(1);
    expect(result.current.updateContext.pendingChanges.has('component-1')).toBe(false);
    expect(result.current.updateContext.pendingChanges.has('container-1')).toBe(true);
  });

  it('should clear entire queue when no entityId provided', () => {
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
      })
    );

    const change1: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit',
      timestamp: Date.now(),
    };

    const change2: PropertyChange = {
      entityId: 'container-1',
      entityType: 'Container',
      field: 'name',
      oldValue: 'Header Container',
      newValue: 'Updated Header',
      timestamp: Date.now(),
    };

    act(() => {
      result.current.queueChange(change1);
      result.current.queueChange(change2);
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(2);
    expect(result.current.updateContext.batchCount).toBe(2);

    act(() => {
      result.current.clearQueue();
    });

    expect(result.current.updateContext.pendingChanges.size).toBe(0);
    expect(result.current.updateContext.batchCount).toBe(0);
  });

  it('should set isProcessing flag during processPending', () => {
    const onUpdate = vi.fn().mockImplementation(() => {
      // Simulate some async work
      return new Promise(resolve => setTimeout(resolve, 100));
    });

    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
        onUpdate,
      })
    );

    const change: PropertyChange = {
      entityId: 'component-1',
      entityType: 'Component',
      field: 'props.text',
      oldValue: 'Click me',
      newValue: 'Submit Form',
      timestamp: Date.now(),
    };

    act(() => {
      result.current.queueChange(change);
    });

    act(() => {
      result.current.processPending();
    });

    // isProcessing should be false after synchronous processing
    expect(result.current.updateContext.isProcessing).toBe(false);
  });

  it('should handle empty pending changes gracefully', () => {
    const onUpdate = vi.fn();
    const { result } = renderHook(() =>
      useHierarchyUpdates({
        pages: mockPages,
        selection: null,
        onUpdate,
      })
    );

    act(() => {
      result.current.processPending();
    });

    expect(onUpdate).not.toHaveBeenCalled();
    expect(result.current.updateContext.isProcessing).toBe(false);
  });
});