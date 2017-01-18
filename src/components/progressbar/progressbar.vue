<template>
    <div class="vmc-progressbar">
        <div class="bar-outer" :style="outerStyle">
            <div class="bar-inner">
                <div :style="innerStyle"></div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            width: [Number, String],
            value: [Number, String],
            color: String,
            backColor: String
        },
        computed: {
            outerStyle() {
                var style = {};
                if (this.width) {
                    style.height = getCSSSize(this.width);
                }
                if (this.backColor) {
                    style.background = this.backColor;
                }
                return style;
            },
            innerStyle() {
                var style = {};
                style.width = (this.value || 0) + '%';
                if (this.color) {
                    style.background = this.color;
                }
                return style;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-progressbar {
        .bar-outer {
            position: relative;
            width: 100%;
            height: 8px;
            border-radius: 100px;
            background: #b3b3b3;

            .bar-inner {
                position: absolute;
                left: -1px;
                right: -1px;
                top: 0;
                bottom: 0;

                div {
                    height: 100%;
                    border-radius: 100px;
                    background: #2db7f5;
                }
            }
        }
    }
</style>