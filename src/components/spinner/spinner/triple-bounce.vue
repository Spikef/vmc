<template>
    <div class="vmc-spinner-triple-bounce" :style="spinnerStyle">
        <div class="vmc-spinner-bounce" :style="bounceStyle(i)" v-for="i in 3"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import common from './common.vue';

    export default {
        mixins: [common],
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

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-triple-bounce {
        font-size: 0;

        .vmc-spinner-bounce {
            border-radius: 100%;
            display: inline-block;
            animation: vmc-spinner-triple-bounce 1.4s infinite ease-in-out both;
        }
    }

    @keyframes vmc-spinner-triple-bounce {
        0%, 80%, 100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1.0);
        }
    }
</style>