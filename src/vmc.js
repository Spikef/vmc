(function() {
    var vmc = require('./index');

    if (exports === 'object' && typeof module !== 'undefined') {
        module.exports = vmc;
    } else {
        window.VMC = vmc;
    }
}());