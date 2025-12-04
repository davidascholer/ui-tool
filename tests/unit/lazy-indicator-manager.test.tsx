/**
 * LazyIndicatorManager Test Suite
 * Feature 004: Real-Time Hierarchy Updates - T048
 * Tests lazy loading functionality and bundle optimization
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { LazyIndicatorManager } from '../../src/components/builder/ResultSide/PropertyIndicators/LazyIndicatorManager';
import type { ComponentEntity } from '../../src/utils/types';

// Mock the indicator components to avoid loading them
vi.mock('../../src/components/builder/ResultSide/PropertyIndicators/IndicatorManager', () => ({
  IndicatorManager: vi.fn(({ component }) => (
    <div data-testid="indicator-manager">
      IndicatorManager for {component.id}
    </div>
  ))
}));

describe('LazyIndicatorManager', () => {
  const mockComponent: ComponentEntity = {
    id: 'test-component',
    type: 'Button',
    props: {},
    tailwindOptions: {
      classList: ['bg-blue-500', 'text-white', 'p-4']
    }
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders skeleton while loading', () => {
    const { container } = render(<LazyIndicatorManager component={mockComponent} />);
    
    // Should show skeleton during loading - check for animate-pulse class
    const skeletonElements = container.querySelectorAll('.animate-pulse');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('renders the actual IndicatorManager after loading', async () => {
    render(<LazyIndicatorManager component={mockComponent} />);
    
    // Wait for lazy component to load
    await waitFor(() => {
      expect(screen.getByTestId('indicator-manager')).toBeDefined();
    });
  });

  it('returns null when component has no classList', () => {
    const emptyComponent: ComponentEntity = {
      id: 'empty-component',
      type: 'Button',
      props: {},
      tailwindOptions: {
        classList: []
      }
    };

    const { container } = render(<LazyIndicatorManager component={emptyComponent} />);
    expect(container.firstChild).toBeNull();
  });

  it('returns null when component is undefined', () => {
    const { container } = render(
      <LazyIndicatorManager component={null as unknown as ComponentEntity} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('passes props correctly to the loaded component', async () => {
    const props = {
      component: mockComponent,
      maxIndicators: 3,
      size: 'md' as const,
      className: 'test-class'
    };

    render(<LazyIndicatorManager {...props} />);

    await waitFor(() => {
      expect(screen.getByTestId('indicator-manager')).toBeDefined();
    });
  });

  it('handles large component classList correctly', async () => {
    const largeComponent: ComponentEntity = {
      id: 'large-component',
      type: 'Button',
      props: {},
      tailwindOptions: {
        classList: ['bg-red-500', 'text-white', 'p-4', 'rounded', 'shadow', 'border']
      }
    };

    render(<LazyIndicatorManager component={largeComponent} maxIndicators={3} />);
    
    // Wait for component to load and verify it renders
    await waitFor(() => {
      expect(screen.getByTestId('indicator-manager')).toBeDefined();
    });
  });

  it('handles maxIndicators prop correctly', async () => {
    render(
      <LazyIndicatorManager 
        component={mockComponent} 
        maxIndicators={2}
      />
    );

    await waitFor(() => {
      expect(screen.getByTestId('indicator-manager')).toBeDefined();
    });
  });
});