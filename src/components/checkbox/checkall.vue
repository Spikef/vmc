<template>
    <checkbox :checked.sync="all" @click="_onToggle"><slot></slot></checkbox>
</template>

<script type="text/ecmascript-6">
    import Checkbox from './checkbox.vue'

    export default {
        components: {
            Checkbox
        },
        props: {
            values: Array,
            checked: Array
        },
        methods: {
            _onToggle(e) {
                var checkbox = e.currentTarget.querySelector('input[type=checkbox]');
                this.checked = checkbox.checked ? [].concat(this.values) : [];
            }
        },
        computed: {
            all() {
                return this.values && this.values.length && this.checked.length == this.values.length;
            }
        }
    }
</script>