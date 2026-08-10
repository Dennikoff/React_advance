import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import type { BuildOptions } from "./types/config.ts";

export function getBuildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
