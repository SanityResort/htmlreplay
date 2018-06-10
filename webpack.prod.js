const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.common.js');
const path = require("path");
const buildPath = path.join(__dirname, "dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge( baseConfig, {
    mode: "production",
    output: {
      filename: "[name]-[chunkhash].js"
    },
    module: {
      rules: [
        {test: /\.scss$/, use: [{
          loader: MiniCssExtractPlugin.loader
      }, {
          loader: "css-loader"
      }, {
          loader: "sass-loader"
      }]
  }
      ]
    },

    plugins: [
        // Minify JS
        new UglifyJsPlugin({
          sourceMap: false,
          parallel: true,
          uglifyOptions: {
              compress: true
          }
        }),
        // Minify CSS
        new webpack.LoaderOptionsPlugin({
          minimize: true,
        }),
        new MiniCssExtractPlugin({
          filename: "[name]-[chunkhash].css",
          chunkFilename: "[id]-[chunkhash].css"
      })
      ]
});