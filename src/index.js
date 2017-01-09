// 样式
require('./styles/vmc.less');

// 提示组件
import Alert from './components/alert';
import Confirm from './components/confirm';
import Dialog from './components/dialog';

// 表单组件
import { Checkbox, Checkall } from './components/checkbox';
import Radio from './components/radio';
import vInput from './components/input';
import Switch from './components/switch';
import vButton from './components/button';
import Submit from './components/submit';

// 界面组件
import { Topbar, Navbar } from './components/navbar';
import Tabbar from './components/tabbar';
import Spinner from './components/spinner';
import DropLoad from './components/dropload';
import Grid from './components/grid';
import Justify from './components/justify';
import TabControl from './components/tabcontrol';

module.exports = {
    Alert,
    Confirm,
    Dialog,
    Checkbox,
    Checkall,
    vInput,
    Radio,
    Switch,
    vButton,
    Submit,
    Topbar,
    Navbar,
    Tabbar,
    Spinner,
    DropLoad,
    Grid,
    Justify,
    TabControl,
    VMC: require('./components/install'),
    Utils: require('./utils')
};