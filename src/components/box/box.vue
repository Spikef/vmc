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
                default: 1,
                description: '高宽比'
            },
            background: {
                description: '背景图或者背景颜色'
            }
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