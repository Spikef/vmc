<template>
    <div id="slider">
        <navbar>轮播图</navbar>

        <div class="content">
            <div class="label">自动靠图片尺寸撑开的轮播图</div>
            <slider :list="list"></slider>

            <div class="label">固定高度为200px</div>
            <slider :list="dataList" height="200"></slider>

            <div class="label">设置高宽比为0.6</div>
            <slider :list="dataList" ratio="0.6"></slider>

            <div class="label">自动靠图片尺寸撑开的轮播图(自动轮播)</div>
            <slider :list="list" auto="3"></slider>

            <div class="label">固定高度为200px(自动轮播)</div>
            <slider :list="dataList" height="200" auto="3"></slider>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Slider } from '../../../src';

    export default {
        components: {
            Navbar,
            Slider
        },
        data() {
            return {
                list: [],
                dataList: [
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJlgq0z-IC78PAA1UbwykJUgAAXxIwMAwQcADVSH340.jpg',
                        title: '标题标题一',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJlgq00OIL0EGABOuIQmyjjQAAXxJAC-UhkAE645592.jpg',
                        title: '标题标题二',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJ1gq00WIXw_GAA47r_8gjqgAAXxJAH8qOMADjvH566.jpg',
                        title: '标题标题三',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJlgq00iIbQ0UAAofFdZJHZAAAXxJAM2TcsACh8t156.jpg',
                        title: '标题标题四',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJ1gq00qId06-AAsq38fHnuEAAXxJQAeiD8ACyr3253.jpg',
                        title: '标题标题五',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJ1gq00yIWzAOABSTdywNsdgAAXxJQERES8AFJOP451.jpg',
                        title: '标题标题六标题标题六标题标题六',
                        link: 'http://m.baidu.com'
                    },
                    {
                        image: 'http://desk.fd.zol-img.com.cn/t_s1920x1080c5/g5/M00/0D/01/ChMkJ1gq01qIU0XoAA1P2c04RgIAAXxJwHYy-8ADU_x258.jpg',
                        title: '标题标题七标题标题七',
                        link: 'http://m.baidu.com'
                    }
                ]
            }
        },
        ready() {
            setTimeout(() => {
                this.list = this.dataList;
            }, 1000);
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #slider {
        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;

            .label {
                height: 40px;
                line-height: 40px;
                background-color: #00c0ef;
                color: #ffffff;
                font-size: 16px;
                text-align: center;
            }
        }
    }
</style>