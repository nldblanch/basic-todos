import { useSuspenseQuery } from "@tanstack/react-query"
import { getBlogPost } from "~/services/blogPost"

export const useBlogPost = (id: number) => {
    const { data: detailedPost } = useSuspenseQuery({
        queryKey: ['blogPosts', id],
        queryFn: () => getBlogPost(id)
    })
    return detailedPost
}