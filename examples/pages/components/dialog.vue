<template>
    <div id="dialog">
        <navbar>对话框</navbar>

        <div class="content">
            <v-button @click.native="showDialog1 = true">显示对话框1</v-button>
            <v-button @click.native="showDialog2 = true">显示对话框2</v-button>
        </div>

        <dialog-box :show="showDialog1">
            <div name="header">请点击以下按钮</div>
            <div name="content" class="multi-buttons">
                <v-button @click.native="showDialog1 = false" type="danger">关闭对话框</v-button>
                <v-button @click.native="showDialog1 = false" type="success">关闭对话框</v-button>
            </div>
        </dialog-box>

        <dialog-box :show="showDialog2">
            <div name="header">请点击以下按钮</div>
            <div name="footer">
                <v-button @click.native="showDialog2 = false" type="default">关闭对话框</v-button>
            </div>
        </dialog-box>
    </div>
</template>

<script type="es6">
    import { Navbar, vButton, DialogBox } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            DialogBox
        },
        data() {
            return {
                showDialog1: false,
                showDialog2: false
            }
        },
        methods: {
            click() {
                alert(100)
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
