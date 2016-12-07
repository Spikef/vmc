<template>
    <div>
        <navbar>checklist</navbar>
        <div class="cot">
        <div class="ali" >
            <p>复选框列表</p>
            <checkbox name="pay" id="a"  value="选项A" :checked.sync="aa">选项A</checkbox>
            <checkbox name="pay" id="b" value="选项B" :checked.sync="aa" >选项B</checkbox>
            <checkbox name="pay" id="c" value="选项C" :checked.sync="aa" >选项C</checkbox>
        </div>
        <div class="sle"> <span class="s">选中的项:</span> <span class="sec"> {{ aa | json }} </span></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue';
    import Checkbox from '../../../src/components/checkbox/checkbox.vue';
    export default {
        components: {
            Navbar,
            Checkbox

        }
        ,
        data(){
            return{
                aa:[]

            }

        }

    }

</script>
<style rel="stylesheet/less" lang="less">

    p{
        font-size:15px;
        padding-left:18px;

    }
    .ali{
        padding-left:10px;
        height:125px;
        width:100%;
        background-color: #fafafa;
    }
    .sle{
        padding-left:10px;
        margin-top:20px;
        width:100%;
        height:40px;
        background-color: #fafafa;
    }
    .sec{
        padding-left:10px;
    }


</style>