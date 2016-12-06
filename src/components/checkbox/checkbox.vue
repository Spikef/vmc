<template>
    <span class="vmc-checkbox">
        <input type="checkbox" :id="id" :value="value" v-model="checked" >
        <label :for="id">
            <slot></slot>
        </label>
    </span>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            id: {
                type: String,
                default() {
                    return 'checkbox-' + Math.random().toString(36).substr(2, 8);
                }
            },
            value: [String, Number, Boolean],
            checked: [Boolean, Array]
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-checkbox {
        input {
            display: none;
        }

        label {
            display: inline-block;
            position: relative;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: #243441;
            padding-left: 24px;
            width: 100%;
            box-sizing: border-box;

            &:before {
                content: '';
                display: inline-block;
                height: 14px;
                width: 14px;
                border-radius: 2px;
                background-color: #FFFFFF;
                border: 1px solid #C1CACA;
                box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
                position: absolute;
                left: 0;
                top: 2px;
            }

            &:after {
                content: '';
                color: #ffffff;
                position: absolute;
                top: 1px;
                left: 2px;
            }
        }

        input:checked + label:before {
            background-color: #ED1F31;
            border: 1px solid #ED1F31;
        }

        /*
        http://stackoverflow.com/questions/35939070/safari-mobile-does-not-respect-css-color-attribute-for-html-entity-10006
        */
        input:checked + label:after {
            content: '\2714\FE0E';
        }
    }
</style>