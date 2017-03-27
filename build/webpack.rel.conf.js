var path = require('path');
var config = require('./config');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

var env = config.release.env;

var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        app: './src/vmc.js'
    },
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.release.productionSourceMap,
            extract: true
        })
    },
    devtool: config.release.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.release.assetsRoot,
        filename: path.posix.join(config.release.assetsSubDirectory, 'vmc.js')
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: path.posix.join(config.release.assetsSubDirectory, 'vmc.css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin()
    ]
});

module.exports = webpackConfig;
