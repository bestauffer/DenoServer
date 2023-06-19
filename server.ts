import { serve } from "https://deno.land/std@0.106.0/http/server.ts";
import router from "./router.ts";
import { Logger } from "./logger.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
//import env from "./.env";

const logger = new Logger();

const PORTO:string = Deno.env.get('PORT')!;
const PORT:number = parseInt(PORTO);
const server = serve({ port: PORT });

console.log(`🚀 Server is running on http://localhost:${PORT}`);

for await (const req of server) {
  logger.info("/%s:\t%s \t\t%s", req.method, req.url, new Date().toISOString());
  router(req);
}