/**
 * useLoadingIndicator Hook
 * Feature 004: Real-Time Hierarchy Updates - T018a
 * Manages loading indicator state for hierarchy items
 */

/**
 * Hook for managing loading indicator state
 */
export function useLoadingIndicator(
  entityId: string, 
  getLoadingState: (id: string) => { isLoading: boolean; isSlowUpdate: boolean; } | null
) {
  const loadingState = getLoadingState(entityId);
  
  return {
    isLoading: loadingState?.isLoading ?? false,
    isSlowUpdate: loadingState?.isSlowUpdate ?? false,
    shouldShow: Boolean(loadingState?.isLoading || loadingState?.isSlowUpdate),
  };
}