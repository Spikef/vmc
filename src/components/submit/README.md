# Submit

## Overview

提交按钮，继承自[按钮](../button)组件。

是否全局组件：否。

## Usage

```html
<submit type="primary" @submit="onSubmit" v-ref:submit>保存</submit>
<submit type="primary" disabled>不可点击的提交按钮</submit>
```

```javascript
export default {
    methods: {
        onSubmit() {
            this.$Toast('正在提交数据...');
            setTimeout(() => {
                this.$refs.submit.done();
            }, 5000);
        }
    }
}
```
## Methods

### done

提交结束时必需手动执行此方法。