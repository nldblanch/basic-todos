import { Suspense } from "react";
import HeroDetailSkeleton from "./HeroDetailSkeleton";
import DetailedPostSection from "./DetailedPostSection";
import AdditionalPostsSection from "./AdditionalPostsSections";
import HeroAdditionalSkeleton from "./HeroAdditionalSkeleton";

export default function Hero() {
    return (
        <div className="hero hero-container">
            <Suspense fallback={<HeroDetailSkeleton />}>
                <DetailedPostSection />
            </Suspense>

            <Suspense fallback={<HeroAdditionalSkeleton />}>
                <AdditionalPostsSection />
            </Suspense>
        </div>
    );
}