/**
 * Builder View Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component
 */

import type { PageEntity, Selection, EntityType } from "@/utils/types";
import { DropZone } from "./DropZone";
import { Selectable } from "./Selectable";

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
                          emptyMessage="Drop Components here"
                          className="min-h-[50px]"
                        >
                          {container.children.length > 0 && (
                            <div className="space-y-2">
                              {container.children.map((component) => (
                                <Selectable
                                  key={component.id}
                                  entityType="Component"
                                  entityId={component.id}
                                  isSelected={
                                    selection?.entityId === component.id
                                  }
                                  onSelect={onSelect}
                                  onDelete={onDelete}
                                  className="p-2"
                                  ariaLabel={`Component: ${component.type}`}
                                  size="small"
                                  getLoadingState={getLoadingState}
                                  entity={component}
                                >
                                  <span className="text-sm text-[rgb(var(--color-foreground))]">
                                    {component.type}
                                  </span>
                                </Selectable>
                              ))}
                            </div>
                          )}
                        </DropZone>
                      </Selectable>
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
