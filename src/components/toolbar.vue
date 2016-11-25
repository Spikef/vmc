<template>
    <tabbar class="toolbar">
        <tabbar-item :selected="selIndex == 0 ? true : false" @on-item-click="jump">
            Home
        </tabbar-item>

        <tabbar-item :selected="selIndex == 1 ? true : false" @on-item-click="jump">
            Domes
        </tabbar-item>

        <tabbar-item :selected="selIndex == 2 ? true : false" @on-item-click="jump">
            Donate
        </tabbar-item>
    </tabbar>
</template>

<script type="text/ecmascript-6">
    import Tabbar from './base/tabbar.vue';
    import TabbarItem from './base/tabbar-item.vue';

    export default {
        components: {
            Tabbar,
            TabbarItem
        },
        props: {
            selIndex: {
                type: Number,
                default: 1
            }
        },
        methods: {
            jump(index) {
                var name, url

                switch (index) {
                    case 0:
                        name = 'home';
                        break;
                    case 1:
                        name = 'demos';
                        break;
                    case 2:
                        name = 'donate';
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
    .toolbar {
        background-color: #FBFBFD;

        .tabbar-item {
            padding-top: 30px;
            text-align: center;
            color: #666;
            font-size: 14px;
            background-repeat: no-repeat;
            background-position: center 6px;
        }

        .tabbar-item.active {
            color: #666;
            background-color: #fafafa;
        }

        .tabbar-item.item_0 {
            background-image: url('/static/img/tb_icon_0.png');
            background-size: 20px 18px;
        }

        .tabbar-item.item_0.active {
            background-image: url('/static/img/tb_icon_0_a.png');
        }

        .tabbar-item.item_1 {
            background-image: url('/static/img/tb_icon_3.png');
            background-size: 57px 16px;
        }

        .tabbar-item.item_1.active {
            background-image: url('/static/img/tb_icon_3_a.png');
            background-size: 57px 16px;
        }

        .tabbar-item.item_2 {
            background-image: url('/static/img/tb_icon_4.png');
            background-size: 17px 19px;
        }

        .tabbar-item.item_2.active {
            background-image: url('/static/img/tb_icon_4_a.png');
        }
    }
</style>