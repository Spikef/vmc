# Card

## Overview

卡片用于区块内容展示，包括卡头、卡尾和主内容区三个子元素。

是否全局组件：否。

## Usage

```html
<card>
    <child name="header">普通卡片</child>
    <child name="content">
        头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
    </child>
    <child name="footer">尾部</child>
</card>

<card status="expand">
    <child name="header">可折叠的卡片</child>
    <child name="content">
        头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
    </child>
    <child name="footer">尾部</child>
</card>

<card status="collapse">
    <child name="header">可折叠的卡片(默认折叠)</child>
    <child name="content">
        头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
    </child>
    <child name="footer">尾部</child>
</card>

<card>
    <child name="content">
        头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
    </child>
</card>

<card class="with-shadow">
    <child name="content">
        头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。
    </child>
</card>
```

```javascript
export default {
    data() {
        return {
            title: '卡片'
        }
    }
}
```

## Children

`Child`是一种类似于`Slot`的自定义组件，与`Slot`不同的是，`Child`没有默认值，而是将`<child>`中的内容与预定义标签进行合并(class、events)。如果未定义某个`Child`，则该块被整体移除。

| Name | Description |
| ----- | ----- | ----- |
| header | 卡头 |
| content | 主内容区 |
| footer | 卡尾 |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- |
| status | String | 卡片是否折叠(null, collapse, expand) | null |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @CardBackColor | 卡片背景颜色 | \#fff |
| @CardTransitionDuration | 收缩动画过渡时间 | @TransitionDuration |
| @CardCardSpace | 上下两个卡片之间的间距 | 15px |
| @CardHorizontalPadding | 卡片水平内边距 | @HorizontalPadding |
| @CardVerticalPadding | 卡片内容区垂直内边距 | 10px |
| @CardHeaderHeight | 卡片头高度 | 45px |
| @CardHeaderTextSize | 卡片头文字大小 | 16px |
| @CardContentTextSize | 卡片内容区文字大小 | 15px |
| @CardFooterHeight | 卡片尾高度 | 40px |
| @CardFooterTextSize | 卡片尾文字大小 | 13px |
| @CardFooterTextColor | 卡片尾文字颜色 | \#5f646e |