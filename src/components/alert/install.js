import Alert from './';

export default configs => {
    configs.template += `<alert v-ref:alert></alert>`;
    configs.components.Alert = Alert;
    
    return (Vue, vm) => {
        var opts = {
            title: '',
            content: '',
            callback: null,
            button: '确定'
        };
        
        Vue.prototype.$Alert = (title, callback, options) => {
            if (typeof title === 'string') {
                options = options || {};
                options.title = title;
            } else if (typeof title === 'object') {
                options = title;
            }

            if (typeof callback === 'function') {
                options = options || {};
                options.callback = callback;
            } else if (typeof callback === 'object') {
                options = Object.assign(options, callback);
            }

            vm.$refs.alert._show(Object.assign({}, opts, options));
        }
    }
}