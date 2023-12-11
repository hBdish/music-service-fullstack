import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {BuildOptions} from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const devServer: DevServerConfiguration = {
    historyApiFallback: true,
    open: true,
    compress: true,
    allowedHosts: 'all',
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: true
      },
      progress: true
    },
    port: options.port,
    devMiddleware: {
      writeToDisk: true,
    },
    static: [
      {
        directory: options.paths.static
      }
    ],
  }

  return devServer
}
