/**
 * Builder Layout Component
 * Three-column layout: UISide | ResultSide/LiveView (with tabs) | Drawer
 * Responsive: Stacks in portrait/mobile view
 * Includes header with theme toggle
 */

import type { ReactNode } from "react";
import { ThemeToggle } from "../common/ThemeToggle";

interface LayoutProps {
  uiSide: ReactNode;
  resultSide: ReactNode;
  drawer: ReactNode;
  liveView: ReactNode;
  drawerOpen: boolean;
}



export function Layout({
  uiSide,
  resultSide,
  drawer,
  drawerOpen,
}: Omit<LayoutProps, 'liveView'>) {
  
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-[rgb(var(--color-background))]">
      {/* Header Bar */}
      <header className="flex items-center justify-between border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] px-6 py-3">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold text-[rgb(var(--color-foreground))]">
            UI Builder
          </h1>
          <span className="text-sm text-[rgb(var(--color-muted-foreground))]">
            Drag & Drop React Components
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Mobile/Portrait: Stack vertically */}
      <div className="flex flex-1 flex-col lg:hidden overflow-scroll">
        {/* UI Side - collapsed on mobile */}
        <div className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))]">
          {uiSide}
        </div>

        {/* Result Side - includes internal tabs */}
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

      {/* Desktop/Landscape: Three columns with CSS Grid */}
      <div
        className={`
          hidden flex-1 lg:grid transition-all duration-300 overflow-scroll
          ${
            drawerOpen
              ? "grid-cols-[256px_minmax(320px,1fr)_320px]"
              : "grid-cols-[256px_minmax(320px,1fr)_0px]"
          }
        `}
      >
        {/* UI Side - fixed width */}
        <aside
          className="overflow-auto border-r border-[rgb(var(--color-border))] bg-[rgb(var(--color-muted))]"
          aria-label="Component palette"
        >
          {uiSide}
        </aside>

        {/* Result Side - includes internal tabs */}
        <main className="overflow-auto" aria-label="Builder canvas">
          {resultSide}
        </main>

        {/* Drawer - slides in/out with grid column width */}
        <aside
          className={`
            overflow-auto border-l border-[rgb(var(--color-border))] 
            bg-[rgb(var(--color-background))] transition-all duration-300
            ${drawerOpen ? "opacity-100" : "opacity-0 overflow-hidden"}
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
