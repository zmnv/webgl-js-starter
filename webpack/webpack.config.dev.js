const Path = require('path');
const Webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const getLocalIpAddress = require('./getLocalIpAddress.js').default;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    inline: true,
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    host: process.env.LOCALNETWORK ? getLocalIpAddress() : undefined,
    stats: 'errors-only',

    // FYI: If you want to mint at https://hicetnunc.xyz you can uncomment the code below:
    openPage: [`?creator=${process.env.HEN_CREATOR || ''}&viewer=${process.env.HEN_VIEWER || 'false'}`],
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?sourceMap=true'
        ],
      },
    ],
  },
});
