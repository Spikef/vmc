require('./check-versions');

// https://github.com/shelljs/shelljs
require('shelljs/global');

process.env.NODE_ENV = 'production';

var ora = require('ora');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('./config');
var webpackConfig = require('./webpack.rel.conf');
var utils = require('./utils');

var spinner = ora('building for release...');
spinner.start();

var assetsPath = path.join(config.release.assetsRoot, config.release.assetsSubDirectory);

rm('-rf', assetsPath);
mkdir('-p', assetsPath);

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;

    // 将打包好的文件拷到examples下
    var source, target, root;
    root = path.resolve(__dirname, '../examples/static');

    source = path.resolve(assetsPath, 'vmc.js');
    target = path.resolve(root, 'demo-js/vmc.min.js');
    utils.copyFile(source, target);

    source = path.resolve(assetsPath, 'vmc.css');
    target = path.resolve(root, 'demo-css/vmc.min.css');
    utils.copyFile(source, target);

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n');

    console.log(chalk.cyan('  Build release complete.\n'));
});