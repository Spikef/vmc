import installAlert from './alert/install';
import installConfirm from './confirm/install';
// import installPrompt from './prompt/install';
import installToast from './toast/install';
import Filter from '../utils/filter';
import Directive from '../utils/directive';

export default function(Vue, options = {
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
        Vue.directive(_name, directives[name]);
    });

    // global components
    var configs = {
        name: 'VMC',
        children: [],
        components: {}
    };

    var plugins = [];

    if (options.alert) {
        plugins.push(installAlert(configs));
    }

    if (options.confirm) {
        plugins.push(installConfirm(configs));
    }

    // if (options.prompt) {
    //     plugins.push(installPrompt(configs));
    // }
    //
    if (options.toast) {
        plugins.push(installToast(configs));
    }

    var children = configs.children;
    delete configs.children;
    configs.render = h => h('div',
        {
            attrs: {
                id: 'vmc'
            }
        },
        children.map( child => h(child, {ref: child}) )
    );

    var vm = new Vue(configs);
    document.body.appendChild(vm.$mount().$el);
    plugins.forEach(fn => fn(Vue, vm));
};
