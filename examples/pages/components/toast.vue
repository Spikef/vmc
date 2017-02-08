<template>
    <div id="toast">
        <navbar>消息提示</navbar>

        <div class="content">
            <v-button type="success" @click="loading()">显示loading状态(手动关闭)</v-button>
            <v-button type="success" @click="$Loading('3秒后自动关闭', 3)">显示loading状态(自动关闭)</v-button>
            <v-button type="success" @click="$Success('操作成功')">显示成功状态</v-button>
            <v-button type="success" @click="$Error('操作失败')">显示失败状态</v-button>
            <v-button type="success" @click="$Toast('上方文字提示', 'top')">显示文字提示(上方)</v-button>
            <v-button type="success" @click="$Toast('中间文字提示')">显示文字提示(中间)</v-button>
            <v-button type="success" @click="$Toast('下方文字提示', 'bottom')">显示文字提示(下方)</v-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton } from '../../../src';

    export default {
        components: {
            Navbar,
            vButton
        },
        methods: {
            loading() {
                this.$Loading();

                setTimeout(() => {
                    this.$Loading.done();
                }, 3000);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #toast {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;

            .vmc-button {
                margin-top: 15px;
            }
        }
    }
</style>