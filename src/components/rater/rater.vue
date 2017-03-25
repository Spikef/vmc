<template>
    <div class="vmc-rater">
        <span class="vmc-rater-outer"
              :style="outStarStyle(i)"
              :class="outStarClass(i)"
              v-for="i in coerce.max"
              @click="_onClick(i)">

            {{star}}

            <span class="vmc-rater-inner"
                  :style="innerStarStyle(i)"
                  :class="innerStarClass(i)"
                  v-if="innerStarStyle(i)">{{star}}</span>
        </span>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            min: {
                type: [Number, String],
                default: 1
            },
            max: {
                type: [Number, String],
                default: 5
            },
            value: {
                type: [String, Number],
                default: 5
            },
            disabled: Boolean,
            star: {
                type: String,
                default: '★'
            },
            defaultColor: String,
            activeColor: String,
            gutter: {
                type: [String, Number]
            },
            size: {
                type: [String, Number]
            }
        },
        computed: {
            coerce: {
                get() {
                    return {
                        min: parseInt(this.min),
                        max: parseInt(this.max),
                        value: Number(this.value),
                        gutter: Number(this.gutter),
                        size: Number(this.size)
                    }
                }
            }
        },
        methods: {
            _onClick (index) {
                var i = index - 1;
                if (!this.disabled) {
                    var value = this.localValue === i + 1 ? i : i + 1;
                    if (value < this.coerce.min) value = this.coerce.min;
                    this._updateValue(value);
                }
            },
            _updateValue(value) {
                this.localValue = value;
                this.$emit('input', value);
            },
            outStarStyle(index) {
                var i = index - 1;
                var style = {
                    fontSize: this.coerce.size + 'px'
                };

                if (this.coerce.gutter) {
                    if (i === 0 && i < this.coerce.max) {
                        style.marginRight = `${this.coerce.gutter / 2}px`;
                    } else if (i > 0 && i === this.coerce.max - 1) {
                        style.marginLeft = `${this.coerce.gutter / 2}px`;
                    } else {
                        style.margin = `0 ${this.coerce.gutter / 2}px`;
                    }
                }

                if (i <= this.localValue - 1) {
                    style.color = this.activeColor;
                } else {
                    style.color = this.defaultColor;
                }

                return style;
            },
            innerStarStyle(index) {
                var i = index - 1;
                var parts = String(this.localValue).split('.');
                if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                    return {
                        color: this.activeColor,
                        width: `${parts[1] * 10}%`
                    }
                }
            },
            outStarClass(index) {
                var i = index - 1;
                if (i <= this.localValue - 1) {
                    return 'active';
                }
            },
            innerStarClass(index) {
                var i = index - 1;
                var parts = String(this.localValue).split('.');
                if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                    return 'active';
                }
            }
        },
        data() {
            return {
                colors: [],
                cutIndex: -1,
                cutPercent: 0,
                localValue: Number(this.value)
            }
        },
        watch: {
            value(value) {
                if (value !== this.localValue) {
                    this.localValue = Number(value);
                }
            }
        }
    }
</script>