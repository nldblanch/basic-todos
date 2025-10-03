export default function HeroAdditionalSkeleton() {

    return <section className="mt-8 space-y-16 md:space-y-10 md:px-4">
        {/* Subscribe section skeleton */}
        <div className="bg-gray-100 p-8 space-y-4 max-lg:hidden">
            <div className="bg-gray-200 animate-pulse h-8 w-48 rounded"></div>
            <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
            <div className="bg-gray-200 animate-pulse h-4 w-3/4 rounded"></div>
            <div className="bg-gray-200 animate-pulse h-10 w-full rounded"></div>
        </div>

        {/* Blog post cards skeleton */}
        {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-200 animate-pulse h-32 rounded-lg"></div>
        ))}
    </section>
}