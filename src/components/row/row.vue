<template>
    <div class="vmc-row vmc-1px-top" :class="align">
        <label :style="style" v-if="title">{{title}}</label>
        <slot></slot>
    </div>
</template>

<script type="es6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            title: String,
            width: [Number, String],
            align: String   // left, default is space between
        },
        computed: {
            style() {
                return {
                    width: getCSSSize(this.width)
                }
            }
        }
    }
</script>
