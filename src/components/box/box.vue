<template>
    <div class="vmc-box" :style="style">
        <div class="vmc-box-content" :style="boxStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            ratio: {
                default: 1
            },
            background: null
        },
        computed: {
            style() {
                var scale = Number(this.ratio) * 100;
                if (isNaN(scale)) return;
                scale = scale  + '%';
                return {
                    paddingBottom: scale
                }
            },
            boxStyle() {
                var back = this.background;
                if (back) {
                    var style = {};
                    if (/\.|\\|\//.test(back) && !/^url/.test(back)) {
                        style.backgroundImage = 'url("' + back + '")';
                    } else {
                        style.backgroundColor = back;
                    }

                    return style;
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-box {
        height: 0;
        position: relative;

        .vmc-box-content {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-size: 100% 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>