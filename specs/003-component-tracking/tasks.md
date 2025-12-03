---
description: "Detailed task breakdown for Component Tracking and Code Export feature"
---

# Tasks: Component Tracking and Code Export

**Input**: Design documents from `/specs/003-component-tracking/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: NOT included - tests are optional and not requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `- [ ] [ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

Single project structure:
- Source: `src/`
- Tests: `tests/` (if needed)
- Specs: `specs/003-component-tracking/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and verification that Feature 001 is complete

- [ ] T001 Verify Feature 001 (Drag-and-drop UI builder) is fully functional by running existing tests
- [ ] T002 [P] Review existing entity types (PageEntity, ContainerEntity, ComponentEntity) in src/utils/types.ts
- [ ] T003 [P] Review existing useBuilderState hook in src/utils/state.ts to understand state management
- [ ] T004 Verify component selection mechanism works in ResultSide by manual testing

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 [P] Create Tailwind to React Native conversion mapping table in src/utils/tailwind-to-rn.ts
- [ ] T006 [P] Create shared code generation utilities (indentation, formatting helpers) in src/utils/code-generation-helpers.ts
- [ ] T007 Create ComponentCodeMetadata type definition with properties 'react-code', 'styles', 'element' in src/utils/types.ts
- [ ] T008 Create GlobalCodeMetadata type as Record<string, ComponentCodeMetadata> in src/utils/types.ts
- [ ] T009 Create CodeFormat type ('react' | 'react-native') in src/utils/types.ts
- [ ] T010 Add codeMetadata optional field to PageEntity, ContainerEntity, and ComponentEntity in src/utils/types.ts

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Component Metadata Tracking (Priority: P1) 🎯 MVP

**Goal**: Automatically track metadata for each component including property values and styles to enable code generation

**Independent Test**: Create a page with containers and components, verify that the system maintains accurate metadata for each entity including all editable properties (name, tailwind classes, component-specific props)

### Implementation for User Story 1

- [ ] T011 [P] [US1] Extend BuilderState interface to include globalCodeMetadata field of type GlobalCodeMetadata in src/utils/state.ts
- [ ] T012 [P] [US1] Extend BuilderState interface to include codeFormat field of type CodeFormat with default 'react' in src/utils/state.ts
- [ ] T013 [US1] Create global code metadata manager utility with sync methods in src/utils/code-metadata-manager.ts
- [ ] T014 [US1] Update entity creation actions in useBuilderState to initialize empty codeMetadata in src/utils/state.ts
- [ ] T015 [US1] Update entity update actions in useBuilderState to preserve codeMetadata during property edits in src/utils/state.ts
- [ ] T016 [US1] Add accessor methods to retrieve entity metadata by ID in src/utils/code-metadata-manager.ts
- [ ] T017 [US1] Verify metadata persists when editing component properties through Drawer forms

**Checkpoint**: At this point, User Story 1 should be fully functional - all entities have metadata tracking

---

## Phase 4: User Story 2 - Live Code Generation (Priority: P1)

**Goal**: Generate live React/React Native code representations of components on-demand that reflect current state

**Independent Test**: Create a page hierarchy with various components, generate code for a specific component, verify the output is valid React/React Native syntax with correct props and styling

### Implementation for User Story 2

- [ ] T018 [P] [US2] Create React code generator for Button component in src/utils/code-generators/react/button.ts
- [ ] T019 [P] [US2] Create React code generator for Input component in src/utils/code-generators/react/input.ts
- [ ] T020 [P] [US2] Create React code generator for Card component in src/utils/code-generators/react/card.ts
- [ ] T021 [P] [US2] Create React code generator for Text component in src/utils/code-generators/react/text.ts
- [ ] T022 [P] [US2] Create React code generator for Image component in src/utils/code-generators/react/image.ts
- [ ] T023 [P] [US2] Create React code generator for List component in src/utils/code-generators/react/list.ts
- [ ] T024 [P] [US2] Create React code generator for Container component in src/utils/code-generators/react/container.ts
- [ ] T025 [P] [US2] Create React code generator for Page component in src/utils/code-generators/react/page.ts
- [ ] T026 [US2] Create main React code generator dispatcher in src/utils/code-generators/react/index.ts that routes to component-specific generators
- [ ] T027 [P] [US2] Create React Native code generator for Button (TouchableOpacity) in src/utils/code-generators/react-native/button.ts
- [ ] T028 [P] [US2] Create React Native code generator for Input (TextInput) in src/utils/code-generators/react-native/input.ts
- [ ] T029 [P] [US2] Create React Native code generator for Card (View) in src/utils/code-generators/react-native/card.ts
- [ ] T030 [P] [US2] Create React Native code generator for Text (Text) in src/utils/code-generators/react-native/text.ts
- [ ] T031 [P] [US2] Create React Native code generator for Image (Image) in src/utils/code-generators/react-native/image.ts
- [ ] T032 [P] [US2] Create React Native code generator for List (FlatList) in src/utils/code-generators/react-native/list.ts
- [ ] T033 [P] [US2] Create React Native code generator for Container (View) in src/utils/code-generators/react-native/container.ts
- [ ] T034 [P] [US2] Create React Native code generator for Page (SafeAreaView) in src/utils/code-generators/react-native/page.ts
- [ ] T035 [US2] Create main React Native code generator dispatcher in src/utils/code-generators/react-native/index.ts that routes to component-specific generators
- [ ] T036 [US2] Create style converter utility that uses tailwind-to-rn mapping table in src/utils/code-generators/react-native/style-converter.ts
- [ ] T037 [US2] Implement recursive nested component code generation for both React and React Native in respective index.ts files
- [ ] T038 [US2] Add import statement generation (React imports for React format, React Native imports for RN format) in both dispatchers
- [ ] T039 [US2] Update globalCodeMetadata manager to call appropriate code generator and populate 'react-code', 'styles', 'element' properties in src/utils/code-metadata-manager.ts
- [ ] T040 [US2] Verify generated code is syntactically valid React/React Native by manual inspection and paste testing

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - code generation produces valid output for all component types

---

## Phase 5: User Story 3 - Click-to-Copy Functionality (Priority: P1)

**Goal**: Click on any component in the Result canvas to instantly copy its live code to the clipboard

**Independent Test**: Click on various components in the Result canvas, verify clipboard contains correct component code, test with different component types and nesting levels

### Implementation for User Story 3

- [ ] T041 [P] [US3] Create clipboard service utility with copyToClipboard method using Clipboard API in src/utils/clipboard.ts
- [ ] T042 [P] [US3] Add permission handling and error catching to clipboard service in src/utils/clipboard.ts
- [ ] T043 [P] [US3] Create CopyNotification component for success feedback in src/components/common/CopyNotification.tsx
- [ ] T044 [P] [US3] Create CodeModal fallback component for displaying code when clipboard access fails in src/components/common/CodeModal.tsx
- [ ] T045 [US3] Add notification state management (show/hide, message) to BuilderState in src/utils/state.ts
- [ ] T046 [US3] Add onClick handlers to rendered components in ResultSide in src/components/builder/ResultSide/index.tsx
- [ ] T047 [US3] Implement click handler logic: lookup entity by ID, get metadata, extract 'react-code', call clipboard service in src/components/builder/ResultSide/index.tsx
- [ ] T048 [US3] Show CopyNotification component on successful copy in src/components/builder/ResultSide/index.tsx
- [ ] T049 [US3] Show CodeModal fallback on clipboard permission failure in src/components/builder/ResultSide/index.tsx
- [ ] T050 [US3] Add CSS transitions for smooth notification appearance/disappearance in src/components/common/CopyNotification.tsx
- [ ] T051 [US3] Auto-dismiss CopyNotification after 3 seconds using useEffect in src/components/common/CopyNotification.tsx
- [ ] T052 [US3] Handle rapid clicking (debounce or queue) to prevent clipboard race conditions in src/components/builder/ResultSide/index.tsx
- [ ] T053 [US3] Verify clicking nested components copies correct code (most specific component in hierarchy)
- [ ] T054 [US3] Test keyboard accessibility: focus component and press Enter to copy in src/components/builder/ResultSide/index.tsx

**Checkpoint**: All core user stories (1, 2, 3) should now be independently functional - full click-to-copy workflow works

---

## Phase 6: User Story 4 - Code Format Selection (Priority: P2)

**Goal**: Choose between React (web) and React Native (mobile) code formats when copying component code

**Independent Test**: Toggle between React and React Native modes, click components, verify clipboard contains format-appropriate code (className vs style objects, div vs View, etc.)

### Implementation for User Story 4

- [ ] T055 [P] [US4] Create CodeFormatToggle component with React/React Native buttons in src/components/builder/CodeFormatToggle.tsx
- [ ] T056 [P] [US4] Style CodeFormatToggle with Tailwind for responsive display (desktop: top bar, mobile: collapsible) in src/components/builder/CodeFormatToggle.tsx
- [ ] T057 [US4] Add action to update codeFormat in BuilderState in src/utils/state.ts
- [ ] T058 [US4] Wire CodeFormatToggle to state management: clicking buttons updates codeFormat in src/components/builder/CodeFormatToggle.tsx
- [ ] T059 [US4] Integrate CodeFormatToggle into Layout component (position in header or UISide) in src/components/builder/Layout.tsx
- [ ] T060 [US4] Update click-to-copy handler to check current codeFormat and call appropriate generator (React vs React Native) in src/components/builder/ResultSide/index.tsx
- [ ] T061 [US4] Update globalCodeMetadata manager to regenerate code when format changes in src/utils/code-metadata-manager.ts
- [ ] T062 [US4] Add visual indicator showing current selected format in CodeFormatToggle in src/components/builder/CodeFormatToggle.tsx
- [ ] T063 [US4] Persist format selection to localStorage for session continuity in src/components/builder/CodeFormatToggle.tsx
- [ ] T064 [US4] Verify toggling format and clicking component produces correct output for both React and React Native

**Checkpoint**: All user stories (1-4) should now be independently functional - format toggle affects generated code

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T065 [P] Add error handling for malformed entity data in code generators in src/utils/code-generators/
- [ ] T066 [P] Add console warnings for unsupported Tailwind classes in React Native conversion in src/utils/code-generators/react-native/style-converter.ts
- [ ] T067 [P] Document unsupported Tailwind classes (gradients, CSS grid, pseudo-classes) in generated code comments in src/utils/code-generators/react-native/style-converter.ts
- [ ] T068 [P] Add ARIA labels to clickable components for screen reader support in src/components/builder/ResultSide/index.tsx
- [ ] T069 [P] Ensure CopyNotification is announced to screen readers using aria-live in src/components/common/CopyNotification.tsx
- [ ] T070 Update quickstart.md with complete usage instructions and examples in specs/003-component-tracking/quickstart.md
- [ ] T071 Create component tracking documentation explaining metadata structure and extension patterns in docs/component-tracking.md
- [ ] T072 Code review and cleanup: remove console.logs, verify TODOs resolved, ensure consistent formatting across all files
- [ ] T073 Run manual validation following quickstart.md testing scenarios (A-E)
- [ ] T074 Verify all FR-001 through FR-014 requirements are met per spec.md
- [ ] T075 Performance check: verify code generation < 500ms for complex hierarchies (100 elements)
- [ ] T076 Performance check: verify clipboard copy < 200ms by testing click responsiveness

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P1 → P1 → P2)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1) - Phase 3**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1) - Phase 4**: Depends on User Story 1 completion (needs metadata structure) - Generates code from tracked metadata
- **User Story 3 (P1) - Phase 5**: Depends on User Story 2 completion (needs code generators) - Copies generated code to clipboard
- **User Story 4 (P2) - Phase 6**: Depends on User Stories 2 and 3 completion (needs code generation and copying) - Adds format selection

### Within Each User Story

**User Story 1** (Metadata Tracking):
- T011-T012 [P] can run in parallel (different state fields)
- T013 [P] can run parallel with T011-T012 (separate file)
- T014-T015 are sequential (both modify state actions)
- T016 [P] can run parallel with T014-T015 (separate file)
- T017 is final verification

**User Story 2** (Code Generation):
- T018-T025 [P] can run in parallel (React generators, different files)
- T026 integrates T018-T025 (sequential after)
- T027-T034 [P] can run in parallel (React Native generators, different files)
- T035 integrates T027-T034 (sequential after)
- T036 [P] can run parallel with any generator tasks (separate file)
- T037-T039 are sequential (build on previous work)
- T040 is final verification

**User Story 3** (Click-to-Copy):
- T041-T044 [P] can run in parallel (separate utilities/components)
- T045-T054 are mostly sequential (integrated flow in ResultSide)
- Exception: T043-T044 components can be built while T045-T052 are in progress

**User Story 4** (Format Selection):
- T055-T056 [P] can run in parallel (single component, separate concerns)
- T057-T064 are mostly sequential (integrated state management flow)

### Parallel Opportunities

**Phase 1 (Setup)**: T002-T003 [P] can run in parallel

**Phase 2 (Foundational)**: T005-T006 [P] can run in parallel

**Phase 3 (US1)**: 
- T011, T012, T013 [P] can run together (3 developers)
- T016 [P] can run parallel with T014-T015

**Phase 4 (US2)**:
- All React generators T018-T025 [P] can run together (8 developers!)
- All React Native generators T027-T034 [P] can run together (8 developers!)
- T036 [P] can run parallel with any generator work

**Phase 5 (US3)**:
- T041, T042, T043, T044 [P] can run together (4 developers)

**Phase 6 (US4)**:
- T055, T056 [P] can run together (2 developers)

**Phase 7 (Polish)**:
- T065, T066, T067, T068, T069 [P] can run together (5 developers)

---

## Parallel Example: User Story 2 (Code Generation)

```bash
# Launch all React component generators together:
Task: "Create React code generator for Button component in src/utils/code-generators/react/button.ts"
Task: "Create React code generator for Input component in src/utils/code-generators/react/input.ts"
Task: "Create React code generator for Card component in src/utils/code-generators/react/card.ts"
Task: "Create React code generator for Text component in src/utils/code-generators/react/text.ts"
Task: "Create React code generator for Image component in src/utils/code-generators/react/image.ts"
Task: "Create React code generator for List component in src/utils/code-generators/react/list.ts"
Task: "Create React code generator for Container component in src/utils/code-generators/react/container.ts"
Task: "Create React code generator for Page component in src/utils/code-generators/react/page.ts"

# Then integrate them:
Task: "Create main React code generator dispatcher in src/utils/code-generators/react/index.ts"

# Repeat for React Native generators in parallel
```

---

## Implementation Strategy

### MVP First (User Stories 1-3 Only)

1. Complete Phase 1: Setup ✅
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories) ✅
3. Complete Phase 3: User Story 1 (Metadata Tracking) ✅
4. Complete Phase 4: User Story 2 (Code Generation) ✅
5. Complete Phase 5: User Story 3 (Click-to-Copy) ✅
6. **STOP and VALIDATE**: Test all P1 user stories independently ✅
7. Deploy/demo if ready 🚀

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently (metadata tracking works)
3. Add User Story 2 → Test independently (code generation produces valid output)
4. Add User Story 3 → Test independently (click-to-copy workflow functional) → **MVP COMPLETE!** 🎯
5. Add User Story 4 → Test independently (format toggle works) → Full feature complete

### Parallel Team Strategy

With multiple developers:

1. **Week 1**: Team completes Setup + Foundational together
2. **Week 2**: Once Foundational is done:
   - Developer A: User Story 1 (Metadata Tracking)
   - User Story 1 MUST complete before User Story 2 can start
3. **Week 3**: User Story 1 complete, split team:
   - Developers A-D: User Story 2 (Code Generation - 8 React generators)
   - Developers E-H: User Story 2 (Code Generation - 8 React Native generators)
   - Developer I: User Story 3 prep (clipboard utility, notification component)
4. **Week 4**: User Story 2 complete:
   - Developers A-C: User Story 3 (Click-to-Copy integration)
   - Developers D-E: User Story 4 (Format Selection)
5. **Week 5**: Polish and validation

---

## Success Metrics

- [ ] All 14 functional requirements (FR-001 to FR-014) implemented per spec.md
- [ ] Code generation completes in < 500ms for 100-element component trees
- [ ] Clipboard copy operation completes in < 200ms
- [ ] All 4 user stories independently functional and testable
- [ ] All component types (Page, Container, Button, Input, Card, Text, Image, List) support both React and React Native formats
- [ ] Accessibility checks pass (keyboard navigation, screen reader support)
- [ ] No regression in existing Feature 001 tests
- [ ] All 7 success criteria (SC-001 to SC-007) met per spec.md
- [ ] Manual validation following quickstart.md scenarios completes successfully

---

## Notes

- **[P] tasks**: Different files, no dependencies - can run in parallel
- **[Story] label**: Maps task to specific user story for traceability
- **Sequential dependencies**: US1 → US2 → US3 → US4 (each builds on previous)
- **Global object structure**: Must use 'react-code', 'styles', 'element' as property names (per user requirement)
- **No tests included**: Tests are optional and not requested in spec.md
- **Commit strategy**: Commit after each task or logical group
- **Stop at checkpoints**: Validate each story independently before proceeding
- **Feature 001 dependency**: MUST be complete and functional before starting
- **Browser compatibility**: Target Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Clipboard fallback**: Always provide modal fallback for permission failures
- **Tailwind conversion**: Document unsupported classes in generated code comments
