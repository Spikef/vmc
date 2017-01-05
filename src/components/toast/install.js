import Toast from './';

export default configs => {
    configs.template += `<toast v-ref:toast></toast>`;
    configs.components.Toast = Toast;

    return (Vue, vm) => {
        Vue.prototype.$Loading = (text, second) => {
            var options = {
                type: 'loading',
                content: text || '',
                second: second
            };

            vm.$refs.toast._show(options);
        };

        Vue.prototype.$Loading.done = () => {
            vm.$refs.toast._hide();
        };

        ['success', 'error', 'info', 'toast'].forEach(key => {
            var name = '$' + key.replace(/^([a-z])/, $1 => $1.toUpperCase());

            Vue.prototype[name] = (text, second, position) => {
                if (typeof second === 'string') {
                    position = second;
                    second = 2;
                }

                var options = {
                    type: key,
                    content: text || '',
                    second: second || 2,
                    position: position
                };

                vm.$refs.toast._show(options);
            }
        });
    }
}