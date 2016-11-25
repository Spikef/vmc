<template>
    <div class="tabbar-item" :class="[selected ? activeClass : '', classIndex]" @click="onItemClick">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'tabbar-item',
        props: {
            selected: {
                type: Boolean,
                default: false
            },
            activeClass: {
                type: String,
                default: 'active'
            }
        },
        ready () {
            this.$parent.updateIndex()
        },
        beforeDestroy () {
            const $parent = this.$parent;
            this.$nextTick(() => {
                $parent.updateIndex()
            })
        },
        methods: {
            onItemClick () {
                this.selected = true;
                this.$parent.index = this.index;
                this.$emit('on-item-click', this.index);
            },
            jump(page){
                this.$router.forward('page');
            }
        },
        watch: {
            selected (val) {
                if (val) {
                    this.$parent.index = this.index;
                }
            }
        },
        data () {
            return {
                index: -1
            }
        },
        computed: {
            classIndex() {
                return 'item_' + this.index;
            }
        }
    }
</script>

<style>
    .tabbar-item {
        display: block;
        flex: 1;
        width: 0;
    }
</style>