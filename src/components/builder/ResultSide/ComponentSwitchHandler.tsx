/**
 * Component Switch Handler
 * Feature 004: Real-Time Hierarchy Updates - User Story 4 (T044)
 * Handles rapid component switching with proper cleanup and cancellation
 */

import { useEffect, useRef, useCallback } from 'react';
import type { ComponentEntity } from '../../../utils/types';

export interface ComponentSwitchHandlerProps {
  currentComponent: ComponentEntity | null;
  onComponentSwitch: (oldId: string, newId: string) => void;
  onCleanup: (componentId: string) => void;
  debounceMs?: number;
}

export function useComponentSwitchHandler({
  currentComponent,
  onComponentSwitch,
  onCleanup,
  debounceMs = 100
}: ComponentSwitchHandlerProps) {
  const previousComponentRef = useRef<ComponentEntity | null>(null);
  const switchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cleanupTimeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  
  // Handle component switching with debouncing
  const handleSwitch = useCallback((newComponent: ComponentEntity | null) => {
    const previousComponent = previousComponentRef.current;
    
    // Clear any pending switch timeout
    if (switchTimeoutRef.current) {
      clearTimeout(switchTimeoutRef.current);
    }
    
    // If switching from one component to another
    if (previousComponent && newComponent && previousComponent.id !== newComponent.id) {
      // Debounce the switch to avoid rapid switching issues
      switchTimeoutRef.current = setTimeout(() => {
        onComponentSwitch(previousComponent.id, newComponent.id);
        
        // Schedule cleanup for the old component
        const cleanupTimeout = setTimeout(() => {
          onCleanup(previousComponent.id);
          cleanupTimeoutsRef.current.delete(previousComponent.id);
        }, debounceMs * 2); // Cleanup after double the switch debounce
        
        cleanupTimeoutsRef.current.set(previousComponent.id, cleanupTimeout);
      }, debounceMs);
    }
    // If switching from component to null (deselection)
    else if (previousComponent && !newComponent) {
      switchTimeoutRef.current = setTimeout(() => {
        onCleanup(previousComponent.id);
      }, debounceMs);
    }
    
    previousComponentRef.current = newComponent;
  }, [onComponentSwitch, onCleanup, debounceMs]);
  
  // Effect to handle component changes
  useEffect(() => {
    handleSwitch(currentComponent);
  }, [currentComponent, handleSwitch]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clear switch timeout
      if (switchTimeoutRef.current) {
        clearTimeout(switchTimeoutRef.current);
      }
      
      // Clear all cleanup timeouts
      cleanupTimeoutsRef.current.forEach(timeout => {
        clearTimeout(timeout);
      });
      cleanupTimeoutsRef.current.clear();
      
      // Final cleanup for current component
      if (previousComponentRef.current) {
        onCleanup(previousComponentRef.current.id);
      }
    };
  }, [onCleanup]);
  
  // Manual cleanup function for specific components
  const forceCleanup = useCallback((componentId: string) => {
    const existingTimeout = cleanupTimeoutsRef.current.get(componentId);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
      cleanupTimeoutsRef.current.delete(componentId);
    }
    onCleanup(componentId);
  }, [onCleanup]);
  
  // Get pending cleanup components
  const getPendingCleanups = useCallback(() => {
    return Array.from(cleanupTimeoutsRef.current.keys());
  }, []);
  
  return {
    forceCleanup,
    getPendingCleanups,
    isHandlingSwitches: switchTimeoutRef.current !== null
  };
}

// Component wrapper for the hook
export function ComponentSwitchHandler({ children, ...props }: 
  ComponentSwitchHandlerProps & { children: React.ReactNode }) {
  useComponentSwitchHandler(props);
  return <>{children}</>;
}