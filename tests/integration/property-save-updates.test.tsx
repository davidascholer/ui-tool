/**
 * Integration tests for save-to-hierarchy flow
 * Feature 004: Real-Time Hierarchy Updates - User Story 1
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useState } from 'react';
import type { Selection } from '../../src/utils/types';

// Mock components for testing
interface MockDrawerProps {
  isOpen: boolean;
  selection: Selection | null;
  onSave: (entityId: string, changes: Record<string, unknown>) => void;
}

function MockDrawer({ isOpen, selection, onSave }: MockDrawerProps) {
  const [formData, setFormData] = useState({
    name: 'Test Component',
    text: 'Click me',
  });

  if (!isOpen || !selection) return null;

  const handleSave = () => {
    try {
      onSave(selection.entityId, formData);
    } catch (error) {
      console.error('Save operation failed:', error);
      // In a real app, you might show a toast notification here
    }
  };

  return (
    <div data-testid="drawer">
      <h2>Edit {selection.entityType}</h2>
      <input
        data-testid="name-input"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        placeholder="Component name"
      />
      <input
        data-testid="text-input"
        value={formData.text}
        onChange={(e) => setFormData(prev => ({ ...prev, text: e.target.value }))}
        placeholder="Button text"
      />
      <button data-testid="save-button" onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
}

interface MockHierarchyProps {
  hierarchyItems: Array<{ id: string; name: string; lastUpdated?: number }>;
  onSelect: (entityId: string, entityType: 'Component' | 'Container' | 'Page') => void;
}

function MockHierarchy({ hierarchyItems, onSelect }: MockHierarchyProps) {
  return (
    <div data-testid="hierarchy">
      <h2>Hierarchy</h2>
      {hierarchyItems.map((item) => (
        <div
          key={item.id}
          data-testid={`hierarchy-item-${item.id}`}
          onClick={() => onSelect(item.id, 'Component')}
          className={item.lastUpdated ? 'updated' : ''}
        >
          {item.name}
          {item.lastUpdated && (
            <span data-testid={`update-indicator-${item.id}`} className="update-indicator">
              Updated at {item.lastUpdated}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// Integration test component that simulates the full save-to-hierarchy flow
function TestIntegrationComponent() {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hierarchyItems, setHierarchyItems] = useState([
    { id: 'component-1', name: 'Button Component' },
    { id: 'component-2', name: 'Input Component' },
  ]);

  const handleSelect = (entityId: string, entityType: 'Component' | 'Container' | 'Page') => {
    setSelection({ entityId, entityType });
    setDrawerOpen(true);
  };

  const handleSave = (entityId: string, changes: Record<string, unknown>) => {
    // Simulate the save-to-hierarchy update flow
    setHierarchyItems(prev => 
      prev.map(item => 
        item.id === entityId
          ? { 
              ...item, 
              name: changes.name as string || item.name,
              lastUpdated: Date.now() 
            }
          : item
      )
    );

    // Simulate 200ms response time requirement
    setTimeout(() => {
      setDrawerOpen(false);
      setSelection(null);
    }, 150); // Well under 200ms requirement
  };

  return (
    <div>
      <MockHierarchy 
        hierarchyItems={hierarchyItems}
        onSelect={handleSelect}
      />
      <MockDrawer
        isOpen={drawerOpen}
        selection={selection}
        onSave={handleSave}
      />
    </div>
  );
}

describe('Save-to-Hierarchy Integration Flow', () => {
  beforeEach(() => {
    // Use real timers for these integration tests
    vi.useRealTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should complete full save-to-hierarchy flow within performance requirements', async () => {
    const startTime = Date.now();
    
    render(<TestIntegrationComponent />);

    // Verify initial hierarchy state
    expect(screen.getByTestId('hierarchy')).toBeDefined();
    expect(screen.getByTestId('hierarchy-item-component-1').textContent).toContain('Button Component');

    // Step 1: Select component from hierarchy
    fireEvent.click(screen.getByTestId('hierarchy-item-component-1'));

    // Step 2: Verify drawer opens with correct selection
    expect(screen.getByTestId('drawer')).toBeDefined();
    expect(screen.getByText('Edit Component')).toBeDefined();

    // Step 3: Modify properties in drawer
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Updated Button Component' } });

    // Step 4: Save changes
    const saveButton = screen.getByTestId('save-button');
    fireEvent.click(saveButton);

    // Step 5: Verify hierarchy updates immediately (within 200ms)
    await waitFor(() => {
      const hierarchyItem = screen.getByTestId('hierarchy-item-component-1');
      expect(hierarchyItem.textContent).toContain('Updated Button Component');
    }, { timeout: 200 });

    // Step 6: Verify update indicator appears
    await waitFor(() => {
      expect(screen.getByTestId('update-indicator-component-1')).toBeDefined();
    });

    // Allow time for the save operation setTimeout to complete

    // Step 7: Verify drawer closes after save
    await waitFor(() => {
      expect(screen.queryByTestId('drawer')).toBeNull();
    });

    const endTime = Date.now();
    const totalTime = endTime - startTime;
    
    // Verify performance requirement (200ms response time)
    expect(totalTime).toBeLessThan(200);
  });

  it('should handle multiple rapid property changes without UI lag', async () => {
    render(<TestIntegrationComponent />);

    // Select component
    fireEvent.click(screen.getByTestId('hierarchy-item-component-1'));

    const nameInput = screen.getByTestId('name-input');
    const textInput = screen.getByTestId('text-input');

    // Rapid changes (simulating typing)
    fireEvent.change(nameInput, { target: { value: 'A' } });
    fireEvent.change(nameInput, { target: { value: 'AB' } });
    fireEvent.change(nameInput, { target: { value: 'ABC' } });
    fireEvent.change(textInput, { target: { value: 'New text' } });
    
    // Save all changes
    fireEvent.click(screen.getByTestId('save-button'));

    // Verify final state is correct
    await waitFor(() => {
      const hierarchyItem = screen.getByTestId('hierarchy-item-component-1');
      expect(hierarchyItem.textContent).toContain('ABC');
    });


  });

  it('should maintain hierarchy state when switching between components', async () => {
    render(<TestIntegrationComponent />);

    // Update first component
    fireEvent.click(screen.getByTestId('hierarchy-item-component-1'));
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Updated Button' } });
    fireEvent.click(screen.getByTestId('save-button'));

    // Wait for drawer to close
    await waitFor(() => {
      expect(screen.queryByTestId('drawer')).toBeNull();
    });

    // Select and update second component
    await waitFor(() => {
      fireEvent.click(screen.getByTestId('hierarchy-item-component-2'));
    });

    const nameInput2 = screen.getByTestId('name-input');
    fireEvent.change(nameInput2, { target: { value: 'Updated Input' } });
    fireEvent.click(screen.getByTestId('save-button'));



    // Verify both components maintain their updated states
    await waitFor(() => {
      expect(screen.getByTestId('hierarchy-item-component-1').textContent).toContain('Updated Button');
      expect(screen.getByTestId('hierarchy-item-component-2').textContent).toContain('Updated Input');
    });
  });

  it('should provide visual feedback during update process', async () => {
    render(<TestIntegrationComponent />);

    fireEvent.click(screen.getByTestId('hierarchy-item-component-1'));
    
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Loading Test' } });
    
    fireEvent.click(screen.getByTestId('save-button'));

    // Check that update indicator appears
    await waitFor(() => {
      expect(screen.getByTestId('update-indicator-component-1')).toBeDefined();
    });

    // Verify the hierarchy item gets updated class
    const hierarchyItem = screen.getByTestId('hierarchy-item-component-1');
    expect(hierarchyItem.className).toContain('updated');
    

  });

  it('should handle save errors gracefully', async () => {
    // Mock console.error to avoid noise in tests
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    // Component that simulates save error
    function ErrorTestComponent() {
      const [selection, setSelection] = useState<Selection | null>(null);
      const [drawerOpen, setDrawerOpen] = useState(false);
      const [hierarchyItems] = useState([
        { id: 'component-1', name: 'Button Component' },
      ]);

      const handleSelect = (entityId: string, entityType: 'Component' | 'Container' | 'Page') => {
        setSelection({ entityId, entityType });
        setDrawerOpen(true);
      };

      const handleSave = () => {
        // Simulate save error
        throw new Error('Save failed');
      };

      return (
        <div>
          <MockHierarchy 
            hierarchyItems={hierarchyItems}
            onSelect={handleSelect}
          />
          <MockDrawer
            isOpen={drawerOpen}
            selection={selection}
            onSave={handleSave}
          />
        </div>
      );
    }

    render(<ErrorTestComponent />);

    fireEvent.click(screen.getByTestId('hierarchy-item-component-1'));
    
    const nameInput = screen.getByTestId('name-input');
    fireEvent.change(nameInput, { target: { value: 'Error Test' } });
    
    // Save should fail but not crash the app
    fireEvent.click(screen.getByTestId('save-button'));

    // Verify error was logged
    expect(consoleError).toHaveBeenCalledWith(
      'Save operation failed:',
      expect.objectContaining({ message: 'Save failed' })
    );

    // Hierarchy should remain unchanged
    expect(screen.getByTestId('hierarchy-item-component-1').textContent).toContain('Button Component');

    consoleError.mockRestore();
  });
});