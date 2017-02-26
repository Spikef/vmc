require('./polyfill');

export const url = require('./url');
export const env = require('./env');
export const device = require('./device');
export const script = require('./script');

export const getType = function(obj) {
    if (obj === null || obj === undefined) return String(obj);

    var type = typeof obj;
    if (type !== 'object') return type;

    type = Object.prototype.toString.call(obj);
    type = type.substring(8, type.length - 1);
    return type.toLowerCase();
};

export const isType = function(obj, type) {
    return getType(obj) === type;
};

export const isNumeric = function(n) {
    return !Array.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
};

export const isCSSSize = function(value) {
    return /[0-9.]+\s*(px|in|cm|mm|em|rem|pt|pc|ex|ch|vw|vh|vmin|vmax|%)\s*$/.test(value);
};

export const getCSSSize = function(value) {
    if (isCSSSize(value)) {
        return value;
    } else if (isNumeric(value)) {
        return value + 'px';
    } else {
        return value;
    }
};