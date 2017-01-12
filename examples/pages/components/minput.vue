<template>
    <div id="m-input">
        <navbar>文本框</navbar>

        <div class="content">
            <card>
                <child name="header">只能输入整数(0-10)</child>
                <child name="content">
                    <div class="input">
                        <m-input type="integer" :value.sync="value1" min="0" max="10"></m-input>
                    </div>
                </child>
                <child name="footer">
                    <span>输入的值:</span>
                    <span> {{ value1 }} </span>
                </child>
            </card>

            <card>
                <child name="header">只能输入小写字母(最长12位)</child>
                <child name="content">
                    <div class="input">
                        <m-input type="alphabet" :value.sync="value2" max="12"></m-input>
                    </div>
                </child>
                <child name="footer">
                    <span>输入的值:</span>
                    <span> {{ value2 }} </span>
                </child>
            </card>

            <card>
                <child name="header">只能输入大写字母(最长12位)</child>
                <child name="content">
                    <div class="input">
                        <m-input type="ALPHABET" :value.sync="value3" max="12"></m-input>
                    </div>
                </child>
                <child name="footer">
                    <span>输入的值:</span>
                    <span> {{ value3 }} </span>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, mInput, Card } from '../../../src';

    export default {
        components: {
            Navbar,
            mInput,
            Card
        },
        data() {
            return {
                value1: '',
                value2: '',
                value3: ''
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