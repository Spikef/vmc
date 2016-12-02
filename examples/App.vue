<template>
    <div id="app">
        <router-view
            class="page"
            :transition="direction">
        </router-view>

        <tabbar :index="index" :items="items" :show="showTab"></tabbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Tabbar } from '../src/components/index';

    export default {
        name: 'root',
        components: {
            Tabbar
        },
        data() {
            return {
                direction: 'forward',
                showTab: true,
                index: 0,
                items: [
                    {
                        icon: `<i style="transform: scale(0.94);" class="icono-home"></i>`,
                        text: '首页',
                        callback: () => this.$router.go('/index')
                    },
                    {
                        icon: `<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>`,
                        text: '关于',
                        callback: () => this.$router.go('/about')
                    }
                ]
            }
        },
        ready() {
            this.$router.records = [];

            this.$router.forward = path => {
                var state = this.$router.stringifyPath(this.$route);
                this.$router.records.push(state);

                this.$router.go(path);
            };

            this.$router.back = path => {
                var state = this.$router.stringifyPath(path);
                var index = this.$router.records.length - 1;
                var last = this.$router.records[index];

                if (last && last === state) {
                    history.back();
                    this.$router.records.pop();
                } else {
                    this.$router.replace(path);
                }
            };

            this.$router.beforeEach(t => {
                var fd = t.from.depth || 0;
                var td = t.to.depth || 0;

                this.index = t.to.name === 'about' ? 1 : 0;
                this.showTab = !!~['index', 'about'].indexOf(t.to.name);

                if (!t.from.path || fd === td) {
                    this.$root.$data.direction = 'null';
                } else if (fd < td) {
                    this.$root.$data.direction = 'forward';
                } else if (fd > td) {
                    this.$root.$data.direction = 'back';
                }

                this.$nextTick(() => t.next());
            });
        }
    }
</script>

<style rel="stylesheet" lang="less">
    @import "assets/css/transition.css";
    @import "../src/styles/vmc.less";

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        font-size: 20px;
        overflow: hidden;
        background-color: #fff;
    }

    #app {
        width: 100%;
        height: 100%;
    }

    .page {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-overflow-scrolling: touch;
        -webkit-tap-highlight-color: transparent;
        user-select:none;
        font-family: "PingFang SC", "Microsoft YaHei", Helvetica Neue,Helvetica,Arial,sans-serif;
        font-weight: normal;
        background-color: #fff;
        font-size: 0.8rem;
        z-index: 0;
    }

    .vmc-tab-bar .active {
        color: #ffffff;
    }
</style>