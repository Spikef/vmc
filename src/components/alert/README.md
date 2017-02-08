# Alert

## Overview

弹出提示框，显示指定内容。

是否全局组件：是。

## Usage

```javascript
export default {
    ready() {
        this.$Alert('请点击确定', () => {});
    }
}
```

## Arguments

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| title | String | 弹框提示内容(可省) | "" |
| callback | Function | 点击确定时的回调函数(可省) | null |
| options | Object | 其它配置参数 | {title: "", content: "", callback: null, button: "确定"} |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @AlertTitleHeight | 标题栏最小高度 | 50px |
| @AlertTitlePadding | 标题底边距 | 15px |