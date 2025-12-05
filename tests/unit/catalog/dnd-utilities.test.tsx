/**
 * Unit tests for drag and drop utilities
 */

import { describe, it, expect, vi } from 'vitest';
import { createDragItem, setDragData, getDragData } from '@/utils/dnd';

describe('Drag and Drop Utilities', () => {
  describe('createDragItem', () => {
    it('creates drag item for page', () => {
      const dragItem = createDragItem('page');
      
      expect(dragItem).toEqual({
        type: 'page',
              uitType: 'UITpage',
        id: expect.any(String)
      });
      expect(dragItem.id).toMatch(/^page-\d+$/);
    });

    it('creates drag item for container', () => {
      const dragItem = createDragItem('container');
      
      expect(dragItem).toEqual({
        type: 'container',
              uitType: 'UITcontainer',
        id: expect.any(String)
      });
      expect(dragItem.id).toMatch(/^container-\d+$/);
    });

    it('creates drag item for component with type', () => {
      const dragItem = createDragItem('component', 'Button');
      
      expect(dragItem).toEqual({
        type: 'component',
              uitType: 'UITcomponent',
        componentType: 'Button',
        id: expect.any(String)
      });
      expect(dragItem.id).toMatch(/^component-\d+$/);
    });

    it('creates unique IDs for multiple items', () => {
      const item1 = createDragItem('page');
      const item2 = createDragItem('page');
      
      expect(item1.id).not.toBe(item2.id);
    });

    it('includes component type for component items', () => {
      const buttonItem = createDragItem('component', 'Button');
      const inputItem = createDragItem('component', 'Input');
      
      expect(buttonItem.componentType).toBe('Button');
      expect(inputItem.componentType).toBe('Input');
    });
  });

  describe('setDragData and getDragData', () => {
    it('sets and gets drag data correctly', () => {
      const mockDataTransfer = {
        setData: vi.fn(),
        getData: vi.fn()
      };
      
      const dragItem = createDragItem('component', 'Button');
      const mockEvent = {
        dataTransfer: mockDataTransfer
      } as any;
      
      setDragData(mockEvent, dragItem);
      
      expect(mockDataTransfer.setData).toHaveBeenCalledWith(
        'application/json',
        JSON.stringify(dragItem)
      );
    });

    it('handles drag data retrieval', () => {
      const dragItem = createDragItem('component', 'Input');
      const mockDataTransfer = {
        getData: vi.fn().mockReturnValue(JSON.stringify(dragItem))
      };
      
      const mockEvent = {
        dataTransfer: mockDataTransfer
      } as any;
      
      const result = getDragData(mockEvent);
      
      expect(mockDataTransfer.getData).toHaveBeenCalledWith('application/json');
      expect(result).toEqual(dragItem);
    });

    it('handles invalid drag data gracefully', () => {
      const mockDataTransfer = {
        getData: vi.fn().mockReturnValue('invalid-json')
      };
      
      const mockEvent = {
        dataTransfer: mockDataTransfer
      } as any;
      
      const result = getDragData(mockEvent);
      
      expect(result).toBeNull();
    });

    it('handles empty drag data', () => {
      const mockDataTransfer = {
        getData: vi.fn().mockReturnValue('')
      };
      
      const mockEvent = {
        dataTransfer: mockDataTransfer
      } as any;
      
      const result = getDragData(mockEvent);
      
      expect(result).toBeNull();
    });
  });

  describe('Drag Item Validation', () => {
    it('validates page drag items', () => {
      const pageItem = createDragItem('page');
      
      expect(pageItem.type).toBe('page');
      expect(pageItem).not.toHaveProperty('componentType');
    });

    it('validates container drag items', () => {
      const containerItem = createDragItem('container');
      
      expect(containerItem.type).toBe('container');
      expect(containerItem).not.toHaveProperty('componentType');
    });

    it('validates component drag items', () => {
      const componentTypes = ['Button', 'Input', 'Card', 'Text', 'Image', 'List'] as const;
      
      componentTypes.forEach(type => {
        const componentItem = createDragItem('component', type);
        
        expect(componentItem.type).toBe('component');
        expect(componentItem.componentType).toBe(type);
      });
    });
  });

  describe('Performance and Memory', () => {
    it('generates IDs efficiently', () => {
      const start = performance.now();
      
      // Generate many items to test performance
      for (let i = 0; i < 1000; i++) {
        createDragItem('component', 'Button');
      }
      
      const end = performance.now();
      expect(end - start).toBeLessThan(100); // Should complete in less than 100ms
    });

    it('handles JSON serialization of complex data', () => {
      const dragItem = createDragItem('component', 'Card');
      const serialized = JSON.stringify(dragItem);
      const deserialized = JSON.parse(serialized);
      
      expect(deserialized).toEqual(dragItem);
    });
  });
});