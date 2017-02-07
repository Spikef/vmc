<template>
    <div id="radio">
        <navbar>单选框</navbar>

        <div class="content">
            <card>
                <child name="header">单选框列表</child>
                <child name="content">
                    <radio :checked.sync="value1" :value="item" v-for="item in list">{{item}}</radio>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ value1 }} </span>
                </child>
            </card>

            <card>
                <child name="header">可禁用的单选框列表</child>
                <child name="content">
                    <radio :checked.sync="value2" :value="item" v-for="item in list">{{item}}</radio>
                    <radio :checked.sync="value2" value="选项D" disabled>选项D</radio>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ value2 }} </span>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Radio, Card } from '../../../src';

    export default {
        components: {
            Navbar,
            Radio,
            Card
        },
        data() {
            return {
                list: ['选项A', '选项B', '选项C'],
                value1: '选项A',
                value2: '选项D'
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #radio {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
            background: #eeeeee;
        }
    }
</style>
