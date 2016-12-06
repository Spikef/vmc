<template>
    <div class="page-spinner">
        <div class="page-title">Spinner</div>
        <spinner color="#26a2ff" type="blade"></spinner>
        <spinner color="#26a2ff" type="snake"></spinner>
        <spinner color="#26a2ff" type="double-bounce"></spinner>
        <spinner color="#26a2ff" type="triple-bounce"></spinner>

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