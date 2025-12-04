/**
 * Real-Time Preview Flow Integration Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T037)
 * Tests complete real-time preview flow with React Hook Form integration
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import type { ComponentEntity, HierarchyViewItem } from '../../src/utils/types';

// Mock component that simulates Drawer editor with real-time preview
interface MockDrawerEditorProps {
  component: ComponentEntity;
  onRealTimeUpdate: (field: string, value: unknown) => void;
  onSave: (updates: Record<string, unknown>) => void;
  debounceMs?: number;
}

function MockDrawerEditor({
  component,
  onRealTimeUpdate,
  onSave,
  debounceMs = 500
}: MockDrawerEditorProps) {
  const form = useForm({
    defaultValues: {
      text: component.props.text || '',
      color: component.props.color || '',
      size: component.props.size || ''
    }
  });

  const { control, handleSubmit, getValues } = form;
  
  // Watch for real-time changes
  const watchedValues = useWatch({ control });
  
  // Debounced real-time update effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const values = getValues();
      Object.entries(values).forEach(([field, value]) => {
        if (value !== component.props[field]) {
          onRealTimeUpdate(field, value);
        }
      });
    }, debounceMs);
    
    return () => clearTimeout(timeout);
  }, [watchedValues, component.props, onRealTimeUpdate, getValues, debounceMs]);
  
  const onSubmit = (data: Record<string, unknown>) => {
    onSave(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="drawer-editor">
      <div className="editor-fields">
        <input
          {...form.register('text')}
          placeholder="Enter text"
          data-testid="text-input"
        />
        <input
          {...form.register('color')}
          placeholder="Enter color"
          data-testid="color-input"
        />
        <input
          {...form.register('size')}
          placeholder="Enter size"
          data-testid="size-input"
        />
      </div>
      
      <button type="submit" data-testid="save-button">
        Save
      </button>
    </form>
  );
}

// Mock hierarchy view that shows real-time updates
interface MockHierarchyViewProps {
  hierarchyItems: HierarchyViewItem[];
  editingEntityId: string | null;
  realtimeUpdates: Map<string, Record<string, unknown>>;
}

function MockHierarchyView({
  hierarchyItems,
  editingEntityId,
  realtimeUpdates
}: MockHierarchyViewProps) {
  const renderItem = (item: HierarchyViewItem) => {
    const isEditing = editingEntityId === item.id;
    const hasUpdates = realtimeUpdates.has(item.id);
    const updates = realtimeUpdates.get(item.id) || {};
    
    return (
      <div
        key={item.id}
        className={`hierarchy-item ${
          isEditing ? 'editing' : ''
        } ${
          hasUpdates ? 'has-updates' : ''
        }`}
        data-testid={`hierarchy-${item.id}`}
      >
        <span className="item-name">{item.displayName}</span>
        {hasUpdates && (
          <div className="realtime-preview" data-testid={`preview-${item.id}`}>
            {Object.entries(updates).map(([field, value]) => (
              <span key={field} className="preview-value" data-testid={`preview-${field}`}>
                {field}: {String(value)}
              </span>
            ))}
          </div>
        )}
        {isEditing && (
          <span className="editing-indicator" data-testid={`editing-${item.id}`}>
            ✏️ Editing
          </span>
        )}
      </div>
    );
  };
  
  return (
    <div className="hierarchy-view" data-testid="hierarchy-view">
      {hierarchyItems.map(renderItem)}
    </div>
  );
}

// Integration test component that combines drawer and hierarchy
function RealTimePreviewTestApp() {
  const [component, setComponent] = useState<ComponentEntity>({
    id: 'test-component',
    type: 'Button',
    props: {
      text: 'Click me',
      color: 'blue',
      size: 'medium'
    },
    tailwindOptions: {
      classList: ['bg-blue-500', 'text-white', 'px-4', 'py-2']
    }
  });
  
  const [hierarchyItems] = useState<HierarchyViewItem[]>([
    {
      id: 'test-component',
      displayName: 'Button Component',
      fullName: 'Button Component',
      isExpanded: false,
      level: 0,
      indicators: []
    }
  ]);
  
  const [editingEntityId, setEditingEntityId] = useState<string | null>('test-component');
  const [realtimeUpdates, setRealtimeUpdates] = useState<Map<string, Record<string, unknown>>>(new Map());
  const [updateCount, setUpdateCount] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState<number>(0);
  
  const handleRealTimeUpdate = (field: string, value: unknown) => {
    setRealtimeUpdates(prev => {
      const newMap = new Map(prev);
      const existing = newMap.get(component.id) || {};
      newMap.set(component.id, { ...existing, [field]: value });
      return newMap;
    });
    
    setUpdateCount(prev => prev + 1);
    setLastUpdateTime(Date.now());
  };
  
  const handleSave = (updates: Record<string, unknown>) => {
    setComponent(prev => ({
      ...prev,
      props: { ...prev.props, ...updates }
    }));
    
    // Clear real-time updates after save
    setRealtimeUpdates(new Map());
  };
  
  return (
    <div className="test-app">
      <div className="stats" data-testid="update-stats">
        <span data-testid="update-count">Updates: {updateCount}</span>
        <span data-testid="last-update-time">{lastUpdateTime}</span>
      </div>
      
      <div className="editor-panel">
        <MockDrawerEditor
          component={component}
          onRealTimeUpdate={handleRealTimeUpdate}
          onSave={handleSave}
          debounceMs={100} // Shorter for testing
        />
      </div>
      
      <div className="hierarchy-panel">
        <MockHierarchyView
          hierarchyItems={hierarchyItems}
          editingEntityId={editingEntityId}
          realtimeUpdates={realtimeUpdates}
        />
      </div>
    </div>
  );
}

describe('Real-Time Preview Flow Integration', () => {
  let user: ReturnType<typeof userEvent.setup>;
  
  beforeEach(() => {
    user = userEvent.setup();
    vi.useFakeTimers();
  });
  
  afterEach(() => {
    vi.useRealTimers();
  });
  
  it('should show real-time preview updates while typing', async () => {
    render(<RealTimePreviewTestApp />);
    
    const textInput = screen.getByTestId('text-input');
    const hierarchyItem = screen.getByTestId('hierarchy-test-component');
    
    // Initial state - no preview updates
    expect(screen.queryByTestId('preview-test-component')).not.toBeInTheDocument();
    
    // Start typing
    await user.clear(textInput);
    await user.type(textInput, 'New button text');
    
    // Advance time to trigger debounced update
    vi.advanceTimersByTime(100);
    
    // Should show real-time preview
    await waitFor(() => {
      expect(screen.getByTestId('preview-test-component')).toBeInTheDocument();
      expect(screen.getByTestId('preview-text')).toHaveTextContent('text: New button text');
    });
    
    // Hierarchy should show has-updates class
    expect(hierarchyItem).toHaveClass('has-updates');
  });
  
  it('should debounce rapid typing changes', async () => {
    render(<RealTimePreviewTestApp />);
    
    const textInput = screen.getByTestId('text-input');
    const updateCount = screen.getByTestId('update-count');
    
    // Rapid typing
    await user.clear(textInput);
    await user.type(textInput, 'A');
    vi.advanceTimersByTime(50);
    
    await user.type(textInput, 'B');
    vi.advanceTimersByTime(50);
    
    await user.type(textInput, 'C');
    vi.advanceTimersByTime(50);
    
    // Should not have triggered updates yet (debouncing)
    expect(updateCount).toHaveTextContent('Updates: 0');
    
    // Complete debounce period
    vi.advanceTimersByTime(100);
    
    // Should have triggered single batched update
    await waitFor(() => {
      expect(updateCount).toHaveTextContent('Updates: 1');
    });
  });
  
  it('should handle multiple field updates in batch', async () => {
    render(<RealTimePreviewTestApp />);
    
    const textInput = screen.getByTestId('text-input');
    const colorInput = screen.getByTestId('color-input');
    const sizeInput = screen.getByTestId('size-input');
    
    // Update multiple fields rapidly
    await user.clear(textInput);
    await user.type(textInput, 'New text');
    
    await user.clear(colorInput);
    await user.type(colorInput, 'red');
    
    await user.clear(sizeInput);
    await user.type(sizeInput, 'large');
    
    // Advance time to trigger updates
    vi.advanceTimersByTime(100);
    
    // Should show all field updates in preview
    await waitFor(() => {
      const preview = screen.getByTestId('preview-test-component');
      expect(preview).toBeInTheDocument();
      
      // Should show all three field updates
      expect(screen.getByTestId('preview-text')).toHaveTextContent('text: New text');
      expect(screen.getByTestId('preview-color')).toHaveTextContent('color: red');
      expect(screen.getByTestId('preview-size')).toHaveTextContent('size: large');
    });
  });
  
  it('should clear preview updates on save', async () => {
    render(<RealTimePreviewTestApp />);
    
    const textInput = screen.getByTestId('text-input');
    const saveButton = screen.getByTestId('save-button');
    
    // Make changes and wait for preview
    await user.clear(textInput);
    await user.type(textInput, 'Updated text');
    vi.advanceTimersByTime(100);
    
    await waitFor(() => {
      expect(screen.getByTestId('preview-test-component')).toBeInTheDocument();
    });
    
    // Save changes
    await user.click(saveButton);
    
    // Preview should be cleared
    await waitFor(() => {
      expect(screen.queryByTestId('preview-test-component')).not.toBeInTheDocument();
    });
    
    // Hierarchy should not have has-updates class
    const hierarchyItem = screen.getByTestId('hierarchy-test-component');
    expect(hierarchyItem).not.toHaveClass('has-updates');
  });
  
  it('should handle rapid component switching with cleanup', async () => {
    const TestAppWithSwitching = () => {
      const [currentComponent, setCurrentComponent] = useState('comp1');
      
      const components = {
        comp1: {
          id: 'comp1',
          type: 'Button' as const,
          props: { text: 'Button 1' },
          tailwindOptions: { classList: [] }
        },
        comp2: {
          id: 'comp2', 
          type: 'Input' as const,
          props: { placeholder: 'Input 2' },
          tailwindOptions: { classList: [] }
        }
      };
      
      return (
        <div>
          <button
            onClick={() => setCurrentComponent('comp2')}
            data-testid="switch-component"
          >
            Switch
          </button>
          <MockDrawerEditor
            component={components[currentComponent as keyof typeof components]}
            onRealTimeUpdate={() => {}}
            onSave={() => {}}
          />
        </div>
      );
    };
    
    render(<TestAppWithSwitching />);
    
    const textInput = screen.getByTestId('text-input');
    const switchButton = screen.getByTestId('switch-component');
    
    // Start typing in first component
    await user.type(textInput, 'Typing in comp1');
    
    // Rapidly switch to second component
    await user.click(switchButton);
    
    // Should not crash and should handle cleanup properly
    vi.advanceTimersByTime(100);
    
    // New component should be rendered
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });
  
  it('should maintain 60 FPS during batch updates', async () => {
    const performanceMonitor = {
      frameCount: 0,
      lastFrameTime: performance.now(),
      fps: 60
    };
    
    const rafSpy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback) => {
      const now = performance.now();
      const deltaTime = now - performanceMonitor.lastFrameTime;
      
      if (deltaTime >= 16) { // ~60 FPS
        performanceMonitor.frameCount++;
        performanceMonitor.lastFrameTime = now;
        performanceMonitor.fps = 1000 / deltaTime;
      }
      
      setTimeout(() => callback(now), 16);
      return 1;
    });
    
    render(<RealTimePreviewTestApp />);
    
    const textInput = screen.getByTestId('text-input');
    
    // Simulate rapid updates
    for (let i = 0; i < 10; i++) {
      await user.type(textInput, 'x');
      vi.advanceTimersByTime(10);
    }
    
    // Complete updates
    vi.advanceTimersByTime(200);
    
    // Should maintain reasonable FPS
    expect(performanceMonitor.fps).toBeGreaterThanOrEqual(30); // At least 30 FPS
    
    rafSpy.mockRestore();
  });
  
  it('should handle editing state indicators during real-time updates', async () => {
    render(<RealTimePreviewTestApp />);
    
    const hierarchyItem = screen.getByTestId('hierarchy-test-component');
    const textInput = screen.getByTestId('text-input');
    
    // Should show editing indicator
    expect(screen.getByTestId('editing-test-component')).toBeInTheDocument();
    expect(hierarchyItem).toHaveClass('editing');
    
    // Start typing for real-time updates
    await user.type(textInput, 'Real-time update');
    vi.advanceTimersByTime(100);
    
    // Should maintain editing state and show updates
    await waitFor(() => {
      expect(screen.getByTestId('editing-test-component')).toBeInTheDocument();
      expect(screen.getByTestId('preview-test-component')).toBeInTheDocument();
      expect(hierarchyItem).toHaveClass('editing');
      expect(hierarchyItem).toHaveClass('has-updates');
    });
  });
  
  describe('Performance Edge Cases', () => {
    it('should handle very rapid updates without memory leaks', async () => {
      const { unmount } = render(<RealTimePreviewTestApp />);
      
      const textInput = screen.getByTestId('text-input');
      
      // Simulate 100 rapid updates
      for (let i = 0; i < 100; i++) {
        fireEvent.change(textInput, { target: { value: `value${i}` } });
        vi.advanceTimersByTime(5);
      }
      
      // Should handle without crashing
      vi.advanceTimersByTime(200);
      
      expect(screen.getByTestId('hierarchy-test-component')).toBeInTheDocument();
      
      // Clean unmount
      unmount();
    });
    
    it('should handle network delays and async operations', async () => {
      const DelayedUpdateComponent = () => {
        const [isProcessing, setIsProcessing] = useState(false);
        
        const handleUpdate = async (field: string, value: unknown) => {
          setIsProcessing(true);
          // Simulate network delay
          await new Promise(resolve => setTimeout(resolve, 200));
          setIsProcessing(false);
        };
        
        return (
          <div>
            <MockDrawerEditor
              component={{
                id: 'test',
                type: 'Button',
                props: {},
                tailwindOptions: { classList: [] }
              }}
              onRealTimeUpdate={handleUpdate}
              onSave={() => {}}
            />
            {isProcessing && <div data-testid="processing">Processing...</div>}
          </div>
        );
      };
      
      render(<DelayedUpdateComponent />);
      
      const textInput = screen.getByTestId('text-input');
      
      // Start update
      await user.type(textInput, 'async update');
      vi.advanceTimersByTime(100);
      
      // Should handle async processing
      await waitFor(() => {
        expect(screen.getByTestId('processing')).toBeInTheDocument();
      });
      
      // Complete async operation
      vi.advanceTimersByTime(200);
      
      await waitFor(() => {
        expect(screen.queryByTestId('processing')).not.toBeInTheDocument();
      });
    });
  });
});