import type { BlogPostDetail } from "~/types";
import type { Route } from "./+types/blog-detail";
import { Link } from "react-router";


export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `${data?.blogPost?.title || "Blog Post"} - Todo App` },
        { name: "description", content: data?.blogPost?.content || "Read our blog post" },
    ];
}



export default function BlogDetail() {

    // For now, using mock data
    const blogPost: BlogPostDetail = {
        id: "1",
        title: "Your code here... Add blog post title",
        content: "Your code here... Add the full blog post content here. This is where you'll implement the main content of your blog post with proper formatting, paragraphs, and any rich text content.",
        publishedAt: "2024-01-01",
        author: "Your code here... Add author name",
        tags: ["productivity", "todos", "organization"],
        readTime: 5,
        img: "https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/aditya-vyas-mHdATQY9fIU-unsplash.jpg"
    };

    return (
        <div className="container mx-auto px-4 py-8">
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

            <article className="max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>By {blogPost.author}</span>
                        <span>•</span>
                        <span>{blogPost.publishedAt}</span>
                        <span>•</span>
                        <span>{blogPost.readTime} min read</span>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {blogPost.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose max-w-none">
                    <div className="whitespace-pre-wrap">
                        {blogPost.content}
                    </div>

                    {/* Your code here... Add rich text content, images, code blocks, etc. */}
                    <div className="bg-gray-50 p-4 rounded-lg mt-8">
                        <h3 className="font-medium mb-2">Your code here...</h3>
                        <p className="text-sm text-gray-500">
                            Your code here... Add rich text formatting, markdown support,
                            or any other content features you want
                        </p>
                    </div>
                </div>

                <footer className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                        <Link
                            to="/blog"
                            className="text-blue-600 hover:underline"
                        >
                            ← Back to Blog
                        </Link>

                        {/* Your code here... Add social sharing, related posts, etc. */}
                        <div className="text-sm text-gray-500">
                            Your code here... Add social sharing buttons, related posts,
                            or other footer content
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}
