/**
 * Unit tests for Tailwind to React Native style conversion
 * Feature 003: Component Tracking and Code Export - T040h
 */

import { describe, it, expect } from 'vitest';
import { 
  convertTailwindToRN, 
  isSupportedClass, 
  getUnsupportedClasses,
  tailwindToRN
} from '../../../src/utils/tailwind-to-rn';

describe('Tailwind to React Native Style Conversion', () => {
  describe('Basic Style Conversion', () => {
    it('converts basic background colors', () => {
      const styles = convertTailwindToRN('bg-blue-500');
      expect(styles).toEqual({ backgroundColor: '#3b82f6' });
    });

    it('converts text colors', () => {
      const styles = convertTailwindToRN('text-white');
      expect(styles).toEqual({ color: '#ffffff' });
    });

    it('converts padding classes', () => {
      const styles = convertTailwindToRN('p-4');
      expect(styles).toEqual({ padding: 16 });
    });

    it('converts margin classes', () => {
      const styles = convertTailwindToRN('m-2');
      expect(styles).toEqual({ margin: 8 });
    });

    it('converts flexbox properties', () => {
      const styles = convertTailwindToRN('flex flex-row items-center justify-between');
      expect(styles).toEqual({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      });
    });
  });

  describe('Multiple Class Conversion', () => {
    it('combines multiple styles correctly', () => {
      const styles = convertTailwindToRN('bg-blue-500 text-white p-4 rounded-lg');
      expect(styles).toEqual({
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        padding: 16,
        borderRadius: 8
      });
    });

    it('handles conflicting styles with last value winning', () => {
      const styles = convertTailwindToRN('p-2 p-4');
      expect(styles).toEqual({ padding: 16 }); // p-4 should win
    });

    it('handles mixed spacing classes', () => {
      const styles = convertTailwindToRN('px-4 py-2 mx-auto');
      expect(styles).toEqual({
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginHorizontal: 'auto' as string // Note: auto might not work in RN
      });
    });
  });

  describe('Typography Conversion', () => {
    it('converts font sizes', () => {
      const styles = convertTailwindToRN('text-lg text-xl text-2xl');
      expect(styles).toEqual({ fontSize: 30 }); // Last one wins (text-2xl)
    });

    it('converts font weights', () => {
      const styles = convertTailwindToRN('font-bold font-semibold');
      expect(styles).toEqual({ fontWeight: '600' }); // Last one wins
    });

    it('converts text alignment', () => {
      const styles = convertTailwindToRN('text-center');
      expect(styles).toEqual({ textAlign: 'center' });
    });

    it('combines typography styles', () => {
      const styles = convertTailwindToRN('text-xl font-bold text-center text-blue-600');
      expect(styles).toEqual({
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        color: '#2563eb'
      });
    });
  });

  describe('Border and Border Radius', () => {
    it('converts border width', () => {
      const styles = convertTailwindToRN('border border-2');
      expect(styles).toEqual({ borderWidth: 2 }); // border-2 wins
    });

    it('converts border colors', () => {
      const styles = convertTailwindToRN('border-gray-300');
      expect(styles).toEqual({ borderColor: '#d1d5db' });
    });

    it('converts border radius', () => {
      const styles = convertTailwindToRN('rounded-full');
      expect(styles).toEqual({ borderRadius: 9999 });
    });

    it('combines border styles', () => {
      const styles = convertTailwindToRN('border-2 border-blue-500 rounded-lg');
      expect(styles).toEqual({
        borderWidth: 2,
        borderColor: '#3b82f6',
        borderRadius: 8
      });
    });
  });

  describe('Layout and Sizing', () => {
    it('converts width and height', () => {
      const styles = convertTailwindToRN('w-full h-full');
      expect(styles).toEqual({
        width: '100%',
        height: '100%'
      });
    });

    it('converts flex properties', () => {
      const styles = convertTailwindToRN('flex-1 flex-col');
      expect(styles).toEqual({
        flex: 1,
        flexDirection: 'column'
      });
    });

    it('converts alignment properties', () => {
      const styles = convertTailwindToRN('items-start justify-end');
      expect(styles).toEqual({
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
      });
    });
  });

  describe('Color Variants', () => {
    it('converts different color shades', () => {
      const gray100 = convertTailwindToRN('bg-gray-100');
      const gray500 = convertTailwindToRN('bg-gray-500');
      const gray900 = convertTailwindToRN('bg-gray-900');

      expect(gray100).toEqual({ backgroundColor: '#f3f4f6' });
      expect(gray500).toEqual({ backgroundColor: '#6b7280' });
      expect(gray900).toEqual({ backgroundColor: '#111827' });
    });

    it('converts different color families', () => {
      const blue = convertTailwindToRN('bg-blue-500');
      const red = convertTailwindToRN('bg-red-500');
      const green = convertTailwindToRN('bg-green-500');
      const yellow = convertTailwindToRN('bg-yellow-500');

      expect(blue).toEqual({ backgroundColor: '#3b82f6' });
      expect(red).toEqual({ backgroundColor: '#ef4444' });
      expect(green).toEqual({ backgroundColor: '#10b981' });
      expect(yellow).toEqual({ backgroundColor: '#f59e0b' });
    });

    it('handles transparent colors', () => {
      const styles = convertTailwindToRN('bg-transparent');
      expect(styles).toEqual({ backgroundColor: 'transparent' });
    });
  });

  describe('Spacing Scale', () => {
    it('converts padding scale correctly', () => {
      expect(convertTailwindToRN('p-0')).toEqual({ padding: 0 });
      expect(convertTailwindToRN('p-1')).toEqual({ padding: 4 });
      expect(convertTailwindToRN('p-2')).toEqual({ padding: 8 });
      expect(convertTailwindToRN('p-3')).toEqual({ padding: 12 });
      expect(convertTailwindToRN('p-4')).toEqual({ padding: 16 });
      expect(convertTailwindToRN('p-5')).toEqual({ padding: 20 });
      expect(convertTailwindToRN('p-6')).toEqual({ padding: 24 });
      expect(convertTailwindToRN('p-8')).toEqual({ padding: 32 });
    });

    it('converts margin scale correctly', () => {
      expect(convertTailwindToRN('m-0')).toEqual({ margin: 0 });
      expect(convertTailwindToRN('m-1')).toEqual({ margin: 4 });
      expect(convertTailwindToRN('m-2')).toEqual({ margin: 8 });
      expect(convertTailwindToRN('m-4')).toEqual({ margin: 16 });
    });

    it('converts directional padding', () => {
      expect(convertTailwindToRN('px-4')).toEqual({ paddingHorizontal: 16 });
      expect(convertTailwindToRN('py-2')).toEqual({ paddingVertical: 8 });
      expect(convertTailwindToRN('mx-6')).toEqual({ marginHorizontal: 24 });
      expect(convertTailwindToRN('my-3')).toEqual({ marginVertical: 12 });
    });
  });

  describe('Class Support Detection', () => {
    it('identifies supported classes', () => {
      expect(isSupportedClass('bg-blue-500')).toBe(true);
      expect(isSupportedClass('text-white')).toBe(true);
      expect(isSupportedClass('p-4')).toBe(true);
      expect(isSupportedClass('flex')).toBe(true);
      expect(isSupportedClass('rounded-lg')).toBe(true);
    });

    it('identifies unsupported classes', () => {
      expect(isSupportedClass('hover:bg-blue-500')).toBe(false);
      expect(isSupportedClass('focus:ring-2')).toBe(false);
      expect(isSupportedClass('animate-pulse')).toBe(false);
      expect(isSupportedClass('shadow-lg')).toBe(false);
      expect(isSupportedClass('backdrop-blur')).toBe(false);
    });

    it('identifies pattern-based unsupported classes', () => {
      expect(isSupportedClass('grid-cols-3')).toBe(false);
      expect(isSupportedClass('grid-cols-12')).toBe(false);
      expect(isSupportedClass('bg-gradient-to-r')).toBe(false);
      expect(isSupportedClass('animate-spin')).toBe(false);
    });
  });

  describe('Unsupported Class Detection', () => {
    it('returns empty array for all supported classes', () => {
      const unsupported = getUnsupportedClasses('bg-blue-500 text-white p-4 flex rounded-lg');
      expect(unsupported).toEqual([]);
    });

    it('identifies unsupported classes in mixed string', () => {
      const unsupported = getUnsupportedClasses('bg-blue-500 hover:bg-blue-600 p-4 animate-pulse');
      expect(unsupported).toContain('hover:bg-blue-600');
      expect(unsupported).toContain('animate-pulse');
      expect(unsupported).not.toContain('bg-blue-500');
      expect(unsupported).not.toContain('p-4');
    });

    it('handles unknown classes', () => {
      const unsupported = getUnsupportedClasses('unknown-class another-unknown bg-blue-500');
      expect(unsupported).toContain('unknown-class');
      expect(unsupported).toContain('another-unknown');
      expect(unsupported).not.toContain('bg-blue-500');
    });
  });

  describe('Edge Cases', () => {
    it('handles empty class string', () => {
      const styles = convertTailwindToRN('');
      expect(styles).toEqual({});
    });

    it('handles whitespace-only string', () => {
      const styles = convertTailwindToRN('   ');
      expect(styles).toEqual({});
    });

    it('handles duplicate classes', () => {
      const styles = convertTailwindToRN('bg-blue-500 bg-blue-500 bg-blue-500');
      expect(styles).toEqual({ backgroundColor: '#3b82f6' });
    });

    it('handles mixed valid and invalid classes', () => {
      const styles = convertTailwindToRN('bg-blue-500 unknown-class p-4 another-unknown');
      expect(styles).toEqual({
        backgroundColor: '#3b82f6',
        padding: 16
      });
    });

    it('trims whitespace from class names', () => {
      const styles = convertTailwindToRN(' bg-blue-500  p-4 ');
      expect(styles).toEqual({
        backgroundColor: '#3b82f6',
        padding: 16
      });
    });
  });

  describe('Mapping Table Completeness', () => {
    it('has entries for all major Tailwind categories', () => {
      // Check that mapping table includes major categories
      expect(tailwindToRN).toHaveProperty('flex');
      expect(tailwindToRN).toHaveProperty('bg-blue-500');
      expect(tailwindToRN).toHaveProperty('text-white');
      expect(tailwindToRN).toHaveProperty('p-4');
      expect(tailwindToRN).toHaveProperty('m-4');
      expect(tailwindToRN).toHaveProperty('rounded');
      expect(tailwindToRN).toHaveProperty('border');
      expect(tailwindToRN).toHaveProperty('text-lg');
      expect(tailwindToRN).toHaveProperty('font-bold');
      expect(tailwindToRN).toHaveProperty('items-center');
      expect(tailwindToRN).toHaveProperty('justify-center');
    });

    it('has consistent value types', () => {
      // All values should be objects with string or number properties
      for (const [, styleObj] of Object.entries(tailwindToRN)) {
        expect(typeof styleObj).toBe('object');
        expect(styleObj).not.toBeNull();
        
        for (const [prop, value] of Object.entries(styleObj)) {
          expect(typeof prop).toBe('string');
          expect(['string', 'number'].includes(typeof value)).toBe(true);
        }
      }
    });
  });
});