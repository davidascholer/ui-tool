/**
 * ResultSide Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component
 */

import type { PageEntity, Selection, EntityType } from '@/utils/types';
import { DropZone } from './DropZone';

interface ResultSideProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
}

export function ResultSide({ pages, selection, onSelect, onDrop }: ResultSideProps) {
  const handleSelect = (entityType: Selection['entityType'], entityId: string) => {
    if (selection?.entityId === entityId) {
      // Deselect if already selected
      onSelect?.(null);
    } else {
      onSelect?.({ entityType, entityId });
    }
  };

  return (
    <div className="min-h-full bg-[rgb(var(--color-background))] p-8">
      <DropZone
        targetType="root"
        onDrop={onDrop}
        className={pages.length === 0 ? '' : 'space-y-6'}
      >
        {pages.length === 0 ? (
          <EmptyState />
        ) : (
          pages.map((page) => (
            <div
              key={page.id}
              className={`
                rounded-lg border-2 p-4 transition-shadow
                ${
                  selection?.entityId === page.id
                    ? 'border-[rgb(var(--color-selected))] shadow-[0_0_0_3px_rgba(var(--color-selected),0.3)]'
                    : 'border-[rgb(var(--color-border))]'
                }
                hover:shadow-md
              `}
              onClick={() => handleSelect('Page', page.id)}
              role="button"
              tabIndex={0}
              aria-label={`Page: ${page.name}`}
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
                      <div
                        key={container.id}
                        className={`
                          rounded border-2 p-4 transition-shadow
                          ${
                            selection?.entityId === container.id
                              ? 'border-[rgb(var(--color-selected))] shadow-[0_0_0_3px_rgba(var(--color-selected),0.3)]'
                              : 'border-[rgb(var(--color-border))]'
                          }
                          hover:shadow-sm
                        `}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect('Container', container.id);
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Container: ${container.name}`}
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
                                <div
                                  key={component.id}
                                  className={`
                                    rounded border p-2 transition-shadow
                                    ${
                                      selection?.entityId === component.id
                                        ? 'border-[rgb(var(--color-selected))] shadow-[0_0_0_2px_rgba(var(--color-selected),0.3)]'
                                        : 'border-[rgb(var(--color-border))]'
                                    }
                                    hover:shadow-sm
                                  `}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSelect('Component', component.id);
                                  }}
                                  role="button"
                                  tabIndex={0}
                                  aria-label={`Component: ${component.type}`}
                                >
                                  <span className="text-sm text-[rgb(var(--color-foreground))]">
                                    {component.type}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </DropZone>
                      </div>
                    ))}
                  </div>
                )}
              </DropZone>
            </div>
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
