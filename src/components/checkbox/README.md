# Checkbox

## Overview

复选框，支持自定义选中值、最多选中几项和全选功能。

是否全局组件：否。

## Usage

```html
<card>
    <div name="header">单个复选框</div>
    <div name="content">
        <checkbox :checked.sync="checked1">同意 <a href="http://www.baidu.com" slot="extra">用户注册协议</a></checkbox>
    </div>
    <div name="footer">
        <span>选择值:</span>
        <span> {{ checked1 }} </span>
    </div>
</card>

<card>
    <div name="header">单个复选框，默认选中</div>
    <div name="content">
        <checkbox :checked.sync="checked2">同意用户注册协议</checkbox>
    </div>
    <div name="footer">
        <span>选择值:</span>
        <span> {{ checked2 }} </span>
    </div>
</card>

<card>
    <div name="header">单个复选框，指定选择结果</div>
    <div name="content">
        <checkbox :checked.sync="checked3" :values="[1, 0]">同意用户注册协议</checkbox>
    </div>
    <div name="footer">
        <span>选择值:</span>
        <span> {{ checked3 }} </span>
    </div>
</card>

<card>
    <div name="header">复选框列表，显示在一行</div>
    <div name="content">
        <checkbox :checked.sync="list1" :value="item" v-for="item in listA" inline>{{item}}</checkbox>
    </div>
    <div name="footer">
        <span>选中的项:</span>
        <span> {{ list1 | json }} </span>
    </div>
</card>

<card>
    <div name="header">复选框列表，最多只允许选择两项</div>
    <div name="content">
        <checkbox :checked.sync="list2" :value="item" v-for="item in listB" max="2">{{item}}</checkbox>
    </div>
    <div name="footer">
        <span>选中的项:</span>
        <span> {{ list2 | json }} </span>
    </div>
</card>

<card>
    <div name="header">可禁用的复选框列表</div>
    <div name="content">
        <checkbox :checked.sync="list3" value="选项A" disabled>选项A</checkbox>
        <checkbox :checked.sync="list3" value="选项B" disabled>选项B</checkbox>
        <checkbox :checked.sync="list3" value="选项C">选项C</checkbox>
        <checkbox :checked.sync="list3" value="选项D">选项D</checkbox>
    </div>
    <div name="footer">
        <span>选中的项:</span>
        <span> {{ list3 | json }} </span>
    </div>
</card>

<card>
    <div name="header">支持全选的复选框列表</div>
    <div name="content">
        <checkbox :checked.sync="list4" :value="item" v-for="item in listA">{{item}}</checkbox>
        <checkbox :checked="true" :child-values="listA" :child-checked.sync="list4">全选</checkbox>
    </div>
    <div name="footer">
        <span>选中的项:</span>
        <span> {{ list4 | json }} </span>
    </div>
</card>

<card>
    <div name="header">支持分组全选的复选框列表</div>
    <div name="content" class="group-box">
        <checkbox :checked.sync="list7" value="A" :child-values="listA" :child-checked.sync="list5" max="1">选择分组A</checkbox>
        <checkbox :checked.sync="list5" :value="item" v-for="item in listA" class="box-item">{{item}}</checkbox>

        <div class="separator"></div>

        <checkbox :checked.sync="list7" value="B" :child-values="listB" :child-checked.sync="list6" max="1">选择分组B</checkbox>
        <checkbox :checked.sync="list6" :value="item" v-for="item in listB" class="box-item">{{item}}</checkbox>
    </div>
    <div name="footer">
        <span>选中的项:</span>
        <span> {{ list7 | json }} </span>
    </div>
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
            list3: ['选项B'],
            list4: [],
            list5: [],
            list6: [],
            list7: ['A'],
            checked1: false,
            checked2: true,
            checked3: 0
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
| id | String | 原生checkbox的id值 | 随机生成一个值 |
| originValue | String, Number, Boolean | 复选框的值 | undefined |
| valueList | Array | 元素0和元素1分别对应选中和非选中状态时对应的值 | undefined |
| value | Boolean, Array | 选中的值：<br>如果为Boolean类型，则选中时为true；<br>如果为数组，则在选中时向数组追加value值 | undefined |
| disabled | Boolean | 是否禁用 | false |
| inline | Boolean | 是否行内显示 | false |
| max | Number, String | 最多选中几项 | undefined |
| childValues | Array | 关联的子数组 | undefined |
| childChecked | Array | 关联的子数中被选中的值 | undefined |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @CheckBoxHeight | 复选框高度 | 20px |
| @CheckBoxRadius | 勾选框的圆角半径 | 2px |
| @CheckBoxSpace | 勾选框与文字之间的距离 | 10px |
| @CheckBoxTextSize | 文字大小 | @CheckBoxHeight - 6px |
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
