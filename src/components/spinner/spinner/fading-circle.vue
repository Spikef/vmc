<template>
    <div class="vmc-spinner-fading-circle" :style="spinnerStyle">
        <div v-for="n in 12" :class="['is-circle' + (n + 1)]" class="vmc-spinner-fading-circle-circle"></div>

        <div class="vmc-spinner-block" v-for="i in 12">
            <div class="vmc-spinner-circle" :style="circleStyle(i)"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import common from './common.vue';

    export default {
        mixins: [common],

    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-spinner-fading-circle {
        position: relative;

        .vmc-spinner-block {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;

            .vmc-spinner-circle {

            }
        }
    }

    @keyframes vmc-spinner-fading-circle {
        0%, 39%, 100% { opacity: 0 }
        40% { opacity: 1 }
    }
</style>