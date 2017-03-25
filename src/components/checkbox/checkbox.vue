<template>
    <span class="vmc-checkbox" :class="{ inline: inline }">
        <input type="checkbox" :id="id" :value="originValue" :disabled="disabled" v-model="checkedValue">
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
                    return 'checkbox-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [Boolean, Array, Number, String],
            valueList: Array,
            originValue: [String, Number, Boolean],
            disabled: Boolean,
            inline: Boolean,
            max: {
                type: [Number, String]
            },
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
            coerce: {
                get() {
                    return {
                        max: parseInt(this.max)
                    }
                }
            },
            isChecked: {
                get() {
                    if (typeof this.localValue === 'boolean') {
                        return this.localValue;
                    } else if (Array.isArray(this.localValue)) {
                        return !!~this.localValue.indexOf(this.originValue);
                    } else if (Array.isArray(this.valueList)) {
                        return this.localValue === this.valueList[0];
                    } else {
                        return !!this.localValue;
                    }
                },
                set(value) {
                    if (typeof this.localValue === 'boolean') {
//                        this.localValue = checked;
                    } else if (Array.isArray(this.localValue)) {
                        var index = this.localValue.indexOf(this.originValue);
                        if (value && !~index) {
                            this.localValue.push(this.originValue);
                            if (this.coerce.max) {
                                this.localValue = this.localValue.slice(-this.coerce.max);
                            }
                        } else if (!value && !!~index) {
                            this.localValue.splice(index, 1);
                        }

                        value = this.localValue;
                    } else if (Array.isArray(this.valueList)) {
//                        this.localValue = value ? this.valueList[0] : this.valueList[1];
                        value = value ? this.valueList[0] : this.valueList[1];
                    } else {
//                        this.localValue = value;
                    }

                    this._updateValue(value);
                }
            },
            checkedValue: {
                get() {
                    if (this.isCheckedAll !== undefined && this.isCheckedAll !== this.isChecked) {
                        this.$nextTick(() => {
                            this.isCheckedAll = this.isChecked; // update children
                        });
                    }

                    return this.isChecked;
                },
                set(checked) {
                    if (this.isCheckedAll !== undefined && this.isCheckedAll !== checked) {
                        this.$nextTick(() => {
                            this.isCheckedAll = checked;        // update children
                        });
                    }

                    this.isChecked = checked;
                }
            },
            isCheckedAll: {
                get() {
                    if (this.childValues && this.localChild && this.childValues.length) {
                        return this.childValues.length === this.localChild.length;
                    }
                },
                set(checked) {
                    if (checked) {
                        this._updateChild([].concat(this.childValues));
                    } else {
                        this._updateChild([]);
                    }
                }
            }
        },
        methods: {
            _updateValue(value) {
                this.localValue = value;
                this.$emit('input', value);
            },
            _updateChild(value) {
                this.localChild = value;
                this.$emit('on-sync-child', value);
            }
        },
        watch: {
            value(value) {
                if (value !== this.localValue) {
                    this.localValue = value;
                }
            },
            childChecked(value) {
                if (this.isCheckedAll !== undefined) {
                    this.isChecked = this.isCheckedAll; // toggle child
                    this.$nextTick(() => {
                        this.localChild = value;      // resolve unCheck child
                    });
                }
            }
        }
    }
</script>
