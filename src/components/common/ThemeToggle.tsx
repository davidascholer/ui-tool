/**
 * ThemeToggle Component
 * Provides light/dark theme switching with persistence
 * Uses CSS variables and localStorage for theme management
 */

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

// Constants
const STORAGE_KEY = 'ui-builder-theme';
const VALID_THEMES: Theme[] = ['light', 'dark', 'system'];
const THEME_CYCLE: Record<Theme, Theme> = {
  light: 'dark',
  dark: 'system',
  system: 'light'
} as const;

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme;
  return savedTheme && VALID_THEMES.includes(savedTheme) ? savedTheme : 'system';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      root.classList.remove('dark', 'light');
    } else {
      root.setAttribute('data-theme', theme);
      root.classList.remove('dark', 'light');
      root.classList.add(theme);
    }
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgb(var(--color-muted))] hover:bg-[rgb(var(--color-border))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2 transition-colors"
        aria-label="Toggle theme"
        onClick={() => {
          handleThemeChange(THEME_CYCLE[theme]);
        }}
        title={`Current theme: ${theme}. Click to cycle through themes.`}
      >
        {theme === 'light' && (
          <svg className="w-5 h-5 text-[rgb(var(--color-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
        {theme === 'dark' && (
          <svg className="w-5 h-5 text-[rgb(var(--color-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
        {theme === 'system' && (
          <svg className="w-5 h-5 text-[rgb(var(--color-foreground))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
      </button>
      
      {/* Theme indicator tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded opacity-0 hover:opacity-100 pointer-events-none transition-opacity">
        {theme === 'system' ? 'Auto' : theme === 'light' ? 'Light' : 'Dark'}
      </div>
    </div>
  );
}