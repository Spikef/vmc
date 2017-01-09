var config = require('./config');
var utils = require('./utils');
var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.base.conf');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var version = require('../package.json').version;
var env = process.env.NODE_ENV === 'testing'
    ? require('./config/test.env')
    : config.release.env;

var webpackConfig = merge(baseWebpackConfig, {
    entry: {
        app: './src/index.js'
    },
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.release.productionSourceMap, extract: true })
    },
    devtool: config.release.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.release.assetsRoot,
        filename: utils.assetsPath('vmc.js', config.release.assetsSubDirectory)
    },
    vue: {
        loaders: utils.cssLoaders({
            sourceMap: config.release.productionSourceMap,
            extract: true
        })
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
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