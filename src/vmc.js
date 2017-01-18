(function() {
    var vmc = require('./index');
    vmc.Install = vmc.VMC;
    delete vmc.VMC;

    if (exports === 'object' && typeof module !== 'undefined') {
        module.exports = vmc;
    } else {
        window.VMC = vmc;
    }
}());