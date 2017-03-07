import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import VMC from 'vmc/install';

if (process.env.NODE_ENV === 'development') {
    Vue.config.productionTip = false;    // 关闭生产提示

    var log = console.log;
    console.log = function() {
        var args = Array.from(arguments);
        args = args.map(arg => {
            try{
                return JSON.parse(JSON.stringify(arg));
            } catch (e) {
                return arg;
            }
        });

        log.apply(console, args);
    };

    console.print = log;

    window.vConsole = require('./assets/js/vconsole.min');
    require('./assets/js/vconsole-resources.min');
    require('./assets/js/vconsole-sources.min');
}

Vue.use(Router);
Vue.use(VMC);

import routes from './pages/routes';
var router = new Router({ routes });

router.beforeEach((t, f, next) => {
    if (t.meta.doc_title) {
        window.document.title = t.meta.doc_title;
    }

    next();
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});


var attachFastClick = require('fastclick');
attachFastClick.attach(document.body);
