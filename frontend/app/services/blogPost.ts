import type { BlogPostList } from "~/types";
import type { BlogPostDetail } from "~/types";

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const getBlogPosts = async (): Promise<BlogPostList[]> => {
    try {
        const response = await fetch(`${apiUrl}/blog-posts/`);
        console.log(response, ' <<<< response');
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }
        console.log(response.json(), ' <<<< response.json()');
        return response.json();
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
};

export const getBlogPost = async (id: BlogPostDetail['id']): Promise<BlogPostDetail> => {
    try {
        const response = await fetch(`${apiUrl}/blog-posts/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch blog post');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching blog post:', error);
        throw error;
    }
};