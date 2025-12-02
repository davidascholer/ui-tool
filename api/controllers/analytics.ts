/**
 * Analytics Controller
 * Provides typed functions for tracking user events
 * Uses the 'analytics' package from package.json (analytics@0.8.19)
 */

import Analytics from 'analytics';

// Analytics event types
export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
}

export interface PageViewEvent {
  path: string;
  title?: string;
  referrer?: string;
}

export interface ComponentEvent {
  action: 'drag' | 'drop' | 'select' | 'edit' | 'delete' | 'copy';
  componentType?: string;
  targetType?: string;
  entityId?: string;
}

export interface CodeExportEvent {
  format: 'react' | 'react-native';
  componentCount: number;
  pageCount: number;
}

// Initialize analytics instance (privacy-conscious)
let analyticsInstance: ReturnType<typeof Analytics> | null = null;

/**
 * Initialize analytics with configuration
 * Should be called once at app startup
 */
export function initializeAnalytics(config?: {
  debug?: boolean;
  enabled?: boolean;
}): void {
  if (analyticsInstance) {
    console.warn('Analytics already initialized');
    return;
  }

  analyticsInstance = Analytics({
    app: 'ui-builder',
    version: '1.0.0',
    debug: config?.debug ?? false,
    plugins: [
      // Plugins would be configured here
      // For now, using analytics package without external plugins
    ],
  });

  // Respect Do Not Track
  if (navigator.doNotTrack === '1') {
    console.info('Analytics disabled: Do Not Track enabled');
    analyticsInstance = null;
  }
}

/**
 * Track a custom analytics event
 */
export async function trackEvent(event: AnalyticsEvent): Promise<void> {
  if (!analyticsInstance) {
    if (import.meta.env.DEV) {
      console.log('[Analytics] Event:', event);
    }
    return;
  }

  try {
    await analyticsInstance.track(event.name, event.properties);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}

/**
 * Track a page view
 */
export async function trackPageView(event: PageViewEvent): Promise<void> {
  if (!analyticsInstance) {
    if (import.meta.env.DEV) {
      console.log('[Analytics] Page view:', event);
    }
    return;
  }

  try {
    await analyticsInstance.page({
      path: event.path,
      title: event.title,
      referrer: event.referrer,
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
}

/**
 * Track component interaction events
 */
export async function trackComponentEvent(event: ComponentEvent): Promise<void> {
  return trackEvent({
    name: `component_${event.action}`,
    properties: {
      componentType: event.componentType,
      targetType: event.targetType,
      entityId: event.entityId,
      timestamp: Date.now(),
    },
  });
}

/**
 * Track code export events
 */
export async function trackCodeExport(event: CodeExportEvent): Promise<void> {
  return trackEvent({
    name: 'code_export',
    properties: {
      format: event.format,
      componentCount: event.componentCount,
      pageCount: event.pageCount,
      timestamp: Date.now(),
    },
  });
}

/**
 * Identify user (optional, privacy-conscious)
 */
export async function identifyUser(userId: string, traits?: Record<string, unknown>): Promise<void> {
  if (!analyticsInstance) {
    if (import.meta.env.DEV) {
      console.log('[Analytics] Identify:', userId, traits);
    }
    return;
  }

  try {
    await analyticsInstance.identify(userId, traits);
  } catch (error) {
    console.error('Failed to identify user:', error);
  }
}

/**
 * Reset analytics state (e.g., on logout)
 */
export function resetAnalytics(): void {
  if (!analyticsInstance) {
    return;
  }

  try {
    analyticsInstance.reset();
  } catch (error) {
    console.error('Failed to reset analytics:', error);
  }
}
