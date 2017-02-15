export default function(Vue) {
    return {
        // https://gist.github.com/joshglendenning/1efb58edb0598e37da348236b15c3022
        // https://github.com/vuejs/vue/blob/1.1/src/directives/element/slot.js
        slotItem: {
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
        },
        child: {
            bind: function() {
                var name = this.expression;
                var content = this.vm._childContents && this.vm._childContents[name];

                if (content && content.length) {
                    let el = this.el.cloneNode();
                    let scope = Object.create(this.vm.$parent);
                    Object.assign(scope, this.vm);

                    content.forEach(node => {
                        el.innerHTML += node.innerHTML;
                        Array.from(node.attributes).forEach(function(item) {
                            switch (item.name) {
                                case 'class':
                                    let oldClass = el.getAttribute('class');
                                    let newClass = item.value;
                                    if (oldClass) newClass = oldClass + ' ' + newClass;
                                    el.setAttribute(item.name, newClass);
                                    break;
                                case 'style':
                                    let oldStyle = el.getAttribute('style');
                                    let newStyle = item.value;
                                    if (oldStyle) newStyle = oldStyle + '; ' + newStyle;
                                    newStyle = newStyle.replace(/(;\s*);/, '$1');
                                    el.setAttribute(item.name, newStyle);
                                    break;
                                case 'name':
                                    break;
                                default:
                                    el.setAttribute(item.name, item.value);
                            }
                        });
                    });

                    this.vm._context.$compile(el, this.vm, scope, this._frag);
                    Vue.util.replace(this.el, el);
                } else {
                    Vue.util.remove(this.el);
                }
            }
        },
        valid: {
            bind: function() {
                var vm = this.el.__vue__;
                var key = this.arg || 'default';
                var name = this.expression;

                this.vm.__valids__ = this.vm.__valids__ || {};
                this.vm.__valids__[key] = this.vm.__valids__[key] || {};
                var valid = this.vm.__valids__[key];

                if (name) {
                    valid.checks = valid.checks || [];
                    var checks = valid.checks;
                    var index = checks.length;
                    checks.push(vm[name]);
                    vm.$watch(name, value => {
                        checks[index] = value;
                        var disabled = !!~checks.indexOf(false);
                        valid.button && valid.button.$set('disabled', disabled);
                    });
                } else {
                    valid.button = vm;
                }
            }
        },
        // 动态将属性传给子组件，支持once和sync
        props: {
            bind: function () {
                var modifiers = this.modifiers;     // once, sync

                var these = this.vm;
                var child = this.el.__vue__;
                var theseProps = these._props;
                var childProps = child._props;
                var theseKeys = theseProps ? Object.keys(theseProps) : [];
                var childKeys = childProps ? Object.keys(childProps) : [];

                function update(vm, key, value) {
                    let options = vm._props[key].options;

                    if (options.type) {
                        var allow = false;
                        var constructor = value.constructor;
                        var typeList = options.type;

                        if (!Array.isArray(typeList)) typeList = [typeList];

                        for (let item of typeList) {
                            if (item === constructor) {
                                allow = true;
                                break;
                            }
                        }

                        if (!allow) {
                            console.warn(`Invalid property type: ${key}.`);
                            return;
                        }
                    }

                    if (typeof options.coerce === 'function') {
                        value = options.coerce.call(child, value);
                    }

                    vm[key] = value;
                }

                theseKeys.forEach(key => {
                    if (~childKeys.indexOf(key)) {
                        update(child, key, these[key]);

                        if (!modifiers.once) {
                            these.$watch(key, value => {
                                update(child, key, value);
                            });
                        }

                        if (modifiers.sync) {
                            child.$watch(key, value => {
                                update(these, key, value);
                            });
                        }
                    }
                });
            }
        }
    }
};