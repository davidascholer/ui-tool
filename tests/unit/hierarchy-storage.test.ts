import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { HierarchyStorageManager, saveExpansionState, loadExpansionState } from '../../src/utils/hierarchyStorage';

// Mock localStorage
const mockStorage = new Map<string, string>();

const localStorageMock = {
  getItem: vi.fn((key: string) => mockStorage.get(key) || null),
  setItem: vi.fn((key: string, value: string) => {
    mockStorage.set(key, value);
  }),
  removeItem: vi.fn((key: string) => {
    mockStorage.delete(key);
  }),
  clear: vi.fn(() => {
    mockStorage.clear();
  }),
  get length() {
    return mockStorage.size;
  },
  key: vi.fn((index: number) => {
    const keys = Array.from(mockStorage.keys());
    return keys[index] || null;
  }),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

describe('HierarchyStorageManager', () => {
  let storageManager: HierarchyStorageManager;

  beforeEach(() => {
    mockStorage.clear();
    vi.clearAllMocks();
    storageManager = new HierarchyStorageManager({ debug: false });
    // Clear any existing cache
    storageManager.clearAll();
  });

  afterEach(() => {
    mockStorage.clear();
  });

  describe('Basic Operations', () => {
    it('should save and load expansion preferences', () => {
      const expandedItems = ['item1', 'item2', 'item3'];
      
      const saved = storageManager.saveExpansionPreferences({ expandedItems });
      expect(saved).toBe(true);

      const loaded = storageManager.loadExpansionPreferences();
      expect(loaded.expandedItems).toEqual(expandedItems);
      expect(loaded.settings.rememberExpansion).toBe(true);
    });

    it('should return default preferences when no data exists', () => {
      const loaded = storageManager.loadExpansionPreferences();
      
      expect(loaded.expandedItems).toEqual([]);
      expect(loaded.settings.rememberExpansion).toBe(true);
      expect(loaded.settings.autoExpandOnEdit).toBe(true);
      expect(loaded.settings.maxRemembered).toBe(100);
      expect(loaded.version).toBe(1);
    });

    it('should update settings', () => {
      const updated = storageManager.updateSettings({
        rememberExpansion: false,
        maxRemembered: 50,
      });
      
      expect(updated).toBe(true);
      
      const loaded = storageManager.loadExpansionPreferences();
      expect(loaded.settings.rememberExpansion).toBe(false);
      expect(loaded.settings.maxRemembered).toBe(50);
      expect(loaded.settings.autoExpandOnEdit).toBe(true); // Should keep existing
    });
  });

  describe('Data Validation', () => {
    it('should filter out invalid expanded items', () => {
      const mixedItems = ['valid1', '', 'valid2', 123 as unknown, null as unknown, 'valid3'] as string[];
      
      storageManager.saveExpansionPreferences({ expandedItems: mixedItems });
      const loaded = storageManager.loadExpansionPreferences();
      
      expect(loaded.expandedItems).toEqual(['valid1', 'valid2', 'valid3']);
    });

    it('should limit expanded items to maxRemembered setting', () => {
      storageManager.updateSettings({ maxRemembered: 3 });
      
      const manyItems = ['item1', 'item2', 'item3', 'item4', 'item5'];
      storageManager.saveExpansionPreferences({ expandedItems: manyItems });
      
      const loaded = storageManager.loadExpansionPreferences();
      expect(loaded.expandedItems).toHaveLength(3);
      expect(loaded.expandedItems).toEqual(['item1', 'item2', 'item3']);
    });
  });

  describe('Snapshot Functionality', () => {
    it('should save and load expansion snapshots', () => {
      const snapshotItems = ['snap1', 'snap2'];
      
      const saved = storageManager.saveExpansionSnapshot('test-snapshot', snapshotItems);
      expect(saved).toBe(true);
      
      const loaded = storageManager.loadExpansionSnapshot('test-snapshot');
      expect(loaded).toEqual(snapshotItems);
    });

    it('should return null for non-existent snapshots', () => {
      const loaded = storageManager.loadExpansionSnapshot('non-existent');
      expect(loaded).toBeNull();
    });

    it('should limit snapshot size to 50 items', () => {
      const manyItems = Array.from({ length: 100 }, (_, i) => `item${i}`);
      
      storageManager.saveExpansionSnapshot('large-snapshot', manyItems);
      const loaded = storageManager.loadExpansionSnapshot('large-snapshot');
      
      expect(loaded).toHaveLength(50);
    });
  });

  describe('Storage Management', () => {
    it('should clear all hierarchy storage data', () => {
      // Add some data
      storageManager.saveExpansionPreferences({ expandedItems: ['test'] });
      storageManager.saveExpansionSnapshot('test', ['snap']);
      
      expect(mockStorage.size).toBeGreaterThan(0);
      
      const cleared = storageManager.clearAll();
      expect(cleared).toBe(true);
      expect(mockStorage.size).toBe(0);
    });

    it('should get storage statistics', () => {
      storageManager.saveExpansionPreferences({ expandedItems: ['test1', 'test2'] });
      storageManager.saveExpansionSnapshot('test', ['snap1']);
      
      const stats = storageManager.getStorageStats();
      
      expect(stats.totalItems).toBe(2);
      expect(stats.totalSize).toBeGreaterThan(0);
      expect(stats.keys).toHaveLength(2);
      expect(stats.keys.every(key => key.startsWith('hierarchy-'))).toBe(true);
    });
  });

  describe('Error Handling', () => {
    it('should handle localStorage errors gracefully', () => {
      // Mock localStorage to throw error
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = vi.fn(() => {
        throw new Error('Storage quota exceeded');
      });

      const saved = storageManager.saveExpansionPreferences({ expandedItems: ['test'] });
      expect(saved).toBe(false);

      // Restore
      localStorage.setItem = originalSetItem;
    });

    it('should handle corrupted data gracefully', () => {
      // Manually add corrupted data
      mockStorage.set('hierarchy-expansion-preferences', 'invalid json');
      
      const loaded = storageManager.loadExpansionPreferences();
      expect(loaded).toEqual(expect.objectContaining({
        expandedItems: [],
        version: 1,
      }));
    });
  });

  describe('Utility Functions', () => {
    beforeEach(() => {
      // Clear localStorage completely for utility function tests
      mockStorage.clear();
    });

    it('should save expansion state using utility function', () => {
      const items = ['util1', 'util2'];
      
      const saved = saveExpansionState(items);
      expect(saved).toBe(true);
      
      const loaded = loadExpansionState();
      expect(loaded).toEqual(items);
    });

    it('should load previously saved expansion state', () => {
      // First save some data  
      saveExpansionState(['test1', 'test2']);
      
      // Then load it back
      const loaded = loadExpansionState();
      expect(loaded).toEqual(['test1', 'test2']);
    });
  });

  describe('Caching', () => {
    it('should use cache for repeated loads', () => {
      const items = ['cache1', 'cache2'];
      storageManager.saveExpansionPreferences({ expandedItems: items });
      
      // First load - should read from localStorage
      const loaded1 = storageManager.loadExpansionPreferences();
      expect(localStorageMock.getItem).toHaveBeenCalled();
      
      // Reset mock
      vi.clearAllMocks();
      
      // Second load - should use cache
      const loaded2 = storageManager.loadExpansionPreferences();
      expect(localStorageMock.getItem).not.toHaveBeenCalled();
      
      expect(loaded1.expandedItems).toEqual(loaded2.expandedItems);
    });
  });

  describe('Expiration', () => {
    it('should handle expired data', () => {
      // Create storage manager with very short max age
      const shortLivedManager = new HierarchyStorageManager({ maxAge: 1 }); // 1ms
      
      shortLivedManager.saveExpansionPreferences({ expandedItems: ['expired'] });
      
      // Wait for expiration
      return new Promise(resolve => {
        setTimeout(() => {
          const loaded = shortLivedManager.loadExpansionPreferences();
          expect(loaded.expandedItems).toEqual([]); // Should return defaults
          resolve(undefined);
        }, 10);
      });
    });
  });
});