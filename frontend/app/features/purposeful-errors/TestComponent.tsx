import { use } from 'react';

// Simulate an async data fetch that resolves after a delay
function fetchData(delay: number = 2000): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data loaded successfully after ${delay}ms!`);
    }, delay);
  });
}

// Cache promises by key to prevent infinite suspense loops
const promiseCache = new Map<number, Promise<string>>();

export function TestComponent({
  refreshKey,
  shouldError,
}: {
  refreshKey: number;
  shouldError: boolean;
}) {
  // Throw an error if requested
  if (shouldError) {
    throw new Error('Intentional error to test ErrorBoundary!');
  }

  // Get or create a cached promise for this refreshKey
  if (!promiseCache.has(refreshKey)) {
    promiseCache.set(refreshKey, fetchData(2000));
  }

  // The 'use' hook will suspend the component until the promise resolves
  const data = use(promiseCache.get(refreshKey)!);

  return (
    <div className='h-36 rounded-lg border border-green-400 bg-green-100 p-6'>
      <h2 className='mb-2 text-2xl font-bold text-green-800'>Success!</h2>
      <p className='text-green-700'>{data}</p>
      <p className='mt-2 text-sm text-green-600'>
        This component was suspended and has now resolved. (Render #{refreshKey}
        )
      </p>
    </div>
  );
}
