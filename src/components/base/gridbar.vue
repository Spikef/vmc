<template>
    <gridbar-item class="gridbar">
        <slot></slot>
    </gridbar-item>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'gridbar',
        ready () {
            this.updateIndex()
        },
        methods: {
            updateIndex () {
                if (!this.$children) return;

                this.number = this.$children.length;
                let children = this.$children;
                for (let i = 0; i < children.length; i++) {
                    children[i].index = i;
                    if (children[i].selected) {
                        this.index = i
                    }
                }
            }
        },
        props: {
            index: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                number: this.$children.length
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .gridbar {
        background-color:#fff;
    }
</style>


