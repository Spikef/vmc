<template>
    <div class="vmc-picker">
        <div class="picker-list" v-for="($p, item) in state">
            <ul :class="{'dragging': item.dragging}"
                @touchstart="_onTouchStart($p, $event)"
                @mousedown="_onTouchStart($p, $event)"
                :style="{'transform' : 'translate3d(0,' + state[$p].translateY + 'px, 0)'}">
                <li></li>
                <li></li>
                <li></li>
                <li v-for="($q, data) in state[$p].data"
                    :class="{
                                    'current': data.value === state[$p].selectedId,
                                    'node1':  Math.abs($q - state[$p].index) == 1,
                                    'node2':  Math.abs($q - state[$p].index) == 2,
                                    'node3':  Math.abs($q - state[$p].index) >= 3
                                }">
                    {{data.name}}
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <hr class="split-line-top">
        <hr class="split-line-bottom">
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            list: {
                type: Array,
                default() {
                    return []
                },
                coerce(array) {
                    if (array.length && !Array.isArray(array[0])) {
                        array = [array];
                    }

                    array = array.map(arr => {
                        return arr.map(o => {
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

                            return o;
                        });
                    });

                    return array;
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
                target: '0',
                state: [],
                delta: 0,
                result: {},
                lineHeight: 35,
                listReady: false,
                valueReady: false
            }
        },
        created() {
            if (this.list && this.list.length) {
                this.listReady = true;
                this.init();
            }
        },
        computed: {
            selValue() {
                var array = [];
                Object.keys(this.result).forEach(i => array.push(this.result[i][this.valueType]));
                return array.join(String(this.valueSeparator));
            }
        },
        methods: {
            init() {
                this.initList();
                this.initValue();
            },
            initList() {
                var initState = JSON.stringify({
                    data: null,
                    selectedId: null,
                    index: 0,
                    startPos: null,
                    translateY: 0,
                    startTranslateY: 0,
                    dragging: false
                });

                this.state = Array.from({length: this.list.length})
                    .map((item, index) => JSON.parse(initState));

                for (let i=0,len=this.state.length; i<len; i++) {
                    this.state[i].data = this.list[i];
                }
            },
            initValue() {
                var initIndex = this.getInitValue();
                var index = initIndex[0];
                this.state[0].index = index;
                this.state[0].translateY = -index * this.lineHeight;
                this.result[0] = this.list[0][index];

                this.filterList(1, false);

                for (let i=1,len=this.state.length; i<len; i++) {
                    index = 0;
                    for (let item of this.state[i].data) {
                        if (item.value === this.state[i].selectedId) {
                            this.state[i].index = index;
                            this.state[i].translateY = -index * this.lineHeight;
                            this.result[i] = item;
                            break;
                        }

                        index++;
                    }
                }
            },
            getInitValue() {
                var indexArray = Array.from({length: this.list.length}).map((item, index) => 0);
                var valueArray = this.parseValue();

                indexArray = indexArray.map((item, index) => {
                    if (typeof valueArray[index] === 'undefined') return item;

                    for (let i=0,len=this.list[index].length; i<len; i++) {
                        let data = this.list[index][i];

                        if (data[this.valueType] === valueArray[index]) {
                            return i;
                        }
                    }

                    return item;
                });

                indexArray.forEach((item, index) => this.state[index].selectedId = this.list[index][item].value);

                return indexArray;
            },
            filterList(start = 1, reset = true) {
                for (let i=start,len=this.state.length; i<len; i++) {
                    let parentId = this.state[i-1].selectedId;
                    this.state[i].data = this.list[i].filter(item => item.parentId === parentId);

                    if (reset) {
                        if (this.state[i].index >= this.state[i].data.length) {
                            this.state[i].index = this.state[i].data.length - 1;
                        }

                        if (this.state[i].index < 0) {
                            this.state[i].index = 0;
                        }

                        this.state[i].selectedId = this.state[i].data[this.state[i].index] && this.state[i].data[this.state[i].index].value;
                        this.state[i].translateY = -this.state[i].index * this.lineHeight;
                    }
                }
            },
            parseValue() {
                return typeof this.value === 'string' && this.value.split(this.valueSeparator || '');
            },
            getSelectedItem(index) {
                let target = this.target;
                let _state = this.state[target];
                _state.selectedId = _state.data[index].value;

                this.filterList(Number(target) + 1);

                var result = {};
                for (let i=0,len=this.state.length; i<len; i++) {
                    result[i] = this.state[i].data[this.state[i].index];
                }

                this.result = result;

                this.$emit('on-change', this.target, JSON.parse(JSON.stringify(this.result)), this.selValue);
            },
            setSelectedItem() {
                let target = this.target;
                let _state = this.state[target];
                let lineHeight = this.lineHeight;
                let total = _state.data.length;
                let goPage = Math.round(Number((_state.translateY / lineHeight).toFixed(1)));
                if (goPage > 0) goPage = 0;
                goPage = total-1 >= Math.abs(goPage) ? goPage : -(total-1);
                let index = Math.abs(goPage);
                _state.index = index;
                this.getSelectedItem(index);
                _state.translateY = goPage * lineHeight;
            },
            _getTouchPos(e) {
                return e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY'];
            },
            _onTouchStart(target, e){
                let _state = this.state[target];
                this.target = target;
                this.delta = 0;
                _state.startPos = this._getTouchPos(e);
                _state.startTranslateY = _state.translateY;
                _state.dragging = true;
                document.addEventListener('touchmove', this._onTouchMove, false);
                document.addEventListener('touchend', this._onTouchEnd, false);
                document.addEventListener('mousemove', this._onTouchMove, false);
                document.addEventListener('mouseup', this._onTouchEnd, false);
            },
            _onTouchMove(e) {
                let target = this.target;
                let _state = this.state[target];
                this.delta = this._getTouchPos(e) - _state.startPos;
                _state.translateY = _state.startTranslateY + this.delta;

                if (Math.abs(this.delta) > 0) {
                    e.preventDefault();
                }
            },
            _onTouchEnd(e) {
                let target = this.target;
                let _state = this.state[target];
                _state.dragging = false;
                this.setSelectedItem();
                document.removeEventListener('touchmove', this._onTouchMove);
                document.removeEventListener('touchend', this._onTouchEnd);
                document.removeEventListener('mousemove', this._onTouchMove);
                document.removeEventListener('mouseup', this._onTouchEnd);
            }
        },
        watch: {
            list() {
                this.listReady = true;
                this.init();
            },
            value() {
                if (this.valueReady) return;
                this.valueReady = true;

                if (this.listReady) {
                    this.initValue();
                }
            }
        }
    }
</script>