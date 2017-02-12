# Radio

## Overview

单选框。

是否全局组件：否。

## Usage

```html
<card>
    <child name="header">单选框列表</child>
    <child name="content">
        <radio :checked.sync="value1" :value="item" v-for="item in listA" inline>{{item}}</radio>
    </child>
    <child name="footer">
        <span>选中的项:</span>
        <span> {{ value1 }} </span>
    </child>
</card>

<card>
    <child name="header">可禁用的单选框列表</child>
    <child name="content">
        <radio :checked.sync="value2" :value="item" v-for="item in listA">{{item}}</radio>
        <radio :checked.sync="value2" value="选项D" disabled>选项D</radio>
    </child>
    <child name="footer">
        <span>选中的项:</span>
        <span> {{ value2 }} </span>
    </child>
</card>

<card>
    <child name="header">支持关联复选框列表的单选框</child>
    <child name="content" class="group-box">
        <radio :checked.sync="value3" value="A" :child-values="listA" :child-checked.sync="list1">选择分组A</radio>
        <checkbox :checked.sync="list1" :value="item" v-for="item in listA" class="box-item">{{item}}</checkbox>

        <div class="separator"></div>

        <radio :checked.sync="value3" value="B" :child-values="listB" :child-checked.sync="list2" >选择分组B</radio>
        <checkbox :checked.sync="list2" :value="item" v-for="item in listB" class="box-item">{{item}}</checkbox>
    </child>
    <child name="footer">
        <span>选中的项:</span>
        <span> {{ value3 }} </span>
    </child>
</card>
```

```javascript
export default {
    data() {
        return {
            listA: ['选项A', '选项B', '选项C'],
            listB: ['选项1', '选项2', '选项3', '选项4'],
            list1: [],
            list2: [],
            value1: '选项A',
            value2: '选项D',
            value3: 'A'
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 显示的文本内容 | undefined |
| extra | 额外显示的文本内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| id | String | 原生radio的id值 | 随机生成一个值 |
| value | String, Number, Boolean | 复选框的值 | undefined |
| checked | String, Number, Boolean | 选中的值 | undefined |
| disabled | Boolean | 是否禁用 | false |
| inline | Boolean | 是否行内显示 | false |
| childValues | Array | 关联的子数组 | undefined |
| childChecked | Array | 关联的子数中被选中的值 | undefined |

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