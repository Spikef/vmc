<template>
    <span class="vmc-button" :class="{disabled: disabled}" :style="style">
        <div class="block">
            <slot name="icon-left"></slot>
            <slot>{{text}}</slot>
            <slot name="icon-right"></slot>
        </div>
    </span>
</template>

<script type="text/ecmascript-6">
    const colors = {
        'default': {
            color: '#444444',
            borderColor: '#dddddd',
            backgroundColor: '#f4f4f4'
        },
        'primary': {
            color: '#ffffff',
            borderColor: '#367fa9',
            backgroundColor: '#3c8dbc'
        },
        'success': {
            color: '#ffffff',
            borderColor: '#008d4c',
            backgroundColor: '#00a65a'
        },
        'info': {
            color: '#ffffff',
            borderColor: '#00acd6',
            backgroundColor: '#00c0ef'
        },
        'danger': {
            color: '#ffffff',
            borderColor: '#d73925',
            backgroundColor: '#e40013'
        },
        'warning': {
            color: '#ffffff',
            borderColor: '#e08e0b',
            backgroundColor: '#f39c12'
        }
    };

    export default {
        props: {
            inline: Boolean,
            radius: [Number, String],
            height: [Number, String],
            border: [Number, String],
            width: [Number, String],
            size: [Number, String],
            disabled: Boolean,
            text: {
                type: String,
                default: '确定'
            },
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                        'default',
                        'primary',
                        'success',
                        'info',
                        'danger',
                        'warning'
                    ].indexOf(value) > -1;
                }
            },
            colors: {
                type: Object,
                default() {
                    return null;
                }
            }
        },
        computed: {
            style() {
                var style = {
                    display: this.inline ? 'inline-block' : 'block'
                };

                if (this.height) {
                    style.height = this.height + 'px';
                }

                if (this.width) {
                    style.width = this.width + 'px';
                }

                if (this.border) {
                    style.borderWidth = this.border + 'px';
                }

                if (this.radius) {
                    style.borderRadius = this.radius + 'px';
                }

                if (this.size) {
                    style.fontSize = this.size + 'px';
                }

                if (this.colors) {
                    style.color = this.colors.font;
                    style.borderColor = this.colors.border;
                    style.backgroundColor = this.colors.background;
                }

                return Object.assign({}, colors[this.type], style);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-button {
        text-align: center;
        font-size: 14px;
        height: 40px;
        position: relative;

        &:active:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #000000;
            opacity: .4;
        }

        .block {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &.disabled {
            opacity: .65;

            &:active:after {
                display: none;
            }
        }

        [slot="icon-left"] {
            margin-right: 5px;
        }

        [slot="icon-right"] {
            margin-left: 5px;
        }
    }
</style>