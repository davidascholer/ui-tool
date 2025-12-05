/**
 * ViewModeToggle Component
 * Allows switching between Builder, Live View, and Code view modes
 */

export type ViewMode = 'builder' | 'live' | 'code';

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
  return (
    <div className="flex border-b border-gray-200 bg-gray-50">
      <button
        type="button"
        onClick={() => onViewModeChange('builder')}
        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
          viewMode === 'builder'
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-4H5m8 12H5" />
          </svg>
          <span>Builder</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => onViewModeChange('live')}
        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
          viewMode === 'live'
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>Live View</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => onViewModeChange('code')}
        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
          viewMode === 'code'
            ? 'bg-white text-blue-600 border-b-2 border-blue-600'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
      >
        <span className="flex items-center justify-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>Code</span>
        </span>
      </button>
    </div>
  );
}
