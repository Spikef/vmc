<template>
    <div class="vmc-card" :class="status" :style="{height: height}">
        <div class="card-header" v-child="header" @click="toggle"></div>
        <div class="card-content vmc-1px-top" v-child="content"></div>
        <div class="card-footer vmc-1px-top" v-child="footer"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import component from '../../mixins/component';

    export default {
        mixins: [component],
        props: {
            // null, collapse, expand
            status: String
        },
        data() {
            return {
                height: 'auto',
                minHeight: 0,
                maxHeight: 0
            }
        },
        methods: {
            toggle() {
                switch (this.status) {
                    case 'collapse':
                        this.height = this.maxHeight;
                        this.status = 'expand';
                        break;
                    case 'expand':
                        this.height = this.minHeight;
                        this.status = 'collapse';
                        break;
                }
            }
        },
        ready() {
            if (this.status) {
                var header = this.$el.querySelector('.card-header');
                if (!header) {
                    return this.status = '';
                }

                this.minHeight = header.clientHeight + 'px';
                this.maxHeight = this.$el.clientHeight + 'px';

                this.status = this.status === 'collapse' ? 'expand' : 'collapse';
                this.toggle();
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-card {
        background: #ffffff;
        overflow-y: hidden;
        transform: translate3d(0, 0, 0);
        transition-property: height;
        transition-duration: .3s;
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

        + .vmc-card {
            margin-top: 15px;
        }

        .no-border {
            &:before, &:after {
                border: none;
            }
        }

        &.with-shadow {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        > :first-child {
            .no-border
        }

        &.collapse, &.expand {
            .card-header:after {
                content: " ";
                display: block;
                height: 8px;
                width: 8px;
                border-width: 1px 1px 0 0;
                border-color: #C8C8CD;
                border-style: solid;
                position: absolute;
                top: 50%;
                right: 15px;
                transition: transform .3s linear;
                transform-origin: center center;
            }
        }

        &.collapse .card-header:after {
            transform: rotate(-45deg);
            margin-top: -3px;
        }

        &.expand .card-header:after {
            transform: rotate(135deg);
            margin-top: -8px;
        }

        .card-header {
            height: 45px;
            line-height: 45px;
            font-size: 16px;
            padding: 0 12px;
            position: relative;
        }

        .card-content {
            font-size: 15px;
            padding: 10px 12px;
        }

        .card-footer {
            color: #5f646e;
            height: 40px;
            line-height: 40px;
            font-size: 13px;
            padding: 0 12px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>