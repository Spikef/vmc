<template>
    <div id="messages">
        <navbar>Message Box</navbar>

        <div>
            <v-button @click="showAlert">打开alert提示框</v-button>

            <v-button @click="showConfirm">打开confirm提示框</v-button>

            <v-button @click="showPrompt">打开prompt提示框</v-button>

            <v-button @click="showPrompt2">打开prompt提示框2</v-button>
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
            },
            showPrompt() {
                this.$Prompt('prompt提示框', v => {
                    this.$Alert(`你输入了 ${v}`);
                }, () => {
                    this.$Alert('你点击了取消按钮');
                }, {
                    content: '请输入数字',
                    placeholder: '请输入不大于10的正整数',
                    btn1: '按钮1',
                    btn2: '按钮2',
                    validator: /^[1-9]$/
                });
            },
            showPrompt2() {
                this.$Prompt('prompt提示框', v => {
                    this.$Alert(`你输入了 ${v}`);
                }, () => {
                    this.$Alert('你点击了取消按钮');
                }, {
                    content: '请输入数字',
                    placeholder: '请输入不大于10的正整数',
                    message: '&nbsp;',
                    validator(v) {
                        if (/^[1-9]$/.test(v)) {
                            return true;
                        } else {
                            return `[${v}]不满足输入条件`;
                        }
                    }
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
