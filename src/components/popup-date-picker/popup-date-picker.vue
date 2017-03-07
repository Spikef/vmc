<script type="es6">
    import PopupPicker from '../popup-picker';

    export default {
        extends: PopupPicker,
        components: {
            Picker: require('./date-picker.vue')
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
            },
            towDigitYear: Boolean,
            towDigitMonth: Boolean,
            towDigitDay: Boolean
        }
    }
</script>
