<template>
    <div v-show="show" class="vmc-dialog-wrapper">
        <mask></mask>
        <div class="vmc-dialog">
            <div class="dialog-head" v-child="header"></div>
            <div class="dialog-body vmc-1px-top" v-child="content"></div>
            <div class="dialog-foot vmc-1px-top" v-child="footer"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import component from '../../mixins/component';
    import Mask from '../mask';

    export default {
        mixins: [component],
        props: {
            show: Boolean
        },
        components: {
            Mask
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-dialog {
        position: absolute;
        z-index: 500;
        width: 85%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FAFAFC;
        text-align: center;
        border-radius: 5px;
        overflow: hidden;

        .dialog-head {
            padding: 15px 20px 10px;
            font-weight: 400;
            font-size: 17px;
        }

        .dialog-body {
            padding: 20px;
            font-size: 15px;
            word-wrap: break-word;
            word-break: break-all;
            text-align: left;
        }

        .dialog-foot {
            line-height: 42px;
            font-size: 17px;
            display: flex;

            span {
                display: block;
                flex: 1;

                &.primary {
                    color: #ff0000;
                }

                &.default {
                    color: #b3b3b3;
                }
            }
        }
    }
</style>