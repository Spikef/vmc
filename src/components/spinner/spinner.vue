<template>
    <component :is="spinner" :size="size" :color="color"></component>
</template>

<script type="es6">
    const SPINNERS = [
        'blade',
        'snake',
        'double-bounce',
        'triple-bounce',
        'fading-circle'
    ];

    const parseSpinner = function(index) {
        index = index || 0;

        if (/^\d+$/.test(index)) {
            if (SPINNERS.length <= index) {
                console.warn(`'${index}' spinner not found, use the default spinner.`);
                index = 0;
            }
            return SPINNERS[index];
        }

        if (SPINNERS.indexOf(index) === -1) {
            console.warn(`'${index}' spinner not found, use the default spinner.`);
            index = SPINNERS[0];
        }

        return index;
    };

    /**
     * spinner
     * @module components/spinner
     * @desc 加载动画
     * @param {(string|number)} [type=snake] - 显示类型，传入类型名或者类型 id，可选 `snake`, `dobule-bounce`, `triple-bounce`, `fading-circle`
     * @param {number} size - 尺寸
     * @param {string} color - 颜色
     *
     * @example
     * <spinner type="snake"></spinner>
     *
     * <!-- double-bounce -->
     * <spinner :type="2"></spinner>
     *
     * <!-- default blade -->
     * <spinner :size="30" color="#999"></spinner>
     */
    export default {
        computed: {
            spinner() {
                return `spinner-${parseSpinner(this.type)}`;
            }
        },
        components: {
            SpinnerBlade: require('./spinner/blade.vue'),
            SpinnerSnake: require('./spinner/snake.vue'),
            SpinnerDoubleBounce: require('./spinner/double-bounce.vue'),
            SpinnerTripleBounce: require('./spinner/triple-bounce.vue'),
            SpinnerFadingCircle: require('./spinner/fading-circle.vue')
        },
        props: {
            type: [Number, String],
            size: [Number, String],
            color: String
        }
    };
</script>
