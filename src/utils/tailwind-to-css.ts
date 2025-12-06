/**
 * Tailwind to CSS Style Conversion
 * Converts Tailwind utility classes to inline CSS styles for dynamic rendering
 * This allows the LiveView to display styles that haven't been compiled by Tailwind
 */

import type { CSSProperties } from 'react';

/**
 * Comprehensive mapping of Tailwind classes to CSS properties
 */
const tailwindToCSSMap: Record<string, Partial<CSSProperties>> = {
  // Display
  'block': { display: 'block' },
  'inline-block': { display: 'inline-block' },
  'inline': { display: 'inline' },
  'flex': { display: 'flex' },
  'inline-flex': { display: 'inline-flex' },
  'grid': { display: 'grid' },
  'hidden': { display: 'none' },

  // Flex Direction
  'flex-row': { flexDirection: 'row' },
  'flex-row-reverse': { flexDirection: 'row-reverse' },
  'flex-col': { flexDirection: 'column' },
  'flex-col-reverse': { flexDirection: 'column-reverse' },

  // Flex Wrap
  'flex-wrap': { flexWrap: 'wrap' },
  'flex-wrap-reverse': { flexWrap: 'wrap-reverse' },
  'flex-nowrap': { flexWrap: 'nowrap' },

  // Flex
  'flex-1': { flex: '1 1 0%' },
  'flex-auto': { flex: '1 1 auto' },
  'flex-initial': { flex: '0 1 auto' },
  'flex-none': { flex: 'none' },

  // Flex Grow
  'grow': { flexGrow: 1 },
  'grow-0': { flexGrow: 0 },

  // Flex Shrink
  'shrink': { flexShrink: 1 },
  'shrink-0': { flexShrink: 0 },

  // Justify Content
  'justify-start': { justifyContent: 'flex-start' },
  'justify-end': { justifyContent: 'flex-end' },
  'justify-center': { justifyContent: 'center' },
  'justify-between': { justifyContent: 'space-between' },
  'justify-around': { justifyContent: 'space-around' },
  'justify-evenly': { justifyContent: 'space-evenly' },

  // Align Items
  'items-start': { alignItems: 'flex-start' },
  'items-end': { alignItems: 'flex-end' },
  'items-center': { alignItems: 'center' },
  'items-baseline': { alignItems: 'baseline' },
  'items-stretch': { alignItems: 'stretch' },

  // Align Self
  'self-auto': { alignSelf: 'auto' },
  'self-start': { alignSelf: 'flex-start' },
  'self-end': { alignSelf: 'flex-end' },
  'self-center': { alignSelf: 'center' },
  'self-stretch': { alignSelf: 'stretch' },

  // Text Align
  'text-left': { textAlign: 'left' },
  'text-center': { textAlign: 'center' },
  'text-right': { textAlign: 'right' },
  'text-justify': { textAlign: 'justify' },

  // Font Weight
  'font-thin': { fontWeight: '100' },
  'font-extralight': { fontWeight: '200' },
  'font-light': { fontWeight: '300' },
  'font-normal': { fontWeight: '400' },
  'font-medium': { fontWeight: '500' },
  'font-semibold': { fontWeight: '600' },
  'font-bold': { fontWeight: '700' },
  'font-extrabold': { fontWeight: '800' },
  'font-black': { fontWeight: '900' },

  // Text Decoration
  'underline': { textDecoration: 'underline' },
  'line-through': { textDecoration: 'line-through' },
  'no-underline': { textDecoration: 'none' },

  // Text Transform
  'uppercase': { textTransform: 'uppercase' },
  'lowercase': { textTransform: 'lowercase' },
  'capitalize': { textTransform: 'capitalize' },
  'normal-case': { textTransform: 'none' },

  // Position
  'static': { position: 'static' },
  'fixed': { position: 'fixed' },
  'absolute': { position: 'absolute' },
  'relative': { position: 'relative' },
  'sticky': { position: 'sticky' },

  // Overflow
  'overflow-auto': { overflow: 'auto' },
  'overflow-hidden': { overflow: 'hidden' },
  'overflow-visible': { overflow: 'visible' },
  'overflow-scroll': { overflow: 'scroll' },
  'overflow-x-auto': { overflowX: 'auto' },
  'overflow-y-auto': { overflowY: 'auto' },
  'overflow-x-hidden': { overflowX: 'hidden' },
  'overflow-y-hidden': { overflowY: 'hidden' },

  // Cursor
  'cursor-auto': { cursor: 'auto' },
  'cursor-pointer': { cursor: 'pointer' },
  'cursor-not-allowed': { cursor: 'not-allowed' },

  // Border Style
  'border-solid': { borderStyle: 'solid' },
  'border-dashed': { borderStyle: 'dashed' },
  'border-dotted': { borderStyle: 'dotted' },
  'border-none': { borderStyle: 'none' },
};

// Spacing scale (Tailwind uses 0.25rem = 4px base)
const spacingScale: Record<string, string> = {
  '0': '0px',
  'px': '1px',
  '0.5': '0.125rem',
  '1': '0.25rem',
  '1.5': '0.375rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '14': '3.5rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '72': '18rem',
  '80': '20rem',
  '96': '24rem',
};

// Text size scale
const textSizeScale: Record<string, { fontSize: string; lineHeight: string }> = {
  'xs': { fontSize: '0.75rem', lineHeight: '1rem' },
  'sm': { fontSize: '0.875rem', lineHeight: '1.25rem' },
  'base': { fontSize: '1rem', lineHeight: '1.5rem' },
  'lg': { fontSize: '1.125rem', lineHeight: '1.75rem' },
  'xl': { fontSize: '1.25rem', lineHeight: '1.75rem' },
  '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
  '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
  '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
  '5xl': { fontSize: '3rem', lineHeight: '1' },
  '6xl': { fontSize: '3.75rem', lineHeight: '1' },
  '7xl': { fontSize: '4.5rem', lineHeight: '1' },
  '8xl': { fontSize: '6rem', lineHeight: '1' },
  '9xl': { fontSize: '8rem', lineHeight: '1' },
};

// Border radius scale
const borderRadiusScale: Record<string, string> = {
  'none': '0px',
  'sm': '0.125rem',
  '': '0.25rem',
  'md': '0.375rem',
  'lg': '0.5rem',
  'xl': '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  'full': '9999px',
};

/**
 * Parse a Tailwind class and convert it to CSS properties
 */
function parseTailwindClass(className: string): Partial<CSSProperties> | null {
  // Check static map first
  if (tailwindToCSSMap[className]) {
    return tailwindToCSSMap[className];
  }

  // Parse padding classes (p-, px-, py-, pt-, pr-, pb-, pl-)
  const paddingMatch = className.match(/^p([xytrbl])?-(.+)$/);
  if (paddingMatch) {
    const [, direction, value] = paddingMatch;
    const size = spacingScale[value];
    if (!size) return null;

    switch (direction) {
      case 'x': return { paddingLeft: size, paddingRight: size };
      case 'y': return { paddingTop: size, paddingBottom: size };
      case 't': return { paddingTop: size };
      case 'r': return { paddingRight: size };
      case 'b': return { paddingBottom: size };
      case 'l': return { paddingLeft: size };
      default: return { padding: size };
    }
  }

  // Parse margin classes (m-, mx-, my-, mt-, mr-, mb-, ml-)
  const marginMatch = className.match(/^m([xytrbl])?-(.+)$/);
  if (marginMatch) {
    const [, direction, value] = marginMatch;
    const size = spacingScale[value];
    if (!size) return null;

    switch (direction) {
      case 'x': return { marginLeft: size, marginRight: size };
      case 'y': return { marginTop: size, marginBottom: size };
      case 't': return { marginTop: size };
      case 'r': return { marginRight: size };
      case 'b': return { marginBottom: size };
      case 'l': return { marginLeft: size };
      default: return { margin: size };
    }
  }

  // Parse width classes (w-)
  const widthMatch = className.match(/^w-(.+)$/);
  if (widthMatch) {
    const value = widthMatch[1];
    if (value === 'full') return { width: '100%' };
    if (value === 'screen') return { width: '100vw' };
    if (value === 'auto') return { width: 'auto' };
    if (value.includes('/')) {
      const [num, denom] = value.split('/');
      return { width: `${(parseInt(num) / parseInt(denom)) * 100}%` };
    }
    const size = spacingScale[value];
    if (size) return { width: size };
  }

  // Parse height classes (h-)
  const heightMatch = className.match(/^h-(.+)$/);
  if (heightMatch) {
    const value = heightMatch[1];
    if (value === 'full') return { height: '100%' };
    if (value === 'screen') return { height: '100vh' };
    if (value === 'auto') return { height: 'auto' };
    const size = spacingScale[value];
    if (size) return { height: size };
  }

  // Parse gap classes
  const gapMatch = className.match(/^gap-([xy])?-?(.+)$/);
  if (gapMatch) {
    const [, direction, value] = gapMatch;
    const size = spacingScale[value];
    if (!size) return null;

    if (direction === 'x') return { columnGap: size };
    if (direction === 'y') return { rowGap: size };
    return { gap: size };
  }

  // Parse text size (text-)
  const textSizeMatch = className.match(/^text-(.+)$/);
  if (textSizeMatch) {
    const value = textSizeMatch[1];
    if (textSizeScale[value]) {
      return textSizeScale[value];
    }
  }

  // Parse text color (text-)
  const textColorMatch = className.match(/^text-(.+)-(\d+)$/);
  if (textColorMatch) {
    const [, color, shade] = textColorMatch;
    return { color: `var(--${color}-${shade}, currentColor)` };
  }

  // Parse background color (bg-)
  const bgColorMatch = className.match(/^bg-(.+)-(\d+)$/);
  if (bgColorMatch) {
    const [, color, shade] = bgColorMatch;
    return { backgroundColor: `var(--${color}-${shade}, transparent)` };
  }

  // Parse border width (border-)
  const borderMatch = className.match(/^border(-([xytrbl]))?(-(\d+))?$/);
  if (borderMatch) {
    const [, , direction, , width] = borderMatch;
    const borderWidth = width ? `${width}px` : '1px';

    if (!direction) return { borderWidth };
    switch (direction) {
      case 'x': return { borderLeftWidth: borderWidth, borderRightWidth: borderWidth };
      case 'y': return { borderTopWidth: borderWidth, borderBottomWidth: borderWidth };
      case 't': return { borderTopWidth: borderWidth };
      case 'r': return { borderRightWidth: borderWidth };
      case 'b': return { borderBottomWidth: borderWidth };
      case 'l': return { borderLeftWidth: borderWidth };
    }
  }

  // Parse border color (border-)
  const borderColorMatch = className.match(/^border-(.+)-(\d+)$/);
  if (borderColorMatch) {
    const [, color, shade] = borderColorMatch;
    return { borderColor: `var(--${color}-${shade}, currentColor)` };
  }

  // Parse border radius (rounded-)
  const roundedMatch = className.match(/^rounded(-(.+))?$/);
  if (roundedMatch) {
    const value = roundedMatch[2] || '';
    const radius = borderRadiusScale[value];
    if (radius) return { borderRadius: radius };
  }

  // Parse opacity (opacity-)
  const opacityMatch = className.match(/^opacity-(\d+)$/);
  if (opacityMatch) {
    const value = parseInt(opacityMatch[1]) / 100;
    return { opacity: value };
  }

  return null;
}

/**
 * Convert an array of Tailwind classes to a CSSProperties object
 */
export function tailwindClassesToCSS(classes: string[]): CSSProperties {
  const styles: CSSProperties = {};

  for (const className of classes) {
    const parsed = parseTailwindClass(className);
    if (parsed) {
      Object.assign(styles, parsed);
    }
  }

  return styles;
}

/**
 * Convert a space-separated string of Tailwind classes to a CSSProperties object
 */
export function tailwindStringToCSS(classString: string): CSSProperties {
  const classes = classString.split(/\s+/).filter(Boolean);
  return tailwindClassesToCSS(classes);
}
