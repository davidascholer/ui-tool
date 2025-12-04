# Implementation Plan: Real-Time Hierarchy Updates in UI Preview

**Branch**: `004-hierarchy-auto-update` | **Date**: December 3, 2025 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/004-hierarchy-auto-update/spec.md` plus user input: "The Hierarchy section needs to have at least a 320 pixel width. The pixels should be shown in plain text in the top right corner of the Hierarchy section. Save the updated code and refresh the UI every time any page, container, or component is updated."

## Summary

Enhance the existing ResultSide hierarchy view to display real-time visual updates when page, container, or component properties are modified through the Drawer editor. Key features include: visual property indicators (colored dots/badges with hover tooltips), immediate hierarchy reflection of saved changes, smart expansion state management, and real-time preview updates during editing with 500ms debounce. Additionally, ensure minimum 320px width for hierarchy section with pixel width display in top-right corner.

## Technical Context

**Language/Version**: TypeScript 5.9.3  
**Primary Dependencies**: React 19.2.0, Tailwind CSS 4.1.17, React Hook Form 7.67.0, Zod 4.1.13, Framer Motion 12.23.25  
**Storage**: Browser localStorage/sessionStorage for UI state persistence  
**Testing**: Vitest with React Testing Library, existing test structure in `tests/unit/` and `tests/integration/`  
**Target Platform**: Modern web browsers (320px-3840px responsive design)  
**Project Type**: Single React web application  
**Performance Goals**: 200ms hierarchy update response time, 60 FPS during animations, 500ms debounce for real-time updates  
**Constraints**: Maintain existing three-column layout, preserve current drag-and-drop functionality, minimum 320px hierarchy width  
**Scale/Scope**: Single-user UI builder application, ~20-50 components in typical hierarchies

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Phase 0 Check** ✅ **PASSED**

**Phase 1 Re-Check** ✅ **PASSED**

Project MUST satisfy these gates (from constitution):
- ✅ React + Tailwind used; all files in TypeScript - **COMPLIANT**: All new components written in TypeScript, uses React 19.2.0 + Tailwind 4.1.17
- ✅ UI is responsive across 320–3840 px breakpoints - **COMPLIANT**: Enhanced Layout with CSS Grid maintains responsive design, enforces 320px minimum
- ✅ Simple components and all server calls have unit tests - **COMPLIANT**: Property indicators, width display, and update hooks will have comprehensive unit tests
- ✅ Server calls implemented in `api/controllers/` only; no fetch in UI - **COMPLIANT**: Pure UI feature using browser APIs only (ResizeObserver, localStorage)
- ✅ Reusable components extracted; large components decomposed for readability - **COMPLIANT**: Modular design with separate ColorIndicator, SpacingIndicator, TextIndicator components
- ✅ Prefer existing `package.json` deps; justify any new dep - **COMPLIANT**: No new dependencies required, leverages React Hook Form, Zod, Framer Motion
- ✅ SEO metadata and analytics included and configurable - **COMPLIANT**: UI enhancement preserves existing SEO/analytics configuration

**Post-Design Assessment**: Design maintains constitutional compliance while adding real-time hierarchy updates with visual property indicators, minimum width enforcement, and performance optimizations.

## Project Structure

### Documentation (this feature)

```text
specs/004-hierarchy-auto-update/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (existing React application)

```text
src/
├── components/
│   └── builder/
│       ├── ResultSide/
│       │   ├── index.tsx           # Main ResultSide component (ENHANCE)
│       │   ├── Selectable.tsx      # Selection component (ENHANCE)
│       │   ├── HierarchyView.tsx   # NEW: Dedicated hierarchy display
│       │   ├── PropertyIndicators/ # NEW: Visual property indicators
│       │   │   ├── ColorIndicator.tsx
│       │   │   ├── SpacingIndicator.tsx
│       │   │   └── TextIndicator.tsx
│       │   └── WidthDisplay.tsx    # NEW: Pixel width display
│       ├── Layout.tsx              # Layout component (ENHANCE for min-width)
│       └── Drawer/                 # Property editor (ENHANCE for change events)
├── hooks/
│   ├── useHierarchyUpdates.tsx     # NEW: Real-time update logic
│   ├── usePropertyIndicators.tsx   # NEW: Visual indicator management
│   └── useBatchUpdates.tsx         # NEW: Batch update optimization
├── utils/
│   ├── state.ts                    # Builder state (ENHANCE for update events)
│   ├── types.ts                    # Type definitions (ENHANCE)
│   └── hierarchyHelpers.ts         # NEW: Hierarchy utility functions
└── pages/
    └── BuilderPage.tsx             # Main page (ENHANCE for update handling)

tests/
├── unit/
│   ├── hierarchy-updates.test.tsx  # NEW: Hierarchy update logic tests
│   ├── property-indicators.test.tsx # NEW: Visual indicator tests
│   └── width-display.test.tsx      # NEW: Width display tests
└── integration/
    └── real-time-updates.test.tsx  # NEW: End-to-end update flow tests
```

**Structure Decision**: Enhance existing React application structure, focusing on ResultSide component enhancements and new hierarchy-specific utilities. Maintains existing three-column layout while adding real-time update capabilities.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
