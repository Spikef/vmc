<template>
    <div id="popup-picker">
        <navbar>弹出式选择器</navbar>

        <div class="content">
            <row title="请选择生日：" @click="showPop1 = true">{{value1}}</row>

            <row title="请选择学历：" @click="showPop2 = true">{{value2}}</row>

            <row title="请选择入学时间：" @click="showPop3 = true">{{value3}}</row>
        </div>

        <popup-date-picker :show.sync="showPop1" :value.sync="value1" tow-digit-month tow-digit-day></popup-date-picker>

        <popup-picker :list="listEdu" :show.sync="showPop2" :value.sync="value2"></popup-picker>

        <popup-date-picker :show.sync="showPop3" :value.sync="value3" :year="[1980, 2016]" :day="false" tow-digit-month></popup-date-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, PopupPicker, PopupDatePicker, Row } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            PopupPicker,
            PopupDatePicker,
            Row
        },
        data() {
            return {
                showPop1: false,
                showPop2: false,
                showPop3: false,
                value1: '2016-12-31',
                value2: '',
                value3: '',
                listEdu: ['', '大专', '中专', '本科', '硕士研究生', '博士研究生']
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #popup-picker {
        .content {
            padding: 50px 0;
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
        }
    }
</style>