// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var fs = require('fs')
var path = require('path')
var config = require('./config')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')

console.log(
    '  Tip:\n' +
    '  Built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'examples/static/', assetsPath)

webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err

    // --> 后处理
    var content;
    var root = config.build.assetsRoot;
    Object.keys(stats.compilation.assets)
        .forEach(function (file) {
            file = path.resolve(root, file);
            if (/\.map$/.test(file)) {
                fs.unlinkSync(file);
            } else {
                content = fs.readFileSync(file, 'utf8');
                if (/\.css$/i.test(file)) {
                    content = content.replace(/\/static\//g, '../')
                } else {
                    content = content.replace(/\/static\//g, 'static/')
                }

                fs.writeFileSync(file, content);
            }
        });

    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
})
