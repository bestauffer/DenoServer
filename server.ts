import { serve } from "https://deno.land/std@0.184.0/http/server.ts";
//const BOOK_ROUTE = new URLPattern({ pathname: "/books/:id" });

function handler(): Response {

    return new Response(`Hello`);

}
console.log("Listening on http://localhost:8000");
serve(handler);