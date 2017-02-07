<template>
    <span class="vmc-checkbox">
        <input type="checkbox" :id="id" :value="value" v-model="checked" :disabled="disabled">
        <label :for="id" :class="{disabled: disabled}">
            <slot></slot>
        </label>
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
            checked: [Boolean, Array],
            disabled: Boolean
        }
    }
</script>