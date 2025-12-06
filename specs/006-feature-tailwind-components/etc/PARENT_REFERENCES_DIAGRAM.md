# Parent Reference Architecture Diagram

## Hierarchical Structure (Source of Truth)
```
BuilderState
├── pages: PageEntity[]
│   └── PageEntity
│       ├── id: "page-1"
│       ├── name: "Home"
│       └── children: ContainerEntity[]
│           ├── ContainerEntity
│           │   ├── id: "container-1"
│           │   ├── name: "Header"
│           │   ├── parentId: "page-1" ⬅️
│           │   ├── parentType: "Page" ⬅️
│           │   └── children: (ComponentEntity | ContainerEntity)[]
│           │       ├── ComponentEntity
│           │       │   ├── id: "component-1"
│           │       │   ├── type: "Button"
│           │       │   └── parentId: "container-1" ⬅️
│           │       └── ContainerEntity (nested)
│           │           ├── id: "container-2"
│           │           ├── name: "Nav"
│           │           ├── parentId: "container-1" ⬅️
│           │           ├── parentType: "Container" ⬅️
│           │           └── children: ComponentEntity[]
│           │               └── ComponentEntity
│           │                   ├── id: "component-2"
│           │                   └── parentId: "container-2" ⬅️
│           └── ContainerEntity
│               ├── id: "container-3"
│               ├── name: "Footer"
│               ├── parentId: "page-1" ⬅️
│               └── parentType: "Page" ⬅️
│
├── allPages: Record<string, PageEntity>
│   └── "page-1": PageEntity { id, name, children, ... }
│
├── allContainers: Record<string, ContainerEntity> ⬅️ WITH PARENT REFS
│   ├── "container-1": { ..., parentId: "page-1", parentType: "Page" }
│   ├── "container-2": { ..., parentId: "container-1", parentType: "Container" }
│   └── "container-3": { ..., parentId: "page-1", parentType: "Page" }
│
└── allComponents: Record<string, ComponentEntity> ⬅️ WITH PARENT REFS
    ├── "component-1": { ..., parentId: "container-1" }
    └── "component-2": { ..., parentId: "container-2" }
```

## Data Flow

### When Adding an Entity

```
User Action (Drag & Drop)
    ↓
addContainer(parentId, name) or addComponent(containerId, type)
    ↓
Create new entity with temporary parent refs
    ↓
Update pages hierarchy (nested structure)
    ↓
Call rebuildGlobalMaps(updatedPages)
    ↓
Traverse entire hierarchy
    ↓
Build flat maps with correct parent references:
  - allPages[id] = page
  - allContainers[id] = container (with parentId, parentType)
  - allComponents[id] = component (with parentId)
    ↓
Update state with new pages + global maps
    ↓
React re-renders with updated state
```

### Parent Reference Flow

```
rebuildGlobalMaps(pages)
    │
    ├─→ For each page
    │   └─→ allPages[page.id] = page
    │
    └─→ For each container in page.children
        │
        ├─→ processContainer(container, page.id, 'Page')
        │   │
        │   ├─→ allContainers[container.id] = {
        │   │       ...container,
        │   │       parentId: page.id,
        │   │       parentType: 'Page'
        │   │   }
        │   │
        │   └─→ For each child in container.children
        │       │
        │       ├─→ If child is Container (has 'name' & 'children')
        │       │   └─→ processContainer(child, container.id, 'Container') [RECURSE]
        │       │
        │       └─→ If child is Component (has 'type')
        │           └─→ allComponents[child.id] = {
        │                   ...child,
        │                   parentId: container.id
        │               }
        │
        └─→ Return { allPages, allContainers, allComponents }
```

## Test Button Output Example

When you click "🌍 Log State", you'll see:

```javascript
🌍 Global Builder State
  Full State: {
    pages: [{...}],
    selection: null,
    codeMode: 'react',
    allPages: {...},
    allContainers: {...},
    allComponents: {...}
  }
  ---
  All Pages: {
    'page-1': {
      id: 'page-1',
      name: 'Home',
      children: [...]
    }
  }
  All Containers (with parent refs): {
    'container-1': {
      id: 'container-1',
      name: 'Header',
      parentId: 'page-1',      ⬅️ Parent reference
      parentType: 'Page',      ⬅️ Parent type
      children: [...]
    },
    'container-2': {
      id: 'container-2',
      name: 'Nav',
      parentId: 'container-1', ⬅️ Nested container reference
      parentType: 'Container', ⬅️ Parent is a container
      children: [...]
    }
  }
  All Components (with parent refs): {
    'component-1': {
      id: 'component-1',
      type: 'Button',
      parentId: 'container-1', ⬅️ Parent container reference
      props: {...}
    }
  }
  ---
  Hierarchical Pages: [...]
```

## Query Patterns

### Find Entity's Parent
```typescript
// For a container
const container = state.allContainers[containerId];
const parent = container.parentType === 'Page' 
  ? state.allPages[container.parentId]
  : state.allContainers[container.parentId];

// For a component
const component = state.allComponents[componentId];
const parentContainer = state.allContainers[component.parentId];
```

### Find All Siblings
```typescript
// Get all siblings of a component
const component = state.allComponents[componentId];
const siblings = Object.values(state.allComponents)
  .filter(c => c.parentId === component.parentId && c.id !== componentId);
```

### Find All Descendants
```typescript
function getAllDescendants(containerId: string): (ContainerEntity | ComponentEntity)[] {
  const descendants: (ContainerEntity | ComponentEntity)[] = [];
  
  // Get direct children
  const childContainers = Object.values(state.allContainers)
    .filter(c => c.parentId === containerId && c.parentType === 'Container');
  const childComponents = Object.values(state.allComponents)
    .filter(c => c.parentId === containerId);
  
  descendants.push(...childContainers, ...childComponents);
  
  // Recursively get descendants of child containers
  childContainers.forEach(child => {
    descendants.push(...getAllDescendants(child.id));
  });
  
  return descendants;
}
```

### Find Root Page
```typescript
function findRootPage(entityId: string, entityType: EntityType): PageEntity | null {
  if (entityType === 'Page') {
    return state.allPages[entityId];
  }
  
  if (entityType === 'Component') {
    const component = state.allComponents[entityId];
    entityId = component.parentId;
    entityType = 'Container';
  }
  
  // Now we have a container, traverse up
  let container = state.allContainers[entityId];
  while (container && container.parentType !== 'Page') {
    container = state.allContainers[container.parentId];
  }
  
  return container ? state.allPages[container.parentId] : null;
}
```
