const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './public/src/index.tsx',
    mode: process.env.production ? "production" : "development",
    devtool: process.env.production ? "source-maps" : "eval",
    target: "web",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new CopyWebpackPlugin([
        { from: 'public/assets', to: 'assets' }
      ])
    ],
    resolve: {
      alias: {
        "@portfolio": path.resolve(__dirname, './public/src/components/'),
        "@portfolio-lib": path.resolve(__dirname, './public/src/common/'),
        "@portfolio-styles": path.resolve(__dirname, './public/src/styles/'),
        "@portfolio-constants": path.resolve(__dirname, './public/src/constants/'),
        "@portfolio-models": path.resolve(__dirname, './public/src/models/'),
      },
      extensions: ['.js', '.ts', '.tsx']
    }
}
