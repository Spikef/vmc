<template>
    <div class="vmc-justify">
        <span><slot>{{text | spaceText}}</slot></span>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            text: String
        }
    }
</script>
