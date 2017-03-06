<template>
    <div class="vmc-dropload" @scroll="_onScroll" v-touch-events>
        <div class="dropload-up" :class="{'animate-disappear': animateUp}" :style="{height: offsetHeight + 'px'}" v-if="refresh">
            <div class="dropload-refresh" v-show="pullStatus == PULLSTATUS.UPINDENT">{{options.tips.upPull}}</div>
            <div class="dropload-update" v-show="pullStatus == PULLSTATUS.UPREADY">{{options.tips.upRelease}}</div>
            <div class="dropload-load" v-show="pullStatus == PULLSTATUS.UPLOADING"><span class="loading"></span> {{options.tips.upLoading}}</div>
        </div>

        <slot></slot>

        <div class="dropload-down" v-if="loadMore">
            <div class="dropload-refresh" v-show="pullStatus == PULLSTATUS.DOWNINDENT">{{options.tips.downPull}}</div>
            <div class="dropload-load" v-show="pullStatus == PULLSTATUS.DOWNLOADING"><span class="loading"></span> {{options.tips.downLoading}}</div>
            <div class="dropload-noData" v-show="pullStatus == PULLSTATUS.NOMORE">{{options.tips.downEnd}}</div>
        </div>

        <div class="dropload-mask" v-show="loading && useMask" v-stop></div>
    </div>
</template>

<script type="text/ecmascript-6">
    const PULLSTATUS = {
        INITIAL: 0,
        UPINDENT: 1,
        UPREADY: 2,
        UPLOADING: 3,
        DOWNINDENT: -1,
        DOWNLOADING: -3,
        NOMORE: -9
    };

    export default {
        props: {
            // 自动加载
            autoLoad: Boolean,
            // 上方距离
            distance: {
                type: Number,
                default: 50
            },
            // 下方距离
            threshold: {
                type: Number,
                default: 20
            },
            // 刷新方法
            refresh: Function,
            // 加载方法
            loadMore: Function,
            // 是否更多
            hasMore: Boolean,
            // 是否遮挡
            useMask: Boolean,
            // 其它配置
            options: {
                type: Object,
                default() {
                    return {
                        tips: {
                            upPull: '↓ 继续下拉刷新',
                            upRelease: '↑ 释放更新列表',
                            upLoading: '正在刷新...',
                            downPull: '↑上拉加载更多',
                            downLoading: '正在加载下一页数据...',
                            downEnd: '没有更多数据了'
                        }
                    }
                }
            }
        },
        data() {
            return {
                PULLSTATUS,
                pullStatus: 0,
                offsetHeight: 0,
                animateUp: false,
                loading: false
            }
        },
        methods: {
            done(error) {
                if (this._direction = 'down') {
                    this.offsetHeight = 0;
                }

                this.loading = false;
                this.pullStatus = PULLSTATUS.INITIAL;

                var that = this;
                setTimeout(() => {
                    if (!that.$el) return;

                    that._scrollHeight = that.$el.scrollHeight;
                    that._offsetHeight = that.$el.offsetHeight;

                    var domDown = that.$el.querySelector('.dropload-down');
                    if (domDown.offsetTop < that._offsetHeight) {
                        if (that.hasMore && that.loadMore && !error) {
                            that._direction = 'up';
                            that.loading = true;
                            that.pullStatus = PULLSTATUS.DOWNLOADING;
                            that.loadMore();
                        }
                    }
                }, 500);
            },
            _onTouchStart(pos) {
                if (this.loading) return;

                this.animateUp = false;

                this._touchScrollTop = this.$el.scrollTop;
            },
            _onTouchMove(offset, pos, value, e) {
                if (this.loading) return;

                this._moveY = offset.y;

                if (this._moveY > 0) {
                    this._direction = 'down';
                } else {
                    this._direction = 'up';
                }

                var absY = Math.abs(this._moveY);

                // 下拉刷新
                if (this.refresh && this._touchScrollTop <=0 && this._direction === 'down') {
                    e.preventDefault();

                    if (absY <= this.distance) {
                        // 开始下拉
                        this.offsetHeight = absY;
                        this.pullStatus = PULLSTATUS.UPINDENT;
                    } else if (absY > this.distance && absY <= this.distance * 2) {
                        // 指定距离 < 下拉距离 < 指定距离*2
                        this.offsetHeight = this.distance + (absY - this.distance) * 0.5;
                        this.pullStatus = PULLSTATUS.UPREADY;
                    } else {
                        this.offsetHeight = this.distance + this.distance * 0.5 + (absY - this.distance * 2) * 0.2;
                    }
                }
            },
            _onTouchEnd() {
                if (this.loading) return;

                var absY = Math.abs(this._moveY);

                if (this.refresh && this._touchScrollTop <=0 && this._direction === 'down') {
                    this.animateUp = true;

                    if (absY > this.distance) {
                        this.offsetHeight = 50;
                        this.pullStatus = PULLSTATUS.UPLOADING;
                        this.loading = true;
                        this.refresh();
                    } else {
                        this.offsetHeight = 0;
                    }

                    this._moveY = 0;
                }
            },
            _onScroll(e) {
                if (this.loading) return;

                this._scrollTop = this.$el.scrollTop;
                if (this.loadMore && this._direction === 'up') {
                    var absY = this._scrollHeight - (this._offsetHeight + this._scrollTop);
                    if (absY > 50 && this.pullStatus === PULLSTATUS.DOWNINDENT) {
                        this.pullStatus = PULLSTATUS.INITIAL;
                    } else if (absY <= 50 && absY > this.threshold && this.hasMore) {
                        this.pullStatus = PULLSTATUS.DOWNINDENT;
                    } else if (absY <= this.threshold) {
                        this.loading = true;

                        if (this.hasMore) {
                            this.pullStatus = PULLSTATUS.DOWNLOADING;
                            this.loadMore();
                        } else {
                            this.pullStatus = PULLSTATUS.NOMORE;
                            var that = this;
                            setTimeout(() => {
                                that.done();
                            }, 1000);
                        }
                    }
                }
            }
        },
        ready() {
            if (this.autoLoad && this.refresh) {
                this.animateUp = true;
                this.offsetHeight = 50;
                this.pullStatus = PULLSTATUS.UPLOADING;
                this.refresh();
            }
        }
    }
</script>