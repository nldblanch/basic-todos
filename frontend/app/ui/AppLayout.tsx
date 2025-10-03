import { Link, useLocation } from "react-router";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDivCount } from "~/hooks/useDivCount";

interface AppLayoutProps {
    children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    // const metrics = useDivCount()
    // const { divCount, depth } = metrics
    return (
        <div className="app-container">
            <header className="header grid grid-rows-2 grid-cols-3 items-center">
                <nav className="flex gap-6">
                    <Link to='/'>Home</Link>
                    <Link to='/blog'>Blog</Link>
                    {/* <p>Divs: {divCount}</p>
                    <p>Depth: {depth}</p> */}
                </nav>
                <h1 className="text-4xl font-serif font-semibold text-center">News<span className="italic">Today</span></h1>
                <div className="ml-auto">
                    <button className="pl-4 py-3">
                        <p className="text-xl">🔍</p>
                    </button>

                    <Button variant="secondary">Log in</Button>
                    <Button>Subscribe</Button>
                </div>

                <nav className="mb-8 col-span-3 border-t border-gray-200 p-2">
                    <ul className="flex gap-4 items-center justify-center">

                        {[
                            "Tailwind CSS",
                            "MUI",
                        ].map(topic => <li key={topic}>
                            <Link to={topic.toLowerCase() === 'tailwind css' ? '/' : `/${topic.toLowerCase()}`} className="hover:underline text-sm text-gray-500">
                                {topic}
                            </Link>
                        </li>)}


                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            {/* <footer className="text-center text-sm text-gray-500">
                <p>Page rendered in {metrics.renderTime}ms</p>
                <p>Total elements: {metrics.totalElements}</p>
                <p>Average children per element: {metrics.avgChildren}</p>
                <p>DOM size: {metrics.domSize}</p>
            </footer> */}
        </div >
    );
}

export default AppLayout;