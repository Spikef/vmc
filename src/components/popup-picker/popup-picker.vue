<!--<template>-->
    <!--<popup :show="localShow" height="auto" @on-hide="_onHide">-->
        <!--<div class="vmc-popup-picker" v-stop.move>-->
            <!--<div class="header">-->
                <!--<div class="left" @click="_onCancel">{{cancel}}</div>-->
                <!--<div class="title">{{title}}</div>-->
                <!--<div class="right" @click="_onSubmit">{{confirm}}</div>-->
            <!--</div>-->
            <!--<picker @on-change="_onChange" v-props></picker>-->
        <!--</div>-->
    <!--</popup>-->
<!--</template>-->

<script type="text/jsx">
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
                selValue: '',
                localShow: this.show
            }
        },
        methods: {
            _onCancel() {
                this._hide();
                this.$emit('on-cancel', this.value);
            },
            _onSubmit() {
                this._hide();
                this.$emit('input', this.selValue);
                this.$emit('on-submit', this.selValue);
            },
            _onChange(result, value, target) {
                this.result = result;
                this.selValue = value;
                this.$emit('on-change', result, value, target);
            },
            _onHide() {
                this._hide();
            },
            _hide() {
                this.localShow = false;
                this.$emit('on-hide');
                this.$emit('on-sync-show', false);
            }
        },
        watch: {
            show(show) {
                if (this.localShow !== show) {
                    this.localShow = show;
                }
            }
        },
        render(h) {
            var props = {};
            var exclude = ['show', 'title', 'confirm', 'cancel'];

            for (var key in this._props) {
                if (!this._props.hasOwnProperty(key)) continue;

                if (!~exclude.indexOf(key)) {
                    props[key] = this._props[key];
                }
            }

            return (
                    <popup show={this.localShow} height="auto" on-on-hide={this._onHide}>
                        <div class="vmc-popup-picker" v-stop="{{ move: true }}">
                            <div class="header">
                                <div class="left" onClick={this._onCancel}>{this.cancel}</div>
                                <div class="title">{this.title}</div>
                                <div class="right" onClick={this._onSubmit}>{this.confirm}</div>
                            </div>
                            <picker on-on-change={this._onChange} {...{ props }}></picker>
                        </div>
                    </popup>
            )
        }
    }
</script>
