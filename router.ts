import { ServerRequest } from "https://deno.land/std@0.106.0/http/server.ts";
import { pathToRegexp } from "./regexp.ts";
import { findUserById, findPostById, routeNotFound, staticFile } from "./controllers.ts";

interface Route {
  name: string; // name of the route, just for tracking
  path: string; // path pattern for handler
  handler: (req: ServerRequest, match: RegExpExecArray) => void; // handler to handle request
}

const routes: Route[] = [
  { name: "static", path: "/static/:page*", handler: staticFile },
  { name: "posts", path: "/posts/:id", handler: findPostById },
  { name: "users", path: "/users/:id", handler: findUserById },
];

function router(req: ServerRequest) {
  for (const route of routes) {
    const reg = pathToRegexp(route.path);
    const match = reg.exec(req.url);
    if (match) return route.handler(req, match);
  }
  return routeNotFound(req);
}

export default router;