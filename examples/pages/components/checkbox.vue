<template>
    <div id="checkbox">
        <navbar>复选框</navbar>

        <div class="content">
            <div class="check-area">
                <div class="title">复选框列表</div>

                <checkbox :checked.sync="list1" :value="item" v-for="item in list">{{item}}</checkbox>
            </div>
            <div class="check-result">
                <span>选中的项:</span>
                <span> {{ list1 | json }} </span>
            </div>

            <div class="check-area">
                <div class="title">支持全选的复选框列表</div>

                <checkbox :checked.sync="list2" :value="item" v-for="item in list">{{item}}</checkbox>
                <checkall :checked.sync="list2" :values="list">全选</checkall>
            </div>
            <div class="check-result">
                <span>选中的项:</span>
                <span> {{ list2 | json }} </span>
            </div>

            <div class="check-area">
                <div class="title">可禁用的复选框列表</div>

                <checkbox :checked.sync="list3" value="选项A" disabled>选项A</checkbox>
                <checkbox :checked.sync="list3" value="选项B" disabled>选项B</checkbox>
                <checkbox :checked.sync="list3" value="选项C">选项C</checkbox>
                <checkbox :checked.sync="list3" value="选项D">选项D</checkbox>
            </div>
            <div class="check-result">
                <span>选中的项:</span>
                <span> {{ list3 | json }} </span>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Checkbox, Checkall } from '../../../src';

    export default {
        components: {
            Navbar,
            Checkbox,
            Checkall
        },
        data() {
            return {
                list: ['选项A', '选项B', '选项C'],
                list1: [],
                list2: [],
                list3: ['选项B']
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
  #checkbox {
      .content {
          height: 100%;
          box-sizing: border-box;
          overflow: auto;
      }

      .check-area {
          padding: 10px;
          background-color: #fafafa;

          .title {
              font-size: 13px;
              padding: 5px 0;
          }
      }

      .check-result {
          padding: 0 10px;
          margin: 15px 0;
          height: 40px;
          line-height: 40px;
          background-color: #fafafa;
      }
  }
</style>