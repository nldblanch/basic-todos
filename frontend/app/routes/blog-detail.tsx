import type { Route } from './+types/blog-detail';
import { Link } from 'react-router';
import { useBlogPost } from '~/features/blog/useBlogPost';
import { useEffect } from 'react';
import { formatIsoDate, getValidImageSrc } from '~/lib/utils';

export function meta() {
  return [
    { title: `Todo App` },
    { name: 'description', content: `Read our blog post` },
  ];
}

export default function BlogDetail({ params }: Route.ComponentProps) {
  const blogPost = useBlogPost(Number(params.id));
  const src = getValidImageSrc(blogPost.img);

  useEffect(() => {
    document.title = blogPost.title;
    const el = document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', blogPost.summary);
  }, [blogPost.title, blogPost.summary]);

  return (
    <div className='container mx-auto px-4'>
      <article className='max-w-4xl'>
        <header className='mb-8'>
          <h1 className='mb-4 text-3xl font-bold'>{blogPost.title}</h1>
          <img src={src} />
          <div className='mb-4 flex items-center gap-4 text-sm text-gray-600'>
            <span>By {blogPost.author}</span>
            <span>•</span>
            <span>{formatIsoDate(blogPost.publishedAt)}</span>
            <span>•</span>
            <span>{blogPost.readTime} min read</span>
          </div>

          <div className='mb-6 flex gap-2'>
            {blogPost.tags.split(',').map((tag) => (
              <span
                key={tag}
                className='rounded bg-gray-100 px-2 py-1 text-xs text-gray-700'
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className='prose max-w-none'>
          <div className='space-y-4 whitespace-pre-wrap'>
            {blogPost.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        <footer className='mt-12 border-t border-gray-200 pt-8'>
          <div className='flex items-center justify-between'>
            <Link to='/blog' className='text-blue-600 hover:underline'>
              ← Back to Blog
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
}
