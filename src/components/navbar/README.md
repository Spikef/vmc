# Navbar

## Overview

固定在顶部的标题栏。在微信环境中，因为微信自带了标题栏，所以会自动隐藏。

是否全局组件：否。

## Usage

```html
<navbar>Spinner</navbar>
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 显示的文本内容 | undefined |
| main | 整个导航栏包含的内容 | &lt;div class="left" @click="_onBack"&gt; <br> &nbsp;&nbsp;&lt;i class="icono-caretLeft"&gt;&lt;/i&gt; <br> &lt;/div&gt; <br> &lt;div class="center"&gt; <br> &nbsp;&nbsp;&lt;slot&gt;&lt;/slot&gt; <br> &lt;/div&gt; <br> &lt;div class="right" @click="_onMenu"&gt; <br> &lt;/div&gt; |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| color | String | 标题栏文字颜色 | 由LESS变量定义 |
| backColor | String | 标题栏背景色 | 由LESS变量定义 |
| fontSize | String | 标题栏文字大小 | 由LESS变量定义 |

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-back | 当点击左边的后退按钮时触发 | undefined |
| on-menu | 当点击右边的菜单按钮时触发 | undefined |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @NavbarHeight | 高度 | 50px |
| @NavbarIconWidth | 左右图标栏宽度 | 50px |
| @NavbarBackColor | 背景色 | @BarBackColor |
| @NavbarTextColor | 文字颜色 | @BarTextColor |
| @NavbarTextSize | 文字大小 | 18px |