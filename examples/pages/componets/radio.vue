<template>
    <div>
        <navbar>radio</navbar>
        <div class="cnt" style="width:100%;height:100%">
        <div class="alipay" >
            <p>单选框列表</p>
            <radio name="p" id="alipay" value="选项A" :checked.sync="nn" >选项A</radio>
            <radio name="p" id="wechat" value="选项B" :checked.sync="nn">选项B</radio>
            <radio name="p" id="wech" value="选项C" :checked.sync="nn">选项C</radio>
        </div>
            <div class="sel"><span>选中的项:</span><span class="se">{{nn}}</span>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue';
    import Radio from '../../../src/components/radio/radio.vue';
    export default {
        components: {
            Navbar,
            Radio
        },
        data(){
            return{
                nn: ''
            }

        }

    }
</script>
<style rel="stylesheet/less" lang="less">
    .alipay{
        padding-left:10px;
        height:125px;
        width:100%;
        background-color: #fafafa;

    }
    .sel{
        padding-left:10px;
        margin-top:20px;
        width:100%;
        height:40px;
        background-color: #fafafa;
    }


</style>
