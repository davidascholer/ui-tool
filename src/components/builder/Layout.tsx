/**
 * Builder Layout Component
 * Three-column layout: UISide | ResultSide | Drawer
 * Responsive: Stacks in portrait/mobile view
 */

import type { ReactNode } from 'react';

interface LayoutProps {
  uiSide: ReactNode;
  resultSide: ReactNode;
  drawer: ReactNode;
  drawerOpen: boolean;
}

export function Layout({ uiSide, resultSide, drawer, drawerOpen }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[rgb(var(--color-background))]">
      {/* Mobile/Portrait: Stack vertically */}
      <div className="flex h-full flex-col lg:hidden">
        {/* UI Side - collapsed on mobile */}
        <div className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))]">
          {uiSide}
        </div>
        
        {/* Result Side - main view on mobile */}
        <div className="flex-1 overflow-auto">
          {resultSide}
        </div>
        
        {/* Drawer - overlay on mobile when open */}
        {drawerOpen && (
          <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true">
            <div className="absolute bottom-0 left-0 right-0 max-h-[80vh] overflow-auto rounded-t-lg bg-[rgb(var(--color-background))] shadow-lg">
              {drawer}
            </div>
          </div>
        )}
      </div>

      {/* Desktop/Landscape: Three columns */}
      <div className="hidden h-full lg:flex">
        {/* UI Side - fixed width */}
        <aside
          className="w-64 shrink-0 overflow-auto border-r border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))]"
          aria-label="Component palette"
        >
          {uiSide}
        </aside>

        {/* Result Side - flexible center */}
        <main
          className="flex-1 overflow-auto"
          aria-label="Builder canvas"
        >
          {resultSide}
        </main>

        {/* Drawer - fixed width, slides in/out */}
        <aside
          className={`
            w-80 shrink-0 overflow-auto border-l border-[rgb(var(--color-border))] 
            bg-[rgb(var(--color-background))] transition-transform duration-300
            ${drawerOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
          aria-label="Property editor"
          aria-hidden={!drawerOpen}
        >
          {drawer}
        </aside>
      </div>
    </div>
  );
}
