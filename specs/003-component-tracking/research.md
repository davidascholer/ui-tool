# Research: Component Tracking and Code Export

**Feature**: [spec.md](./spec.md)  
**Plan**: [plan.md](./plan.md)  
**Date**: December 3, 2025

---

## RT-001: Tailwind to React Native Style Conversion

### Decision
Use a mapping table for common Tailwind classes to React Native StyleSheet objects. For unsupported classes, document them and use best-effort conversion.

### Rationale
- React Native doesn't support className prop - requires inline style objects
- Most common Tailwind utilities have direct React Native equivalents
- Complex utilities (gradients, custom animations) may need manual handling

### Implementation Strategy

**Common Mappings**:
```typescript
const tailwindToRN = {
  // Flexbox
  'flex': { display: 'flex' },
  'flex-row': { flexDirection: 'row' },
  'flex-col': { flexDirection: 'column' },
  'items-center': { alignItems: 'center' },
  'justify-center': { justifyContent: 'center' },
  
  // Spacing
  'p-4': { padding: 16 },
  'px-4': { paddingHorizontal: 16 },
  'py-4': { paddingVertical: 16 },
  'm-4': { margin: 16 },
  
  // Colors
  'bg-blue-500': { backgroundColor: '#3b82f6' },
  'text-white': { color: '#ffffff' },
  
  // Typography
  'text-lg': { fontSize: 18 },
  'font-bold': { fontWeight: 'bold' },
  'text-center': { textAlign: 'center' },
  
  // Borders
  'rounded': { borderRadius: 4 },
  'rounded-lg': { borderRadius: 8 },
  'border': { borderWidth: 1 },
};
```

**Unsupported Classes** (document in generated code comments):
- Complex gradients (`bg-gradient-to-r`)
- CSS grid utilities (use flexbox alternative)
- Pseudo-classes (`:hover`, `:focus`)
- Custom animations beyond basic transitions
- Box shadows (React Native has limited shadow support)

### Alternatives Considered
1. **CSS-in-JS library** (styled-components): Rejected - violates Minimal Dependencies principle
2. **Pre-built converter package**: Rejected - adds dependency, may not match our exact needs
3. **Manual conversion only**: Rejected - too much manual work for users

---

## RT-002: Clipboard API Compatibility and Fallbacks

### Decision
Use native Clipboard API with permission handling and fallback modal for unsupported browsers.

### Rationale
- Clipboard API is well-supported in modern browsers (Chrome 66+, Firefox 63+, Safari 13.1+, Edge 79+)
- Provides secure, user-permission-based access to clipboard
- Fallback modal ensures functionality in all scenarios

### Implementation Strategy

**Primary Method** - Clipboard API:
```typescript
async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Clipboard API failed:', err);
    return false;
  }
}
```

**Fallback Method** - Manual copy modal:
- Display code in a `<textarea>` element
- Auto-select text on modal open
- Show "Press Cmd+C to copy" instruction
- Provide "Close" button

**Permission Handling**:
- Request permissions on first use
- Cache permission state to avoid repeated prompts
- Show clear error message if permission denied

**Browser Support**:
- Modern browsers: Use Clipboard API
- Older browsers (pre-2019): Show fallback modal
- No feature detection needed - try/catch handles all cases

### Alternatives Considered
1. **execCommand('copy')**: Deprecated, security issues
2. **Third-party clipboard library**: Unnecessary dependency
3. **Always use fallback modal**: Poor UX, ignores modern browser capabilities

---

## RT-003: JSX Code Generation Best Practices

### Decision
Generate formatted JSX using template strings with proper indentation, following React conventions.

### Rationale
- Template strings provide clean, readable code generation
- Proper indentation makes generated code human-readable
- Following React conventions ensures code is immediately usable

### Implementation Patterns

**Component Code Generation**:
```typescript
function generateButtonCode(component: ComponentEntity): string {
  const { name, tailwindClasses, props } = component;
  const className = tailwindClasses.join(' ');
  
  return `<button className="${className}">\n  ${props.text || 'Button'}\n</button>`;
}
```

**Nested Component Generation**:
```typescript
function generateContainerCode(container: ContainerEntity, children: ComponentEntity[]): string {
  const childrenCode = children
    .map(child => generateComponentCode(child))
    .map(code => indent(code, 2))
    .join('\n');
    
  return `<div className="${container.tailwindClasses.join(' ')}">\n${childrenCode}\n</div>`;
}
```

**Indentation Helper**:
```typescript
function indent(code: string, spaces: number): string {
  const padding = ' '.repeat(spaces);
  return code.split('\n').map(line => padding + line).join('\n');
}
```

**Include Imports**:
```typescript
function generateFullCode(entity: Entity): string {
  const imports = "import React from 'react';\n\n";
  const component = generateComponentCode(entity);
  return imports + component;
}
```

### Code Formatting Rules
1. 2-space indentation
2. Self-closing tags for components without children (`<Input />`)
3. Multi-line props for readability (if > 3 props)
4. Include necessary imports at top
5. Add blank line between imports and component code

### Alternatives Considered
1. **AST-based generation** (Babel): Over-engineered, heavy dependency
2. **Prettier integration**: Adds dependency, users can format themselves
3. **Unformatted code**: Poor developer experience

---

## RT-004: Component Type Code Generation Patterns

### Decision
Create base generator with component-specific overrides for each type (Button, Input, Card, etc.).

### Rationale
- All components share common structure (element, className, children)
- Component-specific props (placeholder, type, src) need custom handling
- Base generator reduces code duplication

### Component Patterns

**Base Pattern** (all components):
```typescript
interface BaseCodeGen {
  element: string;        // HTML element or RN component
  className?: string;     // Tailwind classes
  children?: string;      // Nested content
}
```

**Component-Specific Patterns**:

1. **Button**:
   - React: `<button className="..." onClick={...}>Text</button>`
   - React Native: `<TouchableOpacity style={...} onPress={...}><Text>Text</Text></TouchableOpacity>`

2. **Input**:
   - React: `<input className="..." type="text" placeholder="..." />`
   - React Native: `<TextInput style={...} placeholder="..." />`

3. **Card**:
   - React: `<div className="...">{children}</div>`
   - React Native: `<View style={...}>{children}</View>`

4. **Text**:
   - React: `<p className="...">Content</p>`
   - React Native: `<Text style={...}>Content</Text>`

5. **Image**:
   - React: `<img src="..." alt="..." className="..." />`
   - React Native: `<Image source={{uri: "..."}} style={...} />`

6. **List**:
   - React: `<ul className="...">{items}</ul>`
   - React Native: `<FlatList data={...} renderItem={...} style={...} />`

### Global Metadata Object Structure

Based on user request, maintain global object:
```typescript
const globalCodeMetadata: Record<string, {
  'react-code': string;   // Full React JSX code
  'styles': string;       // Extracted Tailwind classes or style object
  'element': string;      // Base HTML/RN element name
}> = {};
```

**Update Strategy**:
- Generate on entity creation
- Regenerate on property updates
- Clear on entity deletion
- Index by entity ID for fast lookup

### Alternatives Considered
1. **Generate code on-demand only**: Slower click-to-copy performance
2. **Store only raw props, generate at copy time**: More flexible but slower
3. **Pre-generate all formats**: Memory intensive, unnecessary for P2 feature

---

## Summary

All NEEDS CLARIFICATION items resolved:

1. ✅ **React Native style conversion**: Mapping table with documented unsupported classes
2. ✅ **Component imports**: Yes, include imports in generated code
3. ✅ **Notification format**: Toast-style notification (CopyNotification component) with auto-dismiss
4. ✅ **Global metadata structure**: Object with 'react-code', 'styles', 'element' properties

**Ready to proceed to Phase 1: Design & Contracts**
