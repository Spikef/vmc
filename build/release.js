// https://github.com/shelljs/shelljs
require('shelljs/global');
env.NODE_ENV = 'production';

var fs = require('fs');
var path = require('path');
var config = require('./config');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('./webpack.rel.conf');

console.log(
    '  Tip:\n' +
    '  Start to release vmc components.\n'
);

var spinner = ora('building for release...');
spinner.start();

var assetsPath = path.join(config.release.assetsRoot, config.release.assetsSubDirectory);

rm('-rf', assetsPath);
mkdir('-p', assetsPath);

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
});
