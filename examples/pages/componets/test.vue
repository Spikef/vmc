<template>
    <div class="page-spinner">
        <navbar>Spinner</navbar>
        <div>
        <div class="cont"><span>blade</span><spinner color="#3c78d8" type="blade"></spinner></div>
            <div class="line vmc-1px-top"></div>
        <div class="cont"><span>snake</span><spinner color="#3c78d8" type="snake"></spinner></div>
            <div class="line vmc-1px-top"></div>
        <div class="cont"><span>double-bounce</span><spinner color="#3c78d8" type="double-bounce"></spinner></div>
            <div class="line vmc-1px-top"></div>
        <div class="cont"><span>triple-bounce</span><spinner color="#3c78d8" type="triple-bounce"></spinner></div>
            <div class="line vmc-1px-top"></div>
        <div class="cont"><span>fading-circle</span><spinner color="#3c78d8" type="fading-circle"></spinner></div>
            <div class="line vmc-1px-top"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue';
    import Spinner from '../../../src/components/spinner/spinner.vue';

    export default {
        components: {
            Navbar,
            Spinner
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .cont{
        display:flex;
        align-items: center;
        height:50px;
    }
    span{
        flex:1;
    }

</style>