/**
 * Enhanced localStorage utilities for hierarchy expansion state persistence
 * Feature 004: Real-Time Hierarchy Updates - Phase 7 (T046)
 * Provides robust localStorage operations with error handling and data validation
 */



export interface ExpansionPreferences {
  /** Array of expanded item IDs */
  expandedItems: string[];
  /** Timestamp when preferences were last saved */
  lastSaved: number;
  /** Version for future migrations */
  version: number;
  /** User preferences for expansion behavior */
  settings: {
    /** Remember expansion state across sessions */
    rememberExpansion: boolean;
    /** Auto-expand when selecting items for editing */
    autoExpandOnEdit: boolean;
    /** Maximum number of expanded items to remember */
    maxRemembered: number;
  };
}

export interface StorageOptions {
  /** Storage key prefix */
  keyPrefix?: string;
  /** Enable compression for large datasets */
  compress?: boolean;
  /** Maximum age in milliseconds before data expires */
  maxAge?: number;
  /** Enable debug logging */
  debug?: boolean;
}

const DEFAULT_PREFERENCES: ExpansionPreferences = {
  expandedItems: [],
  lastSaved: Date.now(),
  version: 1,
  settings: {
    rememberExpansion: true,
    autoExpandOnEdit: true,
    maxRemembered: 100,
  },
};

const DEFAULT_OPTIONS: Required<StorageOptions> = {
  keyPrefix: 'hierarchy',
  compress: false,
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  debug: false,
};

/**
 * Enhanced localStorage manager for hierarchy expansion preferences
 */
export class HierarchyStorageManager {
  private options: Required<StorageOptions>;
  private cache: Map<string, ExpansionPreferences | { expandedItems: string[]; timestamp: number }> = new Map();

  constructor(options: StorageOptions = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
  }

  /**
   * Get the full storage key with prefix
   */
  private getKey(suffix: string): string {
    return `${this.options.keyPrefix}-${suffix}`;
  }

  /**
   * Log debug messages if debug mode is enabled
   */
  private log(message: string, data?: unknown): void {
    if (this.options.debug) {
      console.log(`[HierarchyStorage] ${message}`, data || '');
    }
  }

  /**
   * Check if localStorage is available
   */
  private isStorageAvailable(): boolean {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }

    try {
      const testKey = '__storage_test__';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Serialize data for storage (with optional compression)
   */
  private serialize(data: unknown): string {
    const serialized = JSON.stringify(data);
    
    if (this.options.compress && serialized.length > 1000) {
      // Simple compression for large datasets (base64 encoding)
      try {
        return btoa(serialized);
      } catch {
        // Fallback to uncompressed if compression fails
        return serialized;
      }
    }
    
    return serialized;
  }

  /**
   * Deserialize data from storage
   */
  private deserialize(data: string): unknown {
    try {
      // Try to decompress first (detect base64)
      if (this.options.compress && /^[A-Za-z0-9+/]*={0,2}$/.test(data)) {
        try {
          const decompressed = atob(data);
          return JSON.parse(decompressed);
        } catch {
          // Not compressed, parse as regular JSON
        }
      }
      
      return JSON.parse(data);
    } catch (error) {
      this.log('Failed to deserialize data:', error);
      return null;
    }
  }

  /**
   * Check if stored data has expired
   */
  private isExpired(timestamp: number): boolean {
    return Date.now() - timestamp > this.options.maxAge;
  }

  /**
   * Save expansion preferences to localStorage
   */
  saveExpansionPreferences(preferences: Partial<ExpansionPreferences>): boolean {
    if (!this.isStorageAvailable()) {
      this.log('localStorage not available');
      return false;
    }

    try {
      const key = this.getKey('expansion-preferences');
      const currentPrefs = this.loadExpansionPreferences();
      
      const updatedPrefs: ExpansionPreferences = {
        ...currentPrefs,
        ...preferences,
        lastSaved: Date.now(),
        version: currentPrefs.version || DEFAULT_PREFERENCES.version,
      };

      // Validate and limit expanded items
      if (updatedPrefs.expandedItems) {
        updatedPrefs.expandedItems = updatedPrefs.expandedItems
          .filter(id => typeof id === 'string' && id.length > 0)
          .slice(0, updatedPrefs.settings.maxRemembered);
      }

      const serialized = this.serialize(updatedPrefs);
      localStorage.setItem(key, serialized);
      
      // Update cache
      this.cache.set(key, updatedPrefs);
      
      this.log('Saved expansion preferences', {
        itemCount: updatedPrefs.expandedItems.length,
        settings: updatedPrefs.settings,
      });
      
      return true;
    } catch (error) {
      this.log('Failed to save expansion preferences:', error);
      return false;
    }
  }

  /**
   * Load expansion preferences from localStorage
   */
  loadExpansionPreferences(): ExpansionPreferences {
    if (!this.isStorageAvailable()) {
      this.log('localStorage not available, using defaults');
      return { ...DEFAULT_PREFERENCES };
    }

    try {
      const key = this.getKey('expansion-preferences');
      
      // Check cache first
      if (this.cache.has(key)) {
        const cached = this.cache.get(key) as ExpansionPreferences;
        if (cached && 'lastSaved' in cached && !this.isExpired(cached.lastSaved)) {
          this.log('Loaded from cache');
          return cached;
        }
      }

      const stored = localStorage.getItem(key);
      if (!stored) {
        this.log('No stored preferences found, using defaults');
        return { ...DEFAULT_PREFERENCES };
      }

      const preferences = this.deserialize(stored) as ExpansionPreferences | null;
      if (!preferences || !('lastSaved' in preferences) || this.isExpired(preferences.lastSaved)) {
        this.log('Stored preferences expired, using defaults');
        // Clean up expired data
        localStorage.removeItem(key);
        return { ...DEFAULT_PREFERENCES };
      }

      // Merge with defaults to handle version updates
      const mergedPrefs: ExpansionPreferences = {
        ...DEFAULT_PREFERENCES,
        ...preferences,
        settings: {
          ...DEFAULT_PREFERENCES.settings,
          ...(preferences.settings || {}),
        },
      };

      // Update cache
      this.cache.set(key, mergedPrefs);
      
      this.log('Loaded expansion preferences', {
        itemCount: mergedPrefs.expandedItems.length,
        age: Date.now() - mergedPrefs.lastSaved,
      });
      
      return mergedPrefs;
    } catch (error) {
      this.log('Failed to load expansion preferences:', error);
      return { ...DEFAULT_PREFERENCES };
    }
  }

  /**
   * Save quick expansion snapshot (for undo/redo functionality)
   */
  saveExpansionSnapshot(name: string, expandedItems: string[]): boolean {
    if (!this.isStorageAvailable()) return false;

    try {
      const key = this.getKey(`expansion-snapshot-${name}`);
      const snapshot = {
        expandedItems: expandedItems.slice(0, 50), // Limit snapshot size
        timestamp: Date.now(),
      };

      localStorage.setItem(key, this.serialize(snapshot));
      this.log(`Saved expansion snapshot: ${name}`, { itemCount: snapshot.expandedItems.length });
      return true;
    } catch (error) {
      this.log(`Failed to save expansion snapshot: ${name}`, error);
      return false;
    }
  }

  /**
   * Load expansion snapshot
   */
  loadExpansionSnapshot(name: string): string[] | null {
    if (!this.isStorageAvailable()) return null;

    try {
      const key = this.getKey(`expansion-snapshot-${name}`);
      const stored = localStorage.getItem(key);
      
      if (!stored) return null;

      const snapshot = this.deserialize(stored) as { expandedItems?: string[]; timestamp?: number } | null;
      if (!snapshot || !snapshot.timestamp || this.isExpired(snapshot.timestamp)) {
        localStorage.removeItem(key);
        return null;
      }

      this.log(`Loaded expansion snapshot: ${name}`, { itemCount: snapshot.expandedItems?.length || 0 });
      return snapshot.expandedItems || [];
    } catch (error) {
      this.log(`Failed to load expansion snapshot: ${name}`, error);
      return null;
    }
  }

  /**
   * Update user settings for expansion behavior
   */
  updateSettings(settings: Partial<ExpansionPreferences['settings']>): boolean {
    const currentPrefs = this.loadExpansionPreferences();
    return this.saveExpansionPreferences({
      settings: {
        ...currentPrefs.settings,
        ...settings,
      },
    });
  }

  /**
   * Clear all hierarchy storage data
   */
  clearAll(): boolean {
    if (!this.isStorageAvailable()) return false;

    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.options.keyPrefix)) {
          keys.push(key);
        }
      }

      keys.forEach(key => localStorage.removeItem(key));
      this.cache.clear();
      
      this.log(`Cleared ${keys.length} hierarchy storage items`);
      return true;
    } catch (error) {
      this.log('Failed to clear hierarchy storage:', error);
      return false;
    }
  }

  /**
   * Get storage usage statistics
   */
  getStorageStats(): {
    totalItems: number;
    totalSize: number;
    keys: string[];
  } {
    const stats = {
      totalItems: 0,
      totalSize: 0,
      keys: [] as string[],
    };

    if (!this.isStorageAvailable()) return stats;

    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(this.options.keyPrefix)) {
          const value = localStorage.getItem(key);
          if (value) {
            stats.totalItems++;
            stats.totalSize += value.length;
            stats.keys.push(key);
          }
        }
      }
    } catch (error) {
      this.log('Failed to get storage stats:', error);
    }

    return stats;
  }
}

// Default instance for easy import
export const hierarchyStorage = new HierarchyStorageManager({
  debug: import.meta.env.DEV,
});

// Utility functions for common operations
export const saveExpansionState = (expandedItems: string[]) => {
  return hierarchyStorage.saveExpansionPreferences({ expandedItems });
};

export const loadExpansionState = (): string[] => {
  return hierarchyStorage.loadExpansionPreferences().expandedItems;
};

export const updateExpansionSettings = (settings: Partial<ExpansionPreferences['settings']>) => {
  return hierarchyStorage.updateSettings(settings);
};

export default hierarchyStorage;