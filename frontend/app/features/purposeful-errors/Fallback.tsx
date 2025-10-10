export function Fallback({ type }: { type: 'suspense' | 'error' }) {
  if (type === 'error') {
    return (
      <div className='h-36 rounded-lg border border-red-400 bg-red-100 p-6'>
        <div className='mb-2 flex items-center'>
          <span className='mr-2 text-2xl text-red-600'>⚠️</span>
          <h2 className='text-xl font-bold text-red-800'>
            Something went wrong
          </h2>
        </div>
        <p className='text-red-700'>
          An error occurred while loading the component.
        </p>
        <p className='mt-2 text-sm text-red-600'>
          Please try reloading or contact support if the problem persists.
        </p>
      </div>
    );
  }

  return (
    <div className='h-36 rounded-lg border border-blue-400 bg-blue-100 p-6'>
      <div className='animate-pulse space-y-2'>
        <div className='h-4 w-4/5 rounded bg-blue-300'></div>
        <div className='h-4 w-3/5 rounded bg-blue-300'></div>
        <div className='h-4 w-2/5 rounded bg-blue-300'></div>
      </div>
      <p className='mt-2 text-blue-700'>Loading component...</p>
    </div>
  );
}
