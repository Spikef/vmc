/**
 * 启动一个静态服务器, 运行dist下的文件
 */

var config = require('./config');
var path = require('path');
var express = require('express');
var app = express();

var port = parseInt(config.dev.port) + 1;

app.use('/server/', express.static(path.resolve(__dirname, '../demo')));
app.use('/', express.static(path.resolve(__dirname, '../demo')));

app.listen(port, '0.0.0.0', function () {
    console.log('Server start at: localhost:' + port);
});