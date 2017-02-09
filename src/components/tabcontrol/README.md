# TabControl

## Overview

选项卡。

是否全局组件：否。

## Usage

```html
<tab-control :tab-list="tabList" tab-index="0" height="200">
    <div slot="tabPage">
        <p>{{item.name}} 内容云云</p>
    </div>
</tab-control>

<tab-control :tab-list="tabList" tab-index="2" height="200">
    <div slot="tab1">
        <p>tab1 内容云云</p>
    </div>
    <div slot="tab2">
        <p>tab2 内容云云</p>
    </div>
    <div slot="tab3">
        <p v-for="i in 10">tab3 内容云云</p>
        <hr>
        <p v-for="i in 10">tab3 内容云云</p>
        <hr>
        <p v-for="i in 10">tab3 内容云云</p>
    </div>
</tab-control>

<tab-control :tab-list="tabList" tab-index="0" tab-type="2" height="200">
    <div slot="tabPage">
        <p>{{item.name}} 内容云云</p>
    </div>
</tab-control>

<tab-control :tab-list="tabList" tab-index="0" height="auto">
    <div slot="tabPage">
        <p v-for="i in 10">{{item.name}} 内容云云</p>
        <hr>
        <p v-for="i in 10">{{item.name}} 内容云云</p>
        <hr>
        <p v-for="i in 10">{{item.name}} 内容云云</p>
    </div>
</tab-control>
```

```javascript
export default {
    data() {
        return {
            tabList: [
                {
                    title: 'Tab1',
                    name: 'tab1'
                },
                {
                    title: 'Tab2',
                    name: 'tab2'
                },
                {
                    title: 'Tab3',
                    name: 'tab3'
                }
            ]
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| 根据传入tabList中各item.name自动生成 | 标签页的内容 | undefined |

## SlotItem

`SlotItem`是一种类似于`Slot`的自定义组件，用于自定义列表循环中单个元素的样式。`SlotItem`具有单独的作用域，在该作用域内，可以使用`item`来访问循环的当前元素，使用`index`来访问当前索引。

| Name | Description | Default |
| ----- | ----- | ----- |
| tabItem | 每个标签栏显示的内容 | undefined |
| tabPage | 每个标签页显示的内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| height | Number, String | 高度，可以是任意CSS格式的高度值，包括`auto` | undefined |
| tabType | Number, String | 标签栏类型：1，2 | 1 |
| lineWidth | Number, String | 当tabType=1时标签栏下横线宽度 | 由LESS变量定义 |
| activeColor | String | 标签栏高亮颜色 | 由LESS变量定义 |
| defaultColor | String | 标签栏默认颜色 | 由LESS变量定义 |
| tabIndex | Number, String | 默认激活的标签索引 | 1 |
| tabList | Array | 标签列表 | [] |

### tabList item

- title：标签栏显示的文本
- name：标签名字，用于指定`Slot`的名字

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-tab-change | 切换到某个tab时触发 | index：索引 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @TabControlTransitionDuration | 过渡动画时间 | @TransitionDuration |
| @TabControlTransitionTiming | 横线过渡动画效果 | cubic-bezier(0.35, 0, 0.25, 1) |
| @TabControlTabTextSize1 | 当type=1时的Tab文字大小 | @DefaultTextSize |
| @TabControlTabHeight1 | 当type=1时的Tab高度 | 44px |
| @TabControlTabLineWidth | 当type=1时的横线宽度 | 2px |
| @TabControlTabDefaultColor1 | 当type=1时的Tab默认颜色 | \#b2b2b2 |
| @TabControlTabActiveColor1 | 当type=1时的Tab高亮颜色 | \#000 |
| @TabControlTabBackColor1 | 当type=1时的Tab背景颜色 | \#fff |
| @TabControlTabTextSize2 | 当type=2时的Tab文字大小 | @TabControlTabTextSize1 |
| @TabControlTabHeight2 | 当type=2时的Tab高度 | 30px |
| @TabControlTabDefaultColor2 | 当type=2时的Tab默认颜色 | \#fff |
| @TabControlTabActiveColor2 | 当type=2时的Tab高亮颜色 | \#007aff |
| @TabControlTabBackColor2 | 当type=2时的Tab背景颜色 | \#fff |
| @TabControlTabBorderWidth | 当type=2时的边框宽度 | 2px |
| @TabControlTabBorderRadius | 当type=2时的圆角半径 | 6px |