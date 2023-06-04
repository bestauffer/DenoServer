import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

serve(_req => new Response("Hello world from Deno!"), { port: 8080 });

console.log(`HTTP server is running at: http://localhost:8080/`);