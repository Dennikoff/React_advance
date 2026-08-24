import type { ResolveOptions } from "webpack";
import type { BuildOptions } from "./types/config";

export function getBuildResolve(buildOptions: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": buildOptions.paths.src,
    }
  };
}
