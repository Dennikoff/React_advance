import path from "path";
import ReactRefreshPlugin  from "@pmmmwh/react-refresh-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config.ts";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function getBuildPlugins({
  paths,
  isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins: webpack.WebpackPluginInstance[] = [];
  if (isDev) {
    plugins.push(new ReactRefreshPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    ...plugins,
  ];
}
