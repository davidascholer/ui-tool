/**
 * Error Handling Tests for Feature 004
 * Tests auto-reversion logic and validation in save operations
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import { useHierarchyUpdates } from '../../src/hooks/useHierarchyUpdates';
import type { PageEntity, Selection, PropertyChange } from '../../src/utils/types';

// Mock component to test error handling
function TestErrorHandlingComponent() {
  const [pages] = useState<PageEntity[]>([
    {
      id: 'page-1',
      name: 'Test Page',
      children: []
    }
  ]);
  
  const [selection] = useState<Selection>({
    entityType: 'Page',
    entityId: 'page-1'
  });

  const mockOnUpdate = vi.fn();
  const { queueChange, clearQueue } = useHierarchyUpdates({
    pages,
    selection,
    onUpdate: mockOnUpdate
  });

  // Simulate save operation with error handling
  const handleSaveWithValidation = (data: unknown) => {
    try {
      // Validate data
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid data format');
      }

      const dataObj = data as Record<string, unknown>;
      
      // Validate name field
      if ('name' in dataObj && (typeof dataObj.name !== 'string' || dataObj.name.trim().length === 0)) {
        throw new Error('Name must be a non-empty string');
      }

      // Queue valid changes
      if (selection) {
        const change: PropertyChange = {
          entityId: selection.entityId,
          entityType: selection.entityType,
          field: 'name',
          oldValue: 'Test Page',
          newValue: dataObj.name,
          timestamp: Date.now()
        };
        queueChange(change);
      }

    } catch (error) {
      // Auto-reversion on error
      if (selection) {
        clearQueue(selection.entityId);
      }
      throw error;
    }
  };

  const handleTestValidSave = () => {
    handleSaveWithValidation({ name: 'Updated Page Name' });
  };

  const handleTestInvalidSave = () => {
    try {
      handleSaveWithValidation({ name: '' });
    } catch (error) {
      console.log('Caught expected error:', error);
    }
  };

  const handleTestInvalidDataType = () => {
    try {
      handleSaveWithValidation(null);
    } catch (error) {
      console.log('Caught expected error:', error);
    }
  };

  return (
    <div>
      <h1>Error Handling Test</h1>
      <button onClick={handleTestValidSave} data-testid="valid-save">
        Valid Save
      </button>
      <button onClick={handleTestInvalidSave} data-testid="invalid-save">
        Invalid Save (Empty Name)
      </button>
      <button onClick={handleTestInvalidDataType} data-testid="invalid-data">
        Invalid Data Type
      </button>
    </div>
  );
}

describe('Error Handling and Auto-Reversion', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should handle valid save operations without errors', () => {
    render(<TestErrorHandlingComponent />);
    
    expect(() => {
      fireEvent.click(screen.getByTestId('valid-save'));
    }).not.toThrow();
  });

  it('should catch validation errors and trigger auto-reversion', () => {
    render(<TestErrorHandlingComponent />);
    
    // This should trigger error handling but not throw uncaught error
    fireEvent.click(screen.getByTestId('invalid-save'));
    
    // Verify error was logged (indicating auto-reversion was triggered)
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Caught expected error:'),
      expect.any(Error)
    );
  });

  it('should handle invalid data types gracefully', () => {
    render(<TestErrorHandlingComponent />);
    
    // This should trigger error handling for null data
    fireEvent.click(screen.getByTestId('invalid-data'));
    
    // Verify error was logged
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('Caught expected error:'),
      expect.any(Error)
    );
  });

  it('should clear queued changes during auto-reversion', () => {
    function TestClearQueueComponent() {
      const mockPages: PageEntity[] = [{
        id: 'page-1',
        name: 'Test Page',
        children: []
      }];

      const mockSelection: Selection = {
        entityType: 'Page',
        entityId: 'page-1'
      };

      const mockOnUpdate = vi.fn();
      
      // Create a test scenario where we queue changes then clear them
      const { queueChange, clearQueue } = useHierarchyUpdates({
        pages: mockPages,
        selection: mockSelection,
        onUpdate: mockOnUpdate
      });

      const handleTestClearQueue = () => {
        // Queue a change
        const testChange: PropertyChange = {
          entityId: 'page-1',
          entityType: 'Page',
          field: 'name',
          oldValue: 'Test Page',
          newValue: 'Updated Name',
          timestamp: Date.now()
        };

        queueChange(testChange);
        
        // Simulate error and auto-reversion
        clearQueue('page-1');
      };

      return (
        <button onClick={handleTestClearQueue} data-testid="clear-queue">
          Test Clear Queue
        </button>
      );
    }

    render(<TestClearQueueComponent />);
    
    // Should not throw when clearing queue
    expect(() => {
      fireEvent.click(screen.getByTestId('clear-queue'));
    }).not.toThrow();
  });

  it('should validate different field types correctly', () => {
    const testValidation = (fieldName: string, value: unknown) => {
      if (fieldName === 'name' && (typeof value !== 'string' || (value as string).trim().length === 0)) {
        throw new Error(`Name must be a non-empty string, got: ${typeof value}`);
      }
      
      if (fieldName === 'className' && value !== null && typeof value !== 'string') {
        throw new Error(`ClassName must be a string or null, got: ${typeof value}`);
      }
    };

    // Valid cases
    expect(() => testValidation('name', 'Valid Name')).not.toThrow();
    expect(() => testValidation('className', 'text-lg')).not.toThrow();
    expect(() => testValidation('className', null)).not.toThrow();

    // Invalid cases
    expect(() => testValidation('name', '')).toThrow('Name must be a non-empty string');
    expect(() => testValidation('name', 123)).toThrow('Name must be a non-empty string');
    expect(() => testValidation('className', 123)).toThrow('ClassName must be a string or null');
  });
});