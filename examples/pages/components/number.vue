<template>
    <div id="m-input">
        <navbar>数字输入框</navbar>

        <div class="content">
            <card>
                <div name="header">请选择购买数量(1-10)</div>
                <div name="content">
                    <number v-model="value1" min="1" max="10"></number>
                </div>
                <div name="footer">
                    <span>输入的值:</span>
                    <span> {{ value1 }} </span>
                </div>
            </card>

            <card>
                <div name="header">请选择购买数量(任意正整数)</div>
                <div name="content">
                    <number v-model="value2" min="1"></number>
                </div>
                <div name="footer">
                    <span>输入的值:</span>
                    <span> {{ value2 }} </span>
                </div>
            </card>

            <card>
                <div name="header">请输入价格(0.1-10)</div>
                <div name="content">
                    <number v-model="value3" min="0.1" max="10" step="0.01" width="auto" decimal></number>
                </div>
                <div name="footer">
                    <span>输入的值:</span>
                    <span> {{ value3 }} </span>
                </div>
            </card>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Number, Card } from 'vmc';

    export default {
        components: {
            Navbar,
            Number,
            Card
        },
        data() {
            return {
                value1: 1,
                value2: 1,
                value3: 0.1
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #m-input {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
            background: #eeeeee;

            .input {
                height: 40px;
            }
        }
    }
</style>
