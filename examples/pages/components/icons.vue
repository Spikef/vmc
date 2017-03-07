<template>
    <div id="icons">
        <navbar>ICONS</navbar>
        <div class="header" @click="onTextClick">
            {{value}}
        </div>

        <div class="content">
            <grid :list="icons" columns="auto">
                <div class="icon" :class="{ active: INDEX === index }" @click="onItemClick(index, item)">
                    <i :class="'icono-' + item"></i>
                </div>
            </grid>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, vButton, Grid } from 'vmc';

    export default {
        components: {
            Navbar,
            vButton,
            Grid
        },
        data() {
            return {
                value: '请选择任意ICON查看代码',
                INDEX: -1,
                icons: ["home","mail","rss","hamburger","plus","cross","check","power","heart","infinity","flag","file","image","video","music","headphone","document","folder","pin","smile","eye","sliders","share","sync","reset","gear","signIn","signOut","support","dropper","tiles","list","chain","youtube","rename","search","book","forbidden","trash","keyboard","mouse","user","crop","display","imac","iphone","macbook","imacBold","iphoneBold","macbookBold","nexus","microphone","asterisk","terminal","paperClip","market","clock","textAlignRight","textAlignCenter","textAlignLeft","indent","outdent","frown","meh","locationArrow","plusCircle","checkCircle","crossCircle","exclamation","exclamationCircle","comment","commentEmpty","areaChart","pieChart","barChart","bookmark","bookmarkEmpty","filter","volume","volumeLow","volumeMedium","volumeHigh","volumeDecrease","volumeIncrease","volumeMute","tag","calendar","camera","piano","ruler","cup","creditCard","facebook","twitter","gplus","linkedIn","instagram","flickr","delicious","codepen","blogger","play","pause","stop","rewind","forward","next","previous","caretRight","caretLeft","caretUp","caretDown","rightArrow","leftArrow","upArrow","downArrow","sun","moon","disqus","cart","caretRightCircle","caretLeftCircle","caretUpCircle","caretDownCircle","caretRightSquare","caretLeftSquare","caretUpSquare","caretDownSquare","dribbble","sitemap","spinner","circle","ellipsis"]
            }
        },
        methods: {
            onItemClick(index, name) {
                if (this.INDEX === index) {
                    this.INDEX = -1;
                    this.value = '请选择任意ICON查看代码';
                } else {
                    this.INDEX = index;
                    this.value = `<i class="icono-${name}"></i>`
                }
            },
            onTextClick() {
                window.clipboardData.setData('text', this.value);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #icons {
        .header {
            text-align: center;
            line-height: 40px;
            background: #104048;
            color: #ffffff;
            font-size: 14px;
        }

        .content {
            height: 100%;
            box-sizing: border-box;
            overflow: auto;
            padding-left: 5px;
            padding-right: 5px;
            padding-bottom: 100px;
            background: #2ba5bb;
            color: #eee;

            .vmc-grid {
                text-align: center;
            }

            .icon {
                padding: 14px;
                border: 1px solid transparent;
                box-sizing: border-box;
                vertical-align: top;

                &.active {
                    background: #15525d;
                }
            }
        }
    }
</style>
