/**
 * DropZone Component
 * Handles drop events with visual feedback (green/red glow)
 */

import { useState } from 'react';
import type { EntityType } from '@/utils/types';
import { getDragData, validateDrop, getDropZoneClasses } from '@/utils/dnd';

interface DropZoneProps {
  targetType: EntityType | 'root';
  targetId?: string;
  onDrop?: (targetId: string | undefined, targetType: EntityType | 'root') => void;
  children: React.ReactNode;
  className?: string;
  emptyMessage?: string;
}

export function DropZone({
  targetType,
  targetId,
  onDrop,
  children,
  className = '',
  emptyMessage,
}: DropZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const dragItem = getDragData(event);
    if (!dragItem) return;

    const validation = validateDrop(dragItem, targetType);
    setIsValid(validation.valid);
    setIsDragOver(true);

    if (validation.valid) {
      event.dataTransfer.dropEffect = 'copy';
    } else {
      event.dataTransfer.dropEffect = 'none';
    }
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragOver(false);

    const dragItem = getDragData(event);
    if (!dragItem) return;

    const validation = validateDrop(dragItem, targetType);
    if (!validation.valid) return;

    onDrop?.(targetId, targetType);
  };

  const dropZoneClasses = getDropZoneClasses(
    isDragOver,
    isValid,
    className
  );

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={dropZoneClasses}
      data-drop-zone="true"
      data-target-type={targetType}
      data-valid={isDragOver && isValid}
    >
      {children || (
        <div className="flex min-h-[100px] items-center justify-center rounded border-2 border-dashed border-[rgb(var(--color-border))] p-8 text-center">
          <p className="text-sm text-[rgb(var(--color-muted-foreground))]">
            {emptyMessage || 'Drop here'}
          </p>
        </div>
      )}
    </div>
  );
}
