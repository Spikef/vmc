<template>
    <div id="messages">
        <navbar>Message Box</navbar>

        <div>
            <v-button @click="showAlert">打开alert提示框</v-button>

            <v-button @click="showConfirm">打开confirm提示框</v-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton } from '../../../src'

    export default {
        components: {
            Navbar,
            vButton
        },
        methods: {
            showAlert() {
                this.$Alert('alert提示框');
            },
            showConfirm() {
                this.$Confirm('confirm提示框', () => {
                    this.$Alert('你点击了确定按钮');
                }, () => {
                    this.$Alert('你点击了取消按钮');
                });
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #messages {
        .vmc-button {
            margin-top: 50px;
        }
    }
</style>
