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
import { Selectable } from './Selectable';

interface ResultSideProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
}

type ViewMode = 'hierarchy' | 'code';

export function ResultSide({ pages, selection, onSelect, onDrop, onDelete }: ResultSideProps) {
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
                  <Selectable
                    key={page.id}
                    entityType="Page"
                    entityId={page.id}
                    isSelected={selection?.entityId === page.id}
                    onSelect={handleSelect}
                    onDelete={onDelete}
                    className="p-4"
                    ariaLabel={`Page: ${page.name}`}
                    size="large"
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
                              onSelect={handleSelect}
                              onDelete={onDelete}
                              className="p-4"
                              ariaLabel={`Container: ${container.name}`}
                              size="medium"
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
                                        isSelected={selection?.entityId === component.id}
                                        onSelect={handleSelect}
                                        onDelete={onDelete}
                                        className="p-2"
                                        ariaLabel={`Component: ${component.type}`}
                                        size="small"
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
