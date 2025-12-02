# Implementation Plan: Drag-and-Drop UI Builder

**Branch**: `[001-drag-drop-ui-builder]` | **Date**: 2025-12-02 | **Spec**: `specs/001-drag-drop-ui-builder/spec.md`
**Input**: Feature specification from `/specs/001-drag-drop-ui-builder/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a React + Tailwind UI builder with drag-and-drop hierarchy (Page → Container → Component), visual feedback (green/red glow), selection (blue glow) with a drawer editor for Tailwind options, and exportable code views (React and React Native). MVP component catalog: Page, Container/Section, Button, Input, Card, Text, Image, List. Use minimal dependencies already in `package.json`, TypeScript across all files, unit tests for simple components and all controller calls, SEO and analytics.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (React 18 + Vite)  
**Primary Dependencies**: React, Tailwind CSS, `zod`, `react-hook-form`, `react-meta-tags` (SEO), analytics library from `package.json` (NEEDS CLARIFICATION: which one), `@testing-library/react`, `vitest`  
**Storage**: N/A (client-side state only for MVP)  
**Testing**: React Testing Library + Vitest  
**Target Platform**: Web (responsive 320–3840 px), touch + mouse DnD  
**Project Type**: Single web app (frontend only; controllers for API calls)  
**Performance Goals**: Smooth animations; feedback latency ≤100ms; consistent 60fps for simple interactions  
**Constraints**: Minimal deps; accessibility (reduced motion); controller-only network calls  
**Scale/Scope**: MVP catalog (8 items), 1 primary builder screen, drawer editor, code export toggles

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Project MUST satisfy these gates (from constitution):
- React + Tailwind used; all files in TypeScript.
- UI is responsive across 320–3840 px breakpoints.
- Simple components and all server calls have unit tests.
- Server calls implemented in `api/controllers/` only; no fetch in UI.
- Reusable components extracted; large components decomposed for readability.
- Prefer existing `package.json` deps; justify any new dep.
- SEO metadata and analytics included and configurable.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── components/
│   ├── builder/
│   │   ├── UISide/
│   │   ├── ResultSide/
│   │   └── Drawer/
│   ├── common/        # reusable primitives
│   └── catalog/       # Button, Input, Card, Text, Image, List
├── pages/
│   └── BuilderPage.tsx
├── hooks/
├── utils/
├── styles/
└── main.tsx

api/
└── controllers/

tests/
├── unit/
├── contract/
└── integration/
```

**Structure Decision**: Single web app with `src/components/builder/*` for the three sections (UI, Result, Drawer), `src/components/catalog/*` for MVP component implementations, and `api/controllers/` for typed server calls. Tests under `tests/` split into unit/contract/integration per constitution.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
