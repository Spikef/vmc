<template>
    <div id="radios">
        <navbar>radio</navbar>
        <div class="cnt" >
        <div class="aly" >
            <p>单选框列表</p>
            <radio name="p" id="selectA" value="选项A" :checked.sync="radiovalue" >选项A</radio>
            <radio name="p" id="selectB" value="选项B" :checked.sync="radiovalue">选项B</radio>
            <radio name="p" id="selectC" value="选项C" :checked.sync="radiovalue">选项C</radio>
        </div>
            <div class="radioselect"><span>选中的项:</span><span class="selects">{{radiovalue}}</span>
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
                radiovalue: ''
            }

        }

    }
</script>
<style rel="stylesheet/less" lang="less">
    #radios {
        .aly {
            padding-left: 10px;
            height: 125px;
            width: 100%;
            background-color: #fafafa;

        }
        .radioselect {
            display:flex;
            justify-content: center;
            align-items: center;
            padding-left: 10px;
            margin-top: 20px;
            width: 100%;
            height: 40px;
            background-color: #fafafa;
        }
    }


</style>
