<template>
    <div>
        <navbar>checklist</navbar>
        <div class="alipay" >
            <checkbox name="pay" id="a"  value="选项A" :checked.sync="aa">选项A</checkbox>
            <checkbox name="pay" id="b" value="选项B" :checked.sync="aa" >选项B</checkbox>
            <checkbox name="pay" id="c" value="选项C" :checked.sync="aa" >选项C</checkbox>
        </div>
        <div class="sel"><span>选中的项:</span> <span>{{ aa | json }}</span></div>

    </div>
</template>
<style>



   .alipay{
       margin-top:20px;
       margin-left:20px;
   }
    .sel{
        margin-left:20px;
        margin-top:15px;
        display:flex;
        justify-content: space-between;
    }

</style>

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
