# Quickstart Guide: Real-Time Hierarchy Updates

**Feature**: 004-hierarchy-auto-update  
**Audience**: Developers implementing the feature  
**Purpose**: Step-by-step implementation guide

## Overview

This guide walks through implementing real-time hierarchy updates that display property changes immediately in the UI Builder's hierarchy view. Users will see visual indicators for colors, spacing, and text content, with automatic expansion management and minimum width enforcement.

## Prerequisites

- Existing UI Builder with drag-and-drop functionality (feature 001)
- React 19.2.0+ with TypeScript 5.9.3+
- Tailwind CSS 4.1.17+ configured
- React Hook Form 7.67.0+ and Zod 4.1.13+ for forms

## Phase 1: Width Management & Display (30 minutes)

### Step 1.1: Enhance Layout for Minimum Width

**File**: `src/components/builder/Layout.tsx`

```typescript
// Add minWidth prop and CSS Grid configuration
export function Layout({ uiSide, resultSide, drawer, drawerOpen, minHierarchyWidth = 320 }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      {/* Desktop layout with CSS Grid for width control */}
      <div className="hidden lg:grid lg:grid-cols-[250px_minmax(320px,1fr)_320px] lg:flex-1">
        <aside className="overflow-auto border-r border-gray-200">{uiSide}</aside>
        <main className="overflow-auto relative">{resultSide}</main>
        <aside className={`overflow-auto border-l ${drawerOpen ? '' : 'hidden'}`}>{drawer}</aside>
      </div>
    </div>
  );
}
```

### Step 1.2: Create Width Display Component

**File**: `src/components/builder/ResultSide/WidthDisplay.tsx`

```typescript
import { useState, useEffect, useRef } from 'react';

export function WidthDisplay({ minWidth = 320 }: { minWidth?: number }) {
  const [currentWidth, setCurrentWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const width = Math.round(entries[0].contentRect.width);
      setCurrentWidth(width);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-2 right-2 z-10">
      <span className="text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        {currentWidth}px{currentWidth <= minWidth && ' (min)'}
      </span>
    </div>
  );
}
```

## Phase 2: Property Indicators (45 minutes)

### Step 2.1: Create Indicator Components

**File**: `src/components/builder/ResultSide/PropertyIndicators/ColorIndicator.tsx`

```typescript
interface ColorIndicatorProps {
  colorClass: string;
  tooltip?: string;
}

export function ColorIndicator({ colorClass, tooltip }: ColorIndicatorProps) {
  const color = parseColorClass(colorClass); // Utility function to convert class to hex
  
  return (
    <div className="relative group">
      <div 
        className="w-3 h-3 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
        title={tooltip || colorClass}
      />
      {tooltip && (
        <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 
                       bg-black text-white text-xs px-2 py-1 rounded opacity-0 
                       group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  );
}
```

### Step 2.2: Create Indicator Parser Hook

**File**: `src/hooks/usePropertyIndicators.tsx`

```typescript
export function usePropertyIndicators(entity: EntityType | null) {
  return useMemo(() => {
    if (!entity) return [];
    
    const indicators: VisualIndicator[] = [];
    
    // Parse Tailwind classes for color indicators
    if (entity.tailwindOptions?.classList) {
      entity.tailwindClassList.forEach(className => {
        if (className.match(/^(bg|text|border)-\w+-\d+$/)) {
          indicators.push({
            type: 'color',
            value: className,
            displayValue: parseColorClass(className),
            tooltip: `${className}: ${parseColorClass(className)}`,
            priority: 5,
            isValid: true
          });
        }
      });
    }
    
    // Add text content indicators for components
    if (entity.type === 'Component' && entity.props?.children) {
      indicators.push({
        type: 'text',
        value: entity.props.children,
        displayValue: truncateText(entity.props.children, 15),
        tooltip: entity.props.children,
        priority: 4,
        isValid: true
      });
    }
    
    return indicators.slice(0, 5); // Limit to 5 indicators
  }, [entity]);
}
```

## Phase 3: Real-Time Updates (60 minutes)

### Step 3.1: Create Update Management Hook

**File**: `src/hooks/useHierarchyUpdates.tsx`

```typescript
export function useHierarchyUpdates({ pages, selection }: UseHierarchyUpdatesProps) {
  const [updateContext, setUpdateContext] = useState<UpdateContext>({
    pendingChanges: new Map(),
    batchTimeout: null,
    isProcessing: false,
    lastUpdateTime: 0,
    activeEntityId: selection?.entityId || null,
    expansionState: new Map()
  });

  const queueChange = useCallback((change: PropertyChange) => {
    setUpdateContext(prev => {
      const newPendingChanges = new Map(prev.pendingChanges);
      const entityChanges = newPendingChanges.get(change.entityId) || [];
      entityChanges.push(change);
      newPendingChanges.set(change.entityId, entityChanges);
      
      // Check for batch conditions (3+ changes in 1 second)
      const recentChanges = entityChanges.filter(
        c => Date.now() - c.timestamp < 1000
      );
      
      if (recentChanges.length >= 3) {
        // Trigger batch processing
        return { ...prev, pendingChanges: newPendingChanges, isProcessing: true };
      }
      
      return { ...prev, pendingChanges: newPendingChanges };
    });
  }, []);

  // Debounced processing with 500ms delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (updateContext.pendingChanges.size > 0) {
        // Process all pending changes
        processPendingChanges();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [updateContext.pendingChanges]);

  return { updateContext, queueChange };
}
```

### Step 3.2: Integrate with React Hook Form

**File**: `src/components/builder/Drawer/index.tsx`

```typescript
export function Drawer({ selection, entity, onSave }: DrawerProps) {
  const { watch, handleSubmit, formState } = useForm();
  const { queueChange } = useHierarchyUpdates({ pages, selection });
  
  // Watch for real-time changes
  const watchedValues = watch();
  const previousValues = useRef(watchedValues);

  useEffect(() => {
    if (!selection) return;
    
    // Detect changes and queue them
    Object.keys(watchedValues).forEach(key => {
      if (watchedValues[key] !== previousValues.current[key]) {
        const change: PropertyChange = {
          entityId: selection.entityId,
          entityType: selection.entityType,
          propertyPath: key,
          oldValue: previousValues.current[key],
          newValue: watchedValues[key],
          timestamp: Date.now(),
          source: 'drawer'
        };
        
        queueChange(change);
      }
    });
    
    previousValues.current = watchedValues;
  }, [watchedValues, selection, queueChange]);

  return (
    <div className="p-4">
      {/* Existing form content */}
    </div>
  );
}
```

## Phase 4: Enhanced Hierarchy Display (45 minutes)

### Step 4.1: Create Enhanced Selectable Component

**File**: `src/components/builder/ResultSide/Selectable.tsx`

```typescript
interface SelectableProps {
  // ... existing props
  indicators?: VisualIndicator[];
  isEditing?: boolean;
  hasUpdates?: boolean;
}

export function Selectable({ 
  children, 
  isSelected, 
  isEditing, 
  indicators = [],
  className = '' 
}: SelectableProps) {
  const baseClasses = "border rounded-lg transition-all duration-200";
  const stateClasses = [
    isSelected && "border-blue-500 bg-blue-50",
    isEditing && "ring-2 ring-blue-400 ring-opacity-50",
    "hover:border-gray-400"
  ].filter(Boolean).join(" ");

  return (
    <div className={`${baseClasses} ${stateClasses} ${className}`}>
      <div className="flex items-center justify-between p-2">
        <div className="flex-1">{children}</div>
        
        {/* Property indicators */}
        {indicators.length > 0 && (
          <div className="flex items-center space-x-1 ml-2">
            {indicators.map((indicator, index) => (
              <IndicatorRenderer key={index} indicator={indicator} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

### Step 4.2: Update ResultSide Integration

**File**: `src/components/builder/ResultSide/index.tsx`

```typescript
export const ResultSide = memo(function ResultSide({ pages, selection, onSelect, onDrop, onDelete }: ResultSideProps) {
  const { hierarchyItems, queueChange } = useHierarchyUpdates({ pages, selection });
  const [viewMode, setViewMode] = useState<ViewMode>('hierarchy');

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Width display in top-right corner */}
      <WidthDisplay minWidth={320} />
      
      <ViewModeToggle viewMode={viewMode} onViewModeChange={setViewMode} />
      
      <div className="flex-1 overflow-hidden">
        {viewMode === 'hierarchy' ? (
          <div className="h-full p-4 overflow-auto">
            {pages.map((page) => {
              const pageItem = hierarchyItems.get(page.id);
              const indicators = usePropertyIndicators(page);
              
              return (
                <Selectable
                  key={page.id}
                  entityType="Page"
                  entityId={page.id}
                  isSelected={selection?.entityId === page.id}
                  isEditing={pageItem?.isEditing}
                  indicators={indicators}
                  onSelect={handleSelect}
                  onDelete={onDelete}
                >
                  <h2 className="text-lg font-semibold">{page.name}</h2>
                  {/* Nested containers and components */}
                </Selectable>
              );
            })}
          </div>
        ) : (
          <CodeView pages={pages} className="h-full" />
        )}
      </div>
    </div>
  );
});
```

## Testing Quick Validation

### Step 5.1: Basic Functionality Test

1. **Width Display**: Resize browser window, verify width shows in top-right corner
2. **Property Indicators**: Select component, modify background color in drawer, verify colored dot appears
3. **Real-Time Updates**: Type in component name field, verify hierarchy updates after 500ms
4. **Expansion Management**: Edit nested component, verify parent containers stay expanded

### Step 5.2: Performance Validation

1. **Batch Testing**: Rapidly modify 3+ properties, verify single batch update occurs
2. **Animation Smoothness**: Verify 60 FPS maintained during property updates
3. **Memory Usage**: Monitor for memory leaks during extended editing sessions

## Common Issues & Solutions

### Issue: Width Display Not Updating
**Solution**: Verify ResizeObserver is supported in browser, add polyfill if needed

### Issue: Indicators Not Showing  
**Solution**: Check Tailwind class parsing logic, ensure classes match expected patterns

### Issue: Performance Degradation
**Solution**: Verify React.memo usage on indicator components, check for unnecessary re-renders

### Issue: Updates Not Debouncing
**Solution**: Ensure useEffect cleanup properly cancels previous timeouts

## Next Steps

1. **Advanced Indicators**: Add spacing and size indicators
2. **Keyboard Navigation**: Implement arrow key navigation in hierarchy
3. **Accessibility**: Add ARIA labels and screen reader support
4. **Persistence**: Save expansion state to localStorage
5. **Animation Polish**: Add micro-interactions for property updates

## Production Readiness Checklist

- [ ] All visual indicators display correctly for common Tailwind classes
- [ ] Real-time updates maintain 200ms response time requirement
- [ ] Batch updates trigger correctly for rapid changes (3+ in 1 second)  
- [ ] Minimum 320px width enforced across all screen sizes
- [ ] Error handling gracefully reverts invalid property changes
- [ ] Performance maintains 60 FPS during heavy update scenarios
- [ ] Accessibility features work with keyboard navigation and screen readers
- [ ] Unit tests cover all major update scenarios and edge cases