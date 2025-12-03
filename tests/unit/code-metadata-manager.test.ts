/**
 * Unit tests for code-metadata-manager utility
 * Feature 003: Component Tracking and Code Export
 * Tests for metadata CRUD operations
 */

import { describe, it, expect } from 'vitest';
import {
  syncMetadata,
  getMetadata,
  removeMetadata,
  initializeMetadata,
  batchUpdateMetadata,
  hasMetadata,
  getAllMetadataKeys,
  clearAllMetadata,
} from '@/utils/code-metadata-manager';
import type { GlobalCodeMetadata, ComponentCodeMetadata } from '@/utils/types';

describe('Code Metadata Manager', () => {
  describe('initializeMetadata', () => {
    it('creates empty metadata with correct structure', () => {
      const metadata = initializeMetadata('div');
      
      expect(metadata).toHaveProperty('react-code');
      expect(metadata).toHaveProperty('styles');
      expect(metadata).toHaveProperty('element');
      expect(metadata.element).toBe('div');
      expect(metadata['react-code']).toBe('<div></div>');
      expect(metadata.styles).toBe('');
    });

    it('creates metadata for button element', () => {
      const metadata = initializeMetadata('button');
      
      expect(metadata.element).toBe('button');
      expect(metadata['react-code']).toBe('<button></button>');
    });

    it('creates metadata for custom elements', () => {
      const metadata = initializeMetadata('View');
      
      expect(metadata.element).toBe('View');
      expect(metadata['react-code']).toBe('<View></View>');
    });
  });

  describe('syncMetadata', () => {
    it('adds new metadata to empty global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {};
      const metadata: ComponentCodeMetadata = {
        'react-code': '<button>Click Me</button>',
        'styles': 'px-4 py-2 bg-blue-500',
        'element': 'button',
      };

      const result = syncMetadata(globalMetadata, 'component-1', metadata);

      expect(result['component-1']).toEqual(metadata);
      expect(Object.keys(result)).toHaveLength(1);
    });

    it('updates existing metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': {
          'react-code': '<button>Old</button>',
          'styles': 'px-2',
          'element': 'button',
        },
      };
      const newMetadata: ComponentCodeMetadata = {
        'react-code': '<button>New</button>',
        'styles': 'px-4',
        'element': 'button',
      };

      const result = syncMetadata(globalMetadata, 'component-1', newMetadata);

      expect(result['component-1']).toEqual(newMetadata);
    });

    it('does not mutate original global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };
      const metadata: ComponentCodeMetadata = {
        'react-code': '<button>New</button>',
        'styles': 'px-4',
        'element': 'button',
      };

      syncMetadata(globalMetadata, 'component-2', metadata);

      expect(globalMetadata['component-2']).toBeUndefined();
      expect(Object.keys(globalMetadata)).toHaveLength(1);
    });
  });

  describe('getMetadata', () => {
    it('retrieves existing metadata', () => {
      const metadata: ComponentCodeMetadata = {
        'react-code': '<div>Hello</div>',
        'styles': 'text-center',
        'element': 'div',
      };
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': metadata,
      };

      const result = getMetadata(globalMetadata, 'component-1');

      expect(result).toEqual(metadata);
    });

    it('returns null for non-existent entity', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };

      const result = getMetadata(globalMetadata, 'component-2');

      expect(result).toBeNull();
    });

    it('returns null for empty global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {};

      const result = getMetadata(globalMetadata, 'component-1');

      expect(result).toBeNull();
    });
  });

  describe('removeMetadata', () => {
    it('removes existing metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
        'component-2': initializeMetadata('button'),
      };

      const result = removeMetadata(globalMetadata, 'component-1');

      expect(result['component-1']).toBeUndefined();
      expect(result['component-2']).toBeDefined();
      expect(Object.keys(result)).toHaveLength(1);
    });

    it('does not mutate original global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
        'component-2': initializeMetadata('button'),
      };

      removeMetadata(globalMetadata, 'component-1');

      expect(globalMetadata['component-1']).toBeDefined();
      expect(Object.keys(globalMetadata)).toHaveLength(2);
    });

    it('handles removing non-existent entity gracefully', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };

      const result = removeMetadata(globalMetadata, 'component-2');

      expect(Object.keys(result)).toHaveLength(1);
      expect(result['component-1']).toBeDefined();
    });
  });

  describe('batchUpdateMetadata', () => {
    it('updates multiple entities at once', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };
      const updates = {
        'component-2': initializeMetadata('button'),
        'component-3': initializeMetadata('input'),
      };

      const result = batchUpdateMetadata(globalMetadata, updates);

      expect(Object.keys(result)).toHaveLength(3);
      expect(result['component-1']).toBeDefined();
      expect(result['component-2']).toBeDefined();
      expect(result['component-3']).toBeDefined();
    });

    it('overwrites existing metadata in batch', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': {
          'react-code': '<div>Old</div>',
          'styles': '',
          'element': 'div',
        },
      };
      const updates = {
        'component-1': {
          'react-code': '<div>New</div>',
          'styles': 'text-center',
          'element': 'div',
        },
      };

      const result = batchUpdateMetadata(globalMetadata, updates);

      expect(result['component-1']['react-code']).toBe('<div>New</div>');
      expect(result['component-1'].styles).toBe('text-center');
    });

    it('does not mutate original global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };
      const updates = {
        'component-2': initializeMetadata('button'),
      };

      batchUpdateMetadata(globalMetadata, updates);

      expect(Object.keys(globalMetadata)).toHaveLength(1);
    });
  });

  describe('hasMetadata', () => {
    it('returns true for existing metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };

      expect(hasMetadata(globalMetadata, 'component-1')).toBe(true);
    });

    it('returns false for non-existent metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
      };

      expect(hasMetadata(globalMetadata, 'component-2')).toBe(false);
    });

    it('returns false for empty global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {};

      expect(hasMetadata(globalMetadata, 'component-1')).toBe(false);
    });
  });

  describe('getAllMetadataKeys', () => {
    it('returns all entity IDs', () => {
      const globalMetadata: GlobalCodeMetadata = {
        'component-1': initializeMetadata('div'),
        'component-2': initializeMetadata('button'),
        'page-1': initializeMetadata('div'),
      };

      const keys = getAllMetadataKeys(globalMetadata);

      expect(keys).toHaveLength(3);
      expect(keys).toContain('component-1');
      expect(keys).toContain('component-2');
      expect(keys).toContain('page-1');
    });

    it('returns empty array for empty global metadata', () => {
      const globalMetadata: GlobalCodeMetadata = {};

      const keys = getAllMetadataKeys(globalMetadata);

      expect(keys).toHaveLength(0);
      expect(keys).toEqual([]);
    });
  });

  describe('clearAllMetadata', () => {
    it('returns empty object', () => {
      const result = clearAllMetadata();

      expect(result).toEqual({});
      expect(Object.keys(result)).toHaveLength(0);
    });
  });
});
