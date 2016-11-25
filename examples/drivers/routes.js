import pages from './pages';

export default {
    '/home': {
        name: 'home',
        doc_title: 'home',
        component: pages.home,
        depth: 10
    },
    '/demos': {
        name: 'demos',
        doc_title: 'demos',
        component: pages.demos,
        depth: 10
    },
    '/donate': {
        name: 'donate',
        doc_title: 'donate',
        component: pages.donate,
        depth: 10
    },
    '/demos/test_swiper': {
        name: 'test_swiper',
        doc_title: 'test_swiper',
        component: pages.test_swiper,
        depth: 20
    }
};