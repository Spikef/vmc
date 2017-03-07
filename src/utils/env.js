const ua = window.navigator.userAgent;
const env = {};
Object.defineProperties(env, {
    isAndroid: {
        get() {
            return /Android/i.test(ua);
        }
    },
    isIphone: {
        get() {
            return /iphone/i.test(ua);
        }
    },
    isIPad: {
        get() {
            return /ipad/i.test(ua)
        }
    },
    isIOS: {
        get() {
            return /iphone|ipad|ipod/i.test(ua);
        }
    },
    isWechat: {
        get() {
            return /MicroMessenger/i.test(ua);
        }
    },
    isAlipay: {
        get() {
            return /Alipay/i.test(ua);
        }
    },
    isUCBrowser: {
        get() {
            return /UCWEB|UCBrowser/i.test(ua);
        }
    }
});

export default env;
