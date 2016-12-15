# checkbox

复选框组件。

## 使用方式

引用:

```javascript
import { Checkbox, Checkall } from '../../../src/components/checkbox';
```

使用:

```html
<checkbox :checked.sync="list1" :value="item" v-for="item in list">{{item}}</checkbox>
```

```javascript
export default {
    components: {
        Checkbox,
        Checkall
    },
    data() {
        return {
            list: ['选项A', '选项B', '选项C'],
            list1: []
        }
    }
}
```

## 属性

### id

原生checkbox的id值, 如果省略则随机生成一个值。

### value

原生checkbox的value值。

### checked

如果为单个复选框, 则其值为true/false, 表示是否选中该复选框; 如果为一组复选框, 则其值为一个数组, 表示该组复选框中选中的值。

### disabled

是否禁用, true/false。

