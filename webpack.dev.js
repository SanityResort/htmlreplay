const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
const webpack = require("webpack");
const path = require("path");
const buildPath = path.join(__dirname, "dist");

module.exports = merge( baseConfig, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: buildPath,
        port: 3000
    },

    module: {
        rules: [
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"},
            {test: /\.scss$/, use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
});