<template>
    <span class="vmc-button" :class="[type, {disabled: disabled}]" :style="style" @click="_onClick">
        <div class="block">
            <slot name="icon-left"></slot>
            <slot>{{text}}</slot>
            <span slot="icon-right" v-show="status === STATUS.DOING">
                <spinner color="white" size="20"></spinner>
            </span>
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
                status: STATUS.NORMAL
            }
        },
        methods: {
            _onClick() {
                this.$nextTick(() => {
                    if (!this.disabled && this.status !== STATUS.DOING) {
                        this.disabled = true;
                        this.status = STATUS.DOING;
                        this.$emit('submit', this);
                    }
                });
            },
            done() {
                this.disabled = false;
                this.status = STATUS.NORMAL;
            }
        }
    }
</script>
