/**
 * ResultSide Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component
 * Includes code view toggle for React/React Native export
 */

import { useState } from 'react';
import type { PageEntity, Selection, EntityType } from '@/utils/types';
import { DropZone } from './DropZone';
import { CodeView } from './CodeView';

interface ResultSideProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
}

type ViewMode = 'hierarchy' | 'code';

export function ResultSide({ pages, selection, onSelect, onDrop }: ResultSideProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('hierarchy');
  
  const handleSelect = (entityType: Selection['entityType'], entityId: string) => {
    if (selection?.entityId === entityId) {
      // Deselect if already selected
      onSelect?.(null);
    } else {
      onSelect?.({ entityType, entityId });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[rgb(var(--color-background))]">
      {/* View Toggle Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          type="button"
          onClick={() => setViewMode('hierarchy')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            viewMode === 'hierarchy'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3a1 1 0 00-1 1v5a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1zM3 20h18a1 1 0 001-1v-5a1 1 0 00-1-1H3a1 1 0 00-1 1v5a1 1 0 001 1z" />
            </svg>
            <span>Hierarchy</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode('code')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            viewMode === 'code'
              ? 'bg-white text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          <span className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>Code</span>
          </span>
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'hierarchy' ? (
          <div className="h-full p-8 border-2 border-amber-400/30 rounded-lg cursor-pointer overflow-auto">
            <DropZone
              targetType="root"
              onDrop={onDrop}
              className={pages.length === 0 ? '' : 'space-y-6 bg-blue-200'}
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
        ) : (
          <CodeView pages={pages} className="h-full" />
        )}
      </div>
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
