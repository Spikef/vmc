# Grid

## Overview

网格组件，用于显示多行多列的内容列表。

是否全局组件：否。

## Usage

```html
<grid :list="buttonList" columns="3" gutter="10" margin="6">
    <v-button :type="item.type" radius="5">按钮{{index}}</v-button>
</grid>

<grid :list="buttonList" columns="auto" gutter="auto" margin="6">
    <v-button :type="item.type" width="50" height="30" radius="5">按钮{{index}}</v-button>
</grid>

<grid :list="buttonList" columns="auto" gutter="10" margin="6">
    <v-button :type="item.type" width="50" height="30" radius="5">按钮{{index}}</v-button>
</grid>
```

```javascript
export default {
    data() {
        return {
            customColors: {
                font: '#ffffff',
                background: '#605ca8'
            },
            buttonList: [
                {
                    type: 'primary'
                },
                {
                    type: 'success'
                },
                {
                    type: 'info'
                },
                {
                    type: 'danger'
                },
                {
                    type: 'warning'
                }
            ]
        }
    }
}
```

## SlotItem

`SlotItem`是一种类似于`Slot`的自定义组件，用于自定义列表循环中单个元素的样式。`SlotItem`具有单独的作用域，在该作用域内，可以使用`item`来访问循环的当前元素，使用`index`来访问当前索引。

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 每个元素显示的内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| list | Array | 数据列表 | [] |
| columns | Number, String | 列数，默认为1列 | 1 |
| gutter | Number, String | 列与列之间的间隔 | 0 |
| margin | Number, String | 行与行之间的间隔 | 0 |

### list item

可以是任意内容，组件本身并不对循环的元素作任何处理，而是将原值传入`SlotItem`。