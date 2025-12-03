/**
 * Shared CSS class utilities for consistent styling across components
 */

// Color system using CSS variables
export const colors = {
  background: 'bg-[rgb(var(--color-background))]',
  foreground: 'text-[rgb(var(--color-foreground))]',
  muted: 'bg-[rgb(var(--color-muted))]',
  mutedForeground: 'text-[rgb(var(--color-muted-foreground))]',
  border: 'border-[rgb(var(--color-border))]',
  primary: 'text-[rgb(var(--color-primary))]',
  primaryBg: 'bg-[rgb(var(--color-primary))]',
  ring: 'focus:ring-[rgb(var(--color-primary))]',
} as const;

// Common interactive element styles
export const interactive = {
  button: `
    rounded px-3 py-2 text-sm font-medium transition-colors
    hover:${colors.muted} focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[rgb(var(--color-primary))]
  `.replace(/\s+/g, ' ').trim(),
  
  draggable: `
    cursor-move rounded border ${colors.border} ${colors.background}
    transition-colors hover:${colors.muted}
  `.replace(/\s+/g, ' ').trim(),
  
  selected: `
    ring-2 ring-[rgb(var(--color-primary))] ring-offset-2
  `.replace(/\s+/g, ' ').trim(),
} as const;

// Layout patterns
export const layout = {
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  fullHeight: 'h-full',
  section: 'mb-6',
  sectionTitle: `mb-2 text-sm font-medium ${colors.mutedForeground}`,
} as const;

// Responsive breakpoints
export const responsive = {
  mobile: 'lg:hidden',
  desktop: 'hidden lg:flex',
  desktopBlock: 'hidden lg:block',
} as const;

/**
 * Utility function to combine CSS classes
 * Filters out falsy values for conditional classes
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}