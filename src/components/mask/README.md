# Mask

## Overview

遮罩层，用于阻挡一切用户操作。

是否全局组件：否。

## Usage

```html
<mask @on-click="_onMaskClick" v-show="show" transition="vmc-popup-fade"></mask>
```

```javascript
export default {
    props: {
        show: Boolean,
        hideOnMask: {
            default: true
        }
    },
    methods: {
        _onMaskClick() {
            if (this.hideOnMask) {
                this.show = false;
            }
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| transparent | Boolean | 是否透明 | false |

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-click | 当点击时触发 | undefined |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @MaskBackColor | 背景色 | rgba(0, 0, 0, .4) |