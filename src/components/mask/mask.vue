<template>
    <div class="vmc-mask"
         :class="transparent ? 'transparent' : 'black'"
         @click.stop="_onClick"
         @touchmove="_stopDefault"
         @mousewheel="_stopDefault">
    </div>
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