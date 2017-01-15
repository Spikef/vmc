<template>
    <div class="vmc-text-area" :class="{invalid: !valid}">
        <div :class="{'vmc-1px': border}">
            <textarea :rows="rows" :placeholder="placeholder" v-model="value" @input="_onInput()"></textarea>
        </div>
        <div class="vmc-textarea-number">{{length}}/{{max}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            value: String,
            placeholder: String,
            min: {
                type: [Number, String],
                coerce: parseInt,
                default: 0
            },
            max: {
                type: [Number, String],
                coerce: parseInt,
                default: 99999
            },
            rows: {
                type: [Number, String],
                coerce: parseInt,
                default: 5
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                valid: true
            }
        },
        methods: {
            _onInput() {
                var len = this.length;
                if (!isNaN(this.max) && len > this.max) {
                    this.value = this.value.substr(0, this.max);
                }

                this._checkValue();
            },
            _checkValue() {
                var len = this.length;
                if (!isNaN(this.min) && len < this.min) {
                    return this.valid = false;
                }

                this.valid = true;
            }
        },
        computed: {
            length() {
                var value = this.value;
                if (value === undefined || value === null) return 0;
                return String(value).length;
            }
        },
        ready() {
            this._checkValue();
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-text-area {
        position: relative;
        .vmc-1px {
            padding: 1px;
        }

        textarea {
            width: 100%;
            height: 100%;
            appearance: none;
            outline: none;
            box-sizing: border-box;
            padding: 5px;
            border: none;
            resize: none;
            display: block;
        }

        .vmc-textarea-number {
            position: absolute;
            bottom: 4px;
            right: 6px;
            font-size: 12px;
            color: #e0e0e0;
        }
    }
</style>
