<!--<template>-->
    <!--<div class="vmc-card" :class="status" :style="{height: height}">-->
        <!--<div class="card-header" v-child="header" @click="toggle"></div>-->
        <!--<div class="card-content vmc-1px-top" v-child="content"></div>-->
        <!--<div class="card-footer vmc-1px-top" v-child="footer"></div>-->
    <!--</div>-->
<!--</template>-->

<script type="text/jsx">
    export default {
        props: {
            // null, collapse, expand
            status: String
        },
        data() {
            return {
                state: this.status,
                height: 'auto',
                minHeight: 0,
                maxHeight: 0
            }
        },
        methods: {
            toggle() {
                switch (this.state) {
                    case 'collapse':
                        this.height = this.maxHeight;
                        this.state = 'expand';
                        break;
                    case 'expand':
                        this.height = this.minHeight;
                        this.state = 'collapse';
                        break;
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (this.state) {
                    var header = this.$el.querySelector('.card-header');
                    if (!header) {
                        return this.state = '';
                    }

                    this.minHeight = header.clientHeight + 'px';
                    this.maxHeight = this.$el.clientHeight + 'px';

                    this.state = this.state === 'collapse' ? 'expand' : 'collapse';
                    this.toggle();
                }
            });
        },
        render(h) {
            var children = {
                header: null,
                content: null,
                footer: null
            };
            var className = {
                header: 'card-header',
                content: 'card-content vmc-1px-top',
                footer: 'card-footer vmc-1px-top'
            };
            var slots = this.$slots.default;

            if (slots && slots.length) {
                slots.forEach(vNode => {
                    var name = vNode.data && vNode.data.attrs && vNode.data.attrs.name;
                    if (name && children[name] !== undefined) {
                        var data = vNode.data;
                        var staticClass = data.staticClass;

                        staticClass = staticClass ? ' ' + staticClass : '';
                        staticClass = className[name] + staticClass;

                        data = Object.assign({}, data, { staticClass });

                        if (name === 'header') {
                            data.on = {
                                click: this.toggle
                            }
                        }

                        children[name] = h(vNode.tag, data, vNode.children);
                    }
                });
            }

            return (
                    <div class={['vmc-card', this.state]} style={{height: this.height}}>
                        {children.header}
                        {children.content}
                        {children.footer}
                    </div>
            );
        }
    }
</script>
