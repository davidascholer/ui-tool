# Component Interface Contracts

**Feature**: Real-Time Hierarchy Updates  
**Type**: React Component Interfaces  
**Purpose**: Define enhanced component props and behavior contracts for hierarchy updates

## Enhanced ResultSide Component

### Purpose
Main hierarchy display component with real-time update capabilities and width management.

### Props Interface

```typescript
interface ResultSideProps {
  // Existing props
  pages: PageEntity[];
  selection: Selection | null;
  onSelect?: (selection: Selection | null) => void;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  
  // Enhanced props for real-time updates
  minWidth?: number; // Default: 320px
  showPixelWidth?: boolean; // Default: true
  enableRealTimeUpdates?: boolean; // Default: true
  updateDebounceMs?: number; // Default: 500ms
  onPropertyChange?: (change: PropertyChange) => void;
  onExpansionChange?: (entityId: string, expanded: boolean) => void;
}
```

### Enhanced Behavior Contract

1. **Width Management**: Enforce minimum 320px width with CSS Grid
2. **Pixel Display**: Show current width in top-right corner
3. **Real-Time Updates**: Apply property changes with visual feedback
4. **Expansion Management**: Auto-expand parents during editing
5. **Performance**: Maintain 60 FPS during updates

### Width Display Requirements

```typescript
interface WidthDisplayProps {
  currentWidth: number;
  minWidth: number;
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  className?: string;
}

// Display format: "520px" or "520px (min: 320px)" when at minimum
```

## HierarchyView Component

### Purpose
Dedicated component for rendering hierarchy tree with visual indicators.

### Props Interface

```typescript
interface HierarchyViewProps {
  hierarchyItems: Map<string, HierarchyViewItem>;
  selection: Selection | null;
  expansionState: Map<string, boolean>;
  onSelect: (entityType: EntityType, entityId: string) => void;
  onExpand: (entityId: string, expanded: boolean) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  className?: string;
}
```

### Rendering Contract

1. **Tree Structure**: Render nested hierarchy with proper indentation
2. **Visual Indicators**: Display property indicators with tooltips  
3. **Selection State**: Highlight selected item with colored border and background
4. **Expansion Icons**: Show expand/collapse indicators for containers
5. **Accessibility**: Proper ARIA labels and keyboard navigation

## PropertyIndicators Components

### ColorIndicator Component

```typescript
interface ColorIndicatorProps {
  colorClass: string; // e.g., "bg-blue-500"
  tooltip?: string;
  size?: 'small' | 'medium' | 'large'; // Default: 'small'
  onClick?: () => void;
}
```

**Visual Contract**: 12px colored circle with hover tooltip showing hex value and class name.

### SpacingIndicator Component

```typescript
interface SpacingIndicatorProps {
  spacingClass: string; // e.g., "p-4", "m-2"
  tooltip?: string;
  variant?: 'padding' | 'margin' | 'gap';
}
```

**Visual Contract**: Small badge showing spacing value (e.g., "16px") with icon indicating type.

### TextIndicator Component

```typescript
interface TextIndicatorProps {
  text: string;
  maxLength?: number; // Default: 15
  tooltip?: string;
  variant?: 'content' | 'placeholder' | 'label';
}
```

**Visual Contract**: Truncated text with ellipsis, italic styling for placeholders.

## Enhanced Selectable Component  

### Purpose
Selection wrapper component with real-time update visual feedback.

### Enhanced Props Interface

```typescript
interface SelectableProps {
  // Existing props
  entityType: EntityType;
  entityId: string;
  isSelected: boolean;
  onSelect: (entityType: EntityType, entityId: string) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  size?: 'small' | 'medium' | 'large';
  
  // Enhanced props for updates
  isEditing?: boolean; // Whether currently being edited
  hasUpdates?: boolean; // Whether has pending updates
  updateAnimation?: boolean; // Enable update animations
  indicators?: VisualIndicator[]; // Property indicators to display
}
```

### Visual State Contract

1. **Normal State**: Standard border and background
2. **Selected State**: Blue border (existing behavior)
3. **Editing State**: Colored border with subtle background (new)
4. **Updating State**: Brief animation/pulse during property updates (new)
5. **Error State**: Red border for invalid properties (new)

### Animation Contract

```typescript
interface SelectableAnimations {
  selection: string; // CSS transition for selection changes
  editing: string;   // CSS for editing state highlight  
  update: string;    // Brief animation on property update
  error: string;     // Error state visual feedback
}

// Default animations using Tailwind + Framer Motion
const defaultAnimations: SelectableAnimations = {
  selection: 'transition-all duration-200 ease-in-out',
  editing: 'ring-2 ring-blue-400 ring-opacity-50',
  update: 'animate-pulse duration-300',
  error: 'ring-2 ring-red-400 ring-opacity-75'
};
```

## WidthDisplay Component

### Purpose
Displays current hierarchy section width in top-right corner.

### Props Interface

```typescript
interface WidthDisplayProps {
  width: number;
  minWidth: number;
  unit?: 'px' | 'rem'; // Default: 'px'
  showMinimum?: boolean; // Show "(min: 320px)" when at minimum
  className?: string;
  position?: 'absolute' | 'relative'; // Default: 'absolute'
}
```

### Display Format Contract

- **Above Minimum**: "520px"
- **At Minimum**: "320px (min)"  
- **Responsive**: Hide on mobile viewports (<768px)
- **Styling**: Small, semi-transparent text that doesn't interfere with content

## Integration Event Contracts

### Property Change Events

```typescript
interface PropertyChangeEvent {
  type: 'property_change';
  entityId: string;
  entityType: EntityType;
  propertyPath: string;
  oldValue: unknown;
  newValue: unknown;
  source: 'drawer' | 'direct' | 'batch';
  timestamp: number;
}
```

### Hierarchy Update Events

```typescript
interface HierarchyUpdateEvent {
  type: 'hierarchy_update';
  entityId: string;
  updateType: 'property' | 'expansion' | 'selection';
  changes: PropertyChange[];
  resultingState: HierarchyViewItem;
}
```

### Width Change Events

```typescript
interface WidthChangeEvent {
  type: 'width_change';
  oldWidth: number;
  newWidth: number;
  isMinimumWidth: boolean;
  timestamp: number;
}
```

## Error Boundary Contract

### HierarchyErrorBoundary Component

```typescript
interface HierarchyErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}
```

**Recovery Strategy**: Display simplified hierarchy view without indicators on component errors, maintain core functionality.

## Performance Contracts

### Re-render Optimization

1. **React.memo**: All indicator components memoized with props comparison
2. **useCallback**: All event handlers memoized to prevent prop changes  
3. **useMemo**: Expensive calculations (indicator parsing) cached
4. **Virtual Scrolling**: For hierarchies exceeding 100 items (future enhancement)

### Update Batching

1. **Immediate Updates**: Single property changes (< 200ms)
2. **Batched Updates**: Multiple rapid changes (3+ in 1 second)
3. **Animation Coordination**: Use requestAnimationFrame for smooth transitions
4. **Memory Management**: Clear processed updates from queues promptly