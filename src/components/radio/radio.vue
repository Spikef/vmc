<template>
    <span class="vmc-radio" :class="{ inline: inline }">
        <input type="radio" :id="id" :value="value" v-model="checked" :disabled="disabled">
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
                    return 'radio-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [String, Number, Boolean],
            checked: [String, Number, Boolean],
            disabled: Boolean,
            inline: Boolean,
            childValues: Array,
            childChecked: Array
        },
        computed: {
            isChecked: {
                get() {
                    return this.checked === this.value;
                }
            },
            isCheckedAll: {
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
                if (!this.innerUpdate && !this.isChecked && value.length) {
                    this.$nextTick(() => {
                        this.isCheckedAll = false;
                    });
                }

                delete this.innerUpdate;
            },
            isChecked(checked) {
                this.isCheckedAll = checked;
            }
        },
        ready() {
            this.isCheckedAll = this.isChecked;
        }
    }
</script>