import type { ResolveOptions } from "webpack";

export function getBuildResolve(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
