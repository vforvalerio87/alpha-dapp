var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = require('./paths.js')

module.exports = {

  entry: path.join(paths.srcPath, 'index.js'),

  output: {
    path: paths.outPath,
    filename: 'bundle.[chunkhash:8].js'
  },


  resolve: {
    alias: {
      fs: "browserfs/dist/shims/fs.js",
      buffer: "browserfs/dist/shims/buffer.js",
      path: "browserfs/dist/shims/path.js",
      processGlobal: "browserfs/dist/shims/process.js",
      bufferGlobal: "browserfs/dist/shims/bufferGlobal.js",
      bfsGlobal: require.resolve("browserfs")
    }
  },

  devtool: 'source-map',
  devServer: {
    contentBase: paths.outPath,
  },

  module: {

    noParse: /browserfs\.js/,

    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: paths.srcPath,
        exclude: /node_modules/,
        options: {
          presets: [
            ['es2015', { modules: false }], 'react'
          ],
          plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader",
          options: {
            javascriptEnabled: true
          }
        }]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      },
    ]
  },

  plugins: [

    new webpack.ProvidePlugin({ BrowserFS: "bfsGlobal", process: "processGlobal", Buffer: "bufferGlobal" }),

    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(paths.srcPath, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  node: {
    process: false,
    Buffer: false
  }

};
