<template>
    <label class="vmc-input" :class="{'vmc-1px': border}">
        <input ref="input" type="text" :placeholder="placeholder" :value="value" @keypress="_onKeyPress" @input="_onInput">
    </label>
</template>

<script type="es6">
    const getInt = function (val) {
        if (isNaN(val)) return;
        return parseInt(val);
    };

    export default {
        props: {
            type: [String, Function],   // can be: integer, number, alphabet, Alphabet, ALPHABET
            value: [String, Number, Boolean],
            placeholder: String,
            min: {
                type: [Number, String]
            },
            max: {
                type: [Number, String]
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                lastChar: null
            }
        },
        computed: {
            coerce: {
                get() {
                    return {
                        min: getInt(this.min),
                        max: getInt(this.max)
                    }
                }
            }
        },
        methods: {
            _onKeyPress(e) {
                var char = String.fromCharCode(e.keyCode);
                if (/[0-9a-zA-Z+-.]/.test(char)) {
                    this.lastChar = char;
                } else {
                    this.lastChar = null;
                }
            },
            _onInput(e) {
                var val = e.target.value;
                var typ = typeof this.type;
                if (typ === 'function') {
//                    this.value = this.type(val);
                    this._updateValue(this.type(val));
                } else {
                    switch (this.type) {
                        case 'integer':
                            if (!/^-?$/.test(val)) {
                                val = parseInt(val);
                                if (isNaN(val)) val = 0;

                                if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                                if (this.coerce.max !== undefined && val > this.coerce.max) {
                                    if (this.lastChar !== null && this.lastChar < this.coerce.max) {
                                        val = parseInt(this.lastChar);
                                    } else {
                                        val = this.coerce.max;
                                    }
                                }
                                if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                            } else if (this.coerce.min !== undefined && this.coerce.min >= 0) {
                                val = this.coerce.min;
                            }

//                            this.value = val;
                            this._updateValue(val);

                            break;
                        case 'number':
                            if (!/^-?$/.test(val) && !/\.$/.test(val)) {
                                val = parseFloat(val);
                                if (isNaN(val)) val = 0;

                                if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                                if (this.coerce.max !== undefined && val > this.coerce.max) {
                                    if (this.lastChar !== null && this.lastChar < this.coerce.max) {
                                        val = parseFloat(this.lastChar);
                                    } else {
                                        val = this.coerce.max;
                                    }
                                }
                                if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                            } else if (this.coerce.min !== undefined && this.coerce.min > 0) {
                                val = this.coerce.min;
                            }

//                            this.value = val;
                            this._updateValue(val);

                            break;
                        case 'alphabet':
                        case 'Alphabet':
                        case 'ALPHABET':
                            val = String(val).replace(/[^a-z]/i, '');
                            if (this.type === 'alphabet') {
                                val = val.toLowerCase();
                            } else if (this.type === 'ALPHABET') {
                                val = val.toUpperCase();
                            }

                            if (this.coerce.max !== undefined) {
                                val = val.substring(0, this.coerce.max);
                            }

//                            this.value = val;
                            this._updateValue(val);

                            break;
                        default:
//                            this.value = val;
                            this._updateValue(val);
                    }
                }
            },
            _updateValue(value) {
                this.$refs.input.value = value;
                this.$emit('input', value);
            }
        }
    }
</script>
