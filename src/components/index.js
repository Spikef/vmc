// 提示组件
import Alert from './alert';
import Confirm from './confirm';
import Dialog from './dialog';

// 表单组件
import { Checkbox, Checkall } from './checkbox';
import Radio from './radio';
import { mInput } from './input';
import Switch from './switch';

// 界面组件
import { Topbar, Navbar } from './navbar';
import Tabbar from './tabbar';
import Spinner from './spinner';
import Dropload from './dropload';
import Grid from './grid';

module.exports = {
    Alert,
    Confirm,
    Dialog,
    Checkbox,
    Checkall,
    mInput,
    Radio,
    Switch,
    Topbar,
    Navbar,
    Tabbar,
    Spinner,
    Dropload,
    Grid,
    VMC: require('./install'),
    Utils: require('./utils')
};