import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HierarchyErrorBoundary from '../../src/components/builder/ResultSide/HierarchyErrorBoundary';

// Mock console.error to avoid noise in test output
const originalError = console.error;
beforeEach(() => {
  console.error = vi.fn();
});

afterEach(() => {
  console.error = originalError;
});

// Component that throws an error for testing
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div data-testid="no-error">No error</div>;
};

describe('HierarchyErrorBoundary', () => {
  it('should render children when there is no error', () => {
    render(
      <HierarchyErrorBoundary>
        <ThrowError shouldThrow={false} />
      </HierarchyErrorBoundary>
    );

    expect(screen.getByTestId('no-error')).toBeInTheDocument();
  });

  it('should render error UI when child component throws', () => {
    render(
      <HierarchyErrorBoundary>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(screen.getByText('Hierarchy View Error')).toBeInTheDocument();
    expect(screen.getAllByText('Test error message')[0]).toBeInTheDocument();
  });

  it('should show retry button with correct count', () => {
    render(
      <HierarchyErrorBoundary maxRetries={3}>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(screen.getByText('Retry (3 left)')).toBeInTheDocument();
  });

  it('should call onError handler when error occurs', () => {
    const onError = vi.fn();
    
    render(
      <HierarchyErrorBoundary onError={onError}>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(onError).toHaveBeenCalledWith(
      expect.any(Error),
      expect.objectContaining({
        componentStack: expect.any(String)
      })
    );
  });

  it('should render custom fallback when provided', () => {
    const CustomFallback = <div data-testid="custom-fallback">Custom error fallback</div>;
    
    render(
      <HierarchyErrorBoundary fallback={CustomFallback}>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
    expect(screen.queryByText('Hierarchy View Error')).not.toBeInTheDocument();
  });

  it('should not show retry button after max retries exceeded', () => {
    render(
      <HierarchyErrorBoundary maxRetries={0}>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(screen.queryByText(/Retry/)).not.toBeInTheDocument();
    expect(screen.getByText('Reset View')).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
  });

  it('should log error details to console', () => {
    const consoleSpy = vi.spyOn(console, 'error');
    
    render(
      <HierarchyErrorBoundary>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalledWith(
      'HierarchyErrorBoundary caught an error:',
      expect.objectContaining({
        timestamp: expect.any(String),
        error: expect.objectContaining({
          name: 'Error',
          message: 'Test error message',
        }),
        userAgent: expect.any(String),
        url: expect.any(String),
      })
    );
  });

  it('should show reset and reload buttons', () => {
    render(
      <HierarchyErrorBoundary>
        <ThrowError shouldThrow={true} />
      </HierarchyErrorBoundary>
    );

    expect(screen.getByText('Reset View')).toBeInTheDocument();
    expect(screen.getByText('Reload Page')).toBeInTheDocument();
  });
});