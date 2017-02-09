# mInput

## Overview

输入框，指定输入内容的格式并自动转换。

是否全局组件：否。

## Usage

```html
<card>
    <child name="header">只能输入整数(0-10)</child>
    <child name="content">
        <div class="input">
            <m-input type="integer" :value.sync="value1" min="0" max="10"></m-input>
        </div>
    </child>
    <child name="footer">
        <span>输入的值:</span>
        <span> {{ value1 }} </span>
    </child>
</card>

<card>
    <child name="header">只能输入小写字母(最长12位)</child>
    <child name="content">
        <div class="input">
            <m-input type="alphabet" :value.sync="value2" max="12"></m-input>
        </div>
    </child>
    <child name="footer">
        <span>输入的值:</span>
        <span> {{ value2 }} </span>
    </child>
</card>

<card>
    <child name="header">只能输入大写字母(最长12位)</child>
    <child name="content">
        <div class="input">
            <m-input type="ALPHABET" :value.sync="value3" max="12"></m-input>
        </div>
    </child>
    <child name="footer">
        <span>输入的值:</span>
        <span> {{ value3 }} </span>
    </child>
</card>
```

```javascript
export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| type | String, Function | 指定允许输入的类型，可以为以下值。<br> integer：整数 <br> number：数字 <br> alphabet：小写字母 <br> Alphabet：字母 <br> ALPHABET：大写字母 <br> 任意函数：对输入的值进行转换 | undefined |
| value | String, Number, Boolean | 输入框的值 | undefined |
| placeholder | String | 占位字符串 | undefined |
| min | Number, String | 当类型为整数时，允许输入的最小值 | undefined |
| max | Number, String | 当类型为整数时，允许输入的最大值 | undefined |
| border | Boolean | 是否显示边框 | true |

## LESS

| Name | Description | Default |
| ----- | ----- | ----- |
| @InputPadding | 输入框内边距 | 5px |
| @InputTextSize | 输入框文字大小 | @DefaultTextSize |
| @InputInvalidColor | 输入错误时的边框提示颜色 | @PrimaryColor |
| @InputMessageWidth | 输入错误提示信息的宽度 | 70% |
| @InputMessageTextSize | 输入错误提示信息的文字大小 | @SmallTextSize |
| @InputMessageTextColor | 输入错误提示信息的文字颜色 | \#fff |
| @InputMessageBackColor | 输入错误提示信息的背景色 | \#363636 |

# vInput

## Overview

输入框，指定输入内容的格式并在输入格式不正确时显示提示信息。

是否全局组件：否。

## Usage

```html
<div class="content">
    <cell arrow="false">
        <v-input placeholder="请输入用户名，长度为6-12位" v-valid="valid" :validator="validName" error-message="用户名长度必须为6-12位"></v-input>
    </cell>
    <cell arrow="false">
        <v-input placeholder="请输入密码，长度为6-16位" v-valid="valid" :validator="validPass" type="password" :value.sync="form.password1"></v-input>
    </cell>
    <cell arrow="false">
        <v-input placeholder="请再次确认密码" v-valid="valid" :validator="validPass2" type="password" :value.sync="form.password2"></v-input>
    </cell>
</div>

<div class="button">
    <submit type="danger" @submit="submit" v-valid>保存</submit>
</div>
```

```javascript
export default {
    data() {
        return {
            form: {
                name: '',
                password1: '',
                password2: ''
            },
            validName: /^.{6,12}$/,
            validPass: {
                expression: /^.{6,16}$/,
                message: '密码长度必须为6-16位'
            },
            validPass2: [
                {
                    expression: /^.{6,16}$/,
                    message: '密码长度必须为6-16位'
                },
                value => {
                    if (value !== this.form.password1) {
                        return '两次密码输入不一致';
                    } else {
                        return true;
                    }
                }
            ]
        }
    },
    methods: {
        submit(submit) {
            setTimeout(() => {
                this.$Toast('提交成功!');
                submit.done();
            }, 2000);
        }
    }
}
```

## Props

| Property | Type | Description | Default |
| ----- | ----- | ----- | ----- |
| type | String | 原始输入框的type值 | text |
| value | String, Number, Boolean | 输入框的值 | undefined |
| placeholder | String | 占位字符串 | undefined |
| errorMessage | String | 默认的错误提示信息 | undefined |
| validator | Function, Object, RegExp, Array | 验证表达式。<br> Function：传入输入的值并进行验证，如果验证通过，则返回true，否则返回false或者错误提示信息字符串。<br> RegExp：使用正则表达式进行test验证。<br> Object：expression为用于验证的正则表达式，message为验证不通过时的提示信息。<br> Array：为上面三种情况的组合验证，按照数组元素依次进行验证，当某次验证不通过则结束验证。 | null |
| border | Boolean | 是否显示边框 | true |