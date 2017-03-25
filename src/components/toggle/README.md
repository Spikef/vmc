# Toggle

## Overview

开关。

> 因为vue2.0版本会对switch标签报警告，所以改名为toggle，其它并未变化。

是否全局组件：否。

## Usage

```html
<card>
    <div name="header">普通开关</div>
    <div name="content">
        <toggle :checked.sync="checked1">是否选择？</toggle>
    </div>
    <div name="footer">
        选中状态: {{checked1}}
    </div>
</card>

<card>
    <div name="header">默认关闭</div>
    <div name="content">
        <toggle value="是" :checked.sync="checked2">是否选择？</toggle>
    </div>
    <div name="footer">
        选中的值: {{checked2 | json}}
    </div>
</card>

<card>
    <div name="header">禁用状态</div>
    <div name="content">
        <toggle :checked.sync="checked3" disabled>是否选择？嘿嘿嘿，不让你选。</toggle>
    </div>
    <div name="footer">
        选中状态: {{checked3}}
    </div>
</card>
```

```javascript
export default {
    data() {
        return {
            checked1: true,
            checked2: [],
            checked3: false
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 显示的文本内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| id | String | 原生checkbox的id值 | 随机生成一个值 |
| originValue | String, Number, Boolean | 复选框的值 | undefined |
| value | Boolean, Array | 选中的值：<br>如果为Boolean类型，则选中时为true；<br>如果为数组，则在选中时向数组追加originValue值 | undefined |
| disabled | Boolean | 是否禁用 | false |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @SwitchWidth | 宽度 | 50px |
| @SwitchHeight | 高度 | @SwitchWidth * 0.6 |
| @SwitchTextSize | 文字大小 | @SwitchHeight / 2 |
| @SwitchTextSpace | 与提示文字之间的距离 | 5px |
| @SwitchTextColor | 文字颜色 | \#243441 |
| @SwitchBorderColor | 边框颜色 | \#dfdfdf |
| @SwitchBackColor | 背景颜色 | \#fdfdfd |
| @SwitchColor | 默认颜色 | \#fff |
| @SwitchCheckedColor | 选中颜色 | @SecondaryColor |
