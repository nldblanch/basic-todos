import type { Route } from "./+types/home";

import { Suspense } from "react";
import Banner from "~/features/blog/Banner";
import Hero from "~/features/blog/Hero";
import HeroSkeleton from "~/features/blog/HeroDetailSkeleton";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Todo App - Home" },
    { name: "description", content: "A simple todo application built with React Router v7" },
  ];
}



export default function Home() {
  return (
    <div className="h-full space-y-4">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Banner />
    </div >
  );
}
