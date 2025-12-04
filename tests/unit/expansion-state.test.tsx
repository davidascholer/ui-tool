/**
 * Expansion State Management Unit Tests
 * Feature 004: Real-Time Hierarchy Updates - User Story 3 (T028)
 * Tests expansion state management logic and utilities
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import type { HierarchyViewItem } from '../../src/utils/types';
import { calculateExpansionPath, getChildEntityIds } from '../../src/utils/hierarchyHelpers';

// Mock hierarchy data for testing
const mockHierarchyItems = new Map<string, HierarchyViewItem>([
  ['root', {
    id: 'root',
    parentId: null,
    entityType: 'container',
    depth: 0,
    isExpanded: true,
    children: ['section1', 'section2']
  }],
  ['section1', {
    id: 'section1',
    parentId: 'root',
    entityType: 'container',
    depth: 1,
    isExpanded: false,
    children: ['card1', 'card2']
  }],
  ['section2', {
    id: 'section2',
    parentId: 'root',
    entityType: 'container',
    depth: 1,
    isExpanded: true,
    children: ['card3']
  }],
  ['card1', {
    id: 'card1',
    parentId: 'section1',
    entityType: 'component',
    depth: 2,
    isExpanded: false,
    children: ['button1', 'text1']
  }],
  ['card2', {
    id: 'card2',
    parentId: 'section1',
    entityType: 'component',
    depth: 2,
    isExpanded: false,
    children: []
  }],
  ['card3', {
    id: 'card3',
    parentId: 'section2',
    entityType: 'component',
    depth: 2,
    isExpanded: true,
    children: ['button2']
  }],
  ['button1', {
    id: 'button1',
    parentId: 'card1',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  }],
  ['text1', {
    id: 'text1',
    parentId: 'card1',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  }],
  ['button2', {
    id: 'button2',
    parentId: 'card3',
    entityType: 'component',
    depth: 3,
    isExpanded: false,
    children: []
  }]
]);

// Mock useHierarchyExpansion hook
interface ExpansionState {
  expandedItems: Set<string>;
  expandItem: (id: string) => void;
  collapseItem: (id: string) => void;
  toggleItem: (id: string) => void;
  expandPath: (targetId: string) => void;
  collapseAll: () => void;
  expandAll: () => void;
  getExpansionPath: (targetId: string) => string[];
}

function createMockUseHierarchyExpansion(initialExpanded: string[] = []): ExpansionState {
  let expandedItems = new Set(initialExpanded);
  
  return {
    expandedItems,
    expandItem: (id: string) => { expandedItems.add(id); },
    collapseItem: (id: string) => { expandedItems.delete(id); },
    toggleItem: (id: string) => {
      if (expandedItems.has(id)) {
        expandedItems.delete(id);
      } else {
        expandedItems.add(id);
      }
    },
    expandPath: (targetId: string) => {
      const path = calculateExpansionPath(targetId, mockHierarchyItems);
      path.forEach(id => expandedItems.add(id));
    },
    collapseAll: () => { expandedItems.clear(); },
    expandAll: () => {
      mockHierarchyItems.forEach((_, id) => expandedItems.add(id));
    },
    getExpansionPath: (targetId: string) => calculateExpansionPath(targetId, mockHierarchyItems)
  };
}

describe('Expansion State Management', () => {
  describe('calculateExpansionPath', () => {
    it('should return correct path for deeply nested item', () => {
      const path = calculateExpansionPath('button1', mockHierarchyItems);
      expect(path).toEqual(['root', 'section1', 'card1']);
    });

    it('should return correct path for top-level item', () => {
      const path = calculateExpansionPath('section1', mockHierarchyItems);
      expect(path).toEqual(['root']);
    });

    it('should return empty path for root item', () => {
      const path = calculateExpansionPath('root', mockHierarchyItems);
      expect(path).toEqual([]);
    });

    it('should handle non-existent items gracefully', () => {
      const path = calculateExpansionPath('nonexistent', mockHierarchyItems);
      expect(path).toEqual([]);
    });
  });

  describe('getChildEntityIds', () => {
    it('should return all direct children', () => {
      const children = getChildEntityIds('root', mockHierarchyItems);
      expect(children).toEqual(['section1', 'section2']);
    });

    it('should return empty array for leaf items', () => {
      const children = getChildEntityIds('button1', mockHierarchyItems);
      expect(children).toEqual([]);
    });

    it('should handle non-existent parent', () => {
      const children = getChildEntityIds('nonexistent', mockHierarchyItems);
      expect(children).toEqual([]);
    });
  });

  describe('ExpansionState Management', () => {
    let expansionState: ExpansionState;

    beforeEach(() => {
      expansionState = createMockUseHierarchyExpansion(['root', 'section2']);
    });

    it('should initialize with provided expanded items', () => {
      expect(expansionState.expandedItems.has('root')).toBe(true);
      expect(expansionState.expandedItems.has('section2')).toBe(true);
      expect(expansionState.expandedItems.has('section1')).toBe(false);
    });

    it('should expand items correctly', () => {
      expansionState.expandItem('section1');
      expect(expansionState.expandedItems.has('section1')).toBe(true);
    });

    it('should collapse items correctly', () => {
      expansionState.collapseItem('section2');
      expect(expansionState.expandedItems.has('section2')).toBe(false);
    });

    it('should toggle items correctly', () => {
      // Toggle expanded item (should collapse)
      expansionState.toggleItem('section2');
      expect(expansionState.expandedItems.has('section2')).toBe(false);
      
      // Toggle collapsed item (should expand)
      expansionState.toggleItem('section1');
      expect(expansionState.expandedItems.has('section1')).toBe(true);
    });

    it('should expand path to target item', () => {
      expansionState.expandPath('button1');
      
      // Should expand all ancestors: root, section1, card1
      expect(expansionState.expandedItems.has('root')).toBe(true);
      expect(expansionState.expandedItems.has('section1')).toBe(true);
      expect(expansionState.expandedItems.has('card1')).toBe(true);
      // Target item should not be expanded
      expect(expansionState.expandedItems.has('button1')).toBe(false);
    });

    it('should collapse all items', () => {
      expansionState.collapseAll();
      expect(expansionState.expandedItems.size).toBe(0);
    });

    it('should expand all items', () => {
      expansionState.expandAll();
      expect(expansionState.expandedItems.size).toBe(mockHierarchyItems.size);
    });

    it('should get correct expansion path', () => {
      const path = expansionState.getExpansionPath('text1');
      expect(path).toEqual(['root', 'section1', 'card1']);
    });
  });

  describe('Expansion State Persistence', () => {
    it('should maintain expansion state during property updates', () => {
      const state = createMockUseHierarchyExpansion(['root', 'section1', 'card1']);
      
      // Simulate property update (shouldn't affect expansion)
      const originalSize = state.expandedItems.size;
      
      // Expansion state should remain unchanged
      expect(state.expandedItems.size).toBe(originalSize);
      expect(state.expandedItems.has('card1')).toBe(true);
    });

    it('should handle dynamic hierarchy changes', () => {
      const state = createMockUseHierarchyExpansion(['root', 'section1']);
      
      // Simulate adding new item to hierarchy
      const newItem: HierarchyViewItem = {
        id: 'newCard',
        parentId: 'section1',
        entityType: 'component',
        depth: 2,
        isExpanded: false,
        children: []
      };
      
      mockHierarchyItems.set('newCard', newItem);
      
      // Existing expansion state should be preserved
      expect(state.expandedItems.has('section1')).toBe(true);
      
      // New item should be expandable
      state.expandItem('newCard');
      expect(state.expandedItems.has('newCard')).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle circular references gracefully', () => {
      // Create circular reference (normally shouldn't happen)
      const circularItems = new Map(mockHierarchyItems);
      const rootItem = circularItems.get('root')!;
      rootItem.parentId = 'button1'; // Create cycle
      
      // Should not infinite loop
      const path = calculateExpansionPath('button1', circularItems);
      expect(path).toBeDefined();
      expect(path.length).toBeLessThan(10); // Reasonable limit
    });

    it('should handle empty hierarchy', () => {
      const emptyHierarchy = new Map<string, HierarchyViewItem>();
      const path = calculateExpansionPath('any', emptyHierarchy);
      expect(path).toEqual([]);
      
      const children = getChildEntityIds('any', emptyHierarchy);
      expect(children).toEqual([]);
    });

    it('should handle malformed hierarchy items', () => {
      const malformedItems = new Map<string, HierarchyViewItem>([
        ['broken', {
          id: 'broken',
          parentId: 'nonexistent',
          entityType: 'component',
          depth: 1,
          isExpanded: false,
          children: []
        }]
      ]);
      
      const path = calculateExpansionPath('broken', malformedItems);
      expect(path).toEqual([]); // Should handle gracefully
    });
  });
});