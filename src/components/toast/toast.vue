<template>
    <div class="vmc-toast" transition="vmc-toast" v-show="show">
        <mask transparent></mask>
        <div class="block" :class="where" :style="{ 'padding': showIcon ? '20px' : '10px' }">
            <div class="icon" v-if="showIcon">
                <spinner v-if="type == 'loading'" color="#ffffff" size="48" type="0"></spinner>
                <i :class="icon" v-else></i>
            </div>
            <span class="text" v-show="content" :style="{ 'margin-top': showIcon ? '10px' : '' }">{{content}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../mask';
    import Spinner from '../spinner';

    const TOASTS = [
        'loading',
        'success',
        'error',
        'info'
    ];

    export default {
        components: {
            Mask,
            Spinner
        },
        props: {
            type: String,
            show: Boolean,
            content: String,
            position: String
        },
        computed: {
            showIcon() {
                return !!~TOASTS.indexOf(this.type);
            },
            where() {
                return 'block-' + (!!~['top', 'center', 'bottom'].indexOf(this.position) ? this.position : 'center');
            },
            icon() {
                return {
                    success: 'icono-checkCircle',
                    error: 'icono-crossCircle',
                    info: 'icono-exclamationCircle'
                }[this.type];
            }
        },
        methods: {
            _show(options) {
                this.type = options.type;
                this.content = options.content;
                this.position = options.position;
                this.show = true;

                if (typeof options.second === 'number' && options.second > 0) {
                    setTimeout(() => this._hide(), options.second * 1000);
                }
            },
            _hide() {
                this.show = false;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-toast {
        .block {
            position: fixed;
            max-width: 80%;
            border-radius: 5px;
            background: rgba(0, 0, 0, 0.7);
            color: #fff;
            box-sizing: border-box;
            text-align: center;
            z-index: 500;
            transition: opacity .3s linear;
            padding: 10px;

            &.block-top {
                top: 50px;
                left: 50%;
                transform: translate(-50%, 0);
            }

            &.block-center {
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &.block-bottom {
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
            }

            .icon {
                font-size: 30px;
                text-align: center;

                > div {
                    margin:0 auto
                }
            }

            .text {
                display: block;
                font-size: 14px;
                text-align: center;
            }
        }
    }

    .vmc-toast-enter, .vmc-toast-leave {
        opacity: 0;
    }
</style>