<template>
    <div>
        <navbar>JS Components</navbar>
            <div style="height:100%;overflow:auto;box-sizing: border-box">
            <div class="di">
                <div class="da"><i class="icono-caretDownSquare "></i><span class="ptitle">Toast</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-spinner" ></i><span class="ptitle">indicator</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-downArrow " ></i><span class="ptitle">Pull down</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-upArrow " ></i><span class="ptitle">Pull up</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-infinity" ></i><span class="ptitle">Infinite scroll</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-commentEmpty" ></i><span class="ptitle">Message box</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-file" ></i><span class="ptitle">Action sheet</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-caretRightSquare" ></i><span class="ptitle">Popup</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span class="ptitle">Swipe</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span class="ptitle">Lazy load</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-list" ></i><span class="ptitle">Range</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span class="ptitle">Progress</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-paperClip" ></i><span class="ptitle">Picker</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            </div>
    </div>


</template>
<script type="text/ecmascript-6">
    import Navbar from '../../../src/components/navbar/navbar.vue'
    export default{
        components:{
            Navbar
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .di{
        display:flex;
        align-items: center;
        height:44px;
    }


    .di div{
        flex:1;
    }
    .icono-caretRight{

        color: #c2c2c2;
    }
    .ptitle{
        padding-left:15px;
        font-size:15px;
        font-weight:bold;
    }
    .da i{
        color: #67beff;
    }



</style>