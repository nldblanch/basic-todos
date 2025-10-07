import { Link, useLocation } from "react-router";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useDivCount } from "~/hooks/useDivCount";
import Header from "./Header";

interface AppLayoutProps {
    children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    // const metrics = useDivCount()
    // const { divCount, depth } = metrics
    return (
        <div className="app-container">
            <Header />
            <main className="content-container">
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