/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PerformanceMonitoringDashboard } from '../../src/components/builder/ResultSide/PerformanceMonitoringDashboard';

// Mock hierarchyLogger
vi.mock('../../src/utils/hierarchyLogger', () => ({
  hierarchyLogger: {
    getEntries: vi.fn(() => [])
  }
}));

// Mock useHierarchyLogger
vi.mock('../../src/hooks/useHierarchyLogger', () => ({
  useHierarchyLogger: vi.fn(() => ({
    log: vi.fn(),
    logPerformance: vi.fn(),
    logError: vi.fn(),
    logAccessibility: vi.fn(),
    logAnalytics: vi.fn()
  }))
}));

describe('Performance Dashboard - Disabled Mode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render when not visible', () => {
    render(
      <PerformanceMonitoringDashboard 
        isVisible={false}
        position="top-right"
      />
    );
    
    // Should not render anything when not visible
    expect(screen.queryByTestId('performance-dashboard')).not.toBeInTheDocument();
  });

  it('should render when visible', () => {
    render(
      <PerformanceMonitoringDashboard 
        isVisible={true}
        position="top-right"
      />
    );
    
    // Should render when visible
    expect(screen.getByTestId('performance-dashboard')).toBeInTheDocument();
  });
});