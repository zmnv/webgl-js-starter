require('dotenv').config();

const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'app.[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: Path.resolve(__dirname, '../public'),
          noErrorOnMissing: true,
        },
      ]
    }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.html'),
    }),
  ],
  // [FYI] –––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  // You can import your files without the relative path issues like:
  // Before: '../../../../getRandomNumber'
  // After: '@utils/getRandomNumber'
  //
  // Read more: https://webpack.js.org/configuration/resolve/
  // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
  resolve: {
    alias: {
      '@src': Path.resolve(__dirname, '../src'),
      '@scripts': Path.resolve(__dirname, '../src/scripts'),
      '@utils': Path.resolve(__dirname, '../src/scripts/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: [
          'raw-loader',
          'glslify-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'esbuild-loader',
        options: {
          // loader: 'jsx', // Remove this if you're not using JSX
          target: 'es2015'  // Syntax to compile to (see options below for possible values)
        }
      },
      {
        test: /\.ts$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',  // Remove this if you're not using JSX
          target: 'es2015'  // Syntax to compile to (see options below for possible values)
        }
      },
      {
        test: /\.tsx$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',  // Remove this if you're not using JSX
          target: 'es2015'  // Syntax to compile to (see options below for possible values)
        }
      },
    ],
  },
};
