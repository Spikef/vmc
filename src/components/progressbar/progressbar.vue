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

<script type="es6">
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
