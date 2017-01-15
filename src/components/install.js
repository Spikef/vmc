import installAlert from './alert/install';
import installConfirm from './confirm/install';
import installPrompt from './prompt/install';
import installToast from './toast/install';
import Filter from '../utils/filter';
import Directive from '../utils/directive';

module.exports = function(Vue, options = {
    alert: true,
    confirm: true,
    prompt: true,
    toast: true
}) {
    // filters and directives
    var filters = Filter(Vue);
    Object.keys(filters).forEach(name => {
        Vue.filter(name, filters[name]);
    });

    var directives = Directive(Vue);
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
};