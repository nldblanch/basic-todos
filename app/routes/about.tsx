import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About - Todo App" },
        { name: "description", content: "Learn more about our todo application" },
    ];
}

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">About This Todo App</h1>

            <nav className="mb-8">
                <ul className="flex gap-4">
                    <li>
                        <Link to="/" className="text-blue-600 hover:underline">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-blue-600 hover:underline">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="text-blue-600 hover:underline">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="prose max-w-2xl">
                <h2 className="text-xl font-semibold mb-4">Your code here...</h2>
                <p className="text-gray-600 mb-4">
                    Your code here... Add information about the todo app, its features,
                    and how it was built with React Router v7
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Features</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        <li>Your code here... List key features of your todo app</li>
                        <li>Your code here... Add more features</li>
                        <li>Your code here... Include technical details</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
