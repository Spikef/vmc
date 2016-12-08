<template>
    <div id="radio">
        <navbar>单选框</navbar>

        <div class="content">
            <div class="check-area">
                <div class="title">单选框列表</div>

                <radio :checked.sync="value1" :value="item" v-for="item in list">{{item}}</radio>
            </div>
            <div class="check-result">
                <span>选中的项:</span>
                <span> {{ value1 }} </span>
            </div>

            <div class="check-area">
                <div class="title">可禁用的单选框列表</div>

                <radio :checked.sync="value2" :value="item" v-for="item in list">{{item}}</radio>
                <radio :checked.sync="value2" value="选项D" disabled>选项D</radio>
            </div>
            <div class="check-result">
                <span>选中的项:</span>
                <span> {{ value2 }} </span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../../src/components/navbar';
    import Radio from '../../../src/components/radio';

    export default {
        components: {
            Navbar,
            Radio
        },
        data() {
            return {
                list: ['选项A', '选项B', '选项C'],
                value1: '选项A',
                value2: '选项A'
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
        }

        .check-area {
            padding: 10px;
            background-color: #fafafa;

            .title {
                font-size: 13px;
                padding: 5px 0;
            }
        }

        .check-result {
            padding: 0 10px;
            margin: 15px 0;
            height: 40px;
            line-height: 40px;
            background-color: #fafafa;
        }
    }
</style>
