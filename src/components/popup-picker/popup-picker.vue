<template>
    <popup :show.sync="show" height="auto">
        <div class="vmc-popup-picker" v-stop.move>
            <div class="header">
                <div class="left" @click="_onCancel">{{cancel}}</div>
                <div class="title">{{title}}</div>
                <div class="right" @click="_onSubmit">{{confirm}}</div>
            </div>
            <picker @on-change="_onChange" v-props></picker>
        </div>
    </popup>
</template>

<script type="es6">
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
                this.$emit('on-submit', this.value);
            },
            _onChange(result, value, target) {
                this.result = result;
                this.selValue = value;
                this.$emit('on-change', result, value, target);
            }
        }
    }
</script>
