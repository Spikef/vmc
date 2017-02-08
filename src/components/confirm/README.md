# Confirm

## Overview

弹出确认框，显示指定内容。

是否全局组件：是。

## Usage

```javascript
export default {
    ready() {
        this.$Confirm('confirm提示框', () => {
            this.$Alert('你点击了确定按钮');
        }, () => {
            this.$Alert('你点击了取消按钮');
        });
    }
}
```

## Arguments

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| title | String | 弹框提示内容(可省) | "" |
| confirm | Function | 点击确定时的回调函数(可省) | null |
| cancel | Function | 点击取消时的回调函数(可省) | null |
| options | Object | 其它配置参数 | {title: "", content: "", confirm: null, cancel: null, btn1: "取消", btn2: "确定"} |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @ConfirmTitleHeight | 标题栏最小高度 | @AlertTitleHeight |
| @ConfirmTitlePadding | 标题底边距 | @AlertTitlePadding |