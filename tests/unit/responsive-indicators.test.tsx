/**
 * Responsive Indicators Test Suite
 * Feature 004: Real-Time Hierarchy Updates - T050
 * Tests for responsive indicator behavior across viewport sizes
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom';

// Import components and utilities to test
import {
  useViewportSize,
  useContainerWidth,
  adaptIndicatorsForViewport,
  getResponsiveIndicatorClasses,
  getTouchTargetSize,
  ResponsiveIndicatorCache,
  type ResponsiveConfig
} from '../../src/utils/responsiveIndicators';

import { ResponsiveIndicatorContainer } from '../../src/components/builder/ResultSide/ResponsiveIndicatorContainer';
import { ResponsivePropertyIndicator } from '../../src/components/builder/ResultSide/ResponsivePropertyIndicator';
import { type PropertyIndicatorData } from '../../src/utils/responsiveIndicatorTypes';

// Mock ResizeObserver for container width testing
const mockResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  disconnect: vi.fn(),
  unobserve: vi.fn(),
}));

global.ResizeObserver = mockResizeObserver;

describe('Responsive Indicators Utilities', () => {
  beforeEach(() => {
    // Reset viewport size for each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('useViewportSize', () => {
    it('should detect extra small viewport', () => {
      Object.defineProperty(window, 'innerWidth', { value: 400 });
      
      const { result } = renderHook(() => useViewportSize());
      
      expect(result.current).toBe('xs');
    });

    it('should detect small viewport', () => {
      Object.defineProperty(window, 'innerWidth', { value: 600 });
      
      const { result } = renderHook(() => useViewportSize());
      
      expect(result.current).toBe('sm');
    });

    it('should detect medium viewport', () => {
      Object.defineProperty(window, 'innerWidth', { value: 700 });
      
      const { result } = renderHook(() => useViewportSize());
      
      expect(result.current).toBe('md');
    });

    it('should detect large viewport', () => {
      Object.defineProperty(window, 'innerWidth', { value: 900 });
      
      const { result } = renderHook(() => useViewportSize());
      
      expect(result.current).toBe('lg');
    });

    it('should respond to window resize', async () => {
      const { result } = renderHook(() => useViewportSize());
      
      // Start with large viewport
      expect(result.current).toBe('lg');
      
      // Resize to mobile
      Object.defineProperty(window, 'innerWidth', { value: 400 });
      
      act(() => {
        fireEvent(window, new Event('resize'));
      });
      
      // Wait for throttled update
      await waitFor(() => {
        expect(result.current).toBe('xs');
      }, { timeout: 200 });
    });
  });

  describe('useContainerWidth', () => {
    it('should track container width changes', () => {
      const mockRef = { current: document.createElement('div') };
      
      const { result } = renderHook(() => useContainerWidth(mockRef));
      
      expect(result.current).toBe(0);
      
      // Verify ResizeObserver was set up
      expect(mockResizeObserver).toHaveBeenCalled();
    });

    it('should handle null container ref', () => {
      const mockRef = { current: null } as unknown as React.RefObject<HTMLElement>;
      
      const { result } = renderHook(() => useContainerWidth(mockRef));
      
      expect(result.current).toBe(0);
    });
  });

  describe('adaptIndicatorsForViewport', () => {
    const mockIndicators = [
      { id: 'error', priority: 10 },
      { id: 'warning', priority: 8 },
      { id: 'required', priority: 7 },
      { id: 'info', priority: 3 },
      { id: 'optional', priority: 1 }
    ];

    it('should limit indicators based on maxIndicators', () => {
      const result = adaptIndicatorsForViewport(mockIndicators, 3, false);
      
      expect(result.visibleIndicators).toHaveLength(3);
      expect(result.hiddenCount).toBe(2);
      expect(result.shouldShowOverflow).toBe(true);
    });

    it('should show only highest priority indicator when collapsed', () => {
      const result = adaptIndicatorsForViewport(mockIndicators, 3, true);
      
      expect(result.visibleIndicators).toHaveLength(1);
      expect(result.visibleIndicators[0]).toEqual(mockIndicators[0]);
      expect(result.hiddenCount).toBe(4);
      expect(result.shouldShowOverflow).toBe(true);
    });

    it('should show all indicators when maxIndicators is sufficient', () => {
      const result = adaptIndicatorsForViewport(mockIndicators, 10, false);
      
      expect(result.visibleIndicators).toHaveLength(5);
      expect(result.hiddenCount).toBe(0);
      expect(result.shouldShowOverflow).toBe(false);
    });
  });

  describe('getResponsiveIndicatorClasses', () => {
    it('should generate correct classes for mobile', () => {
      const classes = getResponsiveIndicatorClasses('xs', 'xs', false);
      
      expect(classes.container).toContain('gap-0.5');
      expect(classes.container).toContain('px-1 py-0.5');
      expect(classes.indicator).toContain('w-3 h-3');
      expect(classes.indicator).toContain('border-0');
      expect(classes.label).toContain('hidden');
    });

    it('should generate correct classes for desktop', () => {
      const classes = getResponsiveIndicatorClasses('lg', 'md', true);
      
      expect(classes.container).toContain('gap-1.5');
      expect(classes.container).toContain('px-2 py-1');
      expect(classes.indicator).toContain('w-5 h-5');
      expect(classes.indicator).toContain('border');
      expect(classes.label).toContain('block');
      expect(classes.label).toContain('text-sm');
    });

    it('should hide labels on extra small screens even when showLabels is true', () => {
      const classes = getResponsiveIndicatorClasses('xs', 'sm', true);
      
      expect(classes.label).toContain('hidden');
    });
  });

  describe('getTouchTargetSize', () => {
    it('should provide appropriate touch targets for mobile', () => {
      const touchTarget = getTouchTargetSize('xs');
      
      expect(touchTarget.minTouchTarget).toBe('min-w-[44px] min-h-[44px]');
      expect(touchTarget.padding).toBe('p-2');
    });

    it('should provide smaller targets for desktop', () => {
      const touchTarget = getTouchTargetSize('xl');
      
      expect(touchTarget.minTouchTarget).toBe('min-w-[32px] min-h-[32px]');
      expect(touchTarget.padding).toBe('p-1');
    });
  });

  describe('ResponsiveIndicatorCache', () => {
    let cache: ResponsiveIndicatorCache;

    beforeEach(() => {
      cache = new ResponsiveIndicatorCache();
    });

    it('should cache and retrieve values', () => {
      const factory = vi.fn(() => ({ test: 'value' }));
      
      const result1 = cache.get('test-key', factory);
      const result2 = cache.get('test-key', factory);
      
      expect(factory).toHaveBeenCalledTimes(1);
      expect(result1).toEqual(result2);
    });

    it('should limit cache size to prevent memory leaks', () => {
      // Fill cache beyond limit
      for (let i = 0; i < 105; i++) {
        cache.get(`key-${i}`, () => ({ value: i }));
      }
      
      // First key should have been evicted
      const factory = vi.fn(() => ({ test: 'new' }));
      cache.get('key-0', factory);
      
      expect(factory).toHaveBeenCalled();
    });

    it('should clear all cached values', () => {
      cache.get('test-1', () => ({ value: 1 }));
      cache.get('test-2', () => ({ value: 2 }));
      
      cache.clear();
      
      const factory = vi.fn(() => ({ value: 'new' }));
      cache.get('test-1', factory);
      
      expect(factory).toHaveBeenCalled();
    });
  });
});

describe('ResponsiveIndicatorContainer', () => {
  const mockItems = [
    {
      id: 'error',
      component: <span>Error</span>,
      priority: 10,
      tooltip: 'Error indicator'
    },
    {
      id: 'warning', 
      component: <span>Warning</span>,
      priority: 8,
      tooltip: 'Warning indicator'
    },
    {
      id: 'info',
      component: <span>Info</span>,
      priority: 3,
      tooltip: 'Info indicator'
    }
  ];

  beforeEach(() => {
    Object.defineProperty(window, 'innerWidth', { value: 1024 });
  });

  it('should render visible indicators', () => {
    render(<ResponsiveIndicatorContainer items={mockItems} />);
    
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Info')).toBeInTheDocument();
  });

  it('should show overflow menu when indicators exceed max', () => {
    const config: ResponsiveConfig = {
      maxIndicators: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, '2xl': 1 },
      indicatorSizes: { xs: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'md', '2xl': 'lg' },
      showLabels: { xs: false, sm: false, md: true, lg: true, xl: true, '2xl': true },
      collapseThreshold: 320
    };
    
    render(<ResponsiveIndicatorContainer items={mockItems} config={config} />);
    
    expect(screen.getByTestId('overflow-button')).toBeInTheDocument();
    expect(screen.getByTestId('overflow-count')).toHaveTextContent('2');
  });

  it('should handle indicator clicks', () => {
    const onIndicatorClick = vi.fn();
    
    render(
      <ResponsiveIndicatorContainer 
        items={mockItems} 
        onIndicatorClick={onIndicatorClick}
      />
    );
    
    fireEvent.click(screen.getByTestId('indicator-error'));
    
    expect(onIndicatorClick).toHaveBeenCalledWith('error');
  });

  it('should open overflow menu on click', () => {
    const config: ResponsiveConfig = {
      maxIndicators: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1, '2xl': 1 },
      indicatorSizes: { xs: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'md', '2xl': 'lg' },
      showLabels: { xs: false, sm: false, md: true, lg: true, xl: true, '2xl': true },
      collapseThreshold: 320
    };
    
    render(<ResponsiveIndicatorContainer items={mockItems} config={config} />);
    
    fireEvent.click(screen.getByTestId('overflow-button'));
    
    expect(screen.getByTestId('overflow-menu')).toBeInTheDocument();
  });

  it('should handle keyboard navigation', () => {
    const onIndicatorClick = vi.fn();
    
    render(
      <ResponsiveIndicatorContainer 
        items={mockItems} 
        onIndicatorClick={onIndicatorClick}
      />
    );
    
    const errorIndicator = screen.getByTestId('indicator-error');
    errorIndicator.focus();
    
    fireEvent.keyDown(errorIndicator, { key: 'Enter' });
    
    expect(onIndicatorClick).toHaveBeenCalledWith('error');
  });

  it('should render nothing when no items provided', () => {
    const { container } = render(<ResponsiveIndicatorContainer items={[]} />);
    
    expect(container.firstChild).toBeNull();
  });
});

describe('ResponsivePropertyIndicator', () => {
  const mockIndicators: PropertyIndicatorData[] = [
    {
      id: 'error-1',
      type: 'error',
      label: 'Validation Error',
      tooltip: 'This field has validation errors'
    },
    {
      id: 'warning-1',
      type: 'warning',
      label: 'Warning',
      tooltip: 'This field has warnings'
    },
    {
      id: 'required-1',
      type: 'required',
      label: 'Required',
      tooltip: 'This field is required'
    }
  ];

  it('should render property indicators responsively', () => {
    render(<ResponsivePropertyIndicator indicators={mockIndicators} />);
    
    expect(screen.getByText('Validation Error')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('should sort indicators by priority', () => {
    render(<ResponsivePropertyIndicator indicators={mockIndicators} />);
    
    const indicators = screen.getAllByRole('button');
    
    // Error should come first (highest priority)
    expect(indicators[0]).toHaveTextContent('Validation Error');
  });

  it('should handle indicator clicks', () => {
    const onIndicatorClick = vi.fn();
    
    render(
      <ResponsivePropertyIndicator 
        indicators={mockIndicators} 
        onIndicatorClick={onIndicatorClick}
      />
    );
    
    fireEvent.click(screen.getByText('Validation Error'));
    
    expect(onIndicatorClick).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'error-1',
        type: 'error'
      })
    );
  });

  it('should render nothing when no indicators provided', () => {
    const { container } = render(<ResponsivePropertyIndicator indicators={[]} />);
    
    expect(container.firstChild).toBeNull();
  });

  it('should apply custom responsive config', () => {
    const customConfig: ResponsiveConfig = {
      maxIndicators: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3, '2xl': 3 },
      indicatorSizes: { xs: 'xs', sm: 'sm', md: 'sm', lg: 'md', xl: 'md', '2xl': 'lg' },
      showLabels: { xs: false, sm: true, md: true, lg: true, xl: true, '2xl': true },
      collapseThreshold: 280
    };
    
    render(
      <ResponsivePropertyIndicator 
        indicators={mockIndicators} 
        responsiveConfig={customConfig}
      />
    );
    
    expect(screen.getByTestId('responsive-property-indicator')).toBeInTheDocument();
  });
});

describe('Responsive Integration', () => {
  it('should adapt to mobile viewport', async () => {
    Object.defineProperty(window, 'innerWidth', { value: 400 });
    
    const mockIndicators: PropertyIndicatorData[] = [
      { id: '1', type: 'error', label: 'Error' },
      { id: '2', type: 'warning', label: 'Warning' },
      { id: '3', type: 'info', label: 'Info' }
    ];
    
    render(<ResponsivePropertyIndicator indicators={mockIndicators} />);
    
    // Should show overflow button on mobile with restrictive config
    await waitFor(() => {
      const container = screen.getByTestId('responsive-property-indicator');
      expect(container).toHaveAttribute('data-viewport-size', 'xs');
    });
  });

  it('should handle container width constraints', () => {
    const mockIndicators: PropertyIndicatorData[] = [
      { id: '1', type: 'error', label: 'Error' },
      { id: '2', type: 'warning', label: 'Warning' }
    ];
    
    render(
      <ResponsivePropertyIndicator 
        indicators={mockIndicators} 
        maxWidth={200}
      />
    );
    
    const container = screen.getByTestId('responsive-property-indicator');
    expect(container).toHaveStyle({ maxWidth: '200px' });
  });
});