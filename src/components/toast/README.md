# Toast

## Overview

弹出提示框，显示指定内容。

是否全局组件：是。

## Usage

```html
<v-button type="success" @click="loading()">显示loading状态(手动关闭)</v-button>
<v-button type="success" @click="$Loading('3秒后自动关闭', 3)">显示loading状态(自动关闭)</v-button>
<v-button type="success" @click="$Success('操作成功')">显示成功状态</v-button>
<v-button type="success" @click="$Error('操作失败')">显示失败状态</v-button>
<v-button type="success" @click="$Toast('上方文字提示', 'top')">显示文字提示(上方)</v-button>
<v-button type="success" @click="$Toast('中间文字提示')">显示文字提示(中间)</v-button>
<v-button type="success" @click="$Toast('下方文字提示', 'bottom')">显示文字提示(下方)</v-button>
```

```javascript
export default {
    methods: {
        loading() {
            this.$Loading();

            setTimeout(() => {
                this.$Loading.done();
            }, 3000);
        }
    }
}
```

## Arguments

### loading

显示loading状态提示。

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| text | String | 显示的文本(可省) | "" |
| second | Function | 显示的时间(单位：秒，可省)，如果不指定则不自动关闭 | 0 |

### success

操作成功提示。

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| text | String | 显示的文本(可省) | "" |
| second | Function | 显示的时间(单位：秒，可省) | 2 |
| position | String | 显示的位置：top，center，bottom | center |

### error

操作失败提示。

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| text | String | 显示的文本(可省) | "" |
| second | Function | 显示的时间(单位：秒，可省) | 2 |
| position | String | 显示的位置：top，center，bottom | center |

### info

操作警告提示。

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| text | String | 显示的文本(可省) | "" |
| second | Function | 显示的时间(单位：秒，可省) | 2 |
| position | String | 显示的位置：top，center，bottom | center |

### toast

纯文本提示。

| Name | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| text | String | 显示的文本(可省) | "" |
| second | Function | 显示的时间(单位：秒，可省) | 2 |
| position | String | 显示的位置：top，center，bottom | center |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @ToastMaxWidth | 提示框最大宽度 | 80% |
| @ToastRadius | 提示框圆角半径 | 5px |
| @ToastPadding | 提示框内边距 | 10px |
| @ToastBackColor | 提示框背景色 | rgba(0, 0, 0, 0.7) |
| @ToastTextColor | 提示框文字颜色 | \#fff |
| @ToastTextSize | 提示框文字大小 | @DefaultTextSize |
| @ToastIconSize | 提示框图标大小 | 30px |
| @ToastTransitionDuration | 提示框动画过渡时间 | @TransitionDuration |