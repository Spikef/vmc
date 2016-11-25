import Vue from 'vue';
import App from './App';
import Touch from 'vue-touch';
import Router from 'vue-router';

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

import routes from './drivers/routes';

Vue.use(Touch);
Vue.use(Router);

var router = new Router();

router.map(routes);

router.redirect({
    '*': '/demos'
});

router.beforeEach(t => {
    if (t.to.doc_title) {
        window.document.title = t.to.doc_title;
    }

    t.next();
});

router.start(App, 'body');


// var attachFastClick = require('fastclick');
// attachFastClick.attach(document.body);