import Vue from 'vue';
import App from './App';
import Touch from 'vue-touch';
import Router from 'vue-router';
import { VMC } from '../src';

if (process.env.NODE_ENV === 'development') {
    Vue.config.debug = true;    // 开启调试模式

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

    window.vConsole = require('./assets/js/vconsole.min');
    require('./assets/js/vconsole-resources.min');
    require('./assets/js/vconsole-sources.min');
}

import routes from './pages/routes';

Vue.use(Touch);
Vue.use(Router);
Vue.use(VMC);

var router = new Router();

router.map(routes);

router.redirect({
    '*': '/index'
});

router.beforeEach(t => {
    if (t.to.doc_title) {
        window.document.title = t.to.doc_title;
    }

    t.next();
});

router.start(App, '#app');


var attachFastClick = require('fastclick');
attachFastClick.attach(document.body);