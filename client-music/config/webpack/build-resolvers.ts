import * as webpack from 'webpack';
import {BuildOptions} from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    alias: {
      "@": [
        options.paths.src
      ]
    },
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
}
