<template>
    <div class="sk tab-control">
        <slot name="tab-buttons">
            <tab v-if="showHeader" class="tab-buttons" :line-width="lineWidth" :active-color="activeColor" :default-color="defaultColor">
                <tab-item :selected="tabIndex === $index" v-for="item in tabList" @click="onTabChange($index)">
                    {{item.title}}
                </tab-item>
            </tab>
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
    import { Tab, TabItem } from 'vux-components/tab';

    export default {
        components: {
            Tab,
            TabItem
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
        data() {
            return {
                direction: 'none'
            }
        },
        props: {
            showHeader: {
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
    .sk.tab-control {
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