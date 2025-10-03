import { useSuspenseQuery } from "@tanstack/react-query"
import { getBlogPosts } from "~/services/blogPost"

export const useBlogPosts = () => {
    const { data: blogPosts } = useSuspenseQuery({
        queryKey: ['blogPosts'],
        queryFn: getBlogPosts
    })
    return blogPosts.slice(0, 10)
}