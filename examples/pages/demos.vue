<template>
    <div id='demos'>
        <h2>Dome list</h2>
        <div class='content'>
            <div class="center">
                <demo-list-form></demo-list-form>
                <demo-list-ui></demo-list-ui>
            </div>
        </div>
        <toolbar :sel-index="1"></toolbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import Toolbar from '../../src/components/toolbar.vue';
    import DemoListForm from '../../src/components/demo-list-form.vue';
    import DemoListUi from '../../src/components/demo-list-ui.vue';

    export default {
        components: {
            Toolbar,
            DemoListForm,
            DemoListUi
        },
    }
</script>

<style rel="stylesheet/less" lang="less">
    #demos{
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
        .content {
            overflow:auto;
            height:100%;
            position:absolute;
            top:50px;
            width:100%;
            background-color:#fff;
            .center{
                padding-bottom:105px;
            }
        }
    }
</style>