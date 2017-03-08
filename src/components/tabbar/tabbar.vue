<!--<template>-->
    <!--<transition name="vmc-tab-bar-up">-->
        <!--<div class="vmc-tab-bar" v-show="show">-->
            <!--<div class="tab-bar" :style="style">-->
                <!--<div class="tab-item" :class="itemClass(item, $index)" @click="_onItemClick(item, $index)" v-for="(item, $index) in items">-->
                    <!--<slot name="item" :item="item" :$index="$index" v-html="_getItemHtml(item, $index)">-->
                        <!--<div v-html="_getItemHtml(item, $index)" v-virtual></div>-->
                    <!--</slot>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    <!--</transition>-->
<!--</template>-->

<script type="text/jsx">
    export default {
        props: {
            index: {
                type: [Number, String],
                default: 0,
                sync: true
            },
            show: {
                type: Boolean,
                default: true
            },
            items: {
                type: Array,
                default: () => []
            },
            color: String,
            backColor: String,
            fontSize: String
        },
        methods: {
            itemClass(item, index) {
                var classList = [
                    'tab-item-' + index
                ];

                if (this.index == index) classList.push('active');

                return classList;
            },
            _onItemClick(item, index) {
                if (this.index == index) return;

                this.$emit('on-item-click', item, index);

                if (item && typeof item.callback === 'function') {
                    item.callback();
                }
            },
            _getItemIcon(item, index) {
                if (this.index == index) {
                    return item.activeIcon || item.icon;
                } else {
                    return item.icon;
                }
            },
            _getItemHtml(item, index) {
                return this._getItemIcon(item, index) + `<span class="tab-text">${item.text}</span>`;
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
        },
        render(h) {
            var slots = this.$scopedSlots.default;
            var children = this.items.map((item, index) => {
                var props = { item, index };
                return h('div', {
                    class: ['tab-item', this.itemClass(item, index)],
                    on: {
                        click: () => this._onItemClick(item, index)
                    },
                    domProps: slots ? undefined : {
                            innerHTML: this._getItemHtml(item, index)
                        }
                }, slots ? slots(props) : []);
            });

            return (
                    <transition name="vmc-tab-bar-up">
                        <div class="vmc-tab-bar" v-show={this.show}>
                            <div class="tab-bar" style={this.style}>
                                {children}
                            </div>
                        </div>
                    </transition>
            );
        }
    }
</script>
