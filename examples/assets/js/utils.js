import cacheKeys from './cache-keys';
import * as Cache from './cache';

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
    isUCBrowser: {
        get() {
            return /UCWEB|UCBrowser/i.test(window.navigator.userAgent);
        }
    }
});

// http://www.xuanfengge.com/wx-spa-change-title.html
export function setTitle(title) {
    document.title = title;

    if (env.isIphone && env.isWechat) {
        var body = document.getElementsByTagName('body')[0];
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', '/favicon.ico');

        iframe.addEventListener('load', function() {
            setTimeout(function() {
                iframe.removeEventListener('load');
                document.body.removeChild(iframe);
            }, 0);
        });
        document.body.appendChild(iframe);
    }
}

export {
    Cache,
    cacheKeys
};