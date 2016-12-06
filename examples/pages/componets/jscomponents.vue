<template>
    <div>
        <navbar>JS Components</navbar>
            <div style="height:100%;overflow:auto;box-sizing: border-box">
            <div class="di">
                <div class="da"><i class="icono-caretDownSquare "></i><span>Toast</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-spinner" ></i><span>indicator</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-downArrow " ></i><span>Pull down</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-upArrow " ></i><span>Pull up</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-infinity" ></i><span>Infinite scroll</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-commentEmpty" ></i><span>Message box</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-file" ></i><span>Action sheet</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-caretRightSquare" ></i><span>Popup</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span>Swipe</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span>Lazy load</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-list" ></i><span>Range</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-image" ></i><span>Progress</span></div>
                <i class="icono-caretRight " ></i>
            </div>
            <div class="line vmc-1px-top"></div>
            <div  class="di">
                <div class="da"><i class="icono-paperClip" ></i><span>Picker</span></div>
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
    span{
        padding-left:15px;
        font-size:15px;
        font-weight:bold;
    }
    .da i{
        color: #67beff;
    }



</style>