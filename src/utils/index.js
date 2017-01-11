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