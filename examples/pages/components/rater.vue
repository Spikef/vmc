<template>
    <div id="rater">
        <navbar>评分</navbar>

        <div class="content">
            <row :title="'普通评分 (' + point1 + ')'">
                <rater v-model="point1"></rater>
            </row>
            <row :title="'允许评0分 (' + point1 + ')'">
                <rater v-model="point1" min="0"></rater>
            </row>
            <row :title="'仅展示评分 (' + point1 + ')'">
                <rater :value="point1" disabled></rater>
            </row>
            <row :title="'评分为小数(' + point2 + ')'">
                <rater :value="point2" disabled></rater>
            </row>
            <row :title="'自定义可评分 (' + point1 + ')'">
                <rater :value="point1" max="6"></rater>
            </row>
            <row :title="'自定义大小 (' + point1 + ')'">
                <rater :value="point1" size="15"></rater>
            </row>
            <row :title="'自定义颜色 (' + point1 + ')'">
                <rater :value="point1" active-color="#00C85E"></rater>
            </row>
            <row :title="'自定义间距 (' + point1 + ')'">
                <rater :value="point1" gutter="4"></rater>
            </row>
            <row :title="'自定义形状 (' + point1 + ')'">
                <rater :value="point1" star="☻"></rater>
            </row>

            <v-button type="danger" @click="updatePoint">更新评分数</v-button>
        </div>
    </div>
</template>

<script type="es6">
    import { Navbar, Rater, Row, vButton } from 'vmc';

    export default {
        components: {
            Navbar,
            Rater,
            Row,
            vButton
        },
        data() {
            return {
                point1: 4,
                point2: 3.5
            }
        },
        methods: {
            updatePoint() {
                var point1 = Math.ceil(Math.random() * 5);
                var point2 = parseFloat((Math.random() * 5).toFixed(1));
                this.point1 = point1;
                this.point2 = point2;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #rater {
        background: #eeeeee;

        .vmc-button {
            margin-top: 50px;
        }
    }
</style>
