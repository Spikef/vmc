<template>
    <div>
        <navbar>Message Box</navbar>
        <div id="di">
            <div @click="clicks" id="da" content="tit">
               打开alert提示框
            </div>
            <div @click="clickc" id="dc">
                打开confirm提示框
            </div>
            <div @click="clickp" id="dp">
                打开prompt提示框
            </div>

        </div>
        <alert v-ref:alert  content="确认"></alert>
        <confirm v-ref:confirm content="确认删除？"></confirm>

    </div>
</template>
<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue'
    import Alert from '../../../src/components/alert/alert.vue';
    import Confirm from '../../../src/components/confirm/confirm.vue';
    import Dialog from '../../../src/components/dialog/dialog.vue';



    export default {
        components: {
            Navbar,
            Alert,
            Confirm,
            Dialog

        },
        methods: {
            clicks() {
                this.$refs.alert._show('');
            },
            clickc(){
                this.$refs.confirm._show("");
            },
            clickp(){

            }

        }
    }
</script>
<style rel="stylesheet/less" lang="less">

    #di div{
        background-color: #f6f8fa;
        text-align: center;
        line-height:50px;
        margin-top:50px;
        border-radius:8px;
    }

</style>
