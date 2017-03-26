<template>
    <div id="popup-picker">
        <navbar>弹出式选择器</navbar>

        <div class="content">
            <row title="请选择手机品牌：" @click="showPop1 = true">{{value1}}</row>

            <row title="请选择手机型号：" @click="showPop2 = true">{{value2}}</row>
        </div>

        <popup-picker :show="showPop1" v-sync:show="showPop1" :list="list1" v-model="value1"></popup-picker>

        <popup-picker :show="showPop2" v-sync:show="showPop2" :list="list2" v-model="value2"></popup-picker>
    </div>
</template>

<script type="es6">
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
                showPop1: false,
                showPop2: false,
                showPop3: false,
                showPop4: false,
                showPop5: false,
                showPop6: false,
                showPop7: false,
                value1: '步步高',
                value2: '',
                list1: ['苹果', '小米', '魅族', '华为', '三星', '步步高', '诺基亚'],
                list2: [],
                list: [
                    ['苹果', '魅族'],
                    [
                        {
                            value: 'iPhone4',
                            parentId: 0
                        },
                        {
                            value: 'iPhone5',
                            parentId: 0
                        },
                        {
                            value: 'iPhone6',
                            parentId: 0
                        },
                        {
                            value: 'iPhone6S',
                            parentId: 0
                        },
                        {
                            value: 'iPhone7',
                            parentId: 0
                        },
                        {
                            value: 'iPhone7S',
                            parentId: 0
                        },
                        {
                            value: 'MX2',
                            parentId: 1
                        },
                        {
                            value: 'MX4',
                            parentId: 1
                        },
                        {
                            value: 'MX5',
                            parentId: 1
                        }
                    ]
                ]
            }
        },
        mounted() {
            // 模拟异步加载数据的情况
            setTimeout(() => {
                this.list2 = this.list;
                this.value2 = '魅族 MX4';
            }, 1000);
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
