<template>
    <div id="app">
        <transition :name="direction" type="animation">
            <router-view class="page"></router-view>
        </transition>

        <tabbar :index="index" :items="items" :show="showTab">
            <template scope="props">
                <div>{{props.item.text}}</div>
            </template>
        </tabbar>
    </div>
</template>

<script type="es6">
    import { Tabbar } from 'vmc';

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
                        callback: () => {
                            this.index = 0;
                            this.$router.replace('/index');
                        }
                    },
                    {
                        icon: `<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>`,
                        text: '关于',
                        callback: () => {
                            this.index = 1;
                            this.$router.replace('/about');
                        }
                    }
                ]
            }
        },
        mounted() {
            this.$router.afterEach(to => {
                this.$nextTick(() => {
                    this.index = to.name === 'about' ? 1 : 0;
                    this.showTab = !!~['index', 'about'].indexOf(to.name);
                });
            });
        },
        watch: {
            '$route'(to, from) {
                var fd = from.meta.depth || 0;
                var td = to.meta.depth || 0;

                if (!from.path || fd === td) {
                    this.direction = 'null';
                } else if (fd < td) {
                    this.direction = 'forward';
                } else if (fd > td) {
                    this.direction = 'back';
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    // 基于less与sass对变量覆盖的处理不同，自定义变量值的引入先后方式不一样
    @import "../src/styles/vmc.less";
    /*@import "assets/vmc.custom.less";*/

    /*@import "assets/vmc.custom.scss";*/
    /*@import "../src/scss/vmc.scss";*/

    @import "assets/css/transition.css";

    html, body {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 20px;
        font-family: "PingFang SC", "Microsoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
        font-weight: normal;
        overflow: hidden;
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
        background-color: #fff;
        font-size: 0.8rem;
        z-index: 0;
    }
</style>
