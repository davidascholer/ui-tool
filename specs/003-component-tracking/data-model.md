# Data Model: Component Tracking and Code Export

**Feature**: [spec.md](./spec.md)  
**Date**: December 3, 2025

---

## Entity Extensions

### ComponentCodeMetadata

Represents the code representation of a component in different formats.

**Properties**:
- `react-code`: Full React JSX code string including imports
- `styles`: Extracted Tailwind classes (React) or style object (React Native)
- `element`: Base HTML element name (React) or React Native component name

**Example**:
```typescript
{
  'react-code': "import React from 'react';\n\n<button className=\"px-4 py-2 bg-blue-500 text-white rounded\">Click Me</button>",
  'styles': "px-4 py-2 bg-blue-500 text-white rounded",
  'element': "button"
}
```

---

### Extended Entity Types

**PageEntity** (extended):
```typescript
interface PageEntity {
  id: string;
  type: 'Page';
  name: string;
  seoTitle?: string;
  seoDescription?: string;
  children: string[]; // Container IDs
  codeMetadata?: ComponentCodeMetadata; // NEW
}
```

**ContainerEntity** (extended):
```typescript
interface ContainerEntity {
  id: string;
  type: 'Container';
  name: string;
  tailwindClasses: string[];
  children: string[]; // Component IDs
  codeMetadata?: ComponentCodeMetadata; // NEW
}
```

**ComponentEntity** (extended):
```typescript
interface ComponentEntity {
  id: string;
  type: 'Component';
  componentType: ComponentType;
  tailwindClasses: string[];
  props: Record<string, unknown>;
  codeMetadata?: ComponentCodeMetadata; // NEW
}
```

---

## New Types

### CodeFormat

Enum representing the target code format.

```typescript
type CodeFormat = 'react' | 'react-native';
```

**Usage**:
- User selects format via toggle in UI
- Code generators use format to determine output structure
- Default: `'react'`

---

### CodeGeneratorOptions

Configuration options for code generation.

```typescript
interface CodeGeneratorOptions {
  format: CodeFormat;
  indent: number; // Number of spaces for indentation
  includeImports: boolean; // Whether to include import statements
}
```

**Defaults**:
```typescript
{
  format: 'react',
  indent: 2,
  includeImports: true
}
```

---

### GlobalCodeMetadata

Global store for all component code metadata, indexed by entity ID.

```typescript
type GlobalCodeMetadata = Record<string, ComponentCodeMetadata>;
```

**Example**:
```typescript
{
  "page-1": {
    'react-code': "import React from 'react';\n\n<div className=\"min-h-screen\">{/* children */}</div>",
    'styles': "min-h-screen",
    'element': "div"
  },
  "button-1": {
    'react-code': "import React from 'react';\n\n<button className=\"px-4 py-2 bg-blue-500\">Click</button>",
    'styles': "px-4 py-2 bg-blue-500",
    'element': "button"
  }
}
```

---

## State Management

### BuilderState (extended)

Add code metadata management to existing state:

```typescript
interface BuilderState {
  pages: PageEntity[];
  containers: Record<string, ContainerEntity>;
  components: Record<string, ComponentEntity>;
  selection: Selection | null;
  codeFormat: CodeFormat; // NEW - selected output format
  globalCodeMetadata: GlobalCodeMetadata; // NEW - cached code representations
}
```

### State Actions (new)

```typescript
interface BuilderActions {
  // ... existing actions ...
  
  // NEW code metadata actions
  setCodeFormat: (format: CodeFormat) => void;
  updateCodeMetadata: (entityId: string, metadata: ComponentCodeMetadata) => void;
  regenerateAllCodeMetadata: () => void;
}
```

---

## Relationships

```
BuilderState
├── pages[]
│   └── codeMetadata (optional)
├── containers{}
│   └── [id]: codeMetadata (optional)
├── components{}
│   └── [id]: codeMetadata (optional)
├── codeFormat
└── globalCodeMetadata{}
    └── [entityId]: { 'react-code', 'styles', 'element' }
```

**Key Relationships**:
1. Each entity (Page, Container, Component) MAY have `codeMetadata`
2. `globalCodeMetadata` indexes all entities by ID for fast lookup
3. `codeFormat` determines which generator to use (React vs React Native)

---

## Data Flow

1. **Entity Creation**:
   - User drags component to canvas
   - State creates entity with unique ID
   - Code generator creates initial metadata
   - Metadata stored in entity and global index

2. **Property Edit**:
   - User edits properties in Drawer
   - State updates entity properties
   - Code generator regenerates metadata
   - Global index updated

3. **Click-to-Copy**:
   - User clicks component in ResultSide
   - System retrieves entity ID from click event
   - Lookup metadata in global index by ID
   - Copy `react-code` to clipboard
   - Show success notification

4. **Format Toggle**:
   - User toggles React ↔ React Native
   - State updates `codeFormat`
   - Trigger regeneration of all metadata
   - Update global index with new format

---

## Validation

### Zod Schemas (new)

```typescript
import { z } from 'zod';

export const componentCodeMetadataSchema = z.object({
  'react-code': z.string(),
  'styles': z.string(),
  'element': z.string(),
});

export const codeFormatSchema = z.enum(['react', 'react-native']);

export const codeGeneratorOptionsSchema = z.object({
  format: codeFormatSchema,
  indent: z.number().min(0).max(8),
  includeImports: z.boolean(),
});
```

---

## Performance Considerations

### Code Metadata Caching
- **Strategy**: Generate once, update only on entity changes
- **Benefit**: Fast click-to-copy (< 200ms)
- **Trade-off**: Slightly more memory usage

### Lazy Generation
- **Strategy**: Generate metadata only for visible components initially
- **Benefit**: Faster page load for large hierarchies
- **Trade-off**: Small delay on first interaction

**Recommendation**: Use eager generation for MVP, optimize later if needed.

---

## Migration Strategy

### Backward Compatibility

Existing entities without `codeMetadata` are still valid:
1. Check if metadata exists
2. If missing, generate on-demand
3. Cache for future use

**No breaking changes to existing Feature 001 data structures.**

---

## Example Usage

### Creating a Component with Metadata

```typescript
const button = createButton({
  tailwindClasses: ['px-4', 'py-2', 'bg-blue-500'],
  props: { text: 'Click Me' }
});

// Code metadata generated automatically
console.log(button.codeMetadata);
// {
//   'react-code': '<button className="px-4 py-2 bg-blue-500">Click Me</button>',
//   'styles': 'px-4 py-2 bg-blue-500',
//   'element': 'button'
// }
```

### Retrieving Code on Click

```typescript
function handleComponentClick(entityId: string) {
  const metadata = state.globalCodeMetadata[entityId];
  if (metadata) {
    copyToClipboard(metadata['react-code']);
    showNotification('Code copied!');
  }
}
```

### Toggling Format

```typescript
function handleFormatToggle(newFormat: CodeFormat) {
  actions.setCodeFormat(newFormat);
  actions.regenerateAllCodeMetadata();
  showNotification(`Switched to ${newFormat} format`);
}
```
