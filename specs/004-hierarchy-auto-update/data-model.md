# Data Model: Real-Time Hierarchy Updates in UI Preview

**Feature**: 004-hierarchy-auto-update  
**Created**: December 3, 2025  
**Purpose**: Define data structures for real-time hierarchy updates and visual indicators

## Core Entities

### HierarchyViewItem
Represents a visual item in the hierarchy tree with enhanced display properties.

**Fields**:
- `id: string` - Unique identifier matching entity ID
- `type: EntityType` - 'Page' | 'Container' | 'Component'  
- `displayName: string` - Truncated name (25 chars max) with ellipsis
- `fullName: string` - Complete name for hover tooltip
- `isExpanded: boolean` - Current expansion state in hierarchy
- `isEditing: boolean` - Whether currently being edited in Drawer
- `level: number` - Nesting depth (0 for Pages, 1 for Containers, 2 for Components)
- `parentId?: string` - Parent entity ID for expansion state management
- `indicators: VisualIndicator[]` - Array of visual property indicators

**Relationships**:
- Extends existing `PageEntity`, `ContainerEntity`, `ComponentEntity` data
- Parent-child relationships maintained through `parentId` references
- One-to-many relationship with `VisualIndicator` objects

### VisualIndicator
Defines how different property types are displayed in the hierarchy.

**Fields**:
- `type: IndicatorType` - 'color' | 'spacing' | 'text' | 'image' | 'size'
- `value: string` - Raw property value (e.g., "bg-blue-500", "Submit Form")
- `displayValue: string` - Processed value for display (e.g., "#3B82F6")
- `tooltip: string` - Hover tooltip text
- `priority: number` - Display priority (1-5, higher shows first)
- `isValid: boolean` - Whether the property value is valid

**Validation Rules**:
- Color indicators: Must match Tailwind color pattern `(bg|text|border)-{color}-{shade}`
- Spacing indicators: Must match pattern `(m|p|gap)-{size}` or `(m|p)(t|r|b|l|x|y)-{size}`
- Text indicators: Truncated to 15 characters for display
- Size indicators: Must be numeric values with units (px, rem, %)

### PropertyChange
Tracks what properties changed, their old and new values, and the entity they belong to.

**Fields**:
- `entityId: string` - ID of the entity that changed
- `entityType: EntityType` - Type of entity that changed
- `propertyPath: string` - Dot-notation path to changed property (e.g., "tailwindOptions.classList")
- `oldValue: unknown` - Previous property value
- `newValue: unknown` - New property value
- `timestamp: number` - When change occurred (Date.now())
- `source: ChangeSource` - How change originated ('drawer' | 'direct' | 'batch')

**Lifecycle**:
- Created when property changes detected via React Hook Form
- Queued for batch processing if rapid changes detected
- Applied to hierarchy view after debounce period expires

### UpdateContext
Manages the state of ongoing updates, including which entities are being modified and the update queue.

**Fields**:
- `pendingChanges: Map<string, PropertyChange[]>` - Changes queued by entity ID
- `batchTimeout: NodeJS.Timeout | null` - Current batch update timer
- `isProcessing: boolean` - Whether currently processing updates
- `lastUpdateTime: number` - Timestamp of last completed update
- `activeEntityId: string | null` - Currently edited entity ID
- `expansionState: Map<string, boolean>` - Expansion state by entity ID

**Operations**:
- `queueChange(change: PropertyChange)` - Add change to pending queue
- `processBatch()` - Apply all pending changes to hierarchy view
- `clearQueue(entityId?: string)` - Clear pending changes for entity or all
- `setExpansion(entityId: string, expanded: boolean)` - Update expansion state

### HierarchyDisplayConfig
Configuration for hierarchy display behavior and visual settings.

**Fields**:
- `minWidth: number` - Minimum width in pixels (320)
- `showPixelWidth: boolean` - Whether to display current width
- `truncateLength: number` - Character limit for truncation (25)
- `debounceMs: number` - Debounce delay for real-time updates (500)
- `batchThreshold: number` - Number of changes to trigger batching (3)
- `batchWindowMs: number` - Time window for batch detection (1000)
- `animationDuration: number` - Duration for visual transitions (300ms)

## Extended Existing Entities

### Enhanced BuilderState
Extends existing state to support real-time updates.

**New Fields**:
- `hierarchyViewItems: Map<string, HierarchyViewItem>` - Processed hierarchy data for display
- `updateContext: UpdateContext` - Current update processing state
- `displayConfig: HierarchyDisplayConfig` - Hierarchy display settings

### Enhanced Selection
Extends existing selection to include expansion tracking.

**New Fields**:
- `expansionPath: string[]` - Array of parent IDs leading to selected entity
- `isAutoExpanded: boolean` - Whether selection caused auto-expansion

## State Transitions

### Property Update Flow
1. **Change Detection**: React Hook Form detects property change in Drawer
2. **Change Creation**: `PropertyChange` object created with old/new values
3. **Queue Management**: Change added to `UpdateContext.pendingChanges`
4. **Batch Detection**: Check if change count exceeds threshold in time window
5. **Processing**: Either immediate update (single change) or batched update (multiple)
6. **Hierarchy Update**: `HierarchyViewItem` objects updated with new indicators
7. **Visual Refresh**: React components re-render with updated display data

### Expansion State Management
1. **Edit Initiation**: User selects entity for editing in Drawer
2. **Path Calculation**: Calculate expansion path from root to selected entity
3. **Auto-Expansion**: Set all parents in path to `isExpanded: true`
4. **State Persistence**: Store expansion state in `UpdateContext.expansionState`
5. **Update Preservation**: Maintain expansion during property updates
6. **Focus Management**: Scroll to and highlight currently edited entity

## Validation Schema Extensions

### PropertyChangeSchema (Zod)
```typescript
const PropertyChangeSchema = z.object({
  entityId: z.string().min(1),
  entityType: z.enum(['Page', 'Container', 'Component']),
  propertyPath: z.string().min(1),
  oldValue: z.unknown(),
  newValue: z.unknown(),
  timestamp: z.number().positive(),
  source: z.enum(['drawer', 'direct', 'batch'])
});
```

### VisualIndicatorSchema (Zod)
```typescript
const VisualIndicatorSchema = z.object({
  type: z.enum(['color', 'spacing', 'text', 'image', 'size']),
  value: z.string(),
  displayValue: z.string(),
  tooltip: z.string(),
  priority: z.number().min(1).max(5),
  isValid: z.boolean()
});
```

## Performance Considerations

### Memory Management
- Use `Map` objects for O(1) lookups by entity ID
- Clear processed changes from queue after application
- Limit indicator arrays to maximum 5 items per entity

### Update Efficiency  
- Batch DOM updates using `requestAnimationFrame`
- Use React.memo for indicator components to prevent cascade re-renders
- Debounce rapid changes to reduce processing overhead

### Responsive Behavior
- Hierarchy width calculated using ResizeObserver for accuracy
- Indicator display adapts to available space (hide lower priority items)
- Expansion state preserved across viewport size changes