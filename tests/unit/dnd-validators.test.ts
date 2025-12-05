/**
 * Tests for DnD validators and hierarchy rules
 */

import { describe, it, expect } from 'vitest';
import {
  validatePage,
  validateContainer,
  validateComponent,
  validateHierarchyPlacement,
  validatePageHierarchy,
  canDeleteEntity,
  isValidDrop,
} from '@/utils/validators';
import { createDragItem, validateDrop } from '@/utils/dnd';

describe('Hierarchy Validation', () => {
  it('validates page structure', () => {
    const validPage = {
      id: 'page-1',
      name: 'Home',
      uitType: 'UITPage',
      children: [],
    };

    expect(validatePage(validPage).valid).toBe(true);
  });

  it('rejects invalid page structure', () => {
    const invalidPage = {
      id: 'page-1',
      // Missing required 'name' field
      children: [],
    };

    expect(validatePage(invalidPage).valid).toBe(false);
  });

  it('validates container structure', () => {
    const validContainer = {
      id: 'container-1',
      name: 'Hero Section',
          uitType: 'UITContainer',
      uitType: 'UITPage',
      tailwindClassList: [],
      children: [],
    };

    expect(validateContainer(validContainer).valid).toBe(true);
  });

  it('validates component structure', () => {
    const validComponent = {
      id: 'component-1',
      type: 'Button',
              uitType: 'UITButton',
      props: {},
      tailwindClassList: [],
    };

    expect(validateComponent(validComponent).valid).toBe(true);
  });
});

describe('Hierarchy Placement Rules', () => {
  it('allows page at root level', () => {
    const dragItem = createDragItem('page');
    expect(validateHierarchyPlacement(dragItem, 'root')).toBe(true);
  });

  it('rejects page inside page', () => {
    const dragItem = createDragItem('page');
    expect(validateHierarchyPlacement(dragItem, 'Page')).toBe(false);
  });

  it('allows container inside page', () => {
    const dragItem = createDragItem('container');
    expect(validateHierarchyPlacement(dragItem, 'Page')).toBe(true);
  });

  it('rejects container at root', () => {
    const dragItem = createDragItem('container');
    expect(validateHierarchyPlacement(dragItem, 'root')).toBe(false);
  });

  it('rejects container inside container', () => {
    const dragItem = createDragItem('container');
    expect(validateHierarchyPlacement(dragItem, 'Container')).toBe(false);
  });

  it('allows component inside container', () => {
    const dragItem = createDragItem('component', 'Button');
    expect(validateHierarchyPlacement(dragItem, 'Container')).toBe(true);
  });

  it('rejects component at root', () => {
    const dragItem = createDragItem('component', 'Button');
    expect(validateHierarchyPlacement(dragItem, 'root')).toBe(false);
  });

  it('rejects component inside page', () => {
    const dragItem = createDragItem('component', 'Button');
    expect(validateHierarchyPlacement(dragItem, 'Page')).toBe(false);
  });
});

describe('DnD Validation', () => {
  it('validates drop for page at root', () => {
    const dragItem = createDragItem('page');
    const result = validateDrop(dragItem, 'root');
    expect(result.valid).toBe(true);
  });

  it('rejects drop for container at root', () => {
    const dragItem = createDragItem('container');
    const result = validateDrop(dragItem, 'root');
    expect(result.valid).toBe(false);
    expect(result.reason).toContain('inside Pages');
  });

  it('validates drop for container in page', () => {
    const dragItem = createDragItem('container');
    const result = validateDrop(dragItem, 'Page');
    expect(result.valid).toBe(true);
  });

  it('validates drop for component in container', () => {
    const dragItem = createDragItem('component', 'Button');
    const result = validateDrop(dragItem, 'Container');
    expect(result.valid).toBe(true);
  });

  it('rejects drop for component in page', () => {
    const dragItem = createDragItem('component', 'Button');
    const result = validateDrop(dragItem, 'Page');
    expect(result.valid).toBe(false);
    expect(result.reason).toContain('inside Containers');
  });
});

describe('Page Hierarchy Validation', () => {
  it('validates complete valid hierarchy', () => {
    const page = {
      id: 'page-1',
      name: 'Home',
      uitType: 'UITPage',
      children: [
        {
          id: 'container-1',
          name: 'Hero',
          uitType: 'UITContainer',
          tailwindClassList: [],
          children: [
            {
              id: 'component-1',
              type: 'Button' as const,
              uitType: 'UITButton',
              props: {},
              tailwindClassList: [],
            },
          ],
        },
      ],
    };

    const result = validatePageHierarchy(page);
    expect(result.valid).toBe(true);
  });

  it('detects invalid component in hierarchy', () => {
    const page = {
      id: 'page-1',
      name: 'Home',
      uitType: 'UITPage',
      children: [
        {
          id: 'container-1',
          name: 'Hero',
          uitType: 'UITContainer',
          tailwindClassList: [],
          children: [
            {
              id: 'component-1',
              type: 'InvalidType', // Invalid component type
              uitType: 'UITInvalidType',
              props: {},
              tailwindClassList: [],
            },
          ],
        },
      ],
    };

    const result = validatePageHierarchy(page);
    expect(result.valid).toBe(false);
    expect(result.errors).toBeDefined();
  });
});

describe('Entity Deletion', () => {
  it('prevents deletion of last page', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home',
      uitType: 'UITPage',
        children: [],
      },
    ];

    const result = canDeleteEntity('Page', 'page-1', pages);
    expect(result.canDelete).toBe(false);
    expect(result.reason).toContain('last page');
  });

  it('allows deletion when multiple pages exist', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home',
      uitType: 'UITPage',
        children: [],
      },
      {
        id: 'page-2',
        name: 'About',
      uitType: 'UITPage',
        children: [],
      },
    ];

    const result = canDeleteEntity('Page', 'page-1', pages);
    expect(result.canDelete).toBe(true);
  });

  it('allows container deletion', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home',
      uitType: 'UITPage',
        children: [],
      },
    ];

    const result = canDeleteEntity('Container', 'container-1', pages);
    expect(result.canDelete).toBe(true);
  });

  it('allows component deletion', () => {
    const pages = [
      {
        id: 'page-1',
        name: 'Home',
      uitType: 'UITPage',
        children: [],
      },
    ];

    const result = canDeleteEntity('Component', 'component-1', pages);
    expect(result.canDelete).toBe(true);
  });
});

describe('Valid Drop Check', () => {
  it('validates page drop at root', () => {
    const dragItem = createDragItem('page');
    expect(isValidDrop(dragItem, 'root')).toBe(true);
  });

  it('validates container drop in page', () => {
    const dragItem = createDragItem('container');
    expect(isValidDrop(dragItem, 'Page')).toBe(true);
  });

  it('validates component drop in container', () => {
    const dragItem = createDragItem('component', 'Button');
    expect(isValidDrop(dragItem, 'Container')).toBe(true);
  });

  it('rejects invalid drops', () => {
    const dragItem = createDragItem('component', 'Button');
    expect(isValidDrop(dragItem, 'Page')).toBe(false);
    expect(isValidDrop(dragItem, 'root')).toBe(false);
  });
});
