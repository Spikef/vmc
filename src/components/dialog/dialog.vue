<template>
    <div v-show="show" class="vmc-dialog-wrapper">
        <mask></mask>
        <div class="vmc-dialog">
            <div class="dialog-head" v-child="header"></div>
            <div class="dialog-body vmc-1px-top" v-child="content"></div>
            <div class="dialog-foot vmc-1px-top" v-child="footer"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import component from '../../mixins/component';
    import Mask from '../mask';

    export default {
        mixins: [component],
        props: {
            show: Boolean
        },
        components: {
            Mask
        }
    }
</script>