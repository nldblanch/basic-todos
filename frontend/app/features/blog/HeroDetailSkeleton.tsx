function HeroSkeleton() {
  return (
    <>
      <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1'>
        {/* Image skeleton */}
        <div
          className='aspect-video h-full min-h-64 w-full animate-pulse rounded-lg bg-gray-200 sm:aspect-square xl:aspect-video'
          style={{ minHeight: '16rem' }}
        ></div>

        <div className='space-y-4'>
          {/* Tags skeleton */}
          <div className='flex flex-wrap gap-2'>
            <div className='h-4 w-16 animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-20 animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-12 animate-pulse rounded bg-gray-200'></div>
          </div>

          {/* Title skeleton */}
          <div className='space-y-2'>
            <div className='h-8 w-3/4 animate-pulse rounded bg-gray-200'></div>
            <div className='h-8 w-1/2 animate-pulse rounded bg-gray-200'></div>
          </div>

          {/* Content skeleton */}
          <div className='space-y-2'>
            <div className='h-4 w-full animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-full animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-3/4 animate-pulse rounded bg-gray-200'></div>
          </div>
          <div className='space-y-2'>
            <div className='h-4 w-full animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-10/12 animate-pulse rounded bg-gray-200'></div>
            <div className='h-4 w-8/12 animate-pulse rounded bg-gray-200'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSkeleton;
