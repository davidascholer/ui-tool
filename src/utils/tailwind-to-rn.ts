/**
 * Tailwind to React Native Style Conversion
 * Maps common Tailwind CSS classes to React Native StyleSheet properties
 * Feature 003: Component Tracking and Code Export
 */

type RNStyle = Record<string, string | number>;

/**
 * Mapping table for common Tailwind classes to React Native styles
 * Based on research findings (RT-001)
 */
export const tailwindToRN: Record<string, RNStyle> = {
  // Flexbox
  'flex': { display: 'flex' },
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'flex-1': { flex: 1 },
  'items-start': { alignItems: 'flex-start' },
  'items-center': { alignItems: 'center' },
  'items-end': { alignItems: 'flex-end' },
  'justify-start': { justifyContent: 'flex-start' },
  'justify-center': { justifyContent: 'center' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-between': { justifyContent: 'space-between' },

  // Spacing - Padding
  'p-0': { padding: 0 },
  'p-1': { padding: 4 },
  'p-2': { padding: 8 },
  'p-3': { padding: 12 },
  'p-4': { padding: 16 },
  'p-5': { padding: 20 },
  'p-6': { padding: 24 },
  'p-8': { padding: 32 },
  'px-0': { paddingHorizontal: 0 },
  'px-1': { paddingHorizontal: 4 },
  'px-2': { paddingHorizontal: 8 },
  'px-3': { paddingHorizontal: 12 },
  'px-4': { paddingHorizontal: 16 },
  'px-5': { paddingHorizontal: 20 },
  'px-6': { paddingHorizontal: 24 },
  'px-8': { paddingHorizontal: 32 },
  'py-0': { paddingVertical: 0 },
  'py-1': { paddingVertical: 4 },
  'py-2': { paddingVertical: 8 },
  'py-3': { paddingVertical: 12 },
  'py-4': { paddingVertical: 16 },
  'py-5': { paddingVertical: 20 },
  'py-6': { paddingVertical: 24 },
  'py-8': { paddingVertical: 32 },

  // Spacing - Margin
  'm-0': { margin: 0 },
  'm-1': { margin: 4 },
  'm-2': { margin: 8 },
  'm-3': { margin: 12 },
  'm-4': { margin: 16 },
  'm-5': { margin: 20 },
  'm-6': { margin: 24 },
  'm-8': { margin: 32 },
  'mx-0': { marginHorizontal: 0 },
  'mx-1': { marginHorizontal: 4 },
  'mx-2': { marginHorizontal: 8 },
  'mx-3': { marginHorizontal: 12 },
  'mx-4': { marginHorizontal: 16 },
  'mx-5': { marginHorizontal: 20 },
  'mx-6': { marginHorizontal: 24 },
  'mx-8': { marginHorizontal: 32 },
  'my-0': { marginVertical: 0 },
  'my-1': { marginVertical: 4 },
  'my-2': { marginVertical: 8 },
  'my-3': { marginVertical: 12 },
  'my-4': { marginVertical: 16 },
  'my-5': { marginVertical: 20 },
  'my-6': { marginVertical: 24 },
  'my-8': { marginVertical: 32 },

  // Colors - Background
  'bg-transparent': { backgroundColor: 'transparent' },
  'bg-white': { backgroundColor: '#ffffff' },
  'bg-black': { backgroundColor: '#000000' },
  'bg-gray-100': { backgroundColor: '#f3f4f6' },
  'bg-gray-200': { backgroundColor: '#e5e7eb' },
  'bg-gray-300': { backgroundColor: '#d1d5db' },
  'bg-gray-500': { backgroundColor: '#6b7280' },
  'bg-gray-700': { backgroundColor: '#374151' },
  'bg-gray-900': { backgroundColor: '#111827' },
  'bg-blue-500': { backgroundColor: '#3b82f6' },
  'bg-blue-600': { backgroundColor: '#2563eb' },
  'bg-red-500': { backgroundColor: '#ef4444' },
  'bg-green-500': { backgroundColor: '#10b981' },
  'bg-yellow-500': { backgroundColor: '#f59e0b' },

  // Colors - Text
  'text-white': { color: '#ffffff' },
  'text-black': { color: '#000000' },
  'text-gray-100': { color: '#f3f4f6' },
  'text-gray-300': { color: '#d1d5db' },
  'text-gray-500': { color: '#6b7280' },
  'text-gray-700': { color: '#374151' },
  'text-gray-900': { color: '#111827' },
  'text-blue-500': { color: '#3b82f6' },
  'text-blue-600': { color: '#2563eb' },
  'text-red-500': { color: '#ef4444' },
  'text-green-500': { color: '#10b981' },

  // Typography
  'text-xs': { fontSize: 12 },
  'text-sm': { fontSize: 14 },
  'text-base': { fontSize: 16 },
  'text-lg': { fontSize: 18 },
  'text-xl': { fontSize: 20 },
  'text-2xl': { fontSize: 24 },
  'text-3xl': { fontSize: 30 },
  'font-thin': { fontWeight: '100' },
  'font-normal': { fontWeight: '400' },
  'font-medium': { fontWeight: '500' },
  'font-semibold': { fontWeight: '600' },
  'font-bold': { fontWeight: '700' },
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },

  // Borders
  'border': { borderWidth: 1 },
  'border-0': { borderWidth: 0 },
  'border-2': { borderWidth: 2 },
  'border-4': { borderWidth: 4 },
  'border-gray-200': { borderColor: '#e5e7eb' },
  'border-gray-300': { borderColor: '#d1d5db' },
  'border-gray-500': { borderColor: '#6b7280' },
  'border-blue-500': { borderColor: '#3b82f6' },
  'rounded': { borderRadius: 4 },
  'rounded-sm': { borderRadius: 2 },
  'rounded-md': { borderRadius: 6 },
  'rounded-lg': { borderRadius: 8 },
  'rounded-xl': { borderRadius: 12 },
  'rounded-2xl': { borderRadius: 16 },
  'rounded-full': { borderRadius: 9999 },

  // Sizing
  'w-full': { width: '100%' },
  'h-full': { height: '100%' },
};

/**
 * Classes that are not supported in React Native and require special handling
 * These will be documented in generated code comments
 */
export const unsupportedClasses = [
  'bg-gradient-to-r',
  'bg-gradient-to-l',
  'bg-gradient-to-t',
  'bg-gradient-to-b',
  'grid',
  'grid-cols-*',
  'hover:*',
  'focus:*',
  'active:*',
  'animate-*',
  'shadow-*',
  'backdrop-*',
];

/**
 * Convert Tailwind class string to React Native style object
 * @param classes Space-separated Tailwind class string
 * @returns React Native style object
 */
export function convertTailwindToRN(classes: string): RNStyle {
  const classList = classes.split(' ').filter(Boolean);
  const style: RNStyle = {};

  for (const cls of classList) {
    if (tailwindToRN[cls]) {
      Object.assign(style, tailwindToRN[cls]);
    }
  }

  return style;
}

/**
 * Check if a Tailwind class is supported for React Native conversion
 * @param className Tailwind class name
 * @returns true if supported, false otherwise
 */
export function isSupportedClass(className: string): boolean {
  if (tailwindToRN[className]) {
    return true;
  }

  // Check against unsupported patterns
  for (const pattern of unsupportedClasses) {
    if (pattern.endsWith('*') && className.startsWith(pattern.slice(0, -1))) {
      return false;
    }
    if (className === pattern) {
      return false;
    }
  }

  return false;
}

/**
 * Get list of unsupported classes from a Tailwind class string
 * @param classes Space-separated Tailwind class string
 * @returns Array of unsupported class names
 */
export function getUnsupportedClasses(classes: string): string[] {
  const classList = classes.split(' ').filter(Boolean);
  return classList.filter((cls) => !isSupportedClass(cls) && !tailwindToRN[cls]);
}
