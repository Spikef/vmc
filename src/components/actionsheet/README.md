# ActionSheet

## Overview

操作列表是一个从下方弹出的按钮组。

是否全局组件：否。

## Usage

```html
<div class="content">
    <v-button @click="showAction1 = true">弹出ActionSheet</v-button>

    <v-button @click="showAction2 = true">弹出ActionSheet(带取消按钮)</v-button>
</div>

<action-sheet :show.sync="showAction1" :list="buttons"></action-sheet>

<action-sheet :show.sync="showAction2" :list="buttons" cancel></action-sheet>
```

```javascript
export default {
    components: {
        Navbar,
        vButton,
        ActionSheet
    },
    data() {
        return {
            showAction1: false,
            showAction2: false,
            buttons: [
                {
                    text: '拍照',
                    callback: () => {
                        this.$Toast('拍照');
                    }
                },
                {
                    text: '从相册中选择',
                    callback: () => {
                        this.$Toast('从相册中选择');
                    }
                }
            ]
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| list | Array | 按钮列表 | 1 |
| show | Boolean | 是否显示 | false |
| cancel | Boolean | 是否显示取消按钮 | false |
| cancelText | String | 取消按钮文本 | 取消 |
| hideOnMask | Boolean | 点击遮罩时隐藏 | true |

### list item

可以是字符串或者对象。

**字符串：**

按钮显示的文本

**对象：**

- text：按钮显示的文本
- callback：点击按钮时的回调函数

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-item-click | 点击某个按钮时触发 | item：传入的对象<br> index：索引 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @ActionSheetBackColor | 背景色 | #e0e0e0 |
| @ActionSheetButtonHeight | 按钮高度 | @ButtonHeight |
| @ActionSheetButtonBackColor | 按钮背景色 | #ffffff |