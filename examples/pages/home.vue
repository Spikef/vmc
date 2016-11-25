<template>
    <div id="home">
        <h2>Home</h2>
        <div class="content">
            <home-grid></home-grid>
        </div>
        <toolbar :sel-index="0"></toolbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import Toolbar from '../../src/components/toolbar.vue';
    import HomeGrid from '../../src/components/home-grid.vue';

    export default{

        components: {
            Toolbar,
            HomeGrid
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #home{
        p,h2{
            margin:0;
            padding:0;
        }
        h2{
            display:flex;
            align-items:center;
            justify-content:center;
            height:50px;
            width:100%;
            background-color:#35495E;
        }
        .content{
            position:absolute;
            top:50px;
            width:100%;
            background-color:#fff;
        }
    }
</style>