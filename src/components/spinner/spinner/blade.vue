<template>
    <div class="vmc-spinner-blade" :style="spinnerStyle">
        <div class="blade" :class="'blade-' + (i-1)" :style="bladeStyle" v-for="i in 12"></div>
    </div>
</template>

<script type="es6">
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            bladeStyle() {
                if (this.color) {
                    return {
                        backgroundColor: this.color,
                    };
                }
            }
        }
    };
</script>
