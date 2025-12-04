/**
 * ResultSide Component
 * Displays the visual builder canvas with drag-and-drop zones
 * Shows hierarchy: Page → Container → Component
 * Includes code view toggle for React/React Native export
 */

import { useState, useCallback, memo } from 'react';
import type { PageEntity, Selection, EntityType } from '@/utils/types';
import { DropZone } from './DropZone';
import { CodeView } from './CodeView';
import { Selectable } from './Selectable';
import { LiveView } from '../LiveView';

interface ResultSideProps {
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  // Feature 004: Loading state for visual feedback
  getLoadingState?: (entityId: string) => { isLoading: boolean; isSlowUpdate: boolean; } | null;
}

type ViewMode = 'builder' | 'live' | 'code';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
  return (
    <div className="flex border-b border-gray-200 bg-gray-50">
      <button
        type="button"
        onClick={() => onViewModeChange('builder')}
        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
          viewMode === 'builder'
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-4H5m8 12H5" />
          </svg>
          <span>Builder</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => onViewModeChange('live')}
        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
          viewMode === 'live'
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Live View</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => onViewModeChange('code')}
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
  );
}

export const ResultSide = memo(function ResultSide({ pages, selection, onSelect, onDrop, onDelete, getLoadingState }: ResultSideProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('builder');
  
  const handleSelect = useCallback((entityType: Selection['entityType'], entityId: string) => {
    if (selection?.entityId === entityId) {
      // Deselect if already selected
      onSelect?.(null);
    } else {
      onSelect?.({ entityType, entityId });
    }
  }, [selection?.entityId, onSelect]);

  return (
    <div className="flex flex-col h-full bg-[rgb(var(--color-background))]">
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {viewMode === 'builder' ? (
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
                              onSelect={handleSelect}
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
                                        isSelected={selection?.entityId === component.id}
                                        onSelect={handleSelect}
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
        ) : viewMode === 'live' ? (
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
