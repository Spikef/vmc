<template>
    <div id="switch">
        <navbar>开关</navbar>

        <div class="content">
            <card>
                <div name="header">普通开关</div>
                <div name="content">
                    <toggle v-model="checked1">是否选择？</toggle>
                </div>
                <div name="footer">
                    选中状态: {{checked1}}
                </div>
            </card>

            <card>
                <div name="header">默认关闭</div>
                <div name="content">
                    <toggle origin-value="是" v-model="checked2">是否选择？</toggle>
                </div>
                <div name="footer">
                    选中的值: {{checked2}}
                </div>
            </card>

            <card>
                <div name="header">禁用状态</div>
                <div name="content">
                    <toggle v-model="checked3" disabled>是否选择？嘿嘿嘿，不让你选。</toggle>
                </div>
                <div name="footer">
                    选中状态: {{checked3}}
                </div>
            </card>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Toggle, Card } from 'vmc';

    export default {
        components: {
            Navbar,
            Toggle,
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
