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

<style rel="stylesheet/less" lang="less">
    .vmc-row {
        padding: 0 12px;
        min-height: 45px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;

        &.left {
            justify-content: flex-start;

            > div {
                flex: 1;
            }
        }

        &:first-child:before {
            border: none;
        }

        label {
            display: block;
            min-width: 80px;
        }
    }
</style>