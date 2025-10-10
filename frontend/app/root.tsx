import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import AppLayout from './ui/AppLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '~/lib/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Button from './ui/Button';
import BackButton from './ui/BackButton';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;
  let status = 500;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || error.data || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <AppLayout>
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-7xl font-extrabold'>{status}</h1>
        <p>{details}</p>

        <Button to={'/'}>Go home</Button>
        <BackButton />
      </div>
    </AppLayout>
  );

  return (
    <AppLayout>
      <p>{details}</p>
      {stack && (
        <pre className='w-full overflow-x-auto p-4'>
          <code>{stack}</code>
        </pre>
      )}
    </AppLayout>
  );
}
