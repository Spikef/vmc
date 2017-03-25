# Number

## Overview

数字输入框，在左边显示`-`，在右边显示`+`。

是否全局组件：否。

是否支持v-model：是。

## Usage

```html
<card>
    <div name="header">请选择购买数量(1-10)</div>
    <div name="content">
        <number :value.sync="value1" min="1" max="10"></number>
    </div>
    <div name="footer">
        <span>输入的值:</span>
        <span> {{ value1 }} </span>
    </div>
</card>

<card>
    <div name="header">请选择购买数量(任意正整数)</div>
    <div name="content">
        <number :value.sync="value2" min="1"></number>
    </div>
    <div name="footer">
        <span>输入的值:</span>
        <span> {{ value2 }} </span>
    </div>
</card>

<card>
    <div name="header">请输入价格(0.1-10)</div>
    <div name="content">
        <number :value.sync="value3" min="0.1" max="10" step="0.01" width="auto" decimal></number>
    </div>
    <div name="footer">
        <span>输入的值:</span>
        <span> {{ value3 }} </span>
    </div>
</card>
```

```javascript
export default {
    data() {
        return {
            value1: 1,
            value2: 1,
            value3: 0.1
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| decimal | Boolean | 是否允许输入小数 | false |
| value | String, Number | 输入的值 | undefined |
| width | String, Number | 输入框的宽度 | 由LESS变量定义 |
| min | String, Number | 允许输入的最小值 | -Infinity |
| max | String, Number | 允许输入的最大值 | Infinity |
| step | String, Number | 每次点击`-`或者`+`时的增量 | 1 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @NumberWidth | 输入框宽度 | 30px |
| @NumberHeight | 高度 | @NumberWidth |
