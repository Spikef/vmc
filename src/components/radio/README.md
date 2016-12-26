# checkbox

单选框组件

## 使用方式

引用:
```javascript
import Radio from '../../../src/components/radio';
```

使用:

```html
 <radio :checked.sync="value1" :value="item" v-for="item in list">{{item}}</radio>
```

```javascript
 export default {
        components: {

            Radio
        },
        data() {
            return {
                list: ['选项A', '选项B', '选项C'],
                value1: '选项A'
            }
        }
    }
```
## 属性

### id

原生radio的id值, 如果省略则随机生成一个值。

### value

原生radio的value值。

### checked

表示选中该单选框的值;

### disabled

是否禁用, true/false。