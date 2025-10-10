import { Link } from 'react-router';
import { useBlogPost } from './useBlogPost';
import { useBlogPosts } from './useBlogPosts';
import Button from '~/ui/Button';

function DetailedPostSection() {
  const [first] = useBlogPosts();
  const detailedPost = useBlogPost(first.id);
  const { img, tags, author, title, summary } = detailedPost;
  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1'>
      <img
        src={img}
        className='aspect-video h-full object-cover sm:aspect-square xl:aspect-video'
      />
      <div className='space-y-4'>
        <div className='flex flex-wrap gap-2'>
          {tags.split(',').map((tag, i) => {
            return (
              <span key={tag + i} className='flex items-center gap-2'>
                <Link className='text-blue-600' to={`/topics/${tag}`}>
                  {tag
                    .split(' ')
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase(),
                    )
                    .join(' ')}
                </Link>
                <p>•</p>
              </span>
            );
          })}
          <p>{author}</p>
        </div>
        <h1 className='font-serif text-3xl font-semibold'>{title}</h1>
        <p
          className='text-gray-500'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {summary}
        </p>
        <Button variant='secondary' to={`/blog/${detailedPost.id}`}>
          Read more
        </Button>
      </div>
    </section>
  );
}

export default DetailedPostSection;
