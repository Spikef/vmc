<template>
    <div id="marquee">
        <navbar>跑马灯</navbar>

        <div class="content">
            <marquee :list="list"></marquee>

            <marquee :list="list" direction="down" second="4" align="center"></marquee>

            <marquee list="只有一条内容的公告" align="right"></marquee>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Marquee,vButton } from '../../../src';

    export default {
        components: {
            Navbar,
            Marquee,
            vButton
        },
        data() {
            return {
                list: [
                    {
                        text: '管窥一豹看新日M 黑科技成果或创造全新出行方式?',
                        link: 'http://www.iautos.cn/news/94458.html'
                    },
                    {
                        text: '实施创新驱动发展战略 为建设世界科技强国而努力奋斗',
                        link: 'http://www.stcsm.gov.cn/xwpt/kjdt/348721.htm'
                    },
                    {
                        text: '科技为音乐教育插上翅膀(深观察)',
                        link: 'http://paper.people.com.cn/rmrb/html/2017-01/19/nw.D110000renmrb_20170119_5-17.htm'
                    }
                ],
                index: 0
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #marquee {
        .vmc-marquee {
            margin-top: 50px;
        }
    }
</style>