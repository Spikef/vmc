var path = require('path');
var multer  = require('multer');
var utils = require('../utils');

var target = path.resolve(__dirname, '../../uploads/');
var upload = multer({ dest: target });

module.exports = function(app) {
    app.post('/upload', upload.single('file'), function (req, res, next) {
        var file = req.file.path;
        var ext = req.file.originalname.split('.').pop();
        var name = randName() + '.' + ext;
        var save = path.resolve(target, name);
        utils.renameFile(file, save);

        res.json({
            status: true,
            message: '上传成功',
            url: '/uploads/' + name
        });
    });
};

function randName() {
    var now = new Date();
    var parts = [
        now.getFullYear(),
        now.getMonth() + 1,
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds(),
        now.getMilliseconds()
    ];

    parts = parts.map(function(v, i) {
        if (i === 0) {
            return ('' + v).slice(-2);
        } else if (i === parts.length - 1) {
            return ('000' + v).slice(-3);
        } else {
            return ('00' + v).slice(-2);
        }
    });

    return parts.join('');
}