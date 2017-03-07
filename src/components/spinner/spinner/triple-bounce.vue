<template>
    <div class="vmc-spinner-triple-bounce" :style="spinnerStyle">
        <div class="bounce" :class="'bounce-' + (i-1)" :style="bounceStyle" v-for="i in 3"></div>
    </div>
</template>

<script type="es6">
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            unitSize() {
                if (this.size) {
                    return Math.round(this.size / 6) * 2;
                }
            },
            spinnerStyle() {
                if (this.size) {
                    return {
                        padding: (this.size - this.unitSize) / 2 + 'px 0'
                    };
                }
            },
            bounceStyle() {
                var style = {};

                if (this.size) {
                    style.width = this.unitSize + 'px';
                    style.height = this.unitSize + 'px';
                }

                if (this.color) {
                    style.backgroundColor = this.color;
                }

                return style;
            }
        }
    };
</script>
