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
    'components/alert': {
        name: 'components-alert',
        doc_title: 'alert',
        component: require('./componets/alert.vue'),
        depth: 20
    }
};