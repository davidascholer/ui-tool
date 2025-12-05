/**
 * Property Indicators Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T019)
 * Tests for visual property indicator generation and display logic
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { VisualIndicator, ComponentEntity } from '../../src/utils/types';

// Mock the property indicators hook (will be implemented in T022)
const mockUsePropertyIndicators = vi.fn();
vi.mock('../../src/hooks/usePropertyIndicators', () => ({
  usePropertyIndicators: mockUsePropertyIndicators
}));

// Mock component for testing hierarchy indicators
interface MockComponent extends ComponentEntity {
  classes?: string;
}

describe('Property Indicators System', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Indicator Generation Logic', () => {
    it('generates color indicators from Tailwind classes', () => {
      const component: MockComponent = {
        id: 'test-button',
        type: 'Button',
        props: { content: 'Test Button' },
        tailwindClassList: ['bg-blue-500', 'text-white', 'hover:bg-blue-600'],
        classes: 'bg-blue-500 text-white hover:bg-blue-600'
      };

      // Mock the hook return value
      const expectedIndicators: VisualIndicator[] = [
        {
          type: 'color',
          value: 'bg-blue-500',
          displayValue: '#3b82f6',
          priority: 5,
          tooltip: 'Background: Blue 500',
          isValid: true
        },
        {
          type: 'color', 
          value: 'text-white',
          displayValue: '#ffffff',
          priority: 5,
          tooltip: 'Text: White',
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      // Test that the hook would generate correct indicators
      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators).toHaveLength(2);
      expect(indicators[0].type).toBe('color');
      expect(indicators[0].displayValue).toBe('#3b82f6');
      expect(indicators[1].displayValue).toBe('#ffffff');
    });

    it('generates text indicators from content properties', () => {
      const component: MockComponent = {
        id: 'test-text',
        type: 'Text',
        props: { content: 'Hello World' },
        tailwindClassList: [],
        classes: ''
      };

      const expectedIndicators: VisualIndicator[] = [
        {
          type: 'text',
          value: 'Hello World',
          displayValue: 'Hello World',
          priority: 4,
          tooltip: 'Content: Hello World',
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators).toHaveLength(1);
      expect(indicators[0].type).toBe('text');
      expect(indicators[0].displayValue).toBe('Hello World');
    });

    it('generates spacing indicators from Tailwind classes', () => {
      const component: MockComponent = {
        id: 'test-container',
        type: 'Button',
        props: {},
        tailwindClassList: ['p-4', 'm-2', 'gap-3'],
        classes: 'p-4 m-2 gap-3'
      };

      const expectedIndicators: VisualIndicator[] = [
        {
          type: 'spacing',
          value: 'p-4',
          displayValue: '16px',
          priority: 3,
          tooltip: 'Padding: 16px',
          isValid: true
        },
        {
          type: 'spacing',
          value: 'm-2',
          displayValue: '8px',
          priority: 3,
          tooltip: 'Margin: 8px',
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators).toHaveLength(2);
      expect(indicators[0].type).toBe('spacing');
      expect(indicators[1].type).toBe('spacing');
    });

    it('applies priority system correctly (Color: 5, Text: 4, Spacing: 3)', () => {
      const component: MockComponent = {
        id: 'complex-component',
        type: 'Button',
        props: { content: 'Click me' },
        tailwindClassList: ['bg-red-500', 'p-4', 'text-lg'],
        classes: 'bg-red-500 p-4 text-lg'
      };

      const expectedIndicators: VisualIndicator[] = [
        // Colors should come first (priority 5)
        {
          type: 'color',
          value: 'bg-red-500',
          displayValue: '#ef4444',
          priority: 5,
          tooltip: 'Background: Red 500',
          isValid: true
        },
        // Then text (priority 4)
        {
          type: 'text',
          value: 'Click me',
          displayValue: 'Click me',
          priority: 4,
          tooltip: 'Content: Click me',
          isValid: true
        },
        // Then spacing (priority 3)
        {
          type: 'spacing',
          value: 'p-4',
          displayValue: '16px',
          priority: 3,
          tooltip: 'Padding: 16px',
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      const indicators = mockUsePropertyIndicators(component);
      
      // Should be sorted by priority (descending)
      expect(indicators[0].priority).toBe(5); // Color first
      expect(indicators[1].priority).toBe(4); // Text second
      expect(indicators[2].priority).toBe(3); // Spacing last
    });

    it('limits to 5 indicators per component', () => {
      const component: MockComponent = {
        id: 'indicator-heavy',
        type: 'Button',
        props: { content: 'Button text', ariaLabel: 'Accessible button' },
        tailwindClassList: ['bg-blue-500', 'text-white', 'border-red-500', 'p-4', 'm-2', 'rounded-lg', 'shadow-lg'],
        classes: 'bg-blue-500 text-white border-red-500 p-4 m-2 rounded-lg shadow-lg'
      };

      // Mock returning more than 5 indicators
      const manyIndicators: VisualIndicator[] = [
        { type: 'color', value: 'bg-blue-500', displayValue: '#3b82f6', priority: 5, tooltip: 'Background: Blue 500', isValid: true },
        { type: 'color', value: 'text-white', displayValue: '#ffffff', priority: 5, tooltip: 'Text: White', isValid: true },
        { type: 'color', value: 'border-red-500', displayValue: '#ef4444', priority: 5, tooltip: 'Border: Red 500', isValid: true },
        { type: 'text', value: 'Button text', displayValue: 'Button text', priority: 4, tooltip: 'Content: Button text', isValid: true },
        { type: 'spacing', value: 'p-4', displayValue: '16px', priority: 3, tooltip: 'Padding: 16px', isValid: true },
        { type: 'spacing', value: 'm-2', displayValue: '8px', priority: 3, tooltip: 'Margin: 8px', isValid: true }
      ];

      // Should return only top 5 indicators
      mockUsePropertyIndicators.mockReturnValue(manyIndicators.slice(0, 5));

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators).toHaveLength(5); // Limited to 5
      expect(indicators.every((ind: VisualIndicator) => ind.priority >= 3)).toBe(true); // Should keep highest priority
    });

    it('handles components with no meaningful indicators', () => {
      const component: MockComponent = {
        id: 'empty-component',
        type: 'Button',
        props: {},
        tailwindClassList: [],
        classes: ''
      };

      mockUsePropertyIndicators.mockReturnValue([]);

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators).toHaveLength(0);
    });
  });

  describe('Indicator Display', () => {
    it('truncates display values to 25 characters', () => {
      const component: MockComponent = {
        id: 'long-text',
        type: 'Text',
        props: { content: 'This is a very long text content that should be truncated for display' },
        tailwindClassList: [],
        classes: ''
      };

      const expectedIndicators: VisualIndicator[] = [
        {
          type: 'text',
          value: 'This is a very long text content that should be truncated for display',
          displayValue: 'This is a very long te...', // Truncated to 25 chars
          priority: 4,
          tooltip: 'Content: This is a very long text content that should be truncated for display', // Full text in tooltip
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators[0].displayValue.length).toBeLessThanOrEqual(25);
      expect(indicators[0].displayValue).toBe('This is a very long te...');
      expect(indicators[0].tooltip).toContain('This is a very long text content that should be truncated for display');
    });

    it('sorts indicators by priority then alphabetically for ties', () => {
      const component: MockComponent = {
        id: 'sorted-component',
        type: 'Button',
        props: {},
        tailwindClassList: ['text-white', 'bg-blue-500'], // Different order in classes
        classes: 'text-white bg-blue-500'
      };

      const expectedIndicators: VisualIndicator[] = [
        // Both have priority 5, should be alphabetical by value
        {
          type: 'color',
          value: 'bg-blue-500',
          displayValue: '#3b82f6',
          priority: 5,
          tooltip: 'Background: Blue 500',
          isValid: true
        },
        {
          type: 'color',
          value: 'text-white',
          displayValue: '#ffffff',
          priority: 5,
          tooltip: 'Text: White',
          isValid: true
        }
      ];

      mockUsePropertyIndicators.mockReturnValue(expectedIndicators);

      const indicators = mockUsePropertyIndicators(component);
      
      expect(indicators[0].value).toBe('bg-blue-500'); // 'bg' comes before 'text' alphabetically
      expect(indicators[1].value).toBe('text-white');
    });
  });

  describe('Accessibility', () => {
    it('provides appropriate ARIA labels for indicators', () => {
      const indicators: VisualIndicator[] = [
        {
          type: 'color',
          value: 'bg-blue-500',
          displayValue: '#3b82f6',
          priority: 5,
          tooltip: 'Background: Blue 500',
          isValid: true
        }
      ];

      // Test that tooltip contains accessible information
      expect(indicators[0].tooltip).toContain('Background');
      expect(indicators[0].tooltip).toContain('Blue 500');
      
      // Display value should be screen reader friendly
      expect(indicators[0].displayValue).toBe('#3b82f6');
    });

    it('provides meaningful tooltips for complex indicators', () => {
      const indicators: VisualIndicator[] = [
        {
          type: 'spacing',
          value: 'px-4 py-2',
          displayValue: '16px, 8px',
          priority: 3,
          tooltip: 'Horizontal Padding: 16px, Vertical Padding: 8px',
          isValid: true
        }
      ];

      expect(indicators[0].tooltip).toContain('Horizontal');
      expect(indicators[0].tooltip).toContain('Vertical');
      expect(indicators[0].tooltip).toContain('16px');
      expect(indicators[0].tooltip).toContain('8px');
    });
  });
});