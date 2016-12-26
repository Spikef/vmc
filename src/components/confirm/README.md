# confirm

 确认框提示组件

## 使用方式

 `confirm`为全局组件, 需要作为vue插件全局安装。

```
 javascript
 import Vue from 'vue';
 import { VMC } from '../src/components/index';

 Vue.use(VMC);
```

 在需要使用`Confirm`弹框时：
```
 javascript
       this.$Confirm('confirm提示框', () => {
                         this.$Alert('你点击了确定按钮');
                     }, () => {
                         this.$Alert('你点击了取消按钮');
                     });

```

