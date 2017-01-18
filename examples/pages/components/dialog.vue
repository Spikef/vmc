<template>
    <div id="dialog">
        <navbar>对话框</navbar>

        <div class="content">
            <v-button @click="showDialog1 = true">显示对话框1</v-button>
            <v-button @click="showDialog2 = true">显示对话框2</v-button>
        </div>

        <dialog :show="showDialog1">
            <child name="header">请点击以下按钮</child>
            <child name="content" class="multi-buttons">
                <v-button @click="showDialog1 = false" type="danger">关闭对话框</v-button>
                <v-button @click="showDialog1 = false" type="success">关闭对话框</v-button>
            </child>
        </dialog>

        <dialog :show="showDialog2">
            <child name="header">请点击以下按钮</child>
            <child name="footer">
                <v-button @click="showDialog2 = false" type="default">关闭对话框</v-button>
            </child>
        </dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, Dialog } from '../../../src';

    export default {
        components: {
            Navbar,
            vButton,
            Dialog
        },
        data() {
            return {
                showDialog1: false,
                showDialog2: false
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #dialog {
        .content {
            .vmc-button {
                margin-top: 50px;
            }
        }

        .multi-buttons {
            .vmc-button:first-child {
                margin-bottom: 10px;
            }
        }
    }
</style>