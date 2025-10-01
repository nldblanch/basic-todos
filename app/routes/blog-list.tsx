import type { Route } from "./+types/blog-list";
import { Link } from "react-router";

// Your code here... Define the type for blog posts
interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    author: string;
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Blog - Todo App" },
        { name: "description", content: "Read our latest blog posts about productivity and todo management" },
    ];
}

// Your code here... Implement the loader function for fetch-then-render
export async function loader({ }: Route.LoaderArgs) {
    // Your code here... Fetch blog posts from your data source
    // This could be from a database, API, or static files
    // Example structure:
    /*
    const blogPosts = await fetchBlogPosts();
    return { blogPosts };
    */

    // For now, return mock data
    const blogPosts: BlogPost[] = [
        {
            id: "1",
            title: "Your code here... Add blog post title",
            excerpt: "Your code here... Add blog post excerpt",
            publishedAt: "2024-01-01",
            author: "Your code here... Add author name"
        },
        {
            id: "2",
            title: "Your code here... Add another blog post title",
            excerpt: "Your code here... Add another blog post excerpt",
            publishedAt: "2024-01-02",
            author: "Your code here... Add author name"
        }
    ];

    return { blogPosts };
}

export default function BlogList() {
    // Your code here... Get the data from the loader
    // const { blogPosts } = useLoaderData<typeof loader>();

    // For now, using mock data
    const blogPosts: BlogPost[] = [
        {
            id: "1",
            title: "Your code here... Add blog post title",
            excerpt: "Your code here... Add blog post excerpt",
            publishedAt: "2024-01-01",
            author: "Your code here... Add author name"
        },
        {
            id: "2",
            title: "Your code here... Add another blog post title",
            excerpt: "Your code here... Add another blog post excerpt",
            publishedAt: "2024-01-02",
            author: "Your code here... Add author name"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

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

            <div className="space-y-6">
                {blogPosts.map((post) => (
                    <article key={post.id} className="border border-gray-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-2">
                            <Link
                                to={`/blog/${post.id}`}
                                className="text-blue-600 hover:underline"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-600 mb-3">{post.excerpt}</p>
                        <div className="text-sm text-gray-500">
                            <span>By {post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.publishedAt}</span>
                        </div>
                    </article>
                ))}

                {/* Your code here... Add pagination, search, or filtering functionality */}
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Your code here...</h3>
                    <p className="text-sm text-gray-500">
                        Your code here... Add pagination controls, search bar, or category filters
                    </p>
                </div>
            </div>
        </div>
    );
}
