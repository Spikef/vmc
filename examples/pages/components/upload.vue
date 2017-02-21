<template>
    <div id="upload">
        <navbar>文件上传</navbar>

        <div class="content">
            <div class="help-block">注：该示例只能在本地dev环境下访问</div>
            <card>
                <child name="header">请上传图片</child>
                <child name="content">
                    <upload name="file" url="/upload" :body="data"></upload>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Row, Card, Upload } from 'vmc';

    export default {
        components: {
            Navbar,
            Row,
            Card,
            Upload
        },
        data() {
            return {
                data: {
                    id: 1
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    #upload {
        background: #eeeeee;

        .help-block {
            background: #2db7f5;
            color: #ffffff;
            font-size: 12px;
            padding: 5px;
        }
    }
</style>