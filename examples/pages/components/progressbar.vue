<template>
    <div id="progressbar">
        <navbar>进度条</navbar>

        <div class="content">
            <row title="进度0%" align="left">
                <progressbar value="0" color="#ff0000" back-color="#000000"></progressbar>
            </row>
            <row title="进度27%" align="left">
                <progressbar value="27" color="#ff0000" back-color="#000000"></progressbar>
            </row>
            <row title="进度100%" align="left">
                <progressbar value="100" color="#ff0000" back-color="#000000">
                    <div class="progress-text">
                        <div>0%</div>
                        <div>100%</div>
                    </div>
                </progressbar>
            </row>
            <row title="自定义高度" align="left">
                <progressbar value="100" width="10"></progressbar>
            </row>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Row, Progressbar } from 'vmc';

    export default {
        components: {
            Navbar,
            Row,
            Progressbar
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #progressbar {
        background: #eeeeee;

        .progress-text {
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>