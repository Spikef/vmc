# Upload

## Overview

简单实用的ajax文件上传组件。

是否全局组件：否。

## Usage

```html
<card>
    <child name="header">请上传图片(单张图片)</child>
    <child name="content">
        <div class="image-list">
            <div class="image" v-for="image in images1">
                <img :src="image">
                <span class="vmc-badge" @click="images1.splice($index, 1)">x</span>
            </div>
            <upload name="file" url="/upload" :body="data" @on-success="onSuccess" auto-reset></upload>
        </div>
    </child>
</card>

<card>
    <child name="header">请上传图片(多张图片)</child>
    <child name="content">
        <div class="image-list">
            <div class="image" v-for="image in images2">
                <img :src="image">
                <span class="vmc-badge" @click="images2.splice($index, 1)">x</span>
            </div>
            <upload name="photos" url="/upload/photos" :body="data" @on-success="onSuccess" multiple></upload>
        </div>
    </child>
</card>
```

```javascript
export default {
    data() {
        return {
            data: {
                id: 1
            },
            images1: [],
            images2: []
        }
    },
    methods: {
        onSuccess(res) {
            if (typeof res.url === 'string') {
                this.images1.push(res.url);
            } else {
                this.images2 = this.images2.concat(res.url);
            }
        }
    }
}
```

## Slots

| Name | Description | Default |
| ----- | ----- | ----- |
| default | 按钮显示的内容 | &lt;div class="vmc-upload-button"&gt; <br> &nbsp;&nbsp;&lt;i class="icono-plus"&gt;&lt;/i&gt; <br> &lt;/div&gt; |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| url | String | 上传地址 | undefined |
| name | String | 文件字段名 | undefined |
| accept | String | 指定的文件类型 | image/* |
| body | Object | 随图片一起上传的附加字段 | {} |
| multiple | Boolean | 是否允许上传多张 | false |
| autoReset | Boolean | 是否在上传成功之后重置文件选择框，如果不重置，则无法连续上传相同的图片文件 | false |
| validator | Function | 文件验证函数，可接收三个参数：文件名、文件类型、文件大小 | undefined |

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-progress | 上传进度改变时触发该事件。 | percentCompleted：已完成的百分比 |
| on-success | 上传成功时触发该事件。 | res：服务端返回<br>e：原生事件对象 |
| on-error | 上传失败时触发该事件。 | e：原生事件对象 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @UploadWidth | 上传按钮宽度 | 60px |
| @UploadHeight | 上传按钮高度 | 60px |
| @UploadBorderWidth | 上传按钮边框线宽度 | 2px |
| @UploadBorderColor | 上传按钮边框线颜色 | \#ccc |
| @UploadBorderStyle | 上传按钮边框线样式 | dashed |
| @UploadBorderRadius | 上传按钮边框圆角半径 | 5px |