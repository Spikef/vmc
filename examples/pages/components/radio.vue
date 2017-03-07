<template>
    <div id="radio">
        <navbar>单选框</navbar>

        <div class="content">
            <card>
                <child name="header">单选框列表</child>
                <child name="content">
                    <radio :checked.sync="value1" :value="item" v-for="item in listA" inline>{{item}}</radio>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ value1 }} </span>
                </child>
            </card>

            <card>
                <child name="header">可禁用的单选框列表</child>
                <child name="content">
                    <radio :checked.sync="value2" :value="item" v-for="item in listA">{{item}}</radio>
                    <radio :checked.sync="value2" value="选项D" disabled>选项D</radio>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ value2 }} </span>
                </child>
            </card>

            <card>
                <child name="header">支持关联复选框列表的单选框</child>
                <child name="content" class="group-box">
                    <radio :checked.sync="value3" value="A" :child-values="listA" :child-checked.sync="list1">选择分组A</radio>
                    <checkbox :checked.sync="list1" :value="item" v-for="item in listA" class="box-item">{{item}}</checkbox>

                    <div class="separator"></div>

                    <radio :checked.sync="value3" value="B" :child-values="listB" :child-checked.sync="list2" >选择分组B</radio>
                    <checkbox :checked.sync="list2" :value="item" v-for="item in listB" class="box-item">{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ value3 }} </span>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Card, Radio, Checkbox } from 'vmc';

    export default {
        components: {
            Navbar,
            Card,
            Radio,
            Checkbox
        },
        data() {
            return {
                listA: ['选项A', '选项B', '选项C'],
                listB: ['选项1', '选项2', '选项3', '选项4'],
                list1: [],
                list2: [],
                value1: '选项A',
                value2: '选项D',
                value3: 'A'
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

            .group-box {
                .box-item {
                    margin-left: 10px;
                }

                .separator {
                    height: 15px;
                }
            }
        }
    }
</style>
