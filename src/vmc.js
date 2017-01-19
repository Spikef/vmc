// 样式，对于webpack方式引用，需要手动引用样式，这样可以方便地覆盖vmc的变量名
require('./styles/vmc.less');

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