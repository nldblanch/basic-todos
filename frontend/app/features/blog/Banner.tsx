import Button from '~/ui/Button';

function Banner() {
  return (
    <div className='bg-banner-yellow grid grid-cols-[auto_1fr]'>
      <div className='space-y-4 p-8'>
        <h1 className='font-serif text-4xl font-medium'>
          Subscribe and enjoy unlimited digital access
        </h1>
        <p>
          Get the best jorunalism every day with plans starting at less than
          $2/week. <span className='italic'>Cancel anytime.</span>
        </p>
        <Button>Subscribe</Button>
      </div>
      <div className='col-start-3 flex items-end justify-end pr-8'>
        <img src='/ufo.png' />
      </div>
    </div>
  );
}
export default Banner;
