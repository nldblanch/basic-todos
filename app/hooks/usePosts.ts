interface PostDetail {
    id: string;
    title: string;
    content: string;
    publishedAt: string;
    author: string;
    tags: string[];
    readTime: number;
    img: string;
}

const posts: PostDetail[] = [{
    id: "1",
    title: "What High Inflation Could Say About Our Future",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Fabian Medhurst",
    tags: ["economics", "business", "culture"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/aditya-vyas-mHdATQY9fIU-unsplash.jpg'

},
{
    id: "2",
    title: "The Biggest Legislation Changes Over the Past Year",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Jaiden Quitzon",
    tags: ["world"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/history-in-hd-v_e3Hha4EBA-unsplash.jpg'

}, {
    id: "3",
    title: "9 New Tactics You Should Add to Your Marketing Website",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Austen Altenwerth",
    tags: ["arts"],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/roman-kraft-_Zua2hyvTBk-unsplash.jpg'

}, {
    id: "4",
    title: "Conferences are Back in Business Globally",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, eget facilisis quam felis id mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    publishedAt: "2024-01-01",
    author: "Arden Huels",
    tags: ['Science'],
    readTime: 5,
    img: 'https://sqbolqabkceodcvmafyq.supabase.co/storage/v1/object/public/todos/headway-F2KRf_QfCqw-unsplash.jpg'

},
];

export const usePosts = () => {
    const [first, ...rest] = posts
    return { first, rest, posts }
}