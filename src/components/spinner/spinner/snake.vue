<template>
    <div class="vmc-spinner-snake" :style="spinnerStyle"></div>
</template>

<script>
    import spinner from './spinner';

    export default {
        mixins: [spinner],
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