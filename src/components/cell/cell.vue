<template>
    <div class="vmc-cell vmc-1px-top-bottom">
        <div class="cell-title">
            <slot>{{title}}</slot>
        </div>
        <div class="cell-arrow">
            <slot name="arrow">
                <i class="icono-caretRight" v-if="arrow"></i>
            </slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            title: String,
            arrow: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-cell {
        padding-left: 12px;
        min-height: 45px;
        display: flex;
        align-items: center;
        background: #ffffff;

        + .vmc-cell:before {
            border: none;
        }

        .cell-icon {
            margin-right: 15px;
        }

        .cell-title {
            flex: 1;
            font-size: 15px;
        }

        .cell-arrow {

            .icono-caretRight {
                color: #cecece;
                transform: scale(0.8);
            }
        }
    }
</style>