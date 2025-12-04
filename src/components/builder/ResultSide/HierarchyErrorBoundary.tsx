import { Component } from 'react';
import type { ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, RefreshCw, Bug } from 'lucide-react';

interface HierarchyErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

interface HierarchyErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  maxRetries?: number;
}

/**
 * Error boundary specifically designed for hierarchy components
 * Provides graceful error handling, recovery options, and detailed error reporting
 * 
 * Features:
 * - Automatic retry mechanism with configurable limits
 * - User-friendly fallback UI with recovery options
 * - Detailed error logging for debugging
 * - Structured error information capture
 * - Reset functionality for clearing error state
 */
export class HierarchyErrorBoundary extends Component<
  HierarchyErrorBoundaryProps,
  HierarchyErrorBoundaryState
> {
  private retryTimeoutId: number | null = null;

  constructor(props: HierarchyErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<HierarchyErrorBoundaryState> {
    // Update state to show fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Capture additional error information
    this.setState({
      errorInfo,
    });

    // Log error details for debugging
    this.logError(error, errorInfo);

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Attempt automatic recovery for certain error types
    this.attemptAutoRecovery(error);
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  private logError = (error: Error, errorInfo: ErrorInfo) => {
    const errorDetails = {
      timestamp: new Date().toISOString(),
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
      errorInfo: {
        componentStack: errorInfo.componentStack,
      },
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount,
    };

    // Console error for development
    console.error('HierarchyErrorBoundary caught an error:', errorDetails);

    // Send to analytics/monitoring service in production
    if (import.meta.env.PROD) {
      // TODO: Integrate with analytics service (e.g., Sentry, LogRocket)
      // analytics.captureException(error, { extra: errorDetails });
    }
  };

  private attemptAutoRecovery = (error: Error) => {
    const maxRetries = this.props.maxRetries || 3;
    
    // Only attempt auto-recovery for certain error types
    const recoverableErrors = [
      'ChunkLoadError',
      'Loading chunk',
      'Loading CSS chunk',
      'Network Error',
      'Failed to fetch',
    ];

    const isRecoverable = recoverableErrors.some(errorType => 
      error.message.includes(errorType) || error.name.includes(errorType)
    );

    if (isRecoverable && this.state.retryCount < maxRetries) {
      console.log(`Attempting auto-recovery (${this.state.retryCount + 1}/${maxRetries})...`);
      
      this.retryTimeoutId = setTimeout(() => {
        this.handleRetry();
      }, 1000 * Math.pow(2, this.state.retryCount)); // Exponential backoff
    }
  };

  private handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
    }));
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private renderError = () => {
    const { error, errorInfo } = this.state;
    const maxRetries = this.props.maxRetries || 3;
    const canRetry = this.state.retryCount < maxRetries;

    return (
      <div className="flex flex-col items-center justify-center p-6 bg-red-50 border border-red-200 rounded-lg min-h-[200px]">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h3 className="text-lg font-semibold text-red-800">
            Hierarchy View Error
          </h3>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-red-700 mb-2">
            Something went wrong while displaying the hierarchy.
          </p>
          <p className="text-sm text-red-600">
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>

        <div className="flex gap-3">
          {canRetry && (
            <button
              onClick={this.handleRetry}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Retry ({maxRetries - this.state.retryCount} left)
            </button>
          )}
          
          <button
            onClick={this.handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Reset View
          </button>
          
          <button
            onClick={this.handleReload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>

        {import.meta.env.DEV && error && (
          <details className="mt-6 w-full">
            <summary className="cursor-pointer flex items-center gap-2 text-sm text-red-700 hover:text-red-800">
              <Bug className="w-4 h-4" />
              Debug Information
            </summary>
            <div className="mt-3 p-3 bg-red-100 rounded border text-xs font-mono overflow-auto max-h-40">
              <div className="mb-2">
                <strong>Error:</strong> {error.message}
              </div>
              {error.stack && (
                <div className="mb-2">
                  <strong>Stack:</strong>
                  <pre className="whitespace-pre-wrap text-xs">{error.stack}</pre>
                </div>
              )}
              {errorInfo?.componentStack && (
                <div>
                  <strong>Component Stack:</strong>
                  <pre className="whitespace-pre-wrap text-xs">{errorInfo.componentStack}</pre>
                </div>
              )}
            </div>
          </details>
        )}
      </div>
    );
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI takes precedence
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      // Default error UI
      return this.renderError();
    }

    return this.props.children;
  }
}

export default HierarchyErrorBoundary;