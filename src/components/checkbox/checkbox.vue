<template>
    <span class="vmc-checkbox" :class="{ 'inline-block': inline }">
        <input type="checkbox" :id="id" :value="value" :disabled="disabled" v-model="checkedValue">
        <label :for="id" :class="{disabled: disabled}">
            <slot></slot>
        </label>
        <slot name="extra"></slot>
    </span>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            id: {
                type: String,
                default() {
                    return 'checkbox-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [String, Number, Boolean],
            values: Array,
            checked: [Boolean, Array],
            disabled: Boolean,
            max: {
                type: [Number, String],
                coerce: parseInt
            },
            inline: Boolean,
            childValues: Array,
            childChecked: Array
        },
        computed: {
            isChecked: {
                get() {
                    if (typeof this.checked === 'boolean') {
                        return this.checked;
                    } else if (Array.isArray(this.checked)) {
                        return !!~this.checked.indexOf(this.value);
                    } else if (Array.isArray(this.values)) {
                        return this.checked === this.values[0];
                    } else {
                        return this.checked !== undefined;
                    }
                },
                set(checked) {
                    if (typeof this.checked === 'boolean') {
                        this.checked = checked;
                    } else if (Array.isArray(this.checked)) {
                        var index = this.checked.indexOf(this.value);
                        if (checked && !~index) {
                            this.checked.push(this.value);
                            if (this.max) {
                                this.checked = this.checked.slice(-this.max);
                            }
                        } else if (!checked && !!~index) {
                            this.checked.splice(index, 1);
                        }
                    } else if (Array.isArray(this.values)) {
                        this.checked = checked ? this.values[0] : this.values[1];
                    } else {
                        this.checked = checked ? this.value : undefined;
                    }
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
                    if (this.childValues && this.childChecked && this.childValues.length) {
                        return this.childValues.length === this.childChecked.length;
                    }
                },
                set(checked) {
                    if (checked) {
                        this.innerUpdate = true;
                        this.childChecked = [].concat(this.childValues);
                    } else {
                        this.innerUpdate = true;
                        this.childChecked = [];
                    }
                }
            }
        },
        watch: {
            childChecked(value) {
                if (!this.innerUpdate && this.isCheckedAll !== undefined) {
                    this.isChecked = this.isCheckedAll; // toggle child
                    this.$nextTick(() => {
                        this.childChecked = value;      // resolve unCheck child
                    });
                }

                delete this.innerUpdate;
            }
        }
    }
</script>