<template>
    <div id="grid">
        <navbar>网格</navbar>

        <div class="content">
            <grid :list="buttonList" columns="3" gutter="10" margin="6">
                <template scope="props">
                    <v-button :type="props.item.type" radius="5">按钮{{props.index}}</v-button>
                </template>
            </grid>

            <grid :list="buttonList" columns="auto" gutter="auto" margin="6">
                <template scope="props">
                    <v-button :type="props.item.type" width="50" height="30" radius="5">按钮{{props.index}}</v-button>
                </template>
            </grid>

            <grid :list="buttonList" columns="auto" gutter="10" margin="6">
                <template scope="props">
                    <v-button :type="props.item.type" width="50" height="30" radius="5">按钮{{props.index}}</v-button>
                </template>
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
