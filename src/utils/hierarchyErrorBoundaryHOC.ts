import type { ReactNode, ErrorInfo } from 'react';
import HierarchyErrorBoundary from '../components/builder/ResultSide/HierarchyErrorBoundary';

/**
 * Higher-order component for wrapping components with hierarchy error boundary
 * 
 * @param Component - Component to wrap
 * @param options - Error boundary configuration
 * @returns Wrapped component with error boundary
 */
export function withHierarchyErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  options?: {
    fallback?: ReactNode;
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    maxRetries?: number;
  }
) {
  const WrappedComponent = (props: P) => (
    <HierarchyErrorBoundary {...options}>
      <Component {...props} />
    </HierarchyErrorBoundary>
  );
  
  WrappedComponent.displayName = `withHierarchyErrorBoundary(${Component.displayName || Component.name})`;
  
  return WrappedComponent;
}