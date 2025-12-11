/**
 * UISide Component
 * Displays draggable catalog items: Pages, Containers, Components
 */

import type { ComponentType } from '@/utils/types';
import { createDragItem, setDragData } from '@/utils/dnd';

// Component catalog configuration
const COMPONENT_CATALOG = {
  pages: [
    { label: 'Page', icon: '📄' }
  ],
  containers: [
    { label: 'Container', icon: '📦' }
  ],
  components: {
    basic: [
      { label: 'Text', icon: '📰', type: 'Text' as ComponentType },
      { label: 'Image', icon: '🖼️', type: 'Image' as ComponentType },
      // { label: 'ScrollView', icon: '📜', type: 'ScrollView' as ComponentType },
      // { label: 'TextInput', icon: '📝', type: 'TextInput' as ComponentType },
      // { label: 'Pressable', icon: '👆', type: 'Pressable' as ComponentType },
      // { label: 'View', icon: '📦', type: 'View' as ComponentType },
    ],
    ui: [
      { label: 'Button', icon: '🔘', type: 'Button' as ComponentType },
      { label: 'Switch', icon: '🔀', type: 'Switch' as ComponentType }
    ],
    lists: [
      { label: 'FlatList', icon: '📋', type: 'FlatList' as ComponentType },
      { label: 'SectionList', icon: '📑', type: 'SectionList' as ComponentType }
    ],
    other: [
      { label: 'ActivityIndicator', icon: '⏳', type: 'ActivityIndicator' as ComponentType },
      { label: 'Alert', icon: '⚠️', type: 'Alert' as ComponentType },
      { label: 'Animated', icon: '🎬', type: 'Animated' as ComponentType },
      { label: 'KeyboardAvoidingView', icon: '⌨️', type: 'KeyboardAvoidingView' as ComponentType },
      { label: 'Linking', icon: '🔗', type: 'Linking' as ComponentType },
      { label: 'Modal', icon: '🪟', type: 'Modal' as ComponentType },
      { label: 'PixelRatio', icon: '📐', type: 'PixelRatio' as ComponentType },
      { label: 'RefreshControl', icon: '🔄', type: 'RefreshControl' as ComponentType },
      { label: 'StatusBar', icon: '📊', type: 'StatusBar' as ComponentType }
    ]
  }
} as const;

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
      <ComponentSection
        title="Pages"
        items={COMPONENT_CATALOG.pages}
        onDragStart={() => handleDragStart('page')}
      />

      {/* Containers Section */}
      <ComponentSection
        title="Containers"
        items={COMPONENT_CATALOG.containers}
        onDragStart={() => handleDragStart('container')}
      />

      {/* Components Section - Basic */}
      <ComponentSection
        title="Basic Components"
        items={COMPONENT_CATALOG.components.basic}
        onDragStart={(item) => handleDragStart('component', 'type' in item ? item.type : undefined)}
      />

      {/* Components Section - UI */}
      {/* <ComponentSection
        title="UI Components"
        items={COMPONENT_CATALOG.components.ui}
        onDragStart={(item) => handleDragStart('component', 'type' in item ? item.type : undefined)}
      /> */}

      {/* Components Section - Lists */}
      {/* <ComponentSection
        title="List Components"
        items={COMPONENT_CATALOG.components.lists}
        onDragStart={(item) => handleDragStart('component', 'type' in item ? item.type : undefined)}
      /> */}

      {/* Components Section - Other */}
      {/* <ComponentSection
        title="Other Components"
        items={COMPONENT_CATALOG.components.other}
        onDragStart={(item) => handleDragStart('component', 'type' in item ? item.type : undefined)}
      /> */}
    </div>
  );
}

interface ComponentSectionProps {
  title: string;
  items: readonly { label: string; icon: string; type?: ComponentType }[];
  onDragStart: (item: { label: string; icon: string; type?: ComponentType }) => (event: React.DragEvent) => void;
}

function ComponentSection({ title, items, onDragStart }: ComponentSectionProps) {
  return (
    <section className="mb-6">
      <h3 className="mb-2 text-sm font-medium text-[rgb(var(--color-muted-foreground))]">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item) => (
          <DraggableItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            onDragStart={onDragStart(item)}
          />
        ))}
      </div>
    </section>
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
