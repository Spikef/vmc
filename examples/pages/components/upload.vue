<template>
    <div id="upload">
        <navbar>文件上传</navbar>

        <div class="content">
            <div class="help-block">注：该示例只能在本地dev环境下访问</div>
            <card>
                <div name="header">请上传图片(单张图片)</div>
                <div name="content">
                    <div class="image-list">
                        <div class="image" v-for="image in images1">
                            <img :src="image">
                            <span class="vmc-badge" @click="images1.splice($index, 1)">x</span>
                        </div>
                        <upload name="file" url="/upload" :body="data" @on-success="onSuccess" auto-reset></upload>
                    </div>
                </div>
            </card>

            <card>
                <div name="header">请上传图片(多张图片)</div>
                <div name="content">
                    <div class="image-list">
                        <div class="image" v-for="image in images2">
                            <img :src="image">
                            <span class="vmc-badge" @click="images2.splice($index, 1)">x</span>
                        </div>
                        <upload name="photos" url="/upload/photos" :body="data" @on-success="onSuccess" multiple></upload>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script type="es6">
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
                },
                images1: [],
                images2: []
            }
        },
        methods: {
            onSuccess(res) {
                if (typeof res.url === 'string') {
                    this.images1.push(res.url);
                } else {
                    this.images2 = this.images2.concat(res.url);
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

        .image-list {
            display: flex;

            .image {
                width: 64px;
                height: 64px;
                position: relative;
                margin-right: 15px;

                img {
                    width: 100%;
                    height: 100%;
                }

                .vmc-badge {
                    position: absolute;
                    right: -8px;
                    top: -8px;
                }
            }
        }
    }
</style>
