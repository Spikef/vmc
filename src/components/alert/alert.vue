<template>
    <dialog-box :show="show" class="vmc-alert" :class="{'no-content': !content}">
        <div name="header">
            <div><p>{{title}}</p></div>
        </div>
        <div name="content" v-html="content" v-if="content"></div>
        <div name="footer">
            <span class="primary" @click.stop="_onConfirm">
                {{button}}
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
                callback: null,
                button: '确定'
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
