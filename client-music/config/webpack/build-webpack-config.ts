import * as webpack from 'webpack';
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./build-plugins";
import {buildLoaders} from "./build-loaders";
import {buildDevServer} from "./build-dev-server";
import {buildResolvers} from "./build-resolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.dist,
      clean: true,
      publicPath: '/',
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
