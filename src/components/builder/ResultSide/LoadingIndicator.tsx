/**
 * LoadingIndicator Component
 * Feature 004: Real-Time Hierarchy Updates - T018a
 * Provides visual feedback for hierarchy updates taking longer than 100ms
 */



export interface LoadingIndicatorProps {
  isLoading: boolean;
  isSlowUpdate: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Loading indicator for hierarchy items showing update status
 * Displays spinner for active updates and success indicator for slow updates
 */
export function LoadingIndicator({ 
  isLoading, 
  isSlowUpdate, 
  size = 'sm', 
  className = '' 
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5',
  };

  const baseClasses = `inline-flex items-center justify-center ${sizeClasses[size]} ${className}`;

  // Show loading spinner
  if (isLoading) {
    return (
      <div className={baseClasses} title="Updating...">
        <svg 
          className="animate-spin text-blue-500" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    );
  }

  // Show slow update indicator (completed but took > 100ms)
  if (isSlowUpdate) {
    return (
      <div className={baseClasses} title="Update completed (took longer than expected)">
        <svg 
          className="text-amber-500" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            fillRule="evenodd" 
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>
    );
  }

  // No indicator needed
  return null;
}

