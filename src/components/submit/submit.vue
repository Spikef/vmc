<template>
    <span class="vmc-button" :class="[type, {disabled: disabled || disable}]" :style="style" @click="_onClick">
        <div class="block">
            <span class="icon-left">
                <slot name="icon-left"></slot>
            </span>
            <slot>{{text}}</slot>
            <spinner class="icon-right" color="white" size="20" v-show="status === STATUS.DOING"></spinner>
        </div>
    </span>
</template>

<script type="es6">
    import vButton from '../button';
    import Spinner from '../spinner';

    const STATUS = {
        NORMAL: 'normal',
        DOING: 'doing'
    };

    export default {
        components: {
            Spinner
        },
        extends: vButton,
        data() {
            return {
                STATUS,
                status: STATUS.NORMAL,
                disable: false
            }
        },
        methods: {
            _onClick() {
                this.$nextTick(() => {
                    if (!(this.disabled || this.disable) && this.status !== STATUS.DOING) {
                        this.disable = true;
                        this.status = STATUS.DOING;
                        this.$emit('submit', this);
                    }
                });
            },
            done() {
                this.disable = false;
                this.status = STATUS.NORMAL;
            }
        }
    }
</script>
