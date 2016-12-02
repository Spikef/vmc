<template>
    <div class="vmc-dialog">
        <div class="dialog-head">
            {{{title}}}
        </div>
        <div class="dialog-body">
            {{{content}}}
        </div>
        <div class="dialog-foot vmc-1px-top">
            <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String,
                default: ''
            },
            footer: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-dialog {
        position: fixed;
        z-index: 500;
        width: 85%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FAFAFC;
        text-align: center;
        border-radius: 3px;
        overflow: hidden;

        .dialog-head {
            padding: 18px 0 8px;
            font-weight: 400;
            font-size: 16px;
        }

        .dialog-body {
            padding: 0 20px;
            font-size: 15px;
            color: #888;
            word-wrap: break-word;
            word-break: break-all;
        }

        .dialog-foot {
            line-height: 42px;
            margin-top: 20px;
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