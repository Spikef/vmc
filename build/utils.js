var fs = require('fs');
var path = require('path');
var config = require('./config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = function (_path, _asset) {
    _asset = _asset || config.build.assetsSubDirectory;
    return path.posix.join(_asset, _path)
};

exports.cssLoaders = function (options) {
    options = options || {};
    // generate loader string to be used with extract text plugin
    function generateLoaders (loaders) {
        var sourceLoader = loaders.map(function (loader) {
            var extraParamChar;
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?');
                extraParamChar = '&'
            } else {
                loader = loader + '-loader';
                extraParamChar = '?'
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '')
        }).join('!');

        if (options.extract) {
            return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
        } else {
            return ['vue-style-loader', sourceLoader].join('!')
        }
    }

    // http://vuejs.github.io/vue-loader/configurations/extract-css.html
    return {
        css: generateLoaders(['css']),
        postcss: generateLoaders(['css']),
        less: generateLoaders(['css', 'less']),
        sass: generateLoaders(['css', 'sass?indentedSyntax']),
        scss: generateLoaders(['css', 'sass']),
        stylus: generateLoaders(['css', 'stylus']),
        styl: generateLoaders(['css', 'stylus'])
    }
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
    var output = [];
    var loaders = exports.cssLoaders(options);
    for (var extension in loaders) {
        var loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader: loader
        })
    }
    return output;
};

exports.copyFile = function(source, target) {
    var content = fs.readFileSync(source);
    fs.writeFileSync(target, content);
};

exports.renameFile = function(source, target) {
    this.copyFile(source, target);
    fs.unlinkSync(source);
};