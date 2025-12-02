# Accessibility Guidelines

## Keyboard Navigation

### Selection (T006a)
- **Focus**: Tab/Shift+Tab navigates between selectable entities
- **Select**: Enter or Space key selects the focused entity
- **Delete**: Delete or Backspace removes the selected entity (with confirmation)
- **Deselect**: Escape key clears current selection

### Visual Feedback
- Focus rings: 2px solid primary color with 2px offset
- Focus visible only for keyboard navigation (`:focus-visible`)
- Selected state: Blue glow applied to entity

### ARIA Roles & Labels (T006b)
- [ ] All interactive elements have appropriate ARIA roles
- [ ] Draggable items have `role="button"` and `aria-grabbed`
- [ ] Drop zones have `aria-dropeffect` attributes
- [ ] Selection state communicated via `aria-selected`
- [ ] Form inputs have associated labels (explicit or `aria-label`)
- [ ] Error states use `aria-invalid` and `aria-describedby`
- [ ] Live regions for dynamic feedback (`aria-live="polite"`)

## Reduced Motion

Implemented in `src/styles/theme.css`:
- Respects `prefers-reduced-motion: reduce`
- Animations reduced to near-instant (0.01ms)
- Scroll behavior set to `auto` (no smooth scrolling)
- Only essential animations remain visible

## Color Contrast

All text must meet WCAG AA standards:
- Normal text (< 18pt): 4.5:1 contrast ratio
- Large text (≥ 18pt): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

Theme colors tested for contrast:
- Light mode: Dark text on light backgrounds
- Dark mode: Light text on dark backgrounds
- Feedback colors (valid/invalid/selected) meet contrast requirements

## Screen Reader Support

- Semantic HTML elements used where appropriate
- Heading hierarchy maintained (h1 → h2 → h3)
- Skip links for keyboard users
- Alt text for all images
- Form validation messages announced
- Status updates announced via live regions

## Testing Checklist

### Manual Testing
- [ ] Test all features with keyboard only
- [ ] Test with screen reader (VoiceOver, NVDA, JAWS)
- [ ] Test with reduced motion enabled
- [ ] Test with browser zoom at 200%
- [ ] Test with high contrast mode

### Automated Testing
- [ ] Run axe-core accessibility tests
- [ ] Validate ARIA attributes
- [ ] Check color contrast ratios
- [ ] Verify focus management
- [ ] Test keyboard trap scenarios
