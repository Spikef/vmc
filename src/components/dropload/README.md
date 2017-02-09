# DropLoad

## Overview

下拉刷新，上拉加载下一页。

是否全局组件：否。

## Usage

```html
<drop-load v-ref:dropload :refresh="refresh" :load-more="loadMore" :has-more="hasMore" auto-load>
    <div class="list" v-for="i in count">
        <p :class="'line-' + classList[i % 2]">这是第{{i + 1}}行</p>
    </div>
</drop-load>
```

```javascript
export default {
    data() {
        return {
            count: 0,
            hasMore: true,
            classList: ['single', 'double']
        }
    },
    methods: {
        refresh() {
            setTimeout(() => {
                this.count = 5;
                this.$refs.dropload.done();
                this.hasMore = this.count < 30;
            }, 2000);
        },
        loadMore() {
            setTimeout(() => {
                this.count += 5;
                this.$refs.dropload.done();
                this.hasMore = this.count < 30;
            }, 1000);
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| autoLoad | Boolean | 是否在进入页面时自动加载数据 | false |
| distance | Number | 上方距离 | 50 |
| threshold | Number | 下方距离 | 20 |
| refresh | Function | 刷新数据时调用的方法 | undefined |
| loadMore | Function | 加载下一页数据时调用的方法 | undefined |
| hasMore | Boolean | 是否还有下一页数据 | false |
| useMask | Boolean | 是否在加载数据时使用遮罩层，以禁用用户操作 | false |
| options | Object | 其它配置 | {tips: {upPull: '↓ 继续下拉刷新', upRelease: '↑ 释放更新列表', upLoading: '正在刷新...', downPull: '↑上拉加载更多', downLoading: '正在加载下一页数据...', downEnd: '没有更多数据了' }} |

## Methods

### done

刷新或者加载完毕时必需手动执行此方法。

| Name | Description | Default |
| ----- | ----- | ----- |
| error | 刷新或者加载数据是否出错 | false |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @DropLoadTipTextSize | 提示文字大小 | @SmallTextSize |
| @DropLoadDownHeight | 提示区域高度 | 50px |