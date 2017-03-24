<template>
    <transition-group tag="div" :name="'vmc-marquee-' + direction" class="vmc-marquee" :style="style">
        <div class="marquee-line"
             :class="align"
             :style="lineStyle"
             @click="_onItemClick(note)"
             v-show="index === $index"
             v-for="(note, $index) in notes"
             :key="$index">

            <i class="icono-volumeHigh"></i>
            <span class="vmc-nowrap">{{_getText(note)}}</span>
            <i class="icono-caretRight"></i>
        </div>
    </transition-group>
</template>

<script type="es6">
    import { getCSSSize } from '../../utils';

    export default {
        props: {
            list: null,
            height: [String, Number],
            backColor: String,
            color: String,
            align: String,  // left, center, right
            autoLink: {
                type: Boolean,
                default: true
            },
            second: {
                type: [Number, String],
                default: 3
            },
            // up, down
            direction: {
                type: String,
                default: 'up'
            }
        },
        data() {
            return {
                index: 0
            }
        },
        computed: {
            notes() {
                var list = this.list;
                if (!list) {
                    return [];
                } else if (!Array.isArray(list)) {
                    return [list];
                } else {
                    return list;
                }
            },
            style() {
                var style = {};
                if (this.height) {
                    style.height = getCSSSize(this.height);
                }
                if (this.color) {
                    style.color = this.color;
                }
                if (this.backColor) {
                    style.background = this.backColor;
                }
                return style;
            },
            lineStyle() {
                var style = {};
                if (this.height) {
                    style.height = getCSSSize(this.height);
                }
                return style;
            }
        },
        methods: {
            _onItemClick(note) {
                if (this.autoLink && note && note.link && typeof note.link === 'string') {
                    window.location.href = note.link;
                } else {
                    this.$emit('on-item-click', note);
                }
            },
            _getText(note) {
                return note.text || note;
            }
        },
        mounted() {
            this.timer = setInterval(() => {
                if (this.notes.length <= 1) return;

                var index = this.index + 1;
                if (index === this.notes.length) {
                    index = 0;
                }
                this.index = index;
            }, Number(this.second) * 1000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
        }
    }
</script>
