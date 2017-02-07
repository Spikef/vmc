# CSS Components

## 1px border

1像素边框，用于解决移动端1像素边框的问题。

### class

| Name | Description |
| ----- | ----- |
| vmc-1px | 四条边框 |
| vmc-1px-top | 上边框 |
| vmc-1px-bottom | 下边框 |
| vmc-1px-left | 左边框 |
| vmc-1px-right | 右边框 |
| vmc-1px-left-right | 左右边框 |
| vmc-1px-top-bottom | 上下边框 |
| vmc-1px-left-top | 左上边框 |
| vmc-1px-left-bottom | 左下边框 |
| vmc-1px-right-top | 右上边框 |
| vmc-1px-right-bottom | 右下边框 |

### LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @BorderColor | 边框颜色 | \#cccccc |

## badge

徽标用于显示一个包含文字的小圆圈。

### class

| Name | Description |
| ----- | ----- |
| vmc-badge | 徽标 |

### LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @BadgeTextColor | 文字颜色 | \#ffffff |
| @BadgeBackColor | 背景颜色 | \#f74c31 |
| @BadgeTextSize | 文字大小 | 12px |
| @BadgeHeight | 高度 | 16px |

## justify

两端对齐用于使标签内部内容左右两端对齐，支持单行和多行内容。

### class

| Name | Description |
| ----- | ----- |
| vmc-justify | 两端对齐 |

## nowrap

文本省略用于指定文本最大显示行数，超过该值时自动以省略号显示。

### class

| Name | Description |
| ----- | ----- |
| vmc-nowrap | 只显示1行，超出部分以省略号显示 |
| vmc-nowrap-1 | 只显示1行，超出部分以省略号显示 |
| vmc-nowrap-2 | 只显示2行，超出部分以省略号显示 |
| vmc-nowrap-3 | 只显示3行，超出部分以省略号显示 |
| vmc-nowrap-4 | 只显示4行，超出部分以省略号显示 |
| vmc-nowrap-5 | 只显示5行，超出部分以省略号显示 |

## red dot

用于醒目提示的小红点。

### class

| Name | Description |
| ----- | ----- |
| vmc-red-dot | 小红点 |

### LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @RedDotColor | 颜色 | @PrimaryColor |
| @RedDotSize | 大小 | 6px |