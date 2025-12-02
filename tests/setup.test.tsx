/**
 * Sample test to verify testing setup
 */

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SEO } from '@/components/common/SEO';

describe('Testing Setup', () => {
  it('should render components', () => {
    render(<SEO title="Test Title" />);
    expect(document.title).toBe('Test Title');
  });

  it('should perform basic assertions', () => {
    expect(1 + 1).toBe(2);
  });
});
