<template>
    <div class="vmc-input-area" :class="{invalid: !valid}">
        <label class="vmc-input" :class="{'vmc-1px': border}">
            <input :placeholder="placeholder" :value="localValue" @keyUp="_onKeyUp" @blur="_onBlur" @input="_onInput" type="password" v-model="localValue" v-if="isPassword">
            <input :placeholder="placeholder" :value="localValue" @keyUp="_onKeyUp" @blur="_onBlur" @input="_onInput" :type="localType" ref="input" v-else>
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
            value: {
                type: [String, Number, Boolean],
                default: ''
            },
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
                valid: true,
                localType: this.type,
                localValue: this.value
            }
        },
        computed: {
            isPassword: {
                get() {
                    return this.localType === 'password';
                }
            }
        },
        methods: {
            _onKeyUp(e) {
                if (e.keyCode === 13) {
                    this._checkValue(e.target.value);
                }
            },
            _onBlur(e) {
                this._checkValue(e.target.value);
            },
            _onInput(e) {
                var value = e.target.value;

                if (this.isPassword) {
//                    clearTimeout(this.timer);
//                    this.localType = 'text';
//
//                    this.timer = setTimeout(() => {
//                        this.localType = 'password';
//                    }, 1500);
                } else {
                    if (this.$refs.input) {
                        this.localValue = value;
                        this.$refs.input.value = value;
                    }
                }
            },
            _checkValue(value, init) {
                var validator = this.validator;
                value = value === undefined || value === null ? '' : value;
                if (!validator) return;
                if (!Array.isArray(validator)) {
                    validator = [validator];
                }
                var result = null;
                for (var i=0;i<validator.length;i++) {
                    var valid = validator[i];
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
        mounted() {
            this._checkValue(this.value, true);
        },
        watch: {
            value(value) {
                if (value !== this.localValue) {
                    this.localValue = value;
                }
            },
            localValue(value) {
                this.$emit('input', value);
            }
        }
    }
</script>
