<template>
    <div class="vmc-row vmc-1px-top" :class="align">
        <label :style="style" v-if="title">{{title}}</label>
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            title: String,
            width: [String, Number],
            align: String
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