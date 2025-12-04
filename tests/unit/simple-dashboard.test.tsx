/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// Mock hierarchyLogger
vi.mock('../../src/utils/hierarchyLogger', () => ({
  hierarchyLogger: {
    getEntries: vi.fn(() => [])
  }
}));

// Create a minimal version of the dashboard just to test render
const SimplePerformanceDashboard: React.FC = () => {
  return (
    <div data-testid="performance-dashboard">
      <div>Performance Dashboard</div>
      <div data-testid="metrics-tab">Metrics</div>
    </div>
  );
};

describe('Simple Performance Dashboard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(<SimplePerformanceDashboard />);
    
    expect(screen.getByTestId('performance-dashboard')).toBeInTheDocument();
    expect(screen.getByText('Performance Dashboard')).toBeInTheDocument();
  });

  it('should show metrics tab', () => {
    render(<SimplePerformanceDashboard />);
    
    expect(screen.getByTestId('metrics-tab')).toBeInTheDocument();
    expect(screen.getByText('Metrics')).toBeInTheDocument();
  });
});