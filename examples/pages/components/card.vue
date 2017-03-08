<template>
    <div id="card">
        <navbar>卡片</navbar>

        <card>
            <div name="header">普通卡片</div>
            <div name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
            <div name="footer">尾部</div>
        </card>

        <card status="expand">
            <div name="header">可折叠的卡片</div>
            <div name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
            <div name="footer">尾部</div>
        </card>

        <card status="collapse">
            <div name="header">可折叠的卡片(默认折叠)</div>
            <div name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
            <div name="footer">尾部</div>
        </card>

        <card>
            <div name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
        </card>

        <card class="with-shadow">
            <div name="content">
                头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
            </div>
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
