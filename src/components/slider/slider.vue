<template>
    <div class="vmc-slider" :style="{ height: getHeight }">
        <div class="slider-list"
             :class="{transition: transition, 'auto-height': autoHeight}"
             :style="listStyle"
             v-touch-events.prevent>

            <div class="slider-item"
                 :class="itemClass($index)"
                 :style="itemStyle($index)"
                 v-for="item in shadowList"
                 track-by="$index">

                <div class="slider-group" :style="groupStyle" v-if="multiple"><div class="slider-group-item" :style="groupItemStyle" v-for="_item in item">
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

<script type="es6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            auto: null,
            ratio: null,
            perPage: {
                type: [Number, String],
                default: 1,
                coerce: parseInt
            },
            gutter: {
                type: [Number, String]
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
                default: 'bottom',  // top or bottom or false
                coerce: String
            }
        },
        methods: {
            _onTouchStart() {
                this.dragging = true;
                this.transition = false;

                this._start_touch_timer = Date.now();
            },
            _onTouchMove(offset) {
                this.offsetWidth = this.sliderIndex * this.clientWidth - offset.x;
            },
            _onTouchEnd(offset) {
                this.dragging = false;
                this.transition = true;
                var x = Math.abs(offset.x);
                if (x >= 60) {
                    offset.x < 0 ? this.onSwipeLeft() : this.onSwipeRight();
                }

                this.offsetWidth = 0;

                var move = {x: Math.abs(offset.x), y: Math.abs(offset.y)};
                var duration = Date.now() - this._start_touch_timer;
                if (duration < 200 && move.x < 10 && move.y < 10) {
                    // 认为是点击事件
                    var index = this.sliderIndex - 1;
                    if (this.multiple) {
                        var unitWidth = this.clientWidth / this.perPage;
                        var unitIndex = Math.floor(pos.x / unitWidth);

                        index = index * this.perPage + Math.abs(unitIndex);
                    }

                    var item = this.list[index];
                    if (item) this.onSliderClick(item);
                }
            },
            onSwipeLeft() {
                if (this.sliderIndex === this.count + 1) return false;

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
                if (this.sliderIndex === 0) return false;

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
                    style.transform = 'translate3d(' + (i * this.clientWidth) + 'px, 0px, 0px)';
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
                style.transform = 'translate3d(-' + this.translateX + 'px, 0px, 0px)';

                return style;
            },
            groupStyle() {
                if (this.gutter) {
                    return {
                        margin: `0 -${this.gutter / 2}px`
                    }
                }
            },
            groupItemStyle() {
                var width = this.perPage > 0 ? (100 / this.perPage) + '%' : null;
                var style = { width };

                if (this.gutter) {
                    style.padding = `0 ${this.gutter / 2}px`;
                }

                return style;
            },
            translateX() {
                return this.offsetWidth || this.sliderIndex * this.clientWidth;
            }
        },
        data() {
            return {
                clientWidth: 0,
                transition: false,
                transitionEnd: '',
                sliderList: null,
                offsetWidth: 0,
                dragging: false
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
                        if (this.dragging) return;
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
