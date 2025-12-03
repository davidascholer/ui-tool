/**
 * Unit tests for UISide catalog component
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { UISide } from '@/components/builder/UISide';

describe('UISide Component', () => {
  const mockOnDragStart = vi.fn();

  beforeEach(() => {
    mockOnDragStart.mockClear();
  });

  it('renders the main title', () => {
    render(<UISide onDragStart={mockOnDragStart} />);
    expect(screen.getByText('Components')).toBeInTheDocument();
  });

  it('renders all catalog sections', () => {
    render(<UISide onDragStart={mockOnDragStart} />);
    
    // Check section headers
    expect(screen.getByText('Pages')).toBeInTheDocument();
    expect(screen.getByText('Containers')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
  });

  describe('Pages Section', () => {
    it('renders page components', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      expect(screen.getByText('Page')).toBeInTheDocument();
    });

    it('triggers drag start for page', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      const pageElement = screen.getByText('Page').closest('div');
      
      const dragStartEvent = new Event('dragstart', { bubbles: true });
      Object.defineProperty(dragStartEvent, 'dataTransfer', {
        value: {
          setData: vi.fn(),
          effectAllowed: ''
        },
        writable: false
      });
      
      fireEvent(pageElement!, dragStartEvent);
      expect(mockOnDragStart).toHaveBeenCalledWith('page', undefined);
    });
  });

  describe('Containers Section', () => {
    it('renders container components', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      expect(screen.getByText('Container')).toBeInTheDocument();
      expect(screen.getByText('Section')).toBeInTheDocument();
    });

    it('triggers drag start for containers', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      const containerElement = screen.getByText('Container').closest('div');
      
      const dragStartEvent = new Event('dragstart', { bubbles: true });
      Object.defineProperty(dragStartEvent, 'dataTransfer', {
        value: {
          setData: vi.fn(),
          effectAllowed: ''
        },
        writable: false
      });
      
      fireEvent(containerElement!, dragStartEvent);
      expect(mockOnDragStart).toHaveBeenCalledWith('container', undefined);
    });
  });

  describe('Components Section', () => {
    const componentTypes = ['Button', 'Input', 'Card', 'Text', 'Image', 'List'];

    it('renders all component types', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      
      componentTypes.forEach(type => {
        expect(screen.getByText(type)).toBeInTheDocument();
      });
    });

    it('triggers drag start for components with correct type', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      const buttonElement = screen.getByText('Button').closest('div');
      
      const dragStartEvent = new Event('dragstart', { bubbles: true });
      Object.defineProperty(dragStartEvent, 'dataTransfer', {
        value: {
          setData: vi.fn(),
          effectAllowed: ''
        },
        writable: false
      });
      
      fireEvent(buttonElement!, dragStartEvent);
      expect(mockOnDragStart).toHaveBeenCalledWith('component', 'Button');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels for drag items', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      
      const pageElement = screen.getByLabelText('Drag Page to canvas');
      expect(pageElement).toBeInTheDocument();
      expect(pageElement).toHaveAttribute('role', 'button');
      expect(pageElement).toHaveAttribute('tabIndex', '0');
    });

    it('supports keyboard navigation', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      
      const pageElement = screen.getByLabelText('Drag Page to canvas');
      expect(pageElement).toHaveAttribute('tabIndex', '0');
    });
  });

  describe('Visual Elements', () => {
    it('displays icons for each component', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      
      // Check that emoji icons are present
      expect(screen.getByText('📄')).toBeInTheDocument(); // Page
      expect(screen.getByText('📦')).toBeInTheDocument(); // Container
      expect(screen.getByText('🔘')).toBeInTheDocument(); // Button
    });

    it('applies proper CSS classes for styling', () => {
      render(<UISide onDragStart={mockOnDragStart} />);
      
      const pageElement = screen.getByText('Page').closest('div');
      expect(pageElement).toHaveClass('cursor-move');
      expect(pageElement).toHaveAttribute('draggable', 'true');
    });
  });
});