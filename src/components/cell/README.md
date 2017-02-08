# Cell

## Overview

带箭头指示的内容行。

是否全局组件：否。

## Usage

```html
<cell>dialog</cell>
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 显示的文本内容 | {{title}} |
| arrow | 箭头图标 | &lt;i class="icono-caretRight"&gt;&lt;/i&gt; |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| title | String | 显示的文本内容 | "" |
| arrow | Boolean | 是否显示箭头 | true |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @CellBackColor | 背景颜色 | \#fff |
| @CellMinHeight | 最小高度 | 45px |
| @CellHorizontalPadding | 水平内边距 | @HorizontalPadding |
| @CellIconTextSpace | 左图标与文字之间的距离 | 15px |
| @CellArrowColor | 右箭头的颜色 | \#cecece |
| @CellArrowScale | 右箭头的缩放比例 | 0.8 |
| @CellTextSize | 文字大小 | 15px |