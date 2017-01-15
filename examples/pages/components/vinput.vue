<template>
    <div id="m-input">
        <navbar>输入框2</navbar>

        <div class="content">
            <cell arrow="false">
                <v-input placeholder="请输入用户名，长度为6-12位" v-valid="valid" :validator="validName" error-message="用户名长度必须为6-12位"></v-input>
            </cell>
            <cell arrow="false">
                <v-input placeholder="请输入密码，长度为6-16位" v-valid="valid" :validator="validPass" type="password" :value.sync="form.password1"></v-input>
            </cell>
            <cell arrow="false">
                <v-input placeholder="请再次确认密码" v-valid="valid" :validator="validPass2" type="password" :value.sync="form.password2"></v-input>
            </cell>
        </div>

        <div class="button">
            <submit type="danger" @submit="submit" v-valid>保存</submit>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, vInput, Cell, Submit } from '../../../src';

    export default {
        components: {
            Navbar,
            vInput,
            Cell,
            Submit
        },
        data() {
            return {
                form: {
                    name: '',
                    password1: '',
                    password2: ''
                },
                validName: /^.{6,12}$/,
                validPass: {
                    expression: /^.{6,16}$/,
                    message: '密码长度必须为6-16位'
                },
                validPass2: [
                    {
                        expression: /^.{6,16}$/,
                        message: '密码长度必须为6-16位'
                    },
                    value => {
                        if (value !== this.form.password1) {
                            return '两次密码输入不一致';
                        } else {
                            return true;
                        }
                    }
                ]
            }
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
    #m-input {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
            background: #eeeeee;
            padding-bottom: 40px;

            .input {
                height: 40px;
            }
        }

        .button {
            position: absolute;
            width: 100%;
            bottom: 0;
            z-index: 1;
        }
    }
</style>