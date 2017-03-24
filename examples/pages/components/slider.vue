<template>
    <div id="slider">
        <navbar>轮播图</navbar>

        <div class="content">
            <div class="label">自动靠图片尺寸撑开的轮播图</div>
            <slider :list="list"></slider>

            <div class="label">固定高度为200px</div>
            <slider :list="dataList" height="200"></slider>

            <div class="label">设置高宽比为0.55</div>
            <slider :list="dataList" ratio="0.55"></slider>

            <div class="label">自动靠图片尺寸撑开的轮播图(自动轮播)</div>
            <slider :list="list" auto="3"></slider>

            <div class="label">固定高度为200px(自动轮播)</div>
            <slider :list="dataList" height="200" auto="3"></slider>

            <div class="label">一页显示多张图片</div>
            <slider :list="imageList" height="auto" per-page="3"></slider>

            <div class="label">自定义显示的内容</div>
            <slider :list="list" height="200">
                <img class="slider-image" :src="item.image" :alt="item.image">
            </slider>

            <div class="label">自定义显示的内容</div>
            <slider :list="imageList" height="auto" per-page="3" gutter="6" dots="false">
                <img class="slider-image" :src="item.image" :alt="item.image">
            </slider>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Slider } from 'vmc';

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
                        image: '/static/image/slider/1.jpg',
                        title: '标题标题一',
                        link: 'http://m.baidu.com/s?word=1'
                    },
                    {
                        image: '/static/image/slider/2.jpg',
                        title: '标题标题二',
                        link: 'http://m.baidu.com/s?word=2'
                    },
                    {
                        image: '/static/image/slider/3.jpg',
                        title: '标题标题三',
                        link: 'http://m.baidu.com/s?word=3'
                    },
                    {
                        image: '/static/image/slider/4.jpg',
                        title: '标题标题四',
                        link: 'http://m.baidu.com/s?word=4'
                    },
                    {
                        image: '/static/image/slider/5.jpg',
                        title: '标题标题五',
                        link: 'http://m.baidu.com/s?word=5'
                    },
                    {
                        image: '/static/image/slider/6.jpg',
                        title: '标题标题六标题标题六标题标题六',
                        link: 'http://m.baidu.com/s?word=6'
                    },
                    {
                        image: '/static/image/slider/7.jpg',
                        title: '标题标题七标题标题七',
                        link: 'http://m.baidu.com/s?word=7'
                    }
                ],
                imageList: [
                    {
                        image: '/static/image/slider/11.jpg'
                    },
                    {
                        image: '/static/image/slider/12.jpg'
                    },
                    {
                        image: '/static/image/slider/13.jpg'
                    },
                    {
                        image: '/static/image/slider/14.jpg'
                    },
                    {
                        image: '/static/image/slider/15.jpg'
                    },
                    {
                        image: '/static/image/slider/16.jpg'
                    },
                    {
                        image: '/static/image/slider/17.jpg'
                    },
                    {
                        image: '/static/image/slider/18.jpg'
                    },
                    {
                        image: '/static/image/slider/19.jpg'
                    },
                    {
                        image: '/static/image/slider/20.jpg'
                    },
                    {
                        image: '/static/image/slider/21.jpg'
                    },
                    {
                        image: '/static/image/slider/22.jpg'
                    },
                    {
                        image: '/static/image/slider/23.jpg'
                    },
                    {
                        image: '/static/image/slider/24.jpg'
                    },
                    {
                        image: '/static/image/slider/25.jpg'
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
