<template>
    <div class="vmc-rater" :style="style">


        <span class="vmc-rater-outer"
              :style="outStarStyle(i)"
              v-for="i in max"
              @click="onClick(i)">

            {{star}}

            <span class="vmc-rater-inner"
                  :style="innerStarStyle(i)"
                  v-if="innerStarStyle(i)">{{star}}</span>
            </span>
        </span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            max: {
                type: [Number, String],
                default: 5,
                coerce: parseInt
            },
            min: {
                type: [Number, String],
                default: 1,
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
            activeColor: {
                type: String,
                default: '#FFAD34'
            },
            gutter: {
                type: [String, Number],
                coerce: Number,
                default: 2
            },
            size: {
                type: [String, Number],
                coerce: Number,
                default: 25
            }
        },
        methods: {
            onClick (i) {
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
            }
        },
        data () {
            return {
                colors: [],
                cutIndex: -1,
                cutPercent: 0
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-rater {
        font-size: 0;

        .vmc-rater-outer {
            display: inline-block;
            color: #cccccc;
            position: relative;

            .vmc-rater-inner {
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
            }
        }
    }



    /*
    .vmc-rater {
        text-align: left;
        display: inline-block;
        line-height: normal;
    }
    .vmc-rater a {
        display: inline-block;
        text-align: center;
        cursor: pointer;
        color: #ccc;
    }
    .vmc-rater a:last-child {
        padding-right: 2px!important;
        margin-right: 0px!important;
    }
    .vmc-rater a:hover {
        color: #ffdd99;
    }
    .vmc-rater a.is-disabled {
        color: #ccc !important;
        cursor: not-allowed;
    }
    .vmc-rater-box {
        position: relative;
    }
    .vmc-rater-inner {
        position: relative;
        display: inline-block;
    }
    .vmc-rater-outer {
        position: absolute;
        left: 0;
        top: 0;
        display: inline-block;
        overflow: hidden;
    }
    */
</style>

