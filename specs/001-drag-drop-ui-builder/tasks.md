---

description: "Task list for Drag-and-Drop UI Builder"
---

# Tasks: Drag-and-Drop UI Builder

**Input**: Design documents from `/specs/001-drag-drop-ui-builder/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Include unit tests for simple components and controller calls per constitution.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single project: `src/`, `tests/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure (React + Tailwind, TypeScript)

- [X] T001 Initialize Tailwind with CSS variables for light/dark in `src/styles/theme.css`
- [X] T002 Configure Tailwind and import in `src/main.tsx` and `src/index.css`
- [X] T003 [P] Add SEO base using `react-meta-tags` in `src/pages/BuilderPage.tsx`
- [X] T004 [P] Create analytics controller in `api/controllers/analytics.ts`
- [X] T005 Setup testing: Vitest + RTL config in `vitest.config.ts` and sample test command in `package.json`
- [X] T006 [P] Add accessibility reduced-motion styles in `src/styles/theme.css`
 - [ ] T006a [P] Add keyboard operability for selection (focus/enter/delete) in `src/components/builder/ResultSide/Selectable.tsx`
 - [X] T006b [P] Add aria roles/labels audit checklist in `docs/accessibility.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T007 Create builder layout scaffold in `src/components/builder/Layout.tsx`
- [X] T008 [P] Implement `UISide` sections (Pages, Containers, Components) in `src/components/builder/UISide/index.tsx`
- [X] T009 [P] Implement `ResultSide` shell with selection state in `src/components/builder/ResultSide/index.tsx`
- [X] T010 Implement `Drawer` shell with RHF+Zod form in `src/components/builder/Drawer/index.tsx`
- [X] T011 [P] Define data types and zod schemas in `src/utils/types.ts` and `src/utils/schemas.ts`
- [X] T012 Setup responsive layout behavior (stack in portrait/mobile) in `src/components/builder/Layout.tsx`
- [X] T013 [P] Unit tests for layout shells in `tests/unit/builder-layout.test.tsx`
 - [ ] T013a [P] Unit tests for keyboard selection operability in `tests/unit/keyboard-selection.test.tsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Drag-and-drop hierarchy (Priority: P1) 🎯 MVP

**Goal**: Assemble Page → Container → Component with valid/invalid feedback and enforced hierarchy.

**Independent Test**: Can build a valid hierarchy via drag-and-drop with green/red feedback.

### Tests for User Story 1

- [X] T014 [P] [US1] Unit tests for DnD validators in `tests/unit/dnd-validators.test.ts`
- [X] T015 [P] [US1] Integration test for drag Page/Container/Component in `tests/integration/dnd-flow.test.tsx`
 - [X] T015a [US1] Performance check: hover feedback latency ≤100ms (manual/automation) documented in `docs/perf-dnd-latency.md`

### Implementation for User Story 1

- [X] T016 [P] [US1] Implement DnD helpers (mouse/touch) in `src/utils/dnd.ts`
- [X] T017 [P] [US1] Add valid/invalid hover glow (green/red) in `src/components/builder/ResultSide/DropZone.tsx`
- [X] T018 [US1] Enforce hierarchy rules in `src/utils/validators.ts`
- [X] T019 [US1] Wire UISide drag sources in `src/components/builder/UISide/DraggableItem.tsx`
- [X] T020 [US1] Render nested hierarchy in `src/components/builder/ResultSide/TreeRenderer.tsx`
 - [ ] T020a [US1] Document deepest-valid-target rule and tests in `tests/integration/dnd-overlap.test.tsx`

**Checkpoint**: US1 fully functional and testable independently

---

## Phase 4: User Story 2 - Selection, edit, delete (Priority: P2)

**Goal**: Select any entity to show blue glow, edit Tailwind options via Drawer, and delete.

**Independent Test**: Select, edit Tailwind options, and delete without breaking hierarchy.

### Tests for User Story 2

- [ ] T021 [P] [US2] Unit tests for selection state and blue glow in `tests/unit/selection.test.tsx`
- [ ] T022 [P] [US2] Unit tests for Drawer forms with zod+RHF in `tests/unit/drawer-forms.test.tsx`
 - [ ] T022a [US2] Unit tests for Tailwind option allowlists per component in `tests/unit/tailwind-options.test.ts`

### Implementation for User Story 2

- [ ] T023 [P] [US2] Implement selection logic and blue glow in `src/components/builder/ResultSide/Selectable.tsx`
- [ ] T024 [US2] Implement Drawer forms (per entity) in `src/components/builder/Drawer/Editor.tsx`
- [ ] T025 [US2] Implement delete action with confirmation in `src/components/builder/ResultSide/DeleteAction.tsx`
- [ ] T026 [US2] Persist Tailwind option edits to state in `src/utils/state.ts`
 - [ ] T026a [US2] Add typed models for analytics events in `api/controllers/analytics.ts` and tests in `tests/contract/analytics.test.ts`

**Checkpoint**: US1 and US2 both independently functional

---

## Phase 5: User Story 3 - View/copy code (React or React Native) (Priority: P3)

**Goal**: Toggle code view and copy generated code for the hierarchy.

**Independent Test**: Switch views and copy code; generated code matches hierarchy.

### Tests for User Story 3

- [ ] T027 [P] [US3] Unit tests for code serializers in `tests/unit/code-serializer.test.ts`
- [ ] T028 [P] [US3] Integration test for view toggle and copy in `tests/integration/code-view.test.tsx`
 - [ ] T028a [US3] RN serializer subset tests (spacing, color, typography basics) in `tests/unit/rn-subset.test.ts`

### Implementation for User Story 3

- [ ] T029 [P] [US3] Implement React code serializer in `src/utils/serialize/reactSerializer.ts`
- [ ] T030 [P] [US3] Implement React Native code serializer in `src/utils/serialize/reactNativeSerializer.ts`
- [ ] T031 [US3] Implement code view toggle and copy UI in `src/components/builder/ResultSide/CodeView.tsx`
 - [ ] T031a [US3] Add SEO test tasks: title/meta/OG/canonical verification in `tests/integration/seo-builder.test.tsx`

**Checkpoint**: All user stories independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

- [X] T032 [P] Add theme toggle and persistence in `src/components/common/ThemeToggle.tsx`
- [X] T033 Code cleanup and component decomposition across `src/components/*`
- [X] T034 Performance optimizations for DnD and rendering in `src/utils/*`
- [X] T035 [P] Additional unit tests for catalog components in `tests/unit/catalog/*.test.tsx`
- [X] T036 SEO enhancements: OG tags, canonical in `src/pages/BuilderPage.tsx`
 - [X] T036a [P] Specify analytics library in `package.json` and document config in `docs/analytics.md`
- [X] T037 Security and privacy review for analytics in `api/controllers/analytics.ts`
- [X] T038 Run quickstart.md validation steps

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): No dependencies - can start immediately
- Foundational (Phase 2): Depends on Setup completion - BLOCKS all user stories
- User Stories (Phase 3+): All depend on Foundational completion
- Polish (Final Phase): Depends on desired user stories completion

### User Story Dependencies

- User Story 1 (P1): No dependencies on other stories
- User Story 2 (P2): Depends on US1 selection/rendering APIs but remains independently testable
- User Story 3 (P3): Depends on hierarchy render outputs; independently testable via serializer fixtures

### Within Each User Story

- Tests MUST be written and FAIL before implementation
- Models/types before services/helpers
- Helpers before components wiring
- Core implementation before integration

### Parallel Opportunities

- Setup tasks marked [P]
- Foundational tasks marked [P]
- Tests for each story marked [P]
- Models/helpers within a story marked [P]
- Different user stories can proceed in parallel after Phase 2

---

## Parallel Example: User Story 1

```bash
# Launch US1 tests together:
Task: "Unit tests for DnD validators in tests/unit/dnd-validators.test.ts"
Task: "Integration test for drag Page/Container/Component in tests/integration/dnd-flow.test.tsx"

# Launch US1 implementation tasks in parallel:
Task: "Implement DnD helpers in src/utils/dnd.ts"
Task: "Add hover glow in src/components/builder/ResultSide/DropZone.tsx"
Task: "Wire drag sources in src/components/builder/UISide/DraggableItem.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. STOP and VALIDATE: Test US1 independently
5. Demo the builder

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. Add US1 → Test independently → Demo (MVP)
3. Add US2 → Test independently → Demo
4. Add US3 → Test independently → Demo

### Parallel Team Strategy

- Developer A: US1
- Developer B: US2
- Developer C: US3

---
