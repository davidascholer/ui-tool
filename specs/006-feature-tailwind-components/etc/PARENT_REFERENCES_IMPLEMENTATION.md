# Global State with Parent References - Implementation Summary

## Overview
Added parent reference tracking to all entities in the builder state, storing them in global flat maps for easy access and traversal.

## Changes Made

### 1. Type System Updates (`types.ts`)

#### ComponentEntity
Added:
```typescript
parentId: string; // Reference to parent container's id
```

#### ContainerEntity
Added:
```typescript
parentId: string; // Reference to parent page or container id
parentType: 'Page' | 'Container'; // Type of parent
```

#### BuilderState
Added global flat maps:
```typescript
allPages: Record<string, PageEntity>;
allContainers: Record<string, ContainerEntity>;
allComponents: Record<string, ComponentEntity>;
```

### 2. State Management (`state.ts`)

#### New Helper Function: `rebuildGlobalMaps()`
- Recursively traverses the page hierarchy
- Builds flat maps of all pages, containers, and components
- Automatically sets `parentId` and `parentType` for all entities
- Returns the three maps for updating state

#### Updated State Operations
All state-modifying functions now rebuild the global maps:
- `addPage()` - Creates page, rebuilds maps
- `addContainer()` - Creates container with parent refs, rebuilds maps
- `addComponent()` - Creates component with parent ref, rebuilds maps
- `updatePage()` - Updates page, rebuilds maps
- `updateContainer()` - Updates container, rebuilds maps
- `updateComponent()` - Updates component, rebuilds maps
- `deleteEntity()` - Deletes entity, rebuilds maps

#### State Initialization
```typescript
const [state, setState] = useState<BuilderState>({
  pages: [],
  selection: null,
  codeMode: 'react',
  allPages: {},
  allContainers: {},
  allComponents: {},
});
```

### 3. Schema Validation (`schemas.ts`)

#### componentSchema
Added validation:
```typescript
parentId: z.string(),
```

#### containerSchema
Added validation:
```typescript
parentId: z.string(),
parentType: z.enum(['Page', 'Container']),
```

### 4. Builder Page UI (`BuilderPage.tsx`)

Added a floating test button that logs the global state to the console:

```typescript
const handleLogGlobalState = () => {
  console.group('🌍 Global Builder State');
  console.log('Full State:', state);
  console.log('---');
  console.log('All Pages:', state.allPages);
  console.log('All Containers (with parent refs):', state.allContainers);
  console.log('All Components (with parent refs):', state.allComponents);
  console.log('---');
  console.log('Hierarchical Pages:', state.pages);
  console.groupEnd();
};
```

Button UI:
- Fixed position: bottom-right corner
- Blue background (#6366f1)
- Z-index 9999 (always on top)
- Label: "🌍 Log State"

## How Parent References Work

### For Containers
1. When added to a Page: `parentId = pageId`, `parentType = 'Page'`
2. When added to another Container: `parentId = containerId`, `parentType = 'Container'`
3. Supports unlimited nesting depth

### For Components
1. Always added to a Container: `parentId = containerId`
2. No components can exist directly on Pages

### Global Map Population
The `rebuildGlobalMaps()` function:
1. Iterates through all pages
2. For each page, stores it in `allPages[pageId]`
3. Recursively processes all containers:
   - Stores container with parent references in `allContainers[containerId]`
   - For each child:
     - If container: recurses with `parentId = currentContainerId`, `parentType = 'Container'`
     - If component: stores in `allComponents[componentId]` with `parentId = currentContainerId`

## Usage Examples

### Finding a Container's Parent
```typescript
const container = state.allContainers[containerId];
if (container.parentType === 'Page') {
  const parent = state.allPages[container.parentId];
} else {
  const parent = state.allContainers[container.parentId];
}
```

### Finding a Component's Parent Container
```typescript
const component = state.allComponents[componentId];
const parentContainer = state.allContainers[component.parentId];
```

### Finding All Children of a Container
```typescript
const childComponents = Object.values(state.allComponents)
  .filter(c => c.parentId === containerId);
  
const childContainers = Object.values(state.allContainers)
  .filter(c => c.parentId === containerId && c.parentType === 'Container');
```

### Traversing Up the Hierarchy
```typescript
function getAncestors(entityId: string): (PageEntity | ContainerEntity)[] {
  const ancestors: (PageEntity | ContainerEntity)[] = [];
  
  // Start from a container
  let current = state.allContainers[entityId];
  
  while (current) {
    if (current.parentType === 'Page') {
      const page = state.allPages[current.parentId];
      ancestors.unshift(page);
      break;
    } else {
      const parent = state.allContainers[current.parentId];
      ancestors.unshift(parent);
      current = parent;
    }
  }
  
  return ancestors;
}
```

## Testing the Implementation

1. Click the "🌍 Log State" button in the bottom-right corner
2. Open browser console
3. Inspect the logged output:
   - `Full State`: Complete builder state
   - `All Pages`: Flat map of all pages
   - `All Containers`: Flat map with parent references
   - `All Components`: Flat map with parent references
   - `Hierarchical Pages`: Original nested structure

## Benefits

✅ **Easy Parent Lookup**: O(1) access to any entity's parent
✅ **Flat Structure**: No need to traverse tree for entity lookup
✅ **Bidirectional Traversal**: Can go up (parent) or down (children)
✅ **Type Safety**: Parent types validated at compile time
✅ **Auto-maintained**: Maps automatically rebuild on any state change
✅ **Debugging**: Test button provides instant visibility into state

## Notes

- Parent references are automatically maintained by `rebuildGlobalMaps()`
- All state updates trigger map rebuilding to ensure consistency
- The hierarchical `pages` array is still the source of truth
- Global maps are derived data that stays in sync with the hierarchy
- Test files may need `parentId` and `parentType` added to mock objects
