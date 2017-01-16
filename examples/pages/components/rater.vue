<template>
    <div id="rater">
        <navbar>评分</navbar>

        <div class="content">
            <div class="vmc-row">
                <label>普通评分</label>
                <rater value="4"></rater>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Rater } from '../../../src';

    export default {
        components: {
            Navbar,
            Rater
        },
        data() {
            return {

            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #rater {
        background: #eeeeee;
    }
</style>