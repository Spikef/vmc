<template>
    <div class="vmc-spinner-blade" :style="spinnerStyle">
        <div class="blade" :style="bladeStyle(i)" v-for="i in 12"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import common from './common.vue';

    export default {
        mixins: [common],
        computed: {
            spinnerStyle() {
                return {
                    height: this.spinnerSize + 'px',
                    width: this.spinnerSize + 'px'
                }
            }
        },
        methods: {
            bladeStyle(index) {
                return {
                    transform: 'rotate(' + (index + 1) * 30 + 'deg) translate(0, -150%)',
                    backgroundColor: this.spinnerColor,
                    animationDelay: '-' + (20 - index) / 12 + 's'
                };
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-blade {
        position: relative;

        .blade {
            position: absolute;
            left: 44.5%;
            top: 37%;
            width: 10%;
            height: 25%;
            border-radius: ~'50% / 20%';
            animation: vmc-spinner-blade 1s linear infinite;
            animation-play-state: running;
        }
    }

    @keyframes vmc-spinner-blade {
        0% {
            opacity: 0.85;
        }
        50% {
            opacity: 0.25;
        }
        100% {
            opacity: 0.25;
        }
    }
</style>