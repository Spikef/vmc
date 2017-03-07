export const parse = function (url) {
    url = url || window.location.search;
    url = String(url).split('?').pop();

    if (!url) return {};

    var params = {};
    if (url) {
        url.split('&').forEach(function (part) {
            var parts = part.split('=');
            var name = parts.shift();
            var value = parts.join('&');

            if (/\[]$/.test(name) || typeof params[name] !== 'undefined') {
                name = name.replace(/\[]$/, '');
                params[name] = params[name] || [];
                if (Object.prototype.toString.call(params[name]) !== '[object Array]') {
                    params[name] = [params[name]];
                }
                params[name].push(value);
            } else if (/\[.+]$/.test(name)) {
                var key = name.match(/\[(.+)]$/)[1];
                name = name.replace(/\[.+]$/, '');
                params[name] = params[name] || {};
                params[name][key] = value;
            } else {
                params[name] = value;
            }
        });
    }

    return params;
};

export const stringify = function (params) {
    var urls = [];
    for (var name in params) {
        if (!params.hasOwnProperty(name)) continue;
        if (Object.prototype.toString.call(params[name]) === '[object Array]') {
            params[name].forEach(function (value) {
                urls.push(name + '[]=' + value);
            });
        } else {
            urls.push(name + '=' + params[name]);
        }
    }

    if (urls.length) {
        return '?' + urls.join('&');
    } else {
        return '';
    }
};