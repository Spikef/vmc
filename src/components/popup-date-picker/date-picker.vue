<script type="text/ecmascript-6">
    import Picker from '../picker';

    const DAYSMAP = {
        30: [4, 6, 9, 11],
        31: [1, 3, 5, 7, 8, 10, 12]
    };

    export default {
        extends: Picker,
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
        },
        computed: {
            dataList() {
                var list = [];
                var value = this.valueList || [];
                var from, to, index = 0;

                // 年的数据
                if (this.year !== false) {
                    from = 1900;
                    to = new Date().getFullYear();

                    if (value[index]) {
                        let year = value[index];
                        from = Math.min(from, year);
                        to = Math.max(to, year);
                    }

                    if (Array.isArray(this.year)) {
                        if (this.year[0] !== undefined) from = this.year[0];
                        if (this.year[1] !== undefined) to = this.year[1];
                    }

                    let years = [];
                    for (let i=from;i<=to;i++) {
                        let v = String(i);
                        if (this.towDigitYear) v = v.slice(2);
                        years.push({
                            id: i,
                            name: v,
                            value: v
                        });
                    }

                    list.push(years);
                    index++;
                }

                // 月的数据
                if (this.month !== false) {
                    from = 1;
                    to = 12;

                    if (Array.isArray(this.month)) {
                        if (this.month[0] !== undefined) from = this.month[0];
                        if (this.month[1] !== undefined) to = this.month[1];
                    }

                    let months = [];
                    for (let i=from;i<=to;i++) {
                        let v = String(i);
                        if (this.towDigitMonth) v = ('0' + v).slice(-2);
                        months.push({
                            id: i,
                            name: v,
                            value: v
                        });
                    }

                    list.push(months);
                    index++;
                }

                // 日的数据
                if (this.day !== false) {
                    from = 1;
                    to = 31;

                    if (Array.isArray(this.day)) {
                        if (this.day[0] !== undefined) from = this.day[0];
                        if (this.day[1] !== undefined) to = this.day[1];
                    }

                    let days = [];
                    for (let i=1;i<=31;i++) {
                        let v = String(i);
                        if (this.towDigitDay) v = ('0' + v).slice(-2);
                        days.push({
                            id: i,
                            name: v,
                            value: v
                        });
                    }

                    list.push(days);
                    index++;
                }

                return list;
            },
            shadowList() {
                var last = this.dataList.length - 1;
                var list = this.dataList.slice(0, last);

                // 计算当月天数
                if (this.month && this.day === true && this.result[last - 1] !== undefined) {
                    let year = this.year ? Number(this.result[last - 2].value) : null;
                    let month = Number(this.result[last - 1].value);
                    let day = Number(this.result[last].value);
                    let total;

                    if ( !!~DAYSMAP[30].indexOf(month) ) {
                        total = 30;
                    } else if ( !!~DAYSMAP[31].indexOf(month) ) {
                        total = 31;
                    } else {
                        year = year || new Date().getFullYear();
                        if ((year%4 === 0 ) && (year%100 != 0 || year%400 === 0)) {
                            total = 29;
                        } else {
                            total = 28;
                        }
                    }

                    if (day > total) {
                        this.$nextTick(() => {
                            this._setSelectedItem(last, total - 1);
                        });
                    }

                    list.push(this.dataList[last].slice(0, total));
                } else {
                    list.push([].concat(this.dataList[last]));
                }

                return list;
            },
            // 从值计算索引
            indexList() {
                var indexArray = new Array(this.dataList.length).fill(0);
                var valueArray = this.valueList;

                indexArray = indexArray.map((item, index) => {
                    if (typeof valueArray[index] === 'undefined') return item;

                    for (let i=0,len=this.dataList[index].length; i<len; i++) {
                        let data = this.dataList[index][i];

                        if (Number(data[this.valueType]) === Number(valueArray[index])) {
                            return i;
                        }
                    }

                    return item;
                });

                return indexArray;
            }
        }
    }
</script>