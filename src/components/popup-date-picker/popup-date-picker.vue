<script type="text/ecmascript-6">
    import DatePicker from './date-picker.vue';
    import PopupPicker from '../popup-picker';

    export default {
        extends: PopupPicker,
        components: {
            Picker: DatePicker
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
            }
        }
    }
</script>