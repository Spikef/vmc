<!--<template>-->
    <!--<div v-show="show" class="vmc-dialog-wrapper">-->
        <!--<overlay></overlay>-->
        <!--<div class="vmc-dialog">-->
            <!--<div class="dialog-head" v-child:header></div>-->
            <!--<div class="dialog-body vmc-1px-top" v-child:content></div>-->
            <!--<div class="dialog-foot vmc-1px-top" v-child:footer></div>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->

<script type="text/jsx">
    import Overlay from '../overlay';

    export default {
        props: {
            show: Boolean
        },
        render(h) {
            var children = {
                header: null,
                content: null,
                footer: null
            };
            var className = {
                header: 'dialog-head',
                content: 'dialog-body vmc-1px-top',
                footer: 'dialog-foot vmc-1px-top'
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
                        delete data.attrs.name;

                        children[name] = h(vNode.tag, data, vNode.children);
                    }
                });
            }

            return (
                    <div class="vmc-dialog-wrapper" v-show={this.show}>
                        <Overlay></Overlay>
                        <div class="vmc-dialog">
                            {children.header}
                            {children.content}
                            {children.footer}
                        </div>
                    </div>
            );
        }
    }
</script>
