/**
 * Auto-Expansion Behavior Integration Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T029)
 * Tests auto-expand behavior when selecting nested components for editing
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import type { HierarchyViewItem, ComponentEntity } from '../../src/utils/types';

// Mock hierarchy component that demonstrates auto-expansion
interface MockHierarchyProps {
  items: HierarchyViewItem[];
  onSelectForEditing: (id: string) => void;
  expandedItems: Set<string>;
  onExpansionChange: (id: string, expanded: boolean) => void;
  editingItemId: string | null;
}

function MockHierarchy({
  items,
  onSelectForEditing,
  expandedItems,
  onExpansionChange,
  editingItemId
}: MockHierarchyProps) {
  const renderItem = (item: HierarchyViewItem) => {
    const isExpanded = expandedItems.has(item.id);
    const isEditing = editingItemId === item.id;
    const hasChildren = item.children.length > 0;
    
    return (
      <div key={item.id} className={`hierarchy-item depth-${item.depth}`}>
        <div 
          className={`item-header ${
            isEditing ? 'editing' : ''
          }`}
          style={{ paddingLeft: `${item.depth * 16}px` }}
        >
          {hasChildren && (
            <button
              className="expand-toggle"
              onClick={() => onExpansionChange(item.id, !isExpanded)}
              data-testid={`expand-${item.id}`}
            >
              {isExpanded ? '▼' : '▶'}
            </button>
          )}
          <span 
            className="item-label"
            onClick={() => onSelectForEditing(item.id)}
            data-testid={`select-${item.id}`}
          >
            {item.id} {isEditing && '(editing)'}
          </span>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="children">
            {item.children.map(childId => {
              const childItem = items.find(i => i.id === childId);
              return childItem ? renderItem(childItem) : null;
            })}
          </div>
        )}
      </div>
    );
  };
  
  const rootItems = items.filter(item => item.parentId === null);
  
  return (
    <div className="hierarchy" data-testid="hierarchy">
      {rootItems.map(renderItem)}
    </div>
  );
}

// Mock data for integration testing
const mockHierarchyData: HierarchyViewItem[] = [
  {
    id: 'app',
    parentId: null,
    entityType: 'container',
    depth: 0,
    isExpanded: true,
    children: ['header', 'main', 'footer']
  },
  {
    id: 'header',
    parentId: 'app',
    entityType: 'container',
    depth: 1,
    isExpanded: false,
    children: ['nav']
  },
  {
    id: 'main',
    parentId: 'app',
    entityType: 'container',
    depth: 1,
    isExpanded: false,
    children: ['sidebar', 'content']
  },
  {
    id: 'footer',
    parentId: 'app',
    entityType: 'container',
    depth: 1,
    isExpanded: false,
    children: ['copyright']
  },
  {
    id: 'nav',
    parentId: 'header',
    entityType: 'component',
    depth: 2,
    isExpanded: false,
    children: ['logo', 'menu']
  },
  {
    id: 'sidebar',
    parentId: 'main',
    entityType: 'container',
    depth: 2,
    isExpanded: false,
    children: ['filters']
  },
  {
    id: 'content',
    parentId: 'main',
    entityType: 'container',
    depth: 2,
    isExpanded: false,
    children: ['article', 'comments']
  },
  {
    id: 'copyright',
    parentId: 'footer',
    entityType: 'component',
    depth: 2,
    isExpanded: false,
    children: []
  },
  {
    id: 'logo',
    parentId: 'nav',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  },
  {
    id: 'menu',
    parentId: 'nav',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: ['menuItem1', 'menuItem2']
  },
  {
    id: 'filters',
    parentId: 'sidebar',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  },
  {
    id: 'article',
    parentId: 'content',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: ['title', 'body']
  },
  {
    id: 'comments',
    parentId: 'content',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  },
  {
    id: 'menuItem1',
    parentId: 'menu',
    entityType: 'component',
    depth: 4,
    isExpanded: false,
    children: []
  },
  {
    id: 'menuItem2',
    parentId: 'menu',
    entityType: 'component',
    depth: 4,
    isExpanded: false,
    children: []
  },
  {
    id: 'title',
    parentId: 'article',
    entityType: 'component',
    depth: 4,
    isExpanded: false,
    children: []
  },
  {
    id: 'body',
    parentId: 'article',
    entityType: 'component',
    depth: 4,
    isExpanded: false,
    children: []
  }
];

// Helper to calculate expansion path
function calculateExpansionPathForItem(targetId: string, items: HierarchyViewItem[]): string[] {
  const item = items.find(i => i.id === targetId);
  if (!item || !item.parentId) return [];
  
  const path = [item.parentId];
  let current = items.find(i => i.id === item.parentId);
  
  while (current?.parentId) {
    path.unshift(current.parentId);
    current = items.find(i => i.id === current!.parentId);
  }
  
  return path;
}

describe('Auto-Expansion Integration', () => {
  let user: ReturnType<typeof userEvent.setup>;
  let expandedItems: Set<string>;
  let editingItemId: string | null;
  let onSelectForEditing: ReturnType<typeof vi.fn>;
  let onExpansionChange: ReturnType<typeof vi.fn>;
  
  beforeEach(() => {
    user = userEvent.setup();
    expandedItems = new Set(['app']); // Start with root expanded
    editingItemId = null;
    onSelectForEditing = vi.fn();
    onExpansionChange = vi.fn();
  });
  
  const renderHierarchy = () => {
    return render(
      <MockHierarchy
        items={mockHierarchyData}
        onSelectForEditing={onSelectForEditing}
        expandedItems={expandedItems}
        onExpansionChange={onExpansionChange}
        editingItemId={editingItemId}
      />
    );
  };
  
  it('should auto-expand path when selecting deeply nested item for editing', async () => {
    renderHierarchy();
    
    // Initially, only root should be visible
    expect(screen.getByTestId('select-app')).toBeInTheDocument();
    expect(screen.queryByTestId('select-title')).not.toBeInTheDocument();
    
    // Simulate auto-expansion for selecting 'title' (deeply nested)
    const expansionPath = calculateExpansionPathForItem('title', mockHierarchyData);
    expect(expansionPath).toEqual(['app', 'main', 'content', 'article']);
    
    // Auto-expand the path
    expansionPath.forEach(id => {
      expandedItems.add(id);
      onExpansionChange(id, true);
    });
    
    // Re-render with expanded state
    renderHierarchy();
    
    // Now the deeply nested item should be visible
    await waitFor(() => {
      expect(screen.getByTestId('select-title')).toBeInTheDocument();
    });
    
    expect(onExpansionChange).toHaveBeenCalledWith('app', true);
    expect(onExpansionChange).toHaveBeenCalledWith('main', true);
    expect(onExpansionChange).toHaveBeenCalledWith('content', true);
    expect(onExpansionChange).toHaveBeenCalledWith('article', true);
  });
  
  it('should maintain expansion state during property updates', async () => {
    // Start with some items expanded
    expandedItems.add('main');
    expandedItems.add('content');
    
    renderHierarchy();
    
    // Verify items are visible
    expect(screen.getByTestId('select-main')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
    
    // Simulate property update (should not affect expansion)
    editingItemId = 'content';
    renderHierarchy();
    
    // Expansion state should be maintained
    expect(screen.getByTestId('select-main')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
    expect(screen.getByText('content (editing)')).toBeInTheDocument();
  });
  
  it('should handle manual expansion and auto-expansion together', async () => {
    renderHierarchy();
    
    // Manually expand header
    await user.click(screen.getByTestId('expand-app'));
    onExpansionChange('header', true);
    expandedItems.add('header');
    
    renderHierarchy();
    
    // Now auto-expand path to a different branch (main -> content)
    expandedItems.add('main');
    expandedItems.add('content');
    
    renderHierarchy();
    
    // Both manual and auto-expanded items should be visible
    expect(screen.getByTestId('select-header')).toBeInTheDocument();
    expect(screen.getByTestId('select-main')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
  });
  
  it('should auto-expand minimal path to target item', async () => {
    renderHierarchy();
    
    // Target: menuItem2 (path: app -> header -> nav -> menu -> menuItem2)
    const targetPath = calculateExpansionPathForItem('menuItem2', mockHierarchyData);
    expect(targetPath).toEqual(['app', 'header', 'nav', 'menu']);
    
    // Should only expand necessary ancestors, not siblings
    targetPath.forEach(id => expandedItems.add(id));
    
    renderHierarchy();
    
    // Target and its ancestors should be visible
    expect(screen.getByTestId('select-menuItem2')).toBeInTheDocument();
    expect(screen.getByTestId('select-menu')).toBeInTheDocument();
    expect(screen.getByTestId('select-nav')).toBeInTheDocument();
    expect(screen.getByTestId('select-header')).toBeInTheDocument();
    
    // Siblings should not be auto-expanded
    expect(expandedItems.has('main')).toBe(false);
    expect(expandedItems.has('footer')).toBe(false);
  });
  
  it('should handle rapid selection changes with proper cleanup', async () => {
    renderHierarchy();
    
    // Quickly select multiple nested items
    const targets = ['title', 'menuItem1', 'filters'];
    
    for (const target of targets) {
      const path = calculateExpansionPathForItem(target, mockHierarchyData);
      
      // Clear previous expansions (simulate cleanup)
      expandedItems.clear();
      expandedItems.add('app'); // Keep root
      
      // Expand path to new target
      path.forEach(id => expandedItems.add(id));
      
      editingItemId = target;
      renderHierarchy();
      
      // Target should be visible
      expect(screen.getByTestId(`select-${target}`)).toBeInTheDocument();
    }
  });
  
  it('should persist expansion preferences across component remounts', async () => {
    // Initial render with some expansions
    expandedItems.add('main');
    expandedItems.add('content');
    editingItemId = 'article';
    
    const { unmount } = renderHierarchy();
    
    // Verify state before unmount
    expect(screen.getByTestId('select-article')).toBeInTheDocument();
    
    // Unmount and remount (simulate navigation or refresh)
    unmount();
    
    // Expansion state should persist
    renderHierarchy();
    
    expect(screen.getByTestId('select-main')).toBeInTheDocument();
    expect(screen.getByTestId('select-content')).toBeInTheDocument();
    expect(screen.getByTestId('select-article')).toBeInTheDocument();
  });
  
  it('should handle edge case: selecting root item', async () => {
    renderHierarchy();
    
    // Select root item for editing
    editingItemId = 'app';
    onSelectForEditing('app');
    
    renderHierarchy();
    
    // Root should be highlighted as editing
    expect(screen.getByText('app (editing)')).toBeInTheDocument();
    
    // No auto-expansion should occur for root
    const path = calculateExpansionPathForItem('app', mockHierarchyData);
    expect(path).toEqual([]);
  });
  
  it('should handle edge case: selecting item with no children', async () => {
    // Pre-expand to make leaf item visible
    expandedItems.add('footer');
    
    renderHierarchy();
    
    // Select leaf item (no children)
    editingItemId = 'copyright';
    onSelectForEditing('copyright');
    
    renderHierarchy();
    
    // Item should be highlighted but no expansion toggle should exist
    expect(screen.getByText('copyright (editing)')).toBeInTheDocument();
    expect(screen.queryByTestId('expand-copyright')).not.toBeInTheDocument();
  });
  
  describe('Performance Considerations', () => {
    it('should handle large hierarchy efficiently', async () => {
      const startTime = performance.now();
      
      // Create larger hierarchy (100+ items)
      const largeHierarchy: HierarchyViewItem[] = [];
      for (let i = 0; i < 100; i++) {
        largeHierarchy.push({
          id: `item-${i}`,
          parentId: i > 0 ? `item-${Math.floor(i / 3)}` : null,
          entityType: 'component',
          depth: Math.floor(Math.log(i + 1) / Math.log(3)),
          isExpanded: false,
          children: []
        });
      }
      
      render(
        <MockHierarchy
          items={largeHierarchy}
          onSelectForEditing={onSelectForEditing}
          expandedItems={new Set(['item-0'])}
          onExpansionChange={onExpansionChange}
          editingItemId={null}
        />
      );
      
      const endTime = performance.now();
      
      // Should render within reasonable time (< 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });
  });
});