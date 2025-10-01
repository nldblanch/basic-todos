import { Link } from "react-router";
import Button from "./Button";

interface AppLayoutProps {
    children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="app-container">
            <header className="header grid grid-rows-2 grid-cols-3 items-center">
                <nav className="flex gap-6">
                    <p>Newsletter</p>
                    <p>About</p>
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
                            "Home",
                            "MUI",
                            "Search",
                            "Arts",
                            "Business",
                            "Health",
                            "Politics",
                            "Science",
                            "Sports",
                            "Tech",
                            "World"
                        ].map(topic => <li key={topic}>
                            <Link to={topic.toLowerCase() === 'home' ? '/' : `/${topic.toLowerCase()}`} className="hover:underline text-sm text-gray-500">
                                {topic}
                            </Link>
                        </li>)}


                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </div >
    );
}

export default AppLayout;