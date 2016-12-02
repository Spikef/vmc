// 提示组件
import Alert from './alert';
import Confirm from './confirm';
import Dialog from './dialog';

// 表单组件
import { Checkbox, Checkall } from './checkbox';
import Radio from './radio';
import { mInput } from './input';

// 界面组件
import { Topbar, Navbar } from './navbar';
import Tabbar from './tabbar';

module.exports = {
    Alert,
    Confirm,
    Dialog,
    Checkbox,
    Checkall,
    mInput,
    Radio,
    Topbar,
    Navbar,
    Tabbar,
    VMC: require('./install')
};