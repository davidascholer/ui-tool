/**
 * Unit tests for theme toggle component
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/components/common/ThemeToggle';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('ThemeToggle Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('renders theme toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('initializes with system theme by default', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    // Should show system theme icon (monitor icon)
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('loads saved theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    render(<ThemeToggle />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('ui-builder-theme');
  });

  it('cycles through themes when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    // Initial state is 'system', clicking should go to 'light'
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('ui-builder-theme', 'light');
    
    // Click again to go to 'dark'
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('ui-builder-theme', 'dark');
    
    // Click again to go to 'system'
    fireEvent.click(button);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('ui-builder-theme', 'system');
  });

  it('applies correct CSS classes and data attributes', () => {
    const mockDocumentElement = {
      setAttribute: vi.fn(),
      removeAttribute: vi.fn(),
      classList: {
        add: vi.fn(),
        remove: vi.fn()
      }
    };
    
    Object.defineProperty(document, 'documentElement', {
      value: mockDocumentElement,
      writable: true
    });

    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    fireEvent.click(button); // Should set to 'light'
    
    expect(mockDocumentElement.setAttribute).toHaveBeenCalledWith('data-theme', 'light');
    expect(mockDocumentElement.classList.add).toHaveBeenCalledWith('light');
  });

  it('shows correct tooltip text', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    expect(button).toHaveAttribute('title', expect.stringContaining('Current theme: system'));
  });

  it('handles invalid saved theme gracefully', () => {
    localStorageMock.getItem.mockReturnValue('invalid-theme');
    render(<ThemeToggle />);
    
    // Should default to 'system' for invalid values
    expect(localStorageMock.setItem).toHaveBeenCalledWith('ui-builder-theme', 'system');
  });

  it('displays different icons for each theme', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    // System theme (initial)
    let svg = button.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    
    // Light theme
    fireEvent.click(button);
    svg = button.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    
    // Dark theme
    fireEvent.click(button);
    svg = button.querySelector('svg');
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('maintains accessibility attributes', () => {
    render(<ThemeToggle />);
    const button = screen.getByLabelText('Toggle theme');
    
    expect(button).toHaveAttribute('aria-label', 'Toggle theme');
    expect(button).toHaveClass('focus:outline-none');
    expect(button).toHaveClass('focus:ring-2');
  });
});