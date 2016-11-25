<template>
    <topbar class="navbar" v-if="show">
        <div class="left" @click="back"></div>

        <div class="center">
            {{title}}
        </div>

        <div class="right"></div>
    </topbar>
</template>

<script type="text/ecmascript-6">
    import * as utils from '../drivers/utils';
    import Toolbar from './toolbar.vue';

    export default {
        components: {
            Toolbar
        },
        props: {
            title: String,
            forbidBack: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            back() {
                !this.forbidBack && history.back();

                this.$emit('back');
            }
        },
        data() {
            return {
                show: !utils.env.isWechat
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .navbar {
        background-color: #000000;
        color: #ffffff;
        font-size: 18px;
        position: absolute;
        top:0;
        z-index:500;
        .left {
            width: 50px;
            height: 100%;
            background: url("/static/img/return.png") no-repeat 15px center;
            background-size: 12px 19px;
        }

        .center {
            flex: 1;
            text-align: center;
        }

        .right {
            width: 50px;
        }
    }

    .navbar + div {
        padding-top: 50px !important;
    }
</style>