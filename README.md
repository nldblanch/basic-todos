# Basic To-Do App API

A modern React application with a comprehensive API structure for blog content management and DOM analytics.

## 🚀 Features

- **Blog Management API**: Complete CRUD operations for blog posts
- **DOM Analytics API**: Performance monitoring endpoints
- **Dual UI Support**: API endpoints for both Tailwind and Material-UI implementations
- **Type-Safe API**: Full TypeScript definitions for all endpoints
- **Responsive Data**: API responses optimized for different screen sizes

## 📡 API Endpoints

### Blog Content API

| Endpoint                 | Method | Description            | Request Body | Response Type  |
| ------------------------ | ------ | ---------------------- | ------------ | -------------- |
| `/api/posts`             | GET    | Get all blog posts     | -            | `PostDetail[]` |
| `/api/posts/:id`         | GET    | Get specific blog post | -            | `PostDetail`   |
| `/api/posts/featured`    | GET    | Get featured post      | -            | `PostDetail`   |
| `/api/posts/related/:id` | GET    | Get related posts      | -            | `PostDetail[]` |
| `/api/posts/tags`        | GET    | Get all available tags | -            | `string[]`     |
| `/api/posts/by-tag/:tag` | GET    | Get posts by tag       | -            | `PostDetail[]` |

## 📊 Request/Response Types

### Blog Post Types

```typescript
// GET /api/posts
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

// GET /api/posts/featured
interface FeaturedPostResponse {
  featured: PostDetail;
  related: PostDetail[];
}

// GET /api/posts/by-tag/:tag
interface PostsByTagResponse {
  tag: string;
  posts: PostDetail[];
  total: number;
}
```

### Component Configuration Types

```typescript
interface ComponentConfig {
  name: string;
  props: Record<string, any>;
  responsive: {
    xs?: any;
    sm?: any;
    md?: any;
    lg?: any;
    xl?: any;
  };
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

interface ArticleCardProps {
  img: string;
  title: string;
  content: string;
  author: string;
  tags: string[];
  readTime: number;
}
```

## 🔧 API Usage Examples

### Fetching Blog Posts

```typescript
// Get all posts
const response = await fetch("/api/posts");
const posts: PostDetail[] = await response.json();

// Get featured post
const featured = await fetch("/api/posts/featured");
const { featured: post, related } = await featured.json();

// Get posts by tag
const economicsPosts = await fetch("/api/posts/by-tag/economics");
const { posts, total } = await economicsPosts.json();
```

## 🛠️ Tech Stack

- **Backend**: Node.js/Express or similar
- **Database**: PostgreSQL/MongoDB for blog posts
- **Frontend**: React Router v7
- **Styling**: Tailwind CSS + Material-UI
- **Language**: TypeScript

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev

# Start API server (if separate)
npm run api:dev
```

## 🏗️ API Architecture

```
api/
└── posts/              # Blog post endpoints
    ├── GET /          # List all posts
    ├── GET /:id       # Get specific post
    ├── GET /featured  # Get featured post
    └── GET /by-tag/:tag # Get posts by tag
```

## 📊 Response Examples

### Blog Posts Response

```json
{
  "posts": [
    {
      "id": "1",
      "title": "What High Inflation Could Say About Our Future",
      "content": "Lorem ipsum dolor sit amet...",
      "publishedAt": "2024-01-01",
      "author": "Fabian Medhurst",
      "tags": ["economics", "business", "culture"],
      "readTime": 5,
      "img": "https://example.com/image.jpg"
    }
  ],
  "total": 4,
  "page": 1,
  "limit": 10
}
```

## 🚀 Deployment

```bash
# Build the application
npm run build

# Deploy API endpoints
npm run deploy:api

# Deploy frontend
npm run deploy:frontend
```

## 📄 License

MIT License - API structure and types available for use in your own projects.
