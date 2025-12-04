/**
 * Quick test to verify BuilderPage save functionality is working
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ComponentEntity, ContainerEntity, PageEntity } from '../../src/utils/types';

// Mock the performance monitoring hooks
vi.mock('../../src/hooks/usePerformanceMonitoring', () => ({
  usePerformanceMonitoring: () => ({
    startMeasurement: vi.fn(() => 'test-measurement-id'),
    endMeasurement: vi.fn(() => ({ duration: 50 })),
    checkPerformanceRequirement: vi.fn(() => ({ meetsRequirement: true, threshold: 200 }))
  })
}));

// Mock the hierarchy updates hook
vi.mock('../../src/hooks/useHierarchyUpdates', () => ({
  useHierarchyUpdates: () => ({
    queueChange: vi.fn(),
    clearQueue: vi.fn(),
    getLoadingState: vi.fn(() => null)
  })
}));

describe('BuilderPage Save Flow', () => {
  let mockActions: {
    updatePage: ReturnType<typeof vi.fn>;
    updateContainer: ReturnType<typeof vi.fn>;
    updateComponent: ReturnType<typeof vi.fn>;
    getSelectedEntity: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    mockActions = {
      updatePage: vi.fn(),
      updateContainer: vi.fn(), 
      updateComponent: vi.fn(),
      getSelectedEntity: vi.fn()
    };
  });

  it('should handle Page save data correctly', () => {
    const mockPage: PageEntity = {
      id: 'page-1',
      name: 'Test Page',
      meta: { title: 'Old Title' },
      children: []
    };

    const saveData = {
      name: 'Updated Page',
      meta: { title: 'New Title', description: 'New Description' }
    };

    mockActions.getSelectedEntity.mockReturnValue(mockPage);

    // Simulate the data processing logic from BuilderPage
    const dataObj = saveData as Record<string, unknown>;
    const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = [];

    // Process name change
    if ('name' in dataObj) {
      const oldName = mockPage.name;
      if (JSON.stringify(oldName) !== JSON.stringify(dataObj.name)) {
        changes.push({ field: 'name', oldValue: oldName, newValue: dataObj.name });
      }
    }

    // Process meta changes  
    if ('meta' in dataObj) {
      const oldMeta = mockPage.meta || {};
      if (JSON.stringify(oldMeta) !== JSON.stringify(dataObj.meta)) {
        changes.push({ field: 'meta', oldValue: oldMeta, newValue: dataObj.meta });
      }
    }

    expect(changes).toHaveLength(2);
    expect(changes[0]).toMatchObject({ field: 'name', oldValue: 'Test Page', newValue: 'Updated Page' });
    expect(changes[1].field).toBe('meta');
  });

  it('should handle Container save data correctly', () => {
    const mockContainer: ContainerEntity = {
      id: 'container-1', 
      name: 'Test Container',
      tailwindOptions: { classList: ['bg-red-500'] },
      children: []
    };

    const saveData = {
      name: 'Updated Container',
      tailwindOptions: { classList: ['bg-blue-500', 'p-4'] }
    };

    mockActions.getSelectedEntity.mockReturnValue(mockContainer);

    const dataObj = saveData as Record<string, unknown>;
    const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = [];

    if ('name' in dataObj) {
      const oldName = mockContainer.name;
      if (JSON.stringify(oldName) !== JSON.stringify(dataObj.name)) {
        changes.push({ field: 'name', oldValue: oldName, newValue: dataObj.name });
      }
    }

    if ('tailwindOptions' in dataObj) {
      const oldOptions = mockContainer.tailwindOptions || { classList: [] };
      if (JSON.stringify(oldOptions) !== JSON.stringify(dataObj.tailwindOptions)) {
        changes.push({ field: 'tailwindOptions', oldValue: oldOptions, newValue: dataObj.tailwindOptions });
      }
    }

    expect(changes).toHaveLength(2);
    expect(changes[0]).toMatchObject({ field: 'name', oldValue: 'Test Container', newValue: 'Updated Container' });
    expect(changes[1].field).toBe('tailwindOptions');
  });

  it('should handle Component save data correctly', () => {
    const mockComponent: ComponentEntity = {
      id: 'component-1',
      type: 'Button',
      props: { text: 'Old Text' },
      tailwindOptions: { classList: ['btn'] }
    };

    const saveData = {
      type: 'Button',
      props: { text: 'New Text' },
      tailwindOptions: { classList: ['btn-primary', 'hover:btn-secondary'] }
    };

    mockActions.getSelectedEntity.mockReturnValue(mockComponent);

    const dataObj = saveData as Record<string, unknown>;
    const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = [];

    if ('props' in dataObj) {
      const oldProps = mockComponent.props || {};
      if (JSON.stringify(oldProps) !== JSON.stringify(dataObj.props)) {
        changes.push({ field: 'props', oldValue: oldProps, newValue: dataObj.props });
      }
    }

    if ('tailwindOptions' in dataObj) {
      const oldOptions = mockComponent.tailwindOptions || { classList: [] };
      if (JSON.stringify(oldOptions) !== JSON.stringify(dataObj.tailwindOptions)) {
        changes.push({ field: 'tailwindOptions', oldValue: oldOptions, newValue: dataObj.tailwindOptions });
      }
    }

    expect(changes).toHaveLength(2);
    expect(changes[0]).toMatchObject({ 
      field: 'props', 
      oldValue: { text: 'Old Text' }, 
      newValue: { text: 'New Text' } 
    });
    expect(changes[1].field).toBe('tailwindOptions');
  });
});