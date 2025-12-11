/**
 * LiveView - Placeholder for future live preview functionality
 */

import { useEffect, useRef } from "react";
import type {
  ComponentEntity,
  ContainerEntity,
  PageEntity,
} from "@/utils/types";
import { BuiltCodeFromProps } from "@/components/common/BuiltCodeFromProps";

interface LiveViewProps {
  componentList: (PageEntity | ContainerEntity | ComponentEntity)[];
  className?: string;
}

export function LiveView({ componentList, className = "" }: LiveViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isHovering = false;
    let pageDimensionLabel: HTMLDivElement | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const createDimensionLabel = (): HTMLDivElement => {
      const label = document.createElement('div');
      label.style.position = 'absolute';
      label.style.top = '2px';
      label.style.right = '2px';
      label.style.padding = '2px 6px';
      label.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
      label.style.color = 'white';
      label.style.fontSize = '11px';
      label.style.fontFamily = 'monospace';
      label.style.borderRadius = '3px';
      label.style.pointerEvents = 'none';
      label.style.zIndex = '1000';
      label.style.whiteSpace = 'nowrap';
      
      return label;
    };

    const updateDimensionLabel = (element: HTMLElement, label: HTMLDivElement) => {
      const rect = element.getBoundingClientRect();
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);
      label.textContent = `${width} × ${height}`;
    };

    // Add permanent dimension label to page
    const pageElement = container.querySelector('[data-entity-type="page"]') as HTMLElement;
    if (pageElement) {
      pageElement.style.position = pageElement.style.position || 'relative';
      pageDimensionLabel = createDimensionLabel();
      updateDimensionLabel(pageElement, pageDimensionLabel);
      pageElement.appendChild(pageDimensionLabel);

      // Set up ResizeObserver to update dimensions when page size changes
      resizeObserver = new ResizeObserver(() => {
        if (pageDimensionLabel && pageElement) {
          updateDimensionLabel(pageElement, pageDimensionLabel);
        }
      });
      resizeObserver.observe(pageElement);
    }

    const handleMouseEnter = () => {
      if (isHovering) return;
      isHovering = true;

      const allPages = container.querySelectorAll(
        '[data-entity-type="page"]'
      ) as NodeListOf<HTMLElement>;
      const allContainers = container.querySelectorAll(
        '[data-entity-type="container"]'
      ) as NodeListOf<HTMLElement>;
      const allComponents = container.querySelectorAll(
        '[data-entity-type="component"]'
      ) as NodeListOf<HTMLElement>;

      // Add border to all elements
      allComponents.forEach((component) => {
        component.style.outline = "3px solid rgba(59, 130, 246, 0.6)";
        component.style.outlineOffset = "3px";
      });
      allPages.forEach((page) => {
        page.style.outline = "3px solid rgba(59, 130, 246, 0.6)";
        page.style.outlineOffset = "-3px";
      });
      allContainers.forEach((container) => {
        container.style.outline = "3px solid rgba(59, 130, 246, 0.6)";
        container.style.outlineOffset = "-3px";
      });
    };

    const handleMouseLeave = () => {
      if (!isHovering) return;
      isHovering = false;

      const allComponents = container.querySelectorAll(
        '[data-entity-type="component"]'
      ) as NodeListOf<HTMLElement>;
      const allPages = container.querySelectorAll(
        '[data-entity-type="page"]'
      ) as NodeListOf<HTMLElement>;
      const allContainers = container.querySelectorAll(
        '[data-entity-type="container"]'
      ) as NodeListOf<HTMLElement>;

      // Remove borders from all elements
      allPages.forEach((page) => {
        page.style.outline = "";
        page.style.outlineOffset = "";
      });
      allContainers.forEach((container) => {
        container.style.outline = "";
        container.style.outlineOffset = "";
      });
      allComponents.forEach((component) => {
        component.style.outline = "";
        component.style.outlineOffset = "";
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);

      // Cleanup resize observer
      if (resizeObserver) {
        resizeObserver.disconnect();
      }

      // Cleanup page dimension label
      if (pageDimensionLabel && pageDimensionLabel.parentNode) {
        pageDimensionLabel.parentNode.removeChild(pageDimensionLabel);
      }
    };
  }, [componentList]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full select-none ${className}`}
    >
      <BuiltCodeFromProps
        componentList={componentList}
        enableArbitraryStyles={true}
      />
    </div>
  );
}
