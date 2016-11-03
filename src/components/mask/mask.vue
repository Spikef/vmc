<template>
    <div class="mask" :class="transparent ? 'transparent' : 'black'" @click.stop="_onClick" @touchmove="_stopDefault" @mousewheel="_stopDefault"></div>
</template>

<script>
    export default {
        props: {
            transparent: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            _onClick() {
                this.$emit('on-click');
            },
            _stopDefault(e) {
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
    }

    .transparent {
        background-color: transparent;
    }

    .black {
        background-color: rgba(0, 0, 0, .4);
    }
</style>