<template>
    <div class="vmc-popup-wrapper">
        <mask @on-click="_onMaskClick" v-if="showMask" v-show="show" transition="vmc-popup-fade"></mask>
        <div v-show="show" class="vmc-popup" :class="'vmc-popup-' + position" :style="style" :transition="'vmc-popup-' + position">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../mask';
    import { getCSSSize } from '../../utils';

    export default {
        components: {
            Mask
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
                default: 'bottom'
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
                    this.show = false;
                }
            }
        },
        watch: {
            show(show) {
                if (this.position === 'top' && show === true) {
                    setTimeout(() => {
                        this.show = false;
                    }, 1000);
                }
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-popup {
        background: #ffffff;
        position: absolute;
        z-index: 200;

        &-left {
            top: 0;
            bottom: 0;
            left: 0;
        }

        &-right {
            top: 0;
            bottom: 0;
            right: 0;
        }

        &-top {
            top: 0;
            left: 0;
            right: 0;
            min-height: 50px;
            line-height: 50px;
            color: #ffffff;
            text-align: center;
            background: rgba(0, 0, 0, .7);
        }

        &-bottom {
            left: 0;
            right: 0;
            bottom: 0;
        }

        &-fade-transition {
            opacity: 1;
            transition: opacity .3s ease;
        }

        &-fade-enter, &-fade-leave {
            opacity: 0;
        }

        &-top-transition,
        &-right-transition,
        &-bottom-transition,
        &-left-transition {
            transition: transform .3s ease-out 100ms;
        }

        &-top-enter, &-top-leave {
            transform: translate3d(0, -100%, 0);
        }

        &-bottom-enter, &-bottom-leave {
            transform: translate3d(0, 100%, 0);
        }

        &-left-enter, &-left-leave {
            transform: translate3d(-100%, 0, 0);
        }

        &-right-enter, &-right-leave {
            transform: translate3d(100%, 0, 0);
        }
    }
</style>