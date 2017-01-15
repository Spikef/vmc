export const env = {};
Object.defineProperties(env, {
    isAndroid: {
        get() {
            return /Android/i.test(window.navigator.userAgent);
        }
    },
    isIphone: {
        get() {
            return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
        }
    },
    isWechat: {
        get() {
            return /MicroMessenger/i.test(window.navigator.userAgent);
        }
    },
    isAlipay: {
        get() {
            return /Alipay/i.test(window.navigator.userAgent);
        }
    },
    isUCBrowser: {
        get() {
            return /UCWEB|UCBrowser/i.test(window.navigator.userAgent);
        }
    }
});

export const getType = function(obj) {
    if (obj === null || obj === undefined) return String(obj);

    var type = typeof obj;
    if (type !== 'object') return type;

    type = Object.prototype.toString.call(obj);
    type = type.substring(8, type.length - 1);
    return type.toLowerCase();
};

export const isType = function(obj, type) {
    return getType(obj) === type;
};