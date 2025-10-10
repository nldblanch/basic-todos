import Button from '~/ui/Button';
import BlogPostCard from './BlogPostCard';
import { useBlogPosts } from './useBlogPosts';

function AdditionalPostsSection() {
  const [, ...rest] = useBlogPosts();

  return (
    <section className='mt-8 space-y-16 md:space-y-10 md:px-4'>
      <div className='space-y-4 bg-gray-100 p-8 max-lg:hidden'>
        <h2 className='font-serif text-3xl font-medium'>Stay informed</h2>
        <p>
          Get the best journalism every day with plans starting at less than
          $2/week. Cancel anytime.
        </p>
        <Button className='w-full'>Subscribe</Button>
      </div>
      {rest.slice(0, 3).map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}

export default AdditionalPostsSection;
