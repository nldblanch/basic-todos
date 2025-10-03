import { useBlogPosts } from "~/features/blog/useBlogPosts";
import type { Route } from "./+types/blog-list";
import { Link, useLoaderData } from "react-router";
import { Suspense } from "react";
import BlogPostCard from "~/features/blog/BlogPostCard";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Blog - Todo App" },
        { name: "description", content: "Read our latest blog posts about productivity and todo management" },
    ];
}

const BlogPosts = () => {
    const blogPosts = useBlogPosts()
    return (
        <div className="space-y-8">{blogPosts.map((post) => {
            return <BlogPostCard key={post.id} post={post} />
        })}</div>
    )

}

export default function BlogList() {

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Posts</h1>

            <Suspense fallback={<div>Loading...</div>}>
                <BlogPosts />
            </Suspense>

        </div>
    );
}
