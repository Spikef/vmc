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
        stop: {
            bind: function () {
                // mousedown， mousemove， 和 mouseup
                const defaultEvents = ['start', 'move', 'end'];

                var keys = Object.keys(this.modifiers);
                if (!keys.length) keys = [].concat(defaultEvents);

                this.events = [];
                keys.forEach(key => {
                    var event = 'touch' + key;
                    this.events.push(event);
                    this.el.addEventListener(event, stopDefault);
                });
            },
            unbind: function () {
                this.events.forEach(event => {
                    this.el.removeEventListener(event, stopDefault);
                });
            }
        },
        touchEvents: {
            bind: function () {
                this.events = ['touchStart', 'touchMove', 'touchEnd'];

                this.touchStart = (e) => {
                    if (this.modifiers.stop) {
                        stopPropagation(e);
                    }

                    if (this.modifiers.prevent) {
                        stopDefault(e);
                    }

                    // 不管是否有绑定start事件，开始位置必需要计算，否则后面拿不到该值
                    var value = this.value;
                    var pos = getTouchPos(e);
                    this.__startPosition__ = pos;

                    var fn = this.vm._onTouchStart;
                    if (fn && typeof fn === 'function') {
                        fn(pos, value, e);
                    }
                };

                this.touchMove = (e) => {
                    var fn = this.vm._onTouchMove;
                    if (fn && typeof fn === 'function') {
                        var value = this.value;
                        var pos = getTouchPos(e);
                        var start = this.__startPosition__;
                        var offset = {
                            x: pos.x - start.x,
                            y: pos.y - start.y
                        };

                        fn(offset, pos, value, e);
                    }
                };

                this.touchEnd = (e) => {
                    var fn = this.vm._onTouchEnd;
                    if (fn && typeof fn === 'function') {
                        var value = this.value;
                        var pos = getTouchPos(e);
                        var start = this.__startPosition__;
                        var offset = {
                            x: pos.x - start.x,
                            y: pos.y - start.y
                        };

                        fn(offset, pos, value, e);
                    }
                };
            },
            update: function (value) {
                this.value = value;
                this.events.forEach(event => {
                    this.el.removeEventListener(event.toLowerCase(), this[event]);
                    this.el.addEventListener(event.toLowerCase(), this[event], false);
                });
            },
            unbind: function () {
                this.events.forEach(event => {
                    this.el.removeEventListener(event.toLowerCase(), this[event]);
                });
            }
        }
    }
};

function stopDefault(e) {
    e.preventDefault();
}

function stopPropagation(e) {
    e.stopPropagation();
}

function getTouchPos(e) {
    var touches = e.changedTouches || e.touches;
    var touch = touches[0];

    return {
        x: touch.pageX,
        y: touch.pageY
    }
}