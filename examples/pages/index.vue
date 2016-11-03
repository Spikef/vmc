<template>
    <div>
        Hello world!

        <mask :show="true"></mask>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../../src/components/mask/mask.vue';

    export default {
        components: {
            Mask
        },
        ready() {
            console.log('ready')
        }
    }
</script>