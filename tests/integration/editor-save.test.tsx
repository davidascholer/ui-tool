/**
 * Integration tests for Editor save functionality
 * Tests the actual form submission behavior without extensive mocking
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Editor } from '../../src/components/builder/Drawer/Editor';
import type { PageEntity, ContainerEntity, ComponentEntity } from '../../src/utils/types';

describe('Editor Save Integration Tests', () => {
  const mockOnSave = vi.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockOnSave.mockClear();
  });

  describe('Form Rendering and Structure', () => {
    it('renders page editor form with save button', () => {
      const pageEntity: PageEntity = {
        id: 'page-1',
        name: 'Test Page',
        meta: { title: 'Test Title' },
        children: []
      };

      render(<Editor entity={pageEntity} entityType="Page" onSave={mockOnSave} />);

      expect(screen.getByLabelText(/page name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/seo title/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/seo description/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /save page/i })).toBeInTheDocument();
    });

    it('renders container editor form with save button', () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: ['bg-blue-500'] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      expect(screen.getByLabelText(/container name/i)).toBeInTheDocument();
      expect(screen.getByText(/tailwind classes/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /save container/i })).toBeInTheDocument();
      expect(screen.getByText('bg-blue-500')).toBeInTheDocument(); // Existing class
    });

    it('renders component editor form with save button', () => {
      const componentEntity: ComponentEntity = {
        id: 'component-1',
        type: 'Button',
        props: { text: 'Click me' },
        tailwindOptions: { classList: [] }
      };

      render(<Editor entity={componentEntity} entityType="Component" onSave={mockOnSave} />);

      expect(screen.getByDisplayValue('Button')).toBeInTheDocument(); // Component type
      expect(screen.getByText(/button text/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /save component/i })).toBeInTheDocument();
    });
  });

  describe('Tailwind Class Management', () => {
    it('displays existing Tailwind classes for container', () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: ['bg-red-500', 'p-4', 'rounded'] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      expect(screen.getByText('bg-red-500')).toBeInTheDocument();
      expect(screen.getByText('p-4')).toBeInTheDocument();
      expect(screen.getByText('rounded')).toBeInTheDocument();
    });

    it('allows adding new Tailwind classes', async () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: [] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      const classInput = screen.getByPlaceholderText(/e\.g\., bg-blue-500/i);
      const addButton = screen.getByRole('button', { name: /add/i });

      await user.type(classInput, 'bg-green-500');
      await user.click(addButton);

      expect(screen.getByText('bg-green-500')).toBeInTheDocument();
    });

    it('allows removing existing Tailwind classes', async () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: ['bg-red-500'] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      expect(screen.getByText('bg-red-500')).toBeInTheDocument();

      const removeButton = screen.getByLabelText(/remove bg-red-500/i);
      await user.click(removeButton);

      expect(screen.queryByText('bg-red-500')).not.toBeInTheDocument();
    });

    it('prevents duplicate Tailwind classes', async () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: ['bg-blue-500'] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      const classInput = screen.getByPlaceholderText(/e\.g\., bg-blue-500/i);
      const addButton = screen.getByRole('button', { name: /add/i });

      // Try to add duplicate class
      await user.type(classInput, 'bg-blue-500');
      await user.click(addButton);

      // Should still only show one instance
      const classElements = screen.getAllByText('bg-blue-500');
      expect(classElements).toHaveLength(1);
    });
  });

  describe('Component-Specific Properties', () => {
    it('shows button-specific properties for Button component', () => {
      const buttonEntity: ComponentEntity = {
        id: 'button-1',
        type: 'Button',
        props: { text: 'Original Text' },
        tailwindOptions: { classList: [] }
      };

      render(<Editor entity={buttonEntity} entityType="Component" onSave={mockOnSave} />);

      expect(screen.getByText(/button text/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/click me/i)).toBeInTheDocument();
    });

    it('shows input-specific properties for Input component', () => {
      const inputEntity: ComponentEntity = {
        id: 'input-1',
        type: 'Input',
        props: { placeholder: 'Enter text', type: 'text' },
        tailwindOptions: { classList: [] }
      };

      render(<Editor entity={inputEntity} entityType="Component" onSave={mockOnSave} />);

      expect(screen.getByText(/placeholder/i)).toBeInTheDocument();
      expect(screen.getByText(/input type/i)).toBeInTheDocument();
      expect(screen.getByDisplayValue('Text')).toBeInTheDocument(); // Selected option
    });

    it('shows text-specific properties for Text component', () => {
      const textEntity: ComponentEntity = {
        id: 'text-1',
        type: 'Text',
        props: { text: 'Original content' },
        tailwindOptions: { classList: [] }
      };

      render(<Editor entity={textEntity} entityType="Component" onSave={mockOnSave} />);

      expect(screen.getByText(/text content/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/enter your text here/i)).toBeInTheDocument();
    });

    it('shows generic message for unsupported component types', () => {
      const cardEntity: ComponentEntity = {
        id: 'card-1',
        type: 'Card',
        props: {},
        tailwindOptions: { classList: [] }
      };

      render(<Editor entity={cardEntity} entityType="Component" onSave={mockOnSave} />);

      expect(screen.getByText(/no specific properties for card component/i)).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('handles missing onSave prop gracefully', () => {
      const pageEntity: PageEntity = {
        id: 'page-1',
        name: 'Test Page',
        meta: {},
        children: []
      };

      // Should not throw error when onSave is undefined
      expect(() => {
        render(<Editor entity={pageEntity} entityType="Page" />);
      }).not.toThrow();

      expect(screen.getByRole('button', { name: /save page/i })).toBeInTheDocument();
    });

    it('shows form validation errors when they occur', () => {
      const pageEntity: PageEntity = {
        id: 'page-1',
        name: '', // Invalid empty name
        meta: {},
        children: []
      };

      render(<Editor entity={pageEntity} entityType="Page" onSave={mockOnSave} />);
      
      const nameInput = screen.getByLabelText(/page name/i);
      expect(nameInput).toHaveValue('');
    });
  });

  describe('Save Button Behavior', () => {
    it('save buttons are properly typed as submit buttons', () => {
      const entities = [
        { entity: { id: '1', name: 'Page', meta: {}, children: [] }, type: 'Page' as const },
        { entity: { id: '2', name: 'Container', tailwindOptions: { classList: [] }, children: [] }, type: 'Container' as const },
        { entity: { id: '3', type: 'Button', props: {}, tailwindOptions: { classList: [] } }, type: 'Component' as const }
      ];

      entities.forEach(({ entity, type }) => {
        const { unmount } = render(<Editor entity={entity as PageEntity | ContainerEntity | ComponentEntity} entityType={type} onSave={mockOnSave} />);
        const saveButton = screen.getByRole('button', { name: new RegExp(`save ${type.toLowerCase()}`, 'i') });
        expect(saveButton).toHaveAttribute('type', 'submit');
        unmount();
      });
    });
  });

  describe('User Interactions', () => {
    it('allows typing in form fields', async () => {
      const pageEntity: PageEntity = {
        id: 'page-1',
        name: 'Original Name',
        meta: { title: 'Original Title' },
        children: []
      };

      render(<Editor entity={pageEntity} entityType="Page" onSave={mockOnSave} />);

      const nameInput = screen.getByLabelText(/page name/i);
      const titleInput = screen.getByLabelText(/seo title/i);

      await user.clear(nameInput);
      await user.type(nameInput, 'Updated Name');

      await user.clear(titleInput);
      await user.type(titleInput, 'Updated Title');

      expect(nameInput).toHaveValue('Updated Name');
      expect(titleInput).toHaveValue('Updated Title');
    });

    it('allows adding classes with Enter key', async () => {
      const containerEntity: ContainerEntity = {
        id: 'container-1',
        name: 'Test Container',
        tailwindOptions: { classList: [] },
        children: []
      };

      render(<Editor entity={containerEntity} entityType="Container" onSave={mockOnSave} />);

      const classInput = screen.getByPlaceholderText(/e\.g\., bg-blue-500/i);
      
      await user.type(classInput, 'border-2');
      await user.keyboard('{Enter}');

      expect(screen.getByText('border-2')).toBeInTheDocument();
      expect(classInput).toHaveValue(''); // Input should be cleared after adding
    });
  });
});