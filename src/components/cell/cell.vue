<template>
    <div class="vmc-cell vmc-1px-top-bottom">
        <div class="cell-title">
            <slot>{{title}}</slot>
        </div>
        <div class="cell-arrow" v-if="arrow">
            <slot name="arrow">
                <i class="icono-caretRight"></i>
            </slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: String,
            arrow: {
                type: [Boolean, String],
                default: true,
                coerce: val => !(val === false || val === 'false')
            }
        }
    }
</script>