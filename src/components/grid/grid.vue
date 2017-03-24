<template>
    <div class="vmc-grid">
        <ul :class="{justify: justify}" :style="style"><li :style="itemStyle" v-for="(item, index) in list">
            <slot :item="item" :index="index"></slot>
        </li></ul>
    </div>
</template>

<script type="es6">
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
                description: '列数，默认为1列'
            },
            gutter: {
                type: [Number, String],
                default: 0,
                description: '列与列之间的间隔'
            },
            margin: {
                type: [Number, String],
                default: 0,
                description: '行与行之间的间隔'
            }
        },
        computed: {
            coerce: {
                get() {
                    return {
                        columns: getInt(this.columns),
                        gutter: getInt(this.gutter),
                        margin: getInt(this.margin)
                    }
                }
            },
            style() {
                var gutter = this.coerce.gutter > 0 ? this.coerce.gutter : 0;
                var margin = this.coerce.margin > 0 ? this.coerce.margin : 0;
                var margins = `-${margin / 2}px -${gutter / 2}px`;

                return {
                    margin: margins
                }
            },
            itemStyle() {
                var columns = this.coerce.columns || 1;
                var gutter = this.coerce.gutter > 0 ? this.coerce.gutter : 0;
                var margin = this.coerce.margin > 0 ? this.coerce.margin : 0;
                var width = columns > 0 ? (100 / columns) + '%' : null;
                var padding = `${margin / 2}px ${gutter / 2}px`;

                return {
                    width: width,
                    padding: padding
                }
            },
            justify() {
                return this.coerce.columns < 0 && this.coerce.gutter < 0;
            }
        }
    }
</script>
