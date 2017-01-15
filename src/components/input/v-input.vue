<template>
    <div class="vmc-input-area" :class="{invalid: !valid}">
        <label class="vmc-input" :class="{'vmc-1px': border}">
            <input :type="type" :placeholder="placeholder" v-model="value" @keyUp="_onKeyUp" @blur="_onBlur" @input="_onInput">
        </label>
        <div class="vmc-input-message" v-show="message">{{message}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
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

<style rel="stylesheet/less" lang="less">
    .vmc-input-area {
        position: relative;

        &.invalid label {
            border-color: #ff0000;
        }

        .vmc-input-message {
            position: absolute;
            width: 70%;
            left: 3%;
            border-radius: 5px;
            margin-top: 5px;
            font-size: 12px;
            font-weight: 200;
            padding: 5px;
            background: #363636;
            color: #ffffff;
            z-index: 1;

            &:before {
                content: " ";
                background: #363636;
                display: block;
                height: 8px;
                width: 8px;
                position: absolute;
                left: 20px;
                top: -4px;
                transform: rotate(45deg);
            }
        }
    }
</style>