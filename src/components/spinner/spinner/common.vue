<script type="text/ecmascript-6">
    export default {
        computed: {
            spinnerSize() {
                return this.size || this.$parent.size || 28;
            },
            spinnerColor() {
                return this.color || this.$parent.color || '#ccc';
            },
            spinnerStyle() {
                return {
                    width: this.spinnerSize + 'px',
                    height: this.spinnerSize + 'px'
                }
            }
        },
        props: {
            size: Number,
            color: String
        }
    };
</script>