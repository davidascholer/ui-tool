/**
 * Selectable Component
 * Wraps entities with selection logic and blue glow feedback
 * Handles keyboard operability (focus/enter/delete)
 */

import { memo } from 'react';
import type { ReactNode } from 'react';
import type { EntityType } from '@/utils/types';
import { DeleteAction } from './DeleteAction';

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
  size = 'medium'
}: SelectableProps) {
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
      {children}
      
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