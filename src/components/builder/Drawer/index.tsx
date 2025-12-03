/**
 * Drawer Component
 * Property editor for selected entities
 * Uses the enhanced Editor component for better UX
 */

import type { Selection, PageEntity, ContainerEntity, ComponentEntity } from '@/utils/types';
import { Editor } from './Editor';

interface DrawerProps {
  selection: Selection | null;
  entity: PageEntity | ContainerEntity | ComponentEntity | null;
  onSave?: (data: unknown) => void;
  onClose?: () => void;
}

export function Drawer({ selection, entity, onSave, onClose }: DrawerProps) {
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
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[rgb(var(--color-border))] p-4">
        <h2 className="text-lg font-semibold text-[rgb(var(--color-foreground))]">
          Edit {selection.entityType}
        </h2>
        <button
          onClick={onClose}
          className="rounded p-1 hover:bg-[rgb(var(--color-muted))] focus-visible:outline-2 focus-visible:outline-[rgb(var(--color-primary))]"
          aria-label="Close drawer"
        >
          ✕
        </button>
      </div>

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



