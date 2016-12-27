import Vue from 'vue';

// https://gist.github.com/joshglendenning/1efb58edb0598e37da348236b15c3022
// https://github.com/vuejs/vue/blob/1.1/src/directives/element/slot.js
export const slotItem = {
    element: true,
    params: ['name', 'scope'],
    bind: function() {
        var name = this.params.name || 'default';
        var content = this.vm._slotContents && this.vm._slotContents[name];

        if (content) {
            let node = content.cloneNode(true);
            let scope = Object.create(this.vm.$parent);
            Object.assign(scope, this.params.scope);
            this.vm._context.$compile(node, this.vm, scope, this._frag);
            Vue.util.replace(this.el, node);
        } else if (this.el.hasChildNodes()) {
            let node = Vue.util.extractContent(this.el, true);
            let scope = Object.create(this.vm);
            Object.assign(scope, this.params.scope);
            this.vm.$compile(node, this.vm, scope, this._frag);
            Vue.util.replace(this.el, node);
        } else {
            Vue.util.remove(this.el);
        }
    }
};