const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();
const PATHS = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  dist: path.resolve(CURRENT_WORKING_DIR, 'dist'),
  compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
  public: '/assets/', // use absolute path for css-loader?
};
const autoPreFixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  context: PATHS.app,
  entry: { app: ['./index.js'], app2: ['./index2.js'], style: "./styles/style.scss", },
  output: {
    path: path.resolve(PATHS.assets),
    filename: '[name].js',
    publicPath: PATHS.public,
  },
  devServer: {
    contentBase: path.join(__dirname, "../app/"),
    port: 9000,
    hot: false
  },
  watch: false,
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ "env" ]
          }
        }
      },
      {
        test: /.(sass|scss)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [{
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }, {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")],
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }]
          }),
          include: PATHS.app
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'styles/[name].css' }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      title: 'Custom template',
      // template: '../app/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // optimization: {
  //   splitChunks: false
  // }
  // optimization: {
  //   splitChunks: {
  //     chunks:'all',
  //     minSize: 30000
  //   }
  // }
};