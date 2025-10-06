import type { Route } from "./+types/blog-detail";
import { Link } from "react-router";
import { useBlogPost } from "~/features/blog/useBlogPost";
import { useEffect } from "react";
import { formatIsoDate, getValidImageSrc } from "~/lib/utils";


export function meta() {
    return [
        { title: `Todo App` },
        { name: "description", content: `Read our blog post` },
    ];
}

export default function BlogDetail({ params }: Route.ComponentProps) {

    const blogPost = useBlogPost(Number(params.id))
    const src = getValidImageSrc(blogPost.img)

    useEffect(() => {
        document.title = blogPost.title
        const el = document.querySelector('meta[name="description"]')?.setAttribute('content', blogPost.summary)
    }, [blogPost.title, blogPost.summary])

    return (
        <div className="container mx-auto px-4">


            <article className="max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
                    <img src={src} />
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>By {blogPost.author}</span>
                        <span>•</span>
                        <span>{formatIsoDate(blogPost.publishedAt)}</span>
                        <span>•</span>
                        <span>{blogPost.readTime} min read</span>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {blogPost.tags.split(',').map((tag) => (
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
                    <div className="whitespace-pre-wrap space-y-4">
                        {blogPost.content.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
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


                    </div>
                </footer>
            </article>
        </div>
    );
}
