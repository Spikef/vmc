import installAlert from './alert/install';
import installConfirm from './confirm/install';

(function (global, factory) {
    if (exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd ) {
        define(factory);
    } else {
        global.vmc = factory();
    }
}(this, function () {
    return function install (Vue, options = {
        alert: true,
        confirm: true
    }) {
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

        configs.template = '<div id="vmc">' + configs.template + '</div>';

        var vm = new Vue(configs);
        vm.$mount().$appendTo('body');
        plugins.forEach(fn => fn(Vue, vm));
    }
}));