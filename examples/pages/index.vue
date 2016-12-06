<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <div class="line vmc-1px-top" @click="ra">
                <i class="icono-mail" style="float:left"></i>
                radio
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top" @click="checkb">
                <i class="icono-mail" style="float:left"></i>
                checkbox
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top-bottom" @click="inpu">
                <i class="icono-mail" style="float:left"></i>
                input
                <i class="icono-caretRight"></i>
            </div>
            <div class="title">提示组件</div>
            <div class="line vmc-1px-top" @click="messages">
                <i class="icono-mail" style="float:left"></i>
                alert
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top" @click="messages">
                <i class="icono-mail" style="float:left"></i>
                confirm
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top-bottom" @click="jsm">
                <i class="icono-mail" style="float:left"></i>
                toast
                <i class="icono-caretRight"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../src/components/index';

    export default {
        name: 'index',
        components: {
            Navbar
        },
        methods: {
            ra() {
                this.$router.go('/radio')
            },
            checkb(){
                this.$router.go('/checklist')
            },
            messages(){
                this.$router.go('/message')
            },
            jsm(){
                this.$router.go('/jscomponents')
            },
            inpu(){
                this.$router.go('/input')
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