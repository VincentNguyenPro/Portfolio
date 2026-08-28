import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const CHUNK_LOAD_ERROR_PATTERN = /dynamically imported module|importing a module script failed|loading chunk/i;
const CHUNK_RELOAD_KEY = 'chunk-load-reload-attempted';

function isChunkLoadError(error?: Error): boolean {
  return !!error && CHUNK_LOAD_ERROR_PATTERN.test(error.message);
}

/**
 * Error Boundary component to catch and handle React errors gracefully
 * Provides a user-friendly error message and recovery option
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }

    if (isChunkLoadError(error) && !sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
      sessionStorage.setItem(CHUNK_RELOAD_KEY, '1');
      window.location.reload();
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (isChunkLoadError(this.state.error) && !sessionStorage.getItem(CHUNK_RELOAD_KEY)) {
        return <div className="min-h-screen" />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-destructive/10">
                <AlertCircle className="size-12 text-destructive" />
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl font-light tracking-wide">
                Something went wrong
              </h1>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                We encountered an unexpected error. Don't worry, your data is safe.
              </p>
            </div>

            <Button
              onClick={this.handleReset}
              className="w-full md:w-auto px-8 py-6 text-base font-light tracking-wide"
            >
              Return to Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
