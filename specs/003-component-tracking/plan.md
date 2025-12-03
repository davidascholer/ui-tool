# Implementation Plan: Component Tracking and Code Export

**Feature**: [spec.md](./spec.md)  
**Branch**: `003-component-tracking`  
**Created**: December 3, 2025

---

## Technical Context

### Technologies
- React 19.2.0 with hooks
- TypeScript (strict mode)
- Tailwind CSS 4.1.17
- Zod 4.1.13 for validation
- Vitest 4.0.15 + RTL for testing
- Browser Clipboard API

### Existing Architecture
- State management: `useBuilderState` hook in `src/utils/state.ts`
- Entity types: `PageEntity`, `ContainerEntity`, `ComponentEntity` in `src/utils/types.ts`
- Component structure: `BuilderPage` → `Layout` → `UISide` / `ResultSide` / `Drawer`
- Selection mechanism: Blue glow on selected entities in ResultSide
- Property editing: Forms in Drawer using react-hook-form + zod

### Key Unknowns
- NEEDS CLARIFICATION: How to handle React Native style conversion for complex Tailwind classes (e.g., gradients, custom spacing)
- NEEDS CLARIFICATION: Should code generation include component imports (e.g., `import { Button } from './components'`)?
- NEEDS CLARIFICATION: Format for displaying copied code notification (toast vs inline message)?

---

## Constitution Check

### Alignment Review

✅ **Clean Code**: Code generators will be isolated services with single responsibilities. Component metadata extends existing entity types cleanly.

✅ **Beautiful, Animated UI**: Click-to-copy will use smooth transition for success notification. No heavy animation libraries needed.

✅ **Straightforward UX**: Single-click interaction for copying code. Clear visual feedback (notification). No hidden complexity.

✅ **Minimal Dependencies**: Uses existing dependencies (React, Tailwind, Zod). Clipboard API is native browser feature. No new packages required.

✅ **Responsive Design**: Feature works across all screen sizes. Notifications adapt to mobile/desktop layouts.

✅ **Testing Discipline**: Unit tests for code generators, integration tests for click-to-copy flow, clipboard mocking for test isolation.

### Gate: No Critical Violations
Proceed - all core principles satisfied.

---

## Gate: Prerequisites

### Required Before Starting
- [ ] Feature 001 (Drag-and-drop UI builder) MUST be fully functional
- [ ] Existing entity types (PageEntity, ContainerEntity, ComponentEntity) MUST be stable
- [ ] useBuilderState hook MUST support read operations for all entity types
- [ ] Component selection mechanism MUST be working in ResultSide

### Verification
Run existing tests: `npm test -- --run`
Expected: All tests pass for Feature 001

---

## Phase 0: Outline & Research

### Research Tasks

**RT-001**: Research Tailwind to React Native style conversion patterns
- Goal: Understand mapping between Tailwind classes and React Native StyleSheet
- Output: Conversion table for common classes (flex, padding, colors, etc.)
- Document unsupported classes that require manual handling

**RT-002**: Research Clipboard API browser compatibility and fallback patterns
- Goal: Ensure cross-browser support with graceful degradation
- Output: Implementation strategy with permission handling and fallback UI

**RT-003**: Research JSX code generation best practices
- Goal: Learn patterns for generating clean, formatted JSX from data structures
- Output: Code generation approach with proper indentation and nesting

**RT-004**: Analyze existing component types for code generation patterns
- Goal: Identify common patterns across Button, Input, Card, Text, Image, List components
- Output: Shared code generation utilities and component-specific overrides

### Deliverable
`research.md` documenting findings for all NEEDS CLARIFICATION items and research tasks.

---

## Phase 1: Design & Contracts

### Data Model

**Entity Extensions** (`data-model.md`)
- Extend existing entity types with code generation metadata
- Add `codeMetadata` field to PageEntity, ContainerEntity, ComponentEntity
- Structure: `{ reactCode: string, styles: string, element: string }`

**New Types**
- `CodeFormat`: `'react' | 'react-native'`
- `ComponentCodeMetadata`: `{ reactCode: string, styles: string, element: string }`
- `CodeGeneratorOptions`: `{ format: CodeFormat, indent: number }`

### API Contracts

**Code Generation Service** (`contracts/code-generator.ts`)
```typescript
interface CodeGenerator {
  generateReactCode(entity: Entity): string;
  generateReactNativeCode(entity: Entity): string;
  generateCodeMetadata(entity: Entity, format: CodeFormat): ComponentCodeMetadata;
}
```

**Clipboard Service** (`contracts/clipboard-service.ts`)
```typescript
interface ClipboardService {
  copy(text: string): Promise<boolean>;
  hasPermission(): Promise<boolean>;
  showFallbackUI(code: string): void;
}
```

### Quickstart Guide
`quickstart.md` - Steps to test click-to-copy functionality manually

### Agent Context Update
Run: `.specify/scripts/bash/update-agent-context.sh copilot`

---

## Phase 2: Implementation Tasks

### US1: Component Metadata Tracking (P1)

**T001** [P1] Extend entity types with code metadata
- File: `src/utils/types.ts`
- Add `codeMetadata?: ComponentCodeMetadata` to entity interfaces
- Ensure backward compatibility with existing code

**T002** [P1] Update state management to track code metadata
- File: `src/utils/state.ts`
- Modify add/update actions to maintain code metadata
- Generate metadata on entity creation and updates

**T003** [P1] Create unit tests for metadata tracking
- File: `tests/unit/code-metadata.test.ts`
- Test metadata creation, updates, and retrieval
- Verify metadata persists across state changes

---

### US2: Live Code Generation (P1)

**T004** [P1] Create React code generator utility
- File: `src/utils/code-generators/react.ts`
- Implement `generateReactCode(entity)` for all component types
- Handle nested components recursively
- Generate valid JSX with className and props

**T005** [P1] Create React Native code generator utility
- File: `src/utils/code-generators/react-native.ts`
- Implement `generateReactNativeCode(entity)` for all component types
- Convert Tailwind classes to style objects
- Map web components to mobile equivalents (div → View, button → TouchableOpacity)

**T006** [P1] Create code generator tests
- File: `tests/unit/code-generators.test.ts`
- Test React code generation for all component types
- Test React Native code generation with style conversion
- Test nested component code generation
- Verify generated code is syntactically valid

**T007** [P1] Create global code metadata manager
- File: `src/utils/code-metadata-manager.ts`
- Maintain global object with `{ 'react-code': string, 'styles': string, 'element': string }`
- Sync metadata when entities are created/updated
- Provide accessor methods for components

---

### US3: Click-to-Copy Functionality (P1)

**T008** [P1] Create clipboard service utility
- File: `src/utils/clipboard.ts`
- Implement `copyToClipboard(text)` with Clipboard API
- Handle permissions and errors gracefully
- Provide fallback for unsupported browsers

**T009** [P1] Add click handlers to ResultSide components
- File: `src/components/builder/ResultSide/index.tsx`
- Add onClick handlers to rendered components
- Call code generator and clipboard service
- Pass entity ID to identify clicked component

**T010** [P1] Create success notification component
- File: `src/components/common/CopyNotification.tsx`
- Display success message when code is copied
- Auto-dismiss after 3 seconds
- Position appropriately for mobile/desktop

**T011** [P1] Create fallback code display modal
- File: `src/components/common/CodeModal.tsx`
- Show code in modal when clipboard access fails
- Provide manual copy button
- Include close button

**T012** [P1] Add click-to-copy integration tests
- File: `tests/integration/click-to-copy.test.tsx`
- Test clicking components triggers copy
- Test notification appears on success
- Test fallback modal on clipboard failure
- Mock clipboard API for testing

---

### US4: Code Format Selection (P2)

**T013** [P2] Add code format toggle to UI
- File: `src/components/builder/CodeFormatToggle.tsx`
- Create toggle button (React vs React Native)
- Store selection in state or local storage
- Position in Layout (top bar or UISide)

**T014** [P2] Wire format selection to code generators
- File: `src/pages/BuilderPage.tsx`
- Pass selected format to code generation functions
- Update global metadata object based on format
- Re-generate code when format changes

**T015** [P2] Create format selection tests
- File: `tests/unit/code-format-selection.test.ts`
- Test toggling between formats
- Test code generation respects selected format
- Test format persistence (if using local storage)

---

## Phase 3: Integration & Testing

**T016** [P1] End-to-end testing for complete flow
- File: `tests/e2e/component-tracking-flow.test.tsx`
- Test: Create component → Edit properties → Click to copy → Verify clipboard
- Test: Create nested hierarchy → Click container → Verify nested code
- Test: Toggle format → Click component → Verify format-specific code

**T017** [P1] Performance testing
- File: `tests/performance/code-generation.test.ts`
- Measure code generation time for complex hierarchies
- Verify < 500ms for trees up to 100 elements
- Verify clipboard copy < 200ms

**T018** [P1] Accessibility testing
- File: `tests/accessibility/click-to-copy-a11y.test.tsx`
- Test keyboard navigation (focus + Enter)
- Test screen reader announcements for notifications
- Test ARIA labels on clickable components

---

## Phase 4: Polish & Documentation

**T019** Update quickstart guide with usage instructions
- File: `specs/003-component-tracking/quickstart.md`
- Document how to use click-to-copy feature
- Include examples of generated code
- Add troubleshooting section

**T020** Create component tracking documentation
- File: `docs/component-tracking.md`
- Explain code metadata structure
- Document code generation patterns
- Provide extension guidelines

**T021** Code review and cleanup
- Remove console.logs
- Ensure consistent formatting
- Verify all TODOs are resolved
- Update type definitions

---

## Risk Assessment

### High Risk
- **Clipboard API permissions**: May fail in some browsers or security contexts
  - Mitigation: Implement fallback modal with manual copy
- **Complex Tailwind to React Native conversion**: Not all classes have equivalents
  - Mitigation: Document unsupported classes, use best-effort conversion

### Medium Risk
- **Code generation performance**: Large hierarchies may be slow
  - Mitigation: Optimize generators, add caching, warn on large trees
- **Nested component code accuracy**: Deeply nested structures may generate incorrect code
  - Mitigation: Comprehensive tests for various nesting levels

### Low Risk
- **Format toggle state management**: Choosing between state vs localStorage
  - Mitigation: Start with state, migrate to localStorage if needed

---

## Success Metrics

- [ ] All 18 functional requirements implemented
- [ ] Code generation < 500ms for 100-element trees
- [ ] Clipboard copy < 200ms
- [ ] 100% test coverage for code generators
- [ ] All component types support both React and React Native formats
- [ ] Accessibility checks pass (keyboard, screen reader)
- [ ] No regression in existing Feature 001 tests

---

## Dependencies

- Feature 001 (Drag-and-drop UI builder) MUST be complete
- Existing state management (useBuilderState) MUST be stable
- Component selection mechanism MUST be operational

---

## Timeline Estimate

- Phase 0 (Research): 2-3 hours
- Phase 1 (Design): 1-2 hours
- Phase 2 (Implementation): 8-12 hours
- Phase 3 (Testing): 3-4 hours
- Phase 4 (Polish): 1-2 hours

**Total**: 15-23 hours for complete implementation
