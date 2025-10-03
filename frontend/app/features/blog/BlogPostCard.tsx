import { Link } from "react-router"
import type { BlogPostList } from "~/types"

interface BlogPostCardProps {
    post: BlogPostList
}
function BlogPostCard({ post }: BlogPostCardProps) {
    const { img, tags, author, title } = post
    return <div className="card-container">
        <div className="flex items-center justify-center md:hidden">
            <img src={img} />
        </div>
        <div className="space-y-2">
            <div className="flex gap-2 flex-wrap">
                {tags.split(',').map((tag, i) => (
                    <span key={tag + i} className="flex gap-2 items-center">
                        <Link className="text-blue-600 text-sm" to={`/topics/${tag}`}>
                            {tag
                                .split(' ')
                                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                .join(' ')
                            }
                        </Link>
                        <p className="text-sm">•</p>
                    </span>
                ))}
                <p className="text-sm">{author}</p>
            </div>
            <h2 className="text-xl font-serif font-medium">{title}</h2>
        </div>
        <div className="flex items-center justify-center p-4 max-md:hidden">
            <img src={img} />
        </div>
    </div>
}

export default BlogPostCard