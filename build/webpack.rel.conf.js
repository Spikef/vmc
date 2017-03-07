var config = require('./config');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var env = config.release.env;

var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        app: './src/vmc.js'
    },
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.release.productionSourceMap, extract: true })
    },
    devtool: config.release.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.release.assetsRoot,
        filename: utils.assetsPath('vmc.js', config.release.assetsSubDirectory)
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
        new webpack.optimize.OccurenceOrderPlugin(),
        // extract css into its own file
        new ExtractTextPlugin(utils.assetsPath('vmc.css', config.release.assetsSubDirectory))
    ]
});

module.exports = webpackConfig;
