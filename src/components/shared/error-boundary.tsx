"use client";

import { Component, ErrorInfo } from "react";
import type { PropsWithChildren, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps extends PropsWithChildren {
  /** Custom fallback UI. Receives the caught error. */
  fallback?: (error: Error) => ReactNode;
  /** Called when an error is caught — useful for logging to Sentry etc. */
  onError?: (error: Error, info: ErrorInfo) => void;
}

const DefaultFallback = ({ error }: { error: Error }) => (
  <div
    role="alert"
    className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-lg border border-red-200 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-950"
  >
    <p className="text-sm font-semibold text-red-700 dark:text-red-300">
      Something went wrong
    </p>
    <p className="text-xs text-red-500 dark:text-red-400">{error.message}</p>
  </div>
);

/**
 * Catches render-time errors in the component subtree.
 *
 * @example
 * <ErrorBoundary fallback={(e) => <MyErrorUI error={e} />}>
 *   <FeatureComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback ? (
        this.props.fallback(this.state.error)
      ) : (
        <DefaultFallback error={this.state.error} />
      );
    }
    return this.props.children;
  }
}
