<template>
    <div class="vmc-spinner-fading-circle" :style="spinnerStyle">
        <div class="block" :class="'block-' + i" v-for="i in 12">
            <div class="circle" :class="'circle-' + i" :style="circleStyle"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import spinner from './spinner';

    export default {
        mixins: [spinner],
        computed: {
            circleStyle() {
                if (this.color) {
                    return {
                        backgroundColor: this.color,
                    }
                }
            }
        },
        methods: {
            blockStyle(index) {
                return {
                    transform: 'rotate(' + 30 * index + 'deg)'
                }
            },
            circleStyle(index) {
                return {
                    backgroundColor: this.spinnerColor,
                    animationDelay: (1.2 / 12 * index - 1.2) + 's'
                }
            }
        }
    };
</script>