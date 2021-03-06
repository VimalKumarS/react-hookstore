const config = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  entry: './example/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html'
    }),
  ]
});
