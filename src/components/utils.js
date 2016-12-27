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

// filters, directives, transitions
import Vue from 'vue';
import * as directives from '../utils/directive';

Object.keys(directives).forEach(name => {
    let _name = name.replace(/[A-Z](?![A-Z])/g, $0 => '-' + $0.toLowerCase());
    let isEl = directives[name].element;

    if (isEl) {
        Vue.elementDirective(_name, directives[name]);
    } else {
        Vue.directive(_name, directives[name]);
    }
});