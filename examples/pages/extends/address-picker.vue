<script type="es6">
    import { Picker, Utils } from 'vmc';

    export default {
        extends: Picker,
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
        },
        computed: {
            dataList() {
                var data = this.chinaArea;

                if (!data.length) return [];

                var province = [],
                    city = [],
                    area = [];

                data.forEach(p => {
                    var pl = province.length;

                    province.push({
                        id: pl,
                        name: p.name,
                        value: p.value
                    });

                    p.child && p.child.forEach(c => {
                        var cl = city.length;

                        city.push({
                            id: cl,
                            name: c.name,
                            value: c.value,
                            parentId: pl
                        });

                        if ( c.child ) {
                            c.child.forEach(a => {
                                var al = area.length;

                                area.push({
                                    id: al,
                                    name: a.name,
                                    value: a.value,
                                    parentId: cl
                                });
                            });
                        } else {
                            area.push({
                                id: area.length,
                                name: c.name,
                                value: c.value,
                                parentId: cl
                            });
                        }
                    })
                });

                return [province, city, area];
            },
            valueList() {
                var array = [];
                if ( typeof this.value === 'string' ) array = this.value.split(this.valueSeparator);
                if ( array.length === 2 && /市$/.test(array[0]) ) {
                    array.push(array[1]);
                } else if ( array.length === 1 ) {
                    array.push(array[0]);
                }
                if (this.valueType === 'value') array = array.map(v => parseInt(v));

                return array;
            }
        },
        methods: {
            _getSelectedValue() {
                var array = [];
                Object.keys(this.result).forEach(i => array.push(this.result[i][this.valueType]));
                array = Array.from(new Set(array));
                return array.join(String(this.valueSeparator));
            }
        },
        data() {
            return {
                chinaArea: []
            }
        },
        ready() {
            Utils.script.loadJs('static/js/china-area.js', () => {
                this.chinaArea = window.china_area;
                this.$nextTick(() => {
                    this._initState();
                });
            });
        }
    }
</script>
