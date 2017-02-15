# Picker

## Overview

选择器。

是否全局组件：否。

## Usage

```html
<picker :list="list" :value="value" :value-type="valueType" :value-separator="valueSeparator" @on-change="_onChange"></picker>
```

```javascript
export default {
    props: {
        list: {
            type: Array,
            default() {
                return []
            }
        },
        value: {
            type: String,
            default: null
        },
        valueType: {
            type: String,
            default: 'value'
        },
        valueSeparator: {
            type: String,
            default: ' '
        }
    },
    data() {
        return {
            result: {},
            selValue: ''
        }
    },
    methods: {
        _onChange(result, value, target) {
            this.result = result;
            this.selValue = value;
            this.$emit('on-change', result, value, target);
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
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
| on-change | 选择值改变时触发该事件 | result：选中的对象 <br> value：最终组合的选择结果 <br> target：元素对象 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @PickerLineHeight | 单行元素高度 | 35px |
| @PickerSplitColor | 分割线颜色 | \#eee |
| @PickerTextSize | 元素文字主大小 | 16px |