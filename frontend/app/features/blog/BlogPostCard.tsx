import { Link } from 'react-router';
import type { BlogPostList } from '~/types';

interface BlogPostCardProps {
  post: BlogPostList;
}
function BlogPostCard({ post }: BlogPostCardProps) {
  const { img, tags, author, title } = post;

  const src = img.length > 0 ? img : 'https://placehold.net/800x600.png';
  return (
    <Link
      to={`/blog/${post.id}`}
      className='card-container transition-all duration-300 hover:bg-zinc-50'
    >
      <div className='flex items-center justify-center md:hidden'>
        <img src={src} />
      </div>
      <div className='space-y-2 pl-4'>
        <div className='flex flex-wrap gap-2'>
          {tags.split(',').map((tag, i) => (
            <span key={tag + i} className='flex items-center gap-2'>
              <Link className='text-sm text-blue-600' to={`/topics/${tag}`}>
                {tag
                  .split(' ')
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() +
                      word.slice(1).toLowerCase(),
                  )
                  .join(' ')}
              </Link>
              <p className='text-sm'>•</p>
            </span>
          ))}
          <p className='text-sm'>{author}</p>
        </div>
        <h2 className='font-serif text-xl font-medium'>{title}</h2>
      </div>
      <div className='flex items-center justify-center p-4 max-md:hidden'>
        <img src={src} />
      </div>
    </Link>
  );
}

export default BlogPostCard;
