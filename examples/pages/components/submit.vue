<template>
    <div id="submit">
        <navbar>提交按钮</navbar>

        <div class="content">
            <div class="button-list">
                <submit type="primary" @submit="onSubmit" v-ref:submit>保存</submit>
                <submit type="primary" disabled>不可点击的提交按钮</submit>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Submit } from '../../../src';

    export default {
        components: {
            Navbar,
            Submit
        },
        methods: {
            onSubmit() {
                this.$Toast('正在提交数据...');
                setTimeout(() => {
                    this.$refs.submit.done();
                }, 5000);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #submit {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;

            .button-list {
                padding-top: 10px;

                .vmc-button {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>