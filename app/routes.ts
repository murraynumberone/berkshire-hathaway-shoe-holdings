import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
] satisfies RouteConfig;
