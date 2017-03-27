<template>
    <div class="vmc-tab-control" :style="{ height: getHeight }">
        <div v-if="type" class="tab-items" :class="'tab-items-' + type" :style="tabStyle">
            <div class="tab-item"
                 :class="{ active: shadowIndex === $index }"
                 :style="shadowIndex === $index ? itemActiveStyle : itemStyle"
                 @click="onTabChange($index)"
                 v-for="(item, $index) in tabList">

                <slot name="tabItem" :item="item" :index="$index">
                    {{ item.title }}
                </slot>
            </div>

            <div v-if="type == 1" class="tab-line" :class="'tab-line-' + direction" :style="lineStyle"></div>
        </div>

        <div class="tab-pages"
             :class="{'auto-height': autoHeight}"
             :style="pageListStyle"
             v-touch-events>

            <div class="tab-page"
                 :class="pageClass($index)"
                 :style="pageStyle($index)"
                 v-for="(item, $index) in tabList">

                <slot :name="item.name"></slot>
                <slot name="tabPage" :item="item" :index="$index"></slot>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            height: [Number, String],
            tabType: {
                type: [Number, String],
                default: 1
            },
            lineWidth: {
                type: [Number, String]
            },
            activeColor: {
                type: String
            },
            defaultColor: {
                type: String
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
        },
        methods: {
            _onTouchMove(offset, pos, value, e) {
                var horizontal = Math.abs(offset.x) > Math.abs(offset.y);
                if (horizontal) e.preventDefault();
            },
            _onTouchEnd(offset) {
                var x = Math.abs(offset.x);
                var y = Math.abs(offset.y);
                if (x >= 60 && x > y) {
                    offset.x < 0 ? this.onSwipeLeft() : this.onSwipeRight();
                }
            },
            onTabChange(index) {
                if (this.shadowIndex === index) return;

                var direction = this.shadowIndex < index ? 'left' : 'right';
                if (this.direction !== direction) this.direction = direction;

                this.shadowIndex = index;
            },
            onSwipeLeft() {
                if (this.shadowIndex >= this.tabList.length - 1) return;

                this.direction = 'left';

                this.shadowIndex++;
            },
            onSwipeRight() {
                if (this.shadowIndex === 0) return;

                this.direction = 'right';

                this.shadowIndex--;
            },
            pageClass(i) {
                if (i === this.shadowIndex) {
                    return 'active';
                }
            },
            pageStyle(i) {
                var style = {};

                style.width = this.clientWidth + 'px';
                if (!this.autoHeight) {
                    style.transform = 'translate3d(' + (i * this.clientWidth) + 'px, 0px, 0px)';
                }

                return style;
            }
        },
        computed: {
            type() {
                return parseInt(this.tabType);
            },
            count() {
                return this.tabList.length;
            },
            tabStyle() {
                switch (this.type) {
                    case 2:
                        return {
                            borderColor: this.activeColor,
                            background: this.activeColor
                        }
                }
            },
            itemStyle() {
                switch (this.type) {
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
                switch (this.type) {
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
                var left = `${this.shadowIndex * (100 / this.count)}%`;
                var right = `${(this.count - this.shadowIndex - 1) * (100 / this.count)}%`;

                return {
                    left: left,
                    right: right,
                    backgroundColor: this.activeColor,
                    height: getCSSSize(this.lineWidth)
                }
            },
            getHeight() {
                return getCSSSize(this.height);
            },
            autoHeight() {
                return this.height === 'auto';
            },
            pageListStyle() {
                var style = {};
                style.width = (this.count + 2) * this.clientWidth + 'px';
                style.transform = 'translate3d(-' + (this.shadowIndex * this.clientWidth) + 'px, 0px, 0px)';

                return style;
            },
            shadowIndex: {
                get() {
                    return parseInt(this.localIndex);
                },
                set(index) {
                    this.localIndex = index;
                    this.$emit('on-tab-change', index);
                }
            }
        },
        data() {
            return {
                clientWidth: 0,
                direction: 'none',
                localIndex: this.tabIndex
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.clientWidth = this.$el.clientWidth;
            });
        },
        watch: {
            tabIndex(value) {
                if (value !== this.localIndex) {
                    this.localIndex = value;
                }
            }
        }
    }
</script>
