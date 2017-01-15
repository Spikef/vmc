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
    import { Navbar, Card, vTextarea } from '../../../src';

    export default {
        components: {
            Navbar,
            Card,
            vTextarea
        },
        methods: {
            submit(submit) {
                setTimeout(() => {
                    this.$Toast('提交成功!');
                    submit.done();
                }, 2000);
            }
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