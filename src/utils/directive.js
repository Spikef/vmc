export default function(Vue) {
    return {
        // valid: {
        //     bind: function(el, binding, vnode) {
        //         var vm = vnode.context;
        //         var key = this.arg || 'default';
        //         var name = binding.expression;
        //
        //         vm.__valids__ = vm.__valids__ || {};
        //         vm.__valids__[key] = vm.__valids__[key] || {};
        //         var valid = vm.__valids__[key];
        //
        //         if (name) {
        //             valid.checks = valid.checks || [];
        //             var checks = valid.checks;
        //             var index = checks.length;
        //             checks.push(vm[name]);
        //             vm.$watch(name, value => {
        //                 checks[index] = value;
        //                 var disabled = !!~checks.indexOf(false);
        //                 valid.button && valid.button.$set('disabled', disabled);
        //             });
        //         } else {
        //             valid.button = vm;
        //         }
        //     }
        // },
        stop: {
            bind: function(el, binding) {
                // mousedown， mousemove， 和 mouseup
                const defaultEvents = ['start', 'move', 'end'];

                var keys = Object.keys(binding.modifiers);
                if (!keys.length) keys = [].concat(defaultEvents);

                el.events = [];
                keys.forEach(key => {
                    var event = 'touch' + key;
                    el.events.push(event);
                    el.addEventListener(event, stopDefault);
                });
            },
            unbind: function(el) {
                el.events.forEach(event => {
                    el.removeEventListener(event, stopDefault);
                });
            }
        },
        touchEvents: {
            bind: function (el, binding, vnode) {
                var vm = vnode.context;
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

                    var fn = vm._onTouchStart;
                    if (fn && typeof fn === 'function') {
                        fn(pos, value, e);
                    }
                };

                this.touchMove = (e) => {
                    var fn = vm._onTouchMove;
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
                    var fn = vm._onTouchEnd;
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
