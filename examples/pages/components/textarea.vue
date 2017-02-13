<template>
    <div id="textarea">
        <navbar>文本框</navbar>

        <div class="content">
            <card>
                <child name="content">
                    <v-textarea placeholder="请输入您的评论内容" min="10" max="15"></v-textarea>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Card, vTextarea } from 'vmc';

    export default {
        components: {
            Navbar,
            Card,
            vTextarea
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #textarea {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
            background: #eeeeee;
            padding-bottom: 40px;
        }
    }
</style>