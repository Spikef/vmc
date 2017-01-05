<template>
    <div class="vmc-tab-control">
        <slot name="tab-buttons">
            <div v-if="showTab" class="tab-buttons" :class="{'vux-tab-no-animate': !animate}">
                <div class="tab-item" @click="onTabChange($index)" v-for="item in tabList">
                    <slot-item :scope="{item: item, index: $index}" >
                        {{item.title}}
                    </slot-item>
                </div>

                <div v-if="animate" class="tab-line" :class="lineClass" :style="lineStyle"></div>
            </div>
        </slot>

        <div class="tab-pages">
            <div class="tab-page"
                 v-touch:swipeLeft="onSwipeLeft"
                 v-touch:swipeRight="onSwipeRight"
                 v-touch-options:swipe="{ direction: 'horizontal' }"
                 :class="tabIndex === $index ? 'active' : ''"
                 v-if="tabIndex === $index"
                 v-for="item in tabList"
                 :transition="direction">
                <slot :name="item.name"></slot>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
//    import { Tab, TabItem } from 'vux-components/tab';

    export default {
        components: {
//            Tab,
//            TabItem
        },
        methods: {
            onTabChange(index) {
                if (this.tabIndex === index) return;

                var direction = this.tabIndex < index ? 'left' : 'right';
                if (this.direction !== direction) this.direction = direction;

                this.tabIndex = index;

                this.$emit('on-tab-change', this.tabIndex);
            },
            onSwipeLeft() {
                if (this.tabIndex >= this.tabList.length - 1) return;

                this.direction = 'left';

                this.tabIndex++;

                this.$emit('on-tab-change', this.tabIndex);
            },
            onSwipeRight() {
                if (this.tabIndex === 0) return;

                this.direction = 'right';

                this.tabIndex--;

                this.$emit('on-tab-change', this.tabIndex);
            }
        },
        computed: {
            count() {
                return this.tabList.length;
            },
            lineLeft () {
                return `${this.tabIndex * (100 / this.count)}%`
            },
            lineRight () {
                return `${(this.count - this.tabIndex - 1) * (100 / this.count)}%`
            },
            lineStyle () {
                return {
                    left: this.lineLeft,
                    right: this.lineRight,
                    display: 'block',
                    backgroundColor: this.activeColor,
                    height: this.lineWidth + 'px',
//                    transition: !this.hasReady ? 'none' : null
                }
            },
            lineClass () {
                return {
                    'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
                    'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
                }
            }
        },
        data() {
            return {
                direction: 'none'
            }
        },
        props: {
            showTab: {
                type: Boolean,
                default: true
            },
            lineWidth: {
                type: Number,
                default: 2
            },
            activeColor: {
                type: String,
                default: '#000000'
            },
            defaultColor: {
                type: String,
                default: '#b2b2b2'
            },
            animate: {
                type: Boolean,
                default: true
            },
            tabIndex: {
                type: Number,
                default: 0
            },
            tabList: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-tab-control {
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .tab-buttons {
            transform: translateZ(0);
        }

        .tab-pages {
            position: relative;
            flex: 1;
        }

        .tab-page {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
        }

        /*转场动画*/
        .left-transition {
            transition: all .3s ease;
        }

        .right-transition {
            transition: all .3s ease;
        }

        .left-enter {
            transform: translate3d(100%, 0, 0);
        }

        .left-leave {
            transform: translate3d(-100%, 0, 0);
        }

        .right-enter {
            transform: translate3d(-100%, 0, 0);
        }

        .right-leave {
            transform: translate3d(100%, 0, 0);
        }
    }
</style>