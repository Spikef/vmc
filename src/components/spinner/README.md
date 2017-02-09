# Spinner

## Overview

动态指示器。

是否全局组件：否。

## Usage

```html
<div class="line vmc-1px-bottom">
    <span class="label">blade</span>
    <spinner type="blade"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">snake</span>
    <spinner type="snake"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">double-bounce</span>
    <spinner type="double-bounce"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">triple-bounce</span>
    <spinner type="triple-bounce"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">fading-circle</span>
    <spinner type="fading-circle"></spinner>
</div>

<div class="line vmc-1px-bottom">
    <span class="label">blade</span>
    <spinner color="#3c78d8" size="16" type="blade"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">snake</span>
    <spinner color="#3c78d8" size="16" type="snake"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">double-bounce</span>
    <spinner color="#3c78d8" size="16" type="double-bounce"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">triple-bounce</span>
    <spinner color="#3c78d8" size="16" type="triple-bounce"></spinner>
</div>
<div class="line vmc-1px-bottom">
    <span class="label">fading-circle</span>
    <spinner color="#3c78d8" size="16" type="fading-circle"></spinner>
</div>
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| type | Number, String | 指示器类型：blade`(0)`、snake`(1)`、double-bounce`(2)`、triple-bounce`(3)`、fading-circle`(4)` | blade |
| size | Number, String | 指示器颜色大小 | undefined |
| color | String | 指示器颜色 | 由LESS变量定义 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @SpinnerSize | 指示器默认大小 | 28px |
| @SpinnerColor | 指示器默认颜色 | \#ccc |