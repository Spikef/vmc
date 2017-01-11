<template>
    <div id="checkbox">
        <navbar>复选框</navbar>

        <div class="content">
            <card>
                <child name="header">复选框列表</child>
                <child name="content">
                    <checkbox :checked.sync="list1" :value="item" v-for="item in list">{{item}}</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list1 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">支持全选的复选框列表</child>
                <child name="content">
                    <checkbox :checked.sync="list2" :value="item" v-for="item in list">{{item}}</checkbox>
                    <checkall :checked.sync="list2" :values="list">全选</checkall>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list2 | json }} </span>
                </child>
            </card>

            <card>
                <child name="header">可禁用的复选框列表</child>
                <child name="content">
                    <checkbox :checked.sync="list3" value="选项A" disabled>选项A</checkbox>
                    <checkbox :checked.sync="list3" value="选项B" disabled>选项B</checkbox>
                    <checkbox :checked.sync="list3" value="选项C">选项C</checkbox>
                    <checkbox :checked.sync="list3" value="选项D">选项D</checkbox>
                </child>
                <child name="footer">
                    <span>选中的项:</span>
                    <span> {{ list3 | json }} </span>
                </child>
            </card>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Navbar, Checkbox, Checkall, Card } from '../../../src';

    export default {
        components: {
            Navbar,
            Checkbox,
            Checkall,
            Card
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
          background: #eeeeee;
      }
  }
</style>