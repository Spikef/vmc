<template>
    <topbar class="vmc-navbar" :style="style" v-if="show">
        <slot name="main">
            <div class="left" @click="_onBack">
                <i class="icono-caretLeft"></i>
            </div>

            <div class="center">
                <slot></slot>
            </div>

            <div class="right"></div>
        </slot>
    </topbar>
</template>

<script type="text/ecmascript-6">
    import Topbar from './topbar.vue';
    import { env } from '../../utils';

    export default {
        components: {
            Topbar
        },
        props: {
            color: {
                type: String,
                default: '#ffffff'
            },
            backColor: {
                type: String,
                default: '#000000'
            },
            fontSize: {
                type: String,
                default: '18px'
            }
        },
        methods: {
            _onBack() {
                window.history.back();
                this.$emit('on-back');
            }
        },
        computed: {
            style() {
                return {
                    color: this.color,
                    backgroundColor: this.backColor,
                    fontSize: this.fontSize
                }
            }
        },
        data() {
            return {
                show: !env.isWechat
            }
        }
    }
</script>