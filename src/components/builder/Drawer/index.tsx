/**
 * Drawer Component
 * Property editor for selected entities with real-time preview support
 * Uses the enhanced Editor component for better UX
 */

import { useState } from 'react';
import type { Selection, PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { Editor } from './Editor';

interface DrawerProps {
  selection: Selection | null;
  entity: PageEntity | ContainerEntity | ComponentEntity | null;
  onSave?: (data: unknown) => void;
  onClose?: () => void;
  onRealtimeUpdate?: (entity: PageEntity | ContainerEntity | ComponentEntity, field: string, value: unknown) => void;
  enableRealtimeUpdates?: boolean;
}

export function Drawer({ 
  selection, 
  entity, 
  onSave, 
  onClose, 
  onRealtimeUpdate, 
  enableRealtimeUpdates = true 
}: DrawerProps) {
  // Batch detection state for performance monitoring
  const [batchState] = useState(() => ({
    changeCount: 0,
    windowStart: Date.now(),
    pendingRaf: false
  }));
  
  // Note: Real-time update integration will be completed when Editor component is enhanced
  // Currently keeping props for future integration
  
  if (!selection || !entity) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <div className="mb-4 text-4xl" aria-hidden="true">
            ✏️
          </div>
          <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
            Select an element to edit its properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header with editing state */}
      <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] p-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
            Edit {selection.entityType}
          </h2>
          {enableRealtimeUpdates && (
            <div className="flex items-center space-x-1">
              <div className="h-2 w-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-blue-600 italic">Live Preview</span>
            </div>
          )}
        </div>
        <button
          onClick={onClose}
          className="rounded p-1 hover:bg-[rgb(var(--color-muted))] focus-visible:outline-2 focus-visible:outline-[rgb(var(--color-primary))]"
          aria-label="Close drawer"
        >
          ✕
        </button>
      </div>
      
      {/* Batch mode indicator */}
      {batchState.changeCount >= 3 && (
        <div className="bg-blue-50 border-b border-blue-100 px-4 py-2">
          <div className="flex items-center space-x-2 text-sm text-blue-700">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
            <span>Batch mode: Optimizing {batchState.changeCount} changes</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        <Editor
          entity={entity}
          entityType={selection.entityType}
          onSave={onSave}
        />
      </div>
    </div>
  );
}