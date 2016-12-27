<template>
    <span class="vmc-button-v" :class="{disabled: disabled}" :style="style">
        <div class="vmc-button">
            <slot name="icon-left"></slot>
            <slot>{{text}}</slot>
            <spinner color="white" size="20"></spinner>
        </div>
    </span>
</template>

<script type="text/ecmascript-6">
    import vButton from './v-button.vue';
    import Spinner from '../spinner';

    export default {
        components: {
            Spinner
        },
        extends: vButton
    }
</script>