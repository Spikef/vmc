# Rater

## Overview

评分插件。

是否全局组件：否。

## Usage

```html
<row title="普通评分">
    <rater :value="point1"></rater>
</row>
<row title="允许评0分">
    <rater :value="point1" min="0"></rater>
</row>
<row title="仅展示评分">
    <rater :value="point1" disabled></rater>
</row>
<row :title="'评分为小数(' + point2 + ')'">
    <rater :value="point2" disabled></rater>
</row>
<row title="自定义可评分">
    <rater :value="point1" max="6"></rater>
</row>
<row title="自定义大小">
    <rater :value="point1" size="15"></rater>
</row>
<row title="自定义颜色">
    <rater :value="point1" active-color="#00C85E"></rater>
</row>
<row title="自定义间距">
    <rater :value="point1" gutter="4"></rater>
</row>
<row title="自定义形状">
    <rater :value="point1" star="☻"></rater>
</row>
```

```javascript
export default {
    data() {
        return {
            point1: 4,
            point2: 3.5
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| min | Number, String | 高度，可以是任意CSS格式的高度值，包括`auto` | undefined |
| max | Number, String | 标签栏类型：1，2 | 1 |
| value | Number, String | 当tabType=1时标签栏下横线宽度 | 由LESS变量定义 |
| activeColor | String | 星的高亮颜色 | 由LESS变量定义 |
| defaultColor | String | 星的默认颜色 | 由LESS变量定义 |
| gutter | String | 星与星之间的间距 | 由LESS变量定义 |
| size | String | 星的大小 | 由LESS变量定义 |
| disabled | Boolean | 是否禁用评分(仅展示) | false |
| star | String | 标签列表 | ★ |

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-value-change | 当评分值改变时触发该事件。 | value：评分值 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @RaterColor | 未选中状态的默认颜色 | \#ccc |
| @RaterActiveColor | 选中状态的颜色 | \#ffad34 |
| @RaterGutter | 星与星之间的间距 | 2px |
| @RaterStarSize | 星的大小 | 25px |