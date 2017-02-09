<template>
    <div id="spinner">
        <navbar>Spinner</navbar>

        <div>
            <div class="line vmc-1px-bottom">
                <span class="label">blade</span>
                <spinner type="blade"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">snake</span>
                <spinner type="snake"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">double-bounce</span>
                <spinner type="double-bounce"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">triple-bounce</span>
                <spinner type="triple-bounce"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">fading-circle</span>
                <spinner type="fading-circle"></spinner>
            </div>

            <div class="line vmc-1px-bottom">
                <span class="label">blade</span>
                <spinner color="#3c78d8" size="16" type="blade"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">snake</span>
                <spinner color="#3c78d8" size="16" type="snake"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">double-bounce</span>
                <spinner color="#3c78d8" size="16" type="double-bounce"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">triple-bounce</span>
                <spinner color="#3c78d8" size="16" type="triple-bounce"></spinner>
            </div>
            <div class="line vmc-1px-bottom">
                <span class="label">fading-circle</span>
                <spinner color="#3c78d8" size="16" type="fading-circle"></spinner>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Spinner } from '../../../src';

    export default {
        components: {
            Navbar,
            Spinner
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #spinner {
        .line {
            display: flex;
            align-items: center;
            height: 50px;
            padding: 0 10px;

            .label {
                flex:1;
            }
        }
    }
</style>