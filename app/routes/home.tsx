import Hero from "~/ui/Hero";
import type { Route } from "./+types/home";
import Button from "~/ui/Button";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Todo App - Home" },
    { name: "description", content: "A simple todo application built with React Router v7" },
  ];
}



export default function Home() {

  return (
    <div className="h-full space-y-4">
      <Hero />
      <div className="bg-banner-yellow grid grid-cols-[auto_1fr]">
        <div className="space-y-4 p-8">
          <h1 className="text-4xl font-serif font-medium">Subscribe and enjoy unlimited digital access</h1>
          <p>Get the best jorunalism every day with plans starting at less than $2/week. <span className="italic">Cancel anytime.</span></p>
          <Button>Subscribe</Button>
        </div>
        <div className="col-start-3 flex items-end justify-end pr-8">
          <img src='/ufo.png' />
        </div>
      </div>
    </div >
  );
}
