const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: './public/src/index.tsx',
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-maps" : "eval",
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
        extensions: ['.js', '.ts', '.tsx']
    }
}
