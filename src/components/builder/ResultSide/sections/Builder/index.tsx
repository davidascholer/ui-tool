/**
 * Builder View Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component (with nested containers)
 */

import type { PageEntity, Selection, EntityType, ContainerEntity, ComponentEntity } from "@/utils/types";
import { DropZone } from "./DropZone";
import { Selectable } from "./Selectable";

// Type guard to distinguish containers from components
function isContainerEntity(
  entity: ContainerEntity | ComponentEntity
): entity is ContainerEntity {
  return 'name' in entity && 'children' in entity;
}

interface BuilderViewProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect: (entityType: Selection["entityType"], entityId: string) => void;
  onDrop?: (
    targetId: string | undefined,
    targetType: EntityType | "root"
  ) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  getLoadingState?: (
    entityId: string
  ) => { isLoading: boolean; isSlowUpdate: boolean } | null;
}

// Recursive component to render containers and their children (which can be components or nested containers)
function ContainerRenderer({
  container,
  selection,
  onSelect,
  onDelete,
  onDrop,
  getLoadingState,
}: {
  container: ContainerEntity;
  selection: BuilderViewProps["selection"];
  onSelect: BuilderViewProps["onSelect"];
  onDelete: BuilderViewProps["onDelete"];
  onDrop: BuilderViewProps["onDrop"];
  getLoadingState: BuilderViewProps["getLoadingState"];
}) {
  return (
    <Selectable
      key={container.id}
      entityType="Container"
      entityId={container.id}
      isSelected={selection?.entityId === container.id}
      onSelect={onSelect}
      onDelete={onDelete}
      className="p-4"
      ariaLabel={`Container: ${container.name}`}
      size="medium"
      getLoadingState={getLoadingState}
      entity={container}
    >
      <h3 className="mb-2 font-medium text-[rgb(var(--color-foreground))]">
        {container.name}
      </h3>

      <DropZone
        targetType="Container"
        targetId={container.id}
        onDrop={onDrop}
        emptyMessage="Drop Components or Containers here"
        className="min-h-[50px]"
      >
        {container.children.length > 0 && (
          <div className="space-y-2">
            {container.children.map((child) => {
              if (isContainerEntity(child)) {
                // Recursively render nested container
                return (
                  <ContainerRenderer
                    key={child.id}
                    container={child}
                    selection={selection}
                    onSelect={onSelect}
                    onDelete={onDelete}
                    onDrop={onDrop}
                    getLoadingState={getLoadingState}
                  />
                );
              } else {
                // Render component
                return (
                  <Selectable
                    key={child.id}
                    entityType="Component"
                    entityId={child.id}
                    isSelected={selection?.entityId === child.id}
                    onSelect={onSelect}
                    onDelete={onDelete}
                    className="p-2"
                    ariaLabel={`Component: ${child.type}`}
                    size="small"
                    getLoadingState={getLoadingState}
                    entity={child}
                  >
                    <span className="text-sm text-[rgb(var(--color-foreground))]">
                      {child.type}
                    </span>
                  </Selectable>
                );
              }
            })}
          </div>
        )}
      </DropZone>
    </Selectable>
  );
}

export function BuilderView({
  pages,
  selection,
  onSelect,
  onDrop,
  onDelete,
  getLoadingState,
}: BuilderViewProps) {
  return (
    <div className="h-full p-8 border-2 border-amber-400/30 rounded-lg cursor-pointer overflow-auto">
      <DropZone
        targetType="root"
        onDrop={onDrop}
        className={pages.length === 0 ? "" : "space-y-6 bg-blue-200"}
      >
        {pages.length === 0 ? (
          <EmptyState />
        ) : (
          pages.map((page) => (
            <Selectable
              key={page.id}
              entityType="Page"
              entityId={page.id}
              isSelected={selection?.entityId === page.id}
              onSelect={onSelect}
              onDelete={onDelete}
              className="p-4"
              ariaLabel={`Page: ${page.name}`}
              size="large"
              getLoadingState={getLoadingState}
              entity={page}
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-[rgb(var(--color-foreground))]">
                  {page.name}
                </h2>
                {page.meta?.title && (
                  <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
                    {page.meta.title}
                  </p>
                )}
              </div>

              <DropZone
                targetType="Page"
                targetId={page.id}
                onDrop={onDrop}
                emptyMessage="Drop a Container here"
                className="min-h-[100px]"
              >
                {page.children.length > 0 && (
                  <div className="space-y-4">
                    {page.children.map((container) => (
                      <ContainerRenderer
                        key={container.id}
                        container={container}
                        selection={selection}
                        onSelect={onSelect}
                        onDelete={onDelete}
                        onDrop={onDrop}
                        getLoadingState={getLoadingState}
                      />
                    ))}
                  </div>
                )}
              </DropZone>
            </Selectable>
          ))
        )}
      </DropZone>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-6xl" aria-hidden="true">
          📄
        </div>
        <h2 className="mb-2 text-xl font-semibold text-[rgb(var(--color-foreground))]">
          Start Building
        </h2>
        <p className="text-[rgb(var(--color-muted-foreground))]">
          Drag a Page from the left sidebar to begin
        </p>
      </div>
    </div>
  );
}
