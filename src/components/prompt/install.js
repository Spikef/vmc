import Prompt from './';

export default configs => {
    configs.template += `<prompt v-ref:prompt></prompt>`;
    configs.components.Prompt = Prompt;

    return (Vue, vm) => {
        var opts = {
            title: '',
            content: '',
            value: '',
            invalid: false,
            message: '',
            placeholder: '',
            validator: null,
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定'
        };

        Vue.prototype.$Prompt = (title, confirm, cancel, options) => {
            if (typeof title === 'string') {
                options = options || {};
                options.title = title;
            } else if (typeof title === 'object') {
                options = title;
            }

            if (typeof confirm === 'function') {
                options = options || {};
                options.confirm = confirm;
            } else if (typeof confirm === 'object') {
                options = Object.assign(options, confirm);
            }

            if (typeof cancel === 'function') {
                options = options || {};
                options.cancel = cancel;
            } else if (typeof cancel === 'object') {
                options = Object.assign(options, cancel);
            }

            vm.$refs.prompt._show(Object.assign({}, opts, options));
        };
    }
}