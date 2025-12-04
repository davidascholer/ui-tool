import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import PerformanceMonitoringDashboard from '../../src/components/builder/ResultSide/PerformanceMonitoringDashboard';
import { hierarchyLogger, logPerformance } from '../../src/utils/hierarchyLogger';

// Mock the performance API
const mockPerformance = {
  ...performance,
  now: vi.fn(() => 1000),
  memory: {
    usedJSHeapSize: 50 * 1024 * 1024 // 50MB
  }
};

Object.defineProperty(global, 'performance', {
  value: mockPerformance,
  writable: true
});

describe('PerformanceMonitoringDashboard', () => {
  beforeEach(() => {
    // Clear any existing log entries
    hierarchyLogger.clear();
    vi.clearAllMocks();
    vi.clearAllTimers();
    
    // Reset performance.now mock
    mockPerformance.now.mockReturnValue(1000);
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('should render with default configuration', () => {
    render(<PerformanceMonitoringDashboard />);
    
    expect(screen.getByLabelText('Performance monitoring dashboard')).toBeInTheDocument();
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  it('should be minimizable and expandable', async () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Should be expanded by default
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
    
    // Click minimize button
    const minimizeButton = screen.getByLabelText('Minimize dashboard');
    fireEvent.click(minimizeButton);
    
    // Should be minimized (only show activity icon)
    expect(screen.queryByText('Performance Monitor')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Expand performance dashboard')).toBeInTheDocument();
    
    // Click expand button
    const expandButton = screen.getByLabelText('Expand performance dashboard');
    fireEvent.click(expandButton);
    
    // Should be expanded again
    expect(screen.getByText('Performance Monitor')).toBeInTheDocument();
  });

  it('should not render when isVisible is false', () => {
    render(<PerformanceMonitoringDashboard isVisible={false} />);
    
    expect(screen.queryByLabelText('Performance monitoring dashboard')).not.toBeInTheDocument();
  });

  it('should start compact when compact prop is true', () => {
    render(<PerformanceMonitoringDashboard compact={true} />);
    
    // Should be minimized by default when compact is true
    expect(screen.queryByText('Performance Monitor')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Expand performance dashboard')).toBeInTheDocument();
  });

  it('should switch between tabs', async () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Should start on metrics tab
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Metrics');
    
    // Click health tab
    const healthTab = screen.getByRole('tab', { name: /Health/ });
    fireEvent.click(healthTab);
    
    // Should switch to health tab
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Health');
    
    // Click charts tab
    const chartsTab = screen.getByRole('tab', { name: /Charts/ });
    fireEvent.click(chartsTab);
    
    // Should switch to charts tab
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent('Charts');
  });

  it('should display performance metrics', async () => {
    // Add some test log entries for metrics calculation
    hierarchyLogger.info('hierarchy', 'Test hierarchy update', {});
    hierarchyLogger.startTiming('render-test');
    hierarchyLogger.endTiming('render-test', 'performance', 'render', {});
    hierarchyLogger.startTiming('update-test');
    hierarchyLogger.endTiming('update-test', 'performance', 'update', {});
    
    render(<PerformanceMonitoringDashboard />);
    
    // Wait for metrics to be calculated
    await waitFor(() => {
      expect(screen.getByText('Update Frequency')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Avg Update Time')).toBeInTheDocument();
    expect(screen.getByText('Error Rate')).toBeInTheDocument();
    expect(screen.getByText('Response Time')).toBeInTheDocument();
  });

  it('should show health indicators', async () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Switch to health tab
    const healthTab = screen.getByRole('tab', { name: /Health/ });
    fireEvent.click(healthTab);
    
    // Wait for health indicators to appear
    await waitFor(() => {
      expect(screen.getByText('Hierarchy System')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Update Engine')).toBeInTheDocument();
    expect(screen.getByText('Property Indicators')).toBeInTheDocument();
  });

  it('should show charts with trend data', async () => {
    // Add some performance data
    logPerformance('render', 25, { componentCount: 3 });
    logPerformance('render', 35, { componentCount: 4 });
    logPerformance('render', 40, { componentCount: 5 });
    
    render(<PerformanceMonitoringDashboard />);
    
    // Switch to charts tab
    const chartsTab = screen.getByRole('tab', { name: /Charts/ });
    fireEvent.click(chartsTab);
    
    // Wait for charts to appear
    await waitFor(() => {
      expect(screen.getByText('Update Time Trend')).toBeInTheDocument();
    });
    
    expect(screen.getByText('Real-time monitoring active')).toBeInTheDocument();
    expect(screen.getByText('Updates every 2 seconds • Data retained for 5 minutes')).toBeInTheDocument();
  });

  it('should update metrics in real-time', async () => {
    vi.useFakeTimers();
    
    render(<PerformanceMonitoringDashboard />);
    
    // Initial state - should have metrics
    await waitFor(() => {
      expect(screen.getByText('Update Frequency')).toBeInTheDocument();
    });
    
    // Add new log entries
    logPerformance('render', 100, { componentCount: 10 });
    hierarchyLogger.error('hierarchy', 'Test error', { componentId: 'TestComponent' });
    
    // Advance timers to trigger update
    act(() => {
      vi.advanceTimersByTime(3000); // Advance by 3 seconds (more than 2s update interval)
    });
    
    // Metrics should be recalculated
    await waitFor(() => {
      // The error we added should affect the error rate
      expect(screen.getByText('Error Rate')).toBeInTheDocument();
    });
    
    vi.useRealTimers();
  });

  it('should position correctly based on position prop', () => {
    const { rerender } = render(<PerformanceMonitoringDashboard position="top-left" />);
    let dashboard = screen.getByLabelText('Performance monitoring dashboard');
    expect(dashboard).toHaveClass('top-4', 'left-4');
    
    rerender(<PerformanceMonitoringDashboard position="bottom-right" />);
    dashboard = screen.getByLabelText('Performance monitoring dashboard');
    expect(dashboard).toHaveClass('bottom-4', 'right-4');
    
    rerender(<PerformanceMonitoringDashboard position="top-right" />);
    dashboard = screen.getByLabelText('Performance monitoring dashboard');
    expect(dashboard).toHaveClass('top-4', 'right-4');
    
    rerender(<PerformanceMonitoringDashboard position="bottom-left" />);
    dashboard = screen.getByLabelText('Performance monitoring dashboard');
    expect(dashboard).toHaveClass('bottom-4', 'left-4');
  });

  it('should show status indicators with correct colors', async () => {
    // Add entries that will create different status conditions
    hierarchyLogger.error('hierarchy', 'Critical error', { componentId: 'TestComponent' });
    hierarchyLogger.error('hierarchy', 'Another error', { componentId: 'TestComponent2' });
    logPerformance('render', 200, { componentCount: 5 }); // 200ms - should be error status
    
    render(<PerformanceMonitoringDashboard />);
    
    // Wait for metrics to be calculated
    await waitFor(() => {
      expect(screen.getByText('Update Frequency')).toBeInTheDocument();
    });
    
    // Should show error status for metrics that exceed thresholds
    const avgUpdateTimeMetric = screen.getByText('Avg Update Time').closest('div');
    expect(avgUpdateTimeMetric).toHaveClass('text-red-600'); // Error status color
  });

  it('should handle memory usage metric when available', async () => {
    render(<PerformanceMonitoringDashboard />);
    
    // Wait for metrics calculation
    await waitFor(() => {
      expect(screen.getByText('Update Frequency')).toBeInTheDocument();
    });
    
    // Memory usage should be displayed since we mocked performance.memory
    expect(screen.getByText('Memory Usage')).toBeInTheDocument();
  });
});