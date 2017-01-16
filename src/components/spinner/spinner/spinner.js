export default {
    computed: {
        spinnerSize() {
            return Number(this.size || 28);
        },
        spinnerColor() {
            return this.color || '#ccc';
        },
        spinnerStyle() {
            return {
                width: this.spinnerSize + 'px',
                height: this.spinnerSize + 'px'
            }
        }
    },
    props: {
        size: {
            type: [Number, String],
            default: 28
        },
        color: {
            type: String,
            default: '#ccc'
        }
    }
};