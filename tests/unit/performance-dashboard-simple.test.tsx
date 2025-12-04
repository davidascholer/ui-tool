import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PerformanceMonitoringDashboard from '../../src/components/builder/ResultSide/PerformanceMonitoringDashboard';
import { hierarchyLogger } from '../../src/utils/hierarchyLogger';

// Mock performance API
Object.defineProperty(global, 'performance', {
  value: {
    ...performance,
    now: vi.fn(() => 1000),
    memory: { usedJSHeapSize: 50 * 1024 * 1024 }
  },
  writable: true
});

describe('PerformanceMonitoringDashboard - Basic Tests', () => {
  beforeEach(() => {
    hierarchyLogger.clear();
    vi.clearAllMocks();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should render the dashboard', () => {
    render(<PerformanceMonitoringDashboard />);
    
    expect(screen.getByLabelText('Performance monitoring dashboard')).toBeInTheDocument();
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  it('should minimize and expand', () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Initially expanded
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
    
    // Minimize
    fireEvent.click(screen.getByLabelText('Minimize dashboard'));
    expect(screen.queryByText('Performance Monitor')).not.toBeInTheDocument();
    
    // Expand
    fireEvent.click(screen.getByLabelText('Expand performance dashboard'));
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  it('should switch tabs', () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Initially on metrics tab
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Metrics');
    
    // Switch to health tab
    fireEvent.click(screen.getByRole('tab', { name: /Health/ }));
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Health');
    
    // Switch to charts tab
    fireEvent.click(screen.getByRole('tab', { name: /Charts/ }));
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Charts');
  });

  it('should not render when invisible', () => {
    render(<PerformanceMonitoringDashboard isVisible={false} />);
    expect(screen.queryByLabelText('Performance monitoring dashboard')).not.toBeInTheDocument();
  });

  it('should render compact when specified', () => {
    render(<PerformanceMonitoringDashboard compact={true} />);
    
    // Should be minimized initially
    expect(screen.queryByText('Performance Monitor')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Expand performance dashboard')).toBeInTheDocument();
  });
});