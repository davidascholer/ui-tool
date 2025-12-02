/**
 * Core data types for the UI Builder
 * Defines the hierarchy: Page → Container → Component
 */

export type ComponentType = 'Button' | 'Input' | 'Card' | 'Text' | 'Image' | 'List';
export type EntityType = 'Page' | 'Container' | 'Component';
export type CodeMode = 'react' | 'react-native';

export interface TailwindOptions {
  classList: string[];
  theme?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
}

export interface ComponentEntity {
  id: string;
  type: ComponentType;
  props: Record<string, unknown>;
  tailwindOptions: TailwindOptions;
}

export interface ContainerEntity {
  id: string;
  name: string;
  tailwindOptions: TailwindOptions;
  children: ComponentEntity[];
}

export interface PageEntity {
  id: string;
  name: string;
  meta?: {
    title?: string;
    description?: string;
  };
  children: ContainerEntity[];
}

export interface Selection {
  entityType: EntityType;
  entityId: string;
}

export interface BuilderState {
  pages: PageEntity[];
  selection: Selection | null;
  codeMode: CodeMode;
}

// Drag and drop types
export interface DragItem {
  type: 'page' | 'container' | 'component';
  componentType?: ComponentType;
  sourceId?: string; // For existing items being moved
}

export interface DropResult {
  valid: boolean;
  targetId?: string;
  targetType?: EntityType;
  reason?: string;
}

// Form types for editing
export interface PageFormData {
  name: string;
  meta?: {
    title?: string;
    description?: string;
  };
}

export interface ContainerFormData {
  name: string;
  tailwindOptions: TailwindOptions;
}

export interface ComponentFormData {
  type: ComponentType;
  props: Record<string, unknown>;
  tailwindOptions: TailwindOptions;
}
