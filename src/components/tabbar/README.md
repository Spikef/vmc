# Tabbar

## Overview

固定在底部的导航栏。

是否全局组件：否。

## Usage

**使用默认slot**
```html
<tabbar :index="index" :items="items" :show="showTab"></tabbar>
```

**自定义slot**
```
<tabbar :index="index" :items="items" :show="showTab">
    <template scope="props">
        <div>{{props.item.text}}</div>
    </template>
</tabbar>
```

```javascript
export default {
    data() {
        return {
            showTab: true,
            index: 0,
            items: [
                {
                    icon: `<i style="transform: scale(0.94);" class="icono-home"></i>`,
                    text: '首页',
                    callback: () => this.$router.go('/index')
                },
                {
                    icon: `<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>`,
                    text: '关于',
                    callback: () => this.$router.go('/about')
                }
            ]
        }
    },
    ready() {
        this.$router.afterEach(t => {
            this.$nextTick(() => {
                this.index = t.to.name === 'about' ? 1 : 0;
                this.showTab = !!~['index', 'about'].indexOf(t.to.name);
            })
        });
    }
}
```

## Scoped Slots

| Name | Description | props | Default |
| ----- | ----- | ----- | ----- |
| default | 每个导航栏显示的内容 | item: 循环的当前元素；index：当前索引 | {{{item.icon}}}<br>&lt;span class="tab-text"&gt;{{item.text}}&lt;/span&gt; |

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| index | Number, String | 默认激活的导航索引 | 0 |
| show | Boolean | 是否显示导航栏 | true |
| items | Array | 导航列表 | [] |
| color | String | 导航栏文字颜色 | 由LESS变量定义 |
| backColor | String | 导航栏背景色 | 由LESS变量定义 |
| fontSize | String | 导航栏文字大小 | 由LESS变量定义 |

### items item

- text：按钮显示的文本
- icon：按钮图标
- activeIcon: 选中时的按钮图标
- callback：点击按钮时的回调函数

## Events

| Name | Description | Arguments |
| ----- | ----- | ----- |
| on-item-click | 点击某个导航时触发该事件。 | item：传入的对象<br>index：索引 |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @TabbarHeight | 高度 | 55px |
| @TabbarBackColor | 背景色 | @BarBackColor |
| @TabbarTextColor | 文字颜色 | \#5e5e5e |
| @TabbarTextSize | 文字大小 | 13px |
| @TabbarTextActiveColor | 当前文字颜色 | @BarTextColor |
