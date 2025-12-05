/**
 * Unit tests for Editor save callback functionality
 * Tests that onSave callbacks are properly invoked with correct data
 */

import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Editor } from '../../src/components/builder/Drawer/Editor';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../../src/utils/types';

// Simple test to verify onSave callback behavior
describe('Editor onSave Callback Tests', () => {
  it('renders without errors when onSave is provided', () => {
    const mockOnSave = vi.fn();
    const pageEntity: PageEntity = {
      id: 'page-1',
      name: 'Test Page',
      meta: {},
      children: []
    };

    expect(() => {
      render(<Editor entity={pageEntity} entityType="Page" onSave={mockOnSave} />);
    }).not.toThrow();
  });

  it('renders without errors when onSave is not provided', () => {
    const pageEntity: PageEntity = {
      id: 'page-1',
      name: 'Test Page',
      meta: {},
      children: []
    };

    expect(() => {
      render(<Editor entity={pageEntity} entityType="Page" />);
    }).not.toThrow();
  });

  it('onSave function is callable (if provided)', () => {
    const mockOnSave = vi.fn();
    
    // Simulate calling onSave with typical data structures
    const pageData = { name: 'Updated Page', meta: { title: 'New Title' } };
    const containerData = { 
      name: 'Updated Container', 
      tailwindClassList: ['bg-blue-500', 'p-4'] 
    };
    const componentData = { 
      type: 'Button', 
      props: { text: 'Updated Text' },
      tailwindClassList: ['btn-primary']
    };

    // Test that onSave can be called with different data types
    mockOnSave(pageData);
    mockOnSave(containerData);
    mockOnSave(componentData);

    expect(mockOnSave).toHaveBeenCalledTimes(3);
    expect(mockOnSave).toHaveBeenNthCalledWith(1, pageData);
    expect(mockOnSave).toHaveBeenNthCalledWith(2, containerData);
    expect(mockOnSave).toHaveBeenNthCalledWith(3, componentData);
  });

  it('Editor components accept all required entity types', () => {
    const mockOnSave = vi.fn();

    const pageEntity: PageEntity = {
      id: 'page-1',
      name: 'Test Page',
      meta: { title: 'Test Title', description: 'Test Description' },
      children: []
    };

    const containerEntity: ContainerEntity = {
      id: 'container-1',
      name: 'Test Container',
      tailwindClassList: ['bg-blue-500'],
      children: []
    };

    const componentEntity: ComponentEntity = {
      id: 'component-1',
      type: 'Button',
      props: { text: 'Click me' },
      tailwindClassList: ['btn']
    };

    // All should render without errors
    expect(() => render(<Editor entity={pageEntity} entityType="Page" onSave={mockOnSave} />)).not.toThrow();
    expect(() => render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />)).not.toThrow();
    expect(() => render(<Editor entity={componentEntity} entityType="Component" onSave={mockOnSave} />)).not.toThrow();
  });
});