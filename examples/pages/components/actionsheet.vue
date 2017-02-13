<template>
    <div id="popup">
        <navbar>操作列表</navbar>

        <div class="content">
            <v-button @click="showAction1 = true">弹出ActionSheet</v-button>

            <v-button @click="showAction2 = true">弹出ActionSheet(带取消按钮)</v-button>
        </div>

        <action-sheet :show.sync="showAction1" :list="buttons"></action-sheet>

        <action-sheet :show.sync="showAction2" :list="buttons" cancel></action-sheet>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, ActionSheet } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            ActionSheet
        },
        data() {
            return {
                showAction1: false,
                showAction2: false,
                buttons: [
                    {
                        text: '拍照',
                        callback: () => {
                            this.$Toast('拍照');
                        }
                    },
                    {
                        text: '从相册中选择',
                        callback: () => {
                            this.$Toast('从相册中选择');
                        }
                    }
                ]
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #popup {
        .content {
            padding: 50px 0;
            height: 100%;
            box-sizing: border-box;
            overflow: auto;

            .vmc-button {
                margin-top: 30px;
            }
        }

        .center-middle {
            position: absolute;
            width: 100%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>