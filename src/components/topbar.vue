<template>
    <div class="topbar">

        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'topbar'
    }
</script>

<style>
    .topbar {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50px;
        z-index: 50;
        /*transform: translate3d(0px, 0px, 1px);      !* solve z-index *!*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>