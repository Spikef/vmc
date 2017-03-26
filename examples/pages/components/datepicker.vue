<template>
    <div id="popup-picker">
        <navbar>弹出式选择器</navbar>

        <div class="content">
            <row title="请选择生日：" @click="showPop1 = true">{{value1}}</row>

            <row title="请选择学历：" @click="showPop2 = true">{{value2}}</row>

            <row title="请选择入学时间：" @click="showPop3 = true">{{value3}}</row>

            <row title="请选择所在城市：" @click="showPop4 = true">{{value4}}</row>
        </div>

        <popup-date-picker :show="showPop1" v-sync:show="showPop1" v-model="value1" tow-digit-month tow-digit-day></popup-date-picker>

        <popup-picker :list="listEdu" :show="showPop2" v-sync:show="showPop2" v-model="value2"></popup-picker>

        <popup-date-picker :show="showPop3" v-sync:show="showPop3" v-model="value3" :year="[1980, 2016]" :day="false" tow-digit-month></popup-date-picker>

        <!-- 注：该组件因为省市区数据比较大，所以并未集成到vmc中，请自动拷贝extends中的两个组件来调用 -->
        <popup-address-picker :show="showPop4" v-sync:show="showPop4" v-model="value4" :area="false"></popup-address-picker>
    </div>
</template>

<script type="es6">
    import { Navbar, vButton, PopupPicker, PopupDatePicker, Row } from 'vmc';
    import PopupAddressPicker from '../extends/popup-address-picker.vue';

    export default {
        components: {
            Navbar,
            vButton,
            PopupPicker,
            PopupDatePicker,
            PopupAddressPicker,
            Row
        },
        data() {
            return {
                showPop1: false,
                showPop2: false,
                showPop3: false,
                showPop4: false,
                value1: '2016-12-31',
                value2: '',
                value3: '',
                value4: '天津市 天津市郊县',
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
