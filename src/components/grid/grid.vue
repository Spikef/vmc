<template>
    <div class="vmc-grid">
        <ul :class="{justify: justify}" :style="style"><li :style="itemStyle" v-for="(index, item) in list">
            <slot-item :scope="{index: index, item: item}"></slot-item>
        </li></ul>
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
                var columns = this.columns || 1;
                var gutter = this.gutter > 0 ? this.gutter : 0;
                var margin = this.margin > 0 ? this.margin : 0;
                var width = columns > 0 ? (100 / columns) + '%' : null;
                var padding = `${margin / 2}px ${gutter / 2}px`;

                return {
                    width: width,
                    padding: padding
                }
            },
            justify() {
                return this.columns < 0 && this.gutter < 0;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-grid {
        ul.justify {
            display: flex;
            justify-content: space-between;
        }

        li {
            display: inline-block;
            box-sizing: border-box;
            vertical-align: middle;
        }
    }
</style>