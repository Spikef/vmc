# Button

## Overview

普通的按钮组件，不包含任何交互操作。

是否全局组件：否。

## Usage

```html
<v-button type="default">type: default</v-button>
<v-button type="primary">type: primary</v-button>
<v-button type="success">type: success</v-button>
<v-button type="info">type: info</v-button>
<v-button type="danger">type: danger</v-button>
<v-button type="warning">type: warning</v-button>
<v-button :colors="customColors">custom colors</v-button>

<v-button type="primary" disabled>type: primary but disabled</v-button>

<v-button type="primary">
    <i slot="icon-left" class="icono-cart"></i>
    button with icon
</v-button>

<v-button type="primary">
    <i slot="icon-left" class="icono-cart"></i>
    button with icon and spinner
    <span slot="icon-right">
        <spinner color="white" size="20"></spinner>
    </span>
</v-button>
```

```javascript
export default {
    data() {
        return {
            customColors: {
                font: '#ffffff',
                background: '#605ca8'
            }
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 按钮中显示的文本内容 | {{text}} |
| icon-left | 按钮左边的图标 | undefined |
| icon-right | 按钮右边的图标 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- |
| inline | Boolean | 是否行内按钮 | false |
| radius | Number, String | 按钮圆角半径 | 0 |
| height | Number, String | 按钮高度 | undefined，由LESS变量定义 |
| border | Number, String | 按钮边框线宽 | 0 |
| width | Number, String | 按钮宽度 | auto |
| size | Number, String | 按钮文字大小 | undefined，由LESS变量定义 |
| disabled | Boolean | 是否禁用 | false |
| text | String | 按钮文本 | 确定 |
| type | String | 按钮类型：default、primary、success、info、danger、warning | default |
| colors | Object | 自定义颜色：font(文本颜色)、border(边框颜色)、background(背景色) | null |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @ButtonHeight | 按钮默认高度 | 40px |
| @ButtonTextSize | 按钮默认文字大小 | 14px |
| @ButtonDefaultColor | 按钮文字颜色 | \#444444 |
| @ButtonDefaultBorder | 按钮边框颜色 | \#dddddd |
| @ButtonDefaultBackColor | 按钮背景色 | \#f4f4f4 |
| @ButtonPrimaryColor | 按钮文字颜色 | \#ffffff |
| @ButtonPrimaryBorder | 按钮边框颜色 | \#367fa9 |
| @ButtonPrimaryBackColor | 按钮背景色 | \#3c8dbc |
| @ButtonSuccessColor | 按钮文字颜色 | \#ffffff |
| @ButtonSuccessBorder | 按钮边框颜色 | \#008d4c |
| @ButtonSuccessBackColor | 按钮背景色 | \#00a65a |
| @ButtonInfoColor | 按钮文字颜色 | \#ffffff |
| @ButtonInfoBorder | 按钮边框颜色 | \#00acd6 |
| @ButtonInfoBackColor | 按钮背景色 | \#00c0ef |
| @ButtonDangerColor | 按钮文字颜色 | \#ffffff |
| @ButtonDangerBorder | 按钮边框颜色 | \#d73925 |
| @ButtonDangerBackColor | 按钮背景色 | \#e40013 |
| @ButtonWarningColor | 按钮文字颜色 | \#ffffff |
| @ButtonWarningBorder | 按钮边框颜色 | \#e08e0b |
| @ButtonWarningBackColor | 按钮背景色 | \#f39c12 |