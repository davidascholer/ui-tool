/**
 * Tailwind Parser Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 2 (T020)
 * Tests for Tailwind class parsing accuracy and color/spacing extraction
 */

import { describe, it, expect } from 'vitest';

// Mock functions that will be implemented in T023
const mockParseTailwindColors = (classes: string) => {
  // Mock implementation for testing
  const colorClasses = classes.split(' ').filter(cls => {
    // Match background colors: bg-red-500, bg-white, bg-blue-100, etc.
    if (cls.match(/^bg-\w+(-\d+)?$/)) return true;
    // Match text colors: text-white, text-red-500, text-black, etc.
    if (cls.match(/^text-\w+(-\d+)?$/)) return true;
    // Match border colors: border-red-500, border-gray-300, etc. (but not border-2, border-t, etc.)
    if (cls.match(/^border-[a-z]+(-\d+)?$/)) return true;
    return false;
  });
  return colorClasses;
};

const mockParseTailwindSpacing = (classes: string) => {
  // Mock implementation for testing  
  const spacingClasses = classes.split(' ').filter(cls =>
    cls.startsWith('p-') || cls.startsWith('px-') || cls.startsWith('py-') ||
    cls.startsWith('m-') || cls.startsWith('mx-') || cls.startsWith('my-') ||
    cls.startsWith('gap-') || cls.startsWith('space-')
  );
  return spacingClasses;
};

const mockConvertTailwindColorToHex = (colorClass: string) => {
  // Mock color conversion map for testing
  const colorMap: Record<string, string> = {
    'bg-red-500': '#ef4444',
    'bg-blue-500': '#3b82f6',
    'bg-green-500': '#22c55e',
    'bg-yellow-500': '#eab308',
    'bg-purple-500': '#a855f7',
    'bg-pink-500': '#ec4899',
    'text-white': '#ffffff',
    'text-black': '#000000',
    'text-gray-500': '#6b7280',
    'border-red-500': '#ef4444',
    'border-blue-500': '#3b82f6'
  };
  return colorMap[colorClass] || '#000000';
};

const mockConvertTailwindSpacingToPixels = (spacingClass: string) => {
  // Mock spacing conversion map for testing
  const spacingMap: Record<string, number> = {
    'p-1': 4, 'p-2': 8, 'p-3': 12, 'p-4': 16, 'p-5': 20, 'p-6': 24,
    'px-1': 4, 'px-2': 8, 'px-3': 12, 'px-4': 16, 'px-5': 20, 'px-6': 24,
    'py-1': 4, 'py-2': 8, 'py-3': 12, 'py-4': 16, 'py-5': 20, 'py-6': 24,
    'm-1': 4, 'm-2': 8, 'm-3': 12, 'm-4': 16, 'm-5': 20, 'm-6': 24,
    'mx-1': 4, 'mx-2': 8, 'mx-3': 12, 'mx-4': 16, 'mx-5': 20, 'mx-6': 24,
    'my-1': 4, 'my-2': 8, 'my-3': 12, 'my-4': 16, 'my-5': 20, 'my-6': 24,
    'gap-1': 4, 'gap-2': 8, 'gap-3': 12, 'gap-4': 16, 'gap-5': 20,
    'space-x-1': 4, 'space-x-2': 8, 'space-y-1': 4, 'space-y-2': 8
  };
  return spacingMap[spacingClass] || 0;
};

describe('Tailwind Class Parsing', () => {
  describe('Color Class Extraction', () => {
    it('extracts background color classes correctly', () => {
      const classes = 'bg-blue-500 text-white p-4 m-2 rounded-lg';
      const colors = mockParseTailwindColors(classes);
      
      expect(colors).toContain('bg-blue-500');
      expect(colors).toContain('text-white');
      expect(colors).not.toContain('p-4');
      expect(colors).not.toContain('rounded-lg');
    });

    it('extracts text color classes correctly', () => {
      const classes = 'text-red-500 bg-white border-gray-300 px-4';
      const colors = mockParseTailwindColors(classes);
      
      expect(colors).toContain('text-red-500');
      expect(colors).toContain('bg-white');
      expect(colors).toContain('border-gray-300');
      expect(colors).not.toContain('px-4');
    });

    it('extracts border color classes correctly', () => {
      const classes = 'border-2 border-red-500 bg-blue-100 text-gray-800';
      const colors = mockParseTailwindColors(classes);
      
      expect(colors).toContain('border-red-500');
      expect(colors).toContain('bg-blue-100');
      expect(colors).toContain('text-gray-800');
      expect(colors).not.toContain('border-2');
    });

    it('handles classes with no color classes', () => {
      const classes = 'flex justify-center items-center p-4 m-2 rounded';
      const colors = mockParseTailwindColors(classes);
      
      expect(colors).toHaveLength(0);
    });

    it('handles empty or invalid class strings', () => {
      expect(mockParseTailwindColors('')).toHaveLength(0);
      expect(mockParseTailwindColors('   ')).toHaveLength(0);
      expect(mockParseTailwindColors('invalid-class')).toHaveLength(0);
    });
  });

  describe('Spacing Class Extraction', () => {
    it('extracts padding classes correctly', () => {
      const classes = 'p-4 px-2 py-6 bg-blue-500 text-white';
      const spacing = mockParseTailwindSpacing(classes);
      
      expect(spacing).toContain('p-4');
      expect(spacing).toContain('px-2');
      expect(spacing).toContain('py-6');
      expect(spacing).not.toContain('bg-blue-500');
    });

    it('extracts margin classes correctly', () => {
      const classes = 'm-2 mx-4 my-1 rounded-lg flex';
      const spacing = mockParseTailwindSpacing(classes);
      
      expect(spacing).toContain('m-2');
      expect(spacing).toContain('mx-4');
      expect(spacing).toContain('my-1');
      expect(spacing).not.toContain('rounded-lg');
    });

    it('extracts gap and space classes correctly', () => {
      const classes = 'flex gap-4 space-x-2 space-y-1 p-3';
      const spacing = mockParseTailwindSpacing(classes);
      
      expect(spacing).toContain('gap-4');
      expect(spacing).toContain('space-x-2');
      expect(spacing).toContain('space-y-1');
      expect(spacing).toContain('p-3');
    });

    it('handles classes with no spacing classes', () => {
      const classes = 'bg-red-500 text-white flex justify-center rounded';
      const spacing = mockParseTailwindSpacing(classes);
      
      expect(spacing).toHaveLength(0);
    });
  });

  describe('Color Conversion Accuracy', () => {
    it('converts standard Tailwind colors to correct hex values', () => {
      expect(mockConvertTailwindColorToHex('bg-red-500')).toBe('#ef4444');
      expect(mockConvertTailwindColorToHex('bg-blue-500')).toBe('#3b82f6');
      expect(mockConvertTailwindColorToHex('bg-green-500')).toBe('#22c55e');
      expect(mockConvertTailwindColorToHex('text-white')).toBe('#ffffff');
      expect(mockConvertTailwindColorToHex('text-black')).toBe('#000000');
    });

    it('converts border colors correctly', () => {
      expect(mockConvertTailwindColorToHex('border-red-500')).toBe('#ef4444');
      expect(mockConvertTailwindColorToHex('border-blue-500')).toBe('#3b82f6');
    });

    it('handles unknown color classes with fallback', () => {
      expect(mockConvertTailwindColorToHex('bg-custom-500')).toBe('#000000');
      expect(mockConvertTailwindColorToHex('text-unknown')).toBe('#000000');
    });

    it('validates color format consistency', () => {
      const hexPattern = /^#[0-9a-f]{6}$/i;
      
      expect(mockConvertTailwindColorToHex('bg-red-500')).toMatch(hexPattern);
      expect(mockConvertTailwindColorToHex('text-white')).toMatch(hexPattern);
      expect(mockConvertTailwindColorToHex('border-blue-500')).toMatch(hexPattern);
    });
  });

  describe('Spacing Conversion Accuracy', () => {
    it('converts padding values correctly', () => {
      expect(mockConvertTailwindSpacingToPixels('p-1')).toBe(4);
      expect(mockConvertTailwindSpacingToPixels('p-4')).toBe(16);
      expect(mockConvertTailwindSpacingToPixels('px-2')).toBe(8);
      expect(mockConvertTailwindSpacingToPixels('py-6')).toBe(24);
    });

    it('converts margin values correctly', () => {
      expect(mockConvertTailwindSpacingToPixels('m-2')).toBe(8);
      expect(mockConvertTailwindSpacingToPixels('mx-4')).toBe(16);
      expect(mockConvertTailwindSpacingToPixels('my-3')).toBe(12);
    });

    it('converts gap and space values correctly', () => {
      expect(mockConvertTailwindSpacingToPixels('gap-2')).toBe(8);
      expect(mockConvertTailwindSpacingToPixels('gap-4')).toBe(16);
      expect(mockConvertTailwindSpacingToPixels('space-x-2')).toBe(8);
      expect(mockConvertTailwindSpacingToPixels('space-y-1')).toBe(4);
    });

    it('handles unknown spacing classes with fallback', () => {
      expect(mockConvertTailwindSpacingToPixels('p-unknown')).toBe(0);
      expect(mockConvertTailwindSpacingToPixels('custom-spacing')).toBe(0);
    });

    it('validates pixel value consistency', () => {
      // Test that the conversion maintains mathematical relationships
      expect(mockConvertTailwindSpacingToPixels('p-2')).toBe(8);
      expect(mockConvertTailwindSpacingToPixels('p-4')).toBe(16);
      expect(mockConvertTailwindSpacingToPixels('p-6')).toBe(24);
      
      // Each step should be 4px (0.25rem * 16px)
      const p2 = mockConvertTailwindSpacingToPixels('p-2');
      const p3 = mockConvertTailwindSpacingToPixels('p-3');
      const p4 = mockConvertTailwindSpacingToPixels('p-4');
      
      expect(p3 - p2).toBe(4);
      expect(p4 - p3).toBe(4);
    });
  });

  describe('Complex Class Parsing', () => {
    it('handles complex component class strings', () => {
      const complexClasses = 'flex items-center justify-between bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500';
      
      const colors = mockParseTailwindColors(complexClasses);
      const spacing = mockParseTailwindSpacing(complexClasses);
      
      // Should extract all relevant color classes
      expect(colors).toContain('bg-white');
      expect(colors).toContain('text-gray-900');
      expect(colors).toContain('border-gray-200');
      
      // Should extract all relevant spacing classes
      expect(spacing).toContain('px-4');
      expect(spacing).toContain('py-2');
      
      // Should not include non-color/spacing classes
      expect(colors).not.toContain('flex');
      expect(spacing).not.toContain('rounded-lg');
    });

    it('handles responsive and state variants correctly', () => {
      const responsiveClasses = 'bg-blue-500 md:bg-green-500 hover:bg-red-500 p-2 md:p-4 lg:p-6';
      
      // Parser should extract base classes and ignore variants for now
      // (Advanced variant handling can be added later)
      const colors = mockParseTailwindColors(responsiveClasses);
      const spacing = mockParseTailwindSpacing(responsiveClasses);
      
      expect(colors).toContain('bg-blue-500');
      expect(spacing).toContain('p-2');
    });

    it('handles duplicate and conflicting classes', () => {
      const duplicateClasses = 'bg-red-500 bg-blue-500 p-2 p-4 text-white text-black';
      
      const colors = mockParseTailwindColors(duplicateClasses);
      const spacing = mockParseTailwindSpacing(duplicateClasses);
      
      // Should extract all classes (conflict resolution handled by CSS cascade)
      expect(colors).toContain('bg-red-500');
      expect(colors).toContain('bg-blue-500');
      expect(spacing).toContain('p-2');
      expect(spacing).toContain('p-4');
    });

    it('maintains parsing performance with large class strings', () => {
      // Create a large class string
      const largeClassString = Array.from({ length: 100 }, (_, i) => 
        `class-${i} bg-color-${i} p-${i % 6 + 1} m-${i % 4 + 1}`
      ).join(' ');
      
      // Test should complete quickly (performance test)
      const start = performance.now();
      mockParseTailwindColors(largeClassString);
      mockParseTailwindSpacing(largeClassString);
      const end = performance.now();
      
      // Should complete within reasonable time (adjust as needed)
      expect(end - start).toBeLessThan(100); // 100ms threshold
    });
  });

  describe('Edge Cases', () => {
    it('handles malformed class strings gracefully', () => {
      const malformedClasses = '  bg-blue-500    text-white  p-4   ';
      
      const colors = mockParseTailwindColors(malformedClasses);
      const spacing = mockParseTailwindSpacing(malformedClasses);
      
      expect(colors).toContain('bg-blue-500');
      expect(colors).toContain('text-white');
      expect(spacing).toContain('p-4');
    });

    it('handles special characters in class names', () => {
      const specialClasses = 'bg-blue-500/50 text-white/90 p-4';
      
      // For now, should handle basic classes and ignore opacity modifiers
      const spacing = mockParseTailwindSpacing(specialClasses);
      
      expect(spacing).toContain('p-4');
      // Complex opacity handling can be added later if needed
    });

    it('validates parsing consistency across multiple calls', () => {
      const testClasses = 'bg-blue-500 text-white p-4 m-2';
      
      const colors1 = mockParseTailwindColors(testClasses);
      const colors2 = mockParseTailwindColors(testClasses);
      const spacing1 = mockParseTailwindSpacing(testClasses);
      const spacing2 = mockParseTailwindSpacing(testClasses);
      
      expect(colors1).toEqual(colors2);
      expect(spacing1).toEqual(spacing2);
    });
  });
});