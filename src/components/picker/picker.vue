<template>
    <div class="vmc-picker">
        <hr class="split-line-top">
        <hr class="split-line-bottom">

        <div class="picker-list" v-for="(data, $p) in shadowList">
            <ul :class="{'dragging': state[$p].dragging}"
                :style="{'transform' : 'translate3d(0,' + state[$p].translateY + 'px, 0)'}"
                v-touch-events="$p">

                <li></li>
                <li></li>
                <li></li>
                <li v-for="(item, $q) in data"
                    :class="{
                                    'current': $q === state[$p].index,
                                    'node1':  Math.abs($q - state[$p].index) == 1,
                                    'node2':  Math.abs($q - state[$p].index) == 2,
                                    'node3':  Math.abs($q - state[$p].index) >= 3
                                }">
                    {{item.name}}
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return []
                }
            },
            value: {
                type: String,
                default: null
            },
            valueType: {
                type: String,
                default: 'value'
            },
            valueSeparator: {
                type: String,
                default: ' '
            }
        },
        data() {
            return {
                state: [],
                target: 0,
                result: {},
                lineHeight: 35
            }
        },
        created() {
            this._initState();
        },
        computed: {
            // 处理后的数据列表
            realList: {
                get() {
                    var list = this.list;

                    if (list.length && !Array.isArray(list[0])) {
                        list = [list];
                    }

                    list = list.map(arr => {
                        return arr.map((o, i) => {
                            if (typeof o !== 'object' || o.name === undefined) {
                                if (o.value === undefined) {
                                    o = {
                                        name: o,
                                        value: o
                                    };
                                } else {
                                    o.name = o.value;
                                }
                            }

                            o.id = i;

                            return o;
                        });
                    });

                    return list;
                }
            },
            // 自定义数据列表
            dataList: {
                get() {
                    return this.realList;
                }
            },
            // 显示的数据列表
            shadowList: {
                get() {
                    if (!this.dataList.length || !this.state.length) return [];

                    var list = [this.dataList[0]];

                    for (let i=1,len=this.dataList.length; i<len; i++) {
                        let parentId = this.state[i-1].selectedId;
                        list[i] = this.dataList[i].filter(item => item.parentId === parentId);
                    }

                    return list;
                }
            },
            // 从值计算索引
            indexList: {
                get() {
                    var indexArray = new Array(this.dataList.length).fill(0);
                    var valueArray = this.valueList;
                    var parentId, index;

                    indexArray = indexArray.map((item, target) => {
                        if (typeof valueArray[target] === 'undefined') {
                            parentId = 0;
                            return item;
                        }

                        index = 0;
                        for (let i=0,len=this.dataList[target].length; i<len; i++) {
                            let data = this.dataList[target][i];
                            if (data[this.valueType] === valueArray[target]) {
                                parentId = i;
                                return index;
                            }

                            if (target === 0) {
                                index++;
                            } else if (data.parentId === parentId) {
                                index++;
                            }
                        }

                        parentId = 0;
                        return item;
                    });

                    return indexArray;
                }
            },
            // 解析值列表
            valueList: {
                get() {
                    return typeof this.value === 'string' && this.value.split(this.valueSeparator || '');
                }
            }
        },
        methods: {
            _initState() {
                var initState = {
                    index: 0,
                    startPosY: 0,
                    translateY: 0,
                    startTranslateY: 0,
                    selectedId: 0,
                    dragging: false
                };

                this.state = Array.from({length: this.dataList.length})
                    .map((item, index) => Object.assign({}, initState));

                var indexList = this.indexList;
                indexList.forEach((item, index) => {
                    if (this.state[index]) {
                        this._setSelectedItem(index, item);
                    }
                });
            },
            _setSelectedItem(target, index) {
                let _state = this.state[target];

                _state.index = index;
                _state.translateY = -index * this.lineHeight;
                _state.selectedId = this.shadowList[target][index].id;

                for (var i=target+1; i<this.shadowList.length; i++) {
                    let selIndex = Math.min(this.state[i].index, this.shadowList[i].length - 1);
                    this.state[i].selectedId = this.shadowList[i][selIndex].id;
                }

                this._onChange();
            },
            _getSelectedItem() {
                var result = {};
                for (let i=0,len=this.shadowList.length; i<len; i++) {
                    let index = this.state[i].index;
                    let total = this.shadowList[i].length - 1;
                    if (index < 0 || index > total) {
                        this._setSelectedItem(i, total);
                    }

                    result[i] = this.shadowList[i][this.state[i].index];
                }

                this.result = Object.assign({}, result);

                return result;
            },
            _getSelectedIndex() {
                let target = this.target;
                let _state = this.state[target];

                let lineHeight = this.lineHeight;
                let maxIndex = this.shadowList[target].length - 1;

                let index = -Math.round(_state.translateY / lineHeight);
                index = Math.max(index, 0);
                index = Math.min(index, maxIndex);

                return index;
            },
            _getSelectedValue() {
                var array = [];
                Object.keys(this.result).forEach(i => array.push(this.result[i][this.valueType]));
                return array.join(String(this.valueSeparator));
            },
            _onTouchStart(pos, target) {
                this.target = target;
                let _state = this.state[target];

                _state.startPosY = pos.y;
                _state.startTranslateY = _state.translateY;
                _state.dragging = true;
            },
            _onTouchMove(offset) {
                let target = this.target;
                let _state = this.state[target];

                _state.translateY = _state.startTranslateY + offset.y;
            },
            _onTouchEnd() {
                let target = this.target;
                let _state = this.state[target];

                _state.dragging = false;

                var index = this._getSelectedIndex();
                this._setSelectedItem(target, index);
            },
            _onChange() {
                var result = this._getSelectedItem();
                var value = this._getSelectedValue();

                this.$emit('on-change', result, value, this.target);
            }
        },
        watch: {
            list() {
                this._initState();
            },
            value(value) {
                if (value !== this._getSelectedValue()) {
                    this._initState();
                }
            }
        }
    }
</script>
