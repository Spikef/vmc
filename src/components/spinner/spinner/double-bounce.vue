<template>
    <div class="vmc-spinner-double-bounce" :style="spinnerStyle">
        <div class="bounce" :class="'bounce-' + (i-1)" :style="bounceStyle" v-for="i in 2"></div>
    </div>
</template>

<script>
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            bounceStyle() {
                if (this.color) {
                    return {
                        backgroundColor: this.color
                    };
                }
            }
        }
    };
</script>
