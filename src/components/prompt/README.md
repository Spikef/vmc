# Prompt

## Overview

弹出确认框，显示指定内容。

是否全局组件：是。

## Usage

```html
<v-button @click="showPrompt">打开prompt提示框</v-button>
<v-button @click="showPrompt2">打开prompt提示框2</v-button>
```

```javascript
export default {
    methods: {
        showPrompt() {
            this.$Prompt('prompt提示框', v => {
                this.$Alert(`你输入了 ${v}`);
            }, () => {
                this.$Alert('你点击了取消按钮');
            }, {
                content: '请输入数字',
                placeholder: '请输入不大于10的正整数',
                btn1: '按钮1',
                btn2: '按钮2',
                validator: /^[1-9]$/
            });
        },
        showPrompt2() {
            this.$Prompt('prompt提示框', v => {
                this.$Alert(`你输入了 ${v}`);
            }, () => {
                this.$Alert('你点击了取消按钮');
            }, {
                content: '请输入数字',
                placeholder: '请输入不大于10的正整数',
                message: '',
                validator(v) {
                    if (/^[1-9]$/.test(v)) {
                        return true;
                    } else {
                        return `[${v}]不满足输入条件`;
                    }
                }
            });
        }
    }
}
```

## Arguments

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| title | String | 弹框提示内容(可省) | "" |
| confirm | Function | 点击确定时的回调函数(可省) | null |
| cancel | Function | 点击取消时的回调函数(可省) | null |
| options | Object | 其它配置参数 | {title: "", content: "", confirm: null, cancel: null, btn1: "取消", btn2: "确定", value: "", invalid: false, message: "", placeholder: "", validator: null,} |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @PromptInputHeight | 输入框高度 | 40px |
| @PromptInputPadding | 输入框内边距 | @InputPadding |
| @PromptInputTextSize | 输入框文字大小 | @InputTextSize |
| @PromptInputInvalidColor | 输入错误时的边框提示颜色 | @InputInvalidColor |
| @PromptMessageTextSize | 输入错误提示信息的文字大小 | @InputMessageTextSize |
| @PromptMessageTextColor | 输入错误提示信息的文字颜色 | @InputInvalidColor |
| @PromptMessageInputSpace | 输入错误提示信息与输入框边距 | 5px |