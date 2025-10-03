import { Link } from "react-router";
import { useBlogPost } from "./useBlogPost";
import { useBlogPosts } from "./useBlogPosts";

function DetailedPostSection() {
    const [first] = useBlogPosts();
    const detailedPost = useBlogPost(first.id);
    const { img, tags, author, title, content } = detailedPost;

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            <img src={img} className="object-cover h-full xl:aspect-video sm:aspect-square aspect-video" />
            <div className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                    {tags.split(',').map((tag, i) => {
                        return (
                            <span key={tag + i} className="flex gap-2 items-center">
                                <Link className="text-blue-600" to={`/topics/${tag}`}>
                                    {tag
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                        .join(' ')
                                    }
                                </Link>
                                <p>•</p>
                            </span>
                        )
                    })}
                    <p>{author}</p>
                </div>
                <h1 className="text-3xl font-serif font-semibold">{title}</h1>
                <p>{content}</p>
            </div>
        </section>
    );
}

export default DetailedPostSection