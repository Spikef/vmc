<template>
    <div class="vmc-cell vmc-1px-top-bottom">
        <div class="cell-title">
            <slot>{{title}}</slot>
        </div>
        <div class="cell-arrow" v-if="props_arrow">
            <slot name="arrow">
                <i class="icono-caretRight"></i>
            </slot>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            title: String,
            arrow: {
                type: [Boolean, String],
                default: true
            }
        },
        computed: {
            props_arrow: {
                get() {
                    var val = this.arrow;
                    return !(val === false || val === 'false');
                }
            }
        }
    }
</script>
