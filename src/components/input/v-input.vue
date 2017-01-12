<template>
    <div class="vmc-input-area vmc-1px">
        <input class="vmc-input" type="text" :placeholder="placeholder" v-model="value" @blur="_onBlur">
        <div class="vmc-input-message" v-show="message">{{message}}</div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            value: [String, Number, Boolean],
            placeholder: String,
            validator: [Function, Object, Array]
        },
        data() {

        },
        methods: {
            _onBlur() {
                var val = this.value;
                // message
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-input-area {

    }
</style>