<template>
    <div class="vmc-number">
        <span class="vmc-1px" @click="_changeCount(0)">-</span>
        <m-input v-model="localValue" :min="min" :max="max" :type="decimal ? 'number' : 'integer'" :style="style"></m-input>
        <span class="vmc-1px" @click="_changeCount(1)">+</span>
    </div>
</template>

<script type="es6">
    import { mInput } from '../input';
    import { getCSSSize } from '../../utils';

    export default {
        components: {
            mInput
        },
        props: {
            decimal: Boolean,
            value: [String, Number],
            width: [String, Number],
            min: {
                type: [Number, String],
                default: -Infinity
            },
            max: {
                type: [Number, String],
                default: Infinity
            },
            step: {
                type: [Number, String],
                default: 1
            }
        },
        data() {
            return {
                localValue: this.value
            }
        },
        computed: {
            style() {
                if (this.width) {
                    return {
                        width: getCSSSize(this.width)
                    }
                }
            },
            coerce: {
                get() {
                    return {
                        min: Number(this.min),
                        max: Number(this.max),
                        step: Number(this.step)
                    }
                }
            }
        },
        methods: {
            _changeCount(add) {
                var value = Number(this.localValue);
                var step = add ? this.coerce.step : -this.coerce.step;

                var val = this.decimal ? this._decimalPlus(value, step) : value + step;
                if (val >= this.coerce.min && val <= this.coerce.max) {
                    this.localValue = val;
                }
            },
            _decimalPlus(a, b) {
                // http://www.cnblogs.com/colder/p/5775555.html
                var x = Number(String(a).replace('.', ''));
                var y = Number(String(b).replace('.', ''));
                var m = (String(a).split('.')[1] || '').length;
                var n = (String(b).split('.')[1] || '').length;
                var c = Math.abs(m - n);
                var e = Math.max(m, n);
                var p = Math.pow(10, e);
                var q = Math.pow(10, c);

                if (c > 0) {
                    if (m > n) {
                        y = y * q
                    } else {
                        x = x * q;
                    }
                }

                return (x + y) / p;
            }
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
