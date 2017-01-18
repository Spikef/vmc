<template>
    <div id="popup">
        <navbar>Message Box</navbar>

        <div>
            <v-button @click="beginListenShake">开始监听晃动</v-button>

            <v-button @click="stopListenShake">停止监听晃动</v-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, Utils } from '../../../src';

    export default {
        components: {
            Navbar,
            vButton
        },
        methods: {
            beginListenShake() {
                Utils.device.shake(() => {
                    this.$Toast('你晃动了屏幕哟');
                });
            },
            stopListenShake() {
                Utils.device.shake.remove();
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #popup {
        .vmc-button {
            margin-top: 50px;
        }
    }
</style>