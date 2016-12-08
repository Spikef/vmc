<template>
    <div class="vmc-toast" transition="vmc-toast">
        <mask transparent></mask>
        <div class="block">
            <div class="icon" v-if="showIcon">
                <component :is="toast"></component>
            </div>
            <span><slot>{{content}}</slot></span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Mask from '../mask';
    import ToastLoading from './toast/loading.vue';

    const TOASTS = [
        'loading',
        'success',
        'error',
        'warn'
    ];

    const parseToast = function(index) {
        index = index || 0;

        if (/^\d+$/.test(index)) {
            if (TOASTS.length <= index) {
                console.warn(`'${index}' toast not found, use the default toast.`);
                index = 0;
            }
            return TOASTS[index];
        }

        if (TOASTS.indexOf(index) === -1) {
            console.warn(`'${index}' toast not found, use the default toast.`);
            index = TOASTS[0];
        }

        return index;
    };

    export default {
        components: {
            Mask,
            ToastLoading
        },
        props: {
            type: [Number, String],
            content: String
        },
        computed: {
            showIcon() {
                return this.type !== undefined;
            },
            toast() {
                return `toast-${parseToast(this.type)}`;
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .vmc-toast {
        .block {

        }
    }
</style>