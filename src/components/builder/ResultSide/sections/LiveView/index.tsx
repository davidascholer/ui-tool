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

    const handleMouseEnter = () => {
      if (isHovering) return;
      isHovering = true;

      // Find all elements with data-entity-type="component"
      const allPages = container.querySelectorAll(
        '[data-entity-type="page"]'
      ) as NodeListOf<HTMLElement>;
      const allContainers = container.querySelectorAll(
        '[data-entity-type="container"]'
      ) as NodeListOf<HTMLElement>;
      const allComponents = container.querySelectorAll(
        '[data-entity-type="component"]'
      ) as NodeListOf<HTMLElement>;

      // Add border to all components, containers, and pages at once
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

      // Remove border from all components, containers, and pages
      const allComponents = container.querySelectorAll(
        '[data-entity-type="component"]'
      ) as NodeListOf<HTMLElement>;
      const allPages = container.querySelectorAll(
        '[data-entity-type="page"]'
      ) as NodeListOf<HTMLElement>;
      const allContainers = container.querySelectorAll(
        '[data-entity-type="container"]'
      ) as NodeListOf<HTMLElement>;

      // Remove border from all components, containers, and pages at once
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

      // Cleanup any remaining borders
      const allPages = container.querySelectorAll(
        '[data-entity-type="page"]'
      ) as NodeListOf<HTMLElement>;
      const allContainers = container.querySelectorAll(
        '[data-entity-type="container"]'
      ) as NodeListOf<HTMLElement>;
      const allComponents = container.querySelectorAll(
        '[data-entity-type="component"]'
      ) as NodeListOf<HTMLElement>;
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
