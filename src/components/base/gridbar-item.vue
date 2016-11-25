<template>
    <div class="gridbar-item" :class="[selected ? activeClass : '', classIndex]" @click="onItemClick">
        <span class="right-arrow">&gt</span>
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'gridbar-item',
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

<style rel="stylesheet/less" lang="less">
    .gridbar-item {
        position:relative;
        color: #666;
        font-size: 14px;
        display:flex;
        align-items:center;
        height:40px;
        width:100%;
        padding-left:40px;
        margin-left:10px;
        border-bottom:1px solid #ddd;
        background-image: url('/src/img/1.jpg');
        background-repeat: no-repeat;
        background-position: 10px 10px;
        background-size: 20px 18px;
        background-color:#fff;
        .right-arrow{
            position:absolute;
            right:55px;
        }
    }
    .gridbar-item:hover{
        cursor: pointer;
    }
</style>