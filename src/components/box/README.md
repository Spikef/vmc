# Box

## Overview

占位框是一个用于占据指定高宽比的盒子。

是否全局组件：否。

## Usage

```HTML
<box ratio="0.4">高宽比为0.4的盒子</box>

<box ratio="0.4">
    <img src="/static/image/box/700×300.png">
</box>

<box ratio="0.4" background="#2db7f5">高宽比为0.4的盒子，带背景色</box>

<box ratio="0.4" background="/static/image/box/700×300.png"></box>
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 在组件中插入的文字、图片或其它内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- |
| ratio | Number, String | 高宽比 | 1 |
| background | String | 背景图或者背景颜色 | undefined |