<template>
    <div id="messages">
        <navbar>Message Box</navbar>
        <div id="messageboxs">
            <div @click="clicks" id="alerts" class="messagess">
               打开alert提示框
            </div>
            <div @click="clickc" id="confirms" class="messagess">
                打开confirm提示框
            </div>
            <div @click="clickp" id="prompts" class="messagess">
                打开prompt提示框
            </div>

        </div>



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
                this.$Alert("alert提示框");
            },
            clickc(){
                this.$Confirm("confirm提示框");
            },
            clickp(){

            }

        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    #messages {
        .messagess {
            background-color: #f6f8fa;
            text-align: center;
            line-height: 50px;
            margin-top: 50px;
            border-radius: 8px;
        }

    }
</style>
