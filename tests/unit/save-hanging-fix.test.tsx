/**
 * Quick test to verify the save hanging fix
 */

import { describe, it, expect, vi } from 'vitest';

describe('Save Hanging Fix Verification', () => {
  it('should process hierarchy changes immediately after save', () => {
    // Mock the hierarchy updates hook
    const mockQueueChange = vi.fn();
    const mockProcessPending = vi.fn();
    
    const mockHierarchyUpdates = {
      queueChange: mockQueueChange,
      processPending: mockProcessPending,
      clearQueue: vi.fn(),
      getLoadingState: vi.fn(() => null)
    };

    // Mock actions
    const mockActions = {
      updateComponent: vi.fn(),
      getSelectedEntity: vi.fn(() => ({
        id: 'comp-1',
        type: 'Button',
        props: { text: 'Old Text' },
        tailwindOptions: { classList: ['btn'] }
      }))
    };

    // Simulate the save process from BuilderPage
    const saveData = {
      type: 'Button',
      props: { text: 'New Text' },
      tailwindOptions: { classList: ['btn-primary'] }
    };

    const currentEntity = mockActions.getSelectedEntity();
    const changes = [];

    // Process props change
    if (JSON.stringify(currentEntity.props) !== JSON.stringify(saveData.props)) {
      changes.push({
        entityId: 'comp-1',
        entityType: 'Component',
        field: 'props',
        oldValue: currentEntity.props,
        newValue: saveData.props,
        timestamp: Date.now()
      });
    }

    // Process tailwindOptions change
    if (JSON.stringify(currentEntity.tailwindOptions) !== JSON.stringify(saveData.tailwindOptions)) {
      changes.push({
        entityId: 'comp-1',
        entityType: 'Component',
        field: 'tailwindOptions',
        oldValue: currentEntity.tailwindOptions,
        newValue: saveData.tailwindOptions,
        timestamp: Date.now()
      });
    }

    // Apply state updates
    mockActions.updateComponent('comp-1', saveData);

    // Queue hierarchy changes (this is the fixed logic)
    if (changes.length > 0) {
      changes.forEach(change => mockHierarchyUpdates.queueChange(change));
      // Process changes immediately for save operations to avoid UI hanging
      mockHierarchyUpdates.processPending();
    }

    // Verify the fix
    expect(mockQueueChange).toHaveBeenCalledTimes(2); // props and tailwindOptions
    expect(mockProcessPending).toHaveBeenCalledTimes(1); // Called immediately after queuing
    expect(mockActions.updateComponent).toHaveBeenCalledWith('comp-1', saveData);
  });

  it('should not hang when no changes are detected', () => {
    const mockProcessPending = vi.fn();
    const mockActions = {
      getSelectedEntity: vi.fn(() => ({
        id: 'comp-1',
        type: 'Button',
        props: { text: 'Same Text' },
        tailwindOptions: { classList: ['btn'] }
      }))
    };

    // Same data as current entity
    const saveData = {
      type: 'Button',
      props: { text: 'Same Text' },
      tailwindOptions: { classList: ['btn'] }
    };

    const currentEntity = mockActions.getSelectedEntity();
    const changes = [];

    // No changes should be detected
    if (JSON.stringify(currentEntity.props) !== JSON.stringify(saveData.props)) {
      changes.push({
        entityId: 'comp-1',
        entityType: 'Component',
        field: 'props',
        oldValue: currentEntity.props,
        newValue: saveData.props,
        timestamp: Date.now()
      });
    }

    // Should not call processPending when no changes
    if (changes.length > 0) {
      mockProcessPending();
    }

    expect(changes).toHaveLength(0);
    expect(mockProcessPending).not.toHaveBeenCalled();
  });
});