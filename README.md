# VMC

> Mobile components for vue@2.2.1+.

> 如果需要在vue1.x上使用vmc，请查看[@1x](../../../tree/@1x)分支。

[View Demos](https://spikef.github.io/vmc/)

## 特性介绍

`VMC`是一套针对移动端开发的组件库，适用于`vue@2.2.1+`。

+ 将使用频度高的组件全局化，直接注册到Vue实例化对象上；
+ 全部样式基于LESS，并允许通过覆盖LESS变量的方式快速初始化组件样式；
+ 同时，你也可以选择使用SASS，我们同样提供了基于SCSS的样式表；
+ 可以通过属性来单独定义每个组件的样式(写到style上，这样便能覆盖在LESS中定义的全局样式)。

## 如何引用

### 基于webpack的SPA模式

#### 安装与引用

```bash
$ npm install vmc --save
```

#### 注册全局组件

在入口文件中添加以下内容：

```javascript
import VMC from 'vmc/install';

Vue.use(VMC);
```

#### 引入组件样式

> 通过LESS变量覆盖，可以自定义组件的一些初始样式，因此，需要手动引入LESS文件。

```css
@import "vmc/src/styles/vmc.less";
@import "assets/less/vmc.custom.less";      // 自定义变量覆盖，参考styles/base/variable.less
```

> 或者使用SASS变量覆盖，来自定义组件的一些初始样式，同样需要手动引入SCSS文件。

```css
@import "assets/scss/vmc.custom.scss";      // 自定义变量覆盖，参考scss/base/variable.scss
@import "vmc/src/scss/vmc.scss";
```

#### 引用组件

```javascript
import { Navbar } from 'vmc';
```

### 普通标签方式引用

#### 安装与引用

直接下载`dist`目录下的`vmc.css`和`vmc.js`两个文件。

```html
<link rel="stylesheet" href="vmc.css">

<div id="app">
    <v-button type="success" @click="$Alert('Hello world!')">按钮</v-button>
</div>

<script src="vue.js"></script>
<script src="vmc.js"></script>

<script>
    new Vue({
        el: '#app'
    });
</script>
```

#### 注册全局组件

这种方式会自动注册全局组件，同时自动注册所有组件，无需额外操作。

## 组件列表

### CSS组件

* [icono图标 (ICON)](https://github.com/saeedalipoor/icono)

* [1px边框 (1px border)](./src/styles/util#1px-border)

* [徽标 (Badge)](./src/styles/util#badge)

* [两端对齐 (Justify)](./src/styles/util#justify)

* [文本省略 (NoWrap)](./src/styles/util#nowrap)

* [小红点 (Red dot)](./src/styles/util#red-dot)

### JS组件

* [操作按钮列表 (ActionSheet)](./src/components/actionsheet)

* [警告框 (Alert)](./src/components/alert)

* [占位盒 (Box)](./src/components/box)

* [按钮 (Button)](./src/components/button)

* [卡片 (Card)](./src/components/card)

* [单栏 (Cell)](./src/components/cell)

* [复选框 (CheckBox)](./src/components/checkbox)

* [确认框 (Confirm)](./src/components/confirm)

* [对话框 (DialogBox)](./src/components/dialogbox)

* [分页刷新 (DropLoad)](./src/components/dropload)

* [网格 (Grid)](./src/components/grid)

* [强制型输入框 (mInput)](./src/components/input#minput)

* [提示型输入框 (vInput)](./src/components/input#vinput)

* [两端对齐 (Justify)](./src/components/justify)

* [滚动公告 (Marquee)](./src/components/marquee)

* [导航栏 (Navbar)](./src/components/navbar)

* [数字输入 (Number)](./src/components/number)

* [遮罩层 (Overlay)](./src/components/overlay)

* [选择器 (Picker)](./src/components/picker)

* [弹出层 (Popup)](./src/components/popup)

* [弹出式选择器 (Popup Picker)](./src/components/popup-picker)

* [弹出式日期选择器 (Popup Date Picker)](./src/components/popup-date-picker)

* [进度条 (Progressbar)](./src/components/progressbar)

* [提示输入框 (Prompt)](./src/components/prompt)

* [单选框 (Radio)](./src/components/radio)

* [评分 (Rater)](./src/components/rater)

* [标题行 (Row)](./src/components/row)

* [轮播图 (Slider)](./src/components/slider)

* [动态指示器 (Spinner)](./src/components/spinner)

* [提交按钮 (Submit)](./src/components/submit)

* [导航栏 (Tabbar)](./src/components/tabbar)

* [选项卡 (TabControl)](./src/components/tabcontrol)

* [文本框 (TextArea)](./src/components/textarea)

* [开关 (Toggle)](./src/components/toggle)

* [加载提示 (Loading)](./src/components/toast#loading)

* [成功提示 (Success)](./src/components/toast#success)

* [错误提示 (Error)](./src/components/toast#error)

* [信息提示 (Info)](./src/components/toast#info)

* [文字提示 (Toast)](./src/components/toast#toast)

* [上传组件 (Upload)](./src/components/upload)

## 开发与编译

### 开发

```
$ npm run dev
```

命令执行之后会自动跑`examples`目录下的文件，用于开发调试。

### 发布

```
$ npm run release
```

命令执行之后会将`vmc`发布到`dist`目录下。

### 编译

```
$ npm run build
```

命令执行之后会自动将`examples`目录下的文件打包到`docs`目录下。

### 预览

```
$ npm run docs
```

命令执行之后会将`docs`目录作为一个静态的文档服务器资源，可以从浏览器直接访问。

## License

MIT
