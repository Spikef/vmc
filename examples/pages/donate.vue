<template>
    <div id="donate">
        <h2>Donate</h2>
        <div class="content">
            {{msg}}
        </div>
        <toolbar :sel-index="2"></toolbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import Toolbar from '../../src/components/toolbar.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components: {
            Toolbar
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #donate{
        h2{
            margin:0;
            padding:0;
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
        }
    }
</style>
