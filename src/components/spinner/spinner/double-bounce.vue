<template>
    <div class="vmc-spinner-double-bounce" :style="spinnerStyle">
        <div class="bounce" :style="bounceStyle(i)" v-for="i in 2"></div>
    </div>
</template>

<script>
    import spinner from './spinner';

    export default {
        mixins: [spinner],
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