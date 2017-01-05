<template>
    <div class="vmc-justify">
        <span><slot>{{text | spaceText}}</slot></span>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            text: String
        }
    }
</script>