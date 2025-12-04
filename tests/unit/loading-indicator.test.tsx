/**
 * LoadingIndicator Component Tests
 * Feature 004: Real-Time Hierarchy Updates - T018a
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingIndicator } from '../../src/components/builder/ResultSide/LoadingIndicator';

describe('LoadingIndicator', () => {
  it('renders loading spinner when isLoading is true', () => {
    render(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={false}
      />
    );
    
    const loadingElement = screen.getByTitle('Updating...');
    expect(loadingElement).toBeDefined();
    
    // Should have spinning animation
    const svg = loadingElement.querySelector('svg');
    expect(svg?.classList.contains('animate-spin')).toBe(true);
    expect(svg?.classList.contains('text-blue-500')).toBe(true);
  });

  it('renders slow update indicator when isSlowUpdate is true', () => {
    render(
      <LoadingIndicator
        isLoading={false}
        isSlowUpdate={true}
      />
    );
    
    const slowUpdateElement = screen.getByTitle('Update completed (took longer than expected)');
    expect(slowUpdateElement).toBeDefined();
    
    // Should have amber color
    const svg = slowUpdateElement.querySelector('svg');
    expect(svg?.classList.contains('text-amber-500')).toBe(true);
  });

  it('renders nothing when neither loading nor slow update', () => {
    const { container } = render(
      <LoadingIndicator
        isLoading={false}
        isSlowUpdate={false}
      />
    );
    
    expect(container.firstChild).toBeNull();
  });

  it('prioritizes loading state over slow update state', () => {
    render(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={true}
      />
    );
    
    // Should show loading, not slow update
    expect(screen.getByTitle('Updating...')).toBeDefined();
    expect(screen.queryByTitle('Update completed (took longer than expected)')).toBeNull();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={false}
        size="sm"
      />
    );
    
    let element = screen.getByTitle('Updating...');
    expect(element.classList.contains('w-3')).toBe(true);
    expect(element.classList.contains('h-3')).toBe(true);
    
    rerender(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={false}
        size="md"
      />
    );
    
    element = screen.getByTitle('Updating...');
    expect(element.classList.contains('w-4')).toBe(true);
    expect(element.classList.contains('h-4')).toBe(true);
    
    rerender(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={false}
        size="lg"
      />
    );
    
    element = screen.getByTitle('Updating...');
    expect(element.classList.contains('w-5')).toBe(true);
    expect(element.classList.contains('h-5')).toBe(true);
  });

  it('applies custom className', () => {
    render(
      <LoadingIndicator
        isLoading={true}
        isSlowUpdate={false}
        className="custom-class"
      />
    );
    
    const element = screen.getByTitle('Updating...');
    expect(element.classList.contains('custom-class')).toBe(true);
  });
});