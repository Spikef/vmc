<template>
    <div class="vmc-spinner-blade" :style="spinnerStyle">
        <div class="blade" :style="bladeStyle(i)" v-for="i in 12"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import spinner from './spinner';

    export default {
        mixins: [spinner],
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