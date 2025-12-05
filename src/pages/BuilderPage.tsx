/**
 * BuilderPage - Main page for the drag-and-drop UI builder
 * Features: Drag-and-drop hierarchy, component editing, code export
 * Feature 004: Real-time hierarchy updates with visual indicators
 */

import { useState, useCallback } from "react";
import { SEO } from "../components/common/SEO";
import { UISide } from "../components/builder/UISide";
import { ResultSide } from "../components/builder/ResultSide";
import { Drawer } from "../components/builder/Drawer";
import { useBuilderState } from "../utils/state";
import { useHierarchyUpdates } from "@/hooks/useHierarchyUpdates";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";
import type {
  ComponentType,
  EntityType,
  PropertyChange,
  PageEntity,
  ContainerEntity,
  ComponentEntity,
} from "@/utils/types";
import { Layout } from "@/components/builder/Layout";


export function BuilderPage() {
  const { state, actions } = useBuilderState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentDragItem, setCurrentDragItem] = useState<{
    type: "page" | "container" | "component";
    componentType?: ComponentType;
  } | null>(null);

  // Feature 004: Performance monitoring for 200ms requirement
  const performanceMonitor = usePerformanceMonitoring();

  // Feature 004: Hierarchy updates integration
  const hierarchyUpdates = useHierarchyUpdates({
    pages: state.pages,
    selection: state.selection,
    onUpdate: useCallback((entityId: string, changes: PropertyChange[]) => {
      // Handle hierarchy visual updates - this will be called when changes are processed
      console.log(`Hierarchy updates processed for ${entityId}:`, changes);
    }, []),
  });

  const handleDragStart = (
    type: "page" | "container" | "component",
    componentType?: ComponentType
  ) => {
    // Store what's being dragged for the drop handler
    setCurrentDragItem({ type, componentType });
  };

  const handleDrop = (
    targetId: string | undefined,
    targetType: "Page" | "Container" | "Component" | "root"
  ) => {
    if (!currentDragItem) return;

    const { type, componentType } = currentDragItem;

    // Handle based on what's being dropped and where
    if (type === "page" && targetType === "root") {
      actions.addPage(`Page ${state.pages.length + 1}`);
    } else if (type === "container" && targetType === "Page" && targetId) {
      const page = state.pages.find((p) => p.id === targetId);
      if (page) {
        actions.addContainer(targetId, `Container ${page.children.length + 1}`);
      }
    } else if (
      type === "component" &&
      targetType === "Container" &&
      targetId &&
      componentType
    ) {
      actions.addComponent(targetId, componentType);
    }

    setCurrentDragItem(null);
  };

  const handleSelect = (selection: typeof state.selection) => {
    actions.setSelection(selection);
    if (selection) {
      setDrawerOpen(true);
    }
  };

  const handleSave = useCallback(
    (data: unknown) => {
      console.log("Saving data from drawer:", data);
      if (!state.selection) return;

      const { entityType, entityId } = state.selection;

      // Get current entity for comparison (to create PropertyChange objects)
      const currentEntity = actions.getSelectedEntity();
      if (!currentEntity) {
        console.error("No current entity found for save operation");
        return;
      }

      // Store original state for potential reversion
      const originalState = JSON.parse(JSON.stringify(currentEntity));

      // Start performance measurement for 200ms requirement
      const measurementId = performanceMonitor.startMeasurement(
        "hierarchySaveUpdate",
        entityId,
        typeof data === "object" && data ? Object.keys(data).length : 1
      );

      try {
        // Validate the incoming data
        if (!data || typeof data !== "object") {
          throw new Error("Invalid save data: must be a non-null object");
        }

        // Create and validate PropertyChange objects
        const changes: PropertyChange[] = [];
        const validationErrors: string[] = [];

        // Helper function to deeply compare values and create change objects
        const createChangeIfDifferent = (
          field: string,
          oldValue: unknown,
          newValue: unknown
        ) => {
          if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
            changes.push({
              entityId,
              entityType,
              field,
              oldValue,
              newValue,
              timestamp: Date.now(),
            });
          }
        };

        // Process the structured data from Editor forms
        const dataObj = data as Record<string, unknown>;

        // Handle name field validation
        if ("name" in dataObj) {
          if (
            typeof dataObj.name !== "string" ||
            dataObj.name.trim().length === 0
          ) {
            validationErrors.push(
              `Name must be a non-empty string, got: ${typeof dataObj.name}`
            );
          } else {
            const oldName = (currentEntity as { name: string }).name;
            createChangeIfDifferent("name", oldName, dataObj.name);
          }
        }

        // Handle props field (for components)
        if ("props" in dataObj && entityType === "Component") {
          const oldProps = (currentEntity as ComponentEntity).props || {};
          createChangeIfDifferent("props", oldProps, dataObj.props);
        }

        // Handle type field (for components)
        if ("type" in dataObj && entityType === "Component") {
          const oldType = (currentEntity as ComponentEntity).type;
          createChangeIfDifferent("type", oldType, dataObj.type);
        }

        // Handle tailwindClassList
        if ("tailwindClassList" in dataObj) {
          const oldTailwindClassList =
            "tailwindClassList" in currentEntity
              ? (currentEntity as { tailwindClassList: unknown }).tailwindClassList
              : [];
          createChangeIfDifferent(
            "tailwindClassList",
            oldTailwindClassList,
            dataObj.tailwindClassList
          );
        }

        // Handle meta field (for pages)
        if ("meta" in dataObj && entityType === "Page") {
          const oldMeta = (currentEntity as PageEntity).meta || {};
          createChangeIfDifferent("meta", oldMeta, dataObj.meta);
        }

        // If validation failed, throw error with details
        if (validationErrors.length > 0) {
          throw new Error(`Validation failed: ${validationErrors.join(", ")}`);
        }

        // Apply state updates with error handling
        let updateSuccess = false;

        if (entityType === "Page") {
          actions.updatePage(entityId, dataObj as Partial<PageEntity>);
          updateSuccess = true;
        } else if (entityType === "Container") {
          actions.updateContainer(
            entityId,
            dataObj as Partial<ContainerEntity>
          );
          updateSuccess = true;
        } else if (entityType === "Component") {
          actions.updateComponent(
            entityId,
            dataObj as Partial<ComponentEntity>
          );
          updateSuccess = true;
        } else {
          throw new Error(`Unknown entity type: ${entityType}`);
        }

        // Only queue hierarchy changes after successful state update
        if (updateSuccess && changes.length > 0) {
          changes.forEach((change) => hierarchyUpdates.queueChange(change));
          // Process changes immediately for save operations to avoid UI hanging
          hierarchyUpdates.processPending();
          console.log(
            `Successfully saved ${changes.length} property changes for ${entityType} ${entityId}`
          );
        }

        // End performance measurement on successful completion
        const metrics = performanceMonitor.endMeasurement(measurementId);

        // Verify 200ms requirement
        const requirement = performanceMonitor.checkPerformanceRequirement(
          metrics.duration
        );
        if (!requirement.meetsRequirement) {
          console.error(
            `Performance requirement violated! Save operation took ${metrics.duration.toFixed(
              2
            )}ms (max: ${requirement.threshold}ms)`
          );
        }
      } catch (error) {
        console.error("Save operation failed:", error);

        // Auto-reversion: Attempt to restore original state
        try {
          console.log("Attempting auto-reversion to original state...");

          if (entityType === "Page") {
            actions.updatePage(entityId, originalState);
          } else if (entityType === "Container") {
            actions.updateContainer(entityId, originalState);
          } else if (entityType === "Component") {
            actions.updateComponent(entityId, originalState);
          }

          // Clear any pending hierarchy changes for this entity
          hierarchyUpdates.clearQueue(entityId);

          console.log("Auto-reversion completed successfully");

          // Could potentially show user notification here
          // showNotification('Save failed, changes reverted', 'error');
        } catch (revertError) {
          console.error("Auto-reversion failed:", revertError);
          // In a real app, this would be a critical error requiring user intervention
          // showNotification('Save failed and auto-reversion failed - please refresh', 'critical');
        }

        // End performance measurement even on error
        try {
          performanceMonitor.endMeasurement(measurementId);
        } catch (measurementError) {
          console.warn(
            "Failed to end performance measurement:",
            measurementError
          );
        }

        // Re-throw the original error so calling code can handle it
        throw error;
      }
    },
    [state, actions, hierarchyUpdates, performanceMonitor]
  );

  const handleDelete = (entityType: EntityType, entityId: string) => {
    actions.deleteEntity(entityId, entityType);
  };

  return (
    <>
      <SEO
        title="UI Builder - Create React & React Native Components"
        description="Build beautiful, responsive UIs with drag-and-drop. Create Pages, Containers, and Components, then export clean React or React Native code."
        canonical={
          typeof window !== "undefined" ? window.location.href : undefined
        }
        ogTitle="UI Builder - Visual Component Designer"
        ogDescription="Professional drag-and-drop interface for creating React and React Native components. Export production-ready code with Tailwind CSS styling."
        ogImage="/og-image.png"
        keywords="react builder, react native components, drag drop ui, tailwind css, code generator, component library, visual designer"
        author="UI Builder Team"
      />

      <Layout
        uiSide={<UISide onDragStart={handleDragStart} />}
        resultSide={
          <ResultSide
            pages={state.pages}
            selection={state.selection}
            onSelect={handleSelect}
            onDrop={handleDrop}
            onDelete={handleDelete}
            getLoadingState={hierarchyUpdates.getLoadingState}
          />
        }
        drawer={
          <Drawer
            selection={state.selection}
            entity={actions.getSelectedEntity()}
            onSave={handleSave}
            onClose={() => setDrawerOpen(false)}
          />
        }
        drawerOpen={drawerOpen}
      />
    </>
  );
}

export default BuilderPage;
