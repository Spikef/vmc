<template>
    <div id="dropload">
        <navbar>下拉刷新、上拉加载</navbar>

        <div class="content">
            <drop-load ref="dropload" :refresh="refresh" :load-more="loadMore" :has-more="hasMore" auto-load>
                <div class="list" v-for="i in count">
                    <p :class="'line-' + classList[i % 2]">这是第{{i}}行</p>
                </div>
            </drop-load>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, DropLoad } from 'vmc';

    export default {
        components: {
            Navbar,
            DropLoad
        },
        data() {
            return {
                count: 0,
                hasMore: true,
                classList: ['single', 'double']
            }
        },
        methods: {
            refresh() {
                setTimeout(() => {
                    this.count = 5;
                    this.$refs.dropload.done();
                    this.hasMore = this.count < 30;
                }, 2000);
            },
            loadMore() {
                setTimeout(() => {
                    this.count += 5;
                    this.$refs.dropload.done();
                    this.hasMore = this.count < 30;
                }, 1000);
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #dropload {
        .content {
            height: 100%;
            box-sizing: border-box;

            p {
                height: 40px;
                line-height: 40px;

                &.line-single {
                    background-color: #C1CACA;
                }
                &.line-double {
                    background-color: #B1B1B1;
                }
            }
        }
    }
</style>
