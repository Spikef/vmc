# Row

## Overview

带标题的内容行。

是否全局组件：否。

## Usage

```html
<row title="自定义可评分">
    <rater :value="point1" max="6"></rater>
</row>
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 在行内显示的内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| title | String | 标题文本内容 | "" |
| width | Number, String | 标题栏宽度 | 由LESS变量定义 |
| align | String | 对齐方式，如果为left则为左对齐 | 两端对齐 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @RowHorizontalPadding | 水平内边距 | @HorizontalPadding |
| @RowBackColor | 背景色 | \#fff |
| @RowMinHeight | 最小高度 | 45px |
| @RowTextSize | 文字大小 | 15px |
| @RowTitleWidth | 标题栏最小宽度 | 80px |