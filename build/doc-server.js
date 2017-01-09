/**
 * 启动一个静态服务器, 运行docs下的文件
 */

var config = require('./config');
var path = require('path');
var express = require('express');
var app = express();

var port = parseInt(config.dev.port) + 1;

app.use('/dist/', express.static(path.resolve(__dirname, '../dist')));
app.use('/vue.js', express.static(path.resolve(__dirname, '../node_modules/vue/dist/vue.js')));
app.use('/', express.static(path.resolve(__dirname, '../docs')));

app.listen(port, '0.0.0.0', function () {
    console.log('Server start at: localhost:' + port);
});