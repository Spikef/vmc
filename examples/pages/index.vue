<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <cell @click="jump('checkbox')">Checkbox</cell>
            <cell @click="jump('radio')">Radio</cell>
            <cell @click="jump('button')">Button</cell>
            <cell @click="jump('submit')">Submit</cell>
            <cell @click="jump('switch')">Switch</cell>
            <cell @click="jump('minput')">Input (Auto Fix)</cell>
            <cell @click="jump('vinput')">Input (Prompt)</cell>
            <cell @click="jump('textarea')">TextArea</cell>
            <cell @click="jump('number')">Number</cell>
            <cell @click="jump('rater')">Rater</cell>

            <div class="title">全局组件</div>
            <cell @click="jump('message')">Message</cell>
            <cell @click="jump('toast')">Toast</cell>

            <div class="title">UI组件</div>
            <cell @click="jump('dialog')">Dialog</cell>
            <cell @click="jump('popup')">Popup</cell>
            <cell @click="jump('spinner')">Spinner</cell>
            <cell @click="jump('dropload')">DropLoad</cell>
            <cell @click="jump('tabbar')">Tabbar</cell>
            <cell @click="jump('grid')">Grid</cell>
            <cell @click="jump('box')">Box</cell>
            <cell @click="jump('justify')">Justify</cell>
            <cell @click="jump('nowrap')">Nowrap</cell>
            <cell @click="jump('reddot')">RedDot</cell>
            <cell @click="jump('badge')">Badge</cell>
            <cell @click="jump('tabcontrol')">TabControl</cell>
            <cell @click="jump('progressbar')">Progressbar</cell>
            <cell @click="jump('icons')">Icons</cell>
            <cell @click="jump('card')">Card</cell>
            <cell @click="jump('marquee')">Marquee</cell>
            <cell @click="jump('actionsheet')">Action Sheet</cell>
            <cell @click="jump('slider')">Slider</cell>
            <cell @click="jump('picker')">Picker</cell>
            <cell @click="jump('datepicker')">Date Picker</cell>

            <div class="title">其它功能</div>
            <cell @click="jump('shake')">Shake</cell>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Cell } from 'vmc';

    export default {
        name: 'index',
        components: {
            Navbar,
            Cell
        },
        methods: {
            jump(path) {
                this.$router.go('/components/' + path);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #home {
        background-color: #fbf9fe;

        .content {
            height: 100%;
            padding-bottom: 55px;
            box-sizing: border-box;
            overflow: auto;

            .title {
                font-size: 18px;
                text-align: center;
                height: 44px;
                line-height: 44px;
                color: #888888;
            }

            .line {
                font-size: 14px;
                padding: 10px;
                background-color: #ffffff;

                i {
                    float: right;
                    margin: 0;
                    color: #666666;
                    transform: scale(0.8);
                }
            }
        }
    }
</style>