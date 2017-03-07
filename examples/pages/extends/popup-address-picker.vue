<script type="es6">
    import { PopupPicker } from 'vmc';

    export default {
        extends: PopupPicker,
        components: {
            Picker: require('./address-picker.vue')
        },
        props: {
            valueType: {
                type: String,
                default: 'name'
            },
            province: {
                type: [Boolean, Array],
                default: true
            },
            city: {
                type: [Boolean, Array],
                default: true
            },
            area: {
                type: [Boolean, Array],
                default: true
            }
        }
    }
</script>
