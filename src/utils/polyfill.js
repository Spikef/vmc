// for old android
if (!Array.prototype.fill) {
    Array.prototype.fill = function (value) {
        // Steps 1-2.
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0;

        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;

        // Step 8.
        var k = relativeStart < 0 ?
            Math.max(len + relativeStart, 0) :
            Math.min(relativeStart, len);

        // Steps 9-10.
        var end = arguments[2];
        var relativeEnd = end === undefined ?
            len : end >> 0;

        // Step 11.
        var final = relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) :
            Math.min(relativeEnd, len);

        // Step 12.
        while (k < final) {
            O[k] = value;
            k++;
        }

        // Step 13.
        return O;
    };
}

// for safari
if ([1, 0].sort((a, b) => a > b).toString() !== '0,1') {
    var sort = Array.prototype.sort;
    Array.prototype.sort = function (callback) {
        return sort.call(this, function() {
            var ret = callback.apply(null, arguments);
            if (ret === true) {
                ret = 1;
            } else if (ret === false) {
                ret = -1;
            }

            return ret;
        })
    };
}

if (!Date.prototype.format) {
    Date.prototype.format = function (format) {
        var p = {
            'm+': String(this.getMonth() + 1),  //月份
            'd+': String(this.getDate()),       //日
            'h+': String(this.getHours()),      //小时
            'n+': String(this.getMinutes()),    //分
            's+': String(this.getSeconds())     //秒
        };

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (String(this.getFullYear())).substr(4 - 2 * RegExp.$1.length));
        }

        for (var i in p) {
            if (new RegExp('(' + i + ')').test(format)) {
                var v = RegExp.$1.length === 1 ? p[i] : ('00' + p[i]).substr(p[i].length);
                format = format.replace(RegExp.$1, v);
            }
        }

        return format;
    };
}
