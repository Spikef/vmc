<template>
    <div class="vmc-spinner-double-bounce" :style="spinnerStyle">
        <div class="bounce" :style="bounceStyle(i)" v-for="i in 2"></div>
    </div>
</template>

<script>
    import common from './common.vue';

    export default {
        mixins: [common],
        methods: {
            bounceStyle(index) {
                var style = {
                    backgroundColor: this.spinnerColor
                };

                if (index === 1) {
                    style.animationDelay = '-1.0s';
                }

                return style;
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-double-bounce {
        position: relative;

        .bounce {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            opacity: 0.6;
            position: absolute;
            top: 0;
            left: 0;
            animation: vmc-spinner-double-bounce 2.0s infinite ease-in-out;
        }
    }

    @keyframes vmc-spinner-double-bounce {
        0%, 100% {
            transform: scale(0.0);
        }
        50% {
            transform: scale(1.0);
        }
    }
</style>