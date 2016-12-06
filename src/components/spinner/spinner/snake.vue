<template>
    <div class="vmc-spinner-snake" :style="spinnerStyle"></div>
</template>

<script>
    import common from './common.vue';

    export default {
        mixins: [common],
        computed: {
            spinnerStyle() {
                var size = Math.ceil(this.spinnerSize / 8);

                return {
                    borderWidth: size + 'px',
                    borderTopColor: this.spinnerColor,
                    borderLeftColor: this.spinnerColor,
                    borderBottomColor: this.spinnerColor,
                    height: this.spinnerSize + 'px',
                    width: this.spinnerSize + 'px'
                }
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-snake {
        animation: vmc-spinner-snake 0.8s infinite linear;
        border-style: solid;
        border-color: transparent;
        border-radius: 50%;
        box-sizing: border-box;
    }

    @keyframes vmc-spinner-snake {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>