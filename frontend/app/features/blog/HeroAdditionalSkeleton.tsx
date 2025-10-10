export default function HeroAdditionalSkeleton() {
  return (
    <section className='mt-8 space-y-16 md:space-y-10 md:px-4'>
      {/* Subscribe section skeleton */}
      <div className='space-y-4 bg-gray-100 p-8 max-lg:hidden'>
        <div className='h-8 w-48 animate-pulse rounded bg-gray-200'></div>
        <div className='h-4 w-full animate-pulse rounded bg-gray-200'></div>
        <div className='h-4 w-3/4 animate-pulse rounded bg-gray-200'></div>
        <div className='h-10 w-full animate-pulse rounded bg-gray-200'></div>
      </div>

      {/* Blog post cards skeleton */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className='h-32 animate-pulse rounded-lg bg-gray-200'
        ></div>
      ))}
    </section>
  );
}
