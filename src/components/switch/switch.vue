<template>
    <span class="vmc-switch">
        <input type="checkbox" :id="id" :value="value" v-model="checked" :disabled="disabled">
        <label :for="id">
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
                    return 'switch-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [String, Number, Boolean],
            checked: [Boolean, Array],
            disabled: Boolean
        }
    }
</script>