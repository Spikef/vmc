<template>
    <div class="vmc-rater" :style="style">


        <span class="vmc-rater-outer"
              :style="outStarStyle(i)"
              v-for="i in max"
              @click="onClick(i)">

            {{star}}

            <span class="vmc-rater-inner"
                  :style="{color: activeColor, width: cutPercent + '%'}"
                  v-if="cutPercent > 0 && cutIndex === i">{{star}}</span>
            </span>
        </span>

        <!--<span class="vmc-rater-outer">-->
        <!--{{star}}-->

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
                type: Number,
                default: 5,
                coerce: Number
            },
            disabled: Boolean,
            star: {
                type: String,
                default: '★'
            },
            activeColor: {
                type: String,
                default: '#ffcc66'
            },
            gutter: {
                type: Number,
                default: 4
            },
            size: {
                type: Number,
                default: 25
            }
        },
        computed: {
            style() {
                if (this.gutter) {
                    return {
                        margin: `0 -${this.gutter / 2}px`
                    }
                }
            },

//            sliceValue() {
//                const _val = this.value.toString().split('.');
//                return _val.length === 1 ? [_val[0], 0] : _val
//            },
//            cutIndex() {
//                return this.sliceValue[0] * 1
//            },
//            cutPercent() {
//                return this.sliceValue[1] * 10
//            }
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
                    style.padding = `0 ${this.gutter / 2}px`;
                }

                if (i < this.value) {
                    style.color = this.activeColor;
                }

                return style;
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

