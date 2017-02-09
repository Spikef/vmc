# Popup Picker

## Overview

弹出式选择器，由[Popup](../popup)和[Picker](../picker)组合而成。

是否全局组件：否。

## Usage

```html
<div class="content">
    <row title="请选择手机品牌：" @click="showPop1 = true">{{value1}}</row>

    <row title="请选择手机型号：" @click="showPop2 = true">{{value2}}</row>
</div>

<popup-picker :show.sync="showPop1" :list="list1" :value.sync="value1"></popup-picker>

<popup-picker :show.sync="showPop2" :list="list2" :value.sync="value2"></popup-picker>
```

```javascript
export default {
    data() {
        return {
            value: null,
            showPop1: false,
            showPop2: false,
            showPop3: false,
            showPop4: false,
            showPop5: false,
            showPop6: false,
            showPop7: false,
            value1: '步步高',
            value2: '魅族 MX2',
            list1: ['苹果', '小米', '魅族', '华为', '三星', '步步高', '诺基亚'],
            list2: [
                ['苹果', '魅族'],
                [
                    {
                        value: 'iPhone4',
                        parentId: '苹果'
                    },
                    {
                        value: 'iPhone5',
                        parentId: '苹果'
                    },
                    {
                        value: 'iPhone6',
                        parentId: '苹果'
                    },
                    {
                        value: 'iPhone6S',
                        parentId: '苹果'
                    },
                    {
                        value: 'iPhone7',
                        parentId: '苹果'
                    },
                    {
                        value: 'iPhone7S',
                        parentId: '苹果'
                    },
                    {
                        value: 'MX2',
                        parentId: '魅族'
                    }
                ]
            ],
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
| list | [Array] | 选择值列表，为一个二维数组，每个数组代表一列选择值，当仅有一列时，可以简写为一维数组 | [] |
| value | String | 初始值 | 1 |
| valueType | String | 选择器的值是由name还是value组合而成 | value |
| valueSeparator | String | 多列值组合时的连接符 | " " |

### list item

注意，这里的`list item`指的是第二维数组中的元素。可以是字符串或者对象。

**字符串：**

即name和value相同。

**对象：**

- name：显示的文本内容
- value：最终选中的值
- parentId：关联的父组元素的value值，用于实现联动选择

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-cancel | 点击取消时触发该事件 | value：初始选择结果 |
| on-submit | 点击确定时触发该事件 | result：选中的对象 |
| on-change | 选择值改变时触发该事件 | target：元素对象<br> result：选中的对象 <br> selValue：最终组合的选择结果 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @PopupPickerHeaderHeight | 标题栏高度 | 44px |
| @PopupPickerHeaderBackColor | 标题栏背景色 | \#d5d5d6 |
| @PopupPickerHeaderTextSize | 标题栏文字大小 | 16px |
| @PopupPickerHeaderButtonPadding | 标题栏按钮左右内边距 | 20px |
| @PopupPickerHeaderButtonTextColor | 标题栏按钮文字颜色 | \#777 |