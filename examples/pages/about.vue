<template>
    <div id="about">
        <navbar>关于</navbar>
        <div class="content">
            <p>vue mobile components(vmc)是一套移动端组件库。参考了vux、mint-ui等知名的vue组件库。</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar } from '../../src';

    export default {
        name: 'about',
        components: {
            Navbar
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #about {
        .content {
            padding-left: 10px;
            padding-right: 10px;
        }
    }
</style>