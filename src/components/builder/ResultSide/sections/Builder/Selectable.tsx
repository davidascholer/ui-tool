/**
 * Selectable Component
 * Wraps entities with selection logic and blue glow feedback
 * Handles keyboard operability (focus/enter/delete)
 */

import { memo, useState } from 'react';
import type { ReactNode } from 'react';
import type { EntityType, VisualIndicator, ComponentEntity } from '@/utils/types';
import { DeleteAction } from '../../DeleteAction';
import { ColorIndicator } from '../../PropertyIndicators/ColorIndicator';
import { TextIndicator } from '../../PropertyIndicators/TextIndicator';
import { LoadingIndicator } from '../../LoadingIndicator';
import { LazyIndicatorManager } from '../../PropertyIndicators/LazyIndicatorManager';
import { useLoadingIndicator } from '@/hooks/useLoadingIndicator';
import { useIndicatorPreload } from '@/utils/lazyIndicatorUtils';
import { useHierarchyItemKeyboard } from '@/hooks/useHierarchyKeyboardManager';

interface SelectableProps {
  entityType: EntityType;
  entityId: string;
  isSelected: boolean;
  onSelect: (entityType: EntityType, entityId: string) => void;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  size?: 'small' | 'medium' | 'large';
  // Feature 004: Real-Time Hierarchy Updates
  indicators?: VisualIndicator[];
  component?: ComponentEntity; // ComponentEntity for IndicatorManager
  tailwindClasses?: string; // Override classes for IndicatorManager
  isEditing?: boolean;
  getLoadingState?: (entityId: string) => { isLoading: boolean; isSlowUpdate: boolean; } | null;
  // Entity object for logging
  entity?: unknown;
}

export const Selectable = memo(function Selectable({
  entityType,
  entityId,
  isSelected,
  onSelect,
  onDelete,
  children,
  className = '',
  ariaLabel,
  size = 'medium',
  indicators = [],
  component,
  tailwindClasses,
  isEditing = false,
  getLoadingState,
  entity,
}: SelectableProps) {
  // Track hover state to prevent parent hover when child is hovered
  const [isHovered, setIsHovered] = useState(false);
  
  // Loading indicator state
  const loadingIndicator = useLoadingIndicator(entityId, getLoadingState || (() => null));
  
  // T048: Preload indicator components on user interaction
  const { preloadIndicators } = useIndicatorPreload();
  
  // T049: Enhanced keyboard navigation with accessibility
  const { handleKeyDown: handleKeyboardNav, getAriaAttributes } = useHierarchyItemKeyboard(
    entityType,
    entityId,
    {
      onSelect,
      onDelete
    }
  );
  
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Log the entity object when clicking on hierarchy items
    if (entity) {
      console.log(`🎯 Clicked on ${entityType}:`, entity);
    } else {
      console.log(`🎯 Clicked on ${entityType} (${entityId}) - entity data not available`);
    }
    
    onSelect(entityType, entityId);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    // Set hover state and stop propagation to parent Selectable components
    e.stopPropagation();
    setIsHovered(true);
    
    // Preload indicator components when user shows interest
    if (component || indicators.length > 0) {
      preloadIndicators();
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    // Clear hover state and stop propagation
    e.stopPropagation();
    setIsHovered(false);
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if we're hovering over a nested Selectable (child) or directly on this element
    const target = e.target as HTMLElement;
    const targetEntityId = target.closest('[data-entity-id]')?.getAttribute('data-entity-id');
    
    if (targetEntityId === entityId) {
      // We're hovering directly on this element (not a child)
      setIsHovered(true);
    } else if (targetEntityId && targetEntityId !== entityId) {
      // We're hovering over a child element
      setIsHovered(false);
      e.stopPropagation();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Use enhanced keyboard navigation
    const handled = handleKeyboardNav(e);
    
    // Fallback to original behavior if not handled
    if (!handled) {
      switch (e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          e.stopPropagation();
          onSelect(entityType, entityId);
          break;
        case 'Delete':
        case 'Backspace':
          if (onDelete) {
            e.preventDefault();
            e.stopPropagation();
            onDelete(entityType, entityId);
          }
          break;
      }
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'shadow-[0_0_0_2px_rgba(var(--color-selected),0.3)]';
      case 'medium':
        return 'shadow-[0_0_0_3px_rgba(var(--color-selected),0.3)]';
      case 'large':
        return 'shadow-[0_0_0_4px_rgba(var(--color-selected),0.4)]';
      default:
        return 'shadow-[0_0_0_3px_rgba(var(--color-selected),0.3)]';
    }
  };

  return (
    <div
      className={`
        relative rounded border-2 transition-all duration-200 cursor-pointer
        ${
          isSelected
            ? `border-[rgb(var(--color-selected))] ${getSizeClasses()}`
            : isHovered
            ? 'border-[rgb(var(--color-primary))]'
            : 'border-[rgb(var(--color-border))]'
        }
        ${
          isEditing 
            ? 'bg-blue-50 border-blue-400 shadow-[0_0_0_2px_rgba(59,130,246,0.3)] ring-1 ring-blue-200'
            : ''
        }
        ${isHovered ? 'shadow-md' : ''} focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      onKeyDown={handleKeyDown}
      {...getAriaAttributes(isSelected, false, false)}
      aria-label={ariaLabel || `Select ${entityType}: ${entityId}`}
      data-entity-type={entityType}
      data-entity-id={entityId}
    >
      <div className="relative">
        {children}
        
        {/* Property indicators - Feature 004 */}
        {component ? (
          <div className="flex items-center space-x-1 mt-1 px-2 pb-1">
            <LazyIndicatorManager
              component={component}
              classes={tailwindClasses}
              size={size === 'large' ? 'md' : 'sm'}
              maxIndicators={5}
            />
          </div>
        ) : indicators.length > 0 ? (
          <div className="flex items-center space-x-1 mt-1 px-2 pb-1">
            {indicators.map((indicator, index) => {
              if (indicator.type === 'color') {
                return (
                  <ColorIndicator
                    key={`${indicator.type}-${index}`}
                    indicator={indicator}
                  />
                );
              }
              if (indicator.type === 'text') {
                return (
                  <TextIndicator
                    key={`${indicator.type}-${index}`}
                    indicator={indicator}
                  />
                );
              }
              return null;
            })}
          </div>
        ) : null}
        
        {/* Editing indicator - T033: Enhanced editing state highlighting */}
        {isEditing && (
          <div className="absolute top-1 left-1 z-10">
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-sm text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Editing
            </span>
          </div>
        )}
        
        {/* Loading indicator for hierarchy updates */}
        {loadingIndicator?.shouldShow && (
          <div className="absolute top-1 right-12">
            <LoadingIndicator
              isLoading={loadingIndicator.isLoading}
              isSlowUpdate={loadingIndicator.isSlowUpdate}
              size="sm"
            />
          </div>
        )}
      </div>
      
      {/* Delete action - only show when selected */}
      {isSelected && onDelete && (
        <div className="absolute top-2 right-2">
          <DeleteAction
            entityType={entityType}
            entityId={entityId}
            onDelete={onDelete}
            size={size === 'large' ? 'medium' : 'small'}
          />
        </div>
      )}
    </div>
  );
});