
function HeroSkeleton() {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Image skeleton */}
                <div className="bg-gray-200 animate-pulse rounded-lg w-full h-full min-h-64  xl:aspect-video sm:aspect-square aspect-video" style={{ minHeight: "16rem" }}></div>

                <div className="space-y-4">
                    {/* Tags skeleton */}
                    <div className="flex gap-2 flex-wrap">
                        <div className="bg-gray-200 animate-pulse h-4 w-16 rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-20 rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-12 rounded"></div>
                    </div>

                    {/* Title skeleton */}
                    <div className="space-y-2">
                        <div className="bg-gray-200 animate-pulse h-8 w-3/4 rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-8 w-1/2 rounded"></div>
                    </div>

                    {/* Content skeleton */}
                    <div className="space-y-2">
                        <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-3/4 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-gray-200 animate-pulse h-4 w-full rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-10/12 rounded"></div>
                        <div className="bg-gray-200 animate-pulse h-4 w-8/12 rounded"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSkeleton;