<template>
    <div class="vmc-spinner-fading-circle" :style="spinnerStyle">
        <div class="vmc-spinner-block" :style="blockStyle(i)" v-for="i in 12">
            <div class="vmc-spinner-circle" :style="circleStyle(i)"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import common from './common.vue';

    export default {
        mixins: [common],
        methods: {
            blockStyle(index) {
                return {
                    transform: 'rotate(' + 30 * index + 'deg)'
                }
            },
            circleStyle(index) {
                return {
                    backgroundColor: this.spinnerColor,
                    animationDelay: (1.2 / 12 * index - 1.2) + 's'
                }
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-fading-circle {
        position: relative;

        .vmc-spinner-block {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;

            .vmc-spinner-circle {
                margin: 0 auto;
                width: 15%;
                height: 15%;
                border-radius: 100%;
                animation: vmc-spinner-fading-circle 1.2s infinite ease-in-out both;
            }
        }
    }

    @keyframes vmc-spinner-fading-circle {
        0%, 39%, 100% { opacity: 0 }
        40% { opacity: 1 }
    }
</style>