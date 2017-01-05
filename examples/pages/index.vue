<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <div class="line vmc-1px-top-bottom" @click="jump('checkbox')">
                checkbox
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('radio')">
                radio
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('button')">
                button
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('submit')">
                submit
                <i class="icono-caretRight"></i>
            </div>

            <div class="title">全局组件</div>
            <div class="line vmc-1px-top-bottom" @click="jump('message')">
                message
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('toast')">
                toast
                <i class="icono-caretRight"></i>
            </div>

            <div class="title">UI组件</div>
            <div class="line vmc-1px-top-bottom" @click="jump('spinner')">
                spinner
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('dropload')">
                dropload
                <i class="icono-caretRight"></i>
            </div>

            <div class="title">布局组件</div>
            <div class="line vmc-1px-top-bottom" @click="jump('tabbar')">
                tabbar
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('grid')">
                grid
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('justify')">
                justify
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-bottom" @click="jump('tabcontrol')">
                tabcontrol
                <i class="icono-caretRight"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../src';

    export default {
        name: 'index',
        components: {
            Navbar
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