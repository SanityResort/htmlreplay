const path = require("path");
const buildPath = path.join(__dirname, "dist");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: buildPath
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss", "*"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader:"awesome-typescript-loader"}
    ]},
    plugins: [
        new CleanWebpackPlugin([buildPath]),
        new HtmlWebpackPlugin({title: "FUMBBL Replayer", template: "src/index.html"}),
        new CopyWebpackPlugin([ {from: '**/*', to: path.join(buildPath, "resources"), context: 'src/resources'}], {debug: 'debug'})
    ],
    optimization: {
        splitChunks: {
          chunks: "all"
        }
      }
}