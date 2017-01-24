<template>
    <div class="vmc-tab-control" :style="{ height: getHeight }">
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

        <div class="tab-pages" :class="{ 'auto-height': autoHeight }">
            <div class="tab-page"
                 v-touch:swipeLeft="onSwipeLeft"
                 v-touch:swipeRight="onSwipeRight"
                 v-touch-options:swipe="{ direction: 'horizontal' }"
                 :class="{ active: tabIndex === $index }"
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
    import { getCSSSize } from '../../utils';

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
                var style = {
                    borderColor: this.activeColor
                };
                if (this.tabType === 2) {
                    style.background = this.activeColor;
                }
                return style;
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
                    height: getCSSSize(this.lineWidth)
                }
            },
            getHeight() {
                return getCSSSize(this.height);
            },
            autoHeight() {
                return this.height === 'auto';
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

    .vmc-tab-control {
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .tab-items {
            transform: translateZ(0);
            position: relative;
            overflow:hidden;
            display: flex;

            .tab-item {
                display: block;
                flex: 1;
                width: 0%;
                height: 100%;
                box-sizing: border-box;
                background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
                background-size: 100% 1px;
                font-size: 14px;
                text-align: center;
            }

            .tab-line {
                position: absolute;
                bottom: 0;

                &-left {
                    transition: right @effect-duration @easing-in-out,
                    left @effect-duration @easing-in-out @effect-duration * 0.3;
                }
                &-right {
                    transition: right @effect-duration @easing-in-out @effect-duration * 0.3,
                    left @effect-duration @easing-in-out;
                }
            }
        }

        .tab-items-1 {
            height: @tab-items-height-1;
            background-color: #ffffff;

            .tab-item {
                line-height: @tab-items-height-1;
            }
        }

        .tab-items-2 {
            height: @tab-items-height-2;
            border: 2px solid;
            border-radius: 6px;

            .tab-item {
                line-height: @tab-items-height-2;
                border-left: 1px solid;
                border-right: 1px solid;

                &:first-child {
                    border-left: none;
                }
                &:last-child {
                    border-right: none;
                }
            }
        }

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

            &.auto-height {
                .tab-page {
                    position: relative;
                    float: left;
                    width: 100%;
                }
            }
        }
    }
</style>