<template>
    <span class="vmc-switch">
        <input type="checkbox" :id="id" :value="originValue" v-model="localValue" :disabled="disabled">
        <label :for="id">
            <slot></slot>
        </label>
    </span>
</template>

<script type="es6">
    export default {
        props: {
            id: {
                type: String,
                default() {
                    return 'switch-' + Math.random().toString(36).substr(2, 8);
                }
            },
            originValue: [String, Number, Boolean],
            value: [Boolean, Array],
            disabled: Boolean
        },
        data() {
            return {
                localValue: this.value
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
