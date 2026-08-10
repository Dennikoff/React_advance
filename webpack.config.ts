import path from "node:path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig.ts";
import type { BuildEnv, BuildMode } from "./config/build/types/config.ts";

const __dirname = import.meta.dirname;

export default (env: BuildEnv) => {
  const entryPath = path.resolve(__dirname, "src", "main.tsx");
  const buildPath = path.resolve(__dirname, "dist");
  const htmlPath = path.resolve(__dirname, "public", "index.html");
  
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 5173;

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: {
      entry: entryPath,
      build: buildPath,
      html: htmlPath,
    },
    isDev,
    port: PORT,
  });
  return config;
};
