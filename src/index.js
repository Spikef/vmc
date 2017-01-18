// 样式
require('./styles/vmc.less');

// 全局组件
import Alert from './components/alert';
import Confirm from './components/confirm';
import Dialog from './components/dialog';
import Prompt from './components/prompt';

// 表单组件
import { Checkbox, Checkall } from './components/checkbox';
import Radio from './components/radio';
import { mInput, vInput } from './components/input';
import vTextarea from './components/textarea';
import Number from './components/number';
import Switch from './components/switch';
import vButton from './components/button';
import Submit from './components/submit';
import Rater from './components/rater';

// 界面组件
import { Topbar, Navbar } from './components/navbar';
import Tabbar from './components/tabbar';
import Spinner from './components/spinner';
import DropLoad from './components/dropload';
import Grid from './components/grid';
import Justify from './components/justify';
import TabControl from './components/tabcontrol';
import Cell from './components/cell';
import Card from './components/card';
import Row from './components/row';
import Progressbar from './components/progressbar';

module.exports = {
    Alert,
    Confirm,
    Dialog,
    Prompt,
    Checkbox,
    Checkall,
    mInput,
    vInput,
    vTextarea,
    Number,
    Radio,
    Switch,
    vButton,
    Submit,
    Rater,
    Topbar,
    Navbar,
    Tabbar,
    Spinner,
    DropLoad,
    Grid,
    Justify,
    TabControl,
    Cell,
    Card,
    Row,
    Progressbar,
    VMC: require('./components/install'),
    Utils: require('./utils')
};