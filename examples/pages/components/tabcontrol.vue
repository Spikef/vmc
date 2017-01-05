<template>
    <div id="tab-control">
        <navbar>Tab</navbar>

        <div class="content">
            <tab-control :tab-list="tabList" tab-index="0">
                <div slot="tabPage">
                    <p>{{item.name}} 内容云云</p>
                </div>
            </tab-control>

            <tab-control :tab-list="tabList" tab-index="2">
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

            <tab-control :tab-list="tabList" tab-index="0" tab-type="2" active-color="#007aff" default-color="#ffffff">
                <div slot="tabPage">
                    <p>{{item.name}} 内容云云</p>
                </div>
            </tab-control>

            <tab-control :tab-list="tabList" tab-index="0" auto-height>
                <div slot="tabPage">
                    <p v-for="i in 10">tab3 内容云云</p>
                    <hr>
                    <p v-for="i in 10">tab3 内容云云</p>
                    <hr>
                    <p v-for="i in 10">tab3 内容云云</p>
                </div>
            </tab-control>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, TabControl } from '../../../src';

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
        ready() {
            setTimeout(() => {
                this.tabList.push({
                    title: 'Tab4',
                    name: 'tab4'
                })
            }, 3000);
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
                height: 200px;

                &.auto-height {
                    height: auto;
                }

                .tab-page {
                    background-color: #dddddd;
                }
            }
        }
    }
</style>