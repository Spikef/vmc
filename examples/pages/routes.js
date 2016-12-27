module.exports = {
    '/index': {
        name: 'index',
        doc_title: '首页',
        component: require('./index.vue'),
        depth: 10
    },
    '/about': {
        name: 'about',
        doc_title: '关于',
        component: require('./about.vue'),
        depth: 10
    },
    '/test': {
        name: 'test',
        doc_title: '测试页',
        component: require('./test.vue'),
        depth: 10
    },
    '/components/message': {
        name: 'message',
        doc_title: '消息框',
        component: require('./components/message.vue'),
        depth: 20
    },
    '/components/radio': {
        name: 'radio',
        doc_title: '单选框',
        component: require('./components/radio.vue'),
        depth: 20
    },
    '/components/checkbox': {
        name: 'checkbox',
        doc_title: '复选框',
        component: require('./components/checkbox.vue'),
        depth: 20
    },
    '/components/spinner': {
        name: 'spinner',
        doc_title: 'spinner',
        component: require('./components/spinner.vue'),
        depth: 20
    },
    '/components/button': {
        name: 'button',
        doc_title: 'button',
        component: require('./components/button.vue'),
        depth: 20
    },
    '/components/tabbar': {
        name: 'tabbar',
        doc_title: 'tabbar',
        component: require('./components/tabbar.vue'),
        depth: 20
    },
    '/components/grid': {
        name: 'grid',
        doc_title: 'grid',
        component: require('./components/grid.vue'),
        depth: 20
    }
};