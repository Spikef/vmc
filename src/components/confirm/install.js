import Confirm from './';

export default configs => {
    configs.children.push('confirm');
    configs.components.Confirm = Confirm;

    return (Vue, vm) => {
        var opts = {
            title: '',
            content: '',
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定'
        };

        Vue.prototype.$Confirm = (title, confirm, cancel, options) => {
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

            vm.$refs.confirm._show(Object.assign({}, opts, options));
        };
    }
}
