<template>
    <div class="vmc-alert" v-show="show">
        <mask></mask>
        <dialog :title="title" :content="content">
            <span class="primary" @click.stop="_onConfirm">
                {{button}}
            </span>
        </dialog>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../mask';
    import Dialog from '../dialog';

    export default {
        components: {
            Mask,
            Dialog
        },
        props: {
            show: Boolean,
            title: String,
            content: String,
            callback: {
                type: Function,
                default: null
            },
            button: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            _onConfirm(e) {
                this.show = false;
                this.$emit('on-confirm', e);

                if (this.callback && typeof this.callback === 'function') {
                    this.callback();
                }
            },
            _show(options) {
                Object.keys(options).forEach(v => this[v] = options[v]);
                this.show = true;
            }
        }
    }
</script>