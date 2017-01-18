<template>
    <dialog :show="show" class="vmc-alert" :class="{'no-content': !content}">
        <child name="header">
            <div><p>{{title}}</p></div>
        </child>
        <child name="content">{{content}}</child>
        <child name="footer">
            <span class="primary" @click.stop="_onConfirm">
                {{button}}
            </span>
        </child>
    </dialog>
</template>

<script type="text/ecmascript-6">
    import Dialog from '../dialog';

    export default {
        components: {
            Dialog
        },
        props: {
            show: Boolean,
            title: String,
            content: String,
            callback: {
                type: Function,
                default: null
            },
            button: {
                type: String,
                default: '确定'
            }
        },
        methods: {
            _onConfirm(e) {
                this.show = false;
                this.$emit('on-confirm', e);

                if (this.callback && typeof this.callback === 'function') {
                    this.callback();
                }
            },
            _show(options) {
                Object.keys(options).forEach(v => this[v] = options[v]);
                this.show = true;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-alert {
        &.no-content {
            .dialog-head {
                display: flex;
                align-items: center;
                min-height: 50px;
                padding-bottom: 15px;

                div {
                    flex: 1;
                    text-align: center;
                }

                p {
                    display: inline-block;
                    text-align: left;
                }
            }

            .dialog-body {
                display: none;
            }
        }
    }
</style>