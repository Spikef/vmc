var write = document.write;

export const loadJs = function (urls, callback, fallback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;

    var src = arrays.shift();

    document.write = function(content) {
        var matches = /<script[^>]+src="([^"]+)"/i.exec(content);

        if (matches && matches[1]) {
            arrays.push(matches[1]);
        } else {
            var html = document.body.innerHTML;
            document.body.innerHTML = html + content;
        }
    };

    appendScript(src, function () {
        if (arrays.length) {
            loadJs(arrays, callback);
        } else {
            document.write = write;
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }, function () {
        unloadJs(src, function () {
            console.error('Failed to load: ' + src);

            document.write = write;
            if (fallback && typeof fallback === 'function') {
                fallback();
            }
        });
    });
};

export const unloadJs = function (urls, callback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;
    arrays = arrays.map(u => u.replace(/^[^/]*?\/\//, ''));

    var scripts = document.body.querySelectorAll('script');
    for (let script of scripts) {
        let src = script.getAttribute('src');
        if (!!~arrays.indexOf(src)) {
            document.body.removeChild(script);
        }
    }

    if (callback && typeof callback === 'function') {
        callback();
    }
};

function appendScript(src, callback, fallback) {
    if (existsScript(src)) {
        if (callback && typeof callback === 'function') callback();
        return;
    }

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    if (callback && typeof callback === 'function') script.onload = callback;
    if (fallback && typeof fallback === 'function') script.onerror = fallback;

    document.body.appendChild(script);
}

function existsScript(src) {
    var scripts = document.body.querySelectorAll('script');
    for (let script of scripts) {
        if (script.getAttribute('src') === src) {
            return true;
        }
    }

    return false;
}