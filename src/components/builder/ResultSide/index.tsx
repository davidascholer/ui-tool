/**
 * ResultSide Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component
 * Includes code view toggle for React/React Native export
 */

import { useState, useCallback, memo } from "react";
import type { PageEntity, Selection, EntityType } from "@/utils/types";
import { CodeView } from "./sections/CodeView";
import { LiveView } from "./sections/LiveView";
import { BuilderView } from "./sections/Builder";
import { ViewModeToggle, type ViewMode } from "./ViewModeToggle";

interface ResultSideProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (
    targetId: string | undefined,
    targetType: EntityType | "root"
  ) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  // Feature 004: Loading state for visual feedback
  getLoadingState?: (
    entityId: string
  ) => { isLoading: boolean; isSlowUpdate: boolean } | null;
}

export const ResultSide = memo(function ResultSide({
  pages,
  selection,
  onSelect,
  onDrop,
  onDelete,
  getLoadingState,
}: ResultSideProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("builder");

  const handleSelect = useCallback(
    (entityType: Selection["entityType"], entityId: string) => {
      if (selection?.entityId === entityId) {
        // Deselect if already selected
        onSelect?.(null);
      } else {
        onSelect?.({ entityType, entityId });
      }
    },
    [selection?.entityId, onSelect]
  );

  return (
    <div className="flex flex-col h-full bg-green-500">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      {/* Content Area */}
      <div className="flex-1">
        {viewMode === "builder" ? (
          <BuilderView
            pages={pages}
            selection={selection}
            onSelect={handleSelect}
            onDrop={onDrop}
            onDelete={onDelete}
            getLoadingState={getLoadingState}
          />
        ) : viewMode === "live" ? (
          <LiveView>
            <div className="text-center text-[rgb(var(--color-muted-foreground))]">
              <div className="mb-4 text-4xl" aria-hidden="true">
                👁️
              </div>
              <h3 className="text-lg font-medium mb-2">Live Preview</h3>
              <p className="text-sm">
                Real-time preview of your components will appear here
              </p>
            </div>
          </LiveView>
        ) : (
          <CodeView pages={pages} className="h-full" />
        )}
      </div>
    </div>
  );
});
