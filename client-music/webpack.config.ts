import {BuildEnv, BuildPaths} from "./config/webpack/types/config";
import * as path from "path";
import * as webpack from "webpack";
import {buildWebpackConfig} from "./config/webpack/build-webpack-config";

export default (env: BuildEnv) => {
  const mode = env?.mode || 'development';
  const isDev = mode === 'development';
  const port = env?.port || 3000;

  const paths: BuildPaths = {
    dist: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    static: path.resolve(__dirname, "static"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  })

  return config
}
