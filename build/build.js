require('./check-versions');

// https://github.com/shelljs/shelljs
require('shelljs/global');

process.env.NODE_ENV = 'production';

var ora = require('ora');
var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
var config = require('./config');
var webpackConfig = require('./webpack.prod.conf');
var after = require('./after-build');

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory);

rm('-rf', assetsPath);
mkdir('-p', assetsPath);
cp('-R', 'examples/static/', path.dirname(assetsPath));

webpack(webpackConfig, function (err, stats) {
    spinner.stop();
    if (err) throw err;

    // --> 后处理
    var root = config.build.assetsRoot;
    var assets = stats.compilation.assets;
    after(root, assets);

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ));
});
