<template>
    <div id="about">
        <navbar>关于</navbar>
        <div class="content">
            <p>Vue Mobile Components(VMC)是一套针对移动端开发的组件库，适用于vue@1.0.21+。参考了vux、mint-ui等知名的vue组件库。</p>

            <ul>
                <li>将使用频度高的组件全局化，直接注册到Vue实例化对象上；</li>
                <li>全部样式基于LESS，并允许通过覆盖LESS变量的方式快速初始化组件样式；</li>
                <li>同时，你也可以选择使用SASS，我们同样提供了基于SCSS的样式表；</li>
                <li>可以通过属性来单独定义每个组件的样式(写到style上，这样便能覆盖在LESS中定义的全局样式)；</li>
                <li>自定义的`Child`元素，可以实现按需插入元素，同时给予预定义样式；</li>
                <li>自定义的`SlotItem`元素，可以方便地自定义循环型组件（如轮播图）中显示的内容。</li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar } from 'vmc';

    export default {
        name: 'about',
        components: {
            Navbar
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #about {
        .content {
            padding-left: 10px;
            padding-right: 10px;

            p {
                font-size: 16px;
                margin: 10px 0;
                text-indent: 24px;
            }

            ul {
                li {
                    font-size: 14px;
                    padding-left: 20px;
                    position: relative;
                    margin: 3px 0;

                    &:before {
                        content: "*";
                        position: absolute;
                        left: 5px;
                        top: 2px;
                    }
                }
            }
        }
    }
</style>
