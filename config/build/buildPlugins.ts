import path from "path";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from "webpack";
import type { BuildOptions } from "./types/config.ts";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getBuildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.ProgressPlugin(),
  ];
}
