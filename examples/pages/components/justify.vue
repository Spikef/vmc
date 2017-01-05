<template>
    <div id="justify">
        <navbar>文字对齐</navbar>

        <div class="content">
            <justify text="123456789"></justify>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Justify } from '../../../src';

    export default {
        components: {
            Navbar,
            Justify
        }
    }
</script>