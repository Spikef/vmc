<template>
    <div class="vmc-text-area" :class="{invalid: !valid}">
        <div :class="{'vmc-1px': border}">
            <textarea :rows="coerce.rows" :placeholder="placeholder" v-model="localValue" @input="_onInput()"></textarea>
        </div>
        <div class="vmc-textarea-number">{{length}}/{{max}}</div>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            value: String,
            placeholder: String,
            min: {
                type: [Number, String],
                default: 0
            },
            max: {
                type: [Number, String],
                default: 99999
            },
            rows: {
                type: [Number, String],
                default: 5
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                valid: true,
                localValue: this.value
            }
        },
        methods: {
            _onInput() {
                var len = this.length;
                if (!isNaN(this.coerce.max) && len > this.coerce.max) {
                    this.localValue = this.localValue.substr(0, this.coerce.max);
                }

                this._checkValue();
            },
            _checkValue() {
                var len = this.length;
                if (!isNaN(this.coerce.min) && len < this.coerce.min) {
                    return this.valid = false;
                }

                this.valid = true;
            }
        },
        computed: {
            length() {
                var value = this.localValue;
                if (value === undefined || value === null) return 0;
                return String(value).length;
            },
            coerce: {
                get() {
                    return {
                        min: parseInt(this.min),
                        max: parseInt(this.max),
                        rows: parseInt(this.rows)
                    }
                }
            }
        },
        mounted() {
            this._checkValue();
        },
        watch: {
            value(value) {
                if (value !== this.localValue) {
                    this.localValue = value;
                }
            },
            localValue(value) {
                this.$emit('input', value);
            },
            valid(value) {
                this.$emit('on-valid', value);
            }
        }
    }
</script>
