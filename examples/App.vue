<template>
    <div id="app">
        <router-view
            class="page"
            :transition="direction">
        </router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        replace: false,
        data() {
            return {
                direction: 'forward'
            }
        },
        ready() {
            this.$router.beforeEach(t => {
                var fd = t.from.depth || 0;
                var td = t.to.depth || 0;

                if (!t.from.path || fd === td) {
                    this.$root.$data.direction = 'null';
                } else if (fd < td) {
                    this.$root.$data.direction = 'forward';
                } else if (fd > td) {
                    this.$root.$data.direction = 'back';
                }

                this.$nextTick(() => t.next());
            });
            this.$router.records = [];

            this.$router.forward = path => {
                var state = this.$router.stringifyPath(this.$route);
                this.$router.records.push(state);

                this.$router.go(path);
            };
        }
    }
</script>

<style rel="stylesheet" lang="less">
    @import "assets/css/transition.css";
    @import "../src/styles/1px.less";

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
</style>