<template>
    <dialog-box :show="show" class="vmc-prompt" :class="{'no-content': !content}">
        <child name="header">
            <div><p>{{title}}</p></div>
        </child>
        <child name="content" v-html="content">

            <div class="prompt-input">
                <label class="vmc-1px" :class="{ invalid: invalid }">
                    <input v-model="value" :placeholder="placeholder">
                </label>
                <div class="error-message" v-if="!!message">{{message}}</div>
            </div>
        </child>
        <child name="footer">
            <span class="vmc-1px-right" :class="type === 0 ? 'default' : 'primary'" @click.stop="_onCancel">
                {{btn1}}
            </span>
            <span class="primary" @click.stop="_onConfirm">
                {{btn2}}
            </span>
        </child>
    </dialog-box>
</template>

<script type="es6">
    import Overlay from '../overlay';
    import DialogBox from '../dialogbox';

    export default {
        components: {
            Overlay,
            DialogBox
        },
        props: {
            show: Boolean,
            title: String,
            content: String,
            validator: {
                type: Object,
                default: null
            },
            confirm: {
                type: Function,
                default: null
            },
            cancel: {
                type: Function,
                default: null
            },
            btn1: {
                type: String,
                default: '取消'
            },
            btn2: {
                type: String,
                default: '确定'
            },
            type: {
                type: Number,
                default: 0
            },
            value: String,
            invalid: Boolean,
            placeholder: String,
            message: String
        },
        methods: {
            _onConfirm(e) {
                var valid = true;
                if (this.validator) {
                    var type = Object.prototype.toString.call(this.validator);
                    switch (type) {
                        case '[object RegExp]':
                            valid = this.validator.test(this.value);
                            break;
                        case '[object Function]':
                            valid = this.validator(this.value);
                            break;
                        default:
                            valid = true;
                    }
                }

                if (valid !== true) {
                    if (typeof valid === 'string') {
                        this.message = valid;
                    }
                    this.invalid = true;
                    return;
                }

                this.show = false;
                this.$emit('on-confirm', e);

                if (this.confirm && typeof this.confirm === 'function') {
                    this.confirm(this.value);
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
