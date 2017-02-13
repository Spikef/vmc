<template>
    <div id="popup-picker">
        <navbar>弹出式选择器</navbar>

        <div class="content">
            <row title="请选择手机品牌：" @click="showPop1 = true">{{value1}}</row>

            <row title="请选择手机型号：" @click="showPop2 = true">{{value2}}</row>
        </div>

        <popup-picker :show.sync="showPop1" :list="list1" :value.sync="value1"></popup-picker>

        <popup-picker :show.sync="showPop2" :list="list2" :value.sync="value2"></popup-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vButton, PopupPicker, Row } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            PopupPicker,
            Row
        },
        data() {
            return {
                value: null,
                showPop1: false,
                showPop2: false,
                showPop3: false,
                showPop4: false,
                showPop5: false,
                showPop6: false,
                showPop7: false,
                value1: '步步高',
                value2: '魅族 MX2',
                list1: ['苹果', '小米', '魅族', '华为', '三星', '步步高', '诺基亚'],
                list2: [
                    ['苹果', '魅族'],
                    [
                        {
                            value: 'iPhone4',
                            parentId: '苹果'
                        },
                        {
                            value: 'iPhone5',
                            parentId: '苹果'
                        },
                        {
                            value: 'iPhone6',
                            parentId: '苹果'
                        },
                        {
                            value: 'iPhone6S',
                            parentId: '苹果'
                        },
                        {
                            value: 'iPhone7',
                            parentId: '苹果'
                        },
                        {
                            value: 'iPhone7S',
                            parentId: '苹果'
                        },
                        {
                            value: 'MX2',
                            parentId: '魅族'
                        }
                    ]
                ],
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