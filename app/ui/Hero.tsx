import { Link } from "react-router";
import Button from "./Button";

interface BlogPostDetail {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    author: string;
    tags: string[];
    readTime: number;
    img: string;
}

const blogPosts: BlogPostDetail[] = [{
    id: "1",
    title: "What High Inflation Could Say About Our Future",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Fabian Medhurst",
    tags: ["economics", "business", "culture"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/aditya-vyas-mHdATQY9fIU-unsplash.jpg'

},
{
    id: "2",
    title: "The Biggest Legislation Changes Over the Past Year",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Jaiden Quitzon",
    tags: ["world"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/history-in-hd-v_e3Hha4EBA-unsplash.jpg'

}, {
    id: "3",
    title: "9 New Tactics You Should Add to Your Marketing Website",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Austen Altenwerth",
    tags: ["arts"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/roman-kraft-_Zua2hyvTBk-unsplash.jpg'

}, {
    id: "4",
    title: "Conferences are Back in Business Globally",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Arden Huels",
    tags: ['Science'],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/headway-F2KRf_QfCqw-unsplash.jpg'

},
];
function Hero() {
    const [first, ...rest] = blogPosts
    const { img, title, content, publishedAt, author, tags, readTime } = first
    return (
        <div className="hero hero-container">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                <img src={img} className="object-cover h-full" />
                <div className="space-y-4">

                    <div className="flex gap-2 flex-wrap">
                        {tags.map(tag => {
                            return (
                                <>
                                    <Link className="text-blue-600" to={`/topics/${tag}`}>
                                        {tag
                                            .split(' ')
                                            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                            .join(' ')
                                        }
                                    </Link>
                                    <p>•</p>
                                </>
                            )
                        })}
                        <p>{author}</p>
                    </div>

                    <h1 className="text-3xl font-serif font-semibold">{title}</h1>
                    <p>{content}</p>
                </div>
            </section>

            <section className="mt-8 space-y-16 md:space-y-10 md:px-4">
                <div className="bg-gray-100 p-8 space-y-4  max-lg:hidden">
                    <h2 className="text-3xl font-serif font-medium">Stay informed</h2>
                    <p>Get the best journalism every day with plans starting at less than $2/week. Cancel anytime.</p>

                    <Button className="w-full">Subscribe</Button>
                </div>
                {rest.map(post => {
                    const { img, title, content, publishedAt, author, tags, readTime } = post
                    return <div className="card-container">
                        <div className="flex items-center justify-center md:hidden">
                            <img src={img} />
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                {tags.map(tag => {
                                    return (
                                        <>
                                            <Link className="text-blue-600 text-sm" to={`/topics/${tag}`}>
                                                {tag
                                                    .split(' ')
                                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                                    .join(' ')
                                                }
                                            </Link>
                                            <p className="text-sm">•</p>
                                        </>
                                    )
                                })}
                                <p className="text-sm">{author}</p>
                            </div>
                            <h2 className="text-xl font-serif font-medium">{title}</h2>
                        </div>
                        <div className="flex items-center justify-center p-4 max-md:hidden">
                            <img src={img} />
                        </div>
                    </div>
                })}
            </section>
        </div >
    );
}

export default Hero;