# Popup Date Picker

## Overview

弹出式日期选择器，继承自`Popup-Picker`。

是否全局组件：否。

## Usage

```html
<div class="content">
    <row title="请选择生日：" @click="showPop1 = true">{{value1}}</row>

    <row title="请选择入学时间：" @click="showPop2 = true">{{value2}}</row>
</div>

<popup-date-picker :show.sync="showPop1" :value.sync="value1"></popup-date-picker>

<popup-date-picker :show.sync="showPop2" :value.sync="value2" :year="[1980, 2016]" :day="false" tow-digit-year tow-digit-month></popup-date-picker>
```

```javascript
export default {
    data() {
        return {
            showPop1: false,
            showPop2: false,
            value1: '2016-12-31',
            value2: '',
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| show | Boolean | 是否显示 | false |
| title | String | 标题 | "" |
| confirm | String | 确定按钮的文本 | 确定 |
| cancel | String | 取消按钮的文本 | 取消 |
| value | String | 初始值 | 1 |
| valueType | String | 选择器的值是由name还是value组合而成 | value |
| valueSeparator | String | 年月日之间的连接符 | "-" |
| year | Boolean, Array | 是否显示年这一列 | true |
| month | Boolean, Array | 是否显示月这一列 | true |
| day | Boolean, Array | 是否显示日这一列 | true |
| towDigitYear | Boolean | 是否显示两位数年 | false |
| towDigitMonth | Boolean | 是否显示两位数月 | false |
| towDigitDay | Boolean | 是否显示两位数日 | false |

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-cancel | 点击取消时触发该事件 | value：初始选择结果 |
| on-submit | 点击确定时触发该事件 | value：选中的对象 |
| on-change | 选择值改变时触发该事件 | result：选中的对象 <br> value：最终组合的选择结果 <br> target：元素对象 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @PopupPickerHeaderHeight | 标题栏高度 | 44px |
| @PopupPickerHeaderBackColor | 标题栏背景色 | \#d5d5d6 |
| @PopupPickerHeaderTextSize | 标题栏文字大小 | 16px |
| @PopupPickerHeaderButtonPadding | 标题栏按钮左右内边距 | 20px |
| @PopupPickerHeaderButtonTextColor | 标题栏按钮文字颜色 | \#777 |