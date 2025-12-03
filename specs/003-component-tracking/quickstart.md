# Quickstart: Component Tracking and Code Export

**Feature**: [spec.md](./spec.md)  
**Date**: December 3, 2025

---

## Overview

This feature allows you to click any component in the Result canvas to instantly copy its React or React Native code to your clipboard.

---

## Prerequisites

- Feature 001 (Drag-and-drop UI builder) must be running
- Modern browser with Clipboard API support (Chrome 66+, Firefox 63+, Safari 13.1+, Edge 79+)

---

## Quick Test Steps

### 1. Create a Component

1. Start the dev server: `npm run dev`
2. Open browser to `http://localhost:5173`
3. Drag a **Page** to the canvas
4. Drag a **Container** into the Page
5. Drag a **Button** into the Container

### 2. Edit Properties (optional)

1. Click on the Button to select it
2. In the Drawer, modify:
   - Name: "Submit Button"
   - Tailwind classes: `px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700`

### 3. Copy Code

1. Click directly on the Button component in the Result canvas
2. You should see a notification: **"Code copied to clipboard!"**
3. Paste (Cmd+V / Ctrl+V) into a text editor

**Expected Result**:
```jsx
import React from 'react';

<button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Submit Button
</button>
```

### 4. Toggle Code Format

1. Click the **"React Native"** toggle button (top of UI or in UISide)
2. Click the Button again
3. Paste the clipboard content

**Expected Result**:
```jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity style={{ paddingHorizontal: 24, paddingVertical: 12, backgroundColor: '#2563eb', borderRadius: 8 }}>
  <Text style={{ color: '#ffffff' }}>Submit Button</Text>
</TouchableOpacity>
```

### 5. Test Nested Components

1. Add multiple components to the Container:
   - Add an **Input** field
   - Add another **Button**
2. Click on the **Container** (not individual components)
3. Paste the clipboard content

**Expected Result**: Full container code with all nested children

---

## Testing Scenarios

### Scenario A: Basic Component Copy

**Steps**:
1. Create a simple Button component
2. Click the Button
3. Verify clipboard contains valid React code

**Success Criteria**:
- ✅ Notification appears within 200ms
- ✅ Clipboard contains syntactically correct JSX
- ✅ Code includes all custom Tailwind classes
- ✅ Code includes component props (text, placeholder, etc.)

---

### Scenario B: Nested Hierarchy Copy

**Steps**:
1. Create Page → Container → Button + Input
2. Click the Container
3. Verify clipboard contains full hierarchy

**Success Criteria**:
- ✅ Container code includes both Button and Input as children
- ✅ Nesting structure is correct (proper indentation)
- ✅ All child properties are preserved

---

### Scenario C: Format Toggle

**Steps**:
1. Create a Card component with custom styles
2. Copy code in React format
3. Toggle to React Native format
4. Copy code again
5. Compare outputs

**Success Criteria**:
- ✅ React version uses `<div>` and `className`
- ✅ React Native version uses `<View>` and `style` object
- ✅ Tailwind classes converted to inline styles
- ✅ Both versions are syntactically valid

---

### Scenario D: Clipboard Failure Fallback

**Steps**:
1. Deny clipboard permissions in browser settings
2. Click a component
3. Observe fallback behavior

**Success Criteria**:
- ✅ Modal appears with code content
- ✅ Code is displayed in a readable format
- ✅ "Copy" button manually copies to clipboard (if permission granted later)
- ✅ "Close" button dismisses modal

---

### Scenario E: Rapid Clicking

**Steps**:
1. Create multiple components
2. Click rapidly between different components
3. After each click, verify clipboard content

**Success Criteria**:
- ✅ Clipboard updates immediately for each click
- ✅ No lag or stuttering
- ✅ Correct component code in clipboard each time
- ✅ Notifications don't stack excessively

---

## Keyboard Testing

### Click-to-Copy via Keyboard

**Steps**:
1. Tab to navigate to a component in Result canvas
2. Press **Enter** or **Space** to "click"
3. Verify code is copied

**Success Criteria**:
- ✅ Focus visible on selected component
- ✅ Enter/Space triggers copy action
- ✅ Screen reader announces "Code copied to clipboard"

---

## Browser Compatibility Testing

Test in these browsers:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**Fallback Browsers** (should show modal):
- Chrome < 66
- Firefox < 63
- Safari < 13.1

---

## Performance Benchmarks

### Code Generation Speed

Test with increasing complexity:

| Components | Expected Time | Test Command |
|-----------|---------------|--------------|
| 1 component | < 50ms | Single Button |
| 10 components | < 100ms | Container with 10 Buttons |
| 50 components | < 300ms | Multiple containers |
| 100 components | < 500ms | Complex page hierarchy |

**How to Test**:
1. Open browser DevTools → Performance tab
2. Start recording
3. Click component to copy code
4. Stop recording
5. Measure time from click to clipboard write

---

## Troubleshooting

### Code Not Copying

**Issue**: Clicking component does nothing  
**Solution**: 
- Check browser console for errors
- Verify clipboard permissions
- Try fallback modal (should appear if clipboard fails)

### Notification Not Appearing

**Issue**: Code copies but no visual feedback  
**Solution**:
- Check if notification component is rendering
- Verify z-index (notification should be on top)
- Check console for React errors

### Invalid Code Generated

**Issue**: Pasted code has syntax errors  
**Solution**:
- Check component metadata in state
- Verify code generator is handling component type correctly
- Report bug with component configuration

### React Native Styles Wrong

**Issue**: Converted styles don't match Tailwind  
**Solution**:
- Check `tailwindToRN` mapping table in research.md
- Some Tailwind classes may not have RN equivalents (documented as unsupported)
- Use React format for web-specific styles

---

## Development Commands

```bash
# Run dev server
npm run dev

# Run tests
npm test

# Run tests for code generation
npm test -- code-generators

# Run tests for clipboard functionality
npm test -- click-to-copy

# Run all feature tests
npm test -- component-tracking
```

---

## Next Steps

After verifying basic functionality:

1. **Test Edge Cases**:
   - Empty components
   - Components with no styles
   - Deeply nested hierarchies (10+ levels)

2. **Test Accessibility**:
   - Screen reader compatibility
   - Keyboard navigation
   - High contrast mode

3. **Test Performance**:
   - Large component trees
   - Rapid format switching
   - Memory usage over time

4. **Document Issues**:
   - Create GitHub issues for bugs
   - Note unsupported Tailwind classes
   - Suggest UX improvements

---

## Feature Complete Checklist

- [ ] All component types (Button, Input, Card, Text, Image, List) generate valid code
- [ ] React and React Native formats both work
- [ ] Clipboard copy succeeds in modern browsers
- [ ] Fallback modal works when clipboard fails
- [ ] Notification appears on successful copy
- [ ] Keyboard navigation works (Tab + Enter)
- [ ] Code generation is fast (< 500ms for 100 components)
- [ ] Generated code is syntactically valid
- [ ] Nested components render correctly
- [ ] Format toggle updates all component metadata

**When all items checked**: Feature is ready for production! ✅
