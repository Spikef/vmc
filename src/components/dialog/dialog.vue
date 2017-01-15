<template>
    <div class="vmc-dialog">
        <div class="dialog-head">
            {{{title}}}
        </div>
        <div class="dialog-body vmc-1px-top" v-show="content">
            {{{content}}}
            <div class="dialog-input" v-if="showInput">
                <label class="vmc-1px" :class="{ invalid: inputInvalid }">
                    <input v-model="inputValue" :placeholder="inputHolder">
                </label>
                <div class="error-message" v-if="!!inputMessage">{{{ inputMessage }}}</div>
            </div>
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
            },
            showInput: Boolean,
            inputValue: String,
            inputHolder: String,
            inputMessage: String,
            inputInvalid: Boolean
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
        border-radius: 5px;
        overflow: hidden;

        .dialog-head {
            padding: 18px 0 8px;
            font-weight: 400;
            font-size: 17px;
        }

        .dialog-body {
            padding: 20px 20px 0 20px;
            font-size: 15px;
            word-wrap: break-word;
            word-break: break-all;
            text-align: left;
        }

        .dialog-input {
            padding-top: 15px;

            .error-message {
                color: #ff0000;
                font-size: 12px;
                margin-top: 5px;
            }

            label {
                display: block;
            }

            input {
                box-sizing: border-box;
                border: none;
                padding: 5px;
                font-size: 14px;
                height: 40px;
                width: 100%;
                appearance: none;
                outline: none;
            }
            .invalid {
                border-color: #ff0000;
            }
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