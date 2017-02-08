# Marquee

## Overview

公告组件，用于滚动显示网页公告。

是否全局组件：否。

## Usage

```html
<marquee :list="list" direction="down" second="4" align="center"></marquee>
```

```javascript
export default {
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
                ]
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| list | Array, Any | 公告列表，非数组时即表示只有一条公告 | [] |
| height | String, Number | 高度 | 由LESS变量定义 |
| backColor | String | 背景色 | 由LESS变量定义 |
| color | String | 文字颜色 | 由LESS变量定义 |
| align | String | 对齐方式：left，center，right | left |
| autoLink | Boolean | 点击时自动跳转链接 | true |
| second | Number, String | 滚动间隔时间(单位：秒) | 3 |
| direction | String | 滚动方向：up，down | up |

### list item

可以是字符串或者对象。

**字符串：**

公告文本

**对象：**

- text：公告文本
- link：公告链接

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-item-click | 点击某条公告时触发 | item：传入的对象 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @MarqueeTransitionDuration | 切换动画过渡时间 | .2s |
| @MarqueeHeight | 高度 | 30px |
| @MarqueeBackColor | 背景色 | \#efefef |
| @MarqueeTextColor | 文字颜色 | @PrimaryColor |
| @MarqueeTextSize | 文字大小 | @DefaultTextSize |
| @MarqueeIconScale | 图标缩放比例 | 0.6 |