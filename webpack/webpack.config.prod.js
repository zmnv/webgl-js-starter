const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // devtool: 'source-map',
  stats: 'errors-only',
  bail: true,
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash:8].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
