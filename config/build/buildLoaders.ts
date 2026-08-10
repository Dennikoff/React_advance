import webpack from "webpack";

export function getBuildLoaders(): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    options: {
      configFile: "tsconfig.app.json",
    },
  };

  return [tsLoader];
}
