# Popup

## Overview

弹出层。

是否全局组件：否。

## Usage

```html
<div class="content">
    <v-button @click="showPop1 = true">从上方弹出</v-button>

    <v-button @click="showPop2 = true">从下方弹出</v-button>

    <v-button @click="showPop3 = true">从下方弹出(固定高度)</v-button>

    <v-button @click="showPop4 = true">从左边弹出</v-button>

    <v-button @click="showPop5 = true">从左边弹出(固定宽度)</v-button>

    <v-button @click="showPop6 = true">从右边弹出</v-button>

    <v-button @click="showPop7 = true">从右边弹出(固定宽度)</v-button>

    <v-button @click="back">返回主页</v-button>
</div>

<popup position="top" :show.sync="showPop1">从顶部弹出一些提示文字</popup>

<popup position="bottom" :show.sync="showPop2">
    <div class="center-middle">
        <v-button type="success" @click="showPop2 = false">关闭弹窗</v-button>
    </div>
</popup>

<popup position="bottom" :show.sync="showPop3" height="40%"></popup>

<popup position="left" :show.sync="showPop4">
    <div class="center-middle">
        <v-button type="success" @click="showPop4 = false">关闭弹窗</v-button>
    </div>
</popup>

<popup position="left" :show.sync="showPop5" width="90%"></popup>

<popup position="right" :show.sync="showPop6">
    <div class="center-middle">
        <v-button type="success" @click="showPop6 = false">关闭弹窗</v-button>
    </div>
</popup>

<popup position="right" :show.sync="showPop7" width="90%"></popup>
```

```javascript
export default {
    data() {
        return {
            showPop1: false,
            showPop2: false,
            showPop3: false,
            showPop4: false,
            showPop5: false,
            showPop6: false,
            showPop7: false
        }
    },
    methods: {
        back() {
            window.history.back();
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 弹出显示的内容 | undefined |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| show | Boolean | 是否显示 | false |
| mask | Boolean | 是否显示遮罩层 | 如果是从上方弹出，则不显示；从其它方向弹出时默认显示 |
| height | Number, String | 弹出层高度 | 如果是从上方弹出，则自动高度；从其它方向弹出时默认100%高度 |
| width | Number, String | 弹出层宽度 | 100% |
| hideOnMask | Boolean | 点击遮罩层时是否自动隐藏弹出层 | true |
| position | String | 从哪个方向弹出：top、left、right、bottom | bottom |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @PopupBackColor | 弹出层背景色 | \#fff |
| @PopupTopHeight | 上弹出层最小高度 | 50px |
| @PopupTopTextColor | 上弹出层文字颜色 | \#fff |
| @PopupTopBackColor | 上弹出层背景色 | rgba(0, 0, 0, .7) |