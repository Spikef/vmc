# Progressbar

## Overview

进度条。

是否全局组件：否。

## Usage

```html
<row title="进度0%" align="left">
    <progressbar value="0" color="#ff0000" back-color="#000000"></progressbar>
</row>
<row title="进度27%" align="left">
    <progressbar value="27" color="#ff0000" back-color="#000000"></progressbar>
</row>
<row title="进度100%" align="left">
    <progressbar value="100" color="#ff0000" back-color="#000000">
        <div class="progress-text">
            <div>0%</div>
            <div>100%</div>
        </div>
    </progressbar>
</row>
<row title="自定义高度" align="left">
    <progressbar value="100" width="10"></progressbar>
</row>
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 进度条下方显示的内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| width | Number, String | 进度条的宽度 | 由LESS变量定义 |
| value | Number, String | 进度值 | undefined |
| color | String | 进度条的颜色 | 由LESS变量定义 |
| backColor | String | 进度条的背景色 | 由LESS变量定义 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @ProgressbarHeight | 进度条高度 | 8px |
| @ProgressbarBackColor | 进度条背景色 | \#b3b3b3 |
| @ProgressbarColor | 进度条颜色 | \#2db7f5 |