<template>
    <div id="tab-control">
        <navbar>Tab</navbar>

        <div class="content">
            <tab-control :tab-list="tabList" tab-index="0" height="200">
                <template slot="tabPage" scope="props">
                    <div>
                        <p>{{props.item.name}} 内容云云</p>
                    </div>
                </template>
            </tab-control>

            <tab-control :tab-list="tabList" tab-index="2" height="200">
                <div slot="tab1">
                    <p>tab1 内容云云</p>
                </div>
                <div slot="tab2">
                    <p>tab2 内容云云</p>
                </div>
                <div slot="tab3">
                    <p v-for="i in 10">tab3 内容云云</p>
                    <hr>
                    <p v-for="i in 10">tab3 内容云云</p>
                    <hr>
                    <p v-for="i in 10">tab3 内容云云</p>
                </div>
            </tab-control>

            <tab-control :tab-list="tabList" tab-index="0" height="auto">
                <template slot="tabPage" scope="props">
                    <div>
                        <p v-for="i in 2">{{props.item.name}} 内容云云</p>
                        <hr>
                        <p v-for="i in 2">{{props.item.name}} 内容云云</p>
                        <hr>
                        <p v-for="i in 2">{{props.item.name}} 内容云云</p>
                    </div>
                </template>
            </tab-control>

            <tab-control :tab-list="tabList" tab-index="0" tab-type="2" height="200">
                <template slot="tabPage" scope="props">
                    <p>{{props.item.name}} 内容云云</p>
                </template>
            </tab-control>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, TabControl } from 'vmc';

    export default {
        components: {
            Navbar,
            TabControl
        },
        data() {
            return {
                tabList: [
                    {
                        title: 'Tab1',
                        name: 'tab1'
                    },
                    {
                        title: 'Tab2',
                        name: 'tab2'
                    },
                    {
                        title: 'Tab3',
                        name: 'tab3'
                    }
                ]
            }
        },
        mounted() {
            setTimeout(() => {
                this.tabList.push({
                    title: 'Tab4',
                    name: 'tab4'
                });
            }, 2000);
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #tab-control {
        .content {
            height: 100%;
            box-sizing: border-box;
            background-color: #eeeeee;
            overflow: auto;

            .vmc-tab-control {
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }

                .tab-pages {
                    background-color: #dddddd;
                }
            }
        }
    }
</style>
