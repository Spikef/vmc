<template>
    <div id="nowrap">
        <navbar>文本省略</navbar>

        <div class="content">
            <card>
                <child name="header">只显示一行</child>
                <child name="content">
                    <div class="vmc-nowrap">{{text}}</div>
                </child>
            </card>

            <card>
                <child name="header">只显示两行</child>
                <child name="content">
                    <div class="vmc-nowrap-2">{{text}}</div>
                </child>
            </card>

            <card>
                <child name="header">只显示五行</child>
                <child name="content">
                    <div class="vmc-nowrap-5">{{text}}</div>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Card } from '../../../src';

    export default {
        components: {
            Navbar,
            Card
        },
        data() {
            return {
                text: '盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土地里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻俏俏的，草软绵绵的。'
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #nowrap {
        background: #eeeeee;
    }
</style>