// ============================================================================
// DOM & Performance Types
// ============================================================================

export interface DOMMetrics {
    divCount: number
    depth: number
    totalElements: number
    renderTime: number
    domSize: string // Formatted size
    avgChildren: number
}

// ============================================================================
// Blog & Content Types
// ============================================================================

export interface BlogPostList {
    id: number
    title: string
    summary: string
    author: string
    tags: string
    publishedAt: string
    img: string
    isFeatured: boolean
    readTime: number
}[]

export interface BlogPostDetail {
    id: number
    author: string
    authorId: number
    publishedAt: string
    isFeatured: boolean
    isPublished: boolean
    isArchived: boolean
    title: string
    summary: string
    content: string
    category: string
    tags: string
    read_time: number
    img: string
}

// ============================================================================
// Component Props Types
// ============================================================================

export interface AppLayoutProps {
    children: React.ReactNode
}

export interface ButtonProps {
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

// ============================================================================
// Route Types (React Router v7)
// ============================================================================

export interface RouteMetaArgs {
    data?: any
}

export interface RouteLoaderArgs {
    params?: Record<string, string>
    request?: Request
}

// ============================================================================
// Hook Return Types
// ============================================================================

export interface UsePostsReturn {
    first: BlogPostDetail
    rest: BlogPostDetail[]
    posts: BlogPostDetail[]
}

// ============================================================================
// Utility Types
// ============================================================================

export type ButtonVariant = 'primary' | 'secondary'

export type PostTag = 'economics' | 'business' | 'culture' | 'world' | 'arts' | 'science'

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationItem {
    label: string
    path: string
    isActive?: boolean
}

export interface Topic {
    name: string
    path: string
}

// ============================================================================
// Meta Types
// ============================================================================

export interface MetaTag {
    title?: string
    name?: string
    content?: string
    property?: string
}

export type MetaFunction = (args: RouteMetaArgs) => MetaTag[]

// ============================================================================
// Constants
// ============================================================================

export const INITIAL_DIV = 2

export const TOPICS: Topic[] = [
    { name: 'Tailwind CSS', path: '/' },
    { name: 'MUI', path: '/mui' }
]

// ============================================================================
// API Response Types (for future use)
// ============================================================================

export interface ApiResponse<T> {
    data: T
    success: boolean
    message?: string
    error?: string
}

export interface PaginatedResponse<T> {
    data: T[]
    pagination: {
        page: number
        limit: number
        total: number
        totalPages: number
    }
}
