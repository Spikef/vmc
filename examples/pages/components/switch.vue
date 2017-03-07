<template>
    <div id="switch">
        <navbar>开关</navbar>

        <div class="content">
            <card>
                <child name="header">普通开关</child>
                <child name="content">
                    <switch :checked.sync="checked1">是否选择？</switch>
                </child>
                <child name="footer">
                    选中状态: {{checked1}}
                </child>
            </card>

            <card>
                <child name="header">默认关闭</child>
                <child name="content">
                    <switch value="是" :checked.sync="checked2">是否选择？</switch>
                </child>
                <child name="footer">
                    选中的值: {{checked2 | json}}
                </child>
            </card>

            <card>
                <child name="header">禁用状态</child>
                <child name="content">
                    <switch :checked.sync="checked3" disabled>是否选择？嘿嘿嘿，不让你选。</switch>
                </child>
                <child name="footer">
                    选中状态: {{checked3}}
                </child>
            </card>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Switch, Card } from 'vmc';

    export default {
        components: {
            Navbar,
            Switch,
            Card
        },
        data() {
            return {
                checked1: true,
                checked2: [],
                checked3: false
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #switch {
        background: #eeeeee;
    }
</style>
