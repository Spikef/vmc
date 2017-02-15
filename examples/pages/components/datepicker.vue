<template>
    <div id="popup-picker">
        <navbar>弹出式选择器</navbar>

        <div class="content">
            <row title="请选择生日：" @click="showPop1 = true">{{value1}}</row>

            <row title="请选择手机型号：" @click="showPop2 = true">{{value2}}</row>
        </div>

        <popup-date-picker :show.sync="showPop1" :value.sync="value1" :day="false"></popup-date-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, PopupDatePicker, Row } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            PopupDatePicker,
            Row
        },
        data() {
            return {
                showPop1: false,
                showPop2: false,
                value1: '2016-12-31'
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