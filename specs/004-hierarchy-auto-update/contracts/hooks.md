# Hierarchy Update Hooks Contract

**Feature**: Real-Time Hierarchy Updates  
**Type**: React Hooks Interface  
**Purpose**: Define the contract for custom hooks managing hierarchy updates and visual indicators

## useHierarchyUpdates Hook

### Purpose
Manages real-time updates to the hierarchy view when entity properties change.

### Interface

```typescript
interface UseHierarchyUpdatesProps {
  pages: PageEntity[];
  selection: Selection | null;
  onUpdate?: (entityId: string, changes: PropertyChange[]) => void;
}

interface UseHierarchyUpdatesReturn {
  hierarchyItems: Map<string, HierarchyViewItem>;
  updateContext: UpdateContext;
  queueChange: (change: PropertyChange) => void;
  processPending: () => void;
  clearQueue: (entityId?: string) => void;
}

function useHierarchyUpdates(props: UseHierarchyUpdatesProps): UseHierarchyUpdatesReturn;
```

### Behavior Contract

1. **Change Detection**: Automatically process PropertyChange objects when queued
2. **Debouncing**: Apply 500ms debounce for real-time preview updates  
3. **Batching**: Group 3+ changes within 1 second for performance optimization
4. **State Management**: Maintain hierarchy view items synchronized with entity changes
5. **Error Handling**: Gracefully handle invalid property values with auto-reversion

### Performance Guarantees

- Updates complete within 200ms of save action
- Maintains 60 FPS during batch processing
- Memory usage scales linearly with entity count (O(n))

## usePropertyIndicators Hook

### Purpose
Generates and manages visual indicators for entity properties in the hierarchy view.

### Interface

```typescript
interface UsePropertyIndicatorsProps {
  entity: PageEntity | ContainerEntity | ComponentEntity | null;
  maxIndicators?: number;
}

interface UsePropertyIndicatorsReturn {
  indicators: VisualIndicator[];
  isProcessing: boolean;
  invalidProperties: string[];
  refreshIndicators: () => void;
}

function usePropertyIndicators(props: UsePropertyIndicatorsProps): UsePropertyIndicatorsReturn;
```

### Indicator Generation Rules

1. **Color Properties**: Parse bg-*, text-*, border-* classes to color swatches
2. **Spacing Properties**: Parse m-*, p-*, gap-* classes to spacing badges  
3. **Text Content**: Display component text/placeholder values (truncated to 15 chars)
4. **Priority Ordering**: Color (5), Text Content (4), Spacing (3), Size (2), Other (1)
5. **Validation**: Mark invalid Tailwind classes with error indicators

### Visual Representation

- **Color Indicators**: Small colored dots with hex value tooltips
- **Spacing Indicators**: Badges showing rem/px values  
- **Text Indicators**: Truncated content with full text on hover
- **Error Indicators**: Red warning icon for invalid properties

## useBatchUpdates Hook

### Purpose  
Optimizes performance by batching multiple rapid property changes.

### Interface

```typescript
interface UseBatchUpdatesProps {
  threshold: number; // Default: 3 changes
  windowMs: number;  // Default: 1000ms
  onBatch?: (changes: PropertyChange[]) => void;
}

interface UseBatchUpdatesReturn {
  queueChange: (change: PropertyChange) => void;
  flushPending: () => void;
  pendingCount: number;
  isProcessing: boolean;
}

function useBatchUpdates(props: UseBatchUpdatesProps): UseBatchUpdatesReturn;
```

### Batching Logic

1. **Detection**: Monitor change frequency within sliding time window
2. **Triggering**: Batch when threshold exceeded (3+ changes in 1 second)
3. **Processing**: Use requestAnimationFrame for smooth DOM updates
4. **Flushing**: Allow manual flush for immediate processing when needed

## useHierarchyExpansion Hook

### Purpose
Manages expansion state of hierarchy items during property updates.

### Interface

```typescript
interface UseHierarchyExpansionProps {
  hierarchyItems: Map<string, HierarchyViewItem>;
  selection: Selection | null;
  autoExpand?: boolean;
}

interface UseHierarchyExpansionReturn {
  expansionState: Map<string, boolean>;
  expandPath: (entityId: string) => void;
  toggleExpansion: (entityId: string) => void;
  expandAll: () => void;
  collapseAll: () => void;
}

function useHierarchyExpansion(props: UseHierarchyExpansionProps): UseHierarchyExpansionReturn;
```

### Expansion Behavior

1. **Auto-Expansion**: Automatically expand parents when child is selected for editing
2. **Path Calculation**: Calculate expansion path from root to selected entity  
3. **State Preservation**: Maintain expansion state across property updates
4. **Focus Management**: Ensure edited components remain visible and highlighted

## Error Handling Contracts

### Invalid Property Recovery

```typescript
interface PropertyError {
  entityId: string;
  propertyPath: string;
  errorType: 'invalid_tailwind' | 'missing_value' | 'type_mismatch';
  message: string;
  suggestedFix?: string;
}

interface ErrorRecoveryOptions {
  autoRevert: boolean;
  showNotification: boolean;
  logError: boolean;
}
```

### Recovery Actions

1. **Automatic Reversion**: Invalid changes revert to last valid state with notification
2. **Error Indicators**: Visual markers show invalid properties in hierarchy  
3. **Graceful Degradation**: Continue operation even with invalid properties
4. **User Feedback**: Clear error messages with suggested corrections

## Integration Points

### React Hook Form Integration

```typescript
// Hook into form changes for real-time updates
const { watch } = useForm();
const watchedValues = watch();

useEffect(() => {
  // Debounced update to hierarchy
  const change: PropertyChange = {
    entityId: selection?.entityId,
    propertyPath: 'tailwindClassList',
    oldValue: previousValue,
    newValue: watchedValues.classList,
    timestamp: Date.now(),
    source: 'drawer'
  };
  
  queueChange(change);
}, [watchedValues]);
```

### Existing State Management Integration

```typescript
// Integrate with existing useBuilderState
const { state, actions } = useBuilderState();
const { hierarchyItems, queueChange } = useHierarchyUpdates({
  pages: state.pages,
  selection: state.selection,
  onUpdate: (entityId, changes) => {
    // Sync hierarchy updates back to main state
    actions.updateEntityProperties(entityId, changes);
  }
});
```