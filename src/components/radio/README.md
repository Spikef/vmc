# Radio

## Overview

单选框。

是否全局组件：否。

## Usage

```html
<radio :checked.sync="value1" :value="item" v-for="item in list">{{item}}</radio>
```

```javascript
export default {
    data() {
        return {
            list: ['选项A', '选项B', '选项C'],
            list1: '选项A'
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
| id | String | 原生radio的id值 | 随机生成一个值 |
| value | String, Number, Boolean | 复选框的值 | undefined |
| checked | String, Number, Boolean | 选中的值 | undefined |
| disabled | Boolean | 是否禁用 | false |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @RadioHeight | 单选框高度 | @CheckBoxHeight |
| @RadioSpace | 勾选框与文字之间的距离 | @CheckBoxSpace |
| @RadioTextColor | 文字颜色 | @CheckBoxTextColor |
| @RadioBackColor | 勾选框背景色 | @CheckBoxBackColor |
| @RadioBorderColor | 勾选框边框颜色 | @CheckBoxBorderColor |
| @RadioCheckColor | 勾的颜色 | @CheckBoxCheckColor |
| @RadioDisabledBackColor | 禁用状态下勾选框背景色 | @CheckBoxDisabledBackColor |
| @RadioDisabledBorderColor | 禁用状态下勾选框边框颜色 | @CheckBoxDisabledBorderColor |
| @RadioDisabledCheckColor | 禁用状态下勾的颜色 | @CheckBoxDisabledCheckColor |
| @RadioCheckedBackColor | 选中状态下勾选框背景色 | @CheckBoxCheckedBackColor |
| @RadioCheckedBorderColor | 选中状态下勾选框边框颜色 | @CheckBoxCheckedBorderColor |
| @RadioCheckedCheckColor | 选中状态下勾的颜色 | @CheckBoxCheckedCheckColor |
| @RadioDisabledCheckedBackColor | 禁用并选中状态下勾选框背景色 | @CheckBoxDisabledCheckedBackColor |
| @RadioDisabledCheckedBorderColor | 禁用并选中状态下勾选框边框颜色 | @CheckBoxDisabledCheckedBorderColor |
| @RadioDisabledCheckedCheckColor | 禁用并选中状态下勾的颜色 | @CheckBoxDisabledCheckedCheckColor |