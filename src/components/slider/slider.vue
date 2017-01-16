<template>
    <div class="vmc-slider" :style="{ height: clientHeight }">
        <div v-if="tabType" class="tab-items" :class="'tab-items-' + tabType" :style="tabStyle">
            <div class="tab-item"
                 :class="{ active: tabIndex === $index }"
                 :style="tabIndex === $index ? itemActiveStyle : itemStyle"
                 @click="onTabChange($index)"
                 v-for="item in tabList">

                <slot-item name="tabItem" :scope="{item: item, index: $index}">
                    {{ item.title }}
                </slot-item>
            </div>

            <div v-if="tabType == 1" class="tab-line" :class="'tab-line-' + direction" :style="lineStyle"></div>
        </div>

        <div class="tab-pages">
            <div class="tab-page"
                 v-touch:swipeLeft="onSwipeLeft"
                 v-touch:swipeRight="onSwipeRight"
                 v-touch-options:swipe="{ direction: 'horizontal' }"
                 :class="{ active: tabIndex === $index, 'auto-height': height === 'auto' }"
                 v-show="tabIndex === $index"
                 v-for="item in tabList"
                 :transition="'tab-page-' + direction">

                <slot :name="item.name"></slot>
                <slot-item name="tabPage" :scope="{item: item, index: $index}"></slot-item>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
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
            tabStyle() {
                return {
                    borderColor: this.activeColor
                }
            },
            itemStyle() {
                switch (this.tabType) {
                    case 1:
                        return {
                            color: this.defaultColor
                        };
                    case 2:
                        return {
                            color: this.activeColor,
                            background: this.defaultColor,
                            borderColor: this.activeColor
                        };
                }
            },
            itemActiveStyle() {
                switch (this.tabType) {
                    case 1:
                        return {
                            color: this.activeColor
                        };
                    case 2:
                        return {
                            color: this.defaultColor,
                            background: this.activeColor,
                            borderColor: this.activeColor
                        };
                }
            },
            lineStyle() {
                var left = `${this.tabIndex * (100 / this.count)}%`;
                var right = `${(this.count - this.tabIndex - 1) * (100 / this.count)}%`;

                return {
                    left: left,
                    right: right,
                    display: 'block',
                    backgroundColor: this.activeColor,
                    height: this.lineWidth + 'px'
                }
            },
            clientHeight() {
                var height = this.height;
                if (height === 'auto') {

                }

                if (height && /^[^a-z]+$/i.test(height)) {
                    height += 'px';
                }

                return height;
            }
        },
        data() {
            return {
                direction: 'none'
            }
        },
        props: {
            height: [Number, String],
            tabType: {
                type: [Number, String],
                default: 1,
                coerce: parseInt
            },
            lineWidth: {
                type: [Number, String],
                default: 2,
                coerce: Number
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
                type: [Number, String],
                default: 0,
                coerce: parseInt
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
    @easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
    @effect-duration: .3s;
    @tab-items-height-1: 44px;
    @tab-items-height-2: 30px;

    .vmc-slider {
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .tab-pages {
            flex: 1;
            position: relative;
            transition: transform @effect-duration ease;

            .tab-page {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: auto;

                &.auto-height {
                    bottom: auto;
                }

                &-left-transition, &-right-transition {
                    transition: all .3s ease;
                }

                &-left-enter, &-right-leave {
                    transform: translate3d(100%, 0, 0);
                }

                &-left-leave, &-right-enter {
                    transform: translate3d(-100%, 0, 0);
                }
            }
        }
    }
</style>