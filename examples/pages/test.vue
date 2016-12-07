<template>
    <div class="page-spinner">
        <div class="page-title">Spinner</div>
        <spinner color="#b1b1b1" type="blade"></spinner>
        <spinner color="#b1b1b1" type="snake"></spinner>
        <spinner color="#b1b1b1" type="double-bounce"></spinner>
        <spinner color="#b1b1b1" type="triple-bounce"></spinner>
        <spinner color="#b1b1b1" type="fading-circle"></spinner>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Spinner } from '../../src/components';

    export default {
        components: {
            Spinner
        }
    }
</script>