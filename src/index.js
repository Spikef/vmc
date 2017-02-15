// 全局组件
import Alert from './components/alert';
import Confirm from './components/confirm';
import Dialog from './components/dialog';
import Prompt from './components/prompt';

// 表单组件
import Checkbox from './components/checkbox';
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
import Popup from './components/popup';
import Marquee from './components/marquee';
import ActionSheet from './components/actionsheet';
import Slider from './components/slider';
import Box from './components/box';
import Picker from './components/picker';
import PopupPicker from './components/popup-picker';
import PopupDatePicker from './components/popup-date-picker';

module.exports = {
    Alert,
    Confirm,
    Dialog,
    Prompt,
    Checkbox,
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
    Popup,
    Marquee,
    ActionSheet,
    Slider,
    Box,
    Picker,
    PopupPicker,
    PopupDatePicker,
    Utils: require('./utils')
};