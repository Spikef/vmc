module.exports = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: require('./index.vue'),
        meta: {
            doc_title: '首页',
            depth: 10
        }
    },
    {
        name: 'about',
        path: '/about',
        component: require('./about.vue'),
        meta: {
            doc_title: '关于',
            depth: 10
        }
    },
    {
        name: 'message',
        path: '/components/message',
        component: require('./components/message.vue'),
        meta: {
            doc_title: '消息框',
            depth: 20
        }
    },
    // {
    //     name: 'toast',
    //     path: '/components/toast',
    //     component: require('./components/toast.vue'),
    //     meta: {
    //         doc_title: '消息提示',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'radio',
    //     path: '/components/radio',
    //     component: require('./components/radio.vue'),
    //     meta: {
    //         doc_title: '单选框',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'checkbox',
    //     path: '/components/checkbox',
    //     component: require('./components/checkbox.vue'),
    //     meta: {
    //         doc_title: '复选框',
    //         depth: 20
    //     }
    // },
    {
        name: 'spinner',
        path: '/components/spinner',
        component: require('./components/spinner.vue'),
        meta: {
            doc_title: '动态指示器',
            depth: 20
        }
    },
    {
        name: 'button',
        path: '/components/button',
        component: require('./components/button.vue'),
        meta: {
            doc_title: '按钮',
            depth: 20
        }
    },
    // {
    //     name: 'submit',
    //     path: '/components/submit',
    //     component: require('./components/submit.vue'),
    //     meta: {
    //         doc_title: '提交按钮',
    //         depth: 20
    //     }
    // },
    {
        name: 'tabbar',
        path: '/components/tabbar',
        component: require('./components/tabbar.vue'),
        meta: {
            doc_title: 'tabbar',
            depth: 20
        }
    },
    // {
    //     name: 'grid',
    //     path: '/components/grid',
    //     component: require('./components/grid.vue'),
    //     meta: {
    //         doc_title: '网格',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'justify',
    //     path: '/components/justify',
    //     component: require('./components/justify.vue'),
    //     meta: {
    //         doc_title: 'justify',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'dropload',
    //     path: '/components/dropload',
    //     component: require('./components/dropload.vue'),
    //     meta: {
    //         doc_title: 'dropload',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'tabcontrol',
    //     path: '/components/tabcontrol',
    //     component: require('./components/tabcontrol.vue'),
    //     meta: {
    //         doc_title: 'tabcontrol',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'icons',
    //     path: '/components/icons',
    //     component: require('./components/icons.vue'),
    //     meta: {
    //         doc_title: '图标',
    //         depth: 20
    //     }
    // },
    {
        name: 'card',
        path: '/components/card',
        component: require('./components/card.vue'),
        meta: {
            doc_title: '卡片',
            depth: 20
        }
    },
    {
        name: 'rater',
        path: '/components/rater',
        component: require('./components/rater.vue'),
        meta: {
            doc_title: '评分',
            depth: 20
        }
    },
    {
        name: 'reddot',
        path: '/components/reddot',
        component: require('./components/reddot.vue'),
        meta: {
            doc_title: 'reddot',
            depth: 20
        }
    },
    // {
    //     name: 'switch',
    //     path: '/components/switch',
    //     component: require('./components/switch.vue'),
    //     meta: {
    //         doc_title: '开关',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'minput',
    //     path: '/components/minput',
    //     component: require('./components/minput.vue'),
    //     meta: {
    //         doc_title: 'minput',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'vinput',
    //     path: '/components/vinput',
    //     component: require('./components/vinput.vue'),
    //     meta: {
    //         doc_title: 'vinput',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'number',
    //     path: '/components/number',
    //     component: require('./components/number.vue'),
    //     meta: {
    //         doc_title: 'number',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'textarea',
    //     path: '/components/textarea',
    //     component: require('./components/textarea.vue'),
    //     meta: {
    //         doc_title: 'textarea',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'nowrap',
    //     path: '/components/nowrap',
    //     doc_title: 'nowrap',
    //     component: require('./components/nowrap.vue'),
    //     depth: 20
    // },
    // {
    //     name: 'progressbar',
    //     path: '/components/progressbar',
    //     component: require('./components/progressbar.vue'),
    //     meta: {
    //         doc_title: '进度条',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'shake',
    //     path: '/components/shake',
    //     component: require('./components/shake.vue'),
    //     meta: {
    //         doc_title: '摇一摇',
    //         depth: 20
    //     }
    // },
    {
        name: 'dialog',
        path: '/components/dialog',
        component: require('./components/dialog.vue'),
        meta: {
            doc_title: 'dialog',
            depth: 20
        }
    },
    // {
    //     name: 'popup',
    //     path: '/components/popup',
    //     component: require('./components/popup.vue'),
    //     meta: {
    //         doc_title: 'popup',
    //         depth: 20
    //     }
    // },
    {
        name: 'badge',
        path: '/components/badge',
        component: require('./components/badge.vue'),
        meta: {
            doc_title: 'badge',
            depth: 20
        }
    },
    {
        name: 'marquee',
        path: '/components/marquee',
        component: require('./components/marquee.vue'),
        meta: {
            doc_title: 'marquee',
            depth: 20
        }
    },
    // {
    //     name: 'actionsheet',
    //     path: '/components/actionsheet',
    //     component: require('./components/actionsheet.vue'),
    //     meta: {
    //         doc_title: 'actionsheet',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'slider',
    //     path: '/components/slider',
    //     component: require('./components/slider.vue'),
    //     meta: {
    //         doc_title: '轮播图',
    //         depth: 20
    //     }
    // },
    {
        name: 'box',
        path: '/components/box',
        component: require('./components/box.vue'),
        meta: {
            doc_title: 'box',
            depth: 20
        }
    },
    // {
    //     name: 'picker',
    //     path: '/components/picker',
    //     component: require('./components/picker.vue'),
    //     meta: {
    //         doc_title: 'picker',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'datepicker',
    //     path: '/components/datepicker',
    //     component: require('./components/datepicker.vue'),
    //     meta: {
    //         doc_title: 'datepicker',
    //         depth: 20
    //     }
    // },
    // {
    //     name: 'upload',
    //     path: '/components/upload',
    //     component: require('./components/upload.vue'),
    //     meta: {
    //         doc_title: 'upload',
    //         depth: 20
    //     }
    // }
];
