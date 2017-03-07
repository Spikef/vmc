<template>
    <div id="home">
        <navbar>首页</navbar>
        <div class="content">
            <div class="title">表单组件</div>

            <cell @click.native="jump('checkbox')">Checkbox</cell>
            <cell @click.native="jump('radio')">Radio</cell>
            <cell @click.native="jump('button')">Button</cell>
            <cell @click.native="jump('submit')">Submit</cell>
            <cell @click.native="jump('switch')">Switch</cell>
            <cell @click.native="jump('minput')">Input (Auto Fix)</cell>
            <cell @click.native="jump('vinput')">Input (Prompt)</cell>
            <cell @click.native="jump('textarea')">TextArea</cell>
            <cell @click.native="jump('number')">Number</cell>
            <cell @click.native="jump('upload')">Upload</cell>
            <cell @click.native="jump('rater')">Rater</cell>

            <div class="title">全局组件</div>
            <cell @click.native="jump('message')">Message</cell>
            <cell @click.native="jump('toast')">Toast</cell>

            <div class="title">UI组件</div>
            <cell @click.native="jump('dialog')">Dialog</cell>
            <cell @click.native="jump('popup')">Popup</cell>
            <cell @click.native="jump('spinner')">Spinner</cell>
            <cell @click.native="jump('dropload')">DropLoad</cell>
            <cell @click.native="jump('tabbar')">Tabbar</cell>
            <cell @click.native="jump('grid')">Grid</cell>
            <cell @click.native="jump('box')">Box</cell>
            <cell @click.native="jump('justify')">Justify</cell>
            <cell @click.native="jump('nowrap')">Nowrap</cell>
            <cell @click.native="jump('reddot')">RedDot</cell>
            <cell @click.native="jump('badge')">Badge</cell>
            <cell @click.native="jump('tabcontrol')">TabControl</cell>
            <cell @click.native="jump('progressbar')">Progressbar</cell>
            <cell @click.native="jump('icons')">Icons</cell>
            <cell @click.native="jump('card')">Card</cell>
            <cell @click.native="jump('marquee')">Marquee</cell>
            <cell @click.native="jump('actionsheet')">Action Sheet</cell>
            <cell @click.native="jump('slider')">Slider</cell>
            <cell @click.native="jump('picker')">Picker</cell>
            <cell @click.native="jump('datepicker')">Date Picker</cell>

            <div class="title">其它功能</div>
            <cell @click.native="jump('shake')">Shake</cell>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Cell } from 'vmc';

    export default {
        name: 'index',
        components: {
            Navbar,
            Cell
        },
        methods: {
            jump(path) {
                this.$router.push('/components/' + path);
            }
        },
        beforeDestroy() {
            window.__pageIndexScrollTop__ = this.$el.querySelector('.content').scrollTop;
        },
        mounted() {
            this.$nextTick(() => {
                this.$el.querySelector('.content').scrollTop = window.__pageIndexScrollTop__;
            });
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
