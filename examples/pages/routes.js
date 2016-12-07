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
    '/components/alert': {
        name: 'components-alert',
        doc_title: 'alert',
        component: require('./componets/alert.vue'),
        depth: 20
    },
    '/message': {
        name: 'message',
        doc_title: 'alert',
        component: require('./componets/message.vue'),
        depth: 20
    },
    '/radio': {
        name: 'radio',
        doc_title: 'radio',
        component: require('./componets/radio.vue'),
        depth: 20
    },
    '/checklist': {
        name: 'checklist',
        doc_title: 'checklist',
        component: require('./componets/checklist.vue'),
        depth: 20
    },
    '/jscomponents': {
        name: 'jscomponents',
        doc_title: 'jscomponents',
        component: require('./componets/jscomponents.vue'),
        depth: 20
    },
    '/input': {
        name: 'input',
        doc_title: 'input',
        component: require('./componets/input.vue'),
        depth: 20
    },
    'test':{
        name: 'test',
        doc_title: 'test',
        component: require('./componets/test.vue'),
        depth: 20
    }


};