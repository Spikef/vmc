<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <div class="line vmc-1px-top" @click="jump('checkbox')">
                checkbox
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top-bottom" @click="jump('radio')">
                radio
                <i class="icono-caretRight"></i>
            </div>

            <div class="title">全局组件</div>
            <div class="line vmc-1px-top-bottom" @click="jump('message')">
                message
                <i class="icono-caretRight"></i>
            </div>

            <div class="title">UI组件</div>
            <div class="line vmc-1px-top-bottom" @click="jump('spinner')">
                spinner
                <i class="icono-caretRight"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../src/components/navbar';

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
                }
            }
        }
    }
</style>