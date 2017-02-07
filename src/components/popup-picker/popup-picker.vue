<template>
    <popup :show.sync="show" height="auto">
        <div class="vmc-popup-picker" @touchmove="_stopDefault" @mousewheel="_stopDefault">
            <div class="header">
                <div class="left" @click="_onCancel">{{cancel}}</div>
                <div class="title">{{title}}</div>
                <div class="right" @click="_onSubmit">{{confirm}}</div>
            </div>
            <picker :list="list" :value="value" :value-type="valueType" :value-separator="valueSeparator" @on-change="_onChange"></picker>
        </div>
    </popup>
</template>

<script type="text/ecmascript-6">
    import Popup from '../popup';
    import Picker from '../picker';

    export default {
        components: {
            Popup,
            Picker
        },
        props: {
            show: Boolean,
            title: {
                type: String,
                default: ''
            },
            confirm: {
                type: String,
                default: '确定'
            },
            cancel: {
                type: String,
                default: '取消'
            },
            list: {
                type: Array,
                default() {
                    return []
                }
            },
            value: {
                type: String,
                default: null
            },
            valueType: {
                type: String,
                default: 'value'
            },
            valueSeparator: {
                type: String,
                default: ' '
            }
        },
        data() {
            return {
                result: {},
                selValue: ''
            }
        },
        methods: {
            _onCancel() {
                this.show = false;
                this.$emit('on-cancel', this.value);
            },
            _onSubmit() {
                this.show = false;
                this.value = this.selValue;
                this.$emit('on-submit', this.result);
            },
            _onChange(target, result, value) {
                this.result = result;
                this.selValue = value;
                this.$emit('on-change', target, result, value);
            },
            _stopDefault(e){
                e.preventDefault();
            }
        }
    }
</script>