# Tasks: Real-Time Hierarchy Updates in UI Preview

**Input**: Design documents from `/specs/004-hierarchy-auto-update/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include unit tests for simple components and controller calls per constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Single React project structure:
- **Components**: `src/components/builder/`
- **Hooks**: `src/hooks/`
- **Utils**: `src/utils/`
- **Tests**: `tests/unit/` and `tests/integration/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and enhanced type definitions for hierarchy updates

- [x] T001 Enhance existing types in `src/utils/types.ts` with HierarchyViewItem, PropertyChange (for change tracking), UpdateContext, VisualIndicator interfaces
- [x] T002 [P] Create utility functions in `src/utils/hierarchyHelpers.ts` for Tailwind class parsing and truncation
- [x] T003 [P] Add validation schemas in `src/utils/schemas.ts` for PropertyChange and VisualIndicator using Zod

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Enhance Layout component in `src/components/builder/Layout.tsx` to enforce 320px minimum width using CSS Grid minmax(320px, 1fr)
- [x] T005 [P] Create WidthDisplay component in `src/components/builder/ResultSide/WidthDisplay.tsx` with ResizeObserver for pixel measurement display only
- [x] T006 [P] Create base PropertyIndicator components structure in `src/components/builder/ResultSide/PropertyIndicators/`
- [x] T007 Enhance BuilderState in `src/utils/state.ts` to support hierarchy view items and update context
- [x] T008 [P] Create useHierarchyUpdates hook scaffold in `src/hooks/useHierarchyUpdates.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Immediate Hierarchy Reflection on Property Changes (Priority: P1) 🎯 MVP

**Goal**: Users see property changes reflected immediately in hierarchy view when saved through Drawer editor

**Independent Test**: Modify component properties in Drawer, save changes, verify hierarchy view updates within 200ms without page refresh

### Tests for User Story 1

- [x] T009 [P] [US1] Unit test for hierarchy update logic in `tests/unit/hierarchy-updates.test.tsx`
- [x] T010 [P] [US1] Integration test for save-to-hierarchy flow in `tests/integration/property-save-updates.test.tsx`

### Implementation for User Story 1

- [x] T011 [P] [US1] Implement ColorIndicator component in `src/components/builder/ResultSide/PropertyIndicators/ColorIndicator.tsx`
- [x] T012 [P] [US1] Implement TextIndicator component in `src/components/builder/ResultSide/PropertyIndicators/TextIndicator.tsx`
- [x] T013 [P] [US1] Create Tailwind class parser utility in `src/utils/hierarchyHelpers.ts` for color extraction
- [x] T014 [US1] Implement core useHierarchyUpdates hook with save-triggered updates and PropertyChange tracking in `src/hooks/useHierarchyUpdates.tsx`
- [x] T015 [US1] Enhance Selectable component in `src/components/builder/ResultSide/Selectable.tsx` to display property indicators
- [x] T016 [US1] Integrate hierarchy updates with existing Drawer save actions in `src/components/builder/Drawer/index.tsx`
- [x] T017 [US1] Add error handling for invalid property values with auto-reversion logic
- [x] T018 [US1] Ensure 200ms response time requirement with performance measurement hooks
- [ ] T018a [P] [US1] Implement visual feedback for updates taking longer than 100ms (loading indicators, transitions) in hierarchy view

**Checkpoint**: At this point, User Story 1 should be fully functional - saving properties immediately updates hierarchy view

---

## Phase 4: User Story 2 - Visual Property Indicators in Hierarchy View (Priority: P1)

**Goal**: Display visual representations of component properties (colors, text, spacing) directly in hierarchy view

**Independent Test**: Create components with different Tailwind classes and properties, verify meaningful visual indicators appear in hierarchy

### Tests for User Story 2

- [ ] T019 [P] [US2] Unit test for property indicator generation in `tests/unit/property-indicators.test.tsx`
- [ ] T020 [P] [US2] Unit test for Tailwind class parsing accuracy in `tests/unit/tailwind-parser.test.tsx`

### Implementation for User Story 2

- [ ] T021 [P] [US2] Implement SpacingIndicator component in `src/components/builder/ResultSide/PropertyIndicators/SpacingIndicator.tsx`
- [ ] T022 [P] [US2] Create usePropertyIndicators hook in `src/hooks/usePropertyIndicators.tsx` for indicator generation
- [ ] T023 [P] [US2] Extend Tailwind parser in `src/utils/hierarchyHelpers.ts` for spacing and typography classes
- [ ] T024 [US2] Implement hover tooltip system for indicators with 25-character truncation for both hierarchy display text and tooltip content
- [ ] T025 [US2] Add indicator priority system (Color: 5, Text: 4, Spacing: 3) with highest priority first, ties broken alphabetically, limit to 5 indicators per entity
- [ ] T026 [US2] Integrate visual indicators into enhanced ResultSide hierarchy display
- [ ] T027 [US2] Add accessibility support with ARIA labels for indicators

**Checkpoint**: At this point, User Stories 1 AND 2 work independently - hierarchy shows property changes with visual indicators

---

## Phase 5: User Story 3 - Hierarchy View Expansion State Management (Priority: P2)

**Goal**: Intelligently manage expansion state of nested elements during property updates and editing

**Independent Test**: Edit deeply nested components, verify hierarchy maintains expansion and highlights edited components

### Tests for User Story 3

- [ ] T028 [P] [US3] Unit test for expansion state management in `tests/unit/expansion-state.test.tsx`
- [ ] T029 [P] [US3] Integration test for auto-expand behavior in `tests/integration/auto-expansion.test.tsx`

### Implementation for User Story 3

- [ ] T030 [P] [US3] Create useHierarchyExpansion hook in `src/hooks/useHierarchyExpansion.tsx` for expansion management
- [ ] T031 [P] [US3] Implement expansion path calculation utility in `src/utils/hierarchyHelpers.ts`
- [ ] T032 [US3] Add auto-expand behavior when selecting nested components for editing
- [ ] T033 [US3] Enhance Selectable component with editing state highlighting (colored border + subtle background)
- [ ] T034 [US3] Implement expansion state persistence across property updates
- [ ] T035 [US3] Add focus management to ensure edited components remain visible

**Checkpoint**: All P1 stories plus expansion management work together - smooth navigation during editing

---

## Phase 6: User Story 4 - Real-Time Preview Updates During Editing (Priority: P2)

**Goal**: Show live previews of changes in hierarchy view while typing in Drawer editor with 500ms debounce

**Independent Test**: Type in Drawer editor fields, verify hierarchy shows live previews with appropriate debouncing

### Tests for User Story 4

- [ ] T036 [P] [US4] Unit test for debounced updates with fake timers in `tests/unit/debounced-updates.test.tsx`
- [ ] T037 [P] [US4] Integration test for real-time preview flow in `tests/integration/real-time-preview.test.tsx`

### Implementation for User Story 4

- [ ] T038 [P] [US4] Create useBatchUpdates hook in `src/hooks/useBatchUpdates.tsx` for performance optimization
- [ ] T039 [P] [US4] Implement debouncing logic (500ms) in useHierarchyUpdates hook for individual field changes
- [ ] T040 [US4] Integrate React Hook Form watch API for real-time field monitoring in Drawer
- [ ] T041 [US4] Add batch detection (3+ changes in 1 second) with requestAnimationFrame scheduling - works alongside debouncing to optimize rapid multi-field updates
- [ ] T042 [US4] Implement visual feedback for "editing" state in hierarchy (italic text, editing badge)
- [ ] T043 [US4] Add performance monitoring to maintain 60 FPS during batch updates
- [ ] T044 [US4] Handle rapid component switching with proper cleanup and cancellation

**Checkpoint**: All user stories functional - complete real-time hierarchy with visual feedback and performance optimization

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements, edge cases, and overall system integration

- [ ] T045 [P] Add comprehensive error boundary for hierarchy components in `src/components/builder/ResultSide/HierarchyErrorBoundary.tsx`
- [ ] T046 [P] Implement localStorage persistence for expansion state preferences
- [ ] T047 [P] Add analytics tracking for hierarchy update performance metrics
- [ ] T048 Optimize bundle size by lazy-loading indicator components when not in use
- [ ] T049 Add keyboard navigation support for hierarchy items (arrow keys, Enter, Delete)
- [ ] T050 Implement responsive behavior for indicator display on smaller screens
- [ ] T051 Add comprehensive logging for debugging hierarchy update issues
- [ ] T052 Create performance monitoring dashboard for update metrics

---

## Dependencies & Execution Order

### Parallel Execution Opportunities

**After Phase 2 completion**, these task groups can run in parallel:

#### Group A: Visual Indicators (US1 + US2)
- T011-T013 (Indicator Components) 
- T019-T027 (Visual Property System)

#### Group B: Update Logic (US1)  
- T014-T018 (Core Update Hooks)
- T009-T010 (Update Tests)

#### Group C: Expansion Management (US3)
- T028-T035 (Expansion System)

#### Group D: Real-Time Features (US4)
- T036-T044 (Live Preview System)

### Critical Dependencies

1. **T001-T003** must complete before all other tasks (type definitions)
2. **T004-T008** must complete before any user story work (foundational infrastructure)
3. **T014** (core useHierarchyUpdates) must complete before T040-T044 (real-time features)
4. **T015** (enhanced Selectable) must complete before T025-T026 (visual indicators integration)

## Implementation Strategy

### MVP Scope (Recommended)
Implement only **User Story 1** (T009-T018) for initial MVP:
- Immediate hierarchy updates on save
- Basic visual indicators (colors, text)
- Error handling with auto-reversion
- 200ms response time guarantee

### Full Feature Scope
Complete all user stories (T001-T052) for comprehensive hierarchy updates:
- Real-time preview during editing
- Smart expansion management  
- Batch update optimization
- Complete visual indicator system

## Performance Requirements

- **T018**: Hierarchy updates complete within 200ms of save action
- **T025**: 95% visual indicator accuracy for common Tailwind classes
- **T043**: Maintain 60 FPS during batch updates of up to 50 components
- **T041**: Debounce real-time updates to 500ms to prevent excessive re-renders

## Quality Gates

Each phase must pass these gates before proceeding:

1. **Phase 2**: All foundational components render without errors
2. **Phase 3**: Property saves trigger hierarchy updates within 200ms  
3. **Phase 4**: Visual indicators display correctly for test component library
4. **Phase 5**: Expansion state maintained across all update scenarios
5. **Phase 6**: Real-time updates maintain performance requirements
6. **Phase 7**: Feature passes accessibility audit and performance benchmarks