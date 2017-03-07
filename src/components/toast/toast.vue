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

<script type="es6">
    import Overlay from '../overlay';
    import Spinner from '../spinner';

    const TOASTS = [
        'loading',
        'success',
        'error',
        'info'
    ];

    export default {
        components: {
            Overlay,
            Spinner
        },
        props: {
            type: String,
            show: Boolean,
            content: String,
            position: String    // top, center, bottom
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
