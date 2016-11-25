<template>
    <gridbar class="demo-list-form">
        <p>UI</p>
        <gridbar-item @on-item-click="jump">
            badge
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            blur
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            button-tab
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            circle
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            countup
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            countdown
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            clocker
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            flexbox
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            flexbox
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            icon
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            divider
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            panel
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            card
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            previewer
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            picker
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            popup
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            popup-picker
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            pregress
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            reddot
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            swiper
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            sticky
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            search
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            spinner
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            tab
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            tabbar
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            tabbar with link
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            timeline
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            step
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            xheader
        </gridbar-item>

        <gridbar-item @on-item-click="jump(28)">
            swiper
        </gridbar-item>
    </gridbar>
</template>

<script type="text/ecmascript-6">
    import Gridbar from './base/gridbar.vue';
    import GridbarItem from './base/gridbar-item.vue';

    export default {
        components: {
            Gridbar,
            GridbarItem
        },
        methods: {
            jump(index) {
                var name, url

                switch (index) {
                    case 0:
                        name = 'badge';
                        break;
                    case 1:
                        name = 'blur';
                        break;
                    case 2:
                        name = 'button-tab';
                        break;
                    case 3:
                        name = 'circle';
                        break;
                    case 4:
                        name = 'countup';
                        break;
                    case 5:
                        name = 'countdown';
                        break;
                    case 6:
                        name = 'clocker';
                        break;
                    case 7:
                        name = 'flexbox';
                        break;
                    case 8:
                        name = 'icon';
                        break;
                    case 9:
                        name = 'divider';
                        break;
                    case 10:
                        name = 'panel';
                        break;
                    case 11:
                        name = 'card';
                        break;
                    case 12:
                        name = 'previewer';
                        break;
                    case 13:
                        name = 'picker';
                        break;
                    case 14:
                        name = 'popup';
                        break;
                    case 15:
                        name = 'popup-picker';
                        break;
                    case 16:
                        name = 'progress';
                        break;
                    case 17:
                        name = 'reddot';
                        break;
                    case 18:
                        name = 'swiper';
                        break;
                    case 19:
                        name = 'sticky';
                        break;
                    case 20:
                        name = 'search';
                        break;
                    case 21:
                        name = 'spinner';
                        break;
                    case 22:
                        name = 'tab';
                        break;
                    case 23:
                        name = 'tabbar';
                        break;
                    case 24:
                        name = 'tabbar with link';
                        break;
                    case 25:
                        name = 'timeline';
                        break;
                    case 26:
                        name = 'step';
                        break;
                    case 27:
                        name = 'x-header';
                        break;
                    case 28:
                        name = 'test_swiper';
                        break;
                }

                if (name) {
                    this.$router.forward({ name });
                } else {
                    window.location.href = url;
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .demo-list{
        background-color:#fff;
        p{
            margin:0;
            padding:0;
            height:30px;
            color:green;
            padding-left:10px;
            padding-top:10px;
            background-color:#FBF9FE;
        }
    }
</style>