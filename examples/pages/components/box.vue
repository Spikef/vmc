<template>
    <div id="box">
        <navbar>占位框</navbar>

        <div class="content">
            <box ratio="0.4">高宽比为0.4的盒子</box>

            <box ratio="0.4">
                <img src="/static/image/box/700×300.png">
            </box>

            <box ratio="0.4" background="#2db7f5">高宽比为0.4的盒子，带背景色</box>

            <box ratio="0.4" background="/static/image/box/700×300.png"></box>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Box } from '../../../src';

    export default {
        components: {
            Navbar,
            Box
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #box {
        .content {
            background: #eeeeee;
            height: 100%;
            box-sizing: border-box;
            overflow: scroll;
        }

        .vmc-box {
            background: #ffffff;
            margin-bottom: 20px;

            .vmc-box-content {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>