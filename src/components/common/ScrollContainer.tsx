/**
 * ScrollContainer Component
 * A wrapper component that adds scrolling when content exceeds container size
 * with custom styled scrollbar using primary theme color
 */

import type { ReactNode } from 'react';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  maxHeight?: string;
}

export function ScrollContainer({ 
  children, 
  className = '',
  maxHeight = '100%'
}: ScrollContainerProps) {
  return (
    <div 
      className={`scroll-container ${className}`}
      style={{ maxHeight }}
    >
      {children}
      <style>{`
        .scroll-container {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
        }

        /* Webkit browsers (Chrome, Safari, Edge) */
        .scroll-container::-webkit-scrollbar {
          width: 8px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: rgb(var(--color-primary));
          border-radius: 4px;
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: rgb(var(--color-primary) / 0.8);
        }

        /* Firefox */
        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: rgb(var(--color-primary)) rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}
