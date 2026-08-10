import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import type { BuildOptions } from "./types/config";

export function getBuildLoaders(
  buildOptions: BuildOptions,
): webpack.RuleSetRule[] {
  const { isDev } = buildOptions;

  const tsLoader = {
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    options: {
      configFile: "tsconfig.app.json",
    },
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            namedExport: false,
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, cssLoader];
}
