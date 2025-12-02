/**
 * UISide Component
 * Displays draggable catalog items: Pages, Containers, Components
 */

import type { ComponentType } from '@/utils/types';
import { createDragItem, setDragData } from '@/utils/dnd';

interface UISideProps {
  onDragStart?: (type: 'page' | 'container' | 'component', componentType?: ComponentType) => void;
}

export function UISide({ onDragStart }: UISideProps) {
  const handleDragStart = (type: 'page' | 'container' | 'component', componentType?: ComponentType) => {
    return (event: React.DragEvent) => {
      const dragItem = createDragItem(type, componentType);
      setDragData(event, dragItem);
      onDragStart?.(type, componentType);
    };
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold text-[rgb(var(--color-foreground))]">
        Components
      </h2>

      {/* Pages Section */}
      <section className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-[rgb(var(--color-muted-foreground))]">
          Pages
        </h3>
        <div className="space-y-2">
          <DraggableItem
            label="Page"
            icon="📄"
            onDragStart={handleDragStart('page')}
          />
        </div>
      </section>

      {/* Containers Section */}
      <section className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-[rgb(var(--color-muted-foreground))]">
          Containers
        </h3>
        <div className="space-y-2">
          <DraggableItem
            label="Container"
            icon="📦"
            onDragStart={handleDragStart('container')}
          />
          <DraggableItem
            label="Section"
            icon="📐"
            onDragStart={handleDragStart('container')}
          />
        </div>
      </section>

      {/* Components Section */}
      <section className="mb-6">
        <h3 className="mb-2 text-sm font-medium text-[rgb(var(--color-muted-foreground))]">
          Components
        </h3>
        <div className="space-y-2">
          <DraggableItem
            label="Button"
            icon="🔘"
            onDragStart={handleDragStart('component', 'Button')}
          />
          <DraggableItem
            label="Input"
            icon="📝"
            onDragStart={handleDragStart('component', 'Input')}
          />
          <DraggableItem
            label="Card"
            icon="🃏"
            onDragStart={handleDragStart('component', 'Card')}
          />
          <DraggableItem
            label="Text"
            icon="📰"
            onDragStart={handleDragStart('component', 'Text')}
          />
          <DraggableItem
            label="Image"
            icon="🖼️"
            onDragStart={handleDragStart('component', 'Image')}
          />
          <DraggableItem
            label="List"
            icon="📋"
            onDragStart={handleDragStart('component', 'List')}
          />
        </div>
      </section>
    </div>
  );
}

interface DraggableItemProps {
  label: string;
  icon: string;
  onDragStart: (event: React.DragEvent) => void;
}

function DraggableItem({ label, icon, onDragStart }: DraggableItemProps) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      className="
        flex cursor-move items-center gap-2 rounded border border-[rgb(var(--color-border))]
        bg-[rgb(var(--color-background))] px-3 py-2 text-sm
        transition-colors hover:bg-[rgb(var(--color-muted))]
      "
      role="button"
      tabIndex={0}
      aria-label={`Drag ${label} to canvas`}
    >
      <span className="text-lg" aria-hidden="true">{icon}</span>
      <span className="text-[rgb(var(--color-foreground))]">{label}</span>
    </div>
  );
}
