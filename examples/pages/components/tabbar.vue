<template>
    <div id="tabbar">
        <navbar>TabBar</navbar>

        <div class="content">

        </div>

        <tabbar :items="items"></tabbar>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Tabbar } from 'vmc';

    export default {
        name: 'root',
        components: {
            Navbar,
            Tabbar
        },
        data() {
            return {
                items: [
                    {
                        icon: `<i style="transform: scale(0.94);" class="icono-home"></i>`,
                        text: '首页',
                        callback: () => this.$router.go('/index')
                    },
                    {
                        icon: `<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>`,
                        text: '关于',
                        callback: () => this.$router.go('/about')
                    }
                ]
            }
        }
    }
</script>