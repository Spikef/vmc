<template>
    <span class="vmc-button" :class="[type, {disabled: disabled}]" :style="style" @click="_onClick">
        <div class="block">
            <slot name="icon-left"></slot>
            <slot>{{text}}</slot>
            <slot name="icon-right"></slot>
        </div>
    </span>
</template>

<script type="es6">
    import { getCSSSize } from '../../utils';

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
                    style.height = getCSSSize(this.height);
                }

                if (this.width) {
                    style.width = getCSSSize(this.width);
                }

                if (this.border) {
                    style.borderWidth = getCSSSize(this.border);
                }

                if (this.radius) {
                    style.borderRadius = getCSSSize(this.radius);
                }

                if (this.size) {
                    style.fontSize = getCSSSize(this.size);
                }

                if (this.colors) {
                    style.color = this.colors.font;
                    style.borderColor = this.colors.border;
                    style.background = this.colors.background;
                }

                return style;
            }
        },
        methods: {
            _onClick(event) {
                this.$emit('click', event)
            }
        }
    }
</script>
