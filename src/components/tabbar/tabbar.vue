<template>
    <div class="vmc-tab-bar" v-show="show" :transition="'vmc-tab-bar-up'">
        <div class="tab-bar" :style="style">
            <div class="tab-item" :class="{active: $index == index}" @click="_onItemClick(item, $index)" v-for="($index, item) in items">
                <slot-item :scope="{item: item}">
                    {{{item.icon}}}
                    <span class="tab-text">{{item.text}}</span>
                </slot-item>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            index: {
                type: [Number, String],
                default: 0
            },
            show: {
                type: Boolean,
                default: true
            },
            items: {
                type: Array,
                default: () => []
            },
            color: {
                type: String,
                default: '#5e5e5e'
            },
            backColor: {
                type: String,
                default: '#000000'
            },
            fontSize: {
                type: String,
                default: '13px'
            }
        },
        methods: {
            _onItemClick(item, index) {
                if (this.index == index) return;

                this.$emit('on-item-click', item, index);

                if (item && typeof item.callback === 'function') {
                    item.callback();
                }

                this.index = index;
            }
        },
        computed: {
            style() {
                return {
                    color: this.color,
                    backgroundColor: this.backColor,
                    fontSize: this.fontSize
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-tab-bar {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 50;
        height: 55px;

        .tab-bar {
            display: flex;
            width: 100%;
            height: 100%;
        }

        .tab-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            * {
                display: block;
            }
        }

        &-up-transition, &-down-transition {
            transition: transform .2s linear;
        }

        &-up-enter, &-up-leave {
            transform: translate3d(0, 100%, 0);
        }

        &-down-enter, &-down-leave {
            transform: translate3d(0, -100%, 0);
        }
    }
</style>