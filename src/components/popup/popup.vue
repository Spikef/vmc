<template>
    <div class="vmc-popup-wrapper">
        <transition name="vmc-popup-fade">
            <overlay @on-click="_onMaskClick" v-if="showMask" v-show="localShow"></overlay>
        </transition>

        <transition :name="'vmc-popup-' + position">
            <div v-show="localShow" class="vmc-popup" :class="'vmc-popup-' + position" :style="style">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script type="es6">
    import Overlay from '../overlay';
    import { getCSSSize } from '../../utils';

    export default {
        components: {
            Overlay
        },
        props: {
            show: Boolean,
            mask: {
                default: null
            },
            height: {
                default: null
            },
            width: {
                default: '100%'
            },
            hideOnMask: {
                default: true
            },
            position: {
                type: String,
                default: 'bottom'       // top, left, right, bottom
            }
        },
        computed: {
            style() {
                return {
                    width: getCSSSize(this.width),
                    height: getCSSSize(this.getHeight)
                }
            },
            getHeight() {
                if (this.height !== null) {
                    return this.height;
                }

                switch (this.position) {
                    case 'top': return 'auto';
                    default: return '100%';
                }
            },
            showMask() {
                var mask = this.mask;
                if (mask !== null) {
                    return mask;
                }

                switch (this.position) {
                    case 'top': return false;
                    default: return true;
                }
            }
        },
        methods: {
            _onMaskClick() {
                if (this.hideOnMask) {
                    this._hide();
                }
            },
            _hide() {
                this.localShow = false;
                this.$emit('on-hide');
                this.$emit('on-sync-show', false);
            }
        },
        data() {
            return {
                localShow: this.show
            }
        },
        watch: {
            show(show) {
                if (this.localShow !== show) {
                    this.localShow = show;
                }

                if (this.position === 'top' && show === true) {
                    setTimeout(() => {
                        this._hide();
                    }, 1000);
                }
            }
        }
    };
</script>
