# ui-tool Constitution

<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Modified principles: N/A (template placeholders replaced)
- Added sections: Core Principles, Additional Constraints, Development Workflow, Governance
- Removed sections: None
- Templates requiring updates:
	✅ `.specify/templates/plan-template.md` (Constitution Check gates aligned)
	✅ `.specify/templates/spec-template.md` (Requirements phrasing remains compatible)
	✅ `.specify/templates/tasks-template.md` (Structure and testing guidance aligned)
	⚠ `.specify/templates/checklist-template.md` (Pending project-specific checklist categories)
- Follow-up TODOs:
	- TODO(RATIFICATION_DATE): Original adoption date unknown; set when established
-->

## Core Principles

### Clean Code (NON-NEGOTIABLE)
Code MUST be readable, consistent, and maintainable: enforce clear naming,
small functions, no duplication, and single-responsibility components. If a
component is used more than once, it MUST be its own component. If a component
is too large, it MUST be split into smaller components to improve readability.
All files MUST be written in TypeScript.

### Beautiful, Animated UI
The UI MUST be visually appealing and use tasteful, performant animations.
Animations SHOULD enhance comprehension, not distract. Prefer CSS transitions
and Tailwind utilities; avoid heavy animation libraries unless required by
specs. Respect reduced-motion preferences.

### Straightforward UX
User flows MUST be simple and obvious: minimize steps, provide clear affordances
and feedback, and avoid hidden complexity. Empty, loading, and error states are
required. Components used across flows MUST be reusable and consistent.

### Minimal Dependencies
Use React and Tailwind CSS. Prefer existing dependencies already listed in
`package.json` before introducing new libraries. New dependencies MUST have a
clear justification (size, security, maintenance) and pass the Constitution
Check. Avoid unnecessary abstractions.

### Responsive Design (320–3840 px)
Layouts and components MUST be responsive across screen widths from 320 px to
3840 px. Use fluid layouts, Tailwind responsive utilities, and accessibility-
friendly scaling. Test breakpoints at least for mobile, tablet, laptop, and
desktop/ultrawide.

### Testing Discipline
Create unit tests for all simple components and server calls. Reusable
components MUST have test coverage. Favor fast, deterministic tests. Write
tests alongside implementation and keep them in sync with component contracts.

### API Controller Organization
All server calls MUST reside in an `api/controllers/` folder with typed
functions and clear request/response models. No direct fetch calls from UI
components; components depend on controller functions.

### Technology & Language Requirements
This project MUST use React and Tailwind CSS. All source files MUST be
TypeScript. SEO optimization and analytics MUST be included and configurable.

## Additional Constraints

- Performance: Animations and interactions MUST maintain smoothness; avoid
	blocking the main thread; prefer CSS-based animations.
- Accessibility: Respect prefers-reduced-motion; ensure sufficient contrast,
	semantic markup, and keyboard navigability.
- SEO: Provide metadata, titles, canonical links, and open graph tags; avoid
	duplicate content; include sitemap generation if applicable.
- Analytics: Include privacy-conscious analytics with opt-in/consent where
	needed; avoid PII; document events and data retention.
- Versioning: Follow semantic versioning for constitution amendments and for
	public API surface within the app where applicable.

## Development Workflow

- Project Structure: Keep UI components in `src/components/`; shared hooks in
	`src/hooks/`; pages in `src/pages/`; controllers in `api/controllers/`.
- Reuse & Decomposition: Extract duplicated UI into shared components; split
	large components into composable pieces for readability.
- Testing: Maintain unit tests for simple components and all server calls.
	Prefer lightweight testing tools configured for React + TypeScript.
- Dependencies: Use React, Tailwind, and existing `package.json` deps first;
	propose additions via PR with justification.
- CI Gates: Lint, type-check, unit tests, and responsive checks on key
	breakpoints MUST pass before merge.

## Governance

The constitution supersedes ad-hoc practices. Compliance MUST be verified in
PRs. Amendments require documentation, review, and rationale. Versioning policy:

- Patch: Wording clarifications without changing obligations.
- Minor: Add new principles or materially expand guidance without breaking
	existing commitments.
- Major: Remove or redefine principles in a backward-incompatible way.

Amendment Procedure: Propose change → Discuss → Record decision → Update
constitution file → Bump version → Set Last Amended date → Validate templates
and references. Regular compliance reviews are expected during planning and
code review.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-12-02
# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: [CONSTITUTION_VERSION] | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
