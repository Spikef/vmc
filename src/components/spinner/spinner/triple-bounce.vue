<template>
    <div class="vmc-spinner-triple-bounce" :style="spinnerStyle">
        <div class="bounce" :style="bounceStyle(i)" v-for="i in 3"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            unitSize() {
                return Math.round(this.spinnerSize / 6) * 2;
            },
            spinnerStyle() {
                return {
                    padding: (this.spinnerSize - this.unitSize) / 2 + 'px 0'
                }
            }
        },
        methods: {
            bounceStyle(index) {
                var style = {
                    width: this.unitSize + 'px',
                    height: this.unitSize + 'px',
                    backgroundColor: this.spinnerColor
                };

                if (index === 0) {
                    style.animationDelay = '-0.32s';
                } else if (index === 1) {
                    style.animationDelay = '-0.16s';
                    style.margin = '0 ' + Math.round(this.unitSize * 0.4) + 'px';
                }

                return style;
            }
        }
    };
</script>