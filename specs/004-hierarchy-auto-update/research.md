# Research: Real-Time Hierarchy Updates in UI Preview

**Feature**: 004-hierarchy-auto-update  
**Created**: December 3, 2025  
**Purpose**: Resolve technical unknowns and establish implementation approaches

## Research Tasks

### 1. React State Update Patterns for Real-Time UI Synchronization

**Decision**: Use React Hook Form's `watch` API with custom hooks for real-time updates  
**Rationale**: 
- Existing codebase uses React Hook Form 7.67.0 in Drawer components
- `watch` provides efficient field-level change detection with minimal re-renders
- Can implement 500ms debouncing using `useCallback` with timeout cleanup
- Integrates naturally with existing form validation using Zod schemas

**Alternatives considered**:
- Direct useState updates: Too many re-renders, difficult to debounce
- Context API: Overkill for component-level updates, performance concerns
- External state management (Redux/Zustand): Adds complexity, not needed for UI-only feature

### 2. Performance Optimization for Batch Updates (3+ changes in 1 second)

**Decision**: Implement custom `useBatchUpdates` hook with requestAnimationFrame scheduling  
**Rationale**:
- RequestAnimationFrame ensures updates occur during browser repaint cycles
- Maintains 60 FPS requirement while batching multiple rapid changes
- Can queue updates by entity ID to prevent duplicate processing
- Existing Framer Motion dependency provides smooth animation capabilities

**Alternatives considered**:
- setTimeout-based batching: Less predictable timing, potential for frame drops
- React's automatic batching: Not sufficient granularity for our performance requirements
- Manual queueing without RAF: Could block main thread during heavy update cycles

### 3. Visual Property Indicator Implementation Patterns

**Decision**: Component-based indicator system with Tailwind class parsing  
**Rationale**:
- Create separate indicator components (ColorIndicator, SpacingIndicator, TextIndicator)
- Parse Tailwind classes client-side using existing tailwind-merge utility
- Map common classes to visual representations (bg-* → color swatches, p-*/m-* → spacing badges)
- Use CSS-in-JS patterns already established in codebase for dynamic styling

**Alternatives considered**:
- Server-side class parsing: Unnecessary complexity for UI-only feature
- External Tailwind parsing library: Adds dependency when existing utils sufficient
- Static mapping tables: Less flexible, harder to maintain as Tailwind evolves

### 4. Hierarchy Expansion State Management During Updates

**Decision**: Enhanced selection state with expansion tracking in ResultSide component  
**Rationale**:
- Extend existing selection state to include expansion paths (parent IDs)
- Maintain expansion state in component local state (useState) for UI responsiveness
- Auto-expand parents when editing nested components using recursive parent lookup
- Preserve expansion state across property updates using React keys for stability

**Alternatives considered**:
- Global expansion state: Overcomplicates simple UI behavior
- localStorage persistence: Not needed for session-only expansion preferences
- Automatic collapse on update: Poor UX, users lose navigation context

### 5. Minimum Width Enforcement and Pixel Display Integration

**Decision**: CSS Grid with minmax for responsive width, React ref for pixel measurement  
**Rationale**:
- Use CSS Grid `minmax(320px, 1fr)` in Layout.tsx for guaranteed minimum width
- Implement `useResizeObserver` hook with ResizeObserver API for accurate pixel measurement
- Display current width in top-right corner using absolute positioning
- Integrates with existing responsive breakpoints in Layout component

**Alternatives considered**:
- Fixed width sidebar: Breaks responsive design requirements
- JavaScript-only width enforcement: Less performant than CSS-native solutions
- Manual resize event listeners: ResizeObserver provides more accurate measurements

## Technology Integration Points

### Existing Dependencies Leveraged
- **React Hook Form 7.67.0**: Form state management and change detection
- **Framer Motion 12.23.25**: Smooth animations for visual feedback
- **Tailwind CSS 4.1.17**: Class parsing and dynamic styling
- **Zod 4.1.13**: Property validation and type safety

### Browser APIs Required  
- **ResizeObserver**: For accurate width measurement and display
- **requestAnimationFrame**: For smooth batch update scheduling
- **localStorage** (optional): For expansion state persistence across sessions

### Performance Considerations
- Debounce real-time updates to 500ms to prevent excessive re-renders
- Use React.memo for indicator components to prevent unnecessary updates
- Batch DOM updates using requestAnimationFrame scheduling
- Limit visual indicator complexity to maintain 60 FPS during updates

## Implementation Approach

1. **Phase 1A**: Enhance ResultSide with width measurement and display
2. **Phase 1B**: Implement property indicator components with Tailwind parsing
3. **Phase 2A**: Add real-time update hooks with debouncing
4. **Phase 2B**: Integrate batch update optimization
5. **Phase 3**: Add expansion state management and auto-expand behavior

## Risk Mitigation

- **Performance Risk**: Batch updates and use React.memo to prevent cascade re-renders
- **Browser Compatibility**: ResizeObserver has 95% support, provide graceful fallback
- **State Complexity**: Keep expansion state local to ResultSide to avoid prop drilling
- **Testing Complexity**: Use React Testing Library with fake timers for debounce testing