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
    },
    'message': {
        name: 'message',
        doc_title: 'alert',
        component: require('./message.vue'),
        depth: 20
    },
    'radio': {
        name: 'radio',
        doc_title: 'radio',
        component: require('./radio.vue'),
        depth: 20
    },
    'checklist': {
        name: 'checklist',
        doc_title: 'checklist',
        component: require('./checklist.vue'),
        depth: 20
    },
    'jscomponents': {
        name: 'jscomponents',
        doc_title: 'jscomponents',
        component: require('./jscomponents.vue'),
        depth: 20
    }

};