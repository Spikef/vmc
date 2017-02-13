var fs = require('fs');
var path = require('path');
var utils = require('./utils');

module.exports = function (root, assets) {
    var content;

    Object.keys(assets)
        .forEach(function (file) {
            file = path.resolve(root, file);
            content = fs.readFileSync(file, 'utf8');
            if (/\.css$/i.test(file)) {
                content = content.replace(/\/static\//g, '../')
            } else if (/(\.js|\.html)$/i.test(file)) {
                content = content.replace(/\/static\//g, 'static/')
            }

            fs.writeFileSync(file, content);
        });

    var source, target;
    source = path.resolve(__dirname, '../examples/demo.html');
    target = path.resolve(root, 'demo.html');
    utils.copyFile(source, target);
};