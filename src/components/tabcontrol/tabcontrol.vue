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

        <div class="tab-pages"
             :class="{'auto-height': autoHeight}"
             :style="pageListStyle">

            <div class="tab-page"
                 v-touch:swipeLeft="onSwipeLeft"
                 v-touch:swipeRight="onSwipeRight"
                 v-touch-options:swipe="{ direction: 'horizontal' }"
                 :class="pageClass($index)"
                 :style="pageStyle($index)"
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
        props: {
            height: [Number, String],
            tabType: {
                type: [Number, String],
                default: 1,
                coerce: parseInt
            },
            lineWidth: {
                type: [Number, String],
                coerce: Number
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
            },
            pageClass(i) {
                if (i === this.tabIndex) {
                    return 'active';
                }
            },
            pageStyle(i) {
                var style = {};

                style.width = this.clientWidth + 'px';
                if (!this.autoHeight) {
                    style.transform = 'translate(' + (i * this.clientWidth) + 'px, 0px)';
                }

                return style;
            }
        },
        computed: {
            count() {
                return this.tabList.length;
            },
            tabStyle() {
                switch (this.tabType) {
                    case 2:
                        return {
                            borderColor: this.activeColor,
                            background: this.activeColor
                        }
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
                style.transform = 'translate(-' + (this.tabIndex * this.clientWidth) + 'px, 0px)';

                return style;
            }
        },
        data() {
            return {
                clientWidth: 0,
                direction: 'none'
            }
        },
        ready() {
            this.clientWidth = this.$el.clientWidth;
        }
    }
</script>