const code = [
  {
    type: 'tag',
    value: '<ErrorBoundary ',
  },
  {
    type: 'attr',
    value: 'fallback',
  },
  {
    type: 'punct',
    value: '=',
  },
  {
    type: 'string',
    value: '{<Fallback type="error" />} ',
  },
  {
    type: 'tag',
    value: '>',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'indent',
    value: '\t',
  },
  {
    type: 'tag',
    value: '<Suspense ',
  },
  {
    type: 'attr',
    value: 'fallback',
  },
  {
    type: 'punct',
    value: '=',
  },
  {
    type: 'string',
    value: '{<Fallback type="suspense" />} ',
  },
  {
    type: 'tag',
    value: '>',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'indent',
    value: '\t\t',
  },
  {
    type: 'tag',
    value: '<TestComponent ',
  },
  {
    type: 'attr',
    value: 'shouldError',
  },
  {
    type: 'punct',
    value: '=',
  },
  {
    type: 'string',
    value: '{ ',
  },
  {
    type: 'directive',
    value: '<errors on trigger>',
  },
  {
    type: 'string',
    value: ' }',
  },
  {
    type: 'tag',
    value: ' />',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'indent',
    value: '\t',
  },
  {
    type: 'tag',
    value: '</Suspense>',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'tag',
    value: '</ErrorBoundary>',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'tag',
    value: '<Suspense ',
  },
  {
    type: 'attr',
    value: 'fallback',
  },
  {
    type: 'punct',
    value: '=',
  },
  {
    type: 'string',
    value: '{<Fallback type="suspense" />} ',
  },
  {
    type: 'tag',
    value: '>',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'indent',
    value: '\t',
  },
  {
    type: 'tag',
    value: '<TestComponent ',
  },
  {
    type: 'attr',
    value: 'shouldError',
  },
  {
    type: 'punct',
    value: '=',
  },
  {
    type: 'string',
    value: '{false}',
  },
  {
    type: 'tag',
    value: ' />',
  },
  { type: 'newline', value: '\n' },
  {
    type: 'tag',
    value: '</Suspense>',
  },
  { type: 'newline', value: '\n' },
];

const colorMap: Record<string, string> = {
  tag: 'text-blue-700 font-semibold',
  attr: 'text-purple-700',
  string: 'text-green-700',
  punct: 'text-gray-700',
  indent: '',
  newline: '',
  directive: 'text-red-700 font-semibold',
};

function renderCode() {
  return code.map((part, i) => {
    if (part.type === 'newline') return <br key={i} />;
    if (part.type === 'indent') return <span key={i}>{part.value}</span>;
    return (
      <span key={i} className={colorMap[part.type]}>
        {part.value}
      </span>
    );
  });
}

function Explanation() {
  return (
    <section className='space-y-4'>
      <p>The code looks like this:</p>
      <code className='block overflow-x-auto border-l-10 border-zinc-400/50 pl-8 font-mono text-lg leading-relaxed'>
        <pre>{renderCode()}</pre>
      </code>
    </section>
  );
}

export default Explanation;
