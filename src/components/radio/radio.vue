<template>
    <span class="vmc-radio" :class="{ inline: inline }">
        <input type="radio" :id="id" :value="originValue" v-model="localValue" :disabled="disabled">
        <label :for="id" :class="{disabled: disabled}">
            <slot></slot>
        </label>
        <slot name="extra"></slot>
    </span>
</template>

<script type="es6">
    export default {
        props: {
            id: {
                type: String,
                default() {
                    return 'radio-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [String, Number, Boolean],
            originValue: [String, Number, Boolean],
            disabled: Boolean,
            inline: Boolean,
            childValues: Array,
            childChecked: Array
        },
        data() {
            return {
                localValue: this.value,
                localChild: this.childChecked
            }
        },
        computed: {
            isChecked: {
                get() {
                    return this.localValue === this.originValue;
                }
            }
        },
        methods: {
            _updateChild() {
                if (this.isChecked) {
                    this.localChild = [].concat(this.childValues);
                } else {
                    this.localChild = [];
                }

                this.$emit('on-sync-child', this.localChild);
            }
        },
        watch: {
            value(value) {
                if (value !== this.localValue) {
                    this.localValue = value;
                }
            },
            localValue(value) {
                this._updateChild();
                this.$emit('input', value);
            },
            childChecked(value) {
                if (!this.isChecked && value.length) {
                    this.$nextTick(() => {
                        this._updateChild();
                    });
                }
            }
        },
        mounted() {
            this._updateChild();
        }
    }
</script>
