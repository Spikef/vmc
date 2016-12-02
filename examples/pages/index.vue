<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>
            <div class="line vmc-1px-top">
                radio
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top">
                checkbox
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top-bottom">
                input
                <i class="icono-caretRight"></i>
            </div>
            <div class="title">提示组件</div>
            <div class="line vmc-1px-top">
                alert
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top">
                confirm
                <i class="icono-caretRight"></i>
            </div>
            <div class="line vmc-1px-top-bottom">
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