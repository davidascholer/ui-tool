/**
 * CodeView - Placeholder for future code export functionality
 */

interface CodeViewProps {
  pages: unknown[];
  className?: string;
}

export function CodeView({ className = "" }: CodeViewProps) {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Code Export</span>
          <span className="text-xs text-gray-500">(Coming Soon)</span>
        </div>
      </div>

      {/* Placeholder content */}
      <div className="flex-1 flex items-start justify-center p-8 bg-gray-50">
        <div className="text-center max-w-md">
          <svg
            className="mx-auto h-12 w-12 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Code Export Coming Soon
          </h3>
          <p className="text-sm text-gray-600">
            Code generation for React and React Native will be implemented in a future update.
          </p>
        </div>
      </div>
    </div>
  );
}
