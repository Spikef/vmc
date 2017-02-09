<template>
    <div class="vmc-spinner-snake" :style="spinnerStyle"></div>
</template>

<script>
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            spinnerStyle() {
                var style = {};

                if (this.size) {
                    var size = Math.ceil(this.size / 8);

                    style.height = this.size + 'px';
                    style.width = this.size + 'px';
                    style.borderWidth = size + 'px';
                }

                if (this.color) {
                    style.borderTopColor = this.color;
                    style.borderLeftColor = this.color;
                    style.borderBottomColor = this.color;
                }

                return style;
            }
        }
    };
</script>