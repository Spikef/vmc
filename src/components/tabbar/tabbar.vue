<template>
    <div class="vmc-tab-bar" v-show="show" :transition="'vmc-tab-bar-up'">
        <div class="tab-bar" :style="style">
            <div class="tab-item" :class="[{active: $index == index}, 'tab-item-' + $index]" @click="_onItemClick(item, $index)" v-for="($index, item) in items">
                <slot-item :scope="{item: item, $index: $index}">
                    {{{ _getItemIcon(item, $index) }}}
                    <span class="tab-text">{{item.text}}</span>
                </slot-item>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            index: {
                type: [Number, String],
                default: 0
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
            _onItemClick(item, index) {
                if (this.index == index) return;

                this.$emit('on-item-click', item, index);

                if (item && typeof item.callback === 'function') {
                    item.callback();
                }

                this.index = index;
            },
            _getItemIcon(item, index) {
                if (this.index == index) {
                    return item.activeIcon || item.icon;
                } else {
                    return item.icon;
                }
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
        }
    }
</script>