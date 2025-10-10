import type { Route } from './+types/purposeful-errors';

import { Suspense, useState } from 'react';
import { isRouteErrorResponse, Link } from 'react-router';
import {
  TestComponent,
  Fallback,
  ButtonGroup,
  Explanation,
} from '../features/purposeful-errors';
import { ErrorBoundary as ReactErrorBoundary } from '../ui/ErrorBoundary';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Purposeful Errors' },
    {
      name: 'description',
      content: 'A simple todo application built with React Router v7',
    },
  ];
}

// Loader - handles routing errors (Response objects)
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const status = url.searchParams.get('loaderError');

  if (status && ['401', '403', '500', '503'].includes(status)) {
    const errors: Record<string, string> = {
      '401': 'Not authenticated',
      '403': 'Access denied',
      '500': 'Internal server error',
      '503': 'Service temporarily unavailable',
    };

    // This will be caught by the route's ErrorBoundary export
    throw new Response(errors[status], { status: parseInt(status, 10) });
  }

  return null; // No error, continue rendering
}

export default function PurposefulErrors() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [shouldError, setShouldError] = useState(false);

  // Component error - caught by React ErrorBoundary
  if (shouldError) {
    throw new Error('Component error for testing!');
  }
  return (
    <div className='space-y-12 p-8'>
      <h1 className='text-3xl font-bold'>Suspense & ErrorBoundary Example</h1>

      <Explanation />
      <section className='space-y-4'>
        <ButtonGroup
          onReload={() => {
            setShouldError(false);
            setRefreshKey((prev) => prev + 1);
          }}
          onTriggerError={() => setShouldError(true)}
        />

        <ReactErrorBoundary
          key={`${refreshKey}-${shouldError}`}
          fallback={<Fallback type='error' />}
        >
          <Suspense key={refreshKey} fallback={<Fallback type='suspense' />}>
            <TestComponent refreshKey={refreshKey} shouldError={shouldError} />
          </Suspense>
        </ReactErrorBoundary>

        <Suspense key={refreshKey} fallback={<Fallback type='suspense' />}>
          <TestComponent refreshKey={refreshKey} shouldError={false} />
        </Suspense>
      </section>
    </div>
  );
}
