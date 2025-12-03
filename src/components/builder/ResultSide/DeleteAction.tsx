/**
 * DeleteAction Component
 * Provides delete functionality with confirmation dialog
 * Supports keyboard shortcuts and accessibility
 */

import { useState } from 'react';
import type { EntityType } from '@/utils/types';

interface DeleteActionProps {
  entityType: EntityType;
  entityId: string;
  entityName?: string;
  onDelete?: (entityType: EntityType, entityId: string) => void;
  className?: string;
  size?: 'small' | 'medium';
  showIcon?: boolean;
  showText?: boolean;
}

export function DeleteAction({
  entityType,
  entityId,
  entityName,
  onDelete,
  className = '',
  size = 'small',
  showIcon = true,
  showText = false,
}: DeleteActionProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmation(true);
  };

  const handleConfirmDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(entityType, entityId);
    setShowConfirmation(false);
  };

  const handleCancelDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowConfirmation(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.stopPropagation();
      setShowConfirmation(true);
    } else if (e.key === 'Escape' && showConfirmation) {
      e.preventDefault();
      e.stopPropagation();
      setShowConfirmation(false);
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-6 h-6 text-xs';
      case 'medium':
        return 'w-8 h-8 text-sm';
      default:
        return 'w-6 h-6 text-xs';
    }
  };

  const getDisplayName = () => {
    return entityName || `${entityType} ${entityId.split('-').pop()}`;
  };

  if (showConfirmation) {
    return (
      <div 
        className={`
          fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50
          animate-in fade-in duration-200
        `}
        onClick={handleCancelDelete}
      >
        <div 
          className="bg-white rounded-lg shadow-xl p-6 max-w-sm mx-4 animate-in slide-in-from-bottom-2 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Delete {entityType}
              </h3>
              <p className="text-sm text-gray-500">
                This action cannot be undone
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-6">
            Are you sure you want to delete <strong>"{getDisplayName()}"</strong>?
            {entityType === 'Page' && ' All containers and components inside this page will also be deleted.'}
            {entityType === 'Container' && ' All components inside this container will also be deleted.'}
          </p>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handleCancelDelete}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleConfirmDelete}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleDeleteClick}
      onKeyDown={handleKeyDown}
      className={`
        ${getSizeClasses()}
        flex items-center justify-center rounded transition-colors
        text-gray-400 hover:text-red-500 hover:bg-red-50
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1
        ${className}
      `}
      aria-label={`Delete ${entityType}: ${getDisplayName()}`}
      title={`Delete ${entityType}`}
    >
      {showIcon && (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
          />
        </svg>
      )}
      {showText && (
        <span className="ml-1">Delete</span>
      )}
    </button>
  );
}

export default DeleteAction;