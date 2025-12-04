/**
 * WidthDisplay Component
 * Feature 004: Real-Time Hierarchy Updates
 * Displays pixel width measurement in top-right corner of hierarchy section
 */

import { useEffect, useRef, useState } from 'react';

interface WidthDisplayProps {
  className?: string;
}

export function WidthDisplay({ className }: WidthDisplayProps) {
  const [width, setWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: measuredWidth } = entry.contentRect;
        setWidth(Math.round(measuredWidth));
      }
    });

    resizeObserver.observe(container);

    // Initial measurement in next tick to avoid sync setState
    const timeoutId = setTimeout(() => {
      setWidth(Math.round(container.getBoundingClientRect().width));
    }, 0);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`
        absolute top-2 right-2 z-10 rounded bg-[rgb(var(--color-muted))] 
        px-2 py-1 text-xs font-mono text-[rgb(var(--color-muted-foreground))]
        shadow-sm border border-[rgb(var(--color-border))]
        ${className || ''}
      `}
      title={`Hierarchy section width: ${width}px`}
    >
      {width}px
    </div>
  );
}