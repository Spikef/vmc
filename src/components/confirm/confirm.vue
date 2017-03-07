<template>
    <dialog-box :show="show" class="vmc-confirm" :class="{'no-content': !content}">
        <div name="header">
            <div><p>{{title}}</p></div>
        </div>
        <div name="content" v-html="content" v-if="content"></div>
        <div name="footer">
            <span class="vmc-1px-right" :class="type === 0 ? 'default' : 'primary'" @click.stop="_onCancel">
                {{btn1}}
            </span>
            <span class="primary" @click.stop="_onConfirm">
                {{btn2}}
            </span>
        </div>
    </dialog-box>
</template>

<script type="es6">
    import DialogBox from '../dialogbox';

    export default {
        components: {
            DialogBox
        },
        data() {
            return {
                show: false,
                title: '',
                content: '',
                confirm: null,
                cancel: null,
                btn1: '取消',
                btn2: '确定',
                type: 0
            }
        },
        methods: {
            _onConfirm(e) {
                this.show = false;
                this.$emit('on-confirm', e);

                if (this.confirm && typeof this.confirm === 'function') {
                    this.confirm();
                }
            },
            _onCancel(e) {
                this.show = false;
                this.$emit('on-cancel', e);

                if (this.cancel && typeof this.cancel === 'function') {
                    this.cancel();
                }
            },
            _show(options) {
                Object.keys(options).forEach(v => this[v] = options[v]);
                this.show = true;
            }
        }
    }
</script>
