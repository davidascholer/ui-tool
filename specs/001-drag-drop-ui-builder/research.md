# Research: Drag-and-Drop UI Builder

## Decisions

- Tailwind Theme: Use CSS variables with Tailwind to provide light/dark themes with a simple random-but-basic color palette (primary, secondary, accent). Respect prefers-color-scheme and user toggle.
- DnD: Use native HTML5 drag-and-drop augmented with pointer/touch handling or a minimal helper. Avoid heavy libraries to keep dependencies minimal.
- Hierarchy Enforcement: Page → Container → Component enforced via drop validators. Visual feedback (green/red/blue) via Tailwind utility classes.
- Code Generation: Build serializers for React JSX and React Native components. Map Tailwind classes to RN styles via a limited style mapping for MVP.
- Forms: Use `react-hook-form` with `zod` resolvers for component option editing in the drawer. Persist edits in local state.
- SEO: Use `react-meta-tags` for titles and meta, Open Graph tags. Ensure canonical link and description.
- Analytics: Use existing analytics library from `package.json` (NEEDS CLARIFICATION: exact library name). Track page views, custom events, and identify visitors with a privacy-conscious config.
- Testing: Use Vitest + React Testing Library. Unit tests for simple components and controller calls. Integration tests for drag-and-drop flows.

## Rationale

- Minimal dependencies and performance favor native DnD with tailored helpers.
- Tailwind provides consistent styles and responsive utilities; CSS variables simplify theming.
- Code generation is core; building serializers gives control and avoids heavy transpilers.

## Alternatives Considered

- `react-dnd`: Mature DnD library; rejected for MVP to keep dependencies minimal.
- Using no SEO library: Possible but `react-meta-tags` simplifies consistent metadata.
- Analytics via custom implementation: Possible but existing library integration likely faster.
