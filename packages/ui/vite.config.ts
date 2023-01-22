import { defineConfig, ViteDevServer } from "vite";
import queryString from "query-string";
import path from "path";

const mapNextJsAssets = {
  name: "map-next-js-assets",
  configureServer(server: ViteDevServer) {
    server.middlewares.use("/", (req, res, next) => {
      const params = queryString.parse(req.url as string) || {};
      const nextImageUrl = params["/_next/image?url"] as string;

      if (nextImageUrl) {
        req.url = `/@fs/${path.resolve(
          __dirname,
          `public${nextImageUrl.replaceAll("/", "\\")}`,
        )}`;
      }

      next();
    });
  },
};

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  envPrefix: ["NEXT_", "VITE_"],
  publicDir: "public",
  plugins: [mapNextJsAssets],
  server: {
    port: 61000,
    open: false,
  },
});
