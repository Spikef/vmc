<template>
    <div id="popup">
        <div class="content">
            <v-button @click="showPop1 = true">从上方弹出</v-button>

            <v-button @click="showPop2 = true">从下方弹出</v-button>

            <v-button @click="showPop3 = true">从下方弹出(固定高度)</v-button>

            <v-button @click="showPop4 = true">从左边弹出</v-button>

            <v-button @click="showPop5 = true">从左边弹出(固定宽度)</v-button>

            <v-button @click="showPop6 = true">从右边弹出</v-button>

            <v-button @click="showPop7 = true">从右边弹出(固定宽度)</v-button>

            <v-button @click="back">返回主页</v-button>
        </div>

        <popup position="top" :show="showPop1" @on-hide="showPop1 = false">从顶部弹出一些提示文字</popup>

        <popup position="bottom" :show="showPop2" @on-hide="showPop2 = false">
            <div class="center-middle">
                <v-button type="success" @click="showPop2 = false">关闭弹窗</v-button>
            </div>
        </popup>

        <popup position="bottom" :show="showPop3" height="40%" @on-hide="showPop3 = false"></popup>

        <popup position="left" :show="showPop4" @on-hide="showPop4 = false">
            <div class="center-middle">
                <v-button type="success" @click="showPop4 = false">关闭弹窗</v-button>
            </div>
        </popup>

        <popup position="left" :show="showPop5" width="90%" @on-hide="showPop5 = false"></popup>

        <popup position="right" :show="showPop6" @on-hide="showPop6 = false">
            <div class="center-middle">
                <v-button type="success" @click="showPop6 = false">关闭弹窗</v-button>
            </div>
        </popup>

        <popup position="right" :show="showPop7" width="90%" @on-hide="showPop7 = false"></popup>
    </div>
</template>

<script type="es6">
    import { Navbar, vButton, Popup } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            Popup
        },
        data() {
            return {
                showPop1: false,
                showPop2: false,
                showPop3: false,
                showPop4: false,
                showPop5: false,
                showPop6: false,
                showPop7: false
            }
        },
        methods: {
            back() {
                window.history.back();
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
