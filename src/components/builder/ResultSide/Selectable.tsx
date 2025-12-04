/**
 * Selectable Component
 * Wraps entities with selection logic and blue glow feedback
 * Handles keyboard operability (focus/enter/delete)
 */

import { memo } from 'react';
import type { ReactNode } from 'react';
import type { EntityType, VisualIndicator } from '@/utils/types';
import { DeleteAction } from './DeleteAction';
import { ColorIndicator } from './PropertyIndicators/ColorIndicator';
import { TextIndicator } from './PropertyIndicators/TextIndicator';
import { LoadingIndicator } from './LoadingIndicator';
import { useLoadingIndicator } from '@/hooks/useLoadingIndicator';

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
  isEditing?: boolean;
  getLoadingState?: (entityId: string) => { isLoading: boolean; isSlowUpdate: boolean; } | null;
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
  isEditing = false,
  getLoadingState,
}: SelectableProps) {
  // Loading indicator state
  const loadingIndicator = getLoadingState ? useLoadingIndicator(entityId, getLoadingState) : null;
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(entityType, entityId);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
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
            : 'border-[rgb(var(--color-border))] hover:border-[rgb(var(--color-primary))]'
        }
        ${
          isEditing 
            ? 'bg-yellow-50 border-yellow-300 shadow-[0_0_0_2px_rgba(234,179,8,0.2)]'
            : ''
        }
        hover:shadow-md focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-[rgb(var(--color-primary))] focus-visible:ring-offset-2
        ${className}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `Select ${entityType}: ${entityId}`}
      aria-pressed={isSelected}
      data-entity-type={entityType}
      data-entity-id={entityId}
    >
      <div className="relative">
        {children}
        
        {/* Property indicators - Feature 004 */}
        {indicators.length > 0 && (
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
        )}
        
        {/* Editing indicator */}
        {isEditing && (
          <div className="absolute top-1 left-1">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm text-xs font-medium bg-yellow-200 text-yellow-800">
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