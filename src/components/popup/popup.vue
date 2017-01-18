<template>
    <div v-show="show" class="vmc-popup" :class="'vmc-popup-' + position" :transition="">
        <mask></mask>
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../mask';

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
                default: 'auto'
            },
            hideOnMask: {
                default: true
            },
            popupTransition: {
                type: String,
                default: 'popup-slide'
            },
            direction: {
                type: String,
                default: 'up'
            }
        },
        computed: {
            showMask() {
                var mask = this.mask;
                if (typeof mask === 'boolean') {
                    return mask;
                }

                switch (this.direction) {
                    case 'down': return false;
                    default: return true;
                }
            }
        }
    };
</script>

<style rel="stylesheet/less" lang="less">
    /*@component-namespace mint {*/
        /*@component popup {*/
            /*position: fixed;*/
            /*background: #fff;*/
            /*top: 50%;*/
            /*left: 50%;*/
            /*transform: translate3d(-50%, -50%, 0);*/
            /*backface-visibility: hidden;*/
            /*@descendent top {*/
                /*top: 0;*/
                /*right: auto;*/
                /*bottom: auto;*/
                /*left: 50%;*/
                /*transform: translate3d(-50%, 0, 0);*/
            /*}*/
            /*@descendent right {*/
                /*top: 50%;*/
                /*right: 0;*/
                /*bottom: auto;*/
                /*left: auto;*/
                /*transform: translate3d(0, -50%, 0);*/
            /*}*/
            /*@descendent bottom {*/
                /*top: auto;*/
                /*right: auto;*/
                /*bottom: 0;*/
                /*left: 50%;*/
                /*transform: translate3d(-50%, 0, 0);*/
            /*}*/
            /*@descendent left {*/
                /*top: 50%;*/
                /*right: auto;*/
                /*bottom: auto;*/
                /*left: 0;*/
                /*transform: translate3d(0, -50%, 0);*/
            /*}*/
        /*}*/
    /*}*/
    .popup-slide-top-transition,
    .popup-slide-right-transition,
    .popup-slide-bottom-transition,
    .popup-slide-left-transition {
        transition: transform .3s ease-out 100ms;
    }
    .popup-slide-top-enter,
    .popup-slide-top-leave {
        transform: translate3d(-50%, -100%, 0);
    }
    .popup-slide-right-enter,
    .popup-slide-right-leave {
        transform: translate3d(100%, -50%, 0);
    }
    .popup-slide-bottom-enter,
    .popup-slide-bottom-leave {
        transform: translate3d(-50%, 100%, 0);
    }
    .popup-slide-left-enter,
    .popup-slide-left-leave {
        transform: translate3d(-100%, -50%, 0);
    }
    .popup-fade-transition {
        transition: opacity .3s;
    }
    .popup-fade-enter,
    .popup-fade-leave {
        opacity: 0;
    }
</style>