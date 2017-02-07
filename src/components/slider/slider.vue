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
                 :style="itemStyle($index)"
                 v-for="item in shadowList"
                 track-by="$index">

                <div :style="groupStyle" v-if="multiple"><div class="slider-group-item" :style="groupItemStyle" v-for="_item in item">
                    <slot-item :scope="{index: index, item: _item}">
                        <img class="slider-image" :src="item.image" @click="onSliderClick(item)">
                    </slot-item>
                </div></div>

                <slot-item :scope="{item: item, index: $index}" v-else>
                    <img class="slider-image" :src="item.image" @click="onSliderClick(item)">
                    <p class="slider-title" v-if="item.title">{{item.title}}</p>
                </slot-item>
            </div>
        </div>

        <div class="slider-dots" :class="dots" v-if="dots !== 'false'">
            <i :class="{ active: sliderIndex === $index + 1 }" v-for="i in count"></i>
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
            },
            dots: {
                default: 'bottom',
                coerce: String
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

                style.width = this.clientWidth + 'px';
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
                return Math.ceil(this.list.length / this.perPage);
            },
            multiple() {
                return this.perPage > 1;
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
                    if (this.multiple) {
                        var array = [];
                        var size = this.perPage;
                        var page = Math.ceil(list.length / size);
                        for (let i=0;i<page;i++) {
                            let items = [];
                            for (let j=0;j<size;j++) {
                                let k = i * size + j;
                                if (k === list.length) break;
                                items.push(list[k]);
                            }
                            array.push(items);
                        }

                        array.unshift(array[array.length - 1]);
                        array.push(array[1]);

                        return array;
                    } else {
                        return [].concat(list[list.length - 1], list, list[0]);
                    }
                } else {
                    return [];
                }
            },
            listStyle() {
                var style = {};
                style.width = (this.count + 2) * this.clientWidth + 'px';
                style.transform = 'translate(-' + (this.sliderIndex * this.clientWidth) + 'px, 0px)';

                return style;
            },
            groupStyle() {
                if (this.gutter > 0) {
                    return {
                        margin: `0 -${this.gutter / 2}px`
                    }
                }
            },
            groupItemStyle() {
                if (this.gutter > 0) {
                    var width = this.perPage > 0 ? (100 / this.perPage) + '%' : null;
                    return {
                        width: width,
                        padding: `0 ${this.gutter / 2}px`
                    }
                }
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