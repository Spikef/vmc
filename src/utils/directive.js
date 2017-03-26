export default function(Vue) {
    return {
        sync: {
            bind: function (el, binding, vnode) {
                if (!binding.expression) return;

                var event = `on-sync-${binding.arg}`;
                var keys = binding.expression.split();
                var vm = el.__vue__;
                var context = vnode.context;

                vm.$on(event, function (...args) {
                    keys.forEach(function (key, index) {
                        key = key.trim();
                        context[key] = args[index];
                    });
                });
            }
        },
        stop: {
            bind: function(el, binding) {
                // mousedown， mousemove， 和 mouseup
                const defaultEvents = ['start', 'move', 'end'];

                var keys = Object.keys(binding.modifiers);
                if (!keys.length) keys = [].concat(defaultEvents);

                el.__events__ = [];
                keys.forEach(key => {
                    var event = 'touch' + key;
                    el.__events__.push(event);
                    el.addEventListener(event, stopDefault);
                });
            },
            unbind: function(el) {
                el.__events__.forEach(event => {
                    el.removeEventListener(event, stopDefault);
                });
            }
        },
        touchEvents: {
            bind: function(el, binding, vnode) {
                var vm = vnode.context;
                el.__value__ = binding.value;
                el.__events__ = ['touchStart', 'touchMove', 'touchEnd'];

                el.__touchStart__ = (e) => {
                    if (binding.modifiers.stop) {
                        stopPropagation(e);
                    }

                    if (binding.modifiers.prevent) {
                        stopDefault(e);
                    }

                    // 不管是否有绑定start事件，开始位置必需要计算，否则后面拿不到该值
                    var value = el.__value__;
                    var pos = getTouchPos(e);
                    el.__startPosition__ = pos;

                    var fn = vm._onTouchStart;
                    if (fn && typeof fn === 'function') {
                        fn(pos, value, e);
                    }
                };

                el.__touchMove__ = (e) => {
                    var fn = vm._onTouchMove;
                    if (fn && typeof fn === 'function') {
                        var value = el.__value__;
                        var pos = getTouchPos(e);
                        var start = el.__startPosition__;
                        var offset = {
                            x: pos.x - start.x,
                            y: pos.y - start.y
                        };

                        fn(offset, pos, value, e);
                    }
                };

                el.__touchEnd__ = (e) => {
                    var fn = vm._onTouchEnd;
                    if (fn && typeof fn === 'function') {
                        var value = el.__value__;
                        var pos = getTouchPos(e);
                        var start = el.__startPosition__;
                        var offset = {
                            x: pos.x - start.x,
                            y: pos.y - start.y
                        };

                        fn(offset, pos, value, e);
                    }
                };
            },
            update: function (el, binding) {
                el.__value__ = binding.value;
                el.__events__.forEach(event => {
                    el.removeEventListener(event.toLowerCase(), el[`__${event}__`]);
                    el.addEventListener(event.toLowerCase(), el[`__${event}__`], false);
                });
            },
            unbind: function (el) {
                el.__events__.forEach(event => {
                    el.removeEventListener(event.toLowerCase(), el[`__${event}__`]);
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
