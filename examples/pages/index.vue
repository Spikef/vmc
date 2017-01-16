<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <cell @click="jump('checkbox')">checkbox</cell>
            <cell @click="jump('radio')">radio</cell>
            <cell @click="jump('button')">button</cell>
            <cell @click="jump('submit')">submit</cell>
            <cell @click="jump('switch')">switch</cell>
            <cell @click="jump('minput')">input (auto fix)</cell>
            <cell @click="jump('vinput')">input (prompt)</cell>
            <cell @click="jump('textarea')">textarea</cell>
            <cell @click="jump('number')">number</cell>
            <cell @click="jump('rater')">rater</cell>

            <div class="title">全局组件</div>
            <cell @click="jump('message')">message</cell>
            <cell @click="jump('toast')">toast</cell>

            <div class="title">UI组件</div>
            <cell @click="jump('spinner')">spinner</cell>
            <cell @click="jump('dropload')">dropload</cell>
            <cell @click="jump('tabbar')">tabbar</cell>
            <cell @click="jump('grid')">grid</cell>
            <cell @click="jump('justify')">justify</cell>
            <cell @click="jump('nowrap')">nowrap</cell>
            <cell @click="jump('reddot')">reddot</cell>
            <cell @click="jump('tabcontrol')">tabcontrol</cell>
            <cell @click="jump('icons')">icons</cell>
            <cell @click="jump('card')">card</cell>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Cell } from '../../src';

    export default {
        name: 'index',
        components: {
            Navbar,
            Cell
        },
        methods: {
            jump(path) {
                this.$router.go('/components/' + path);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #home {
        background-color: #fbf9fe;

        .content {
            height: 100%;
            padding-bottom: 55px;
            box-sizing: border-box;
            overflow: auto;

            .title {
                font-size: 18px;
                text-align: center;
                height: 44px;
                line-height: 44px;
                color: #888888;
            }

            .line {
                font-size: 14px;
                padding: 10px;
                background-color: #ffffff;

                i {
                    float: right;
                    margin: 0;
                    color: #666666;
                    transform: scale(0.8);
                }
            }
        }
    }
</style>