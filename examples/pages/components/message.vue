<template>
    <div id="messages">
        <navbar>Message Box</navbar>

        <div>
            <div @click="showAlert" class="button">
                打开alert提示框
            </div>
            <div @click="showConfirm" class="button">
                打开confirm提示框
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue'

    export default {
        components: {
            Navbar
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
        .button {
            background-color: #f6f8fa;
            text-align: center;
            line-height: 50px;
            margin-top: 50px;
            border-radius: 8px;
        }
    }
</style>
