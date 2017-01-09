import installAlert from './alert/install';
import installConfirm from './confirm/install';
import installPrompt from './prompt/install';
import installToast from './toast/install';
import * as filters from '../utils/filter';
import * as directives from '../utils/directive';

(function (global, factory) {
    if (exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd ) {
        define(factory);
    } else {
        global.vmc = factory();
    }
}(this, function () {
    return function install(Vue, options = {
        alert: true,
        confirm: true,
        prompt: true,
        toast: true
    }) {
        // filters and directives
        Object.keys(filters).forEach(name => {
            Vue.filter(name, filters[name]);
        });

        Object.keys(directives).forEach(name => {
            let _name = name.replace(/[A-Z](?![A-Z])/g, $0 => '-' + $0.toLowerCase());
            let isEl = directives[name].element;

            if (isEl) {
                Vue.elementDirective(_name, directives[name]);
            } else {
                Vue.directive(_name, directives[name]);
            }
        });

        // global components
        var configs = {
            name: 'VMC',
            template: ``,
            components: {}
        };
        
        var plugins = [];

        if (options.alert) {
            plugins.push(installAlert(configs));
        }

        if (options.confirm) {
            plugins.push(installConfirm(configs));
        }

        if (options.prompt) {
            plugins.push(installPrompt(configs));
        }

        if (options.toast) {
            plugins.push(installToast(configs));
        }

        configs.template = '<div id="vmc">' + configs.template + '</div>';

        var vm = new Vue(configs);
        vm.$mount().$appendTo('body');
        plugins.forEach(fn => fn(Vue, vm));
    }
}));