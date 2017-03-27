webpackJsonp([0,2],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_alert__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_alert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_alert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_confirm__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialogbox__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialogbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_dialogbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_prompt__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_prompt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_prompt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_checkbox__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_radio__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_radio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_radio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_textarea__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_textarea___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_textarea__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_number__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_toggle__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_toggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_toggle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_button__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_submit__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_submit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_submit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_upload__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_rater__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_rater___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_rater__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tabbar__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tabbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_tabbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_spinner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dropload__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dropload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_dropload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_grid__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_justify__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_justify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_justify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tabcontrol__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tabcontrol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_tabcontrol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cell__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_cell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_card__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_row__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_progressbar__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__components_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_popup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__components_popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_marquee__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_marquee___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__components_marquee__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_actionsheet__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_actionsheet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__components_actionsheet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_slider__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__components_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_box__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29__components_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_picker__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30__components_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_popup_picker__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_popup_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31__components_popup_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_popup_date_picker__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_popup_date_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32__components_popup_date_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_overlay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33__components_overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__utils__ = __webpack_require__(4);
/* unused harmony reexport Alert */
/* unused harmony reexport Confirm */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__components_dialogbox___default.a; });
/* unused harmony reexport Prompt */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__components_checkbox___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__components_input__, "mInput")) __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_6__components_input__["mInput"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__components_input__, "vInput")) __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_6__components_input__["vInput"]; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_7__components_textarea___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__components_number___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_5__components_radio___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_9__components_toggle___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_10__components_button___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_11__components_submit___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_12__components_upload___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_13__components_rater___default.a; });
/* unused harmony reexport Topbar */
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__components_navbar__, "Navbar")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__components_navbar__["Navbar"]; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_15__components_tabbar___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_16__components_spinner___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_17__components_dropload___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_18__components_grid___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_19__components_justify___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_20__components_tabcontrol___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_21__components_cell___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_22__components_card___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_23__components_row___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_24__components_progressbar___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_25__components_popup___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_26__components_marquee___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_27__components_actionsheet___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_28__components_slider___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_29__components_box___default.a; });
/* unused harmony reexport Overlay */
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_30__components_picker___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_31__components_popup_picker___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_32__components_popup_date_picker___default.a; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_34__utils__; });










































/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "script", function() { return script; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCSSSize", function() { return isCSSSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCSSSize", function() { return getCSSSize; });

__webpack_require__(195);

var url = __webpack_require__(197);
var env = __webpack_require__(193).default;
var device = __webpack_require__(191);
var script = __webpack_require__(196);

var getType = function getType(obj) {
    if (obj === null || obj === undefined) return String(obj);

    var type = typeof obj === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(obj);
    if (type !== 'object') return type;

    type = Object.prototype.toString.call(obj);
    type = type.substring(8, type.length - 1);
    return type.toLowerCase();
};

var isType = function isType(obj, type) {
    return getType(obj) === type;
};

var isNumeric = function isNumeric(n) {
    return !Array.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
};

var isCSSSize = function isCSSSize(value) {
    return (/[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(value)
    );
};

var getCSSSize = function getCSSSize(value) {
    if (isCSSSize(value)) {
        return value;
    } else if (isNumeric(value)) {
        return value + 'px';
    } else {
        return value;
    }
};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    props: {
        size: {
            type: [Number, String],
            coerce: Number
        },
        color: {
            type: String
        }
    },
    computed: {
        spinnerStyle: function spinnerStyle() {
            if (this.size) {
                return {
                    height: this.size + 'px',
                    width: this.size + 'px'
                };
            }
        }
    }
};

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(320);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(318);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(324);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    mInput: __webpack_require__(328),
    vInput: __webpack_require__(329)
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(338);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(341);

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(360),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: __webpack_require__(316),
        meta: {
            doc_title: '首页',
            depth: 10
        }
    },
    {
        name: 'about',
        path: '/about',
        component: __webpack_require__(279),
        meta: {
            doc_title: '关于',
            depth: 10
        }
    },
    {
        name: 'message',
        path: '/components/message',
        component: __webpack_require__(293),
        meta: {
            doc_title: '消息框',
            depth: 20
        }
    },
    {
        name: 'toast',
        path: '/components/toast',
        component: __webpack_require__(311),
        meta: {
            doc_title: '消息提示',
            depth: 20
        }
    },
    {
        name: 'radio',
        path: '/components/radio',
        component: __webpack_require__(300),
        meta: {
            doc_title: '单选框',
            depth: 20
        }
    },
    {
        name: 'checkbox',
        path: '/components/checkbox',
        component: __webpack_require__(285),
        meta: {
            doc_title: '复选框',
            depth: 20
        }
    },
    {
        name: 'spinner',
        path: '/components/spinner',
        component: __webpack_require__(305),
        meta: {
            doc_title: '动态指示器',
            depth: 20
        }
    },
    {
        name: 'button',
        path: '/components/button',
        component: __webpack_require__(283),
        meta: {
            doc_title: '按钮',
            depth: 20
        }
    },
    {
        name: 'submit',
        path: '/components/submit',
        component: __webpack_require__(306),
        meta: {
            doc_title: '提交按钮',
            depth: 20
        }
    },
    {
        name: 'tabbar',
        path: '/components/tabbar',
        component: __webpack_require__(308),
        meta: {
            doc_title: 'tabbar',
            depth: 20
        }
    },
    {
        name: 'grid',
        path: '/components/grid',
        component: __webpack_require__(289),
        meta: {
            doc_title: '网格',
            depth: 20
        }
    },
    {
        name: 'justify',
        path: '/components/justify',
        component: __webpack_require__(291),
        meta: {
            doc_title: 'justify',
            depth: 20
        }
    },
    {
        name: 'dropload',
        path: '/components/dropload',
        component: __webpack_require__(288),
        meta: {
            doc_title: 'dropload',
            depth: 20
        }
    },
    {
        name: 'tabcontrol',
        path: '/components/tabcontrol',
        component: __webpack_require__(309),
        meta: {
            doc_title: 'tabcontrol',
            depth: 20
        }
    },
    {
        name: 'icons',
        path: '/components/icons',
        component: __webpack_require__(290),
        meta: {
            doc_title: '图标',
            depth: 20
        }
    },
    {
        name: 'card',
        path: '/components/card',
        component: __webpack_require__(284),
        meta: {
            doc_title: '卡片',
            depth: 20
        }
    },
    {
        name: 'rater',
        path: '/components/rater',
        component: __webpack_require__(301),
        meta: {
            doc_title: '评分',
            depth: 20
        }
    },
    {
        name: 'reddot',
        path: '/components/reddot',
        component: __webpack_require__(302),
        meta: {
            doc_title: 'reddot',
            depth: 20
        }
    },
    {
        name: 'switch',
        path: '/components/switch',
        component: __webpack_require__(307),
        meta: {
            doc_title: '开关',
            depth: 20
        }
    },
    {
        name: 'minput',
        path: '/components/minput',
        component: __webpack_require__(294),
        meta: {
            doc_title: 'minput',
            depth: 20
        }
    },
    {
        name: 'vinput',
        path: '/components/vinput',
        component: __webpack_require__(313),
        meta: {
            doc_title: 'vinput',
            depth: 20
        }
    },
    {
        name: 'number',
        path: '/components/number',
        component: __webpack_require__(296),
        meta: {
            doc_title: 'number',
            depth: 20
        }
    },
    {
        name: 'textarea',
        path: '/components/textarea',
        component: __webpack_require__(310),
        meta: {
            doc_title: 'textarea',
            depth: 20
        }
    },
    {
        name: 'nowrap',
        path: '/components/nowrap',
        doc_title: 'nowrap',
        component: __webpack_require__(295),
        depth: 20
    },
    {
        name: 'progressbar',
        path: '/components/progressbar',
        component: __webpack_require__(299),
        meta: {
            doc_title: '进度条',
            depth: 20
        }
    },
    {
        name: 'shake',
        path: '/components/shake',
        component: __webpack_require__(303),
        meta: {
            doc_title: '摇一摇',
            depth: 20
        }
    },
    {
        name: 'dialog',
        path: '/components/dialog',
        component: __webpack_require__(287),
        meta: {
            doc_title: 'dialog',
            depth: 20
        }
    },
    {
        name: 'popup',
        path: '/components/popup',
        component: __webpack_require__(298),
        meta: {
            doc_title: 'popup',
            depth: 20
        }
    },
    {
        name: 'badge',
        path: '/components/badge',
        component: __webpack_require__(281),
        meta: {
            doc_title: 'badge',
            depth: 20
        }
    },
    {
        name: 'marquee',
        path: '/components/marquee',
        component: __webpack_require__(292),
        meta: {
            doc_title: 'marquee',
            depth: 20
        }
    },
    {
        name: 'actionsheet',
        path: '/components/actionsheet',
        component: __webpack_require__(280),
        meta: {
            doc_title: 'actionsheet',
            depth: 20
        }
    },
    {
        name: 'slider',
        path: '/components/slider',
        component: __webpack_require__(304),
        meta: {
            doc_title: '轮播图',
            depth: 20
        }
    },
    {
        name: 'box',
        path: '/components/box',
        component: __webpack_require__(282),
        meta: {
            doc_title: 'box',
            depth: 20
        }
    },
    {
        name: 'picker',
        path: '/components/picker',
        component: __webpack_require__(297),
        meta: {
            doc_title: 'picker',
            depth: 20
        }
    },
    {
        name: 'datepicker',
        path: '/components/datepicker',
        component: __webpack_require__(286),
        meta: {
            doc_title: 'datepicker',
            depth: 20
        }
    },
    {
        name: 'upload',
        path: '/components/upload',
        component: __webpack_require__(312),
        meta: {
            doc_title: 'upload',
            depth: 20
        }
    }
];


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(171);

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(393),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    name: 'root',
    components: {
        Tabbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["a" /* Tabbar */]
    },
    data: function data() {
        var _this = this;

        return {
            direction: 'forward',
            showTab: true,
            index: 0,
            items: [{
                icon: '<i style="transform: scale(0.94);" class="icono-home"></i>',
                text: '首页',
                callback: function callback() {
                    _this.index = 0;
                    _this.$router.replace('/index');
                }
            }, {
                icon: '<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>',
                text: '关于',
                callback: function callback() {
                    _this.index = 1;
                    _this.$router.replace('/about');
                }
            }]
        };
    },
    mounted: function mounted() {
        this.updateTab(this.$route.name);
    },

    methods: {
        updateTab: function updateTab(route) {
            this.index = route === 'about' ? 1 : 0;
            this.showTab = !!~['index', 'about'].indexOf(route);
        }
    },
    watch: {
        '$route': function $route(to, from) {
            var fd = from.meta.depth || 0;
            var td = to.meta.depth || 0;

            this.updateTab(to.name);

            if (!from.path || fd === td) {
                this.direction = 'null';
            } else if (fd < td) {
                this.direction = 'forward';
            } else if (fd > td) {
                this.direction = 'back';
            }
        }
    }
};

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    name: 'about',
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */]
    }
};

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        ActionSheet: __WEBPACK_IMPORTED_MODULE_0_vmc__["m" /* ActionSheet */]
    },
    data: function data() {
        var _this = this;

        return {
            showAction1: false,
            showAction2: false,
            buttons: [{
                text: '拍照',
                callback: function callback() {
                    _this.$Toast('拍照');
                }
            }, {
                text: '从相册中选择',
                callback: function callback() {
                    _this.$Toast('从相册中选择');
                }
            }]
        };
    }
};

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */]
    }
};

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Box: __WEBPACK_IMPORTED_MODULE_0_vmc__["k" /* Box */]
    }
};

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        Spinner: __WEBPACK_IMPORTED_MODULE_0_vmc__["D" /* Spinner */]
    },
    data: function data() {
        return {
            customColors: {
                font: '#ffffff',
                background: '#605ca8'
            }
        };
    }
};

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            title: '卡片'
        };
    }
};

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Checkbox: __WEBPACK_IMPORTED_MODULE_0_vmc__["E" /* Checkbox */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            listA: ['选项A', '选项B', '选项C'],
            listB: ['选项1', '选项2', '选项3', '选项4'],
            listC: ['A', 'B'],
            list1: [],
            list2: [],
            list3: ['选项B'],
            list4: [],
            list5: [],
            list6: [],
            list7: ['A'],
            list8: [],
            list9: [],
            list10: [],
            checked1: false,
            checked2: true,
            checked3: 0
        };
    }
};

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extends_popup_address_picker_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extends_popup_address_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__extends_popup_address_picker_vue__);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        PopupPicker: __WEBPACK_IMPORTED_MODULE_0_vmc__["g" /* PopupPicker */],
        PopupDatePicker: __WEBPACK_IMPORTED_MODULE_0_vmc__["h" /* PopupDatePicker */],
        PopupAddressPicker: __WEBPACK_IMPORTED_MODULE_1__extends_popup_address_picker_vue___default.a,
        Row: __WEBPACK_IMPORTED_MODULE_0_vmc__["c" /* Row */]
    },
    data: function data() {
        return {
            showPop1: false,
            showPop2: false,
            showPop3: false,
            showPop4: false,
            value1: '2016-12-31',
            value2: '',
            value3: '',
            value4: '天津市 天津市郊县',
            listEdu: ['', '大专', '中专', '本科', '硕士研究生', '博士研究生']
        };
    }
};

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        DialogBox: __WEBPACK_IMPORTED_MODULE_0_vmc__["p" /* DialogBox */]
    },
    data: function data() {
        return {
            showDialog1: false,
            showDialog2: false
        };
    },

    methods: {
        click: function click() {
            alert(100);
        }
    }
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        DropLoad: __WEBPACK_IMPORTED_MODULE_0_vmc__["B" /* DropLoad */]
    },
    data: function data() {
        return {
            count: 0,
            hasMore: true,
            classList: ['single', 'double']
        };
    },

    methods: {
        refresh: function refresh() {
            var _this = this;

            setTimeout(function () {
                _this.count = 5;
                _this.$refs.dropload.done();
                _this.hasMore = _this.count < 30;
            }, 2000);
        },
        loadMore: function loadMore() {
            var _this2 = this;

            setTimeout(function () {
                _this2.count += 5;
                _this2.$refs.dropload.done();
                _this2.hasMore = _this2.count < 30;
            }, 1000);
        }
    }
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        Grid: __WEBPACK_IMPORTED_MODULE_0_vmc__["z" /* Grid */]
    },
    data: function data() {
        return {
            customColors: {
                font: '#ffffff',
                background: '#605ca8'
            },
            buttonList: [{
                type: 'primary'
            }, {
                type: 'success'
            }, {
                type: 'info'
            }, {
                type: 'danger'
            }, {
                type: 'warning'
            }]
        };
    }
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        Grid: __WEBPACK_IMPORTED_MODULE_0_vmc__["z" /* Grid */]
    },
    data: function data() {
        return {
            value: '请选择任意ICON查看代码',
            INDEX: -1,
            icons: ["home", "mail", "rss", "hamburger", "plus", "cross", "check", "power", "heart", "infinity", "flag", "file", "image", "video", "music", "headphone", "document", "folder", "pin", "smile", "eye", "sliders", "share", "sync", "reset", "gear", "signIn", "signOut", "support", "dropper", "tiles", "list", "chain", "youtube", "rename", "search", "book", "forbidden", "trash", "keyboard", "mouse", "user", "crop", "display", "imac", "iphone", "macbook", "imacBold", "iphoneBold", "macbookBold", "nexus", "microphone", "asterisk", "terminal", "paperClip", "market", "clock", "textAlignRight", "textAlignCenter", "textAlignLeft", "indent", "outdent", "frown", "meh", "locationArrow", "plusCircle", "checkCircle", "crossCircle", "exclamation", "exclamationCircle", "comment", "commentEmpty", "areaChart", "pieChart", "barChart", "bookmark", "bookmarkEmpty", "filter", "volume", "volumeLow", "volumeMedium", "volumeHigh", "volumeDecrease", "volumeIncrease", "volumeMute", "tag", "calendar", "camera", "piano", "ruler", "cup", "creditCard", "facebook", "twitter", "gplus", "linkedIn", "instagram", "flickr", "delicious", "codepen", "blogger", "play", "pause", "stop", "rewind", "forward", "next", "previous", "caretRight", "caretLeft", "caretUp", "caretDown", "rightArrow", "leftArrow", "upArrow", "downArrow", "sun", "moon", "disqus", "cart", "caretRightCircle", "caretLeftCircle", "caretUpCircle", "caretDownCircle", "caretRightSquare", "caretLeftSquare", "caretUpSquare", "caretDownSquare", "dribbble", "sitemap", "spinner", "circle", "ellipsis"]
        };
    },

    methods: {
        onItemClick: function onItemClick(index, name) {
            if (this.INDEX === index) {
                this.INDEX = -1;
                this.value = '请选择任意ICON查看代码';
            } else {
                this.INDEX = index;
                this.value = '<i class="icono-' + name + '"></i>';
            }
        },
        onTextClick: function onTextClick() {
            window.clipboardData.setData('text', this.value);
        }
    }
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Justify: __WEBPACK_IMPORTED_MODULE_0_vmc__["C" /* Justify */]
    }
};

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Marquee: __WEBPACK_IMPORTED_MODULE_0_vmc__["n" /* Marquee */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */]
    },
    data: function data() {
        return {
            list: [{
                text: '管窥一豹看新日M 黑科技成果或创造全新出行方式?',
                link: 'http://www.iautos.cn/news/94458.html'
            }, {
                text: '实施创新驱动发展战略 为建设世界科技强国而努力奋斗',
                link: 'http://www.stcsm.gov.cn/xwpt/kjdt/348721.htm'
            }, {
                text: '科技为音乐教育插上翅膀(深观察)',
                link: 'http://paper.people.com.cn/rmrb/html/2017-01/19/nw.D110000renmrb_20170119_5-17.htm'
            }]
        };
    }
};

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */]
    },
    methods: {
        showAlert: function showAlert() {
            this.$Alert('alert提示框');
        },
        showAlert2: function showAlert2() {
            this.$Alert('alert提示框', {
                content: '带正文提示消息: 该配置可以在提示框中显示更多详细内容'
            });
        },
        showConfirm: function showConfirm() {
            var _this = this;

            this.$Confirm('confirm提示框', function () {
                _this.$Alert('你点击了确定按钮');
            }, function () {
                _this.$Alert('你点击了取消按钮');
            });
        },
        showPrompt: function showPrompt() {
            var _this2 = this;

            this.$Prompt('prompt提示框', function (v) {
                _this2.$Alert('\u4F60\u8F93\u5165\u4E86 ' + v);
            }, function () {
                _this2.$Alert('你点击了取消按钮');
            }, {
                content: '请输入数字',
                placeholder: '请输入不大于10的正整数',
                btn1: '按钮1',
                btn2: '按钮2',
                validator: /^[1-9]$/
            });
        },
        showPrompt2: function showPrompt2() {
            var _this3 = this;

            this.$Prompt('prompt提示框', function (v) {
                _this3.$Alert('\u4F60\u8F93\u5165\u4E86 ' + v);
            }, function () {
                _this3.$Alert('你点击了取消按钮');
            }, {
                content: '请输入数字',
                placeholder: '请输入不大于10的正整数',
                message: '',
                validator: function validator(v) {
                    if (/^[1-9]$/.test(v)) {
                        return true;
                    } else {
                        return '[' + v + ']\u4E0D\u6EE1\u8DB3\u8F93\u5165\u6761\u4EF6';
                    }
                }
            });
        }
    }
};

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        mInput: __WEBPACK_IMPORTED_MODULE_0_vmc__["w" /* mInput */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            value1: '',
            value2: '',
            value3: ''
        };
    }
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            text: '盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土地里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻俏俏的，草软绵绵的。'
        };
    }
};

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Number: __WEBPACK_IMPORTED_MODULE_0_vmc__["s" /* Number */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            value1: 1,
            value2: 1,
            value3: 0.1
        };
    }
};

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        PopupPicker: __WEBPACK_IMPORTED_MODULE_0_vmc__["g" /* PopupPicker */],
        Row: __WEBPACK_IMPORTED_MODULE_0_vmc__["c" /* Row */]
    },
    data: function data() {
        return {
            showPop1: false,
            showPop2: false,
            showPop3: false,
            showPop4: false,
            showPop5: false,
            showPop6: false,
            showPop7: false,
            value1: '步步高',
            value2: '',
            list1: ['苹果', '小米', '魅族', '华为', '三星', '步步高', '诺基亚'],
            list2: [],
            list: [['苹果', '魅族'], [{
                value: 'iPhone4',
                parentId: 0
            }, {
                value: 'iPhone5',
                parentId: 0
            }, {
                value: 'iPhone6',
                parentId: 0
            }, {
                value: 'iPhone6S',
                parentId: 0
            }, {
                value: 'iPhone7',
                parentId: 0
            }, {
                value: 'iPhone7S',
                parentId: 0
            }, {
                value: 'MX2',
                parentId: 1
            }, {
                value: 'MX4',
                parentId: 1
            }, {
                value: 'MX5',
                parentId: 1
            }]]
        };
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.list2 = _this.list;
            _this.value2 = '魅族 MX4';
        }, 1000);
    }
};

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */],
        Popup: __WEBPACK_IMPORTED_MODULE_0_vmc__["o" /* Popup */]
    },
    data: function data() {
        return {
            showPop1: false,
            showPop2: false,
            showPop3: false,
            showPop4: false,
            showPop5: false,
            showPop6: false,
            showPop7: false
        };
    },

    methods: {
        back: function back() {
            window.history.back();
        }
    }
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Row: __WEBPACK_IMPORTED_MODULE_0_vmc__["c" /* Row */],
        Progressbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["q" /* Progressbar */]
    }
};

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */],
        Radio: __WEBPACK_IMPORTED_MODULE_0_vmc__["F" /* Radio */],
        Checkbox: __WEBPACK_IMPORTED_MODULE_0_vmc__["E" /* Checkbox */]
    },
    data: function data() {
        return {
            listA: ['选项A', '选项B', '选项C'],
            listB: ['选项1', '选项2', '选项3', '选项4'],
            list1: [],
            list2: [],
            value1: '选项A',
            value2: '选项D',
            value3: 'A'
        };
    }
};

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Rater: __WEBPACK_IMPORTED_MODULE_0_vmc__["y" /* Rater */],
        Row: __WEBPACK_IMPORTED_MODULE_0_vmc__["c" /* Row */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */]
    },
    data: function data() {
        return {
            point1: 4,
            point2: 3.5
        };
    },

    methods: {
        updatePoint: function updatePoint() {
            var point1 = Math.ceil(Math.random() * 5);
            var point2 = parseFloat((Math.random() * 5).toFixed(1));
            this.point1 = point1;
            this.point2 = point2;
        }
    }
};

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */]
    }
};

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */]
    },
    methods: {
        beginListenShake: function beginListenShake() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_vmc__["j" /* Utils */].device.shake(function () {
                _this.$Toast('你晃动了屏幕哟');
            });
        },
        stopListenShake: function stopListenShake() {
            __WEBPACK_IMPORTED_MODULE_0_vmc__["j" /* Utils */].device.shake.remove();
        }
    }
};

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Slider: __WEBPACK_IMPORTED_MODULE_0_vmc__["l" /* Slider */]
    },
    data: function data() {
        return {
            list: [],
            dataList: [{
                image: 'static/image/slider/1.jpg',
                title: '标题标题一',
                link: 'http://m.baidu.com/s?word=1'
            }, {
                image: 'static/image/slider/2.jpg',
                title: '标题标题二',
                link: 'http://m.baidu.com/s?word=2'
            }, {
                image: 'static/image/slider/3.jpg',
                title: '标题标题三',
                link: 'http://m.baidu.com/s?word=3'
            }, {
                image: 'static/image/slider/4.jpg',
                title: '标题标题四',
                link: 'http://m.baidu.com/s?word=4'
            }, {
                image: 'static/image/slider/5.jpg',
                title: '标题标题五',
                link: 'http://m.baidu.com/s?word=5'
            }, {
                image: 'static/image/slider/6.jpg',
                title: '标题标题六标题标题六标题标题六',
                link: 'http://m.baidu.com/s?word=6'
            }, {
                image: 'static/image/slider/7.jpg',
                title: '标题标题七标题标题七',
                link: 'http://m.baidu.com/s?word=7'
            }],
            imageList: [{
                image: 'static/image/slider/11.jpg'
            }, {
                image: 'static/image/slider/12.jpg'
            }, {
                image: 'static/image/slider/13.jpg'
            }, {
                image: 'static/image/slider/14.jpg'
            }, {
                image: 'static/image/slider/15.jpg'
            }, {
                image: 'static/image/slider/16.jpg'
            }, {
                image: 'static/image/slider/17.jpg'
            }, {
                image: 'static/image/slider/18.jpg'
            }, {
                image: 'static/image/slider/19.jpg'
            }, {
                image: 'static/image/slider/20.jpg'
            }, {
                image: 'static/image/slider/21.jpg'
            }, {
                image: 'static/image/slider/22.jpg'
            }, {
                image: 'static/image/slider/23.jpg'
            }, {
                image: 'static/image/slider/24.jpg'
            }, {
                image: 'static/image/slider/25.jpg'
            }]
        };
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.list = _this.dataList;
        }, 1000);
    }
};

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Spinner: __WEBPACK_IMPORTED_MODULE_0_vmc__["D" /* Spinner */]
    }
};

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Submit: __WEBPACK_IMPORTED_MODULE_0_vmc__["v" /* Submit */]
    },
    methods: {
        onSubmit: function onSubmit() {
            var _this = this;

            this.$Toast('正在提交数据...');
            setTimeout(function () {
                _this.$refs.submit.done();
            }, 5000);
        }
    }
};

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Toggle: __WEBPACK_IMPORTED_MODULE_0_vmc__["x" /* Toggle */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */]
    },
    data: function data() {
        return {
            checked1: true,
            checked2: [],
            checked3: false
        };
    }
};

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    name: 'root',
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Tabbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["a" /* Tabbar */]
    },
    data: function data() {
        var _this = this;

        return {
            items: [{
                icon: '<i style="transform: scale(0.94);" class="icono-home"></i>',
                text: '首页',
                callback: function callback() {
                    return _this.$router.replace('/index');
                }
            }, {
                icon: '<i style="transform: scale(0.94);" class="icono-exclamationCircle"></i>',
                text: '关于',
                callback: function callback() {
                    return _this.$router.replace('/about');
                }
            }]
        };
    }
};

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        TabControl: __WEBPACK_IMPORTED_MODULE_0_vmc__["A" /* TabControl */]
    },
    data: function data() {
        return {
            tabList: [{
                title: 'Tab1',
                name: 'tab1'
            }, {
                title: 'Tab2',
                name: 'tab2'
            }, {
                title: 'Tab3',
                name: 'tab3'
            }]
        };
    },
    mounted: function mounted() {
        var _this = this;

        setTimeout(function () {
            _this.tabList.push({
                title: 'Tab4',
                name: 'tab4'
            });
        }, 2000);
    }
};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */],
        vTextarea: __WEBPACK_IMPORTED_MODULE_0_vmc__["r" /* vTextarea */]
    }
};

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vButton: __WEBPACK_IMPORTED_MODULE_0_vmc__["f" /* vButton */]
    },
    methods: {
        loading: function loading() {
            var _this = this;

            this.$Loading();

            setTimeout(function () {
                _this.$Loading.done();
            }, 3000);
        }
    }
};

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Row: __WEBPACK_IMPORTED_MODULE_0_vmc__["c" /* Row */],
        Card: __WEBPACK_IMPORTED_MODULE_0_vmc__["d" /* Card */],
        Upload: __WEBPACK_IMPORTED_MODULE_0_vmc__["e" /* Upload */]
    },
    data: function data() {
        return {
            data: {
                id: 1
            },
            images1: [],
            images2: []
        };
    },

    methods: {
        onSuccess: function onSuccess(res) {
            if (typeof res.url === 'string') {
                this.images1.push(res.url);
            } else {
                this.images2 = this.images2.concat(res.url);
            }
        }
    }
};

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        vInput: __WEBPACK_IMPORTED_MODULE_0_vmc__["t" /* vInput */],
        Cell: __WEBPACK_IMPORTED_MODULE_0_vmc__["u" /* Cell */],
        Submit: __WEBPACK_IMPORTED_MODULE_0_vmc__["v" /* Submit */]
    },
    data: function data() {
        var _this = this;

        return {
            form: {
                name: '',
                password1: '',
                password2: ''
            },
            validName: /^.{6,12}$/,
            validPass: {
                expression: /^.{6,16}$/,
                message: '密码长度必须为6-16位'
            },
            validPass2: [{
                expression: /^.{6,16}$/,
                message: '密码长度必须为6-16位'
            }, function (value) {
                if (value !== _this.form.password1) {
                    return '两次密码输入不一致';
                } else {
                    return true;
                }
            }]
        };
    },

    methods: {
        submit: function submit(_submit) {
            var _this2 = this;

            setTimeout(function () {
                _this2.$Toast('提交成功!');
                _submit.done();
            }, 2000);
        }
    }
};

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vmc__ = __webpack_require__(1);






/* harmony default export */ __webpack_exports__["default"] = {
    extends: __WEBPACK_IMPORTED_MODULE_3_vmc__["i" /* Picker */],
    props: {
        valueType: {
            type: String,
            default: 'name'
        },
        province: {
            type: [Boolean, Array],
            default: true
        },
        city: {
            type: [Boolean, Array],
            default: true
        },
        area: {
            type: [Boolean, Array],
            default: true
        }
    },
    computed: {
        dataList: function dataList() {
            var data = this.chinaArea;

            if (!data.length) return [];

            var province = [],
                city = [],
                area = [];

            data.forEach(function (p) {
                var pl = province.length;

                province.push({
                    id: pl,
                    name: p.name,
                    value: p.value
                });

                p.child && p.child.forEach(function (c) {
                    var cl = city.length;

                    city.push({
                        id: cl,
                        name: c.name,
                        value: c.value,
                        parentId: pl
                    });

                    if (c.child) {
                        c.child.forEach(function (a) {
                            var al = area.length;

                            area.push({
                                id: al,
                                name: a.name,
                                value: a.value,
                                parentId: cl
                            });
                        });
                    } else {
                        area.push({
                            id: area.length,
                            name: c.name,
                            value: c.value,
                            parentId: cl
                        });
                    }
                });
            });

            return [province, city, area];
        },
        valueList: function valueList() {
            var array = [];
            if (typeof this.value === 'string') array = this.value.split(this.valueSeparator);
            if (array.length === 2 && /市$/.test(array[0])) {
                array.push(array[1]);
            } else if (array.length === 1) {
                array.push(array[0]);
            }
            if (this.valueType === 'value') array = array.map(function (v) {
                return parseInt(v);
            });

            return array;
        }
    },
    methods: {
        _getSelectedValue: function _getSelectedValue() {
            var _this = this;

            var array = [];
            __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.result).forEach(function (i) {
                return array.push(_this.result[i][_this.valueType]);
            });
            array = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_array_from___default()(new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a(array));
            return array.join(String(this.valueSeparator));
        }
    },
    data: function data() {
        return {
            chinaArea: []
        };
    },
    mounted: function mounted() {
        var _this2 = this;

        __WEBPACK_IMPORTED_MODULE_3_vmc__["j" /* Utils */].script.loadJs('static/js/china-area.js', function () {
            _this2.chinaArea = window.china_area;
            _this2.$nextTick(function () {
                _this2._initState();
            });
        });
    }
};

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["default"] = {
    extends: __WEBPACK_IMPORTED_MODULE_0_vmc__["g" /* PopupPicker */],
    components: {
        Picker: __webpack_require__(314)
    },
    props: {
        valueType: {
            type: String,
            default: 'name'
        },
        province: {
            type: [Boolean, Array],
            default: true
        },
        city: {
            type: [Boolean, Array],
            default: true
        },
        area: {
            type: [Boolean, Array],
            default: true
        }
    }
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vmc__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = {
    name: 'index',
    components: {
        Navbar: __WEBPACK_IMPORTED_MODULE_0_vmc__["b" /* Navbar */],
        Cell: __WEBPACK_IMPORTED_MODULE_0_vmc__["u" /* Cell */]
    },
    methods: {
        jump: function jump(path) {
            this.$router.push('/components/' + path);
        }
    },
    beforeDestroy: function beforeDestroy() {
        window.__pageIndexScrollTop__ = this.$el.querySelector('.content').scrollTop;
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.$el.querySelector('.content').scrollTop = window.__pageIndexScrollTop__;
        });
    }
};

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__button__);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Popup: __WEBPACK_IMPORTED_MODULE_0__popup___default.a,
        vButton: __WEBPACK_IMPORTED_MODULE_1__button___default.a
    },
    props: {
        list: Array,
        show: Boolean,
        cancel: Boolean,
        cancelText: {
            type: String,
            default: '取消'
        },
        hideOnMask: {
            default: true
        }
    },
    methods: {
        _onItemClick: function _onItemClick(item, index) {
            var _this = this;

            this._hide();

            this.$nextTick(function () {
                _this.$emit('on-item-click', item, index);

                if (item && typeof item.callback === 'function') {
                    item.callback();
                }
            });
        },
        _getText: function _getText(item) {
            return item.text || item;
        },
        _hide: function _hide() {
            this.localShow = false;
            this.$emit('on-hide');
            this.$emit('on-sync-show', false);
        }
    },
    data: function data() {
        return {
            localShow: this.show
        };
    },

    watch: {
        show: function show(_show) {
            if (this.localShow !== _show) {
                this.localShow = _show;
            }
        }
    }
};

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogbox__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dialogbox__);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        DialogBox: __WEBPACK_IMPORTED_MODULE_1__dialogbox___default.a
    },
    data: function data() {
        return {
            show: false,
            title: '',
            content: '',
            callback: null,
            button: '确定'
        };
    },

    methods: {
        _onConfirm: function _onConfirm(e) {
            this.show = false;
            this.$emit('on-confirm', e);

            if (this.callback && typeof this.callback === 'function') {
                this.callback();
            }
        },
        _show: function _show(options) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(options).forEach(function (v) {
                return _this[v] = options[v];
            });
            this.show = true;
        }
    }
};

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        ratio: {
            default: 1,
            description: '高宽比'
        },
        background: {
            description: '背景图或者背景颜色'
        }
    },
    computed: {
        style: function style() {
            var scale = Number(this.ratio) * 100;
            if (isNaN(scale)) return;
            scale = scale + '%';
            return {
                paddingBottom: scale
            };
        },
        boxStyle: function boxStyle() {
            var back = this.background;
            if (back) {
                var style = {};
                if (/\.|\\|\//.test(back) && !/^url/.test(back)) {
                    style.backgroundImage = 'url("' + back + '")';
                } else {
                    style.backgroundColor = back;
                }

                return style;
            }
        }
    }
};

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        inline: Boolean,
        radius: [Number, String],
        height: [Number, String],
        border: [Number, String],
        width: [Number, String],
        size: [Number, String],
        disabled: Boolean,
        text: {
            type: String,
            default: '确定'
        },
        type: {
            type: String,
            default: 'default',
            validator: function validator(value) {
                return ['default', 'primary', 'success', 'info', 'danger', 'warning'].indexOf(value) > -1;
            }
        },
        colors: {
            type: Object,
            default: function _default() {
                return null;
            }
        }
    },
    computed: {
        style: function style() {
            var style = {
                display: this.inline ? 'inline-block' : 'block'
            };

            if (this.height) {
                style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.height);
            }

            if (this.width) {
                style.width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.width);
            }

            if (this.border) {
                style.borderWidth = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.border);
            }

            if (this.radius) {
                style.borderRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.radius);
            }

            if (this.size) {
                style.fontSize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.size);
            }

            if (this.colors) {
                style.color = this.colors.font;
                style.borderColor = this.colors.border;
                style.background = this.colors.background;
            }

            return style;
        }
    },
    methods: {
        _onClick: function _onClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);



/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        status: String
    },
    data: function data() {
        return {
            state: this.status,
            height: 'auto',
            minHeight: 0,
            maxHeight: 0
        };
    },

    methods: {
        toggle: function toggle() {
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
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            if (_this.state) {
                var header = _this.$el.querySelector('.card-header');
                if (!header) {
                    return _this.state = '';
                }

                _this.minHeight = header.clientHeight + 'px';
                _this.maxHeight = _this.$el.clientHeight + 'px';

                _this.state = _this.state === 'collapse' ? 'expand' : 'collapse';
                _this.toggle();
            }
        });
    },
    render: function render(h) {
        var _this2 = this;

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
            slots.forEach(function (vNode) {
                var name = vNode.data && vNode.data.attrs && vNode.data.attrs.name;
                if (name && children[name] !== undefined) {
                    var data = vNode.data;
                    var staticClass = data.staticClass;

                    staticClass = staticClass ? ' ' + staticClass : '';
                    staticClass = className[name] + staticClass;

                    data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data, { staticClass: staticClass });

                    if (name === 'header') {
                        data.on = {
                            click: _this2.toggle
                        };
                    }

                    children[name] = h(vNode.tag, data, vNode.children);
                }
            });
        }

        return h(
            'div',
            { 'class': ['vmc-card', this.state], style: { height: this.height } },
            [children.header, children.content, children.footer]
        );
    }
};

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        title: String,
        arrow: {
            type: [Boolean, String],
            default: true
        }
    },
    computed: {
        props_arrow: {
            get: function get() {
                var val = this.arrow;
                return !(val === false || val === 'false');
            }
        }
    },
    methods: {
        _onClick: function _onClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        id: {
            type: String,
            default: function _default() {
                return 'checkbox-' + Math.random().toString(36).substr(2, 8);
            }
        },
        value: [Boolean, Array, Number, String],
        valueList: Array,
        originValue: [String, Number, Boolean],
        disabled: Boolean,
        inline: Boolean,
        max: {
            type: [Number, String]
        },
        childValues: Array,
        childChecked: Array
    },
    data: function data() {
        return {
            localValue: this.value,
            localChild: this.childChecked
        };
    },

    computed: {
        coerce: {
            get: function get() {
                return {
                    max: parseInt(this.max)
                };
            }
        },
        isChecked: {
            get: function get() {
                if (typeof this.localValue === 'boolean') {
                    return this.localValue;
                } else if (Array.isArray(this.localValue)) {
                    return !!~this.localValue.indexOf(this.originValue);
                } else if (Array.isArray(this.valueList)) {
                    return this.localValue === this.valueList[0];
                } else {
                    return !!this.localValue;
                }
            },
            set: function set(value) {
                if (typeof this.localValue === 'boolean') {} else if (Array.isArray(this.localValue)) {
                    var index = this.localValue.indexOf(this.originValue);
                    if (value && !~index) {
                        this.localValue.push(this.originValue);
                        if (this.coerce.max) {
                            this.localValue = this.localValue.slice(-this.coerce.max);
                        }
                    } else if (!value && !!~index) {
                        this.localValue.splice(index, 1);
                    }

                    value = this.localValue;
                } else if (Array.isArray(this.valueList)) {
                    value = value ? this.valueList[0] : this.valueList[1];
                } else {}

                this._updateValue(value);
            }
        },
        checkedValue: {
            get: function get() {
                var _this = this;

                if (this.isCheckedAll !== undefined && this.isCheckedAll !== this.isChecked) {
                    this.$nextTick(function () {
                        _this.isCheckedAll = _this.isChecked;
                    });
                }

                return this.isChecked;
            },
            set: function set(checked) {
                var _this2 = this;

                if (this.isCheckedAll !== undefined && this.isCheckedAll !== checked) {
                    this.$nextTick(function () {
                        _this2.isCheckedAll = checked;
                    });
                }

                this.isChecked = checked;
            }
        },
        isCheckedAll: {
            get: function get() {
                if (this.childValues && this.localChild && this.childValues.length) {
                    return this.childValues.length === this.localChild.length;
                }
            },
            set: function set(checked) {
                if (checked) {
                    this._updateChild([].concat(this.childValues));
                } else {
                    this._updateChild([]);
                }
            }
        }
    },
    methods: {
        _updateValue: function _updateValue(value) {
            this.localValue = value;
            this.$emit('input', value);
        },
        _updateChild: function _updateChild(value) {
            this.localChild = value;
            this.$emit('on-sync-child', value);
        }
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = _value;
            }
        },
        childChecked: function childChecked(value) {
            var _this3 = this;

            if (this.isCheckedAll !== undefined) {
                this.isChecked = this.isCheckedAll;
                this.$nextTick(function () {
                    _this3.localChild = value;
                });
            }
        }
    }
};

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogbox__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dialogbox__);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        DialogBox: __WEBPACK_IMPORTED_MODULE_1__dialogbox___default.a
    },
    data: function data() {
        return {
            show: false,
            title: '',
            content: '',
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定',
            type: 0
        };
    },

    methods: {
        _onConfirm: function _onConfirm(e) {
            this.show = false;
            this.$emit('on-confirm', e);

            if (this.confirm && typeof this.confirm === 'function') {
                this.confirm();
            }
        },
        _onCancel: function _onCancel(e) {
            this.show = false;
            this.$emit('on-cancel', e);

            if (this.cancel && typeof this.cancel === 'function') {
                this.cancel();
            }
        },
        _show: function _show(options) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(options).forEach(function (v) {
                return _this[v] = options[v];
            });
            this.show = true;
        }
    }
};

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__overlay__);





/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        show: Boolean
    },
    render: function render(h) {
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
            slots.forEach(function (vNode) {
                var name = vNode.data && vNode.data.attrs && vNode.data.attrs.name;
                if (name && children[name] !== undefined) {
                    var data = vNode.data;
                    var staticClass = data.staticClass;

                    staticClass = staticClass ? ' ' + staticClass : '';
                    staticClass = className[name] + staticClass;

                    data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data, { staticClass: staticClass });

                    children[name] = h(vNode.tag, data, vNode.children);
                }
            });
        }

        return h(
            'div',
            { 'class': 'vmc-dialog-wrapper', directives: [{
                    name: 'show',
                    value: this.show
                }]
            },
            [h(
                __WEBPACK_IMPORTED_MODULE_1__overlay___default.a,
                null,
                []
            ), h(
                'div',
                { 'class': 'vmc-dialog' },
                [children.header, children.content, children.footer]
            )]
        );
    }
};

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var PULLSTATUS = {
    INITIAL: 0,
    UPINDENT: 1,
    UPREADY: 2,
    UPLOADING: 3,
    DOWNINDENT: -1,
    DOWNLOADING: -3,
    NOMORE: -9
};

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        autoLoad: Boolean,

        distance: {
            type: Number,
            default: 50
        },

        threshold: {
            type: Number,
            default: 20
        },

        refresh: Function,

        loadMore: Function,

        hasMore: Boolean,

        useMask: Boolean,

        options: {
            type: Object,
            default: function _default() {
                return {
                    tips: {
                        upPull: '↓ 继续下拉刷新',
                        upRelease: '↑ 释放更新列表',
                        upLoading: '正在刷新...',
                        downPull: '↑上拉加载更多',
                        downLoading: '正在加载下一页数据...',
                        downEnd: '没有更多数据了'
                    }
                };
            }
        }
    },
    data: function data() {
        return {
            PULLSTATUS: PULLSTATUS,
            pullStatus: 0,
            offsetHeight: 0,
            animateUp: false,
            loading: false
        };
    },

    methods: {
        done: function done(error) {
            if (this._direction = 'down') {
                this.offsetHeight = 0;
            }

            this.loading = false;
            this.pullStatus = PULLSTATUS.INITIAL;

            var that = this;
            setTimeout(function () {
                if (!that.$el) return;

                that._scrollHeight = that.$el.scrollHeight;
                that._offsetHeight = that.$el.offsetHeight;

                var domDown = that.$el.querySelector('.dropload-down');
                if (domDown.offsetTop < that._offsetHeight) {
                    if (that.hasMore && that.loadMore && !error) {
                        that._direction = 'up';
                        that.loading = true;
                        that.pullStatus = PULLSTATUS.DOWNLOADING;
                        that.loadMore();
                    }
                }
            }, 500);
        },
        _onTouchStart: function _onTouchStart(pos) {
            if (this.loading) return;

            this.animateUp = false;

            this._touchScrollTop = this.$el.scrollTop;
        },
        _onTouchMove: function _onTouchMove(offset, pos, value, e) {
            if (this.loading) return;

            this._moveY = offset.y;

            if (this._moveY > 0) {
                this._direction = 'down';
            } else {
                this._direction = 'up';
            }

            var absY = Math.abs(this._moveY);

            if (this.refresh && this._touchScrollTop <= 0 && this._direction === 'down') {
                e.preventDefault();

                if (absY <= this.distance) {
                    this.offsetHeight = absY;
                    this.pullStatus = PULLSTATUS.UPINDENT;
                } else if (absY > this.distance && absY <= this.distance * 2) {
                    this.offsetHeight = this.distance + (absY - this.distance) * 0.5;
                    this.pullStatus = PULLSTATUS.UPREADY;
                } else {
                    this.offsetHeight = this.distance + this.distance * 0.5 + (absY - this.distance * 2) * 0.2;
                }
            }
        },
        _onTouchEnd: function _onTouchEnd() {
            if (this.loading) return;

            var absY = Math.abs(this._moveY);

            if (this.refresh && this._touchScrollTop <= 0 && this._direction === 'down') {
                this.animateUp = true;

                if (absY > this.distance) {
                    this.offsetHeight = 50;
                    this.pullStatus = PULLSTATUS.UPLOADING;
                    this.loading = true;
                    this.refresh();
                } else {
                    this.offsetHeight = 0;
                }

                this._moveY = 0;
            }
        },
        _onScroll: function _onScroll(e) {
            if (this.loading) return;

            this._scrollTop = this.$el.scrollTop;
            if (this.loadMore && this._direction === 'up') {
                var absY = this._scrollHeight - (this._offsetHeight + this._scrollTop);
                if (absY > 50 && this.pullStatus === PULLSTATUS.DOWNINDENT) {
                    this.pullStatus = PULLSTATUS.INITIAL;
                } else if (absY <= 50 && absY > this.threshold && this.hasMore) {
                    this.pullStatus = PULLSTATUS.DOWNINDENT;
                } else if (absY <= this.threshold) {
                    this.loading = true;

                    if (this.hasMore) {
                        this.pullStatus = PULLSTATUS.DOWNLOADING;
                        this.loadMore();
                    } else {
                        this.pullStatus = PULLSTATUS.NOMORE;
                        var that = this;
                        setTimeout(function () {
                            that.done();
                        }, 1000);
                    }
                }
            }
        }
    },
    mounted: function mounted() {
        if (this.autoLoad && this.refresh) {
            this.animateUp = true;
            this.offsetHeight = 50;
            this.pullStatus = PULLSTATUS.UPLOADING;
            this.refresh();
        }
    }
};

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var getInt = function getInt(val) {
    switch (val) {
        case 'auto':
            return -1;
        case 'none':
            return 0;
        case undefined:
            return 0;
        default:
            return parseInt(val) || 0;
    }
};

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        list: {
            type: Array,
            default: function _default() {
                return [];
            },
            description: '数据列表'
        },
        columns: {
            type: [Number, String],
            default: 0,
            description: '列数，默认为1列'
        },
        gutter: {
            type: [Number, String],
            default: 0,
            description: '列与列之间的间隔'
        },
        margin: {
            type: [Number, String],
            default: 0,
            description: '行与行之间的间隔'
        }
    },
    computed: {
        coerce: {
            get: function get() {
                return {
                    columns: getInt(this.columns),
                    gutter: getInt(this.gutter),
                    margin: getInt(this.margin)
                };
            }
        },
        style: function style() {
            var gutter = this.coerce.gutter > 0 ? this.coerce.gutter : 0;
            var margin = this.coerce.margin > 0 ? this.coerce.margin : 0;
            var margins = '-' + margin / 2 + 'px -' + gutter / 2 + 'px';

            return {
                margin: margins
            };
        },
        itemStyle: function itemStyle() {
            var columns = this.coerce.columns || 1;
            var gutter = this.coerce.gutter > 0 ? this.coerce.gutter : 0;
            var margin = this.coerce.margin > 0 ? this.coerce.margin : 0;
            var width = columns > 0 ? 100 / columns + '%' : null;
            var padding = margin / 2 + 'px ' + gutter / 2 + 'px';

            return {
                width: width,
                padding: padding
            };
        },
        justify: function justify() {
            return this.coerce.columns < 0 && this.coerce.gutter < 0;
        }
    }
};

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);



var getInt = function getInt(val) {
    if (isNaN(val)) return;
    return parseInt(val);
};

/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        type: [String, Function],
        value: [String, Number, Boolean],
        placeholder: String,
        min: {
            type: [Number, String]
        },
        max: {
            type: [Number, String]
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            lastChar: null
        };
    },

    computed: {
        coerce: {
            get: function get() {
                return {
                    min: getInt(this.min),
                    max: getInt(this.max)
                };
            }
        }
    },
    methods: {
        _onKeyPress: function _onKeyPress(e) {
            var char = String.fromCharCode(e.keyCode);
            if (/[0-9a-zA-Z+-.]/.test(char)) {
                this.lastChar = char;
            } else {
                this.lastChar = null;
            }
        },
        _onInput: function _onInput(e) {
            var val = e.target.value;
            var typ = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(this.type);
            if (typ === 'function') {
                this._updateValue(this.type(val));
            } else {
                switch (this.type) {
                    case 'integer':
                        if (!/^-?$/.test(val)) {
                            val = parseInt(val);
                            if (isNaN(val)) val = 0;

                            if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                            if (this.coerce.max !== undefined && val > this.coerce.max) {
                                if (this.lastChar !== null && this.lastChar < this.coerce.max) {
                                    val = parseInt(this.lastChar);
                                } else {
                                    val = this.coerce.max;
                                }
                            }
                            if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                        } else if (this.coerce.min !== undefined && this.coerce.min >= 0) {
                            val = this.coerce.min;
                        }

                        this._updateValue(val);

                        break;
                    case 'number':
                        if (!/^-?$/.test(val) && !/\.$/.test(val)) {
                            val = parseFloat(val);
                            if (isNaN(val)) val = 0;

                            if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                            if (this.coerce.max !== undefined && val > this.coerce.max) {
                                if (this.lastChar !== null && this.lastChar < this.coerce.max) {
                                    val = parseFloat(this.lastChar);
                                } else {
                                    val = this.coerce.max;
                                }
                            }
                            if (this.coerce.min !== undefined && val < this.coerce.min) val = this.coerce.min;
                        } else if (this.coerce.min !== undefined && this.coerce.min > 0) {
                            val = this.coerce.min;
                        }

                        this._updateValue(val);

                        break;
                    case 'alphabet':
                    case 'Alphabet':
                    case 'ALPHABET':
                        val = String(val).replace(/[^a-z]/i, '');
                        if (this.type === 'alphabet') {
                            val = val.toLowerCase();
                        } else if (this.type === 'ALPHABET') {
                            val = val.toUpperCase();
                        }

                        if (this.coerce.max !== undefined) {
                            val = val.substring(0, this.coerce.max);
                        }

                        this._updateValue(val);

                        break;
                    default:
                        this._updateValue(val);
                }
            }
        },
        _updateValue: function _updateValue(value) {
            this.$refs.input.value = value;
            this.$emit('input', value);
        }
    }
};

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: [String, Number, Boolean],
            default: ''
        },
        placeholder: String,
        errorMessage: String,
        validator: {
            type: [Function, Object, RegExp, Array],
            default: null
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            message: '',
            valid: true,
            localType: this.type
        };
    },

    methods: {
        _onKeyUp: function _onKeyUp(e) {
            if (e.keyCode === 13) {
                debugger;
                this._checkValue(e.target.value);
            }
        },
        _onBlur: function _onBlur(e) {
            debugger;
            this._checkValue(e.target.value);
        },
        _onInput: function _onInput(e) {
            var _this = this;

            var value = e.target.value;

            if (this.localType === 'password') {
                clearTimeout(this.timer);
                this.localType = 'text';

                this.timer = setTimeout(function () {
                    _this.localType = 'password';
                }, 1500);
            }

            this.$nextTick(function () {
                _this.$refs.input.value = value;
                _this.$emit('input', value);
            });
        },
        _checkValue: function _checkValue(value, init) {
            var validator = this.validator;
            value = value === undefined || value === null ? '' : value;
            if (!validator) return;
            if (!Array.isArray(validator)) {
                validator = [validator];
            }
            var result = null;
            for (var i = 0; i < validator.length; i++) {
                var valid = validator[i];
                var vType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getType"])(valid);

                switch (vType) {
                    case 'regexp':
                        result = valid.test(value);
                        break;
                    case 'function':
                        result = valid(value);
                        break;
                    case 'object':
                        if (valid.expression && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["isType"])(valid.expression, 'regexp')) {
                            result = valid.expression.test(value);
                            if (!result) result = valid.message;
                        }
                }

                if (result !== true) {
                    this.valid = false;
                    !init && this._showMessage(result || this.errorMessage);
                    break;
                }
            }

            if (result === true) this.valid = true;
        },
        _showMessage: function _showMessage(message) {
            var _this2 = this;

            if (message) {
                this.message = message;
                setTimeout(function () {
                    _this2.message = '';
                }, 2000);
            }
        }
    },
    mounted: function mounted() {
        this._checkValue(this.value, true);
    }
};

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        text: String
    }
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        list: null,
        height: [String, Number],
        backColor: String,
        color: String,
        align: String,
        autoLink: {
            type: Boolean,
            default: true
        },
        second: {
            type: [Number, String],
            default: 3
        },

        direction: {
            type: String,
            default: 'up'
        }
    },
    data: function data() {
        return {
            index: 0
        };
    },

    computed: {
        notes: function notes() {
            var list = this.list;
            if (!list) {
                return [];
            } else if (!Array.isArray(list)) {
                return [list];
            } else {
                return list;
            }
        },
        style: function style() {
            var style = {};
            if (this.height) {
                style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.height);
            }
            if (this.color) {
                style.color = this.color;
            }
            if (this.backColor) {
                style.background = this.backColor;
            }
            return style;
        },
        lineStyle: function lineStyle() {
            var style = {};
            if (this.height) {
                style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.height);
            }
            return style;
        }
    },
    methods: {
        _onItemClick: function _onItemClick(note) {
            if (this.autoLink && note && note.link && typeof note.link === 'string') {
                window.location.href = note.link;
            } else {
                this.$emit('on-item-click', note);
            }
        },
        _getText: function _getText(note) {
            return note.text || note;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.timer = setInterval(function () {
            if (_this.notes.length <= 1) return;

            var index = _this.index + 1;
            if (index === _this.notes.length) {
                index = 0;
            }
            _this.index = index;
        }, Number(this.second) * 1000);
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
    }
};

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topbar_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Topbar: __WEBPACK_IMPORTED_MODULE_0__topbar_vue___default.a
    },
    props: {
        color: String,
        backColor: String,
        fontSize: String
    },
    methods: {
        _onBack: function _onBack() {
            window.history.back();
            this.$emit('on-back');
        },
        _onMenu: function _onMenu() {
            this.$emit('on-menu');
        }
    },
    computed: {
        show: function show() {
            return !__WEBPACK_IMPORTED_MODULE_1__utils__["env"].isWechat;
        },
        style: function style() {
            return {
                color: this.color,
                backgroundColor: this.backColor,
                fontSize: this.fontSize
            };
        }
    },
    data: function data() {
        return {
            show: !__WEBPACK_IMPORTED_MODULE_1__utils__["env"].isWechat
        };
    }
};

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        mInput: __WEBPACK_IMPORTED_MODULE_0__input__["mInput"]
    },
    props: {
        decimal: Boolean,
        value: [String, Number],
        width: [String, Number],
        min: {
            type: [Number, String],
            default: -Infinity
        },
        max: {
            type: [Number, String],
            default: Infinity
        },
        step: {
            type: [Number, String],
            default: 1
        }
    },
    data: function data() {
        return {
            localValue: this.value
        };
    },

    computed: {
        style: function style() {
            if (this.width) {
                return {
                    width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["getCSSSize"])(this.width)
                };
            }
        },

        coerce: {
            get: function get() {
                return {
                    min: Number(this.min),
                    max: Number(this.max),
                    step: Number(this.step)
                };
            }
        }
    },
    methods: {
        _changeCount: function _changeCount(add) {
            var value = Number(this.localValue);
            var step = add ? this.coerce.step : -this.coerce.step;

            var val = this.decimal ? this._decimalPlus(value, step) : value + step;
            if (val >= this.coerce.min && val <= this.coerce.max) {
                this.localValue = val;
            }
        },
        _decimalPlus: function _decimalPlus(a, b) {
            var x = Number(String(a).replace('.', ''));
            var y = Number(String(b).replace('.', ''));
            var m = (String(a).split('.')[1] || '').length;
            var n = (String(b).split('.')[1] || '').length;
            var c = Math.abs(m - n);
            var e = Math.max(m, n);
            var p = Math.pow(10, e);
            var q = Math.pow(10, c);

            if (c > 0) {
                if (m > n) {
                    y = y * q;
                } else {
                    x = x * q;
                }
            }

            return (x + y) / p;
        }
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = _value;
            }
        },
        localValue: function localValue(value) {
            this.$emit('input', value);
        }
    }
};

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        transparent: Boolean
    },
    methods: {
        _onClick: function _onClick() {
            this.$emit('on-click');
        }
    }
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);






/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        value: {
            type: String,
            default: null
        },
        valueType: {
            type: String,
            default: 'value'
        },
        valueSeparator: {
            type: String,
            default: ' '
        }
    },
    data: function data() {
        return {
            state: [],
            target: 0,
            result: {},
            lineHeight: 35
        };
    },
    created: function created() {
        this._initState();
    },

    computed: {
        realList: {
            get: function get() {
                var list = this.list;

                if (list.length && !Array.isArray(list[0])) {
                    list = [list];
                }

                list = list.map(function (arr) {
                    return arr.map(function (o, i) {
                        if ((typeof o === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(o)) !== 'object' || o.name === undefined) {
                            if (o.value === undefined) {
                                o = {
                                    name: o,
                                    value: o
                                };
                            } else {
                                o.name = o.value;
                            }
                        }

                        o.id = i;

                        return o;
                    });
                });

                return list;
            }
        },

        dataList: {
            get: function get() {
                return this.realList;
            }
        },

        shadowList: {
            get: function get() {
                var _this = this;

                if (!this.dataList.length || !this.state.length) return [];

                var list = [this.dataList[0]];

                var _loop = function _loop(i, len) {
                    var parentId = _this.state[i - 1].selectedId;
                    list[i] = _this.dataList[i].filter(function (item) {
                        return item.parentId === parentId;
                    });
                };

                for (var i = 1, len = this.dataList.length; i < len; i++) {
                    _loop(i, len);
                }

                return list;
            }
        },

        indexList: {
            get: function get() {
                var _this2 = this;

                var indexArray = new Array(this.dataList.length).fill(0);
                var valueArray = this.valueList;
                var parentId, index;

                indexArray = indexArray.map(function (item, target) {
                    if (typeof valueArray[target] === 'undefined') {
                        parentId = 0;
                        return item;
                    }

                    index = 0;
                    for (var i = 0, len = _this2.dataList[target].length; i < len; i++) {
                        var data = _this2.dataList[target][i];
                        if (data[_this2.valueType] === valueArray[target]) {
                            parentId = i;
                            return index;
                        }

                        if (target === 0) {
                            index++;
                        } else if (data.parentId === parentId) {
                            index++;
                        }
                    }

                    parentId = 0;
                    return item;
                });

                return indexArray;
            }
        },

        valueList: {
            get: function get() {
                return typeof this.value === 'string' && this.value.split(this.valueSeparator || '');
            }
        }
    },
    methods: {
        _initState: function _initState() {
            var _this3 = this;

            var initState = {
                index: 0,
                startPosY: 0,
                translateY: 0,
                startTranslateY: 0,
                selectedId: 0,
                dragging: false
            };

            this.state = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_array_from___default()({ length: this.dataList.length }).map(function (item, index) {
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, initState);
            });

            var indexList = this.indexList;
            indexList.forEach(function (item, index) {
                if (_this3.state[index]) {
                    _this3._setSelectedItem(index, item);
                }
            });
        },
        _setSelectedItem: function _setSelectedItem(target, index) {
            var _state = this.state[target];

            _state.index = index;
            _state.translateY = -index * this.lineHeight;
            _state.selectedId = this.shadowList[target][index].id;

            for (var i = target + 1; i < this.shadowList.length; i++) {
                var selIndex = Math.min(this.state[i].index, this.shadowList[i].length - 1);
                this.state[i].selectedId = this.shadowList[i][selIndex].id;
            }

            this._onChange();
        },
        _getSelectedItem: function _getSelectedItem() {
            var result = {};
            for (var i = 0, len = this.shadowList.length; i < len; i++) {
                var index = this.state[i].index;
                var total = this.shadowList[i].length - 1;
                if (index < 0 || index > total) {
                    this._setSelectedItem(i, total);
                }

                result[i] = this.shadowList[i][this.state[i].index];
            }

            this.result = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, result);

            return result;
        },
        _getSelectedIndex: function _getSelectedIndex() {
            var target = this.target;
            var _state = this.state[target];

            var lineHeight = this.lineHeight;
            var maxIndex = this.shadowList[target].length - 1;

            var index = -Math.round(_state.translateY / lineHeight);
            index = Math.max(index, 0);
            index = Math.min(index, maxIndex);

            return index;
        },
        _getSelectedValue: function _getSelectedValue() {
            var _this4 = this;

            var array = [];
            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.result).forEach(function (i) {
                return array.push(_this4.result[i][_this4.valueType]);
            });
            return array.join(String(this.valueSeparator));
        },
        _onTouchStart: function _onTouchStart(pos, target) {
            this.target = target;
            var _state = this.state[target];

            _state.startPosY = pos.y;
            _state.startTranslateY = _state.translateY;
            _state.dragging = true;
        },
        _onTouchMove: function _onTouchMove(offset) {
            var target = this.target;
            var _state = this.state[target];

            _state.translateY = _state.startTranslateY + offset.y;
        },
        _onTouchEnd: function _onTouchEnd() {
            var target = this.target;
            var _state = this.state[target];

            _state.dragging = false;

            var index = this._getSelectedIndex();
            this._setSelectedItem(target, index);
        },
        _onChange: function _onChange() {
            var result = this._getSelectedItem();
            var value = this._getSelectedValue();

            this.$emit('on-change', result, value, this.target);
        }
    },
    watch: {
        list: function list() {
            this._initState();
        },
        value: function value(_value) {
            if (_value !== this._getSelectedValue()) {
                this._initState();
            }
        }
    }
};

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__picker__);



var DAYSMAP = {
    30: [4, 6, 9, 11],
    31: [1, 3, 5, 7, 8, 10, 12]
};

/* harmony default export */ __webpack_exports__["default"] = {
    extends: __WEBPACK_IMPORTED_MODULE_0__picker___default.a,
    props: {
        valueSeparator: {
            type: String,
            default: '-'
        },
        year: {
            type: [Boolean, Array],
            default: true
        },
        month: {
            type: [Boolean, Array],
            default: true
        },
        day: {
            type: [Boolean, Array],
            default: true
        },
        towDigitYear: Boolean,
        towDigitMonth: Boolean,
        towDigitDay: Boolean
    },
    computed: {
        dataList: function dataList() {
            var list = [];
            var value = this.valueList || [];
            var from,
                to,
                index = 0;

            if (this.year !== false) {
                from = 1900;
                to = new Date().getFullYear();

                if (value[index]) {
                    var year = value[index];
                    from = Math.min(from, year);
                    to = Math.max(to, year);
                }

                if (Array.isArray(this.year)) {
                    if (this.year[0] !== undefined) from = this.year[0];
                    if (this.year[1] !== undefined) to = this.year[1];
                }

                var years = [];
                for (var i = from; i <= to; i++) {
                    var v = String(i);
                    if (this.towDigitYear) v = v.slice(2);
                    years.push({
                        id: i,
                        name: v,
                        value: v
                    });
                }

                list.push(years);
                index++;
            }

            if (this.month !== false) {
                from = 1;
                to = 12;

                if (Array.isArray(this.month)) {
                    if (this.month[0] !== undefined) from = this.month[0];
                    if (this.month[1] !== undefined) to = this.month[1];
                }

                var months = [];
                for (var _i = from; _i <= to; _i++) {
                    var _v = String(_i);
                    if (this.towDigitMonth) _v = ('0' + _v).slice(-2);
                    months.push({
                        id: _i,
                        name: _v,
                        value: _v
                    });
                }

                list.push(months);
                index++;
            }

            if (this.day !== false) {
                from = 1;
                to = 31;

                if (Array.isArray(this.day)) {
                    if (this.day[0] !== undefined) from = this.day[0];
                    if (this.day[1] !== undefined) to = this.day[1];
                }

                var days = [];
                for (var _i2 = 1; _i2 <= 31; _i2++) {
                    var _v2 = String(_i2);
                    if (this.towDigitDay) _v2 = ('0' + _v2).slice(-2);
                    days.push({
                        id: _i2,
                        name: _v2,
                        value: _v2
                    });
                }

                list.push(days);
                index++;
            }

            return list;
        },
        shadowList: function shadowList() {
            var _this = this;

            var last = this.dataList.length - 1;
            var list = this.dataList.slice(0, last);

            if (this.month && this.day === true && this.result[last - 1] !== undefined) {
                var year = this.year ? Number(this.result[last - 2].value) : null;
                var month = Number(this.result[last - 1].value);
                var day = Number(this.result[last].value);
                var total = void 0;

                if (!!~DAYSMAP[30].indexOf(month)) {
                    total = 30;
                } else if (!!~DAYSMAP[31].indexOf(month)) {
                    total = 31;
                } else {
                    year = year || new Date().getFullYear();
                    if (year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
                        total = 29;
                    } else {
                        total = 28;
                    }
                }

                if (day > total) {
                    this.$nextTick(function () {
                        _this._setSelectedItem(last, total - 1);
                    });
                }

                list.push(this.dataList[last].slice(0, total));
            } else {
                list.push([].concat(this.dataList[last]));
            }

            return list;
        },
        indexList: function indexList() {
            var _this2 = this;

            var indexArray = new Array(this.dataList.length).fill(0);
            var valueArray = this.valueList;

            indexArray = indexArray.map(function (item, index) {
                if (typeof valueArray[index] === 'undefined') return item;

                for (var i = 0, len = _this2.dataList[index].length; i < len; i++) {
                    var data = _this2.dataList[index][i];

                    if (Number(data[_this2.valueType]) === Number(valueArray[index])) {
                        return i;
                    }
                }

                return item;
            });

            return indexArray;
        }
    }
};

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_picker__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__popup_picker__);



/* harmony default export */ __webpack_exports__["default"] = {
    extends: __WEBPACK_IMPORTED_MODULE_0__popup_picker___default.a,
    components: {
        Picker: __webpack_require__(336)
    },
    props: {
        valueSeparator: {
            type: String,
            default: '-'
        },
        year: {
            type: [Boolean, Array],
            default: true
        },
        month: {
            type: [Boolean, Array],
            default: true
        },
        day: {
            type: [Boolean, Array],
            default: true
        },
        towDigitYear: Boolean,
        towDigitMonth: Boolean,
        towDigitDay: Boolean
    }
};

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__picker__);






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Popup: __WEBPACK_IMPORTED_MODULE_1__popup___default.a,
        Picker: __WEBPACK_IMPORTED_MODULE_2__picker___default.a
    },
    props: {
        show: Boolean,
        title: {
            type: String,
            default: ''
        },
        confirm: {
            type: String,
            default: '确定'
        },
        cancel: {
            type: String,
            default: '取消'
        },
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        value: {
            type: String,
            default: null
        },
        valueType: {
            type: String,
            default: 'value'
        },
        valueSeparator: {
            type: String,
            default: ' '
        }
    },
    data: function data() {
        return {
            result: {},
            selValue: '',
            localShow: this.show
        };
    },

    methods: {
        _onCancel: function _onCancel() {
            this._hide();
            this.$emit('on-cancel', this.value);
        },
        _onSubmit: function _onSubmit() {
            this._hide();
            this.$emit('input', this.selValue);
            this.$emit('on-submit', this.selValue);
        },
        _onChange: function _onChange(result, value, target) {
            this.result = result;
            this.selValue = value;
            this.$emit('on-change', result, value, target);
        },
        _onHide: function _onHide() {
            this._hide();
        },
        _hide: function _hide() {
            this.localShow = false;
            this.$emit('on-hide');
            this.$emit('on-sync-show', false);
        }
    },
    watch: {
        show: function show(_show) {
            if (this.localShow !== _show) {
                this.localShow = _show;
            }
        }
    },
    render: function render(h) {
        var props = {};
        var exclude = ['show', 'title', 'confirm', 'cancel'];

        for (var key in this._props) {
            if (!this._props.hasOwnProperty(key)) continue;

            if (!~exclude.indexOf(key)) {
                props[key] = this._props[key];
            }
        }

        return h(
            'popup',
            {
                attrs: { show: this.localShow, height: 'auto' },
                on: {
                    'on-hide': this._onHide
                }
            },
            [h(
                'div',
                { 'class': 'vmc-popup-picker', directives: [{
                        name: 'stop',
                        value: '{{ move: true }}'
                    }]
                },
                [h(
                    'div',
                    { 'class': 'header' },
                    [h(
                        'div',
                        { 'class': 'left', on: {
                                'click': this._onCancel
                            }
                        },
                        [this.cancel]
                    ), h(
                        'div',
                        { 'class': 'title' },
                        [this.title]
                    ), h(
                        'div',
                        { 'class': 'right', on: {
                                'click': this._onSubmit
                            }
                        },
                        [this.confirm]
                    )]
                ), h(
                    'picker',
                    __WEBPACK_IMPORTED_MODULE_0_babel_helper_vue_jsx_merge_props___default()([{
                        on: {
                            'on-change': this._onChange
                        }
                    }, { props: props }]),
                    []
                )]
            )]
        );
    }
};

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);





/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Overlay: __WEBPACK_IMPORTED_MODULE_0__overlay___default.a
    },
    props: {
        show: Boolean,
        mask: {
            default: null
        },
        height: {
            default: null
        },
        width: {
            default: '100%'
        },
        hideOnMask: {
            default: true
        },
        position: {
            type: String,
            default: 'bottom' }
    },
    computed: {
        style: function style() {
            return {
                width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["getCSSSize"])(this.width),
                height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["getCSSSize"])(this.getHeight)
            };
        },
        getHeight: function getHeight() {
            if (this.height !== null) {
                return this.height;
            }

            switch (this.position) {
                case 'top':
                    return 'auto';
                default:
                    return '100%';
            }
        },
        showMask: function showMask() {
            var mask = this.mask;
            if (mask !== null) {
                return mask;
            }

            switch (this.position) {
                case 'top':
                    return false;
                default:
                    return true;
            }
        }
    },
    methods: {
        _onMaskClick: function _onMaskClick() {
            if (this.hideOnMask) {
                this._hide();
            }
        },
        _hide: function _hide() {
            this.localShow = false;
            this.$emit('on-hide');
            this.$emit('on-sync-show', false);
        }
    },
    data: function data() {
        return {
            localShow: this.show
        };
    },

    watch: {
        show: function show(_show) {
            var _this = this;

            if (this.localShow !== _show) {
                this.localShow = _show;
            }

            if (this.position === 'top' && _show === true) {
                setTimeout(function () {
                    _this._hide();
                }, 1000);
            }
        }
    }
};

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        width: [Number, String],
        value: [Number, String],
        color: String,
        backColor: String
    },
    computed: {
        outerStyle: function outerStyle() {
            var style = {};
            if (this.width) {
                style.height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.width);
            }
            if (this.backColor) {
                style.background = this.backColor;
            }
            return style;
        },
        innerStyle: function innerStyle() {
            var style = {};
            style.width = (this.value || 0) + '%';
            if (this.color) {
                style.background = this.color;
            }
            return style;
        }
    }
};

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogbox__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dialogbox__);






/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Overlay: __WEBPACK_IMPORTED_MODULE_1__overlay___default.a,
        DialogBox: __WEBPACK_IMPORTED_MODULE_2__dialogbox___default.a
    },
    data: function data() {
        return {
            show: false,
            title: '',
            content: '',
            validator: null,
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定',
            type: 0,
            value: '',
            invalid: false,
            placeholder: '',
            message: ''
        };
    },

    methods: {
        _onConfirm: function _onConfirm(e) {
            var valid = true;
            if (this.validator) {
                var type = Object.prototype.toString.call(this.validator);
                switch (type) {
                    case '[object RegExp]':
                        valid = this.validator.test(this.value);
                        break;
                    case '[object Function]':
                        valid = this.validator(this.value);
                        break;
                    default:
                        valid = true;
                }
            }

            if (valid !== true) {
                if (typeof valid === 'string') {
                    this.message = valid;
                }
                this.invalid = true;
                return;
            }

            this.show = false;
            this.$emit('on-confirm', e);

            if (this.confirm && typeof this.confirm === 'function') {
                this.confirm(this.value);
            }
        },
        _onCancel: function _onCancel(e) {
            this.show = false;
            this.$emit('on-cancel', e);

            if (this.cancel && typeof this.cancel === 'function') {
                this.cancel();
            }
        },
        _show: function _show(options) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(options).forEach(function (v) {
                return _this[v] = options[v];
            });
            this.show = true;
        }
    }
};

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        id: {
            type: String,
            default: function _default() {
                return 'radio-' + Math.random().toString(36).substr(2, 8);
            }
        },
        value: [String, Number, Boolean],
        originValue: [String, Number, Boolean],
        disabled: Boolean,
        inline: Boolean,
        childValues: Array,
        childChecked: Array
    },
    data: function data() {
        return {
            localValue: this.value,
            localChild: this.childChecked
        };
    },

    computed: {
        isChecked: {
            get: function get() {
                return this.localValue === this.originValue;
            }
        }
    },
    methods: {
        _updateChild: function _updateChild() {
            if (this.isChecked) {
                this.localChild = [].concat(this.childValues);
            } else {
                this.localChild = [];
            }

            this.$emit('on-sync-child', this.localChild);
        }
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = _value;
            }
        },
        localValue: function localValue(value) {
            this._updateChild();
            this.$emit('input', value);
        },
        childChecked: function childChecked(value) {
            var _this = this;

            if (!this.isChecked && value.length) {
                this.$nextTick(function () {
                    _this._updateChild();
                });
            }
        }
    },
    mounted: function mounted() {
        this._updateChild();
    }
};

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        min: {
            type: [Number, String],
            default: 1
        },
        max: {
            type: [Number, String],
            default: 5
        },
        value: {
            type: [String, Number],
            default: 5
        },
        disabled: Boolean,
        star: {
            type: String,
            default: '★'
        },
        defaultColor: String,
        activeColor: String,
        gutter: {
            type: [String, Number]
        },
        size: {
            type: [String, Number]
        }
    },
    computed: {
        coerce: {
            get: function get() {
                return {
                    min: parseInt(this.min),
                    max: parseInt(this.max),
                    value: Number(this.value),
                    gutter: Number(this.gutter),
                    size: Number(this.size)
                };
            }
        }
    },
    methods: {
        _onClick: function _onClick(index) {
            var i = index - 1;
            if (!this.disabled) {
                var value = this.localValue === i + 1 ? i : i + 1;
                if (value < this.coerce.min) value = this.coerce.min;
                this._updateValue(value);
            }
        },
        _updateValue: function _updateValue(value) {
            this.localValue = value;
            this.$emit('input', value);
        },
        outStarStyle: function outStarStyle(index) {
            var i = index - 1;
            var style = {
                fontSize: this.coerce.size + 'px'
            };

            if (this.coerce.gutter) {
                if (i === 0 && i < this.coerce.max) {
                    style.marginRight = this.coerce.gutter / 2 + 'px';
                } else if (i > 0 && i === this.coerce.max - 1) {
                    style.marginLeft = this.coerce.gutter / 2 + 'px';
                } else {
                    style.margin = '0 ' + this.coerce.gutter / 2 + 'px';
                }
            }

            if (i <= this.localValue - 1) {
                style.color = this.activeColor;
            } else {
                style.color = this.defaultColor;
            }

            return style;
        },
        innerStarStyle: function innerStarStyle(index) {
            var i = index - 1;
            var parts = String(this.localValue).split('.');
            if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                return {
                    color: this.activeColor,
                    width: parts[1] * 10 + '%'
                };
            }
        },
        outStarClass: function outStarClass(index) {
            var i = index - 1;
            if (i <= this.localValue - 1) {
                return 'active';
            }
        },
        innerStarClass: function innerStarClass(index) {
            var i = index - 1;
            var parts = String(this.localValue).split('.');
            if (parts.length === 2 && parts[0] == i && parts[1] > 0) {
                return 'active';
            }
        }
    },
    data: function data() {
        return {
            colors: [],
            cutIndex: -1,
            cutPercent: 0,
            localValue: Number(this.value)
        };
    },

    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = Number(_value);
            }
        }
    }
};

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        title: String,
        width: [Number, String],
        align: String },
    computed: {
        style: function style() {
            return {
                width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.width)
            };
        }
    },
    methods: {
        _onClick: function _onClick(event) {
            this.$emit('click', event);
        }
    }
};

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        auto: null,
        ratio: null,
        perPage: {
            type: [Number, String],
            default: 1
        },
        gutter: {
            type: [Number, String]
        },
        height: {
            type: [Number, String],
            default: 'auto'
        },
        sliderIndex: {
            type: [Number, String],
            default: 1
        },
        list: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        dots: {
            default: 'bottom' }
    },
    methods: {
        _onTouchStart: function _onTouchStart() {
            this.dragging = true;
            this.transition = false;

            this._start_touch_timer = Date.now();
        },
        _onTouchMove: function _onTouchMove(offset) {
            this.offsetWidth = this.shadowIndex * this.clientWidth - offset.x;
        },
        _onTouchEnd: function _onTouchEnd(offset) {
            this.dragging = false;
            this.transition = true;
            var x = Math.abs(offset.x);
            if (x >= 60) {
                offset.x < 0 ? this.onSwipeLeft() : this.onSwipeRight();
            }

            this.offsetWidth = 0;

            var move = { x: Math.abs(offset.x), y: Math.abs(offset.y) };
            var duration = Date.now() - this._start_touch_timer;
            if (duration < 200 && move.x < 10 && move.y < 10) {
                var index = this.shadowIndex - 1;
                if (this.multiple) {
                    var unitWidth = this.clientWidth / this.pageSize;
                    var unitIndex = Math.floor(pos.x / unitWidth);

                    index = index * this.pageSize + Math.abs(unitIndex);
                }

                var item = this.list[index];
                if (item) this.onSliderClick(item);
            }
        },
        onSwipeLeft: function onSwipeLeft() {
            if (this.shadowIndex === this.count + 1) return false;

            this.shadowIndex++;

            if (this.shadowIndex === this.count + 1) {
                if (this.transitionEnd) {
                    this.sliderList.addEventListener(this.transitionEnd, this.resetIndex);
                } else {
                    this.resetIndexLow();
                }
            }
        },
        onSwipeRight: function onSwipeRight() {
            if (this.shadowIndex === 0) return false;

            this.shadowIndex--;

            if (this.shadowIndex === 0) {
                if (this.transitionEnd) {
                    this.sliderList.addEventListener(this.transitionEnd, this.resetIndex);
                } else {
                    this.resetIndexLow();
                }
            }
        },
        onSliderClick: function onSliderClick(item) {
            if (item.link) {
                window.location = item.link;
            } else {
                this.$emit('on-item-click', item, this.shadowIndex);
            }
        },
        itemClass: function itemClass(i) {
            var classList = [];
            if (i === 0 || i === this.count + 1) {
                classList.push('shadow');
            } else if (i === this.shadowIndex) {
                classList.push('active');
            }

            return classList;
        },
        itemStyle: function itemStyle(i) {
            var style = {};

            style.width = this.clientWidth + 'px';
            if (!this.autoHeight) {
                style.transform = 'translate3d(' + i * this.clientWidth + 'px, 0px, 0px)';
            }

            return style;
        },
        resetIndex: function resetIndex() {
            var _this = this;

            this.sliderList.removeEventListener(this.transitionEnd, this.resetIndex);

            var index = this.shadowIndex === 0 ? this.count : 1;

            this.transition = false;
            this.shadowIndex = index;
            this.$nextTick(function () {
                setTimeout(function () {
                    _this.transition = true;
                }, 0);
            });
        },
        resetIndexLow: function resetIndexLow() {
            var _this2 = this;

            var index = this.shadowIndex === 0 ? this.count : 1;

            setTimeout(function () {
                _this2.transition = false;
                _this2.shadowIndex = index;
                _this2.$nextTick(function () {
                    setTimeout(function () {
                        _this2.transition = true;
                    }, 0);
                });
            }, 400);
        }
    },
    computed: {
        count: function count() {
            return Math.ceil(this.list.length / this.pageSize);
        },
        pageSize: function pageSize() {
            return parseInt(this.perPage);
        },
        multiple: function multiple() {
            return this.pageSize > 1;
        },
        getHeight: function getHeight() {
            if (this.ratio) {
                var ratio = Number(this.ratio);
                if (ratio > 0) {
                    return this.clientWidth * ratio + 'px';
                }
            }

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.height);
        },
        autoHeight: function autoHeight() {
            return this.getHeight === 'auto';
        },
        shadowList: function shadowList() {
            var list = this.list;
            if (list.length) {
                if (this.multiple) {
                    var array = [];
                    var size = this.pageSize;
                    var page = Math.ceil(list.length / size);
                    for (var i = 0; i < page; i++) {
                        var items = [];
                        for (var j = 0; j < size; j++) {
                            var k = i * size + j;
                            if (k === list.length) break;
                            items.push(list[k]);
                        }
                        array.push(items);
                    }

                    array.unshift(array[array.length - 1]);
                    array.push(array[1]);

                    return array;
                } else {
                    return [].concat(list[list.length - 1], list, list[0]);
                }
            } else {
                return [];
            }
        },

        shadowIndex: {
            get: function get() {
                return parseInt(this.localIndex);
            },
            set: function set(index) {
                this.localIndex = index;
                this.$emit('on-slider-change', index);
            }
        },
        listStyle: function listStyle() {
            var style = {};
            style.width = (this.count + 2) * this.clientWidth + 'px';
            style.transform = 'translate3d(-' + this.translateX + 'px, 0px, 0px)';

            return style;
        },
        groupStyle: function groupStyle() {
            if (this.gutter) {
                return {
                    margin: '0 -' + this.gutter / 2 + 'px'
                };
            }
        },
        groupItemStyle: function groupItemStyle() {
            var width = this.pageSize > 0 ? 100 / this.pageSize + '%' : null;
            var style = { width: width };

            if (this.gutter) {
                style.padding = '0 ' + this.gutter / 2 + 'px';
            }

            return style;
        },
        translateX: function translateX() {
            return this.offsetWidth || this.shadowIndex * this.clientWidth;
        },
        showDots: function showDots() {
            return String(this.dots);
        }
    },
    data: function data() {
        return {
            clientWidth: 0,
            transition: false,
            transitionEnd: '',
            sliderList: null,
            offsetWidth: 0,
            dragging: false,
            localIndex: this.sliderIndex
        };
    },
    mounted: function mounted() {
        var _this3 = this;

        this.$nextTick(function () {
            _this3.clientWidth = _this3.$el.clientWidth;
            _this3.sliderList = _this3.$el.querySelector('.slider-list');

            var trans = {
                'transition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'MozTransition': 'transitionend',
                'WebkitTransition': 'webkitTransitionEnd'
            };

            for (var i in trans) {
                if (_this3.sliderList.style[i] !== undefined) {
                    _this3.transitionEnd = trans[i];
                    break;
                }
            }

            _this3.$nextTick(function () {
                _this3.transition = true;
            });

            if (_this3.auto) {
                var interval = Number(_this3.auto);
                if (!isNaN(interval)) {
                    interval = interval * 1000;
                    _this3.timer = setInterval(function () {
                        if (_this3.dragging) return;
                        _this3.onSwipeLeft();
                    }, interval);
                }
            }
        });
    },
    beforeDestroy: function beforeDestroy() {
        clearInterval(this.timer);
    },

    watch: {
        sliderIndex: function sliderIndex(value) {
            if (value !== this.localIndex) {
                this.localIndex = value;
            }
        }
    }
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


var SPINNERS = ['blade', 'snake', 'double-bounce', 'triple-bounce', 'fading-circle'];

var parseSpinner = function parseSpinner(index) {
    index = index || 0;

    if (/^\d+$/.test(index)) {
        if (SPINNERS.length <= index) {
            console.warn('\'' + index + '\' spinner not found, use the default spinner.');
            index = 0;
        }
        return SPINNERS[index];
    }

    if (SPINNERS.indexOf(index) === -1) {
        console.warn('\'' + index + '\' spinner not found, use the default spinner.');
        index = SPINNERS[0];
    }

    return index;
};

/* harmony default export */ __webpack_exports__["default"] = {
    computed: {
        spinner: function spinner() {
            return 'spinner-' + parseSpinner(this.type);
        }
    },
    components: {
        SpinnerBlade: __webpack_require__(347),
        SpinnerSnake: __webpack_require__(350),
        SpinnerDoubleBounce: __webpack_require__(348),
        SpinnerTripleBounce: __webpack_require__(351),
        SpinnerFadingCircle: __webpack_require__(349)
    },
    props: {
        type: [Number, String],
        size: [Number, String],
        color: String
    }
};

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = {
    mixins: [__WEBPACK_IMPORTED_MODULE_0__spinner__["a" /* default */]],
    computed: {
        bladeStyle: function bladeStyle() {
            if (this.color) {
                return {
                    backgroundColor: this.color
                };
            }
        }
    }
};

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = {
    mixins: [__WEBPACK_IMPORTED_MODULE_0__spinner__["a" /* default */]],
    computed: {
        bounceStyle: function bounceStyle() {
            if (this.color) {
                return {
                    backgroundColor: this.color
                };
            }
        }
    }
};

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = {
    mixins: [__WEBPACK_IMPORTED_MODULE_0__spinner__["a" /* default */]],
    computed: {
        circleStyle: function circleStyle() {
            if (this.color) {
                return {
                    backgroundColor: this.color
                };
            }
        }
    },
    methods: {
        blockStyle: function blockStyle(index) {
            return {
                transform: 'rotate(' + 30 * index + 'deg)'
            };
        },
        circleStyle: function circleStyle(index) {
            return {
                backgroundColor: this.spinnerColor,
                animationDelay: 1.2 / 12 * index - 1.2 + 's'
            };
        }
    }
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = {
    mixins: [__WEBPACK_IMPORTED_MODULE_0__spinner__["a" /* default */]],
    computed: {
        spinnerStyle: function spinnerStyle() {
            var style = {};

            if (this.size) {
                var size = Math.ceil(this.size / 8);

                style.height = this.size + 'px';
                style.width = this.size + 'px';
                style.borderWidth = size + 'px';
            }

            if (this.color) {
                style.borderTopColor = this.color;
                style.borderLeftColor = this.color;
                style.borderBottomColor = this.color;
            }

            return style;
        }
    }
};

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spinner__ = __webpack_require__(20);




/* harmony default export */ __webpack_exports__["default"] = {
    mixins: [__WEBPACK_IMPORTED_MODULE_0__spinner__["a" /* default */]],
    computed: {
        unitSize: function unitSize() {
            if (this.size) {
                return Math.round(this.size / 6) * 2;
            }
        },
        spinnerStyle: function spinnerStyle() {
            if (this.size) {
                return {
                    padding: (this.size - this.unitSize) / 2 + 'px 0'
                };
            }
        },
        bounceStyle: function bounceStyle() {
            var style = {};

            if (this.size) {
                style.width = this.unitSize + 'px';
                style.height = this.unitSize + 'px';
            }

            if (this.color) {
                style.backgroundColor = this.color;
            }

            return style;
        }
    }
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__spinner__);





var STATUS = {
    NORMAL: 'normal',
    DOING: 'doing'
};

/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Spinner: __WEBPACK_IMPORTED_MODULE_1__spinner___default.a
    },
    extends: __WEBPACK_IMPORTED_MODULE_0__button___default.a,
    data: function data() {
        return {
            STATUS: STATUS,
            status: STATUS.NORMAL,
            disable: false
        };
    },

    methods: {
        _onClick: function _onClick() {
            var _this = this;

            this.$nextTick(function () {
                if (!(_this.disabled || _this.disable) && _this.status !== STATUS.DOING) {
                    _this.disable = true;
                    _this.status = STATUS.DOING;
                    _this.$emit('submit', _this);
                }
            });
        },
        done: function done() {
            this.disable = false;
            this.status = STATUS.NORMAL;
        }
    }
};

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        index: {
            type: [Number, String],
            default: 0,
            sync: true
        },
        show: {
            type: Boolean,
            default: true
        },
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        color: String,
        backColor: String,
        fontSize: String
    },
    methods: {
        itemClass: function itemClass(item, index) {
            var classList = ['tab-item-' + index];

            if (this.index == index) classList.push('active');

            return classList;
        },
        _onItemClick: function _onItemClick(item, index) {
            if (this.index == index) return;

            this.$emit('on-item-click', item, index);

            if (item && typeof item.callback === 'function') {
                item.callback();
            }
        },
        _getItemIcon: function _getItemIcon(item, index) {
            if (this.index == index) {
                return item.activeIcon || item.icon;
            } else {
                return item.icon;
            }
        },
        _getItemHtml: function _getItemHtml(item, index) {
            return this._getItemIcon(item, index) + ('<span class="tab-text">' + item.text + '</span>');
        }
    },
    computed: {
        style: function style() {
            return {
                color: this.color,
                backgroundColor: this.backColor,
                fontSize: this.fontSize
            };
        }
    },
    render: function render(h) {
        var _this = this;

        var slots = this.$scopedSlots.default;
        var children = this.items.map(function (item, index) {
            var props = { item: item, index: index };
            return h('div', {
                class: ['tab-item', _this.itemClass(item, index)],
                on: {
                    click: function click() {
                        return _this._onItemClick(item, index);
                    }
                },
                domProps: slots ? undefined : {
                    innerHTML: _this._getItemHtml(item, index)
                }
            }, slots ? slots(props) : []);
        });

        return h(
            'transition',
            {
                attrs: { name: 'vmc-tab-bar-up' }
            },
            [h(
                'div',
                { 'class': 'vmc-tab-bar', directives: [{
                        name: 'show',
                        value: this.show
                    }]
                },
                [h(
                    'div',
                    { 'class': 'tab-bar', style: this.style },
                    [children]
                )]
            )]
        );
    }
};

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        height: [Number, String],
        tabType: {
            type: [Number, String],
            default: 1
        },
        lineWidth: {
            type: [Number, String]
        },
        activeColor: {
            type: String
        },
        defaultColor: {
            type: String
        },
        tabIndex: {
            type: [Number, String],
            default: 0,
            coerce: parseInt
        },
        tabList: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    methods: {
        _onTouchMove: function _onTouchMove(offset, pos, value, e) {
            var horizontal = Math.abs(offset.x) > Math.abs(offset.y);
            if (horizontal) e.preventDefault();
        },
        _onTouchEnd: function _onTouchEnd(offset) {
            var x = Math.abs(offset.x);
            var y = Math.abs(offset.y);
            if (x >= 60 && x > y) {
                offset.x < 0 ? this.onSwipeLeft() : this.onSwipeRight();
            }
        },
        onTabChange: function onTabChange(index) {
            if (this.shadowIndex === index) return;

            var direction = this.shadowIndex < index ? 'left' : 'right';
            if (this.direction !== direction) this.direction = direction;

            this.shadowIndex = index;
        },
        onSwipeLeft: function onSwipeLeft() {
            if (this.shadowIndex >= this.tabList.length - 1) return;

            this.direction = 'left';

            this.shadowIndex++;
        },
        onSwipeRight: function onSwipeRight() {
            if (this.shadowIndex === 0) return;

            this.direction = 'right';

            this.shadowIndex--;
        },
        pageClass: function pageClass(i) {
            if (i === this.shadowIndex) {
                return 'active';
            }
        },
        pageStyle: function pageStyle(i) {
            var style = {};

            style.width = this.clientWidth + 'px';
            if (!this.autoHeight) {
                style.transform = 'translate3d(' + i * this.clientWidth + 'px, 0px, 0px)';
            }

            return style;
        }
    },
    computed: {
        type: function type() {
            return parseInt(this.tabType);
        },
        count: function count() {
            return this.tabList.length;
        },
        tabStyle: function tabStyle() {
            switch (this.type) {
                case 2:
                    return {
                        borderColor: this.activeColor,
                        background: this.activeColor
                    };
            }
        },
        itemStyle: function itemStyle() {
            switch (this.type) {
                case 1:
                    return {
                        color: this.defaultColor
                    };
                case 2:
                    return {
                        color: this.activeColor,
                        background: this.defaultColor,
                        borderColor: this.activeColor
                    };
            }
        },
        itemActiveStyle: function itemActiveStyle() {
            switch (this.type) {
                case 1:
                    return {
                        color: this.activeColor
                    };
                case 2:
                    return {
                        color: this.defaultColor,
                        background: this.activeColor,
                        borderColor: this.activeColor
                    };
            }
        },
        lineStyle: function lineStyle() {
            var left = this.shadowIndex * (100 / this.count) + '%';
            var right = (this.count - this.shadowIndex - 1) * (100 / this.count) + '%';

            return {
                left: left,
                right: right,
                backgroundColor: this.activeColor,
                height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.lineWidth)
            };
        },
        getHeight: function getHeight() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["getCSSSize"])(this.height);
        },
        autoHeight: function autoHeight() {
            return this.height === 'auto';
        },
        pageListStyle: function pageListStyle() {
            var style = {};
            style.width = (this.count + 2) * this.clientWidth + 'px';
            style.transform = 'translate3d(-' + this.shadowIndex * this.clientWidth + 'px, 0px, 0px)';

            return style;
        },

        shadowIndex: {
            get: function get() {
                return parseInt(this.localIndex);
            },
            set: function set(index) {
                this.localIndex = index;
                this.$emit('on-tab-change', index);
            }
        }
    },
    data: function data() {
        return {
            clientWidth: 0,
            direction: 'none',
            localIndex: this.tabIndex
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.clientWidth = _this.$el.clientWidth;
        });
    },

    watch: {
        tabIndex: function tabIndex(value) {
            if (value !== this.localIndex) {
                this.localIndex = value;
            }
        }
    }
};

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        value: String,
        placeholder: String,
        min: {
            type: [Number, String],
            default: 0
        },
        max: {
            type: [Number, String],
            default: 99999
        },
        rows: {
            type: [Number, String],
            default: 5
        },
        border: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            valid: true,
            localValue: this.value
        };
    },

    methods: {
        _onInput: function _onInput() {
            var len = this.length;
            if (!isNaN(this.coerce.max) && len > this.coerce.max) {
                this.localValue = this.localValue.substr(0, this.coerce.max);
            }

            this._checkValue();
        },
        _checkValue: function _checkValue() {
            var len = this.length;
            if (!isNaN(this.coerce.min) && len < this.coerce.min) {
                return this.valid = false;
            }

            this.valid = true;
        }
    },
    computed: {
        length: function length() {
            var value = this.localValue;
            if (value === undefined || value === null) return 0;
            return String(value).length;
        },

        coerce: {
            get: function get() {
                return {
                    min: parseInt(this.min),
                    max: parseInt(this.max),
                    rows: parseInt(this.rows)
                };
            }
        }
    },
    mounted: function mounted() {
        this._checkValue();
    },

    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = _value;
            }
        },
        localValue: function localValue(value) {
            this.$emit('input', value);
        },
        valid: function valid(value) {
            this.$emit('on-valid', value);
        }
    }
};

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__overlay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__spinner__);





var TOASTS = ['loading', 'success', 'error', 'info'];

/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        Overlay: __WEBPACK_IMPORTED_MODULE_0__overlay___default.a,
        Spinner: __WEBPACK_IMPORTED_MODULE_1__spinner___default.a
    },
    data: function data() {
        return {
            type: 'loading',
            show: false,
            content: '',
            position: 'center' };
    },

    computed: {
        showIcon: function showIcon() {
            return !!~TOASTS.indexOf(this.type);
        },
        where: function where() {
            return 'block-' + (!!~['top', 'center', 'bottom'].indexOf(this.position) ? this.position : 'center');
        },
        icon: function icon() {
            return {
                success: 'icono-checkCircle',
                error: 'icono-crossCircle',
                info: 'icono-exclamationCircle'
            }[this.type];
        }
    },
    methods: {
        _show: function _show(options) {
            var _this = this;

            this.type = options.type;
            this.content = options.content;
            this.position = options.position;
            this.show = true;

            if (typeof options.second === 'number' && options.second > 0) {
                setTimeout(function () {
                    return _this._hide();
                }, options.second * 1000);
            }
        },
        _hide: function _hide() {
            this.show = false;
        }
    }
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        id: {
            type: String,
            default: function _default() {
                return 'switch-' + Math.random().toString(36).substr(2, 8);
            }
        },
        originValue: [String, Number, Boolean],
        value: [Boolean, Array],
        disabled: Boolean
    },
    data: function data() {
        return {
            localValue: this.value
        };
    },

    watch: {
        value: function value(_value) {
            if (_value !== this.localValue) {
                this.localValue = _value;
            }
        },
        localValue: function localValue(value) {
            this.$emit('input', value);
        }
    }
};

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = {
    props: {
        url: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        accept: {
            type: String,
            default: 'image/*'
        },
        body: {
            type: Object,
            default: function _default() {}
        },
        multiple: Boolean,
        autoReset: Boolean,
        validator: Function
    },
    methods: {
        _onChange: function _onChange() {
            var files = this.$el.querySelector('input[type=file]').files;
            if (!files.length) return;

            this._uploadFile(files);
        },
        _uploadFile: function _uploadFile(files) {
            var fd = new FormData();

            for (var name in this.body) {
                if (!this.body.hasOwnProperty(name)) continue;

                var value = this.body[name];
                fd.append(name, value);
            }

            var filename = this.name;
            for (var i = 0, len = files.length; i < len; i++) {
                var file = files[i];

                if (typeof this.validator === 'function') {
                    var allow = this.validator(file.name, file.type, file.size);
                    if (!allow) return;
                }

                fd.append(filename, files[i]);
            }

            var xhr = new XMLHttpRequest();
            xhr.upload.addEventListener('progress', this._onProgress, false);
            xhr.addEventListener('load', this._onSuccess, false);
            xhr.addEventListener('error', this._onError, false);
            xhr.open('POST', this.url);
            xhr.send(fd);
        },
        _onProgress: function _onProgress(e) {
            if (e.lengthComputable) {
                var percentCompleted = Math.round(e.loaded * 100 / e.total);
                percentCompleted = percentCompleted.toString() + '%';

                this.$emit('on-progress', percentCompleted);
            }
        },
        _onSuccess: function _onSuccess(e) {
            var res = e.target.responseText;
            try {
                res = JSON.parse(res);
            } catch (e) {}

            if (this.autoReset) {
                this._clearInputFile();
            }

            this.$emit('on-success', res, e);
        },
        _onError: function _onError(e) {
            this.$emit('on-error', e);
        },
        _clearInputFile: function _clearInputFile() {
            var fileInput = this.$el.querySelector('input[type=file]');
            if (fileInput.value) {
                try {
                    fileInput.value = '';
                } catch (e) {}

                if (fileInput.value) {
                    var form = document.createElement('form'),
                        brother = fileInput.nextSibling,
                        parent = fileInput.parentNode;

                    form.appendChild(fileInput);
                    form.reset();
                    parent.insertBefore(fileInput, brother);
                }
            }
        }
    }
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(317);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);




/* harmony default export */ __webpack_exports__["a"] = function (configs) {
    configs.children.push('alert');
    configs.components.Alert = __WEBPACK_IMPORTED_MODULE_2_____default.a;

    return function (Vue, vm) {
        var opts = {
            title: '',
            content: '',
            callback: null,
            button: '确定'
        };

        Vue.prototype.$Alert = function (title, callback, options) {
            if (typeof title === 'string') {
                options = options || {};
                options.title = title;
            } else if ((typeof title === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(title)) === 'object') {
                options = title;
            }

            if (typeof callback === 'function') {
                options = options || {};
                options.callback = callback;
            } else if ((typeof callback === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(callback)) === 'object') {
                options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, callback);
            }

            vm.$refs.alert._show(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, opts, options));
        };
    };
};

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(319);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(321);

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(322);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(323);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);




/* harmony default export */ __webpack_exports__["a"] = function (configs) {
    configs.children.push('confirm');
    configs.components.Confirm = __WEBPACK_IMPORTED_MODULE_2_____default.a;

    return function (Vue, vm) {
        var opts = {
            title: '',
            content: '',
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定'
        };

        Vue.prototype.$Confirm = function (title, confirm, cancel, options) {
            if (typeof title === 'string') {
                options = options || {};
                options.title = title;
            } else if ((typeof title === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(title)) === 'object') {
                options = title;
            }

            if (typeof confirm === 'function') {
                options = options || {};
                options.confirm = confirm;
            } else if ((typeof confirm === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(confirm)) === 'object') {
                options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, confirm);
            }

            if (typeof cancel === 'function') {
                options = options || {};
                options.cancel = cancel;
            } else if ((typeof cancel === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(cancel)) === 'object') {
                options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, cancel);
            }

            vm.$refs.confirm._show(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, opts, options));
        };
    };
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(326);

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(327);

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_install__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_install__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__prompt_install__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_install__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_filter__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_directive__ = __webpack_require__(192);








/* harmony default export */ __webpack_exports__["default"] = function (Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        alert: true,
        confirm: true,
        prompt: true,
        toast: true
    };

    var filters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_filter__["a" /* default */])(Vue);
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(filters).forEach(function (name) {
        Vue.filter(name, filters[name]);
    });

    var directives = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_directive__["a" /* default */])(Vue);
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(directives).forEach(function (name) {
        var _name = name.replace(/[A-Z](?![A-Z])/g, function ($0) {
            return '-' + $0.toLowerCase();
        });
        Vue.directive(_name, directives[name]);
    });

    var configs = {
        name: 'VMC',
        children: [],
        components: {}
    };

    var plugins = [];

    if (options.alert) {
        plugins.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__alert_install__["a" /* default */])(configs));
    }

    if (options.confirm) {
        plugins.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__confirm_install__["a" /* default */])(configs));
    }

    if (options.prompt) {
        plugins.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__prompt_install__["a" /* default */])(configs));
    }

    if (options.toast) {
        plugins.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__toast_install__["a" /* default */])(configs));
    }

    var children = configs.children;
    delete configs.children;
    configs.render = function (h) {
        return h('div', {
            attrs: {
                id: 'vmc'
            }
        }, children.map(function (child) {
            return h(child, { ref: child });
        }));
    };

    var vm = new Vue(configs);
    document.body.appendChild(vm.$mount().$el);
    plugins.forEach(function (fn) {
        return fn(Vue, vm);
    });
};;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    Topbar: __webpack_require__(73),
    Navbar: __webpack_require__(332)
};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(340);

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2____);




/* harmony default export */ __webpack_exports__["a"] = function (configs) {
    configs.children.push('prompt');
    configs.components.Prompt = __WEBPACK_IMPORTED_MODULE_2_____default.a;

    return function (Vue, vm) {
        var opts = {
            title: '',
            content: '',
            value: '',
            invalid: false,
            message: '',
            placeholder: '',
            validator: null,
            confirm: null,
            cancel: null,
            btn1: '取消',
            btn2: '确定'
        };

        Vue.prototype.$Prompt = function (title, confirm, cancel, options) {
            if (typeof title === 'string') {
                options = options || {};
                options.title = title;
            } else if ((typeof title === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(title)) === 'object') {
                options = title;
            }

            if (typeof confirm === 'function') {
                options = options || {};
                options.confirm = confirm;
            } else if ((typeof confirm === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(confirm)) === 'object') {
                options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, confirm);
            }

            if (typeof cancel === 'function') {
                options = options || {};
                options.cancel = cancel;
            } else if ((typeof cancel === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(cancel)) === 'object') {
                options = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(options, cancel);
            }

            vm.$refs.prompt._show(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, opts, options));
        };
    };
};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(345);

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(354);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(355);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0____ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0____);


/* harmony default export */ __webpack_exports__["a"] = function (configs) {
    configs.children.push('toast');
    configs.components.Toast = __WEBPACK_IMPORTED_MODULE_0_____default.a;

    return function (Vue, vm) {
        Vue.prototype.$Loading = function (text, second) {
            var options = {
                type: 'loading',
                content: text || '',
                second: second
            };

            vm.$refs.toast._show(options);
        };

        Vue.prototype.$Loading.done = function () {
            vm.$refs.toast._hide();
        };

        ['success', 'error', 'info', 'toast'].forEach(function (key) {
            var name = '$' + key.replace(/^([a-z])/, function ($1) {
                return $1.toUpperCase();
            });

            Vue.prototype[name] = function (text, second, position) {
                if (typeof second === 'string') {
                    position = second;
                    second = 2;
                }

                var options = {
                    type: key,
                    content: text || '',
                    second: second || 2,
                    position: position
                };

                vm.$refs.toast._show(options);
            };
        });
    };
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(357);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(358);

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shake", function() { return shake; });
var handles = {};

var shake = function shake(callback) {
    handles.shake = callback;

    if (window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', deviceMotionHandler, false);
    } else {
        return;
    }

    var SHAKE_THRESHOLD = 4000;
    var last_update = 0;
    var x,
        y,
        z,
        last_x = 0,
        last_y = 0,
        last_z = 0;

    function deviceMotionHandler(e) {
        var acceleration = e.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if (curTime - last_update > 10) {
            var diffTime = curTime - last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;

            var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
                typeof handles.shake === 'function' && handles.shake();
            }

            last_x = x;
            last_y = y;
            last_z = z;
        }
    }
};

shake.remove = function () {
    delete handles.shake;
};

/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);

/* harmony default export */ __webpack_exports__["a"] = function (Vue) {
    return {
        sync: {
            bind: function bind(el, binding, vnode) {
                if (!binding.expression) return;

                var event = 'on-sync-' + binding.arg;
                var keys = binding.expression.split();
                var vm = el.__vue__;
                var context = vnode.context;

                vm.$on(event, function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    keys.forEach(function (key, index) {
                        key = key.trim();
                        context[key] = args[index];
                    });
                });
            }
        },
        stop: {
            bind: function bind(el, binding) {
                var defaultEvents = ['start', 'move', 'end'];

                var keys = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(binding.modifiers);
                if (!keys.length) keys = [].concat(defaultEvents);

                el.__events__ = [];
                keys.forEach(function (key) {
                    var event = 'touch' + key;
                    el.__events__.push(event);
                    el.addEventListener(event, stopDefault);
                });
            },
            unbind: function unbind(el) {
                el.__events__.forEach(function (event) {
                    el.removeEventListener(event, stopDefault);
                });
            }
        },
        touchEvents: {
            bind: function bind(el, binding, vnode) {
                var vm = vnode.context;
                el.__value__ = binding.value;
                el.__events__ = ['touchStart', 'touchMove', 'touchEnd'];

                el.__touchStart__ = function (e) {
                    if (binding.modifiers.stop) {
                        stopPropagation(e);
                    }

                    if (binding.modifiers.prevent) {
                        stopDefault(e);
                    }

                    var value = el.__value__;
                    var pos = getTouchPos(e);
                    el.__startPosition__ = pos;

                    var fn = vm._onTouchStart;
                    if (fn && typeof fn === 'function') {
                        fn(pos, value, e);
                    }
                };

                el.__touchMove__ = function (e) {
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

                el.__touchEnd__ = function (e) {
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
            update: function update(el, binding) {
                el.__value__ = binding.value;
                el.__events__.forEach(function (event) {
                    el.removeEventListener(event.toLowerCase(), el['__' + event + '__']);
                    el.addEventListener(event.toLowerCase(), el['__' + event + '__'], false);
                });
            },
            unbind: function unbind(el) {
                el.__events__.forEach(function (event) {
                    el.removeEventListener(event.toLowerCase(), el['__' + event + '__']);
                });
            }
        }
    };
};;

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
    };
}

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties__);

var ua = window.navigator.userAgent;
var env = {};
__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_define_properties___default()(env, {
    isAndroid: {
        get: function get() {
            return (/Android/i.test(ua)
            );
        }
    },
    isIphone: {
        get: function get() {
            return (/iphone/i.test(ua)
            );
        }
    },
    isIPad: {
        get: function get() {
            return (/ipad/i.test(ua)
            );
        }
    },
    isIOS: {
        get: function get() {
            return (/iphone|ipad|ipod/i.test(ua)
            );
        }
    },
    isWechat: {
        get: function get() {
            return (/MicroMessenger/i.test(ua)
            );
        }
    },
    isAlipay: {
        get: function get() {
            return (/Alipay/i.test(ua)
            );
        }
    },
    isUCBrowser: {
        get: function get() {
            return (/UCWEB|UCBrowser/i.test(ua)
            );
        }
    }
});

/* harmony default export */ __webpack_exports__["default"] = env;

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function () {
    return {
        spaceText: function spaceText(val) {
            return String(val).split('').join(' ');
        }
    };
};

/***/ }),
/* 195 */
/***/ (function(module, exports) {


if (!Array.prototype.fill) {
    Array.prototype.fill = function (value) {
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        var len = O.length >>> 0;

        var start = arguments[1];
        var relativeStart = start >> 0;

        var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

        var end = arguments[2];
        var relativeEnd = end === undefined ? len : end >> 0;

        var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

        while (k < final) {
            O[k] = value;
            k++;
        }

        return O;
    };
}

if ([1, 0].sort(function (a, b) {
    return a > b;
}).toString() !== '0,1') {
    var sort = Array.prototype.sort;
    Array.prototype.sort = function (callback) {
        var fn;
        if (typeof callback === 'function') {
            fn = function fn() {
                var ret = callback.apply(null, arguments);
                if (ret === true) {
                    ret = 1;
                } else if (ret === false) {
                    ret = -1;
                }

                return ret;
            };
        }
        return sort.call(this, fn);
    };
}

if (!Date.prototype.format) {
    Date.prototype.format = function (format) {
        var p = {
            'm+': String(this.getMonth() + 1),
            'd+': String(this.getDate()),
            'h+': String(this.getHours()),
            'n+': String(this.getMinutes()),
            's+': String(this.getSeconds()) };

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, String(this.getFullYear()).substr(4 - 2 * RegExp.$1.length));
        }

        for (var i in p) {
            if (new RegExp('(' + i + ')').test(format)) {
                var v = RegExp.$1.length === 1 ? p[i] : ('00' + p[i]).substr(p[i].length);
                format = format.replace(RegExp.$1, v);
            }
        }

        return format;
    };
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJs", function() { return loadJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unloadJs", function() { return unloadJs; });

var write = document.write;

var loadJs = function loadJs(urls, callback, fallback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;

    var src = arrays.shift();

    document.write = function (content) {
        var matches = /<script[^>]+src="([^"]+)"/i.exec(content);

        if (matches && matches[1]) {
            arrays.push(matches[1]);
        } else {
            var html = document.body.innerHTML;
            document.body.innerHTML = html + content;
        }
    };

    appendScript(src, function () {
        if (arrays.length) {
            loadJs(arrays, callback);
        } else {
            document.write = write;
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }, function () {
        unloadJs(src, function () {
            console.error('Failed to load: ' + src);

            document.write = write;
            if (fallback && typeof fallback === 'function') {
                fallback();
            }
        });
    });
};

var unloadJs = function unloadJs(urls, callback) {
    if (typeof urls !== 'string' && !Array.isArray(urls)) return;
    var arrays = Array.isArray(urls) ? urls : [urls];
    if (!arrays.length) return;
    arrays = arrays.map(function (u) {
        return u.replace(/^[^/]*?\/\//, '');
    });

    var scripts = document.body.querySelectorAll('script');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(scripts), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var script = _step.value;

            var src = script.getAttribute('src');
            if (!!~arrays.indexOf(src)) {
                document.body.removeChild(script);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (callback && typeof callback === 'function') {
        callback();
    }
};

function appendScript(src, callback, fallback) {
    if (existsScript(src)) {
        if (callback && typeof callback === 'function') callback();
        return;
    }

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.src = src;
    if (callback && typeof callback === 'function') script.onload = callback;
    if (fallback && typeof fallback === 'function') script.onerror = fallback;

    document.body.appendChild(script);
}

function existsScript(src) {
    var scripts = document.body.querySelectorAll('script');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(scripts), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var script = _step2.value;

            if (script.getAttribute('src') === src) {
                return true;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return false;
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
var parse = function parse(url) {
    url = url || window.location.search;
    url = String(url).split('?').pop();

    if (!url) return {};

    var params = {};
    if (url) {
        url.split('&').forEach(function (part) {
            var parts = part.split('=');
            var name = parts.shift();
            var value = parts.join('=');

            if (/\[]$/.test(name) || typeof params[name] !== 'undefined') {
                name = name.replace(/\[]$/, '');
                params[name] = params[name] || [];
                if (Object.prototype.toString.call(params[name]) !== '[object Array]') {
                    params[name] = [params[name]];
                }
                params[name].push(value);
            } else if (/\[.+]$/.test(name)) {
                var key = name.match(/\[(.+)]$/)[1];
                name = name.replace(/\[.+]$/, '');
                params[name] = params[name] || {};
                params[name][key] = value;
            } else {
                params[name] = value;
            }
        });
    }

    return params;
};

var stringify = function stringify(params) {
    var urls = [];
    for (var name in params) {
        if (!params.hasOwnProperty(name)) continue;
        if (Object.prototype.toString.call(params[name]) === '[object Array]') {
            params[name].forEach(function (value) {
                urls.push(name + '[]=' + value);
            });
        } else {
            urls.push(name + '=' + params[name]);
        }
    }

    if (urls.length) {
        return '?' + urls.join('&');
    } else {
        return '';
    }
};

/***/ }),
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 250 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 252 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 253 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 254 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 255 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 256 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 258 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 259 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 260 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 261 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 262 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 263 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 265 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 266 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 267 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 268 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 269 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 270 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 271 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 272 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 273 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 274 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 275 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 276 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 277 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 278 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(258)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(82),
  /* template */
  __webpack_require__(394),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(253)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(383),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(405),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(263)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(85),
  /* template */
  __webpack_require__(399),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(249)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(364),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(262)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(87),
  /* template */
  __webpack_require__(398),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(88),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(265)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(89),
  /* template */
  __webpack_require__(404),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(275)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(90),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(272)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(254)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(92),
  /* template */
  __webpack_require__(385),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(273)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(93),
  /* template */
  __webpack_require__(419),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(94),
  /* template */
  __webpack_require__(386),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(274)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(95),
  /* template */
  __webpack_require__(423),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(269)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(96),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(255)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(391),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(270)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(98),
  /* template */
  __webpack_require__(416),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(261)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(397),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(276)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(100),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(259)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(101),
  /* template */
  __webpack_require__(395),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(248)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(363),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(103),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(246)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(361),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(379),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(277)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(250)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(374),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(278)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(264)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(402),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(260)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(396),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(406),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(251)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(112),
  /* template */
  __webpack_require__(380),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(271)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(113),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(247)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(114),
  /* template */
  __webpack_require__(362),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(256)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(115),
  /* template */
  __webpack_require__(392),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(252)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(116),
  /* template */
  __webpack_require__(381),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(117),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(118),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(266)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(119),
  /* template */
  __webpack_require__(407),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(120),
  /* template */
  __webpack_require__(366),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(121),
  /* template */
  __webpack_require__(390),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(122),
  /* template */
  __webpack_require__(384),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(123),
  /* template */
  __webpack_require__(367),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(124),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(377),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(375),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(128),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(129),
  /* template */
  __webpack_require__(401),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(130),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(131),
  /* template */
  __webpack_require__(389),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(132),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(133),
  /* template */
  __webpack_require__(369),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(134),
  /* template */
  __webpack_require__(368),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(135),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(136),
  /* template */
  __webpack_require__(408),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(137),
  /* template */
  __webpack_require__(412),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(138),
  /* template */
  __webpack_require__(359),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(139),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(140),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(141),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(142),
  /* template */
  __webpack_require__(365),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(143),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(144),
  /* template */
  __webpack_require__(400),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(145),
  /* template */
  __webpack_require__(371),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(146),
  /* template */
  __webpack_require__(373),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(147),
  /* template */
  __webpack_require__(376),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(148),
  /* template */
  __webpack_require__(372),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(149),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(150),
  /* template */
  __webpack_require__(382),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(151),
  /* template */
  __webpack_require__(403),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(152),
  /* template */
  __webpack_require__(388),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(153),
  /* template */
  __webpack_require__(378),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(154),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(155),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(156),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(370),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(387),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(414),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(426),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-picker"
  }, [_c('hr', {
    staticClass: "split-line-top"
  }), _vm._v(" "), _c('hr', {
    staticClass: "split-line-bottom"
  }), _vm._v(" "), _vm._l((_vm.shadowList), function(data, $p) {
    return _c('div', {
      staticClass: "picker-list"
    }, [_c('ul', {
      directives: [{
        name: "touch-events",
        rawName: "v-touch-events",
        value: ($p),
        expression: "$p"
      }],
      class: {
        'dragging': _vm.state[$p].dragging
      },
      style: ({
        'transform': 'translate3d(0,' + _vm.state[$p].translateY + 'px, 0)'
      })
    }, [_c('li'), _vm._v(" "), _c('li'), _vm._v(" "), _c('li'), _vm._v(" "), _vm._l((data), function(item, $q) {
      return _c('li', {
        class: {
          'current': $q === _vm.state[$p].index,
            'node1': Math.abs($q - _vm.state[$p].index) == 1,
            'node2': Math.abs($q - _vm.state[$p].index) == 2,
            'node3': Math.abs($q - _vm.state[$p].index) >= 3
        }
      }, [_vm._v("\n                " + _vm._s(item.name) + "\n            ")])
    }), _vm._v(" "), _c('li'), _vm._v(" "), _c('li'), _vm._v(" "), _c('li')], 2)])
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-topbar"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "rater"
    }
  }, [_c('navbar', [_vm._v("评分")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('row', {
    attrs: {
      "title": '普通评分 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    model: {
      value: (_vm.point1),
      callback: function($$v) {
        _vm.point1 = $$v
      },
      expression: "point1"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '允许评0分 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "min": "0"
    },
    model: {
      value: (_vm.point1),
      callback: function($$v) {
        _vm.point1 = $$v
      },
      expression: "point1"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '仅展示评分 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '评分为小数(' + _vm.point2 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point2,
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '自定义可评分 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "max": "6"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '自定义大小 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "size": "15"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '自定义颜色 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "active-color": "#00C85E"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '自定义间距 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "gutter": "4"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": '自定义形状 (' + _vm.point1 + ')'
    }
  }, [_c('rater', {
    attrs: {
      "value": _vm.point1,
      "star": "☻"
    }
  })], 1), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": _vm.updatePoint
    }
  }, [_vm._v("更新评分数")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "toast"
    }
  }, [_c('navbar', [_vm._v("消息提示")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.loading()
      }
    }
  }, [_vm._v("显示loading状态(手动关闭)")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Loading('3秒后自动关闭', 3)
      }
    }
  }, [_vm._v("显示loading状态(自动关闭)")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Success('操作成功')
      }
    }
  }, [_vm._v("显示成功状态")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Error('操作失败')
      }
    }
  }, [_vm._v("显示失败状态")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Toast('上方文字提示', 'top')
      }
    }
  }, [_vm._v("显示文字提示(上方)")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Toast('中间文字提示')
      }
    }
  }, [_vm._v("显示文字提示(中间)")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.$Toast('下方文字提示', 'bottom')
      }
    }
  }, [_vm._v("显示文字提示(下方)")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "progressbar"
    }
  }, [_c('navbar', [_vm._v("进度条")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('row', {
    attrs: {
      "title": "进度0%",
      "align": "left"
    }
  }, [_c('progressbar', {
    attrs: {
      "value": "0",
      "color": "#ff0000",
      "back-color": "#000000"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": "进度27%",
      "align": "left"
    }
  }, [_c('progressbar', {
    attrs: {
      "value": "27",
      "color": "#ff0000",
      "back-color": "#000000"
    }
  })], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": "进度100%",
      "align": "left"
    }
  }, [_c('progressbar', {
    attrs: {
      "value": "100",
      "color": "#ff0000",
      "back-color": "#000000"
    }
  }, [_c('div', {
    staticClass: "progress-text"
  }, [_c('div', [_vm._v("0%")]), _vm._v(" "), _c('div', [_vm._v("100%")])])])], 1), _vm._v(" "), _c('row', {
    attrs: {
      "title": "自定义高度",
      "align": "left"
    }
  }, [_c('progressbar', {
    attrs: {
      "value": "100",
      "width": "10"
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "button"
    }
  }, [_c('navbar', [_vm._v("按钮")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "button-list"
  }, [_c('v-button', {
    attrs: {
      "type": "default"
    }
  }, [_vm._v("type: default")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("type: primary")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    }
  }, [_vm._v("type: success")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "info"
    }
  }, [_vm._v("type: info")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "danger"
    }
  }, [_vm._v("type: danger")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "warning"
    }
  }, [_vm._v("type: warning")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "colors": _vm.customColors
    }
  }, [_vm._v("custom colors")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "primary",
      "disabled": ""
    }
  }, [_vm._v("type: primary but disabled")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "primary"
    }
  }, [_c('i', {
    staticClass: "icono-cart",
    slot: "icon-left"
  }), _vm._v("\n                button with icon\n            ")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "primary"
    }
  }, [_c('i', {
    staticClass: "icono-cart",
    slot: "icon-left"
  }), _vm._v("\n                button with icon and spinner\n                "), _c('spinner', {
    attrs: {
      "color": "white",
      "size": "20"
    },
    slot: "icon-right"
  })], 1)], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-popup-wrapper"
  }, [_c('transition', {
    attrs: {
      "name": "vmc-popup-fade"
    }
  }, [(_vm.showMask) ? _c('overlay', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.localShow),
      expression: "localShow"
    }],
    on: {
      "on-click": _vm._onMaskClick
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": 'vmc-popup-' + _vm.position
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.localShow),
      expression: "localShow"
    }],
    staticClass: "vmc-popup",
    class: 'vmc-popup-' + _vm.position,
    style: (_vm.style)
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('popup', {
    staticClass: "vmc-action-sheet",
    attrs: {
      "show": _vm.localShow,
      "hide-on-mask": _vm.hideOnMask,
      "height": "auto"
    },
    on: {
      "on-hide": _vm._hide
    }
  }, [_vm._l((_vm.list), function(item, index) {
    return _c('v-button', {
      key: "index",
      staticClass: "vmc-1px-top",
      on: {
        "click": function($event) {
          _vm._onItemClick(item, index)
        }
      }
    }, [_vm._v("\n\n        " + _vm._s(_vm._getText(item)) + "\n    ")])
  }), _vm._v(" "), (_vm.cancel) ? _c('v-button', {
    staticClass: "vmc-1px-top cancel",
    on: {
      "click": _vm._hide
    }
  }, [_vm._v("\n\n        " + _vm._s(_vm.cancelText) + "\n    ")]) : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vmc-button",
    class: [_vm.type, {
      disabled: _vm.disabled
    }],
    style: (_vm.style),
    on: {
      "click": _vm._onClick
    }
  }, [_c('div', {
    staticClass: "block"
  }, [_c('span', {
    staticClass: "icon-left"
  }, [_vm._t("icon-left")], 2), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
    staticClass: "icon-right"
  }, [_vm._t("icon-right")], 2)], 2)])
},staticRenderFns: []}

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition-group', {
    staticClass: "vmc-marquee",
    style: (_vm.style),
    attrs: {
      "tag": "div",
      "name": 'vmc-marquee-' + _vm.direction
    }
  }, _vm._l((_vm.notes), function(note, $index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.index === $index),
        expression: "index === $index"
      }],
      key: $index,
      staticClass: "marquee-line",
      class: _vm.align,
      style: (_vm.lineStyle),
      on: {
        "click": function($event) {
          _vm._onItemClick(note)
        }
      }
    }, [_c('i', {
      staticClass: "icono-volumeHigh"
    }), _vm._v(" "), _c('span', {
      staticClass: "vmc-nowrap"
    }, [_vm._v(_vm._s(_vm._getText(note)))]), _vm._v(" "), _c('i', {
      staticClass: "icono-caretRight"
    })])
  }))
},staticRenderFns: []}

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-justify"
  }, [_c('span', [_vm._t("default", [_vm._v(_vm._s(_vm._f("spaceText")(_vm.text)))])], 2)])
},staticRenderFns: []}

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-text-area",
    class: {
      invalid: !_vm.valid
    }
  }, [_c('div', {
    class: {
      'vmc-1px': _vm.border
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "rows": _vm.coerce.rows,
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.localValue)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.localValue = $event.target.value
      }, function($event) {
        _vm._onInput()
      }]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "vmc-textarea-number"
  }, [_vm._v(_vm._s(_vm.length) + "/" + _vm._s(_vm.max))])])
},staticRenderFns: []}

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vmc-radio",
    class: {
      inline: _vm.inline
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "radio",
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.originValue,
      "checked": _vm._q(_vm.localValue, _vm.originValue)
    },
    on: {
      "__c": function($event) {
        _vm.localValue = _vm.originValue
      }
    }
  }), _vm._v(" "), _c('label', {
    class: {
      disabled: _vm.disabled
    },
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("extra")], 2)
},staticRenderFns: []}

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-slider",
    style: ({
      height: _vm.getHeight
    })
  }, [_c('div', {
    directives: [{
      name: "touch-events",
      rawName: "v-touch-events.prevent",
      modifiers: {
        "prevent": true
      }
    }],
    staticClass: "slider-list",
    class: {
      transition: _vm.transition, 'auto-height': _vm.autoHeight
    },
    style: (_vm.listStyle)
  }, _vm._l((_vm.shadowList), function(item, $index) {
    return _c('div', {
      key: "$index",
      staticClass: "slider-item",
      class: _vm.itemClass($index),
      style: (_vm.itemStyle($index))
    }, [(_vm.multiple) ? _c('div', {
      staticClass: "slider-group",
      style: (_vm.groupStyle)
    }, _vm._l((item), function(_item, index) {
      return _c('div', {
        staticClass: "slider-group-item",
        style: (_vm.groupItemStyle)
      }, [_vm._t("default", [_c('img', {
        staticClass: "slider-image",
        attrs: {
          "src": _item.image
        }
      })], {
        item: _item,
        index: index
      })], 2)
    })) : _vm._t("default", [_c('img', {
      staticClass: "slider-image",
      attrs: {
        "src": item.image
      }
    }), _vm._v(" "), (item.title) ? _c('p', {
      staticClass: "slider-title"
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()], {
      item: item,
      index: $index
    })], 2)
  })), _vm._v(" "), (_vm.showDots !== 'false') ? _c('div', {
    staticClass: "slider-dots",
    class: _vm.showDots
  }, _vm._l((_vm.count), function(i) {
    return _c('i', {
      class: {
        active: _vm.shadowIndex === i
      }
    })
  })) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-rater"
  }, _vm._l((_vm.coerce.max), function(i) {
    return _c('span', {
      staticClass: "vmc-rater-outer",
      class: _vm.outStarClass(i),
      style: (_vm.outStarStyle(i)),
      on: {
        "click": function($event) {
          _vm._onClick(i)
        }
      }
    }, [_vm._v("\n\n        " + _vm._s(_vm.star) + "\n\n        "), (_vm.innerStarStyle(i)) ? _c('span', {
      staticClass: "vmc-rater-inner",
      class: _vm.innerStarClass(i),
      style: (_vm.innerStarStyle(i))
    }, [_vm._v(_vm._s(_vm.star))]) : _vm._e()])
  }))
},staticRenderFns: []}

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "slider"
    }
  }, [_c('navbar', [_vm._v("轮播图")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "label"
  }, [_vm._v("自动靠图片尺寸撑开的轮播图")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.list
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("固定高度为200px")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.dataList,
      "height": "200"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("设置高宽比为0.55")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.dataList,
      "ratio": "0.55"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("自动靠图片尺寸撑开的轮播图(自动轮播)")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.list,
      "auto": "3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("固定高度为200px(自动轮播)")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.dataList,
      "height": "200",
      "auto": "3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("一页显示多张图片")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.imageList,
      "height": "auto",
      "per-page": "3"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("自定义显示的内容")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.list,
      "height": "200"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('img', {
          staticClass: "slider-image",
          attrs: {
            "src": props.item.image,
            "alt": props.item.image
          }
        })]
      }]
    ])
  }), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_vm._v("自定义显示的内容")]), _vm._v(" "), _c('slider', {
    attrs: {
      "list": _vm.imageList,
      "height": "auto",
      "per-page": "3",
      "gutter": "6",
      "dots": "false"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('img', {
          staticClass: "slider-image",
          attrs: {
            "src": props.item.image,
            "alt": props.item.image
          }
        })]
      }]
    ])
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dialog-box', {
    staticClass: "vmc-confirm",
    class: {
      'no-content': !_vm.content
    },
    attrs: {
      "show": _vm.show
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), (_vm.content) ? _c('div', {
    attrs: {
      "name": "content"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', {
    staticClass: "vmc-1px-right",
    class: _vm.type === 0 ? 'default' : 'primary',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onCancel($event)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.btn1) + "\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onConfirm($event)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.btn2) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-row vmc-1px-top",
    class: _vm.align,
    on: {
      "click": _vm._onClick
    }
  }, [(_vm.title) ? _c('label', {
    style: (_vm.style)
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vmc-checkbox",
    class: {
      inline: _vm.inline
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.checkedValue),
      expression: "checkedValue"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.originValue,
      "checked": Array.isArray(_vm.checkedValue) ? _vm._i(_vm.checkedValue, _vm.originValue) > -1 : (_vm.checkedValue)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.checkedValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.originValue,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.checkedValue = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.checkedValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.checkedValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    class: {
      disabled: _vm.disabled
    },
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("extra")], 2)
},staticRenderFns: []}

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-spinner-snake",
    style: (_vm.spinnerStyle)
  })
},staticRenderFns: []}

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "red-dot"
    }
  }, [_c('navbar', [_vm._v("小红点")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "vmc-red-dot"
  }, [_vm._v("一些有趣的文字")])])
}]}

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "tab-control"
    }
  }, [_c('navbar', [_vm._v("Tab")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('tab-control', {
    attrs: {
      "tab-list": _vm.tabList,
      "tab-index": "0",
      "height": "200"
    },
    scopedSlots: _vm._u([
      ["tabPage", function(props) {
        return [_c('div', [_c('p', [_vm._v(_vm._s(props.item.name) + " 内容云云")])])]
      }]
    ])
  }), _vm._v(" "), _c('tab-control', {
    attrs: {
      "tab-list": _vm.tabList,
      "tab-index": "2",
      "height": "200"
    }
  }, [_c('div', {
    slot: "tab1"
  }, [_c('p', [_vm._v("tab1 内容云云")])]), _vm._v(" "), _c('div', {
    slot: "tab2"
  }, [_c('p', [_vm._v("tab2 内容云云")])]), _vm._v(" "), _c('div', {
    slot: "tab3"
  }, [_vm._l((10), function(i) {
    return _c('p', [_vm._v("tab3 内容云云")])
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((10), function(i) {
    return _c('p', [_vm._v("tab3 内容云云")])
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((10), function(i) {
    return _c('p', [_vm._v("tab3 内容云云")])
  })], 2)]), _vm._v(" "), _c('tab-control', {
    attrs: {
      "tab-list": _vm.tabList,
      "tab-index": "0",
      "height": "auto"
    },
    scopedSlots: _vm._u([
      ["tabPage", function(props) {
        return [_c('div', [_vm._l((2), function(i) {
          return _c('p', [_vm._v(_vm._s(props.item.name) + " 内容云云")])
        }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((2), function(i) {
          return _c('p', [_vm._v(_vm._s(props.item.name) + " 内容云云")])
        }), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((2), function(i) {
          return _c('p', [_vm._v(_vm._s(props.item.name) + " 内容云云")])
        })], 2)]
      }]
    ])
  }), _vm._v(" "), _c('tab-control', {
    attrs: {
      "tab-list": _vm.tabList,
      "tab-index": "0",
      "tab-type": "2",
      "height": "200"
    },
    scopedSlots: _vm._u([
      ["tabPage", function(props) {
        return [_c('p', [_vm._v(_vm._s(props.item.name) + " 内容云云")])]
      }]
    ])
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "m-input"
    }
  }, [_c('navbar', [_vm._v("输入框2")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('cell', {
    attrs: {
      "arrow": "false"
    }
  }, [_c('v-input', {
    directives: [{
      name: "valid",
      rawName: "v-valid",
      value: (_vm.valid),
      expression: "valid"
    }],
    attrs: {
      "placeholder": "请输入用户名，长度为6-12位",
      "validator": _vm.validName,
      "error-message": "用户名长度必须为6-12位"
    }
  })], 1), _vm._v(" "), _c('cell', {
    attrs: {
      "arrow": "false"
    }
  }, [_c('v-input', {
    directives: [{
      name: "valid",
      rawName: "v-valid",
      value: (_vm.valid),
      expression: "valid"
    }],
    attrs: {
      "placeholder": "请输入密码，长度为6-16位",
      "validator": _vm.validPass,
      "type": "password",
      "value": _vm.form.password1
    }
  })], 1), _vm._v(" "), _c('cell', {
    attrs: {
      "arrow": "false"
    }
  }, [_c('v-input', {
    directives: [{
      name: "valid",
      rawName: "v-valid",
      value: (_vm.valid),
      expression: "valid"
    }],
    attrs: {
      "placeholder": "请再次确认密码",
      "validator": _vm.validPass2,
      "type": "password",
      "value": _vm.form.password2
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "button"
  }, [_c('submit', {
    directives: [{
      name: "valid",
      rawName: "v-valid"
    }],
    attrs: {
      "type": "danger"
    },
    on: {
      "submit": _vm.submit
    }
  }, [_vm._v("保存")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-spinner-blade",
    style: (_vm.spinnerStyle)
  }, _vm._l((12), function(i) {
    return _c('div', {
      staticClass: "blade",
      class: 'blade-' + (i - 1),
      style: (_vm.bladeStyle)
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 383 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "popup"
    }
  }, [_c('navbar', [_vm._v("操作列表")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('v-button', {
    on: {
      "click": function($event) {
        _vm.showAction1 = true
      }
    }
  }, [_vm._v("弹出ActionSheet")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showAction2 = true
      }
    }
  }, [_vm._v("弹出ActionSheet(带取消按钮)")])], 1), _vm._v(" "), _c('action-sheet', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showAction1),
      expression: "showAction1",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showAction1,
      "list": _vm.buttons
    }
  }), _vm._v(" "), _c('action-sheet', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showAction2),
      expression: "showAction2",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showAction2,
      "list": _vm.buttons,
      "cancel": ""
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 384 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-box",
    style: (_vm.style)
  }, [_c('div', {
    staticClass: "vmc-box-content",
    style: (_vm.boxStyle)
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 385 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "grid"
    }
  }, [_c('navbar', [_vm._v("网格")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('grid', {
    attrs: {
      "list": _vm.buttonList,
      "columns": "3",
      "gutter": "10",
      "margin": "6"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('v-button', {
          attrs: {
            "type": props.item.type,
            "radius": "5"
          }
        }, [_vm._v("按钮" + _vm._s(props.index))])]
      }]
    ])
  }), _vm._v(" "), _c('grid', {
    attrs: {
      "list": _vm.buttonList,
      "columns": "auto",
      "gutter": "auto",
      "margin": "6"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('v-button', {
          attrs: {
            "type": props.item.type,
            "width": "50",
            "height": "30",
            "radius": "5"
          }
        }, [_vm._v("按钮" + _vm._s(props.index))])]
      }]
    ])
  }), _vm._v(" "), _c('grid', {
    attrs: {
      "list": _vm.buttonList,
      "columns": "auto",
      "gutter": "10",
      "margin": "6"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('v-button', {
          attrs: {
            "type": props.item.type,
            "width": "50",
            "height": "30",
            "radius": "5"
          }
        }, [_vm._v("按钮" + _vm._s(props.index))])]
      }]
    ])
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 386 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "justify"
    }
  }, [_c('navbar', [_vm._v("文字对齐")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('justify', {
    attrs: {
      "text": "123456789"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 387 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "vmc-toast",
    attrs: {
      "transition": "vmc-toast"
    }
  }, [_c('overlay', {
    attrs: {
      "transparent": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "block",
    class: _vm.where,
    style: ({
      'padding': _vm.showIcon ? '20px' : '10px'
    })
  }, [(_vm.showIcon) ? _c('div', {
    staticClass: "icon"
  }, [(_vm.type == 'loading') ? _c('spinner', {
    attrs: {
      "color": "#ffffff",
      "size": "48",
      "type": "0"
    }
  }) : _c('i', {
    class: _vm.icon
  })], 1) : _vm._e(), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.content),
      expression: "content"
    }],
    staticClass: "text",
    style: ({
      'margin-top': _vm.showIcon ? '10px' : ''
    })
  }, [_vm._v(_vm._s(_vm.content))])])], 1)
},staticRenderFns: []}

/***/ }),
/* 388 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-spinner-fading-circle",
    style: (_vm.spinnerStyle)
  }, _vm._l((12), function(i) {
    return _c('div', {
      staticClass: "block",
      class: 'block-' + (i - 1)
    }, [_c('div', {
      staticClass: "circle",
      class: 'circle-' + (i - 1),
      style: (_vm.circleStyle)
    })])
  }))
},staticRenderFns: []}

/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "vmc-input",
    class: {
      'vmc-1px': _vm.border
    }
  }, [_c('input', {
    ref: "input",
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "keypress": _vm._onKeyPress,
      "input": _vm._onInput
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 390 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dialog-box', {
    staticClass: "vmc-alert",
    class: {
      'no-content': !_vm.content
    },
    attrs: {
      "show": _vm.show
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), (_vm.content) ? _c('div', {
    attrs: {
      "name": "content"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onConfirm($event)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.button) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),
/* 391 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "m-input"
    }
  }, [_c('navbar', [_vm._v("输入框1")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只能输入整数(0-10)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "input"
  }, [_c('m-input', {
    attrs: {
      "type": "integer",
      "min": "0",
      "max": "10"
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value1) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只能输入小写字母(最长12位)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "input"
  }, [_c('m-input', {
    attrs: {
      "type": "alphabet",
      "max": "12"
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value2) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只能输入大写字母(最长12位)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "input"
  }, [_c('m-input', {
    attrs: {
      "type": "ALPHABET",
      "max": "12"
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value3) + " ")])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "upload"
    }
  }, [_c('navbar', [_vm._v("文件上传")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "help-block"
  }, [_vm._v("注：该示例只能在本地dev环境下访问")]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请上传图片(单张图片)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "image-list"
  }, [_vm._l((_vm.images1), function(image, $index) {
    return _c('div', {
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": image
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "vmc-badge",
      on: {
        "click": function($event) {
          _vm.images1.splice($index, 1)
        }
      }
    }, [_vm._v("x")])])
  }), _vm._v(" "), _c('upload', {
    attrs: {
      "name": "file",
      "url": "/upload",
      "body": _vm.data,
      "auto-reset": ""
    },
    on: {
      "on-success": _vm.onSuccess
    }
  })], 2)])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请上传图片(多张图片)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "image-list"
  }, [_vm._l((_vm.images2), function(image, $index) {
    return _c('div', {
      staticClass: "image"
    }, [_c('img', {
      attrs: {
        "src": image
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "vmc-badge",
      on: {
        "click": function($event) {
          _vm.images2.splice($index, 1)
        }
      }
    }, [_vm._v("x")])])
  }), _vm._v(" "), _c('upload', {
    attrs: {
      "name": "photos",
      "url": "/upload/photos",
      "body": _vm.data,
      "multiple": ""
    },
    on: {
      "on-success": _vm.onSuccess
    }
  })], 2)])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('transition', {
    attrs: {
      "name": _vm.direction
    }
  }, [_c('router-view', {
    staticClass: "page"
  })], 1), _vm._v(" "), _c('tabbar', {
    attrs: {
      "index": _vm.index,
      "items": _vm.items,
      "show": _vm.showTab
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 394 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "about"
    }
  }, [_c('navbar', [_vm._v("关于")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('p', [_vm._v("Vue Mobile Components(VMC)是一套针对移动端开发的组件库，适用于vue@1.0.21+。参考了vux、mint-ui等知名的vue组件库。")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("将使用频度高的组件全局化，直接注册到Vue实例化对象上；")]), _vm._v(" "), _c('li', [_vm._v("全部样式基于LESS，并允许通过覆盖LESS变量的方式快速初始化组件样式；")]), _vm._v(" "), _c('li', [_vm._v("同时，你也可以选择使用SASS，我们同样提供了基于SCSS的样式表；")]), _vm._v(" "), _c('li', [_vm._v("可以通过属性来单独定义每个组件的样式(写到style上，这样便能覆盖在LESS中定义的全局样式)；")]), _vm._v(" "), _c('li', [_vm._v("自定义的`Child`元素，可以实现按需插入元素，同时给予预定义样式；")]), _vm._v(" "), _c('li', [_vm._v("自定义的`SlotItem`元素，可以方便地自定义循环型组件（如轮播图）中显示的内容。")])])])
}]}

/***/ }),
/* 395 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "popup"
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop1 = true
      }
    }
  }, [_vm._v("从上方弹出")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop2 = true
      }
    }
  }, [_vm._v("从下方弹出")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop3 = true
      }
    }
  }, [_vm._v("从下方弹出(固定高度)")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop4 = true
      }
    }
  }, [_vm._v("从左边弹出")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop5 = true
      }
    }
  }, [_vm._v("从左边弹出(固定宽度)")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop6 = true
      }
    }
  }, [_vm._v("从右边弹出")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showPop7 = true
      }
    }
  }, [_vm._v("从右边弹出(固定宽度)")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.back
    }
  }, [_vm._v("返回主页")])], 1), _vm._v(" "), _c('popup', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop1),
      expression: "showPop1",
      arg: "show"
    }],
    attrs: {
      "position": "top",
      "show": _vm.showPop1
    }
  }, [_vm._v("从顶部弹出一些提示文字")]), _vm._v(" "), _c('popup', {
    attrs: {
      "position": "bottom",
      "show": _vm.showPop2
    }
  }, [_c('div', {
    staticClass: "center-middle"
  }, [_c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.showPop2 = false
      }
    }
  }, [_vm._v("关闭弹窗")])], 1)]), _vm._v(" "), _c('popup', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop3),
      expression: "showPop3",
      arg: "show"
    }],
    attrs: {
      "position": "bottom",
      "show": _vm.showPop3,
      "height": "40%"
    }
  }), _vm._v(" "), _c('popup', {
    attrs: {
      "position": "left",
      "show": _vm.showPop4
    }
  }, [_c('div', {
    staticClass: "center-middle"
  }, [_c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.showPop4 = false
      }
    }
  }, [_vm._v("关闭弹窗")])], 1)]), _vm._v(" "), _c('popup', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop5),
      expression: "showPop5",
      arg: "show"
    }],
    attrs: {
      "position": "left",
      "show": _vm.showPop5,
      "width": "90%"
    }
  }), _vm._v(" "), _c('popup', {
    attrs: {
      "position": "right",
      "show": _vm.showPop6
    }
  }, [_c('div', {
    staticClass: "center-middle"
  }, [_c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.showPop6 = false
      }
    }
  }, [_vm._v("关闭弹窗")])], 1)]), _vm._v(" "), _c('popup', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop7),
      expression: "showPop7",
      arg: "show"
    }],
    attrs: {
      "position": "right",
      "show": _vm.showPop7,
      "width": "90%"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 396 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "switch"
    }
  }, [_c('navbar', [_vm._v("开关")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("普通开关")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('toggle', {
    model: {
      value: (_vm.checked1),
      callback: function($$v) {
        _vm.checked1 = $$v
      },
      expression: "checked1"
    }
  }, [_vm._v("是否选择？")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("\n                选中状态: " + _vm._s(_vm.checked1) + "\n            ")])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("默认关闭")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('toggle', {
    attrs: {
      "origin-value": "是"
    },
    model: {
      value: (_vm.checked2),
      callback: function($$v) {
        _vm.checked2 = $$v
      },
      expression: "checked2"
    }
  }, [_vm._v("是否选择？")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("\n                选中的值: " + _vm._s(_vm.checked2) + "\n            ")])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("禁用状态")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('toggle', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.checked3),
      callback: function($$v) {
        _vm.checked3 = $$v
      },
      expression: "checked3"
    }
  }, [_vm._v("是否选择？嘿嘿嘿，不让你选。")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("\n                选中状态: " + _vm._s(_vm.checked3) + "\n            ")])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 397 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "m-input"
    }
  }, [_c('navbar', [_vm._v("数字输入框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请选择购买数量(1-10)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('number', {
    attrs: {
      "min": "1",
      "max": "10"
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value1) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请选择购买数量(任意正整数)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('number', {
    attrs: {
      "min": "1"
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value2) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请输入价格(0.1-10)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('number', {
    attrs: {
      "min": "0.1",
      "max": "10",
      "step": "0.01",
      "width": "auto",
      "decimal": ""
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("输入的值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value3) + " ")])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 398 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "card"
    }
  }, [_c('navbar', [_vm._v("卡片")]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("普通卡片")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._v("\n            头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("尾部")])]), _vm._v(" "), _c('card', {
    attrs: {
      "status": "expand"
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("可折叠的卡片")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._v("\n            头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("尾部")])]), _vm._v(" "), _c('card', {
    attrs: {
      "status": "collapse"
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("可折叠的卡片(默认折叠)")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._v("\n            头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。\n        ")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_vm._v("尾部")])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._v("\n            头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。\n        ")])]), _vm._v(" "), _c('card', {
    staticClass: "with-shadow"
  }, [_c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._v("\n            头和尾的卡片。卡头是用来显示一些额外的信息，或自定义操作卡标题和页脚。\n        ")])])], 1)
},staticRenderFns: []}

/***/ }),
/* 399 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "box"
    }
  }, [_c('navbar', [_vm._v("占位框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('box', {
    attrs: {
      "ratio": "0.4"
    }
  }, [_vm._v("高宽比为0.4的盒子")]), _vm._v(" "), _c('box', {
    attrs: {
      "ratio": "0.4"
    }
  }, [_c('img', {
    attrs: {
      "src": "static/image/box/700×300.png"
    }
  })]), _vm._v(" "), _c('box', {
    attrs: {
      "ratio": "0.4",
      "background": "#2db7f5"
    }
  }, [_vm._v("高宽比为0.4的盒子，带背景色")]), _vm._v(" "), _c('box', {
    attrs: {
      "ratio": "0.4",
      "background": "static/image/box/700×300.png"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 400 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dialog-box', {
    staticClass: "vmc-prompt",
    class: {
      'no-content': !_vm.content
    },
    attrs: {
      "show": _vm.show
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_c('div', [_c('p', [_vm._v(_vm._s(_vm.title))])])]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [(_vm.content) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "prompt-input"
  }, [_c('label', {
    staticClass: "vmc-1px",
    class: {
      invalid: _vm.invalid
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      }
    }
  })]), _vm._v(" "), (!!_vm.message) ? _c('div', {
    staticClass: "error-message"
  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', {
    staticClass: "vmc-1px-right",
    class: _vm.type === 0 ? 'default' : 'primary',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onCancel($event)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.btn1) + "\n        ")]), _vm._v(" "), _c('span', {
    staticClass: "primary",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onConfirm($event)
      }
    }
  }, [_vm._v("\n            " + _vm._s(_vm.btn2) + "\n        ")])])])
},staticRenderFns: []}

/***/ }),
/* 401 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "touch-events",
      rawName: "v-touch-events"
    }],
    staticClass: "vmc-dropload",
    on: {
      "scroll": _vm._onScroll
    }
  }, [(_vm.refresh) ? _c('div', {
    staticClass: "dropload-up",
    class: {
      'animate-disappear': _vm.animateUp
    },
    style: ({
      height: _vm.offsetHeight + 'px'
    })
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.UPINDENT),
      expression: "pullStatus == PULLSTATUS.UPINDENT"
    }],
    staticClass: "dropload-refresh"
  }, [_vm._v(_vm._s(_vm.options.tips.upPull))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.UPREADY),
      expression: "pullStatus == PULLSTATUS.UPREADY"
    }],
    staticClass: "dropload-update"
  }, [_vm._v(_vm._s(_vm.options.tips.upRelease))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.UPLOADING),
      expression: "pullStatus == PULLSTATUS.UPLOADING"
    }],
    staticClass: "dropload-load"
  }, [_c('span', {
    staticClass: "loading"
  }), _vm._v(" " + _vm._s(_vm.options.tips.upLoading))])]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.loadMore) ? _c('div', {
    staticClass: "dropload-down"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.DOWNINDENT),
      expression: "pullStatus == PULLSTATUS.DOWNINDENT"
    }],
    staticClass: "dropload-refresh"
  }, [_vm._v(_vm._s(_vm.options.tips.downPull))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.DOWNLOADING),
      expression: "pullStatus == PULLSTATUS.DOWNLOADING"
    }],
    staticClass: "dropload-load"
  }, [_c('span', {
    staticClass: "loading"
  }), _vm._v(" " + _vm._s(_vm.options.tips.downLoading))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.pullStatus == _vm.PULLSTATUS.NOMORE),
      expression: "pullStatus == PULLSTATUS.NOMORE"
    }],
    staticClass: "dropload-noData"
  }, [_vm._v(_vm._s(_vm.options.tips.downEnd))])]) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading && _vm.useMask),
      expression: "loading && useMask"
    }, {
      name: "stop",
      rawName: "v-stop"
    }],
    staticClass: "dropload-mask"
  })], 2)
},staticRenderFns: []}

/***/ }),
/* 402 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "submit"
    }
  }, [_c('navbar', [_vm._v("提交按钮")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "button-list"
  }, [_c('submit', {
    ref: "submit",
    attrs: {
      "type": "primary"
    },
    on: {
      "submit": _vm.onSubmit
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('submit', {
    attrs: {
      "type": "primary",
      "disabled": ""
    }
  }, [_vm._v("不可点击的提交按钮")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 403 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-spinner-double-bounce",
    style: (_vm.spinnerStyle)
  }, _vm._l((2), function(i) {
    return _c('div', {
      staticClass: "bounce",
      class: 'bounce-' + (i - 1),
      style: (_vm.bounceStyle)
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 404 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "popup-picker"
    }
  }, [_c('navbar', [_vm._v("弹出式选择器")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('row', {
    attrs: {
      "title": "请选择生日："
    },
    on: {
      "click": function($event) {
        _vm.showPop1 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value1))]), _vm._v(" "), _c('row', {
    attrs: {
      "title": "请选择学历："
    },
    on: {
      "click": function($event) {
        _vm.showPop2 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value2))]), _vm._v(" "), _c('row', {
    attrs: {
      "title": "请选择入学时间："
    },
    on: {
      "click": function($event) {
        _vm.showPop3 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value3))]), _vm._v(" "), _c('row', {
    attrs: {
      "title": "请选择所在城市："
    },
    on: {
      "click": function($event) {
        _vm.showPop4 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value4))])], 1), _vm._v(" "), _c('popup-date-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop1),
      expression: "showPop1",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showPop1,
      "tow-digit-month": "",
      "tow-digit-day": ""
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  }), _vm._v(" "), _c('popup-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop2),
      expression: "showPop2",
      arg: "show"
    }],
    attrs: {
      "list": _vm.listEdu,
      "show": _vm.showPop2
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  }), _vm._v(" "), _c('popup-date-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop3),
      expression: "showPop3",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showPop3,
      "year": [1980, 2016],
      "day": false,
      "tow-digit-month": ""
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  }), _vm._v(" "), _c('popup-address-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop4),
      expression: "showPop4",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showPop4,
      "area": false
    },
    model: {
      value: (_vm.value4),
      callback: function($$v) {
        _vm.value4 = $$v
      },
      expression: "value4"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 405 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "badge"
    }
  }, [_c('navbar', [_vm._v("徽标")]), _vm._v(" "), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content"
  }, [_c('span', {
    staticClass: "vmc-badge"
  }, [_vm._v("5")]), _vm._v(" "), _c('span', {
    staticClass: "vmc-badge"
  }, [_vm._v("2017")])])
}]}

/***/ }),
/* 406 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "tabbar"
    }
  }, [_c('navbar', [_vm._v("TabBar")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }), _vm._v(" "), _c('tabbar', {
    attrs: {
      "items": _vm.items
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 407 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "home"
    }
  }, [_c('navbar', [_vm._v("首页")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("表单组件")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('checkbox')
      }
    }
  }, [_vm._v("Checkbox")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('radio')
      }
    }
  }, [_vm._v("Radio")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('button')
      }
    }
  }, [_vm._v("Button")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('submit')
      }
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('switch')
      }
    }
  }, [_vm._v("Switch")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('minput')
      }
    }
  }, [_vm._v("Input (Auto Fix)")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('vinput')
      }
    }
  }, [_vm._v("Input (Prompt)")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('textarea')
      }
    }
  }, [_vm._v("TextArea")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('number')
      }
    }
  }, [_vm._v("Number")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('upload')
      }
    }
  }, [_vm._v("Upload")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('rater')
      }
    }
  }, [_vm._v("Rater")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("全局组件")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('message')
      }
    }
  }, [_vm._v("Message")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('toast')
      }
    }
  }, [_vm._v("Toast")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("UI组件")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('dialog')
      }
    }
  }, [_vm._v("Dialog")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('popup')
      }
    }
  }, [_vm._v("Popup")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('spinner')
      }
    }
  }, [_vm._v("Spinner")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('dropload')
      }
    }
  }, [_vm._v("DropLoad")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('tabbar')
      }
    }
  }, [_vm._v("Tabbar")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('grid')
      }
    }
  }, [_vm._v("Grid")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('box')
      }
    }
  }, [_vm._v("Box")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('justify')
      }
    }
  }, [_vm._v("Justify")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('nowrap')
      }
    }
  }, [_vm._v("Nowrap")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('reddot')
      }
    }
  }, [_vm._v("RedDot")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('badge')
      }
    }
  }, [_vm._v("Badge")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('tabcontrol')
      }
    }
  }, [_vm._v("TabControl")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('progressbar')
      }
    }
  }, [_vm._v("Progressbar")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('icons')
      }
    }
  }, [_vm._v("Icons")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('card')
      }
    }
  }, [_vm._v("Card")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('marquee')
      }
    }
  }, [_vm._v("Marquee")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('actionsheet')
      }
    }
  }, [_vm._v("Action Sheet")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('slider')
      }
    }
  }, [_vm._v("Slider")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('picker')
      }
    }
  }, [_vm._v("Picker")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('datepicker')
      }
    }
  }, [_vm._v("Date Picker")]), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("其它功能")]), _vm._v(" "), _c('cell', {
    on: {
      "click": function($event) {
        _vm.jump('shake')
      }
    }
  }, [_vm._v("Shake")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-number"
  }, [_c('span', {
    staticClass: "vmc-1px",
    on: {
      "click": function($event) {
        _vm._changeCount(0)
      }
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('m-input', {
    style: (_vm.style),
    attrs: {
      "min": _vm.min,
      "max": _vm.max,
      "type": _vm.decimal ? 'number' : 'integer'
    },
    model: {
      value: (_vm.localValue),
      callback: function($$v) {
        _vm.localValue = $$v
      },
      expression: "localValue"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "vmc-1px",
    on: {
      "click": function($event) {
        _vm._changeCount(1)
      }
    }
  }, [_vm._v("+")])], 1)
},staticRenderFns: []}

/***/ }),
/* 409 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-tab-control",
    style: ({
      height: _vm.getHeight
    })
  }, [(_vm.type) ? _c('div', {
    staticClass: "tab-items",
    class: 'tab-items-' + _vm.type,
    style: (_vm.tabStyle)
  }, [_vm._l((_vm.tabList), function(item, $index) {
    return _c('div', {
      staticClass: "tab-item",
      class: {
        active: _vm.shadowIndex === $index
      },
      style: (_vm.shadowIndex === $index ? _vm.itemActiveStyle : _vm.itemStyle),
      on: {
        "click": function($event) {
          _vm.onTabChange($index)
        }
      }
    }, [_vm._t("tabItem", [_vm._v("\n                " + _vm._s(item.title) + "\n            ")], {
      item: item,
      index: $index
    })], 2)
  }), _vm._v(" "), (_vm.type == 1) ? _c('div', {
    staticClass: "tab-line",
    class: 'tab-line-' + _vm.direction,
    style: (_vm.lineStyle)
  }) : _vm._e()], 2) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "touch-events",
      rawName: "v-touch-events"
    }],
    staticClass: "tab-pages",
    class: {
      'auto-height': _vm.autoHeight
    },
    style: (_vm.pageListStyle)
  }, _vm._l((_vm.tabList), function(item, $index) {
    return _c('div', {
      staticClass: "tab-page",
      class: _vm.pageClass($index),
      style: (_vm.pageStyle($index))
    }, [_vm._t(item.name), _vm._v(" "), _vm._t("tabPage", null, {
      item: item,
      index: $index
    })], 2)
  }))])
},staticRenderFns: []}

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "radio"
    }
  }, [_c('navbar', [_vm._v("单选框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("单选框列表")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, _vm._l((_vm.listA), function(item, index) {
    return _c('radio', {
      key: "index",
      attrs: {
        "origin-value": item,
        "inline": ""
      },
      model: {
        value: (_vm.value1),
        callback: function($$v) {
          _vm.value1 = $$v
        },
        expression: "value1"
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value1) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("可禁用的单选框列表")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._l((_vm.listA), function(item, index) {
    return _c('radio', {
      key: "index",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.value2),
        callback: function($$v) {
          _vm.value2 = $$v
        },
        expression: "value2"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('radio', {
    attrs: {
      "origin-value": "选项D",
      "disabled": ""
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  }, [_vm._v("选项D")])], 2), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value2) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("支持关联复选框列表的单选框")]), _vm._v(" "), _c('div', {
    staticClass: "group-box",
    attrs: {
      "name": "content"
    }
  }, [_c('radio', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list1),
      expression: "list1",
      arg: "child"
    }],
    attrs: {
      "origin-value": "A",
      "child-values": _vm.listA,
      "child-checked": _vm.list1
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  }, [_vm._v("选择分组A")]), _vm._v(" "), _vm._l((_vm.listA), function(item, index) {
    return _c('checkbox', {
      key: 'A' + index,
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list1),
        callback: function($$v) {
          _vm.list1 = $$v
        },
        expression: "list1"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('div', {
    staticClass: "separator"
  }), _vm._v(" "), _c('radio', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list2),
      expression: "list2",
      arg: "child"
    }],
    attrs: {
      "origin-value": "B",
      "child-values": _vm.listB,
      "child-checked": _vm.list2
    },
    model: {
      value: (_vm.value3),
      callback: function($$v) {
        _vm.value3 = $$v
      },
      expression: "value3"
    }
  }, [_vm._v("选择分组B")]), _vm._v(" "), _vm._l((_vm.listB), function(item, index) {
    return _c('checkbox', {
      key: 'B' + index,
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list2),
        callback: function($$v) {
          _vm.list2 = $$v
        },
        expression: "list2"
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.value3) + " ")])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 411 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "checkbox"
    }
  }, [_c('navbar', [_vm._v("复选框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("单个复选框")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.checked1),
      callback: function($$v) {
        _vm.checked1 = $$v
      },
      expression: "checked1"
    }
  }, [_vm._v("同意 "), _c('a', {
    attrs: {
      "href": "http://www.baidu.com"
    },
    slot: "extra"
  }, [_vm._v("用户注册协议")])])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选择值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.checked1) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("单个复选框，默认选中")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    model: {
      value: (_vm.checked2),
      callback: function($$v) {
        _vm.checked2 = $$v
      },
      expression: "checked2"
    }
  }, [_vm._v("同意用户注册协议")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选择值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.checked2) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("单个复选框，指定选择结果")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    attrs: {
      "value-list": [1, 0]
    },
    model: {
      value: (_vm.checked3),
      callback: function($$v) {
        _vm.checked3 = $$v
      },
      expression: "checked3"
    }
  }, [_vm._v("同意用户注册协议")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选择值:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.checked3) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("复选框列表，显示在一行")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, _vm._l((_vm.listA), function(item, index) {
    return _c('checkbox', {
      key: "index",
      attrs: {
        "origin-value": item,
        "inline": ""
      },
      model: {
        value: (_vm.list1),
        callback: function($$v) {
          _vm.list1 = $$v
        },
        expression: "list1"
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.list1) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("复选框列表，最多只允许选择两项")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, _vm._l((_vm.listB), function(item, index) {
    return _c('checkbox', {
      key: "index",
      attrs: {
        "origin-value": item,
        "max": "2"
      },
      model: {
        value: (_vm.list2),
        callback: function($$v) {
          _vm.list2 = $$v
        },
        expression: "list2"
      }
    }, [_vm._v(_vm._s(item))])
  })), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.list2) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("可禁用的复选框列表")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    attrs: {
      "origin-value": "选项A",
      "disabled": ""
    },
    model: {
      value: (_vm.list3),
      callback: function($$v) {
        _vm.list3 = $$v
      },
      expression: "list3"
    }
  }, [_vm._v("选项A")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "origin-value": "选项B",
      "disabled": ""
    },
    model: {
      value: (_vm.list3),
      callback: function($$v) {
        _vm.list3 = $$v
      },
      expression: "list3"
    }
  }, [_vm._v("选项B")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "origin-value": "选项C"
    },
    model: {
      value: (_vm.list3),
      callback: function($$v) {
        _vm.list3 = $$v
      },
      expression: "list3"
    }
  }, [_vm._v("选项C")]), _vm._v(" "), _c('checkbox', {
    attrs: {
      "origin-value": "选项D"
    },
    model: {
      value: (_vm.list3),
      callback: function($$v) {
        _vm.list3 = $$v
      },
      expression: "list3"
    }
  }, [_vm._v("选项D")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.list3) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("支持全选的复选框列表")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_vm._l((_vm.listA), function(item, index) {
    return _c('checkbox', {
      key: "index",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list4),
        callback: function($$v) {
          _vm.list4 = $$v
        },
        expression: "list4"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list4),
      expression: "list4",
      arg: "child"
    }],
    attrs: {
      "checked": true,
      "child-values": _vm.listA,
      "child-checked": _vm.list4
    }
  }, [_vm._v("全选")])], 2), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.list4) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("支持分组全选的复选框列表")]), _vm._v(" "), _c('div', {
    staticClass: "group-box",
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list5),
      expression: "list5",
      arg: "child"
    }],
    attrs: {
      "origin-value": "A",
      "child-values": _vm.listA,
      "child-checked": _vm.list5,
      "max": "1"
    },
    model: {
      value: (_vm.list7),
      callback: function($$v) {
        _vm.list7 = $$v
      },
      expression: "list7"
    }
  }, [_vm._v("选择分组A")]), _vm._v(" "), _vm._l((_vm.listA), function(item, index) {
    return _c('checkbox', {
      key: "index",
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list5),
        callback: function($$v) {
          _vm.list5 = $$v
        },
        expression: "list5"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('div', {
    staticClass: "separator"
  }), _vm._v(" "), _c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list6),
      expression: "list6",
      arg: "child"
    }],
    attrs: {
      "origin-value": "B",
      "child-values": _vm.listB,
      "child-checked": _vm.list6,
      "max": "1"
    },
    model: {
      value: (_vm.list7),
      callback: function($$v) {
        _vm.list7 = $$v
      },
      expression: "list7"
    }
  }, [_vm._v("选择分组B")]), _vm._v(" "), _vm._l((_vm.listB), function(item, index) {
    return _c('checkbox', {
      key: "index",
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list6),
        callback: function($$v) {
          _vm.list6 = $$v
        },
        expression: "list6"
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_vm._v("选中的项:")]), _vm._v(" "), _c('span', [_vm._v(" " + _vm._s(_vm.list7) + " ")])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("支持多级分组全选的复选框列表")]), _vm._v(" "), _c('div', {
    staticClass: "group-box",
    attrs: {
      "name": "content"
    }
  }, [_c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list8),
      expression: "list8",
      arg: "child"
    }],
    attrs: {
      "origin-value": "A",
      "child-values": _vm.listA,
      "child-checked": _vm.list8
    },
    model: {
      value: (_vm.list10),
      callback: function($$v) {
        _vm.list10 = $$v
      },
      expression: "list10"
    }
  }, [_vm._v("选择分组A")]), _vm._v(" "), _vm._l((_vm.listA), function(item, index) {
    return _c('checkbox', {
      key: "index",
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list8),
        callback: function($$v) {
          _vm.list8 = $$v
        },
        expression: "list8"
      }
    }, [_vm._v(_vm._s(item))])
  }), _vm._v(" "), _c('div', {
    staticClass: "separator"
  }), _vm._v(" "), _c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list9),
      expression: "list9",
      arg: "child"
    }],
    attrs: {
      "origin-value": "B",
      "child-values": _vm.listB,
      "child-checked": _vm.list9
    },
    model: {
      value: (_vm.list10),
      callback: function($$v) {
        _vm.list10 = $$v
      },
      expression: "list10"
    }
  }, [_vm._v("选择分组B")]), _vm._v(" "), _vm._l((_vm.listB), function(item, index) {
    return _c('checkbox', {
      key: "index",
      staticClass: "box-item",
      attrs: {
        "origin-value": item
      },
      model: {
        value: (_vm.list9),
        callback: function($$v) {
          _vm.list9 = $$v
        },
        expression: "list9"
      }
    }, [_vm._v(_vm._s(item))])
  })], 2), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('span', [_c('checkbox', {
    directives: [{
      name: "sync",
      rawName: "v-sync:child",
      value: (_vm.list10),
      expression: "list10",
      arg: "child"
    }],
    staticClass: "inline-block",
    attrs: {
      "child-values": _vm.listC,
      "child-checked": _vm.list10
    }
  }, [_vm._v("全选")])], 1)])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 412 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "stop",
      rawName: "v-stop.move",
      modifiers: {
        "move": true
      }
    }],
    staticClass: "vmc-mask",
    class: _vm.transparent ? 'transparent' : 'black',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm._onClick($event)
      }
    }
  })
},staticRenderFns: []}

/***/ }),
/* 413 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-progressbar"
  }, [_c('div', {
    staticClass: "bar-outer",
    style: (_vm.outerStyle)
  }, [_c('div', {
    staticClass: "bar-inner"
  }, [_c('div', {
    style: (_vm.innerStyle)
  })])]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 414 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vmc-switch"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.localValue),
      expression: "localValue"
    }],
    attrs: {
      "type": "checkbox",
      "id": _vm.id,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.originValue,
      "checked": Array.isArray(_vm.localValue) ? _vm._i(_vm.localValue, _vm.originValue) > -1 : (_vm.localValue)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.localValue,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = _vm.originValue,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.localValue = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.localValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.localValue = $$c
        }
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.id
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "messages"
    }
  }, [_c('navbar', [_vm._v("提示框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('v-button', {
    on: {
      "click": _vm.showAlert
    }
  }, [_vm._v("打开alert提示框")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.showAlert2
    }
  }, [_vm._v("打开alert提示框")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.showConfirm
    }
  }, [_vm._v("打开confirm提示框")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.showPrompt
    }
  }, [_vm._v("打开prompt提示框")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.showPrompt2
    }
  }, [_vm._v("打开prompt提示框2")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "nowrap"
    }
  }, [_c('navbar', [_vm._v("文本省略")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只显示一行")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "vmc-nowrap"
  }, [_vm._v(_vm._s(_vm.text))])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只显示两行")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "vmc-nowrap-2"
  }, [_vm._v(_vm._s(_vm.text))])])]), _vm._v(" "), _c('card', [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("只显示五行")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('div', {
    staticClass: "vmc-nowrap-5"
  }, [_vm._v(_vm._s(_vm.text))])])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "textarea"
    }
  }, [_c('navbar', [_vm._v("文本框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('card', [_c('div', {
    attrs: {
      "name": "content"
    }
  }, [_c('v-textarea', {
    attrs: {
      "placeholder": "请输入您的评论内容",
      "min": "10",
      "max": "15"
    }
  })], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "dropload"
    }
  }, [_c('navbar', [_vm._v("下拉刷新、上拉加载")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('drop-load', {
    ref: "dropload",
    attrs: {
      "refresh": _vm.refresh,
      "load-more": _vm.loadMore,
      "has-more": _vm.hasMore,
      "auto-load": ""
    }
  }, _vm._l((_vm.count), function(i) {
    return _c('div', {
      staticClass: "list"
    }, [_c('p', {
      class: 'line-' + _vm.classList[i % 2]
    }, [_vm._v("这是第" + _vm._s(i) + "行")])])
  }))], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "icons"
    }
  }, [_c('navbar', [_vm._v("ICONS")]), _vm._v(" "), _c('div', {
    staticClass: "header",
    on: {
      "click": _vm.onTextClick
    }
  }, [_vm._v("\n        " + _vm._s(_vm.value) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('grid', {
    attrs: {
      "list": _vm.icons,
      "columns": "auto"
    },
    scopedSlots: _vm._u([
      ["default", function(props) {
        return [_c('div', {
          staticClass: "icon",
          class: {
            active: _vm.INDEX === props.index
          },
          on: {
            "click": function($event) {
              _vm.onItemClick(props.index, props.item)
            }
          }
        }, [_c('i', {
          class: 'icono-' + props.item
        })])]
      }]
    ])
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('topbar', {
    staticClass: "vmc-navbar",
    style: (_vm.style)
  }, [_vm._t("main", [_c('div', {
    staticClass: "left",
    on: {
      "click": _vm._onBack
    }
  }, [_c('i', {
    staticClass: "icono-caretLeft"
  })]), _vm._v(" "), _c('div', {
    staticClass: "center"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "right",
    on: {
      "click": _vm._onMenu
    }
  })])], 2) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-spinner-triple-bounce",
    style: (_vm.spinnerStyle)
  }, _vm._l((3), function(i) {
    return _c('div', {
      staticClass: "bounce",
      class: 'bounce-' + (i - 1),
      style: (_vm.bounceStyle)
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 422 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-grid"
  }, [_c('ul', {
    class: {
      justify: _vm.justify
    },
    style: (_vm.style)
  }, _vm._l((_vm.list), function(item, index) {
    return _c('li', {
      style: (_vm.itemStyle)
    }, [_vm._t("default", null, {
      item: item,
      index: index
    })], 2)
  }))])
},staticRenderFns: []}

/***/ }),
/* 423 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "marquee"
    }
  }, [_c('navbar', [_vm._v("跑马灯")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('marquee', {
    attrs: {
      "list": _vm.list
    }
  }), _vm._v(" "), _c('marquee', {
    attrs: {
      "list": _vm.list,
      "direction": "down",
      "second": "4",
      "align": "center"
    }
  }), _vm._v(" "), _c('marquee', {
    attrs: {
      "list": "只有一条内容的公告",
      "align": "right",
      "color": "#ff66bb"
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 424 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "vmc-button",
    class: [_vm.type, {
      disabled: _vm.disabled || _vm.disable
    }],
    style: (_vm.style),
    on: {
      "click": _vm._onClick
    }
  }, [_c('div', {
    staticClass: "block"
  }, [_c('span', {
    staticClass: "icon-left"
  }, [_vm._t("icon-left")], 2), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('spinner', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.status === _vm.STATUS.DOING),
      expression: "status === STATUS.DOING"
    }],
    staticClass: "icon-right",
    attrs: {
      "color": "white",
      "size": "20"
    }
  })], 2)])
},staticRenderFns: []}

/***/ }),
/* 425 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "dialog"
    }
  }, [_c('navbar', [_vm._v("对话框")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('v-button', {
    on: {
      "click": function($event) {
        _vm.showDialog1 = true
      }
    }
  }, [_vm._v("显示对话框1")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": function($event) {
        _vm.showDialog2 = true
      }
    }
  }, [_vm._v("显示对话框2")])], 1), _vm._v(" "), _c('dialog-box', {
    attrs: {
      "show": _vm.showDialog1
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请点击以下按钮")]), _vm._v(" "), _c('div', {
    staticClass: "multi-buttons",
    attrs: {
      "name": "content"
    }
  }, [_c('v-button', {
    attrs: {
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.showDialog1 = false
      }
    }
  }, [_vm._v("关闭对话框")]), _vm._v(" "), _c('v-button', {
    attrs: {
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.showDialog1 = false
      }
    }
  }, [_vm._v("关闭对话框")])], 1)]), _vm._v(" "), _c('dialog-box', {
    attrs: {
      "show": _vm.showDialog2
    }
  }, [_c('div', {
    attrs: {
      "name": "header"
    }
  }, [_vm._v("请点击以下按钮")]), _vm._v(" "), _c('div', {
    attrs: {
      "name": "footer"
    }
  }, [_c('v-button', {
    attrs: {
      "type": "default"
    },
    on: {
      "click": function($event) {
        _vm.showDialog2 = false
      }
    }
  }, [_vm._v("关闭对话框")])], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-upload"
  }, [_vm._t("default", [_vm._m(0)]), _vm._v(" "), _c('input', {
    staticClass: "fileInput",
    attrs: {
      "type": "file",
      "name": _vm.name,
      "accept": _vm.accept,
      "multiple": _vm.multiple
    },
    on: {
      "change": _vm._onChange
    }
  })], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-upload-button"
  }, [_c('i', {
    staticClass: "icono-plus"
  })])
}]}

/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "popup-picker"
    }
  }, [_c('navbar', [_vm._v("弹出式选择器")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('row', {
    attrs: {
      "title": "请选择手机品牌："
    },
    on: {
      "click": function($event) {
        _vm.showPop1 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value1))]), _vm._v(" "), _c('row', {
    attrs: {
      "title": "请选择手机型号："
    },
    on: {
      "click": function($event) {
        _vm.showPop2 = true
      }
    }
  }, [_vm._v(_vm._s(_vm.value2))])], 1), _vm._v(" "), _c('popup-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop1),
      expression: "showPop1",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showPop1,
      "list": _vm.list1
    },
    model: {
      value: (_vm.value1),
      callback: function($$v) {
        _vm.value1 = $$v
      },
      expression: "value1"
    }
  }), _vm._v(" "), _c('popup-picker', {
    directives: [{
      name: "sync",
      rawName: "v-sync:show",
      value: (_vm.showPop2),
      expression: "showPop2",
      arg: "show"
    }],
    attrs: {
      "show": _vm.showPop2,
      "list": _vm.list2
    },
    model: {
      value: (_vm.value2),
      callback: function($$v) {
        _vm.value2 = $$v
      },
      expression: "value2"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-cell vmc-1px-top-bottom",
    on: {
      "click": _vm._onClick
    }
  }, [_c('div', {
    staticClass: "cell-title"
  }, [_vm._t("default", [_vm._v(_vm._s(_vm.title))])], 2), _vm._v(" "), (_vm.props_arrow) ? _c('div', {
    staticClass: "cell-arrow"
  }, [_vm._t("arrow", [_c('i', {
    staticClass: "icono-caretRight"
  })])], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "shake"
    }
  }, [_c('navbar', [_vm._v("摇一摇")]), _vm._v(" "), _c('div', [_c('v-button', {
    on: {
      "click": _vm.beginListenShake
    }
  }, [_vm._v("开始监听摇一摇操作")]), _vm._v(" "), _c('v-button', {
    on: {
      "click": _vm.stopListenShake
    }
  }, [_vm._v("停止监听摇一摇操作")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vmc-input-area",
    class: {
      invalid: !_vm.valid
    }
  }, [_c('label', {
    staticClass: "vmc-input",
    class: {
      'vmc-1px': _vm.border
    }
  }, [_c('input', {
    ref: "input",
    attrs: {
      "placeholder": _vm.placeholder,
      "type": _vm.localType
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "keyUp": _vm._onKeyUp,
      "blur": _vm._onBlur,
      "input": _vm._onInput
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.message),
      expression: "message"
    }],
    staticClass: "vmc-input-message"
  }, [_vm._v(_vm._s(_vm.message))])])
},staticRenderFns: []}

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.spinner, {
    tag: "component",
    attrs: {
      "size": _vm.size,
      "color": _vm.color
    }
  })
},staticRenderFns: []}

/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "spinner"
    }
  }, [_c('navbar', [_vm._v("Spinner")]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("blade")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "type": "blade"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("snake")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "type": "snake"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("double-bounce")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "type": "double-bounce"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("triple-bounce")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "type": "triple-bounce"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("fading-circle")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "type": "fading-circle"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("blade")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "color": "#3c78d8",
      "size": "16",
      "type": "blade"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("snake")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "color": "#3c78d8",
      "size": "16",
      "type": "snake"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("double-bounce")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "color": "#3c78d8",
      "size": "16",
      "type": "double-bounce"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("triple-bounce")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "color": "#3c78d8",
      "size": "16",
      "type": "triple-bounce"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "line vmc-1px-bottom"
  }, [_c('span', {
    staticClass: "label"
  }, [_vm._v("fading-circle")]), _vm._v(" "), _c('spinner', {
    attrs: {
      "color": "#3c78d8",
      "size": "16",
      "type": "fading-circle"
    }
  })], 1)])], 1)
},staticRenderFns: []}

/***/ }),
/* 433 */,
/* 434 */,
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_router__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vmc_install__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vmc_install___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vmc_install__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routes__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_routes__);





if (false) {
    Vue.config.productionTip = false;    // 关闭生产提示

    var log = console.log;
    console.log = function() {
        var args = Array.from(arguments);
        args = args.map(arg => {
            try{
                return JSON.parse(JSON.stringify(arg));
            } catch (e) {
                return arg;
            }
        });

        log.apply(console, args);
    };

    console.print = log;

    // 比vConsole功能略牛的调试工具
    require('eruda').init();
}

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vmc_install___default.a);


var router = new __WEBPACK_IMPORTED_MODULE_2_vue_router__["a" /* default */]({ routes: __WEBPACK_IMPORTED_MODULE_4__pages_routes___default.a });

router.beforeEach((t, f, next) => {
    if (t.meta.doc_title) {
        window.document.title = t.meta.doc_title;
    }

    next();
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    el: '#app',
    router,
    render: h => h(__WEBPACK_IMPORTED_MODULE_1__App___default.a)
});


var attachFastClick = __webpack_require__(76);
attachFastClick.attach(document.body);


/***/ })
],[435]);