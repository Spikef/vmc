<template>
    <label class="vmc-input" :class="{'vmc-1px': border}">
        <input type="text" :placeholder="placeholder" v-model="value" @input="_onInput">
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
                type: [Number, String],
                coerce: getInt
            },
            max: {
                type: [Number, String],
                coerce: getInt
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            _onInput() {
                var val = this.value;
                var typ = typeof this.type;
                if (typ === 'function') {
                    this.value = this.type(val);
                } else {
                    switch (this.type) {
                        case 'integer':
                            if (!/^-?$/.test(val)) {
                                val = parseInt(val);
                                if (isNaN(val)) val = 0;

                                if (this.min !== undefined && val < this.min) val = this.min;
                                if (this.max !== undefined && val > this.max) val = this.max;
                            } else if (this.min !== undefined && this.min >= 0) {
                                val = this.min;
                            }

                            this.value = val;

                            break;
                        case 'number':
                            if (!/^-?$/.test(val) && !/\.$/.test(val)) {
                                val = parseFloat(val);
                                if (isNaN(val)) val = 0;

                                if (this.min !== undefined && val < this.min) val = this.min;
                                if (this.max !== undefined && val > this.max) val = this.max;
                            } else if (this.min !== undefined && this.min > 0) {
                                val = this.min;
                            }

                            this.value = val;

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

                            if (this.max !== undefined) {
                                val = val.substring(0, this.max);
                            }

                            this.value = val;

                            break;
                        default:
                            this.value = val;
                    }
                }
            }
        }
    }
</script>
