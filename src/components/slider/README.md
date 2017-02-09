# Slider

## Overview

轮播图插件。

是否全局组件：否。

## Usage

```html
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
```

```javascript
export default {
    data() {
        return {
            list: [],
            dataList: [
                {
                    image: '/static/image/slider/1.jpg',
                    title: '标题标题一',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/2.jpg',
                    title: '标题标题二',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/3.jpg',
                    title: '标题标题三',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/4.jpg',
                    title: '标题标题四',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/5.jpg',
                    title: '标题标题五',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/6.jpg',
                    title: '标题标题六标题标题六标题标题六',
                    link: 'http://m.baidu.com'
                },
                {
                    image: '/static/image/slider/7.jpg',
                    title: '标题标题七标题标题七',
                    link: 'http://m.baidu.com'
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
```
## SlotItem

`SlotItem`是一种类似于`Slot`的自定义组件，用于自定义列表循环中单个元素的样式。`SlotItem`具有单独的作用域，在该作用域内，可以使用`item`来访问循环的当前元素，使用`index`来访问当前索引。

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 显示单张图时每个slider显示的内容 | &lt;img class="slider-image" :src="item.image"&gt;<br>&lt;p class="slider-title" v-if="item.title"&gt;{{item.title}}&lt;/p&gt; |
| default | 显示多张图时每个slider显示的内容 | &lt;img class="slider-image" :src="item.image"&gt; |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| auto | Number, String | 高度，可以是任意CSS格式的高度值，包括`auto` | undefined |
| ratio | Number, String | 高宽比，如果同时设置了height，则该设置无效 | undefined |
| perPage | Number, String | 每组图片显示的张数 | 1 |
| gutter | Number, String | 多张图片时，图片之间的间距 | 由LESS变量定义 |
| height | Number, String | 高度 | auto |
| sliderIndex | Number, String | 初始显示第几张图片 | 1 |
| list | Array | 图片列表 | [] |
| dots | Boolean, String | 是否显示点(false)，如果显示，则表示显示的位置(top、bottom) | bottom |

### list item

- image：图片地址
- title：标题文本，如果不指定则不显示标题
- link：图片链接地址，如果不指定则点击图片时只分发事件

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-item-click | 点击某张图片时，如果不包含可以自动跳转的link，则触发该事件。<br>注意，对于自定义的`SlotItem`该事件也不会触发。 | item：传入的对象<br>index：索引 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @SliderTitlePadding | 标题栏内边距 | 10px |
| @SliderTitleBackColor | 标题栏背景颜色 | rgba(0,0,0,.7) |
| @SliderTitleTextColor | 标题栏文字颜色 | \#fff |
| @SliderTitleTextSize | 标题栏文字大小 | @DefaultTextSize |
| @SliderDotsDistance | 点的上或下边距 | 8px |
| @SliderDotSize | 点的大小 | 6px |
| @SliderDotColor | 点的默认颜色 | \#d0cdd1 |
| @SliderDotActiveColor | 点的当前颜色 | \#323232 |
| @SliderGutter | 多张图片时，图片之间的间距 | 0 |