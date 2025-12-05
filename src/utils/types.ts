/**
 * Core data types for the UI Builder
 * Defines the hierarchy: Page → Container → Component
 */

// Basic Components
export type BasicComponentType = 'View' | 'Text' | 'Image' | 'TextInput' | 'Pressable' | 'ScrollView';
// UI Components
export type UIComponentType = 'Button' | 'Switch';
// List Components
export type ListComponentType = 'FlatList' | 'SectionList';
// Other Components
export type OtherComponentType = 'ActivityIndicator' | 'Alert' | 'Animated' | 'KeyboardAvoidingView' | 'Linking' | 'Modal' | 'PixelRatio' | 'RefreshControl' | 'StatusBar';
// Legacy types for backward compatibility
export type LegacyComponentType = 'Input' | 'Card' | 'List';
// All component types
export type ComponentType = BasicComponentType | UIComponentType | ListComponentType | OtherComponentType | LegacyComponentType;
export type EntityType = 'Page' | 'Container' | 'Component';
export type CodeMode = 'react' | 'react-native';

export interface ComponentEntity {
  id: string;
  type: ComponentType;
  props: Record<string, unknown>;
  tailwindClassList: string[];
}

export interface ContainerEntity {
  id: string;
  name: string;
  tailwindClassList: string[];
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
  tailwindClassList: string[];
}

export interface ComponentFormData {
  type: ComponentType;
  props: Record<string, unknown>;
  tailwindClassList: string[];
}

// Feature 004: Real-Time Hierarchy Updates
export type IndicatorType = 'color' | 'spacing' | 'text' | 'image' | 'size';

export interface VisualIndicator {
  type: IndicatorType;
  value: string;
  displayValue: string;
  tooltip: string;
  priority: number;
  isValid: boolean;
}

export interface HierarchyViewItem {
  id: string;
  type?: EntityType; // Optional for backwards compatibility
  entityType?: EntityType; // Alternative name used in tests
  displayName?: string; // Optional for backwards compatibility
  fullName?: string; // Optional for backwards compatibility
  isExpanded: boolean;
  isEditing?: boolean; // Optional for backwards compatibility
  level?: number; // Optional for backwards compatibility
  depth?: number; // Alternative name used in tests and calculations
  parentId?: string | null; // Allow null for root items
  indicators?: VisualIndicator[]; // Optional for backwards compatibility
  children?: string[]; // Child entity IDs for expansion logic
}

export interface PropertyChange {
  entityId: string;
  entityType: EntityType;
  field: string;
  oldValue: unknown;
  newValue: unknown;
  timestamp: number;
}

export interface UpdateContext {
  pendingChanges: Map<string, PropertyChange[]>;
  lastUpdate: number;
  batchCount: number;
  isProcessing: boolean;
  loadingStates: Map<string, { 
    isLoading: boolean; 
    startTime: number; 
    isSlowUpdate: boolean; // true when > 100ms
  }>;
}
