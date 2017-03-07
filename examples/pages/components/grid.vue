<template>
    <div id="grid">
        <navbar>网格</navbar>

        <div class="content">
            <grid :list="buttonList" columns="3" gutter="10" margin="6">
                <v-button :type="item.type" radius="5">按钮{{index}}</v-button>
            </grid>

            <grid :list="buttonList" columns="auto" gutter="auto" margin="6">
                <v-button :type="item.type" width="50" height="30" radius="5">按钮{{index}}</v-button>
            </grid>

            <grid :list="buttonList" columns="auto" gutter="10" margin="6">
                <v-button :type="item.type" width="50" height="30" radius="5">按钮{{index}}</v-button>
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
                customColors: {
                    font: '#ffffff',
                    background: '#605ca8'
                },
                buttonList: [
                    {
                        type: 'primary'
                    },
                    {
                        type: 'success'
                    },
                    {
                        type: 'info'
                    },
                    {
                        type: 'danger'
                    },
                    {
                        type: 'warning'
                    }
                ]
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #grid {
        .vmc-grid {
            margin: 15px;
        }
    }
</style>
