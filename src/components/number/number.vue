<template>
    <div class="vmc-number">
        <span class="vmc-1px" @click="changeCount(0)">-</span>
        <m-input :value.sync="value" :min="min" :max="max" :type="decimal ? 'number' : 'integer'" :style="style"></m-input>
        <span class="vmc-1px" @click="changeCount(1)">+</span>
    </div>
</template>

<script type="text/ecmascript-6">
    import { mInput } from '../input';

    export default {
        components: {
            mInput
        },
        props: {
            decimal: Boolean,
            value: [String, Number],
            width: {
                type: [String, Number],
                default: 30
            },
            min: {
                type: [Number, String],
                coerce: Number,
                default: -Infinity
            },
            max: {
                type: [Number, String],
                coerce: Number,
                default: Infinity
            },
            step: {
                type: [Number, String],
                coerce: Number,
                default: 1
            }
        },
        computed: {
            style() {
                if (this.width) {
                    return {
                        width: this.width + 'px'
                    }
                }
            }
        },
        methods: {
            changeCount(add) {
                var value = Number(this.value);
                var step = add ? this.step : -this.step;

                var val = this.decimal ? this.decimalPlus(value, step) : value + step;
                if (val >= this.min && val <= this.max) {
                    this.value = val;
                }
            },
            decimalPlus(a, b) {
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
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-number {
        display: flex;
        height: 30px;
        line-height: 28px;

        span {
            display: block;
            text-align: center;
            width: 28px;
            min-width: 28px;
            font-size: 12px;
        }

        input {
            text-align: center;
        }

        .vmc-input:before {
            border-left: none;
            border-right: none;
        }
    }
</style>