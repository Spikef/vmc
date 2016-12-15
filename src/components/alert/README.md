# alert

弹框提示组件。

## 使用方式

`Alert`为全局组件, 需要作为vue插件全局安装。

```javascript
import Vue from 'vue';
import { VMC } from '../src/components/index';

Vue.use(VMC);
```

在需要使用`Alert`弹框时:

```javascript
this.$Alert('请点击确定', () => {});
```