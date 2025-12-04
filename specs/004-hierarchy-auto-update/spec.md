# Feature Specification: Real-Time Hierarchy Updates in UI Preview

**Feature Branch**: `004-hierarchy-auto-update`  
**Created**: December 3, 2025  
**Status**: Draft  
**Input**: User description: "Expand on the ui preview section. Every time a page, container, or component is saved, update the view in the Hierarchy so that it reflects the new properties."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Immediate Hierarchy Reflection on Property Changes (Priority: P1)

Users need to see their property changes reflected immediately in the hierarchy view whenever they modify a page, container, or component through the Drawer editor. This provides instant visual feedback and ensures the hierarchy view stays synchronized with the actual component state.

**Why this priority**: Core user experience - users expect immediate visual feedback when making changes to maintain confidence in their edits.

**Independent Test**: Open any component in the Drawer editor, modify properties (name, tailwind classes), save changes, and verify the hierarchy view immediately reflects the new values without requiring page refresh or manual action.

**Acceptance Scenarios**:

1. **Given** a Page is selected in the hierarchy view, **When** the user changes the page name in the Drawer and saves, **Then** the hierarchy view immediately displays the new page name
2. **Given** a Container is selected with default styling, **When** the user adds Tailwind classes in the Drawer and saves, **Then** the hierarchy view shows visual indicators of the new styling (colors, borders, spacing)
3. **Given** a Component (Button) is selected, **When** the user changes its text content and styling properties in the Drawer and saves, **Then** the hierarchy view updates to show the new text and visual appearance
4. **Given** multiple entities are nested (Page > Container > Component), **When** any entity's properties are modified and saved, **Then** only that specific entity updates in the hierarchy while maintaining the correct parent-child relationships

---

### User Story 2 - Visual Property Indicators in Hierarchy View (Priority: P1)

Users need to see visual representations of their component properties directly in the hierarchy view. This includes displaying component names, applied Tailwind classes as visual cues, and component-specific properties like text content or image sources.

**Why this priority**: Essential for usability - users need to identify and distinguish between components at a glance without selecting each one.

**Independent Test**: Create various components with different properties and verify the hierarchy view displays meaningful visual indicators for each component type and their current state.

**Acceptance Scenarios**:

1. **Given** a Container with background color classes (bg-blue-500), **When** viewing the hierarchy, **Then** the Container item displays with a small blue dot badge, showing "bg-blue-500" on hover
2. **Given** a Button component with custom text "Submit Form", **When** viewing the hierarchy, **Then** the Button item shows the actual text content alongside the component type
3. **Given** an Input component with placeholder "Enter your email", **When** viewing the hierarchy, **Then** the Input item displays the placeholder text as a property indicator
4. **Given** an Image component with a source URL, **When** viewing the hierarchy, **Then** the Image item shows a small thumbnail preview or the filename
5. **Given** components with margin/padding classes (m-4, p-2), **When** viewing the hierarchy, **Then** spacing indicators or badges show the applied spacing values

---

### User Story 3 - Hierarchy View Expansion State Management (Priority: P2)

Users need the hierarchy view to intelligently manage the expansion state of nested elements when properties change. When a user is editing a deeply nested component, the hierarchy should maintain focus on that area and keep relevant parent containers expanded.

**Why this priority**: Improves workflow efficiency by reducing navigation overhead when working with complex hierarchies.

**Independent Test**: Create a deeply nested structure (Page > Container > Components), edit properties of nested elements, and verify the hierarchy maintains appropriate expansion states and visual focus.

**Acceptance Scenarios**:

1. **Given** a user is editing a Component nested inside a Container, **When** they save property changes, **Then** the hierarchy keeps the parent Container expanded and the edited Component highlighted with a colored border and subtle background
2. **Given** multiple Containers are collapsed in the hierarchy, **When** a user selects and edits a Component within a collapsed Container, **Then** the hierarchy automatically expands the parent Container to show the updated Component
3. **Given** a user adds a new Container to a Page, **When** the Container is created, **Then** the hierarchy expands to show the new Container and focuses on it for immediate editing
4. **Given** a user deletes a Component from an expanded Container, **When** the deletion is confirmed, **Then** the hierarchy removes the Component and maintains the Container's expanded state if it has remaining children

---

### User Story 4 - Real-Time Preview Updates During Editing (Priority: P2)

Users need to see live previews of their changes in the hierarchy view while they're typing in the Drawer editor, not just after saving. This provides immediate feedback and helps users understand the impact of their changes before committing them.

**Why this priority**: Enhances user experience but not critical for basic functionality - users can still work effectively with save-to-update behavior.

**Independent Test**: Open a component in the Drawer editor, make changes to various properties, and verify the hierarchy view shows live previews as the user types (with appropriate debouncing to prevent performance issues).

**Acceptance Scenarios**:

1. **Given** a Container name field is focused in the Drawer, **When** the user types new characters, **Then** the hierarchy view updates the Container name in real-time with a visual indicator showing it's being edited
2. **Given** a Component's text content field is being edited, **When** the user types, **Then** the hierarchy shows the updated text with a subtle visual cue (italic, dimmed, or "editing" badge)
3. **Given** a user is adding Tailwind classes to a component, **When** they type valid class names, **Then** the hierarchy preview updates to show the styling changes as they type
4. **Given** a user makes multiple rapid changes, **When** they pause typing for 500ms, **Then** the hierarchy updates to reflect the current state without overwhelming the UI with constant changes

---

### Edge Cases

- What happens when a user's property changes result in invalid Tailwind classes? → Hierarchy automatically reverts to last valid state and displays error notification
- How does the system handle very long component names or property values? → Truncate after 25 characters with ellipsis and show full value on hover
- What happens when multiple users are editing the same hierarchy simultaneously? → Not applicable for single-user application, but consider future collaborative features
- How does the system handle performance with 100+ components updating simultaneously? → Implement efficient diffing and batch updates to prevent UI lag
- What happens when a user rapidly switches between editing different components? → Debounce updates and cancel pending operations to show only the most recent state
- How does the hierarchy view handle components with no visible properties? → Show default labels and component type indicators

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST update the hierarchy view immediately when any entity's properties are saved through the Drawer editor
- **FR-002**: System MUST display visual indicators in the hierarchy view for applied Tailwind classes using small colored dots/badges with class names shown on hover (colors, spacing, typography)
- **FR-003**: System MUST show component-specific property values in the hierarchy view (text content, placeholder values, image sources)
- **FR-004**: System MUST maintain expansion states of parent containers when child components are updated
- **FR-005**: System MUST automatically expand collapsed containers when their child components are being edited
- **FR-006**: System MUST highlight the currently edited component in the hierarchy view using a colored border with subtle background
- **FR-007**: System MUST provide real-time preview updates in the hierarchy view during property editing (with 500ms debounce)
- **FR-008**: System MUST handle invalid property values gracefully by automatically reverting to last valid state with error notification
- **FR-009**: System MUST truncate property values longer than 25 characters in hierarchy display and provide full values on hover
- **FR-010**: System MUST batch 3 or more property changes occurring within 1 second to prevent UI performance degradation
- **FR-011**: System MUST maintain selection state when hierarchy updates occur, keeping the edited component selected
- **FR-012**: System MUST provide visual feedback during the update process (loading states, transitions) for changes that take longer than 100ms

### Key Entities

- **HierarchyViewItem**: Represents a visual item in the hierarchy tree with display properties, expansion state, and visual indicators
- **PropertyChange**: Tracks what properties changed, their old and new values, and the entity they belong to  
- **UpdateContext**: Manages the state of ongoing updates, including which entities are being modified and the update queue
- **VisualIndicator**: Defines how different property types are displayed in the hierarchy (color swatches, text previews, spacing badges)

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can see property changes reflected in the hierarchy view within 200ms of saving changes
- **SC-002**: 95% of Tailwind class changes display appropriate visual indicators in the hierarchy view (colors, spacing, borders)
- **SC-003**: Component property values (names, text content, placeholders) are visible in the hierarchy without requiring selection
- **SC-004**: Real-time preview updates occur within 500ms of stopping typing in the Drawer editor
- **SC-005**: Hierarchy view maintains 60 FPS performance when updating up to 50 components simultaneously
- **SC-006**: Users can identify component types and their current state in the hierarchy without selecting individual components
- **SC-007**: Navigation efficiency improves by 40% - users spend less time expanding/collapsing hierarchy items to find recently edited components

## Clarifications

### Session 2025-12-03

- Q: How should visual indicators for Tailwind classes (colors, spacing) be displayed in the hierarchy view? → A: Small colored dots/badges with class names on hover
- Q: What character limit should be used for truncating long component names and property values? → A: 25 characters
- Q: When invalid Tailwind classes are entered, should reversion to last valid state be automatic or require user confirmation? → A: Automatic reversion with notification
- Q: How should the currently edited component be visually highlighted in the hierarchy view? → A: Colored border with subtle background
- Q: What threshold should trigger batch updates for multiple rapid property changes? → A: 3 changes within 1 second

## Assumptions *(mandatory)*

- The existing Drawer component form handling system will trigger update events when properties are saved
- The current hierarchy view in the ResultSide component can be extended to support visual property indicators
- The BuilderState management system can accommodate real-time update mechanisms
- Users primarily work on single components at a time (not bulk editing scenarios)
- The application runs in modern browsers with sufficient performance for real-time updates
- Tailwind class validation and preview generation can be performed client-side without server calls
