<template>
    <div id="card">
        <navbar>卡片</navbar>

        <card>
            <child name="header">普通卡片</child>
            <child name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </child>
            <child name="footer">尾部</child>
        </card>

        <card status="expand">
            <child name="header">可折叠的卡片</child>
            <child name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </child>
            <child name="footer">尾部</child>
        </card>

        <card status="collapse">
            <child name="header">可折叠的卡片(默认折叠)</child>
            <child name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </child>
            <child name="footer">尾部</child>
        </card>

        <card>
            <child name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </child>
        </card>

        <card class="with-shadow">
            <child name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </child>
        </card>
    </div>
</template>

<script type="es6">
    import { Navbar, Card } from 'vmc';

    export default {
        components: {
            Navbar,
            Card
        },
        data() {
            return {
                title: '卡片'
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #card {
        background: #eeeeee;
    }
</style>
