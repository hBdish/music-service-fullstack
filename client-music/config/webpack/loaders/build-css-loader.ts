export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.(sass|less|css)$/,
    exclude: /node_modules/,
    use:
      [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.css')),
              localIdentName: isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]',
            },
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: () => [
                require('autoprefixer')
              ]
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
  }
}