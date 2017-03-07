# Dialog Box

## Overview

弹出对话框，显示指定内容。

是否全局组件：否。

## Usage

```html
<div class="content">
    <v-button @click="showDialog1 = true">显示对话框1</v-button>
    <v-button @click="showDialog2 = true">显示对话框2</v-button>
</div>

<dialog :show="showDialog1">
    <div name="header">请点击以下按钮</div>
    <div name="content" class="multi-buttons">
        <v-button @click="showDialog1 = false" type="danger">关闭对话框</v-button>
        <v-button @click="showDialog1 = false" type="success">关闭对话框</v-button>
    </div>
</dialog>

<dialog :show="showDialog2">
    <div name="header">请点击以下按钮</div>
    <div name="footer">
        <v-button @click="showDialog2 = false" type="default">关闭对话框</v-button>
    </div>
</dialog>
```

```javascript
export default {
    data() {
        return {
            showDialog1: false,
            showDialog2: false
        }
    }
}
```

## Named Elements

命名元素是一种类似于`Slot`的自定义组件，可以使用任意HTML标签包裹想要展示的内容。与`Slot`不同的是，命名元素没有默认值，而是将命名元素包裹的内容与预定义标签进行合并(attribute、style、class、events)。如果未定义某个命名元素，则该块被整体移除。

| Name | Description |
| ----- | ----- |
| header | 标题栏 |
| content | 主内容区 |
| footer | 底栏 |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| show | Boolean | 是否显示 | false |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @DialogWidth | 对话框宽度 | 85% |
| @DialogBackColor | 对话框背景颜色 | \#fafafc |
| @DialogRadius | 对话框圆角半径 | 5px |
| @DialogHeaderPadding | 标题栏内边距 | 15px 20px 10px |
| @DialogHeaderTextSize | 标题栏文字大小 | 17px |
| @DialogContentPadding | 内容区内边距 | 20px |
| @DialogContentTextSize | 内容区文字大小 | 15px |
| @DialogFooterHeight | 尾部高度 | 42px |
| @DialogFooterTextSize | 尾部文字大小 | @DialogHeaderTextSize |
| @DialogPrimaryColor | 底部按钮主颜色 | @PrimaryColor |
| @DialogDefaultColor | 底部按钮默认色 | @DefaultColor |
