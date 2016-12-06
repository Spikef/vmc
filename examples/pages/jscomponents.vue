<template>
    <div>
        <navbar>JS Components</navbar>
            <div class="di"><div><i class="icono-caretDownSquare "></i><span>Toast</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-spinner" ></i><span>indicator</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-downArrow " ></i><span>Pull down</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-upArrow " ></i><span>Pull up</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-infinity" ></i><span>Infinite scroll</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-commentEmpty" ></i><span>Message box</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-file" ></i><span>Action sheet</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-caretRightSquare" ></i><span>Popup</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-image" ></i><span>Swipe</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-image" ></i><span>Lazy load</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-list" ></i><span>Range</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-image" ></i><span>Progress</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>
            <div  class="di"><div><i class="icono-paperClip" ></i><span>Picker</span></div><i class="icono-caretRight " style="color:#c1c1c1"></i></div><hr/>

    </div>
    <style>
        .di{
            display:flex;
            justify-content: space-between;
            align-items: center;
            height:44px;
        }

        .di i{
                  color:#67beff;
        }
        span{
            padding-left:15px;
            font-size:15px;
            font-weight:bold;
        }

    </style>









</template>
<script type="text/ecmascript-6">
    import Navbar from '../../src/components/navbar/navbar.vue'
    export default{
        components:{
            Navbar
        }

    }


</script>