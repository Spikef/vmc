# vmc

> Mobile components for vue@1.0.21+.

## 特性介绍

`VMC`包含丰富的`CSS`和`JS`组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。

[View Docs and Demos](https://spikef.github.io/vmc/)

## 如何引用

```bash
$ npm install vmc --save
```

### 注册全局组件

在入口文件中添加以下内容：

```javascript
import { VMC } from 'vmc/src';

Vue.use(VMC);
```

### 引入组件样式

通过LESS变量覆盖，可以自定义组件的一些初始样式，因此，需要手动引入LESS文件。

```css
@import "../src/styles/vmc.less";
@import "assets/less/vmc.custom.less";      // 自定义变量覆盖，参考styles/base/variable.less
```

## 组件列表

### CSS组件

* [icono图标](https://github.com/saeedalipoor/icono)

* [1px边框](./src/styles/util#1px-border)

* [徽标](./src/styles/util#badge)

* [两端对齐](./src/styles/util#justify)

* [文本省略](./src/styles/util#nowrap)

* [小红点](./src/styles/util#red-dot)

### JS组件

* [ActionSheet](./src/components/actionsheet)

* [Alert](./src/components/alert)

* [Box](./src/components/box)

* [Button](./src/components/button)

* [Card](./src/components/card)

* [Cell](./src/components/cell)

* [CheckBox](./src/components/checkbox)

* [Confirm](./src/components/confirm)

* [Dialog](./src/components/dialog)

* [](./src/components/dropload)

* [Grid](./src/components/grid)

<!--


* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)

* [](./src/components/)
-->