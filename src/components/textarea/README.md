# Textarea

## Overview

增强型文本框，带限制输入字数功能，并实时显示已输入字数。

是否全局组件：否。

## Usage

```html
<v-textarea placeholder="请输入您的评论内容" min="10" max="15"></v-textarea>
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| value | String | 文本框的值 | "" |
| placeholder | String | 占位字符串 | "" |
| min | Number, String | 最少输入字符数 | 0 |
| max | Number, String | 最多输入字符数 | 99999 |
| rows | Number, String | 文本框显示的行数 | 5 |
| border | Boolean | 是否显示边框 | true |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @TextAreaPadding | 文本框内边距 | @InputPadding |
| @TextAreaTextSize | 文本框文字大小 | @InputTextSize |
| @TextAreaTipTextSize | 文本框提示区文字大小 | @InputMessageTextSize |
| @TextAreaTipTextColor | 文本框提示区文字颜色 | \#e0e0e0 |