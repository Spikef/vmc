<template>
    <gridbar class="home-grid">
        <div class="icon">
            <span><img src="/src/img/4.jpg" alt=""></span>
            <p>v0.1.3</p>
        </div>
        <gridbar-item @on-item-click="jump">
            Dome
            <span class="operate">演示</span>
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            buy me a coffee
            <span class="operate"><img src="/static/img/down.png" alt=""></span>
        </gridbar-item>

        <gridbar-item @on-item-click="jump">
            Github
            <span class="operate">Star me</span>
        </gridbar-item>
    </gridbar>
</template>

<script type="text/ecmascript-6">
    import Gridbar from './base/gridbar.vue';
    import GridbarItem from './base/gridbar-item.vue';

    export default {
        components: {
            Gridbar,
            GridbarItem
        },
        methods: {
            jump(index) {
                var name, url

                switch (index) {
                    case 0:
                        name = 'home';
                        break;
                    case 1:
                        name= 'donate';
                        break;
                    case 2:
                        name = 'github.com';
                        break;
                }

                if (name) {
                    this.$router.forward({ name });
                } else {
                    window.location.href = url;
                }

            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .home-grid{
        background-color:#FBF9FE;
        position:relative;
        .icon{
            height:120px;
            background-color:#FBF9FE;
            display:flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
                display:block;

            }
            p{
                height:30px;
                color:green;
                padding-left:10px;
                padding-top:10px;

            }
        }
        .operate{
            position:absolute;
            right:75px;
            top:12px;
            color:#8D8D8D;
        }
    }
</style>