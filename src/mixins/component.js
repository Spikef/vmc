export default {
    beforeCompile() {
        var vm = this, content = this.$options._content;
        var contents = vm._childContents = Object.create(null);
        if (!content) return;
        var el, name;
        for (var i = 0, l = content.children.length; i < l; i++) {
            el = content.children[i];
            name = el.getAttribute('name');
            if (el.tagName === 'CHILD' && name) {
                (contents[name] || (contents[name] = [])).push(el);
            }
        }
    }
}