<template>
    <div class="vmc-input-area" :class="{invalid: !valid}">
        <label class="vmc-input" :class="{'vmc-1px': border}">
            <input :type="type" :placeholder="placeholder" v-model="value" @keyUp="_onKeyUp" @blur="_onBlur" @input="_onInput">
        </label>
        <div class="vmc-input-message" v-show="message">{{message}}</div>
    </div>
</template>

<script type="es6">
    import { getType, isType } from '../../utils';

    export default {
        props: {
            type: {
                type: String,
                default: 'text'
            },
            value: [String, Number, Boolean],
            placeholder: String,
            errorMessage: String,
            validator: {
                type: [Function, Object, RegExp, Array],
                default: null
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                message: '',
                valid: true
            }
        },
        methods: {
            _onKeyUp(e) {
                if (e.keyCode === 13) {
                    this._checkValue();
                }
            },
            _onBlur() {
                this._checkValue();
            },
            _onInput() {
                if (this.type === 'password') {
                    clearTimeout(this.timer);
                    this.type = 'text';
                    this.timer = setTimeout(() => {
                        this.type = 'password';
                    }, 1500);
                }
            },
            _checkValue(init) {
                var value = this.value === undefined || this.value === null ? '' : this.value;
                if (!this.validator) return;
                if (!Array.isArray(this.validator)) {
                    this.validator = [this.validator];
                }
                var result = null;
                for (var i=0;i<this.validator.length;i++) {
                    var valid = this.validator[i];
                    var vType = getType(valid);

                    switch (vType) {
                        case 'regexp':
                            result = valid.test(value);
                            break;
                        case 'function':
                            result = valid(value);
                            break;
                        case 'object':
                            if (valid.expression && isType(valid.expression, 'regexp')) {
                                result = valid.expression.test(value);
                                if (!result) result = valid.message;
                            }
                    }

                    if (result !== true) {
                        this.valid = false;
                        !init && this._showMessage(result || this.errorMessage);
                        break;
                    }
                }

                if (result === true) this.valid = true;
            },
            _showMessage(message) {
                if (message) {
                    this.message = message;
                    setTimeout(() => {
                        this.message = '';
                    }, 2000);
                }
            }
        },
        ready() {
            this._checkValue(true);
        }
    }
</script>
