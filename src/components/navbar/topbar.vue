<template>
    <div class="vmc-topbar">
        <slot></slot>
    </div>
</template>

<style>
    .vmc-topbar {
        position: absolute;
        top: 0;
        width: 100%;
        height: 50px;
        z-index: 50;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>