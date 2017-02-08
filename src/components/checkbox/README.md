# Checkbox

## Overview

复选框。

是否全局组件：否。

## Usage

```html
<checkbox :checked.sync="list1" :value="item" v-for="item in list">{{item}}</checkbox>
```

```javascript
export default {
    data() {
        return {
            list: ['选项A', '选项B', '选项C'],
            list1: []
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
| value | String, Number, Boolean | 复选框的值 | undefined |
| checked | Boolean, Array | 选中的值：<br>如果为Boolean类型，则选中时为true；<br>如果为数组，则在选中时向数组追加value值 | undefined |
| disabled | Boolean | 是否禁用 | false |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @CheckBoxHeight | 复选框高度 | 20px |
| @CheckBoxRadius | 勾选框的圆角半径 | 2px |
| @CheckBoxSpace | 勾选框与文字之间的距离 | 10px |
| @CheckBoxTextColor | 文字颜色 | \#243441 |
| @CheckBoxBackColor | 勾选框背景色 | \#fff |
| @CheckBoxBorderColor | 勾选框边框颜色 | \#c1caca |
| @CheckBoxCheckColor | 勾的颜色 | \#fff |
| @CheckBoxDisabledBackColor | 禁用状态下勾选框背景色 | \#e6e6e6 |
| @CheckBoxDisabledBorderColor | 禁用状态下勾选框边框颜色 | @CheckBoxBorderColor |
| @CheckBoxDisabledCheckColor | 禁用状态下勾的颜色 | \#b1b1b1 |
| @CheckBoxCheckedBackColor | 选中状态下勾选框背景色 | @PrimaryColor |
| @CheckBoxCheckedBorderColor | 选中状态下勾选框边框颜色 | @PrimaryColor |
| @CheckBoxCheckedCheckColor | 选中状态下勾的颜色 | @CheckBoxCheckColor |
| @CheckBoxDisabledCheckedBackColor | 禁用并选中状态下勾选框背景色 | @CheckBoxDisabledBackColor |
| @CheckBoxDisabledCheckedBorderColor | 禁用并选中状态下勾选框边框颜色 | @CheckBoxBorderColor |
| @CheckBoxDisabledCheckedCheckColor | 禁用并选中状态下勾的颜色 | @CheckBoxDisabledCheckColor |

# Check All

## Overview

全选框，继承自复选框，用于实现与复选框的关联全选。

是否全局组件：否。

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| values | Array | 所有关联的值 | undefined |
| checked | Array | 已选中的值 | undefined |