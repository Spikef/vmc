<template>
    <popup :show.sync="show" :hide-on-mask="hideOnMask" height="auto" class="vmc-action-sheet">
        <v-button class="vmc-1px-top"
                  @click="_onItemClick(item, $index)"
                  v-for="item in list">

            {{_getText(item)}}
        </v-button>

        <v-button class="vmc-1px-top cancel"
                  @click="show = false"
                  v-if="cancel">

            {{cancelText}}
        </v-button>
    </popup>
</template>

<script type="text/ecmascript-6">
    import Popup from '../popup';
    import vButton from '../button';

    export default {
        components: {
            Popup,
            vButton
        },
        props: {
            list: Array,
            show: Boolean,
            cancel: Boolean,
            cancelText: {
                type: String,
                default: '取消'
            },
            hideOnMask: {
                default: true
            }
        },
        methods: {
            _onItemClick(item, index) {
                this.show = false;

                this.$nextTick(() => {
                    this.$emit('on-item-click', item, index);

                    if (item && typeof item.callback === 'function') {
                        item.callback();
                    }
                });
            },
            _getText(item) {
                return item.text || item;
            }
        }
    }
</script>