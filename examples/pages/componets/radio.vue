<template>
    <div>
        <navbar>radio</navbar>
        <div class="content">
        <div class="alipay" >
            <p>单选框列表</p>
            <radio name="pay" id="alipay" value="选项A" :checked.sync="nn" >选项A</radio>
            <radio name="pay" id="wechat" value="选项B" :checked.sync="nn">选项B</radio>
            <radio name="pay" id="wech" value="选项C" :checked.sync="nn">选项C</radio>
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
