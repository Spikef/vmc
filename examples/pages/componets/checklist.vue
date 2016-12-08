<template>
    <div id="checklisthead">
        <navbar>checklist</navbar>
        <div class="checkcontent">
        <div class="ali" >
            <p class="citem">复选框列表</p>
            <checkbox name="checklisA" id="checkA"  value="选项A" :checked.sync="cli">选项A</checkbox>
            <checkbox name="checklisB" id="checkB" value="选项B" :checked.sync="cli" >选项B</checkbox>
            <checkbox name="checklisC" id="checkC" value="选项C" :checked.sync="cli" >选项C</checkbox>
        </div>
        <div class="checkselect"> <span class="s">选中的项:</span> <span class="checkvalue"> {{ cli | json }} </span></div>
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
                cli:[]

            }

        }

    }

</script>
<style rel="stylesheet/less" lang="less">
  #checklisthead {
      .citem {
          font-size: 15px;


      }
      .ali {
          padding-left: 10px;
          height: 125px;
          width: 100%;
          background-color: #fafafa;
      }
      .checkselect {
          display: flex;
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