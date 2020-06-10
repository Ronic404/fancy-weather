const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: [
          MiniCss.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './src/img/favicon.ico',
    }),
    new MiniCss({
      filename: 'style.css',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
};
