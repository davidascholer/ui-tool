# Feature Specification: Component Tracking and Code Export

**Feature Branch**: `003-component-tracking`  
**Created**: December 3, 2025  
**Status**: Draft  
**Input**: User description: "Create a system for keeping track of the components generated including their editable styles as well as their live code in text form. When you click on the component in the result section, the live code will be copied to the clipboard."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Component Metadata Tracking (Priority: P1)

Users need the system to automatically track metadata for each component they create, including the component's current property values and styles. This metadata is essential for generating accurate code representations and enabling future features like undo/redo.

**Why this priority**: Foundation for all other features - without tracking component state, we cannot generate code or provide clipboard copy functionality.

**Independent Test**: Create a page with containers and components, verify that the system maintains accurate metadata for each entity including all editable properties (name, tailwind classes, component-specific props).

**Acceptance Scenarios**:

1. **Given** a user drags a Button component into a Container, **When** they view the component metadata, **Then** the system tracks the component type, parent relationship, and default properties
2. **Given** a user edits a component's Tailwind classes in the Drawer, **When** they save changes, **Then** the metadata is updated to reflect the new style values
3. **Given** a user creates multiple components, **When** they inspect the state, **Then** each component has a unique identifier and maintains its property values independently

---

### User Story 2 - Live Code Generation (Priority: P1)

Users need to generate live React/React Native code representations of components on-demand. The code should reflect the current state of each component including all user-edited properties and styles.

**Why this priority**: Core value proposition - users want to see the code output for components they build.

**Independent Test**: Create a page hierarchy with various components, generate code for a specific component, verify the output is valid React/React Native syntax with correct props and styling.

**Acceptance Scenarios**:

1. **Given** a Button component with custom Tailwind classes, **When** the user requests React code, **Then** the system generates valid JSX with className prop containing the correct classes
2. **Given** a Container with nested components, **When** the user requests code, **Then** the system generates properly nested JSX reflecting the hierarchy
3. **Given** an Input component with custom props (placeholder, type), **When** the user requests React Native code, **Then** the system generates TextInput with correct prop mappings
4. **Given** a component with no custom styles, **When** the user requests code, **Then** the system generates minimal valid code with default component structure

---

### User Story 3 - Click-to-Copy Functionality (Priority: P1)

Users need to click on any component in the Result canvas to instantly copy its live code to the clipboard. This provides quick access to code without opening additional panels or menus.

**Why this priority**: Primary user interaction pattern - fastest way to extract code from the visual builder.

**Independent Test**: Click on various components in the Result canvas, verify clipboard contains correct component code, test with different component types and nesting levels.

**Acceptance Scenarios**:

1. **Given** a user has components in the Result canvas, **When** they click on a Button component, **Then** the Button's React code is copied to the clipboard and a success notification appears
2. **Given** nested components (Container with children), **When** the user clicks the Container, **Then** the Container's code including all nested children is copied to the clipboard
3. **Given** the user clicks rapidly on different components, **When** each click completes, **Then** the clipboard updates to reflect the most recently clicked component's code
4. **Given** a component with complex properties, **When** the user clicks it, **Then** the copied code includes all current property values and styling

---

### User Story 4 - Code Format Selection (Priority: P2)

Users need to choose between React (web) and React Native (mobile) code formats when copying component code. Different projects require different output formats.

**Why this priority**: Extends value for mobile developers but not blocking for initial web-focused users.

**Independent Test**: Toggle between React and React Native modes, click components, verify clipboard contains format-appropriate code (className vs style objects, div vs View, etc.).

**Acceptance Scenarios**:

1. **Given** the user selects "React" output format, **When** they click a component, **Then** the clipboard contains web-specific JSX (div, button, input elements with className)
2. **Given** the user selects "React Native" output format, **When** they click a component, **Then** the clipboard contains mobile-specific JSX (View, TouchableOpacity, TextInput with style props)
3. **Given** Tailwind classes on a component, **When** React format is selected, **Then** classes are preserved in className prop
4. **Given** Tailwind classes on a component, **When** React Native format is selected, **Then** classes are converted to inline style objects

---

### Edge Cases

- What happens when a user clicks on an empty Page (no containers)? → Copy Page wrapper code only
- What happens when a user clicks on the canvas background (not a component)? → No action, or copy entire page structure
- How does the system handle clicking on overlapping components? → Click target is the most specific (deepest) component in the hierarchy
- What happens if clipboard access is denied by the browser? → Show error notification with fallback option to display code in modal
- How does the system handle very large component trees (100+ nested elements)? → Generate code efficiently, possibly with warning for performance
- What happens when component metadata is corrupted or missing? → Generate code with default values and log warning

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST maintain a metadata store for each created entity (Page, Container, Component) including unique ID, type, parent relationship, and all editable properties
- **FR-002**: System MUST update metadata in real-time when users edit properties through the Drawer forms
- **FR-003**: System MUST generate valid React JSX code from component metadata on-demand
- **FR-004**: System MUST generate valid React Native JSX code from component metadata on-demand
- **FR-005**: System MUST copy generated code to system clipboard when user clicks a component in the Result canvas
- **FR-006**: System MUST display a success notification when code is copied to clipboard
- **FR-007**: System MUST handle clipboard access failures gracefully with fallback UI
- **FR-008**: System MUST identify the clicked component correctly even with nested/overlapping elements
- **FR-009**: System MUST include all child components when generating code for container elements
- **FR-010**: System MUST convert Tailwind classes to appropriate format based on selected output (className for React, style objects for React Native)
- **FR-011**: System MUST generate code that includes all user-edited properties (names, custom classes, component-specific props)
- **FR-012**: Users MUST be able to toggle between React and React Native output formats
- **FR-013**: System MUST preserve component hierarchy and nesting structure in generated code
- **FR-014**: System MUST generate syntactically valid and runnable code for all supported component types

### Key Entities

- **ComponentMetadata**: Represents the complete state of a component including type, properties, styles, and parent/child relationships. Extends existing entity types (PageEntity, ContainerEntity, ComponentEntity) with code generation metadata.
- **CodeGenerator**: Service responsible for transforming ComponentMetadata into React or React Native code strings. Handles JSX generation, prop formatting, and style conversion.
- **ClipboardService**: Manages clipboard operations including write access, permission handling, and fallback UI display.
- **CodeFormat**: Enum representing output format (React | ReactNative) selected by user.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can click any component in the Result canvas and have its code copied to clipboard in under 500ms
- **SC-002**: Generated code is syntactically valid and can be directly pasted into a React/React Native project without errors
- **SC-003**: System correctly tracks metadata for all component types (Page, Container, Section, Button, Input, Card, Text, Image, List)
- **SC-004**: Users can generate both React and React Native code formats with 100% accuracy for all supported components
- **SC-005**: Clipboard copy operation succeeds in 99%+ of cases in modern browsers (Chrome, Firefox, Safari, Edge)
- **SC-006**: Users receive immediate feedback (notification or error) within 200ms of clicking a component
- **SC-007**: Generated code includes all user customizations (custom classes, edited properties) with 100% fidelity

## Scope & Boundaries *(mandatory)*

### In Scope

- Real-time metadata tracking for all entity types
- React code generation with JSX and className syntax
- React Native code generation with View/Text/TouchableOpacity components
- Click-to-copy interaction on Result canvas components
- Code format toggle (React vs React Native)
- Clipboard API integration with browser permission handling
- Success/error notifications for copy operations
- Code generation for nested component hierarchies

### Out of Scope

- TypeScript type definitions in generated code (future enhancement)
- Code formatting/prettification (users can use their own formatters)
- Export to file functionality (separate feature)
- Undo/redo of code generation (covered by existing state management)
- Component prop validation beyond basic types (future enhancement)
- Custom component creation (only built-in components supported)
- CSS-in-JS or styled-components output (only Tailwind/inline styles)
- Server-side code generation or build tooling

## Assumptions *(mandatory)*

1. Users are building for web (React) or mobile (React Native) platforms, not other frameworks
2. Users are familiar with React/React Native syntax and can integrate generated code into their projects
3. Modern browsers with Clipboard API support are being used (fallback for older browsers)
4. Components use Tailwind CSS for styling (web) or require conversion to inline styles (mobile)
5. Generated code will be manually integrated into projects, not automatically deployed
6. Users understand that generated code is a starting point and may need refinement
7. The existing drag-and-drop UI builder (feature 001) is fully functional and tested
8. Component metadata is stored in memory (no persistence required yet)

## Non-Functional Requirements *(if applicable)*

### Performance

- Code generation completes in under 500ms for component trees up to 100 elements
- Clipboard copy operation completes in under 200ms
- Metadata updates are synchronous and complete within the same render cycle
- No perceptible lag when clicking components to copy code

### Browser Compatibility

- Support modern browsers: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Graceful degradation for browsers without Clipboard API (show code in modal)

### Accessibility

- Click-to-copy functionality is keyboard accessible (focus + Enter key)
- Success/error notifications are announced to screen readers
- Code output includes semantic HTML elements when appropriate

### Code Quality

- Generated code passes ESLint with standard React/React Native rules
- Generated JSX is properly formatted with consistent indentation
- All generated components are self-contained and importable

## Dependencies *(if applicable)*

### Technical Dependencies

- Existing UI builder state management system (useBuilderState hook)
- Existing entity types (PageEntity, ContainerEntity, ComponentEntity)
- Browser Clipboard API for clipboard operations
- Tailwind CSS class definitions for style conversion (React Native)

### Feature Dependencies

- **Feature 001** (Drag-and-drop UI builder) MUST be complete and functional
- Existing Drawer forms for property editing MUST be working
- Existing component selection mechanism MUST be operational

### External Dependencies

None - feature is self-contained within the existing application

## Open Questions *(if applicable)*

1. Should clicking the canvas background copy the entire page structure, or do nothing?
   - **Recommendation**: Copy entire page structure for convenience
   
2. Should we show a preview of generated code before copying, or copy immediately?
   - **Recommendation**: Copy immediately for speed, add preview option in future

3. How should we handle Tailwind classes that don't have direct React Native equivalents?
   - **Recommendation**: Use best-effort conversion, document unsupported classes

4. What should be the default code format (React vs React Native)?
   - **Recommendation**: React (web) as default since it's more common

5. Should code generation include import statements for React/React Native?
   - **Recommendation**: Yes, include necessary imports at the top of generated code

## Related Documentation *(if applicable)*

- **Feature 001 Specification**: `/specs/001-drag-drop-ui-builder/spec.md` - Foundation feature for UI building
- **Feature 001 Data Model**: `/specs/001-drag-drop-ui-builder/data-model.md` - Entity structure this feature extends
- **React Documentation**: https://react.dev/reference/react - Target code format
- **React Native Documentation**: https://reactnative.dev/docs/components-and-apis - Mobile code format
- **Clipboard API**: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API - Browser API for clipboard operations

