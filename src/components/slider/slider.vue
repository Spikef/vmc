<template>
    <div class="vmc-slider" :style="{ height: getHeight }">
        <div class="slider-list"
             :class="{transition: transition, 'auto-height': autoHeight}"
             :style="listStyle">

            <div class="slider-item"
                 v-touch:swipeLeft="onSwipeLeft"
                 v-touch:swipeRight="onSwipeRight"
                 v-touch-options:swipe="{ direction: 'horizontal' }"
                 :class="itemClass($index)"
                 :style="[itemStyle($index), {width: clientWidth + 'px'}]"
                 v-for="item in shadowList"
                 track-by="$index">

                <slot-item :scope="{item: item, index: $index}">
                    <img class="slider-image" :src="item.image" @click="onSliderClick(item)">
                    <p class="slider-title" v-if="item.title">{{item.title}}</p>
                </slot-item>
            </div>
        </div>

        <div class="slider-dots">
            <i :class="{ active: sliderIndex === $index + 1 }" v-for="item in list"></i>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            auto: null,
            ratio: null,
            perPage: {
                type: [String, Number],
                default: 1,
                coerce: parseInt
            },
            gutter: {
                type: [String, Number],
                default: 2
            },
            height: {
                type: [Number, String],
                default: 'auto'
            },
            sliderIndex: {
                type: [Number, String],
                default: 1,
                coerce: parseInt
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            onSwipeLeft() {
                if (this.sliderIndex === this.count + 1) return;

                this.sliderIndex++;

                if (this.sliderIndex === this.count + 1) {
                    if (this.transitionEnd) {
                        this.sliderList.addEventListener(this.transitionEnd, this.resetIndex);
                    } else {
                        this.resetIndexLow();
                    }
                }
            },
            onSwipeRight() {
                if (this.sliderIndex === 0) return;

                this.sliderIndex--;

                if (this.sliderIndex === 0) {
                    if (this.transitionEnd) {
                        this.sliderList.addEventListener(this.transitionEnd, this.resetIndex);
                    } else {
                        this.resetIndexLow();
                    }
                }
            },
            onSliderClick(item) {
                if (item.link) {
                    window.location = item.link;
                } else {
                    this.$emit('on-item-click', item, this.sliderIndex);
                }
            },
            itemClass(i) {
                var classList = [];
                if (i === 0 || i === this.count + 1) {
                    classList.push('shadow');
                } else if (i === this.sliderIndex) {
                    classList.push('active');
                }

                return classList;
            },
            itemStyle(i) {
                var style = {};

                if (!this.autoHeight) {
                    style.transform = 'translate(' + (i * this.clientWidth) + 'px, 0px)';
                }

                return style;
            },
            resetIndex() {
                this.sliderList.removeEventListener(this.transitionEnd, this.resetIndex);

                var index = this.sliderIndex === 0 ? this.count : 1;

                this.transition = false;
                this.sliderIndex = index;
                this.$nextTick(() => {
                    // 解决在安卓机上切换时候仍然有动画的问题
                    setTimeout(() => {
                        this.transition = true;
                    }, 0);
                });
            },
            resetIndexLow() {
                var index = this.sliderIndex === 0 ? this.count : 1;

                setTimeout(() => {
                    this.transition = false;
                    this.sliderIndex = index;
                    this.$nextTick(() => {
                        // 解决在安卓机上切换时候仍然有动画的问题
                        setTimeout(() => {
                            this.transition = true;
                        }, 0);
                    });
                }, 400);
            }
        },
        computed: {
            count() {
                return this.list.length;
            },
            getHeight() {
                return getCSSSize(this.height);
            },
            autoHeight() {
                return this.height === 'auto';
            },
            shadowList() {
                var list = this.list;
                if (list.length) {
                    return [].concat(list[list.length - 1], list, list[0]);
                } else {
                    return [];
                }
            },
            listStyle() {
                var style = {};
                style.width = (this.count + 2) * this.clientWidth + 'px';
                style.transform = 'translate(-' + (this.sliderIndex * this.clientWidth) + 'px, 0px)';

                return style;
            }
        },
        data() {
            return {
                clientWidth: 0,
                transition: false,
                transitionEnd: '',
                sliderList: null
            }
        },
        ready() {
            this.clientWidth = this.$el.clientWidth;
            this.sliderList = this.$el.querySelector('.slider-list');

            if (this.ratio) {
                var ratio = Number(this.ratio);
                if (ratio > 0) {
                    this.height = this.clientWidth * ratio;
                }
            }

            var trans = {
                'transition':'transitionend',
                'OTransition':'oTransitionEnd',
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            };

            for (let i in trans) {
                if (this.sliderList.style[i] !== undefined) {
                    this.transitionEnd = trans[i];
                    break;
                }
            }

            this.$nextTick(() => {
                this.transition = true;
            });

            if (this.auto) {
                var interval = Number(this.auto);
                if (!isNaN(interval)) {
                    interval = interval * 1000;
                    this.timer = setInterval(() => {
                        this.onSwipeLeft();
                    }, interval);
                }
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-slider {
        height: auto;
        box-sizing: border-box;
        overflow-x: hidden;
        position: relative;

        .slider-list {
            height: 100%;
            position: absolute;

            &.transition {
                transition: transform .3s linear;
            }

            .slider-item {
                position: absolute;
                height: 100%;

                .slider-image {
                    display: block;
                    width: 100%;
                    height: 100%;
                }

                .slider-title {
                    background-color: rgba(0,0,0,.7);
                    position: absolute;
                    bottom: 0;
                    padding: 10px;
                    width: 100%;
                    color: #fff;
                    font-size: 14px;
                }
            }

            &.auto-height {
                position: relative;

                &:after {
                    content: "";
                    display: block;
                    height: 0;
                    clear: both;
                    visibility: hidden;
                }

                .slider-item {
                    float: left;
                    position: relative;
                }
            }
        }

        .slider-dots {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0);
            font-size: 0;

            i {
                display: inline-block;
                border-radius: 50%;
                width: 6px;
                height: 6px;
                margin: 8px 3px;
                background: #d0cdd1;
                vertical-align: middle;

                &.active {
                    background: #323232;
                }
            }
        }
    }
</style>