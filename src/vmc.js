// 样式，对于webpack方式引用，需要手动引用样式，这样可以方便地覆盖vmc的变量名
require('./styles/vmc.less');

(function() {
    var vmc = require('./index');
    var install = require('./components/install').default;

    if (window.Vue) {
        var Vue = window.Vue;
        Vue.use(install);

        Object.keys(vmc)
            .forEach(key => {
                if (key !== 'Utils') {
                    Vue.component(key, vmc[key]);
                }
            })
    }

    vmc.version = process.env.VERSION;

    if (module && module.exports) {
        module.exports = vmc;
    } else {
        window.VMC = vmc;
    }
}());