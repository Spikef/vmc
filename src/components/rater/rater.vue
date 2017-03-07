<template>
    <div class="vmc-rater">
        <span class="vmc-rater-outer"
              :style="outStarStyle(i)"
              :class="outStarClass(i)"
              v-for="i in max"
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
                default: 1,
                coerce: parseInt
            },
            max: {
                type: [Number, String],
                default: 5,
                coerce: parseInt
            },
            value: {
                type: [String, Number],
                coerce: Number,
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
                type: [String, Number],
                coerce: Number
            },
            size: {
                type: [String, Number],
                coerce: Number
            }
        },
        methods: {
            _onClick (i) {
                if (!this.disabled) {
                    var value = this.value === i + 1 ? i : i + 1;
                    if (value < this.min) value = this.min;
                    this.value = value;
                }
            },
            outStarStyle(i) {
                var style = {
                    fontSize: this.size + 'px'
                };

                if (this.gutter) {
                    if (i === 0 && i < this.max) {
                        style.marginRight = `${this.gutter / 2}px`;
                    } else if (i > 0 && i === this.max - 1) {
                        style.marginLeft = `${this.gutter / 2}px`;
                    } else {
                        style.margin = `0 ${this.gutter / 2}px`;
                    }
                }

                if (i <= this.value - 1) {
                    style.color = this.activeColor;
                } else {
                    style.color = this.defaultColor;
                }

                return style;
            },
            innerStarStyle(i) {
                var parts = String(this.value).split('.');
                if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                    return {
                        color: this.activeColor,
                        width: `${parts[1] * 10}%`
                    }
                }
            },
            outStarClass(i) {
                if (i <= this.value - 1) {
                    return 'active';
                }
            },
            innerStarClass(i) {
                var parts = String(this.value).split('.');
                if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                    return 'active';
                }
            }
        },
        data() {
            return {
                colors: [],
                cutIndex: -1,
                cutPercent: 0
            }
        }
    }
</script>
