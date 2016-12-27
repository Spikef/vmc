<template>
    <div class="vmc-grid">
        <div :style="style"><div class="grid-item" v-for="(index, item) in list" :style="itemStyle">
            <slot-item :scope="{index: index, item: item}"></slot-item>
        </div></div>
    </div>
</template>

<script type="text/ecmascript-6">
    const getInt = function (val) {
        switch (val) {
            case 'auto':
                return -1;
            case 'none':
                return 0;
            case undefined:
                return 0;
            default:
                return parseInt(val) || 0;
        }
    };

//    const getInt = function (val, min, max) {
//        val = parseInt(val) || 0;
//        if (typeof min === 'number') {
//            val = Math.max(val, parseInt(min));
//        }
//        if (typeof max === 'number') {
//            val = Math.min(val, parseInt(max));
//        }
//        return val;
//    };

    export default {
        props: {
            list: {
                type: Array,
                default: () => [],
                description: '数据列表'
            },
            columns: {
                type: [Number, String],
                default: 0,
                coerce: getInt,
                description: '列数，默认为1列'
            },
            gutter: {
                type: [Number, String],
                default: 0,
                coerce: getInt,
                description: '列与列之间的间隔'
            },
            margin: {
                type: [Number, String],
                default: 0,
                coerce: getInt,
                description: '行与行之间的间隔'
            }
        },
        computed: {
            style() {
                var gutter = this.gutter > 0 ? this.gutter : 0;
                var margin = this.margin > 0 ? this.margin : 0;
                var margins = `-${margin / 2}px -${gutter / 2}px`;

                return {
                    margin: margins
                }
            },
            itemStyle() {
                var columns = this.columns != 0 ? this.columns : 1;
                var gutter = this.gutter > 0 ? this.gutter : 0;
                var margin = this.margin > 0 ? this.margin : 0;
                var width = columns > 0 ? (100 / columns) + '%' : null;
                var padding = `${margin / 2}px ${gutter / 2}px`;

                return {
                    width: width,
                    padding: padding
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-grid {
        .grid-item {
            display: inline-block;
            box-sizing: border-box;
        }
    }
</style>