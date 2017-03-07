<template>
    <div id="shake">
        <navbar>摇一摇</navbar>

        <div>
            <v-button @click="beginListenShake">开始监听摇一摇操作</v-button>

            <v-button @click="stopListenShake">停止监听摇一摇操作</v-button>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, vButton, Utils } from 'vmc';

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
    #shake {
        .vmc-button {
            margin-top: 50px;
        }
    }
</style>
