import type { BuildOptions } from "./types/config.ts";
import webpack from "webpack";
import { getBuildPlugins } from "./buildPlugins.ts";
import { getBuildLoaders } from "./buildLoaders.ts";
import { getBuildResolve } from "./buildResolve.ts";
import { buildDevServer } from "./buildDevServer.ts";

export function buildWebpackConfig(
  buildOptions: BuildOptions,
): webpack.Configuration {
    const {paths, mode, isDev} = buildOptions;
  return {
    entry: paths.entry,
    mode: mode,
    output: {
      path: paths.build,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: getBuildPlugins(buildOptions),
    module: {
      rules: getBuildLoaders(),
    },
    resolve: getBuildResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(buildOptions) : undefined,
  };
}
