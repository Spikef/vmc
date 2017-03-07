<template>
    <div class="vmc-mask"
         :class="transparent ? 'transparent' : 'black'"
         @click.stop="_onClick"
         v-stop.move>
    </div>
</template>

<script>
    export default {
        props: {
            transparent: Boolean
        },
        methods: {
            _onClick() {
                this.$emit('on-click');
            }
        }
    }
</script>