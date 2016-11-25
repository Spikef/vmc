<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'tabbar',
        ready () {
            this.updateIndex()
        },
        methods: {
            updateIndex () {
                if (!this.$children) return;

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
                default: 1
            }
        },
        watch: {
            index (val, oldVal) {
                this.$children[oldVal].selected = false;
                this.$children[val].selected = true;
            }
        },
        data() {
            return {
                number: this.$children.length
            }
        }
    }
</script>

<style>
    .tabbar {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 55px;
        z-index: 50;
        /*transform: translate3d(0px, 0px, 1px);      !* solve z-index *!*/
        display: flex;
    }
</style>