import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("mui", "routes/home-mui.tsx"),
    route("about", "routes/about.tsx"),
    route("blog", "routes/blog-list.tsx"),
    route("blog/:id", "routes/blog-detail.tsx"),
] satisfies RouteConfig;
