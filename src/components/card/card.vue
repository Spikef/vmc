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